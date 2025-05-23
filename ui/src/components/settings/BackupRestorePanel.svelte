<script>
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";
    import { setErrors } from "@/stores/errors";
    import { addErrorToast } from "@/stores/toasts";
    import OverlayPanel from "@/components/base/OverlayPanel.svelte";
    import Field from "@/components/base/Field.svelte";
    import CopyIcon from "@/components/base/CopyIcon.svelte";
    import { onDestroy } from "svelte";

    const formId = "backup_restore_" + CommonHelper.randomString(5);

    let panel;
    let name = "";
    let nameConfirm = "";
    let isSubmitting = false;
    let reloadTimeoutId = null;

    $: canSubmit = nameConfirm != "" && name == nameConfirm;

    export function show(backupName) {
        setErrors({});
        nameConfirm = "";
        name = backupName;
        isSubmitting = false;
        panel?.show();
    }

    export function hide() {
        return panel?.hide();
    }

    async function submit() {
        if (!canSubmit || isSubmitting) {
            return;
        }

        clearTimeout(reloadTimeoutId);

        isSubmitting = true;

        try {
            await ApiClient.backups.restore(name);

            // optimistic restore page reload
            reloadTimeoutId = setTimeout(() => {
                window.location.reload();
            }, 2000);
        } catch (err) {
            clearTimeout(reloadTimeoutId);

            if (!err?.isAbort) {
                isSubmitting = false;
                addErrorToast(err.response?.message || err.message);
            }
        }
    }

    onDestroy(() => {
        clearTimeout(reloadTimeoutId);
    });
</script>

<OverlayPanel
    bind:this={panel}
    class="backup-restore-panel"
    overlayClose={!isSubmitting}
    escClose={!isSubmitting}
    beforeHide={() => !isSubmitting}
    popup
    on:show
    on:hide
>
    <svelte:fragment slot="header">
        <h4 class="popup-title txt-ellipsis">恢复 <strong>{name}</strong></h4>
    </svelte:fragment>

    <div class="alert alert-danger">
        <div class="icon">
            <i class="ri-alert-line" />
        </div>
        <div class="content">
            <p class="txt-bold">请谨慎操作，仅使用可信任的备份文件！</p>

            <p>备份恢复功能目前处于实验阶段，仅支持UNIX系统。</p>
            <p>
                恢复操作将尝试用备份中的数据替换您现有的 <code>pb_data</code> 目录，并重启应用程序。
            </p>
            <p>
                这意味着恢复成功后，您的所有数据（包括应用设置、用户、超级用户等）都将被备份中的数据替换。
            </p>
            <p>
                如果备份文件无效或不兼容（例如缺少 <code>data.db</code> 文件），则不会进行任何操作。
            </p>
        </div>
    </div>

    <div class="content m-b-xs">
        请输入备份名称
        <div class="label">
            <span class="txt">{name}</span>
            <CopyIcon value={name} />
        </div>
        以确认：
    </div>

    <form id={formId} autocomplete="off" on:submit|preventDefault={submit}>
        <Field class="form-field required m-0" name="name" let:uniqueId>
            <label for={uniqueId}>备份名称</label>
            <input type="text" id={uniqueId} required bind:value={nameConfirm} />
        </Field>
    </form>

    <svelte:fragment slot="footer">
        <button type="button" class="btn btn-transparent" on:click={hide} disabled={isSubmitting}>
            取消
        </button>
        <button
            type="submit"
            form={formId}
            class="btn btn-expanded"
            class:btn-loading={isSubmitting}
            disabled={!canSubmit || isSubmitting}
        >
            <span class="txt">恢复备份</span>
        </button>
    </svelte:fragment>
</OverlayPanel>

<style>
    .popup-title {
        max-width: 80%;
    }
</style>
