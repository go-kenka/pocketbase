<script>
    import { scale } from "svelte/transition";
    import CommonHelper from "@/utils/CommonHelper";
    import tooltip from "@/actions/tooltip";
    import { errors } from "@/stores/errors";
    import Accordion from "@/components/base/Accordion.svelte";
    import Field from "@/components/base/Field.svelte";
    import RuleField from "@/components/collections/RuleField.svelte";

    export let collection;

    $: hasErrors = !CommonHelper.isEmpty($errors?.mfa);
</script>

<Accordion single>
    <svelte:fragment slot="header">
        <div class="inline-flex">
            <i class="ri-shield-check-line"></i>
            <span class="txt"> 多因素认证 (MFA) </span>
        </div>

        <div class="flex-fill" />

        {#if collection.mfa.enabled}
            <span class="label label-success">已启用</span>
        {:else}
            <span class="label">已禁用</span>
        {/if}

        {#if hasErrors}
            <i
                class="ri-error-warning-fill txt-danger"
                transition:scale={{ duration: 150, start: 0.7 }}
                use:tooltip={{ text: "存在错误", position: "left" }}
            />
        {/if}
    </svelte:fragment>

    <div class="content m-b-sm">
        <p class="txt-bold">此功能目前处于实验阶段，未来可能会发生变化。</p>
        <p>
            多因素认证 (MFA) 要求用户使用两种不同的认证方式（一次性密码、账号密码、OAuth2）进行验证后才能获取认证令牌。
            <a
                href={import.meta.env.PB_MFA_DOCS}
                target="_blank"
                rel="noopener noreferrer"
                class="txt-sm link-hint"
                title="了解更多"
            >
                <em>(了解更多)</em>
            </a>。
        </p>
    </div>

    <div class="grid">
        <Field class="form-field form-field-toggle" name="mfa.enabled" let:uniqueId>
            <input type="checkbox" id={uniqueId} bind:checked={collection.mfa.enabled} />
            <label for={uniqueId}>
                <span class="txt">启用</span>
            </label>
        </Field>

        <div class="content" class:fade={!collection.mfa.enabled}>
            <RuleField
                label="MFA规则"
                formKey="mfa.rule"
                superuserToggle={false}
                disabled={!collection.mfa.enabled}
                placeholder="留空则对所有用户启用MFA"
                {collection}
                bind:rule={collection.mfa.rule}
            >
                <svelte:fragment>
                    <p>此可选规则可用于按账户启用/禁用MFA。</p>
                    <p>
                        例如，要仅对具有非空电子邮件的账户启用MFA，可以设置为
                        <code>email != ''</code>。
                    </p>
                    <p>留空则对所有用户启用MFA。</p>
                </svelte:fragment>
            </RuleField>
        </div>
    </div>
</Accordion>
