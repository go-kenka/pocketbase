import{S as Jt,i as Nt,s as Et,V as It,W as jt,X as K,h as r,d as Q,t as j,a as J,I as pt,Z as Lt,_ as Zt,C as Kt,$ as Qt,D as Xt,l as c,n as a,m as X,u as s,A as _,v as h,c as z,w as p,J as Bt,p as zt,k as G,o as Gt}from"./index-D49pSSYG.js";import{F as Yt}from"./FieldsQueryParam-CHSdJRip.js";function qt(n,l,o){const i=n.slice();return i[5]=l[o],i}function Ft(n,l,o){const i=n.slice();return i[5]=l[o],i}function Ht(n,l){let o,i=l[5].code+"",f,g,d,b;function k(){return l[4](l[5])}return{key:n,first:null,c(){o=s("button"),f=_(i),g=h(),p(o,"class","tab-item"),G(o,"active",l[1]===l[5].code),this.first=o},m(v,O){c(v,o,O),a(o,f),a(o,g),d||(b=Gt(o,"click",k),d=!0)},p(v,O){l=v,O&4&&i!==(i=l[5].code+"")&&pt(f,i),O&6&&G(o,"active",l[1]===l[5].code)},d(v){v&&r(o),d=!1,b()}}}function Vt(n,l){let o,i,f,g;return i=new jt({props:{content:l[5].body}}),{key:n,first:null,c(){o=s("div"),z(i.$$.fragment),f=h(),p(o,"class","tab-item"),G(o,"active",l[1]===l[5].code),this.first=o},m(d,b){c(d,o,b),X(i,o,null),a(o,f),g=!0},p(d,b){l=d;const k={};b&4&&(k.content=l[5].body),i.$set(k),(!g||b&6)&&G(o,"active",l[1]===l[5].code)},i(d){g||(J(i.$$.fragment,d),g=!0)},o(d){j(i.$$.fragment,d),g=!1},d(d){d&&r(o),Q(i)}}}function xt(n){let l,o,i=n[0].name+"",f,g,d,b,k,v,O,W,Y,A,N,bt,E,R,mt,x,I=n[0].name+"",tt,ft,et,U,at,P,lt,L,ot,S,st,gt,B,y,nt,_t,it,kt,m,vt,D,$t,wt,Ot,rt,At,ct,St,yt,Ct,dt,Dt,Tt,T,ut,q,ht,C,F,w=[],Mt=new Map,Wt,H,$=[],Rt=new Map,M;v=new It({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${n[3]}');

        ...

        // OAuth2 authentication with a single realtime call.
        //
        // Make sure to register ${n[3]}/api/oauth2-redirect as redirect url.
        const authData = await pb.collection('${n[0].name}').authWithOAuth2({ provider: 'google' });

        // OR authenticate with manual OAuth2 code exchange
        // const authData = await pb.collection('${n[0].name}').authWithOAuth2Code(...);

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';
        import 'package:url_launcher/url_launcher.dart';

        final pb = PocketBase('${n[3]}');

        ...

        // OAuth2 authentication with a single realtime call.
        //
        // Make sure to register ${n[3]}/api/oauth2-redirect as redirect url.
        final authData = await pb.collection('${n[0].name}').authWithOAuth2('google', (url) async {
          await launchUrl(url);
        });

        // OR authenticate with manual OAuth2 code exchange
        // final authData = await pb.collection('${n[0].name}').authWithOAuth2Code(...);

        // after the above you can also access the auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `}}),D=new jt({props:{content:"?expand=relField1,relField2.subRelField"}}),T=new Yt({props:{prefix:"record."}});let Z=K(n[2]);const Ut=t=>t[5].code;for(let t=0;t<Z.length;t+=1){let e=Ft(n,Z,t),u=Ut(e);Mt.set(u,w[t]=Ht(u,e))}let V=K(n[2]);const Pt=t=>t[5].code;for(let t=0;t<V.length;t+=1){let e=qt(n,V,t),u=Pt(e);Rt.set(u,$[t]=Vt(u,e))}return{c(){l=s("h3"),o=_("OAuth2认证 ("),f=_(i),g=_(")"),d=h(),b=s("div"),b.innerHTML=`<p>通过OAuth2提供商进行认证，并返回新的认证令牌和记录数据。</p> <p>更多详细信息请查看
        <a href="https://pocketbase.io/docs/authentication#authenticate-with-oauth2" target="_blank" rel="noopener noreferrer">OAuth2集成文档
        </a>。</p>`,k=h(),z(v.$$.fragment),O=h(),W=s("h6"),W.textContent="API详情",Y=h(),A=s("div"),N=s("strong"),N.textContent="POST",bt=h(),E=s("div"),R=s("p"),mt=_("/api/collections/"),x=s("strong"),tt=_(I),ft=_("/auth-with-oauth2"),et=h(),U=s("div"),U.textContent="请求体参数",at=h(),P=s("table"),P.innerHTML=`<thead><tr><th>参数</th> <th>类型</th> <th width="50%">描述</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-success">必填</span> <span>provider</span></div></td> <td><span class="label">String</span></td> <td>OAuth2客户端提供商的名称（例如：&quot;google&quot;）。</td></tr> <tr><td><div class="inline-flex"><span class="label label-success">必填</span> <span>code</span></div></td> <td><span class="label">String</span></td> <td>初始请求返回的授权码。</td></tr> <tr><td><div class="inline-flex"><span class="label label-success">必填</span> <span>codeVerifier</span></div></td> <td><span class="label">String</span></td> <td>作为code_challenge一部分的初始请求中发送的代码验证器。</td></tr> <tr><td><div class="inline-flex"><span class="label label-success">必填</span> <span>redirectURL</span></div></td> <td><span class="label">String</span></td> <td>初始请求中发送的重定向URL。</td></tr> <tr><td><div class="inline-flex"><span class="label label-warning">可选</span> <span>createData</span></div></td> <td><span class="label">Object</span></td> <td><p>在OAuth2注册时用于创建认证记录的可选数据。</p> <p>创建的认证记录必须符合常规<strong>create</strong>操作中的相同要求和验证规则。
                    <br/> <em>数据只能是<code>json</code>格式，即在OAuth2注册过程中目前不支持<code>multipart/form-data</code>和文件上传。</em></p></td></tr></tbody>`,lt=h(),L=s("div"),L.textContent="查询参数",ot=h(),S=s("table"),st=s("thead"),st.innerHTML='<tr><th>参数</th> <th>类型</th> <th width="60%">描述</th></tr>',gt=h(),B=s("tbody"),y=s("tr"),nt=s("td"),nt.textContent="expand",_t=h(),it=s("td"),it.innerHTML='<span class="label">String</span>',kt=h(),m=s("td"),vt=_(`自动展开记录关联。例如：\r
                `),z(D.$$.fragment),$t=_(`\r
                支持最多6层深度的嵌套关联展开。`),wt=s("br"),Ot=_(`\r
                展开的关联将附加到记录的`),rt=s("code"),rt.textContent="expand",At=_("属性下 （例如："),ct=s("code"),ct.textContent='"expand": {"relField1": {...}, ...}',St=_(`）。\r
                `),yt=s("br"),Ct=_(`\r
                只有请求用户具有`),dt=s("strong"),dt.textContent="查看",Dt=_("权限的关联才会被展开。"),Tt=h(),z(T.$$.fragment),ut=h(),q=s("div"),q.textContent="响应",ht=h(),C=s("div"),F=s("div");for(let t=0;t<w.length;t+=1)w[t].c();Wt=h(),H=s("div");for(let t=0;t<$.length;t+=1)$[t].c();p(l,"class","m-b-sm"),p(b,"class","content txt-lg m-b-sm"),p(W,"class","m-b-xs"),p(N,"class","label label-primary"),p(E,"class","content"),p(A,"class","alert alert-success"),p(U,"class","section-title"),p(P,"class","table-compact table-border m-b-base"),p(L,"class","section-title"),p(S,"class","table-compact table-border m-b-base"),p(q,"class","section-title"),p(F,"class","tabs-header compact combined left"),p(H,"class","tabs-content"),p(C,"class","tabs")},m(t,e){c(t,l,e),a(l,o),a(l,f),a(l,g),c(t,d,e),c(t,b,e),c(t,k,e),X(v,t,e),c(t,O,e),c(t,W,e),c(t,Y,e),c(t,A,e),a(A,N),a(A,bt),a(A,E),a(E,R),a(R,mt),a(R,x),a(x,tt),a(R,ft),c(t,et,e),c(t,U,e),c(t,at,e),c(t,P,e),c(t,lt,e),c(t,L,e),c(t,ot,e),c(t,S,e),a(S,st),a(S,gt),a(S,B),a(B,y),a(y,nt),a(y,_t),a(y,it),a(y,kt),a(y,m),a(m,vt),X(D,m,null),a(m,$t),a(m,wt),a(m,Ot),a(m,rt),a(m,At),a(m,ct),a(m,St),a(m,yt),a(m,Ct),a(m,dt),a(m,Dt),a(B,Tt),X(T,B,null),c(t,ut,e),c(t,q,e),c(t,ht,e),c(t,C,e),a(C,F);for(let u=0;u<w.length;u+=1)w[u]&&w[u].m(F,null);a(C,Wt),a(C,H);for(let u=0;u<$.length;u+=1)$[u]&&$[u].m(H,null);M=!0},p(t,[e]){(!M||e&1)&&i!==(i=t[0].name+"")&&pt(f,i);const u={};e&9&&(u.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${t[3]}');

        ...

        // OAuth2 authentication with a single realtime call.
        //
        // Make sure to register ${t[3]}/api/oauth2-redirect as redirect url.
        const authData = await pb.collection('${t[0].name}').authWithOAuth2({ provider: 'google' });

        // OR authenticate with manual OAuth2 code exchange
        // const authData = await pb.collection('${t[0].name}').authWithOAuth2Code(...);

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `),e&9&&(u.dart=`
        import 'package:pocketbase/pocketbase.dart';
        import 'package:url_launcher/url_launcher.dart';

        final pb = PocketBase('${t[3]}');

        ...

        // OAuth2 authentication with a single realtime call.
        //
        // Make sure to register ${t[3]}/api/oauth2-redirect as redirect url.
        final authData = await pb.collection('${t[0].name}').authWithOAuth2('google', (url) async {
          await launchUrl(url);
        });

        // OR authenticate with manual OAuth2 code exchange
        // final authData = await pb.collection('${t[0].name}').authWithOAuth2Code(...);

        // after the above you can also access the auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `),v.$set(u),(!M||e&1)&&I!==(I=t[0].name+"")&&pt(tt,I),e&6&&(Z=K(t[2]),w=Lt(w,e,Ut,1,t,Z,Mt,F,Zt,Ht,null,Ft)),e&6&&(V=K(t[2]),Kt(),$=Lt($,e,Pt,1,t,V,Rt,H,Qt,Vt,null,qt),Xt())},i(t){if(!M){J(v.$$.fragment,t),J(D.$$.fragment,t),J(T.$$.fragment,t);for(let e=0;e<V.length;e+=1)J($[e]);M=!0}},o(t){j(v.$$.fragment,t),j(D.$$.fragment,t),j(T.$$.fragment,t);for(let e=0;e<$.length;e+=1)j($[e]);M=!1},d(t){t&&(r(l),r(d),r(b),r(k),r(O),r(W),r(Y),r(A),r(et),r(U),r(at),r(P),r(lt),r(L),r(ot),r(S),r(ut),r(q),r(ht),r(C)),Q(v,t),Q(D),Q(T);for(let e=0;e<w.length;e+=1)w[e].d();for(let e=0;e<$.length;e+=1)$[e].d()}}}function te(n,l,o){let i,{collection:f}=l,g=200,d=[];const b=k=>o(1,g=k.code);return n.$$set=k=>{"collection"in k&&o(0,f=k.collection)},n.$$.update=()=>{n.$$.dirty&1&&o(2,d=[{code:200,body:JSON.stringify({token:"JWT_AUTH_TOKEN",record:Bt.dummyCollectionRecord(f),meta:{id:"abc123",name:"John Doe",username:"john.doe",email:"test@example.com",avatarURL:"https://example.com/avatar.png",accessToken:"...",refreshToken:"...",expiry:"2022-01-01 10:00:00.123Z",isNew:!1,rawUser:{}}},null,2)},{code:400,body:`
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
            `}])},o(3,i=Bt.getApiExampleUrl(zt.baseURL)),[f,g,d,i,b]}class le extends Jt{constructor(l){super(),Nt(this,l,te,xt,Et,{collection:0})}}export{le as default};
