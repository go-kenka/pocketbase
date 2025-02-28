<script>
    import Draggable from "@/components/base/Draggable.svelte";
    import IndexesList from "@/components/collections/IndexesList.svelte";
    import NewField from "@/components/collections/schema/NewField.svelte";
    import SchemaFieldAutodate from "@/components/collections/schema/SchemaFieldAutodate.svelte";
    import SchemaFieldBool from "@/components/collections/schema/SchemaFieldBool.svelte";
    import SchemaFieldDate from "@/components/collections/schema/SchemaFieldDate.svelte";
    import SchemaFieldEditor from "@/components/collections/schema/SchemaFieldEditor.svelte";
    import SchemaFieldEmail from "@/components/collections/schema/SchemaFieldEmail.svelte";
    import SchemaFieldFile from "@/components/collections/schema/SchemaFieldFile.svelte";
    import SchemaFieldJson from "@/components/collections/schema/SchemaFieldJson.svelte";
    import SchemaFieldNumber from "@/components/collections/schema/SchemaFieldNumber.svelte";
    import SchemaFieldPassword from "@/components/collections/schema/SchemaFieldPassword.svelte";
    import SchemaFieldRelation from "@/components/collections/schema/SchemaFieldRelation.svelte";
    import SchemaFieldSelect from "@/components/collections/schema/SchemaFieldSelect.svelte";
    import SchemaFieldText from "@/components/collections/schema/SchemaFieldText.svelte";
    import SchemaFieldUrl from "@/components/collections/schema/SchemaFieldUrl.svelte";
    import { scaffolds } from "@/stores/collections";
    import { setErrors } from "@/stores/errors";
    import CommonHelper from "@/utils/CommonHelper";

    export let collection;

    let oldCollectionType;

    const fieldComponents = {
        text: SchemaFieldText,
        number: SchemaFieldNumber,
        bool: SchemaFieldBool,
        email: SchemaFieldEmail,
        url: SchemaFieldUrl,
        editor: SchemaFieldEditor,
        date: SchemaFieldDate,
        select: SchemaFieldSelect,
        json: SchemaFieldJson,
        file: SchemaFieldFile,
        relation: SchemaFieldRelation,
        password: SchemaFieldPassword,
        autodate: SchemaFieldAutodate,
    };

    $: if (!collection.id && oldCollectionType != collection.type) {
        oldCollectionType = collection.type;
        onTypeCange();
    }

    $: if (typeof collection.fields === "undefined") {
        collection.fields = [];
    }

    $: nonDeletedFields = collection.fields.filter((f) => !f._toDelete);

    function removeField(fieldIndex) {
        if (collection.fields[fieldIndex]) {
            collection.fields.splice(fieldIndex, 1);
            collection.fields = collection.fields;
        }
    }

    function duplicateField(fieldIndex) {
        const field = collection.fields[fieldIndex];
        if (!field) {
            return; // 没有可复制的内容
        }

        field.onMountSelect = false;

        const clone = structuredClone(field);
        clone.id = "";
        clone.system = false;
        clone.name = getUniqueFieldName(clone.name + "_copy");
        clone.onMountSelect = true;

        collection.fields.splice(fieldIndex + 1, 0, clone);
        collection.fields = collection.fields;
    }

    function newField(fieldType = "text") {
        const field = CommonHelper.initSchemaField({
            name: getUniqueFieldName(),
            type: fieldType,
        });

        field.onMountSelect = true;

        // 如果集合已创建/更新了最后的字段，
        // 则在第一个自动日期字段之前插入，否则追加
        const idx = collection.fields.findLastIndex((f) => f.type != "autodate");
        if (field.type != "autodate" && idx >= 0) {
            collection.fields.splice(idx + 1, 0, field);
        } else {
            collection.fields.push(field);
        }

        collection.fields = collection.fields;
    }

    function getUniqueFieldName(name = "field") {
        let result = name;
        let counter = 2;

        let suffix = name.match(/\d+$/)?.[0] || ""; // 提取数字后缀

        // 不带后缀的名称
        let base = suffix ? name.substring(0, name.length - suffix.length) : name;

        while (hasFieldWithName(result)) {
            result = base + ((suffix << 0) + counter);
            counter++;
        }

        return result;
    }

    function hasFieldWithName(name) {
        return !!collection?.fields?.find((field) => field.name === name);
    }

    function getSchemaFieldIndex(field) {
        return nonDeletedFields.findIndex((f) => f === field);
    }

    function replaceIndexesColumn(oldName, newName) {
        if (!collection?.fields?.length || oldName === newName || !newName) {
            return;
        }

        // 旧名称的字段仍然存在，因此无需重命名索引列
        if (!!collection?.fields?.find((f) => f.name == oldName && !f._toDelete)) {
            return;
        }

        // 更新重命名字段的索引
        collection.indexes = collection.indexes.map((idx) =>
            CommonHelper.replaceIndexColumn(idx, oldName, newName),
        );
    }

    function onTypeCange() {
        const oldFields = collection.fields || [];
        const nonSystemFields = oldFields.filter((f) => !f.system);

        const blank = structuredClone($scaffolds[collection.type]);
        collection.fields = blank.fields;

        for (let oldField of oldFields) {
            if (!oldField.system) {
                continue;
            }

            const idx = collection.fields.findIndex((f) => f.name == oldField.name);
            if (idx < 0) {
                continue;
            }

            // 将默认字段与现有字段合并
            collection.fields[idx] = Object.assign(collection.fields[idx], oldField);
        }

        for (let field of nonSystemFields) {
            collection.fields.push(field);
        }
    }

    function replaceIdentityFields(oldName, newName) {
        if (oldName === newName || !newName) {
            return;
        }

        let identityFields = collection.passwordAuth?.identityFields || [];

        for (let i = 0; i < identityFields.length; i++) {
            if (identityFields[i] == oldName) {
                identityFields[i] = newName;
            }
        }
    }

    function onFieldRename(oldName, newName) {
        replaceIndexesColumn(oldName, newName);
        replaceIdentityFields(oldName, newName);
    }
</script>

<div class="schema-fields total-{collection.fields.length}">
    {#each collection.fields as field, i (field)}
        <Draggable
            bind:list={collection.fields}
            index={i}
            disabled={field._toDelete}
            dragHandleClass="drag-handle-wrapper"
            on:drag={(e) => {
                // 空白拖拽占位符
                if (!e.detail) {
                    return;
                }
                const ghost = e.detail.target;
                ghost.style.opacity = 0;
                setTimeout(() => {
                    ghost?.style?.removeProperty("opacity"); // 恢复透明度
                }, 0);
                e.detail.dataTransfer.setDragImage(ghost, 0, 0);
            }}
            on:sort={() => {
                // 由于架构键索引已更改，重置错误
                setErrors({});
            }}
        >
            <svelte:component
                this={fieldComponents[field.type]}
                key={getSchemaFieldIndex(field)}
                {collection}
                bind:field
                on:remove={() => removeField(i)}
                on:duplicate={() => duplicateField(i)}
                on:rename={(e) => onFieldRename(e.detail.oldName, e.detail.newName)}
            />
        </Draggable>
    {/each}
</div>

<NewField class="btn btn-block btn-outline" on:select={(e) => newField(e.detail)} />

<hr />

<IndexesList bind:collection />
