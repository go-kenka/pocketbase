<script>
    import tooltip from "@/actions/tooltip";
    import Field from "@/components/base/Field.svelte";
    import SecretGeneratorButton from "@/components/base/SecretGeneratorButton.svelte";
    import { confirm } from "@/stores/confirmation";
    import { removeError } from "@/stores/errors";
    import CommonHelper from "@/utils/CommonHelper";
    import { slide } from "svelte/transition";

    export let record;
    export let collection;
    export let isNew = !record?.id;

    $: isSuperusers = collection?.name == "_superusers";

    $: emailField = collection?.fields?.find((f) => f.name == "email") || {};

    $: passwordField = collection?.fields?.find((f) => f.name == "password") || {};

    let changePasswordToggle = false;

    $: if (!changePasswordToggle) {
        record.password = undefined;
        record.passwordConfirm = undefined;
        removeError("password");
        removeError("passwordConfirm");
    }
</script>

<div class="grid m-b-base">
    <div class="col-lg-12">
        <Field class="form-field {emailField?.required ? 'required' : ''}" name="email" let:uniqueId>
            <label for={uniqueId}>
                <i class={CommonHelper.getFieldTypeIcon("email")} />
                <span class="txt">邮箱</span>
            </label>

            {#if !isSuperusers}
                <div class="form-field-addon email-visibility-addon">
                    <button
                        type="button"
                        class="btn btn-sm btn-transparent {record.emailVisibility
                            ? 'btn-success'
                            : 'btn-hint'}"
                        use:tooltip={{
                            text: "设置邮箱为公开或私密",
                            position: "top-right",
                        }}
                        on:click|preventDefault={() => (record.emailVisibility = !record.emailVisibility)}
                    >
                        <span class="txt">公开: {record.emailVisibility ? "开启" : "关闭"}</span>
                    </button>
                </div>
            {/if}

            <!-- svelte-ignore a11y-autofocus -->
            <input
                type="email"
                autofocus={isNew}
                autocomplete="off"
                id={uniqueId}
                required={emailField.required}
                bind:value={record.email}
            />
        </Field>
    </div>

    <div class="col-lg-12">
        {#if !isNew}
            <Field class="form-field form-field-toggle" name="verified" let:uniqueId>
                <input type="checkbox" id={uniqueId} bind:checked={changePasswordToggle} />
                <label for={uniqueId}>修改密码</label>
            </Field>
        {/if}

        {#if isNew || changePasswordToggle}
            <div class="block" transition:slide={{ duration: 150 }}>
                <div class="grid" class:p-t-xs={changePasswordToggle}>
                    <div class="col-sm-6">
                        <Field class="form-field required" name="password" let:uniqueId>
                            <label for={uniqueId}>
                                <i class="ri-lock-line" />
                                <span class="txt">密码</span>
                            </label>
                            <input
                                type="password"
                                autocomplete="new-password"
                                id={uniqueId}
                                required
                                bind:value={record.password}
                            />
                            <div class="form-field-addon">
                                <SecretGeneratorButton length={Math.max(15, passwordField.min || 0)} />
                            </div>
                        </Field>
                    </div>
                    <div class="col-sm-6">
                        <Field class="form-field required" name="passwordConfirm" let:uniqueId>
                            <label for={uniqueId}>
                                <i class="ri-lock-line" />
                                <span class="txt">确认密码</span>
                            </label>
                            <input
                                type="password"
                                autocomplete="new-password"
                                id={uniqueId}
                                required
                                bind:value={record.passwordConfirm}
                            />
                        </Field>
                    </div>
                </div>
            </div>
        {/if}
    </div>

    {#if !isSuperusers}
        <div class="col-lg-12">
            <Field class="form-field form-field-toggle" name="verified" let:uniqueId>
                <input
                    type="checkbox"
                    id={uniqueId}
                    bind:checked={record.verified}
                    on:change|preventDefault={(e) => {
                        if (isNew) {
                            return; // no confirmation required
                        }
                        confirm(
                            `确定要手动更改账户验证状态吗？`,
                            () => {},
                            () => {
                                record.verified = !e.target.checked;
                            },
                        );
                    }}
                />
                <label for={uniqueId}>已验证</label>
            </Field>
        </div>
    {/if}
</div>

<style>
    .email-visibility-addon ~ input {
        padding-right: 100px;
    }
</style>
