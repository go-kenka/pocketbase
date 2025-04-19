import{S as re,i as ae,s as pe,V as be,W as ue,J as P,h as s,d as se,t as ne,a as ie,I as me,l as n,n as w,m as ce,u as b,A as I,v as a,c as le,w as u,p as de}from"./index-D49pSSYG.js";function fe(t){var B,U,A,L,W,H,T,q,J,M,j,N;let i,m,c=t[0].name+"",p,d,v,f,D,$,_,l,C,h,O,g,S,R,y,r,k;return l=new be({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${t[1]}');

        ...

        // (Optionally) authenticate
        await pb.collection('users').authWithPassword('test@example.com', '123456');

        // Subscribe to changes in any ${(B=t[0])==null?void 0:B.name} record
        pb.collection('${(U=t[0])==null?void 0:U.name}').subscribe('*', function (e) {
            console.log(e.action);
            console.log(e.record);
        }, { /* other options like: filter, expand, custom headers, etc. */ });

        // Subscribe to changes only in the specified record
        pb.collection('${(A=t[0])==null?void 0:A.name}').subscribe('RECORD_ID', function (e) {
            console.log(e.action);
            console.log(e.record);
        }, { /* other options like: filter, expand, custom headers, etc. */ });

        // Unsubscribe
        pb.collection('${(L=t[0])==null?void 0:L.name}').unsubscribe('RECORD_ID'); // remove all 'RECORD_ID' subscriptions
        pb.collection('${(W=t[0])==null?void 0:W.name}').unsubscribe('*'); // remove all '*' topic subscriptions
        pb.collection('${(H=t[0])==null?void 0:H.name}').unsubscribe(); // remove all subscriptions in the collection
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${t[1]}');

        ...

        // (Optionally) authenticate
        await pb.collection('users').authWithPassword('test@example.com', '123456');

        // Subscribe to changes in any ${(T=t[0])==null?void 0:T.name} record
        pb.collection('${(q=t[0])==null?void 0:q.name}').subscribe('*', (e) {
            print(e.action);
            print(e.record);
        }, /* other options like: filter, expand, custom headers, etc. */);

        // Subscribe to changes only in the specified record
        pb.collection('${(J=t[0])==null?void 0:J.name}').subscribe('RECORD_ID', (e) {
            print(e.action);
            print(e.record);
        }, /* other options like: filter, expand, custom headers, etc. */);

        // Unsubscribe
        pb.collection('${(M=t[0])==null?void 0:M.name}').unsubscribe('RECORD_ID'); // remove all 'RECORD_ID' subscriptions
        pb.collection('${(j=t[0])==null?void 0:j.name}').unsubscribe('*'); // remove all '*' topic subscriptions
        pb.collection('${(N=t[0])==null?void 0:N.name}').unsubscribe(); // remove all subscriptions in the collection
    `}}),r=new ue({props:{content:JSON.stringify({action:"create",record:P.dummyCollectionRecord(t[0])},null,2).replace('"action": "create"','"action": "create" // create, update or delete')}}),{c(){i=b("h3"),m=I("实时 ("),p=I(c),d=I(")"),v=a(),f=b("div"),f.innerHTML=`<p>通过服务器发送事件（SSE）订阅实时更改。</p> <p>事件将在记录的<strong>创建</strong>、<strong>更新</strong>
        和<strong>删除</strong>操作时发送（参见下方的&quot;事件数据格式&quot;部分）。</p>`,D=a(),$=b("div"),$.innerHTML=`<div class="icon"><i class="ri-information-line"></i></div> <div class="contet"><p><strong>您可以订阅单条记录或整个集合。</strong></p> <p>当您订阅<strong>单条记录</strong>时，系统将使用集合的
            <strong>ViewRule</strong>来确定订阅者是否有权限接收事件消息。</p> <p>当您订阅<strong>整个集合</strong>时，系统将使用集合的
            <strong>ListRule</strong>来确定订阅者是否有权限接收事件消息。</p></div>`,_=a(),le(l.$$.fragment),C=a(),h=b("h6"),h.textContent="API 详情",O=a(),g=b("div"),g.innerHTML='<strong class="label label-primary">SSE</strong> <div class="content"><p>/api/realtime</p></div>',S=a(),R=b("div"),R.textContent="事件数据格式",y=a(),le(r.$$.fragment),u(i,"class","m-b-sm"),u(f,"class","content txt-lg m-b-sm"),u($,"class","alert alert-info m-t-10 m-b-sm"),u(h,"class","m-b-xs"),u(g,"class","alert"),u(R,"class","section-title")},m(e,o){n(e,i,o),w(i,m),w(i,p),w(i,d),n(e,v,o),n(e,f,o),n(e,D,o),n(e,$,o),n(e,_,o),ce(l,e,o),n(e,C,o),n(e,h,o),n(e,O,o),n(e,g,o),n(e,S,o),n(e,R,o),n(e,y,o),ce(r,e,o),k=!0},p(e,[o]){var z,F,G,K,Q,X,Y,Z,x,ee,oe,te;(!k||o&1)&&c!==(c=e[0].name+"")&&me(p,c);const E={};o&3&&(E.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[1]}');

        ...

        // (Optionally) authenticate
        await pb.collection('users').authWithPassword('test@example.com', '123456');

        // Subscribe to changes in any ${(z=e[0])==null?void 0:z.name} record
        pb.collection('${(F=e[0])==null?void 0:F.name}').subscribe('*', function (e) {
            console.log(e.action);
            console.log(e.record);
        }, { /* other options like: filter, expand, custom headers, etc. */ });

        // Subscribe to changes only in the specified record
        pb.collection('${(G=e[0])==null?void 0:G.name}').subscribe('RECORD_ID', function (e) {
            console.log(e.action);
            console.log(e.record);
        }, { /* other options like: filter, expand, custom headers, etc. */ });

        // Unsubscribe
        pb.collection('${(K=e[0])==null?void 0:K.name}').unsubscribe('RECORD_ID'); // remove all 'RECORD_ID' subscriptions
        pb.collection('${(Q=e[0])==null?void 0:Q.name}').unsubscribe('*'); // remove all '*' topic subscriptions
        pb.collection('${(X=e[0])==null?void 0:X.name}').unsubscribe(); // remove all subscriptions in the collection
    `),o&3&&(E.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[1]}');

        ...

        // (Optionally) authenticate
        await pb.collection('users').authWithPassword('test@example.com', '123456');

        // Subscribe to changes in any ${(Y=e[0])==null?void 0:Y.name} record
        pb.collection('${(Z=e[0])==null?void 0:Z.name}').subscribe('*', (e) {
            print(e.action);
            print(e.record);
        }, /* other options like: filter, expand, custom headers, etc. */);

        // Subscribe to changes only in the specified record
        pb.collection('${(x=e[0])==null?void 0:x.name}').subscribe('RECORD_ID', (e) {
            print(e.action);
            print(e.record);
        }, /* other options like: filter, expand, custom headers, etc. */);

        // Unsubscribe
        pb.collection('${(ee=e[0])==null?void 0:ee.name}').unsubscribe('RECORD_ID'); // remove all 'RECORD_ID' subscriptions
        pb.collection('${(oe=e[0])==null?void 0:oe.name}').unsubscribe('*'); // remove all '*' topic subscriptions
        pb.collection('${(te=e[0])==null?void 0:te.name}').unsubscribe(); // remove all subscriptions in the collection
    `),l.$set(E);const V={};o&1&&(V.content=JSON.stringify({action:"create",record:P.dummyCollectionRecord(e[0])},null,2).replace('"action": "create"','"action": "create" // create, update or delete')),r.$set(V)},i(e){k||(ie(l.$$.fragment,e),ie(r.$$.fragment,e),k=!0)},o(e){ne(l.$$.fragment,e),ne(r.$$.fragment,e),k=!1},d(e){e&&(s(i),s(v),s(f),s(D),s($),s(_),s(C),s(h),s(O),s(g),s(S),s(R),s(y)),se(l,e),se(r,e)}}}function $e(t,i,m){let c,{collection:p}=i;return t.$$set=d=>{"collection"in d&&m(0,p=d.collection)},m(1,c=P.getApiExampleUrl(de.baseURL)),[p,c]}class ge extends re{constructor(i){super(),ae(this,i,$e,fe,pe,{collection:0})}}export{ge as default};
