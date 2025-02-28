<script>
    import { slide } from "svelte/transition";
    import tooltip from "@/actions/tooltip";
    import Field from "@/components/base/Field.svelte";
    import ObjectSelect from "@/components/base/ObjectSelect.svelte";
    import MultipleValueInput from "@/components/base/MultipleValueInput.svelte";
    import CommonHelper from "@/utils/CommonHelper";

    export let key = "";
    export let config = {};

    const userInfoOptions = [
        { label: "用户信息 URL", value: true },
        { label: "ID 令牌", value: false },
    ];

    let hasUserInfoURL = !!config.userInfoURL;

    if (CommonHelper.isEmpty(config.pkce)) {
        config.pkce = true;
    }

    if (!config.displayName) {
        config.displayName = "OIDC";
    }

    if (!config.extra) {
        config.extra = {};
        hasUserInfoURL = true;
    }

    $: if (typeof hasUserInfoURL !== undefined) {
        refreshUserInfoState();
    }

    function refreshUserInfoState() {
        if (!hasUserInfoURL) {
            config.userInfoURL = "";
            config.extra = config.extra || {};
        } else {
            config.extra = {};
        }
    }
</script>

<Field class="form-field required" name="{key}.displayName" let:uniqueId>
    <label for={uniqueId}>显示名称</label>
    <input type="text" id={uniqueId} bind:value={config.displayName} required />
</Field>

<div class="section-title">端点配置</div>

<Field class="form-field required" name="{key}.authURL" let:uniqueId>
    <label for={uniqueId}>认证 URL</label>
    <input type="url" id={uniqueId} bind:value={config.authURL} required />
</Field>

<Field class="form-field required" name="{key}.tokenURL" let:uniqueId>
    <label for={uniqueId}>令牌 URL</label>
    <input type="url" id={uniqueId} bind:value={config.tokenURL} required />
</Field>

<Field class="form-field m-b-xs" let:uniqueId>
    <label for={uniqueId}>用户信息获取方式</label>
    <ObjectSelect id={uniqueId} items={userInfoOptions} bind:keyOfSelected={hasUserInfoURL} />
</Field>

<div class="sub-panel m-b-base">
    {#if hasUserInfoURL}
        <div class="content" transition:slide={{ delay: 10, duration: 150 }}>
            <Field class="form-field required" name="{key}.userInfoURL" let:uniqueId>
                <label for={uniqueId}>用户信息 URL</label>
                <input type="url" id={uniqueId} bind:value={config.userInfoURL} required />
            </Field>
        </div>
    {:else}
        <div class="content" transition:slide={{ delay: 10, duration: 150 }}>
            <p class="txt-hint txt-sm m-b-xs">
                <em>
                    以下字段为可选项，因为解析的 <code>id_token</code> 是可信的服务器代码->令牌交换响应的直接结果。
                </em>
            </p>
            <Field class="form-field m-b-xs" name="{key}.extra.jwksURL" let:uniqueId>
                <label for={uniqueId}>
                    <span class="txt">JWKS 验证 URL</span>
                    <i
                        class="ri-information-line link-hint"
                        use:tooltip={{
                            text: "用于公共令牌验证密钥的 URL。",
                            position: "top",
                        }}
                    />
                </label>
                <input type="url" id={uniqueId} bind:value={config.extra.jwksURL} />
            </Field>
            <Field class="form-field" name="{key}.extra.issuers" let:uniqueId>
                <label for={uniqueId}>
                    <span class="txt">颁发者</span>
                    <i
                        class="ri-information-line link-hint"
                        use:tooltip={{
                            text: "用于验证令牌声明的已接受颁发者列表，多个值用逗号分隔。",
                            position: "top",
                        }}
                    />
                </label>
                <MultipleValueInput id={uniqueId} bind:value={config.extra.issuers} />
            </Field>
        </div>
    {/if}
</div>

<Field class="form-field" name="{key}.pkce" let:uniqueId>
    <input type="checkbox" id={uniqueId} bind:checked={config.pkce} />
    <label for={uniqueId}>
        <span class="txt">启用 PKCE</span>
        <i
            class="ri-information-line link-hint"
            use:tooltip={{
                text: "建议始终启用此选项，如果提供商不支持 PKCE，它们通常会忽略额外的查询参数。",
                position: "right",
            }}
        />
    </label>
</Field>
