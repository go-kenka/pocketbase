<script>
    import tooltip from "@/actions/tooltip";
    import Field from "@/components/base/Field.svelte";
    import MimeTypeSelectOption from "@/components/base/MimeTypeSelectOption.svelte";
    import MultipleValueInput from "@/components/base/MultipleValueInput.svelte";
    import ObjectSelect from "@/components/base/ObjectSelect.svelte";
    import Toggler from "@/components/base/Toggler.svelte";
    import SchemaField from "@/components/collections/schema/SchemaField.svelte";
    import baseMimeTypesList from "@/mimes.js";
    import CommonHelper from "@/utils/CommonHelper";

    export let field;
    export let key = "";

    const isSingleOptions = [
        { label: "单个", value: true },
        { label: "多个", value: false },
    ];

    let mimeTypesList = baseMimeTypesList.slice();
    let isSingle = field.maxSelect <= 1;
    let oldIsSingle = isSingle;

    $: if (typeof field.maxSelect == "undefined") {
        loadDefaults();
    } else {
        appendMissingMimeTypes();
    }

    $: if (oldIsSingle != isSingle) {
        oldIsSingle = isSingle;
        if (isSingle) {
            field.maxSelect = 1;
        } else {
            field.maxSelect = 99;
        }
    }

    function loadDefaults() {
        field.maxSelect = 1;
        field.thumbs = [];
        field.mimeTypes = [];

        isSingle = true;
        oldIsSingle = isSingle;
    }

    // append any previously set custom mime types to the predefined
    // list for backward compatibility
    function appendMissingMimeTypes() {
        if (CommonHelper.isEmpty(field.mimeTypes)) {
            return;
        }

        const missing = [];

        for (const v of field.mimeTypes) {
            if (!!mimeTypesList.find((item) => item.mimeType === v)) {
                continue; // exist
            }

            missing.push({ mimeType: v });
        }

        if (missing.length) {
            mimeTypesList = mimeTypesList.concat(missing);
        }
    }
</script>

<SchemaField bind:field {key} on:rename on:remove on:duplicate {...$$restProps}>
    <svelte:fragment let:interactive>
        <div class="separator" />

        <Field
            class="form-field form-field-single-multiple-select {!interactive ? 'readonly' : ''}"
            inlineError
            let:uniqueId
        >
            <ObjectSelect
                id={uniqueId}
                items={isSingleOptions}
                readonly={!interactive}
                bind:keyOfSelected={isSingle}
            />
        </Field>

        <div class="separator" />
    </svelte:fragment>

    <svelte:fragment slot="options">
        <div class="grid grid-sm">
            <div class="col-sm-12">
                <Field class="form-field" name="fields.{key}.mimeTypes" let:uniqueId>
                    <label for={uniqueId}>
                        <span class="txt">允许的文件类型</span>
                        <i
                            class="ri-information-line link-hint"
                            use:tooltip={{
                                text: "仅允许上传列表中指定的文件类型。\n留空表示无限制。",
                                position: "top",
                            }}
                        />
                    </label>
                    <ObjectSelect
                        id={uniqueId}
                        multiple
                        searchable
                        closable={false}
                        selectionKey="mimeType"
                        selectPlaceholder="无限制"
                        items={mimeTypesList}
                        labelComponent={MimeTypeSelectOption}
                        optionComponent={MimeTypeSelectOption}
                        bind:keyOfSelected={field.mimeTypes}
                    />
                    <div class="help-block">
                        <div tabindex="0" role="button" class="inline-flex flex-gap-0">
                            <span class="txt link-primary">选择预设</span>
                            <i class="ri-arrow-drop-down-fill" aria-hidden="true" />
                            <Toggler class="dropdown dropdown-sm dropdown-nowrap dropdown-left">
                                <button
                                    type="button"
                                    class="dropdown-item closable"
                                    role="menuitem"
                                    on:click={() => {
                                        field.mimeTypes = [
                                            "image/jpeg",
                                            "image/png",
                                            "image/svg+xml",
                                            "image/gif",
                                            "image/webp",
                                        ];
                                    }}
                                >
                                    <span class="txt">图片（jpg、png、svg、gif、webp）</span>
                                </button>
                                <button
                                    type="button"
                                    class="dropdown-item closable"
                                    role="menuitem"
                                    on:click={() => {
                                        field.mimeTypes = [
                                            "application/pdf",
                                            "application/msword",
                                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                                            "application/vnd.ms-excel",
                                            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                                        ];
                                    }}
                                >
                                    <span class="txt">文档（pdf、doc/docx、xls/xlsx）</span>
                                </button>
                                <button
                                    type="button"
                                    class="dropdown-item closable"
                                    role="menuitem"
                                    on:click={() => {
                                        field.mimeTypes = [
                                            "video/mp4",
                                            "video/x-ms-wmv",
                                            "video/quicktime",
                                            "video/3gpp",
                                        ];
                                    }}
                                >
                                    <span class="txt">视频（mp4、avi、mov、3gp）</span>
                                </button>
                                <button
                                    type="button"
                                    class="dropdown-item closable"
                                    role="menuitem"
                                    on:click={() => {
                                        field.mimeTypes = [
                                            "application/zip",
                                            "application/x-7z-compressed",
                                            "application/x-rar-compressed",
                                        ];
                                    }}
                                >
                                    <span class="txt">压缩包（zip、7zip、rar）</span>
                                </button>
                            </Toggler>
                        </div>
                    </div>
                </Field>
            </div>

            <div class={!isSingle ? "col-sm-6" : "col-sm-8"}>
                <Field class="form-field" name="fields.{key}.thumbs" let:uniqueId>
                    <label for={uniqueId}>
                        <span class="txt">缩略图尺寸</span>
                        <i
                            class="ri-information-line link-hint"
                            use:tooltip={{
                                text: "除默认的100x100缩略图外，可以为图片文件添加其他尺寸的缩略图。缩略图会在首次访问时自动生成。",
                                position: "top",
                            }}
                        />
                    </label>
                    <MultipleValueInput
                        id={uniqueId}
                        placeholder="例如：50x50、480x720"
                        bind:value={field.thumbs}
                    />
                    <div class="help-block">
                        <span class="txt">使用逗号分隔多个尺寸。</span>
                        <button type="button" class="inline-flex flex-gap-0">
                            <span class="txt link-primary">支持的格式</span>
                            <i class="ri-arrow-drop-down-fill" aria-hidden="true" />
                            <Toggler class="dropdown dropdown-sm dropdown-center dropdown-nowrap p-r-10">
                                <ul class="m-0">
                                    <li>
                                        <strong>WxH</strong>
                                        （如：100x50）- 从中心裁剪至指定尺寸
                                    </li>
                                    <li>
                                        <strong>WxHt</strong>
                                        （如：100x50t）- 从顶部裁剪至指定尺寸
                                    </li>
                                    <li>
                                        <strong>WxHb</strong>
                                        （如：100x50b）- 从底部裁剪至指定尺寸
                                    </li>
                                    <li>
                                        <strong>WxHf</strong>
                                        （如：100x50f）- 适应指定尺寸（不裁剪）
                                    </li>
                                    <li>
                                        <strong>0xH</strong>
                                        （如：0x50）- 保持宽高比调整至指定高度
                                    </li>
                                    <li>
                                        <strong>Wx0</strong>
                                        （如：100x0）- 保持宽高比调整至指定宽度
                                    </li>
                                </ul>
                            </Toggler>
                        </button>
                    </div>
                </Field>
            </div>

            <div class={!isSingle ? "col-sm-3" : "col-sm-4"}>
                <Field class="form-field" name="fields.{key}.maxSize" let:uniqueId>
                    <label for={uniqueId}>最大文件大小</label>
                    <input
                        type="number"
                        id={uniqueId}
                        step="1"
                        min="0"
                        max={Number.MAX_SAFE_INTEGER}
                        value={field.maxSize || ""}
                        on:input={(e) => (field.maxSize = parseInt(e.target.value, 10))}
                        placeholder="默认最大约5MB"
                    />
                    <div class="help-block">单位为字节。</div>
                </Field>
            </div>

            {#if !isSingle}
                <div class="col-sm-3">
                    <Field class="form-field" name="fields.{key}.maxSelect" let:uniqueId>
                        <label for={uniqueId}>最大选择数量</label>
                        <input
                            id={uniqueId}
                            type="number"
                            step="1"
                            min="2"
                            max={Number.MAX_SAFE_INTEGER}
                            required
                            placeholder="默认为单个"
                            bind:value={field.maxSelect}
                        />
                    </Field>
                </div>
            {/if}

            <Field class="form-field form-field-toggle" name="fields.{key}.protected" let:uniqueId>
                <input type="checkbox" id={uniqueId} bind:checked={field.protected} />
                <label for={uniqueId}>
                    <span class="txt">受保护</span>
                </label>
                <small class="txt-hint">
                    需要查看API规则权限和文件令牌才能访问
                    <a
                        href={import.meta.env.PB_PROTECTED_FILE_DOCS}
                        class="toggle-info"
                        target="_blank"
                        rel="noopener"
                    >
                        （了解更多）
                    </a>
                </small>
            </Field>
        </div>
    </svelte:fragment>
</SchemaField>

<style>
    :global(.form-field-file-max-select) {
        width: 100px;
        flex-shrink: 0;
    }
</style>
