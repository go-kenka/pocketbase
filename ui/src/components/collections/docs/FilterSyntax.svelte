<script>
    let expanded = false;

    function toggle() {
        expanded = !expanded;
    }
</script>

<button class="btn btn-sm btn-secondary m-t-10" on:click={toggle}>
    {#if expanded}
        <span class="txt">隐藏详情</span>
        <i class="ri-arrow-up-s-line" />
    {:else}
        <span class="txt">显示详情</span>
        <i class="ri-arrow-down-s-line" />
    {/if}
</button>

{#if expanded}
    <p>
        过滤语法基本遵循以下格式
        <code>
            <span class="txt-success">操作数</span>
            <span class="txt-danger">运算符</span>
            <span class="txt-success">操作数</span></code
        >，其中：
    </p>
    <ul>
        <li>
            <code class="txt-success">操作数</code> - 可以是以下任意一种：字段名、字符串（单引号或双引号）、数字、null、true、false
        </li>
        <li>
            <code class="txt-danger">运算符</code> - 可以是以下之一：
            <br />
            <ul>
                <li>
                    <code class="filter-op">{"="}</code>
                    <span class="txt">等于</span>
                </li>
                <li>
                    <code class="filter-op">{"!="}</code>
                    <span class="txt">不等于</span>
                </li>
                <li>
                    <code class="filter-op">{">"}</code>
                    <span class="txt">大于</span>
                </li>
                <li>
                    <code class="filter-op">{">=" }</code>
                    <span class="txt">大于等于</span>
                </li>
                <li>
                    <code class="filter-op">{"<"}</code>
                    <span class="txt">小于</span>
                </li>
                <li>
                    <code class="filter-op">{"<="}</code>
                    <span class="txt">小于等于</span>
                </li>
                <li>
                    <code class="filter-op">{"~"}</code>
                    <span class="txt">
                        包含（如果未指定，会自动在右侧字符串操作数两端添加"%"作为通配符匹配）
                    </span>
                </li>
                <li>
                    <code class="filter-op">{"!~"}</code>
                    <span class="txt">
                        不包含（如果未指定，会自动在右侧字符串操作数两端添加"%"作为通配符匹配）
                    </span>
                </li>

                <li>
                    <code class="filter-op">{"?="}</code>
                    <em class="txt-hint">任意一个/至少一个</em>
                    <span class="txt">等于</span>
                </li>
                <li>
                    <code class="filter-op">{"?!="}</code>
                    <em class="txt-hint">任意一个/至少一个</em>
                    <span class="txt">不等于</span>
                </li>
                <li>
                    <code class="filter-op">{"?>"}</code>
                    <em class="txt-hint">任意一个/至少一个</em>
                    <span class="txt">大于</span>
                </li>
                <li>
                    <code class="filter-op">{"?>="}</code>
                    <em class="txt-hint">任意一个/至少一个</em>
                    <span class="txt">大于等于</span>
                </li>
                <li>
                    <code class="filter-op">{"?<"}</code>
                    <em class="txt-hint">任意一个/至少一个</em>
                    <span class="txt">小于</span>
                </li>
                <li>
                    <code class="filter-op">{"?<="}</code>
                    <em class="txt-hint">任意一个/至少一个</em>
                    <span class="txt">小于等于</span>
                </li>
                <li>
                    <code class="filter-op">{"?~"}</code>
                    <em class="txt-hint">任意一个/至少一个</em>
                    <span class="txt">
                        包含（如果未指定，会自动在右侧字符串操作数两端添加"%"作为通配符匹配）
                    </span>
                </li>
                <li>
                    <code class="filter-op">{"?!~"}</code>
                    <em class="txt-hint">任意一个/至少一个</em>
                    <span class="txt">
                        不包含（如果未指定，会自动在右侧字符串操作数两端添加"%"作为通配符匹配）
                    </span>
                </li>
            </ul>
        </li>
    </ul>

    <p>
        要组合多个表达式，你可以使用括号
        <code>(...)</code>、<code>&&</code>（与）和 <code>||</code>（或）运算符。
    </p>
{/if}

<style>
    .filter-op {
        display: inline-block;
        vertical-align: top;
        margin-right: 5px;
        width: 30px;
        text-align: center;
        padding-left: 0;
        padding-right: 0;
    }
</style>
