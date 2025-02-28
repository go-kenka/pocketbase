<script>
    import CodeBlock from "@/components/base/CodeBlock.svelte";

    export let prefix = ""; // 示例前缀（例如："record."）
</script>

<tr>
    <td id="query-page">fields</td>
    <td>
        <span class="label">String</span>
    </td>
    <td>
        <p>
            以逗号分隔的字符串，指定JSON响应中要返回的字段
            <em>（默认返回所有字段）</em>。例如：
            <CodeBlock content="?fields=*,{prefix}expand.relField.name" />
        </p>
        <p>
            <code>*</code> 表示指定深度级别的所有键。
        </p>
        <p>此外，还支持以下字段修饰符：</p>
        <ul>
            <li>
                <code>:excerpt(maxLength, withEllipsis?)</code>
                <br />
                返回字段字符串值的简短纯文本版本。
                <br />
                例如：
                <code>?fields=*,{prefix}description:excerpt(200,true)</code>
            </li>
        </ul>
    </td>
</tr>
