<script>
    import { createEventDispatcher } from "svelte";
    import CommonHelper from "@/utils/CommonHelper";
    import tooltip from "@/actions/tooltip";
    import { confirm } from "@/stores/confirmation";
    import { removeError } from "@/stores/errors";
    import Field from "@/components/base/Field.svelte";
    import OverlayPanel from "@/components/base/OverlayPanel.svelte";
    import RedactedPasswordInput from "@/components/base/RedactedPasswordInput.svelte";

    const dispatch = createEventDispatcher();

    const formId = "provider_popup_" + CommonHelper.randomString(5);

    let panel;
    let uiOptions = {};
    let config = {};
    let isNew = false;
    let initialHash = "";
    let maskSecret = false;
    let providerIndex = 0;

    $: hasChanges = JSON.stringify(config) != initialHash;

    $: errPrefix = "oauth2.providers." + providerIndex;

    export function show(showOptions, showConfig, showIndex) {
        providerIndex = showIndex || 0;
        isNew = CommonHelper.isEmpty(showConfig);
        uiOptions = Object.assign({}, showOptions);
        config = Object.assign({}, showConfig);
        maskSecret = !!config.clientId;
        initialHash = JSON.stringify(config);

        panel?.show();
    }

    export function hide() {
        removeError(errPrefix);
        panel?.hide();
    }

    async function submit() {
        dispatch("submit", { uiOptions, config });
        hide();
    }

    async function remove() {
        confirm(
            `确定要从集合中移除"${uiOptions.title}" OAuth2 提供商吗？`,
            () => {
                dispatch("remove", { uiOptions });
                hide();
            },
        );
    }
</script>

<OverlayPanel bind:this={panel} btnClose={false} on:show on:hide>
    <svelte:fragment slot="header">
        <figure class="provider-logo">
            {#if uiOptions.logo}
                <img
                    src="{import.meta.env.BASE_URL}images/oauth2/{uiOptions.logo}"
                    alt="{uiOptions.title} logo"
                />
            {:else}
                <i class="ri-puzzle-line txt-sm txt-hint"></i>
            {/if}
        </figure>
        <h4 class="center txt-break">{uiOptions.title} <small class="txt-hint">({uiOptions.key})</small></h4>
    </svelte:fragment>

    <form id={formId} autocomplete="off" on:submit|preventDefault={() => submit()}>
        <Field class="form-field required" name="{errPrefix}.clientId" let:uniqueId>
            <label for={uniqueId}>客户端 ID</label>
            <input type="text" id={uniqueId} bind:value={config.clientId} />
        </Field>

        <Field class="form-field required" name="{errPrefix}.clientSecret" let:uniqueId>
            <label for={uniqueId}>客户端密钥</label>
            <RedactedPasswordInput id={uniqueId} bind:mask={maskSecret} bind:value={config.clientSecret} />
        </Field>

        {#if uiOptions.optionsComponent}
            <div class="col-lg-12">
                <svelte:component
                    this={uiOptions.optionsComponent}
                    key={errPrefix}
                    bind:config
                    {...uiOptions.optionsComponentProps || {}}
                />
            </div>
        {/if}
    </form>

    <svelte:fragment slot="footer">
        {#if !isNew}
            <button
                type="button"
                class="btn btn-transparent btn-circle btn-hint btn-sm"
                aria-label="移除提供商"
                use:tooltip={{ text: "移除提供商", position: "right" }}
                on:click={remove}
            >
                <i class="ri-delete-bin-7-line" aria-hidden="true" />
            </button>
            <div class="flex-fill"></div>
        {/if}
        <button type="button" class="btn btn-transparent" on:click={hide}>取消</button>
        <button type="submit" form={formId} class="btn btn-expanded" disabled={!hasChanges}>
            <span class="txt">设置提供商配置</span>
        </button>
    </svelte:fragment>
</OverlayPanel>
