<script>
    import CodeBlock from "@/components/base/CodeBlock.svelte";
    import FieldsQueryParam from "@/components/collections/docs/FieldsQueryParam.svelte";
    import SdkTabs from "@/components/base/SdkTabs.svelte";
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";

    export let collection;

    let responseTab = 200;
    let responses = [];

    $: backendAbsUrl = CommonHelper.getApiExampleUrl(ApiClient.baseURL);

    $: responses = [
        {
            code: 200,
            body: JSON.stringify(
                {
                    token: "JWT_AUTH_TOKEN",
                    record: CommonHelper.dummyCollectionRecord(collection),
                    meta: {
                        id: "abc123",
                        name: "John Doe",
                        username: "john.doe",
                        email: "test@example.com",
                        avatarURL: "https://example.com/avatar.png",
                        accessToken: "...",
                        refreshToken: "...",
                        expiry: "2022-01-01 10:00:00.123Z",
                        isNew: false,
                        rawUser: {},
                    },
                },
                null,
                2,
            ),
        },
        {
            code: 400,
            body: `
                {
                  "status": 400,
                  "message": "An error occurred while submitting the form.",
                  "data": {
                    "provider": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `,
        },
    ];
</script>

<h3 class="m-b-sm">OAuth2认证 ({collection.name})</h3>
<div class="content txt-lg m-b-sm">
    <p>通过OAuth2提供商进行认证，并返回新的认证令牌和记录数据。</p>
    <p>
        更多详细信息请查看
        <a href={import.meta.env.PB_OAUTH2_EXAMPLE} target="_blank" rel="noopener noreferrer">
            OAuth2集成文档
        </a>。
    </p>
</div>

<SdkTabs
    js={`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${backendAbsUrl}');

        ...

        // OAuth2 authentication with a single realtime call.
        //
        // Make sure to register ${backendAbsUrl}/api/oauth2-redirect as redirect url.
        const authData = await pb.collection('${collection.name}').authWithOAuth2({ provider: 'google' });

        // OR authenticate with manual OAuth2 code exchange
        // const authData = await pb.collection('${collection.name}').authWithOAuth2Code(...);

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `}
    dart={`
        import 'package:pocketbase/pocketbase.dart';
        import 'package:url_launcher/url_launcher.dart';

        final pb = PocketBase('${backendAbsUrl}');

        ...

        // OAuth2 authentication with a single realtime call.
        //
        // Make sure to register ${backendAbsUrl}/api/oauth2-redirect as redirect url.
        final authData = await pb.collection('${collection.name}').authWithOAuth2('google', (url) async {
          await launchUrl(url);
        });

        // OR authenticate with manual OAuth2 code exchange
        // final authData = await pb.collection('${collection.name}').authWithOAuth2Code(...);

        // after the above you can also access the auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `}
/>

<h6 class="m-b-xs">API详情</h6>
<div class="alert alert-success">
    <strong class="label label-primary">POST</strong>
    <div class="content">
        <p>
            /api/collections/<strong>{collection.name}</strong>/auth-with-oauth2
        </p>
    </div>
</div>

<div class="section-title">请求体参数</div>
<table class="table-compact table-border m-b-base">
    <thead>
        <tr>
            <th>参数</th>
            <th>类型</th>
            <th width="50%">描述</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <div class="inline-flex">
                    <span class="label label-success">必填</span>
                    <span>provider</span>
                </div>
            </td>
            <td>
                <span class="label">String</span>
            </td>
            <td>OAuth2客户端提供商的名称（例如："google"）。</td>
        </tr>
        <tr>
            <td>
                <div class="inline-flex">
                    <span class="label label-success">必填</span>
                    <span>code</span>
                </div>
            </td>
            <td>
                <span class="label">String</span>
            </td>
            <td>初始请求返回的授权码。</td>
        </tr>
        <tr>
            <td>
                <div class="inline-flex">
                    <span class="label label-success">必填</span>
                    <span>codeVerifier</span>
                </div>
            </td>
            <td>
                <span class="label">String</span>
            </td>
            <td>作为code_challenge一部分的初始请求中发送的代码验证器。</td>
        </tr>
        <tr>
            <td>
                <div class="inline-flex">
                    <span class="label label-success">必填</span>
                    <span>redirectURL</span>
                </div>
            </td>
            <td>
                <span class="label">String</span>
            </td>
            <td>初始请求中发送的重定向URL。</td>
        </tr>
        <tr>
            <td>
                <div class="inline-flex">
                    <span class="label label-warning">可选</span>
                    <span>createData</span>
                </div>
            </td>
            <td>
                <span class="label">Object</span>
            </td>
            <td>
                <p>在OAuth2注册时用于创建认证记录的可选数据。</p>
                <p>
                    创建的认证记录必须符合常规<strong>create</strong>操作中的相同要求和验证规则。
                    <br />
                    <em>
                        数据只能是<code>json</code>格式，即在OAuth2注册过程中目前不支持<code
                            >multipart/form-data</code
                        >和文件上传。
                    </em>
                </p>
            </td>
        </tr>
    </tbody>
</table>

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
            <td>expand</td>
            <td>
                <span class="label">String</span>
            </td>
            <td>
                自动展开记录关联。例如：
                <CodeBlock content={`?expand=relField1,relField2.subRelField`} />
                支持最多6层深度的嵌套关联展开。<br />
                展开的关联将附加到记录的<code>expand</code>属性下 （例如：<code
                    >{`"expand": {"relField1": {...}, ...}`}</code
                >）。
                <br />
                只有请求用户具有<strong>查看</strong>权限的关联才会被展开。
            </td>
        </tr>
        <FieldsQueryParam prefix="record." />
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
