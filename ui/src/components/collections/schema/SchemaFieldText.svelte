<script>
    import tooltip from "@/actions/tooltip";
    import Field from "@/components/base/Field.svelte";
    import SchemaField from "@/components/collections/schema/SchemaField.svelte";

    export let field;
    export let key = "";
</script>

<SchemaField bind:field {key} on:rename on:remove on:duplicate {...$$restProps}>
    <svelte:fragment slot="options">
        <div class="grid grid-sm">
            <div class="col-sm-6">
                <Field class="form-field" name="fields.{key}.min" let:uniqueId>
                    <label for={uniqueId}>
                        <span class="txt">最小长度</span>
                        <i
                            class="ri-information-line link-hint"
                            use:tooltip={"清除此字段或设置为0表示无限制。"}
                        />
                    </label>
                    <input
                        type="number"
                        id={uniqueId}
                        step="1"
                        min="0"
                        max={Number.MAX_SAFE_INTEGER}
                        placeholder="无最小限制"
                        value={field.min || ""}
                        on:input={(e) => (field.min = parseInt(e.target.value, 10))}
                    />
                </Field>
            </div>

            <div class="col-sm-6">
                <Field class="form-field" name="fields.{key}.max" let:uniqueId>
                    <label for={uniqueId}>
                        <span class="txt">最大长度</span>
                        <i
                            class="ri-information-line link-hint"
                            use:tooltip={"清除此字段或设置为0将使用默认限制。"}
                        />
                    </label>
                    <input
                        type="number"
                        id={uniqueId}
                        step="1"
                        placeholder="默认最大5000字符"
                        min={field.min || 0}
                        max={Number.MAX_SAFE_INTEGER}
                        value={field.max || ""}
                        on:input={(e) => (field.max = parseInt(e.target.value, 10))}
                    />
                </Field>
            </div>

            <div class="col-sm-6">
                <Field class="form-field" name="fields.{key}.pattern" let:uniqueId>
                    <label for={uniqueId}>验证模式</label>
                    <input type="text" id={uniqueId} bind:value={field.pattern} />
                    <div class="help-block">
                        <p>示例 <code>{"^[a-z0-9]+$"}</code></p>
                    </div>
                </Field>
            </div>

            <div class="col-sm-6">
                <Field class="form-field" name="fields.{key}.autogeneratePattern" let:uniqueId>
                    <label for={uniqueId}>
                        <span class="txt">自动生成模式</span>
                        <i
                            class="ri-information-line link-hint"
                            use:tooltip={"当记录创建时缺少值时，设置并自动生成匹配该模式的文本。"}
                        />
                    </label>
                    <input type="text" id={uniqueId} bind:value={field.autogeneratePattern} />
                    <div class="help-block">
                        <p>示例 <code>{"[a-z0-9]{30}"}</code></p>
                    </div>
                </Field>
            </div>
        </div>
    </svelte:fragment>
</SchemaField>
