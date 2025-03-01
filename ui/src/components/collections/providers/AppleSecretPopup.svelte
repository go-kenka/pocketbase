<script>
    import { createEventDispatcher } from "svelte";
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";
    import { addSuccessToast } from "@/stores/toasts";
    import { setErrors } from "@/stores/errors";
    import tooltip from "@/actions/tooltip";
    import OverlayPanel from "@/components/base/OverlayPanel.svelte";
    import Field from "@/components/base/Field.svelte";

    const dispatch = createEventDispatcher();

    const formId = "apple_secret_" + CommonHelper.randomString(5);

    const maxDuration = 15777000; // 6 months

    let panel;
    let clientId;
    let teamId;
    let keyId;
    let privateKey;
    let duration;
    let isSubmitting = false;

    $: canSubmit = true;

    export function show(config = {}) {
        clientId = config.clientId || "";
        teamId = config.teamId || "";
        keyId = config.keyId || "";
        privateKey = config.privateKey || "";
        duration = config.duration || maxDuration;

        setErrors({}); // reset any previous errors

        panel?.show();
    }

    export function hide() {
        return panel?.hide();
    }

    async function submit() {
        isSubmitting = true;

        try {
            const result = await ApiClient.settings.generateAppleClientSecret(
                clientId,
                teamId,
                keyId,
                privateKey.trim(),
                duration,
            );

            isSubmitting = false;

            addSuccessToast("成功生成客户端密钥。");

            dispatch("submit", result);

            panel?.hide();
        } catch (err) {
            ApiClient.error(err);
        }

        isSubmitting = false;
    }
</script>

<OverlayPanel
    bind:this={panel}
    overlayClose={!isSubmitting}
    escClose={!isSubmitting}
    beforeHide={() => !isSubmitting}
    popup
    on:show
    on:hide
>
    <svelte:fragment slot="header">
        <h4 class="center txt-break">生成 Apple 客户端密钥</h4>
    </svelte:fragment>

    <form id={formId} autocomplete="off" on:submit|preventDefault={() => submit()}>
        <div class="grid">
            <div class="col-lg-6">
                <Field class="form-field required" name="clientId" let:uniqueId>
                    <label for={uniqueId}>客户端 ID</label>
                    <input type="text" id={uniqueId} bind:value={clientId} required />
                </Field>
            </div>
            <div class="col-lg-6">
                <Field class="form-field required" name="teamId" let:uniqueId>
                    <label for={uniqueId}>团队 ID</label>
                    <input type="text" id={uniqueId} bind:value={teamId} required />
                </Field>
            </div>
            <div class="col-lg-6">
                <Field class="form-field required" name="keyId" let:uniqueId>
                    <label for={uniqueId}>密钥 ID</label>
                    <input type="text" id={uniqueId} bind:value={keyId} required />
                </Field>
            </div>
            <div class="col-lg-6">
                <Field class="form-field required" name="duration" let:uniqueId>
                    <label for={uniqueId}>
                        <span class="txt">有效期（秒）</span>
                        <i
                            class="ri-information-line link-hint"
                            use:tooltip={{
                                text: `最长 ${maxDuration} 秒（约 ${(maxDuration / (60 * 60 * 24 * 30)) << 0} 个月）`,
                                position: "top",
                            }}
                        />
                    </label>
                    <input type="number" id={uniqueId} max={maxDuration} bind:value={duration} required />
                </Field>
            </div>

            <Field class="form-field required" name="privateKey" let:uniqueId>
                <label for={uniqueId}>私钥</label>
                <textarea
                    id={uniqueId}
                    required
                    rows="8"
                    placeholder={"-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----"}
                    bind:value={privateKey}
                />
                <div class="help-block">
                    该密钥不会存储在服务器上，仅用于生成签名的 JWT。
                </div>
            </Field>
        </div>
    </form>

    <svelte:fragment slot="footer">
        <button type="button" class="btn btn-transparent" on:click={hide} disabled={isSubmitting}
            >关闭</button
        >
        <button
            type="submit"
            form={formId}
            class="btn btn-expanded"
            class:btn-loading={isSubmitting}
            disabled={!canSubmit || isSubmitting}
        >
            <i class="ri-key-line" />
            <span class="txt">生成并设置密钥</span>
        </button>
    </svelte:fragment>
</OverlayPanel>
