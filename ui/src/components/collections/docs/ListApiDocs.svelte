<script>
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";
    import CodeBlock from "@/components/base/CodeBlock.svelte";
    import FilterSyntax from "@/components/collections/docs/FilterSyntax.svelte";
    import SdkTabs from "@/components/base/SdkTabs.svelte";
    import FieldsQueryParam from "@/components/collections/docs/FieldsQueryParam.svelte";

    export let collection;

    let responseTab = 200;
    let responses = [];

    $: fieldNames = CommonHelper.getAllCollectionIdentifiers(collection);

    $: superusersOnly = collection?.listRule === null;

    $: backendAbsUrl = CommonHelper.getApiExampleUrl(ApiClient.baseURL);

    $: dummyRecord = CommonHelper.dummyCollectionRecord(collection);

    $: if (collection?.id) {
        responses.push({
            code: 200,
            body: JSON.stringify(
                {
                    page: 1,
                    perPage: 30,
                    totalPages: 1,
                    totalItems: 2,
                    items: [dummyRecord, Object.assign({}, dummyRecord, { id: dummyRecord + "2" })],
                },
                null,
                2,
            ),
        });

        responses.push({
            code: 400,
            body: `
                {
                  "status": 400,
                  "message": "Something went wrong while processing your request. Invalid filter.",
                  "data": {}
                }
            `,
        });

        if (superusersOnly) {
            responses.push({
                code: 403,
                body: `
                    {
                      "status": 403,
                      "message": "Only superusers can access this action.",
                      "data": {}
                    }
                `,
            });
        }
    }
</script>

<h3 class="m-b-sm">列表/搜索 ({collection.name})</h3>
<div class="content txt-lg m-b-sm">
    <p>
        获取分页的 <strong>{collection.name}</strong> 记录列表，支持排序和过滤。
    </p>
</div>

<SdkTabs
    js={`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${backendAbsUrl}');

        ...

        // fetch a paginated records list
        const resultList = await pb.collection('${collection?.name}').getList(1, 50, {
            filter: 'someField1 != someField2',
        });

        // you can also fetch all records at once via getFullList
        const records = await pb.collection('${collection?.name}').getFullList({
            sort: '-someField',
        });

        // or fetch only the first record that matches the specified filter
        const record = await pb.collection('${collection?.name}').getFirstListItem('someField="test"', {
            expand: 'relField1,relField2.subRelField',
        });
    `}
    dart={`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${backendAbsUrl}');

        ...

        // fetch a paginated records list
        final resultList = await pb.collection('${collection?.name}').getList(
          page: 1,
          perPage: 50,
          filter: 'someField1 != someField2',
        );

        // you can also fetch all records at once via getFullList
        final records = await pb.collection('${collection?.name}').getFullList(
          sort: '-someField',
        );

        // or fetch only the first record that matches the specified filter
        final record = await pb.collection('${collection?.name}').getFirstListItem(
          'someField="test"',
          expand: 'relField1,relField2.subRelField',
        );
    `}
/>

<h6 class="m-b-xs">API 详情</h6>
<div class="alert alert-info">
    <strong class="label label-primary">GET</strong>
    <div class="content">
        <p>
            /api/collections/<strong>{collection.name}</strong>/records
        </p>
    </div>
    {#if superusersOnly}
        <p class="txt-hint txt-sm txt-right">需要超级用户 <code>Authorization:TOKEN</code> 头部</p>
    {/if}
</div>

<div class="section-title">查询参数</div>
<table class="table-compact table-border m-b-base">
    <thead>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th width="60%">描述</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>page</td>
            <td>
                <span class="label">Number</span>
            </td>
            <td>分页列表的页码（即偏移量）（默认为1）。</td>
        </tr>
        <tr>
            <td>perPage</td>
            <td>
                <span class="label">Number</span>
            </td>
            <td>指定每页返回的最大记录数（默认为30）。</td>
        </tr>
        <tr>
            <td>sort</td>
            <td>
                <span class="label">String</span>
            </td>
            <td>
                指定记录排序属性。<br />
                在属性前添加 <code>-</code> / <code>+</code>（默认）表示降序/升序。 例如：
                <CodeBlock
                    content={`
                        // 按created降序，按id升序
                        ?sort=-created,id
                    `}
                />
                <p>
                    <strong>支持的记录排序字段：</strong> <br />
                    <code>@random</code>,
                    <code>@rowid</code>,
                    {#each fieldNames as name, i}
                        <code>{name}</code>{i < fieldNames.length - 1 ? ", " : ""}
                    {/each}
                </p>
            </td>
        </tr>
        <tr>
            <td>filter</td>
            <td>
                <span class="label">String</span>
            </td>
            <td>
                过滤返回的记录。例如：
                <CodeBlock
                    content={`
                        ?filter=(id='abc' && created>'2022-01-01')
                    `}
                />
                <FilterSyntax />
            </td>
        </tr>
        <tr>
            <td>expand</td>
            <td>
                <span class="label">String</span>
            </td>
            <td>
                自动展开记录关联。例如：
                <CodeBlock content={`?expand=relField1,relField2.subRelField`} />
                支持最多6层深度的嵌套关联展开。<br />
                展开的关联将附加到每个记录的
                <code>expand</code> 属性下（如：<code>{`"expand": {"relField1": {...}, ...}`}</code>）。
                <br />
                只有请求用户有权限<strong>查看</strong>的关联才会被展开。
            </td>
        </tr>
        <FieldsQueryParam />
        <tr>
            <td id="query-page">skipTotal</td>
            <td>
                <span class="label">Boolean</span>
            </td>
            <td>
                如果设置此项，将跳过总数查询，响应字段
                <code>totalItems</code> 和 <code>totalPages</code> 将为 <code>-1</code> 值。
                <br />
                当不需要总数计数或使用基于游标的分页时，这可以大大加快搜索查询速度。
                <br />
                出于优化目的，在SDK的
                <code>getFirstListItem()</code>
                和
                <code>getFullList()</code> 方法中默认设置此项。
            </td>
        </tr>
    </tbody>
</table>

<div class="section-title">响应</div>
<div class="tabs">
    <div class="tabs-header compact combined left">
        {#each responses as response (response.code)}
            <button
                type="button"
                class="tab-item"
                class:active={responseTab === response.code}
                on:click={() => (responseTab = response.code)}
            >
                {response.code}
            </button>
        {/each}
    </div>
    <div class="tabs-content">
        {#each responses as response (response.code)}
            <div class="tab-item" class:active={responseTab === response.code}>
                <CodeBlock content={response.body} />
            </div>
        {/each}
    </div>
</div>
