<script>
    import { createEventDispatcher } from "svelte";
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";
    import { addErrorToast } from "@/stores/toasts";
    import CodeBlock from "@/components/base/CodeBlock.svelte";
    import OverlayPanel from "@/components/base/OverlayPanel.svelte";
    import CopyIcon from "@/components/base/CopyIcon.svelte";
    import LogLevel from "@/components/logs/LogLevel.svelte";
    import LogDate from "@/components/logs/LogDate.svelte";

    const LOG_REQUEST_KEY = "log_view";

    const dispatch = createEventDispatcher();

    let logPanel;
    let log = {};
    let isLoading = false;

    $: isRequest = log.data?.type == "request";

    export function show(modelOrId) {
        resolveModel(modelOrId).then((model) => {
            log = model;

            onShow();
        });

        return logPanel?.show();
    }

    export function hide() {
        ApiClient.cancelRequest(LOG_REQUEST_KEY);

        return logPanel?.hide();
    }

    async function resolveModel(modelOrId) {
        if (modelOrId && typeof modelOrId !== "string") {
            isLoading = false;
            return modelOrId;
        }

        isLoading = true;

        let model = {};

        try {
            model = await ApiClient.logs.getOne(modelOrId, {
                requestKey: LOG_REQUEST_KEY,
            });
        } catch (err) {
            if (!err.isAbort) {
                hide();
                console.warn("resolveModel:", err);
                addErrorToast(`无法加载ID为"${modelOrId}"的日志`);
            }
        }

        isLoading = false;

        return model;
    }

    const priotizedKeys = [
        "execTime",
        "type",
        "auth",
        "authId",
        "status",
        "method",
        "url",
        "referer",
        "remoteIP",
        "userIP",
        "userAgent",
        "error",
        "details",
    ];

    const priotizedKeyNames = {
        execTime: "执行时间",
        type: "类型",
        auth: "认证",
        authId: "认证ID",
        status: "状态",
        method: "方法",
        url: "URL",
        referer: "来源地址",
        remoteIP: "远程IP",
        userIP: "用户IP",
        userAgent: "用户代理",
        error: "错误",
        details: "详情",
    };

    function extractKeyName(key) {
        return priotizedKeyNames[key] || key;
    }

    function extractKeys(data) {
        if (!data) {
            return [];
        }

        let keys = [];

        for (let key of priotizedKeys) {
            if (typeof data[key] !== "undefined") {
                keys.push(key);
            }
        }

        // append the rest
        const original = Object.keys(data);
        for (let key of original) {
            if (!keys.includes(key)) {
                keys.push(key);
            }
        }

        return keys;
    }

    function downloadJson() {
        CommonHelper.downloadJson(log, "log_" + log.created.replaceAll(/[-:\. ]/gi, "") + ".json");
    }

    function onShow() {
        dispatch("show", log);
    }

    function onHide() {
        dispatch("hide", log);

        log = {};
    }
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<OverlayPanel bind:this={logPanel} class="overlay-panel-lg log-panel" on:hide={onHide}>
    <svelte:fragment slot="header">
        <h4>日志详情</h4>
    </svelte:fragment>

    {#if isLoading}
        <div class="block txt-center">
            <span class="loader" />
        </div>
    {:else if log?.id}
        <table class="table-border">
            <tbody>
                <tr>
                    <td class="min-width txt-hint txt-bold">ID</td>
                    <td>
                        <span class="txt">{log.id}</span>
                        <div class="copy-icon-wrapper">
                            <CopyIcon value={log.id} />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="min-width txt-hint txt-bold">级别</td>
                    <td>
                        <LogLevel level={log.level} />
                        <div class="copy-icon-wrapper">
                            <CopyIcon value={log.level} />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="min-width txt-hint txt-bold">创建时间</td>
                    <td>
                        <LogDate date={log.created} />
                        <div class="copy-icon-wrapper">
                            <CopyIcon value={log.created} />
                        </div>
                    </td>
                </tr>
                {#if !isRequest}
                    <tr>
                        <td class="min-width txt-hint txt-bold">消息</td>
                        <td>
                            {#if log.message}
                                <span class="txt">{log.message}</span>

                                <div class="copy-icon-wrapper">
                                    <CopyIcon value={log.message} />
                                </div>
                            {:else}
                                <span class="txt txt-hint">N/A</span>
                            {/if}
                        </td>
                    </tr>
                {/if}
                {#each extractKeys(log.data) as key}
                    {@const value = log.data[key]}
                    {@const isEmpty = CommonHelper.isEmpty(value)}
                    {@const isJson = !isEmpty && value !== null && typeof value == "object"}
                    <tr>
                        <td class="min-width txt-hint txt-bold" class:v-align-top={isJson}>
                            数据.{extractKeyName(key)}
                        </td>
                        <td>
                            {#if isEmpty}
                                <span class="txt txt-hint">N/A</span>
                            {:else if isJson}
                                <CodeBlock content={JSON.stringify(value, null, 2)} />
                            {:else if key == "error"}
                                <span class="label label-danger log-error-label">
                                    {value}
                                </span>
                            {:else if key == "details"}
                                <CodeBlock content={value} language="html" />
                            {:else}
                                <span class="txt">
                                    {value}{isRequest && key == "execTime" ? "ms" : ""}
                                </span>
                            {/if}

                            {#if !isEmpty}
                                <div class="copy-icon-wrapper">
                                    <CopyIcon {value} />
                                </div>
                            {/if}
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {/if}

    <svelte:fragment slot="footer">
        <button type="button" class="btn btn-transparent" on:click={() => hide()}>
            <span class="txt">关闭</span>
        </button>

        <button type="button" class="btn btn-primary" disabled={isLoading} on:click={() => downloadJson()}>
            <i class="ri-download-line" />
            <span class="txt">下载为JSON</span>
        </button>
    </svelte:fragment>
</OverlayPanel>

<style>
    .log-error-label {
        white-space: normal;
    }
    .copy-icon-wrapper {
        position: absolute;
        right: 12px;
        top: 12px;
        opacity: 0;
        transition: opacity var(--baseAnimationSpeed);
    }
    tr:hover .copy-icon-wrapper {
        opacity: 1;
    }
    td:has(.copy-icon-wrapper) {
        padding-right: 30px;
    }
</style>
