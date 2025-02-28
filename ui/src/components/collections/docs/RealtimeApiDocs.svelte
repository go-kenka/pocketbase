<script>
    import CodeBlock from "@/components/base/CodeBlock.svelte";
    import SdkTabs from "@/components/base/SdkTabs.svelte";
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";

    export let collection;

    $: backendAbsUrl = CommonHelper.getApiExampleUrl(ApiClient.baseURL);
</script>

<h3 class="m-b-sm">实时 ({collection.name})</h3>
<div class="content txt-lg m-b-sm">
    <p>通过服务器发送事件（SSE）订阅实时更改。</p>
    <p>
        事件将在记录的<strong>创建</strong>、<strong>更新</strong>
        和<strong>删除</strong>操作时发送（参见下方的"事件数据格式"部分）。
    </p>
</div>
<div class="alert alert-info m-t-10 m-b-sm">
    <div class="icon">
        <i class="ri-information-line" />
    </div>
    <div class="contet">
        <p>
            <strong>您可以订阅单条记录或整个集合。</strong>
        </p>
        <p>
            当您订阅<strong>单条记录</strong>时，系统将使用集合的
            <strong>ViewRule</strong>来确定订阅者是否有权限接收事件消息。
        </p>
        <p>
            当您订阅<strong>整个集合</strong>时，系统将使用集合的
            <strong>ListRule</strong>来确定订阅者是否有权限接收事件消息。
        </p>
    </div>
</div>

<SdkTabs
    js={`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${backendAbsUrl}');

        ...

        // (Optionally) authenticate
        await pb.collection('users').authWithPassword('test@example.com', '123456');

        // Subscribe to changes in any ${collection?.name} record
        pb.collection('${collection?.name}').subscribe('*', function (e) {
            console.log(e.action);
            console.log(e.record);
        }, { /* other options like: filter, expand, custom headers, etc. */ });

        // Subscribe to changes only in the specified record
        pb.collection('${collection?.name}').subscribe('RECORD_ID', function (e) {
            console.log(e.action);
            console.log(e.record);
        }, { /* other options like: filter, expand, custom headers, etc. */ });

        // Unsubscribe
        pb.collection('${collection?.name}').unsubscribe('RECORD_ID'); // remove all 'RECORD_ID' subscriptions
        pb.collection('${collection?.name}').unsubscribe('*'); // remove all '*' topic subscriptions
        pb.collection('${collection?.name}').unsubscribe(); // remove all subscriptions in the collection
    `}
    dart={`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${backendAbsUrl}');

        ...

        // (Optionally) authenticate
        await pb.collection('users').authWithPassword('test@example.com', '123456');

        // Subscribe to changes in any ${collection?.name} record
        pb.collection('${collection?.name}').subscribe('*', (e) {
            print(e.action);
            print(e.record);
        }, /* other options like: filter, expand, custom headers, etc. */);

        // Subscribe to changes only in the specified record
        pb.collection('${collection?.name}').subscribe('RECORD_ID', (e) {
            print(e.action);
            print(e.record);
        }, /* other options like: filter, expand, custom headers, etc. */);

        // Unsubscribe
        pb.collection('${collection?.name}').unsubscribe('RECORD_ID'); // remove all 'RECORD_ID' subscriptions
        pb.collection('${collection?.name}').unsubscribe('*'); // remove all '*' topic subscriptions
        pb.collection('${collection?.name}').unsubscribe(); // remove all subscriptions in the collection
    `}
/>

<h6 class="m-b-xs">API 详情</h6>
<div class="alert">
    <strong class="label label-primary">SSE</strong>
    <div class="content">
        <p>/api/realtime</p>
    </div>
</div>

<div class="section-title">事件数据格式</div>
<CodeBlock
    content={JSON.stringify(
        {
            action: "create",
            record: CommonHelper.dummyCollectionRecord(collection),
        },
        null,
        2,
    ).replace('"action": "create"', '"action": "create" // create, update or delete')}
/>
