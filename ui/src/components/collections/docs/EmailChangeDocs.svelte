<script>
    import EmailChangeApiConfirmDocs from "@/components/collections/docs/EmailChangeApiConfirmDocs.svelte";
    import EmailChangeApiRequestDocs from "@/components/collections/docs/EmailChangeApiRequestDocs.svelte";
    import SdkTabs from "@/components/base/SdkTabs.svelte";
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";

    export let collection;

    const apiTabs = [
        { title: "请求邮箱变更", component: EmailChangeApiRequestDocs },
        { title: "确认邮箱变更", component: EmailChangeApiConfirmDocs },
    ];

    let activeApiTab = 0;

    $: backendAbsUrl = CommonHelper.getApiExampleUrl(ApiClient.baseURL);
</script>

<h3 class="m-b-sm">邮箱变更 ({collection.name})</h3>
<div class="content txt-lg m-b-sm">
    <p>发送 <strong>{collection.name}</strong> 邮箱变更请求。</p>
    <p>邮箱变更成功后，该记录之前签发的所有认证令牌将自动失效。</p>
</div>

<SdkTabs
    js={`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${backendAbsUrl}');

        ...

        await pb.collection('${collection?.name}').authWithPassword('test@example.com', '1234567890');

        await pb.collection('${collection?.name}').requestEmailChange('new@example.com');

        // ---
        // (optional) in your custom confirmation page:
        // ---

        // note: after this call all previously issued auth tokens are invalidated
        await pb.collection('${collection?.name}').confirmEmailChange(
            'EMAIL_CHANGE_TOKEN',
            'YOUR_PASSWORD',
        );
    `}
    dart={`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${backendAbsUrl}');

        ...

        await pb.collection('${collection?.name}').authWithPassword('test@example.com', '1234567890');

        await pb.collection('${collection?.name}').requestEmailChange('new@example.com');

        ...

        // ---
        // (optional) in your custom confirmation page:
        // ---

        // note: after this call all previously issued auth tokens are invalidated
        await pb.collection('${collection?.name}').confirmEmailChange(
          'EMAIL_CHANGE_TOKEN',
          'YOUR_PASSWORD',
        );
    `}
/>

<h6 class="m-b-xs">API详情</h6>
<div class="tabs">
    <div class="tabs-header compact">
        {#each apiTabs as tab, i}
            <button class="tab-item" class:active={activeApiTab == i} on:click={() => (activeApiTab = i)}>
                <div class="txt">{tab.title}</div>
            </button>
        {/each}
    </div>
    <div class="tabs-content">
        {#each apiTabs as tab, i}
            <div class="tab-item" class:active={activeApiTab == i}>
                <svelte:component this={tab.component} {collection} />
            </div>
        {/each}
    </div>
</div>
