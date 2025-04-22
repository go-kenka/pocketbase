package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"time"

	"github.com/go-kenka/pocketbase"
	"github.com/go-kenka/pocketbase/apis"
	"github.com/go-kenka/pocketbase/core"
	"github.com/go-kenka/pocketbase/examples/base/cronutil"
	"github.com/go-kenka/pocketbase/plugins/ghupdate"
	"github.com/go-kenka/pocketbase/plugins/jsvm"
	"github.com/go-kenka/pocketbase/plugins/migratecmd"
	"github.com/go-kenka/pocketbase/tools/hook"
	"github.com/mitchellh/mapstructure"
)

func main() {
	app := pocketbase.New()

	// ---------------------------------------------------------------
	// Optional plugin flags:
	// ---------------------------------------------------------------

	var hooksDir string
	app.RootCmd.PersistentFlags().StringVar(
		&hooksDir,
		"hooksDir",
		"",
		"the directory with the JS app hooks",
	)

	var hooksWatch bool
	app.RootCmd.PersistentFlags().BoolVar(
		&hooksWatch,
		"hooksWatch",
		true,
		"auto restart the app on pb_hooks file change; it has no effect on Windows",
	)

	var hooksPool int
	app.RootCmd.PersistentFlags().IntVar(
		&hooksPool,
		"hooksPool",
		15,
		"the total prewarm goja.Runtime instances for the JS app hooks execution",
	)

	var migrationsDir string
	app.RootCmd.PersistentFlags().StringVar(
		&migrationsDir,
		"migrationsDir",
		"",
		"the directory with the user defined migrations",
	)

	var automigrate bool
	app.RootCmd.PersistentFlags().BoolVar(
		&automigrate,
		"automigrate",
		true,
		"enable/disable auto migrations",
	)

	var publicDir string
	app.RootCmd.PersistentFlags().StringVar(
		&publicDir,
		"publicDir",
		defaultPublicDir(),
		"the directory to serve static files",
	)

	var indexFallback bool
	app.RootCmd.PersistentFlags().BoolVar(
		&indexFallback,
		"indexFallback",
		true,
		"fallback the request to index.html on missing static path, e.g. when pretty urls are used with SPA",
	)

	app.RootCmd.ParseFlags(os.Args[1:])

	// ---------------------------------------------------------------
	// Plugins and hooks:
	// ---------------------------------------------------------------

	// load jsvm (pb_hooks and pb_migrations)
	jsvm.MustRegister(app, jsvm.Config{
		MigrationsDir: migrationsDir,
		HooksDir:      hooksDir,
		HooksWatch:    hooksWatch,
		HooksPoolSize: hooksPool,
	})

	// migrate command (with js templates)
	migratecmd.MustRegister(app, app.RootCmd, migratecmd.Config{
		TemplateLang: migratecmd.TemplateLangJS,
		Automigrate:  automigrate,
		Dir:          migrationsDir,
	})

	// GitHub selfupdate
	ghupdate.MustRegister(app, app.RootCmd, ghupdate.Config{})

	// 设置任务时区为上海
	timezone, _ := time.LoadLocation("Asia/Shanghai")
	app.Cron().SetTimezone(timezone)

	// static route to serves files from the provided public dir
	// (if publicDir exists and the route path is not already defined)
	app.OnServe().Bind(&hook.Handler[*core.ServeEvent]{
		Func: func(e *core.ServeEvent) error {
			if !e.Router.HasRoute(http.MethodGet, "/{path...}") {
				e.Router.GET("/{path...}", apis.Static(os.DirFS(publicDir), indexFallback))
			}

			return e.Next()
		},
		Priority: 999, // execute as latest as possible to allow users to provide their own route
	})

	// app.OnBootstrap().BindFunc(func(e *core.BootstrapEvent) error {
	// 	if err := e.Next(); err != nil {
	// 		return err
	// 	}
	// 	// 获取所有计划
	// 	records, err := app.FindAllRecords("plans")
	// 	if err != nil {
	// 		log.Println("find all records failed: ", err)
	// 		return err
	// 	}

	// 	// 遍历所有计划
	// 	for _, record := range records {
	// 		data := record.FieldsData()
	// 		var plan Plan
	// 		mapstructure.Decode(data, &plan)
	// 		log.Println("plan:", plan)

	// 		// 生成cron表达式
	// 		crons := plan.CronStr()
	// 		log.Println("cronStr:", crons)
	// 		// 添加任务
	// 		for i, cronStr := range crons {
	// 			// 添加任务
	// 			app.Cron().MustAdd(plan.ID+strconv.FormatInt(int64(i+1), 10), cronStr, func() {
	// 				plan.Notify(app)
	// 			})
	// 		}
	// 	}
	// 	return nil
	// })

	app.OnRecordAfterCreateSuccess().BindFunc(func(e *core.RecordEvent) error {
		col := e.Record.Collection()
		if col.Name == "plans" {
			data := e.Record.FieldsData()
			var plan Plan
			mapstructure.Decode(data, &plan)
			log.Println("create plan:", plan)

			// 生成cron表达式
			crons := plan.CronStr()
			log.Println("cronStr:", crons)

			// 添加任务
			for i, cronStr := range crons {
				// 添加任务
				app.Cron().MustAdd(plan.ID+strconv.FormatInt(int64(i+1), 10), cronStr, func() {
					plan.Notify(app)
				})
			}
			return e.Next()
		}

		log.Println("Record created:", e.Record)
		return e.Next()
	})

	app.OnRecordAfterUpdateSuccess().BindFunc(func(e *core.RecordEvent) error {
		col := e.Record.Collection()
		if col.Name == "plans" {
			data := e.Record.FieldsData()
			var plan Plan
			mapstructure.Decode(data, &plan)
			log.Println("create plan:", plan)

			// 生成cron表达式
			crons := plan.CronStr()
			log.Println("cronStr:", crons)

			// 判断任务是否存在
			jobs := app.Cron().Jobs()
			for _, job := range jobs {
				if strings.HasPrefix(job.Id(), plan.ID) {
					// 删除任务
					app.Cron().Remove(job.Id())
					continue
				}
			}

			for i, cronStr := range crons {
				// 添加任务
				app.Cron().MustAdd(plan.ID+strconv.FormatInt(int64(i+1), 10), cronStr, func() {
					plan.Notify(app)
				})
			}

			return e.Next()
		}

		log.Println("Record created:", e.Record)
		return e.Next()
	})

	app.OnRecordAfterDeleteSuccess().BindFunc(func(e *core.RecordEvent) error {
		col := e.Record.Collection()
		if col.Name == "plans" {
			// 判断任务是否存在
			jobs := app.Cron().Jobs()
			for _, job := range jobs {
				if strings.HasPrefix(job.Id(), e.Record.Id) {
					// 删除任务
					app.Cron().Remove(job.Id())
					continue
				}
			}
			return e.Next()
		}
		return e.Next()
	})

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}

// the default pb_public dir location is relative to the executable
func defaultPublicDir() string {
	if strings.HasPrefix(os.Args[0], os.TempDir()) {
		// most likely ran with go run
		return "./pb_public"
	}

	return filepath.Join(os.Args[0], "../pb_public")
}

type Plan struct {
	CreatedBy  string   `mapstructure:"created_by"`
	EndTime    string   `mapstructure:"end_time"`
	ID         string   `mapstructure:"id"`
	Interval   int      `mapstructure:"interval"`
	Name       string   `mapstructure:"name"`
	StartTime  string   `mapstructure:"start_time"`
	TaskId     string   `mapstructure:"task_id"`
	UseAlarm   bool     `mapstructure:"use_alarm"`
	UseEmail   bool     `mapstructure:"use_email"`
	UseWebhook bool     `mapstructure:"use_webhook"`
	Weekday    []string `mapstructure:"weekday"`
}

func (p *Plan) Notify(app *pocketbase.PocketBase) error {
	log.Println("job running:", p.ID)

	// 发送邮件
	if p.UseEmail {
		log.Println("send email:", p.ID)
	}

	// 发送webhook
	if p.UseWebhook {
		log.Println("send webhook:", p.ID)
	}

	// 发送告警
	if p.UseAlarm {
		collection, err := app.FindCollectionByNameOrId("notifications")
		if err != nil {
			log.Println("notifications not found: ", err)
			return err
		}

		record := core.NewRecord(collection)

		record.Set("user_id", p.CreatedBy)
		record.Set("message", fmt.Sprintf("plan %s is running", p.ID))

		// field type specific modifiers can also be used
		record.Set("extend", map[string]any{"plan": p.ID})
		record.Set("hasRead", false)

		// validate and persist
		// (use SaveNoValidate to skip fields validation)
		err = app.Save(record)
		if err != nil {
			log.Println("save record failed: ", err)
			return err
		}
	}
	return nil
}

// CronStr 生成cron表达式
func (p *Plan) CronStr() []string {
	// 通过weekday和interval以及start_time和end_time生成cron表达式
	// 1. 生成weekday的格式是0-6
	// 2. 生成interval的单位是分钟
	// 3. 生成start_time和end_time的格式是00:00，24小时制，只支持小时级别的间隔
	// 4. 生成cron表达式的格式是0 0 * * *

	crons, err := cronutil.GenCron(p.StartTime, p.EndTime, p.Weekday, p.Interval)
	if err != nil {
		log.Println("gen cron failed: ", err)
		return nil
	}
	return crons
}
