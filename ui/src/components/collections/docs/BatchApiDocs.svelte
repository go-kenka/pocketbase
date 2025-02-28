<script>
    import { link } from "svelte-spa-router";
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";
    import CodeBlock from "@/components/base/CodeBlock.svelte";
    import SdkTabs from "@/components/base/SdkTabs.svelte";

    export let collection;

    let responseTab = 200;
    let responses = [];

    $: backendAbsUrl = CommonHelper.getApiExampleUrl(ApiClient.baseURL);

    $: dummyRecord = CommonHelper.dummyCollectionRecord(collection);

    $: if (collection?.id) {
        responses.push({
            code: 200,
            body: JSON.stringify(
                [
                    {
                        status: 200,
                        body: dummyRecord,
                    },
                    {
                        status: 200,
                        body: Object.assign({}, dummyRecord, { id: dummyRecord.id + "2" }),
                    },
                ],
                null,
                2,
            ),
        });

        responses.push({
            code: 400,
            body: `
                {
                  "status": 400,
                  "message": "Batch transaction failed.",
                  "data": {
                    "requests": {
                      "1": {
                        "code": "batch_request_failed",
                        "message": "Batch request failed.",
                        "response": {
                          "status": 400,
                          "message": "Failed to create record.",
                          "data": {
                            "id": {
                              "code": "validation_min_text_constraint",
                              "message": "Must be at least 3 character(s).",
                              "params": { "min": 3 }
                            }
                          }
                        }
                      }
                    }
                  }
                }
            `,
        });

        responses.push({
            code: 403,
            body: `
                {
                  "status": 403,
                  "message": "Batch requests are not allowed.",
                  "data": {}
                }
            `,
        });
    }
</script>

<h3 class="m-b-sm">批量创建/更新/插入/删除 ({collection.name})</h3>
<div class="content txt-lg m-b-sm">
    <p>在单个请求中批量和事务性地创建/更新/插入/删除多条记录。</p>
</div>

<div class="alert alert-warning">
    <div class="icon">
        <i class="ri-error-warning-line" />
    </div>
    <div class="content">
        <p>
            批量Web API需要在<a href="/settings" use:link>仪表盘设置</a>中明确启用和配置。
        </p>
        <p>
            由于此端点在单个事务中处理请求，如果配置不当（例如：过大的执行超时时间、过大的请求体大小限制等），
            可能会降低应用程序的性能。
        </p>
    </div>
</div>

<SdkTabs
    js={`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${backendAbsUrl}');

        ...

        const batch = pb.createBatch();

        batch.collection('${collection?.name}').create({ ... });
        batch.collection('${collection?.name}').update('RECORD_ID', { ... });
        batch.collection('${collection?.name}').delete('RECORD_ID');
        batch.collection('${collection?.name}').upsert({ ... });

        const result = await batch.send();
    `}
    dart={`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${backendAbsUrl}');

        ...

        final batch = pb.createBatch();

        batch.collection('${collection?.name}').create(body: { ... });
        batch.collection('${collection?.name}').update('RECORD_ID', body: { ... });
        batch.collection('${collection?.name}').delete('RECORD_ID');
        batch.collection('${collection?.name}').upsert(body: { ... });

        final result = await batch.send();
    `}
/>

<h6 class="m-b-xs">API 详情</h6>
<div class="api-route alert alert-success">
    <strong class="label label-primary">POST</strong>
    <div class="content">/api/batch</div>
</div>

<div class="section-title">请求体参数</div>
<p>
    请求体参数可以通过 <em>application/json</em> 或 <em>multipart/form-data</em> 格式发送。
    <br />
    文件上传仅支持通过 <em>multipart/form-data</em> 格式（详见下文）。
</p>
<table class="table-compact table-border m-t-xs m-b-base">
    <thead>
        <tr>
            <th>参数</th>
            <th width="80%">描述</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td valign="top">
                <div class="flex txt-nowrap">
                    <span class="label label-success">Reuired</span>
                    <span>requests</span>
                </div>
            </td>
            <td>
                <span class="label">{`Array<Request>`}</span> - 待处理的请求列表。

                <p>支持的批量请求操作包括：</p>
                <ul>
                    <li>记录创建 - <code>POST /api/collections/{`{collection}`}/records</code></li>
                    <li>
                        记录更新 -
                        <code>PATCH /api/collections/{`{collection}`}/records/{`{id}`}</code>
                    </li>
                    <li>
                        记录插入 - <code>PUT /api/collections/{`{collection}`}/records</code>
                        <br />
                        <small class="txt-hint">
                            (请求体必须包含 <code class="txt-sm">id</code> 字段)
                        </small>
                    </li>
                    <li>
                        记录删除 -
                        <code>DELETE /api/collections/{`{collection}`}/records/{`{id}`}</code>
                    </li>
                </ul>
                <p>每个批量请求元素包含以下属性：</p>
                <ul>
                    <li><code>url path</code> <em>(可以包含查询参数)</em></li>
                    <li><code>method</code> <em>(GET, POST, PUT, PATCH, DELETE)</em></li>
                    <li>
                        <code>headers</code>
                        <br />
                        <em>
                            (目前暂不支持自定义每个请求的 <code>Authorization</code> 头， 即所有批量请求共享相同的认证状态)
                        </em>
                    </li>
                    <li><code>body</code></li>
                </ul>
                <p>
                    <strong>注意！</strong> 当批量请求以 <code>multipart/form-data</code> 格式发送时，
                    常规的批量操作字段需要序列化为JSON并提交到 <code>@jsonPayload</code> 字段中，
                    文件字段的键名需要遵循 <code>requests.N.fileField</code> 或
                    <code>requests[N].fileField</code> 的模式
                    <em> (当使用SDK的特定对象表示法时，这通常会被SDK自动处理) </em>。
                    <br />
                    如果你不使用SDK或者想手动构造 <code>FormData</code> 请求体， 可以参考以下示例：
                    <CodeBlock
                        language="javascript"
                        content={`
                            const formData = new FormData();

                            formData.append("@jsonPayload", JSON.stringify({
                                requests: [
                                    {
                                        method: "POST",
                                        url: "/api/collections/${collection.name}/records?fields=id",
                                        body: { someField: "test1" }
                                    },
                                    {
                                        method: "PATCH",
                                        url: "/api/collections/${collection.name}/records/RECORD_ID",
                                        body: { someField: "test2" }
                                    }
                                ]
                            }))

                            // 第一个请求的文件
                            formData.append("requests.0.someFileField", new File(...))

                            // 第二个请求的文件
                            formData.append("requests.1.someFileField", new File(...))
                        `}
                    />
                </p>
            </td>
        </tr>
    </tbody>
</table>

<div class="section-title">响应</div>
<div class="tabs">
    <div class="tabs-header compact combined left">
        {#each responses as response (response.code)}
            <button
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
