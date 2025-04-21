package cronutil

import (
	"fmt"
	"sort"
	"strconv"
	"strings"
	"time"
)

// GenCron 根据开始时间、结束时间、星期和间隔分钟生成 cron 表达式
func GenCron(start, end string, weekdays []string, interval int) ([]string, error) {
	layout := "15:04"
	startTime, err := time.Parse(layout, start)
	if err != nil {
		return nil, fmt.Errorf("invalid start time: %v", err)
	}
	endTime, err := time.Parse(layout, end)
	if err != nil {
		return nil, fmt.Errorf("invalid end time: %v", err)
	}

	startHour, startMin := startTime.Hour(), startTime.Minute()
	endHour, endMin := endTime.Hour(), endTime.Minute()

	var crons []string
	weekdayField := formatWeekdays(weekdays)

	// 起始小时（非整点起始）
	if startMin != 0 {
		var mins []string
		for m := startMin; m < 60; m += interval {
			if startHour == endHour && m > endMin {
				break
			}
			mins = append(mins, strconv.Itoa(m))
		}
		if len(mins) > 0 {
			crons = append(crons, fmt.Sprintf("%s %d * * %s", strings.Join(mins, ","), startHour, weekdayField))
		}
	}

	// 中间小时：从下一个整点到 endHour - 1
	if startHour+1 <= endHour-1 {
		var middleHours []int
		for h := startHour + 1; h < endHour; h++ {
			middleHours = append(middleHours, h)
		}
		if len(middleHours) > 0 {
			minList := buildMinuteList(interval, 0, 59)
			crons = append(crons, fmt.Sprintf("%s %d-%d * * %s", strings.Join(minList, ","), middleHours[0], middleHours[len(middleHours)-1], weekdayField))
		}
	}

	// 结束小时
	if endMin >= 0 {
		mins := buildMinuteList(interval, 0, endMin)
		if len(mins) > 0 {
			crons = append(crons, fmt.Sprintf("%s %d * * %s", strings.Join(mins, ","), endHour, weekdayField))
		}
	}

	return crons, nil
}

func formatWeekdays(weekdays []string) string {
	return strings.Join(weekdays, ",")
}

func buildMinuteList(interval, start, end int) []string {
	var mins []int
	for m := start; m <= end; m += interval {
		mins = append(mins, m)
	}
	sort.Ints(mins)
	var minStrs []string
	for _, m := range mins {
		minStrs = append(minStrs, strconv.Itoa(m))
	}
	return minStrs
}
