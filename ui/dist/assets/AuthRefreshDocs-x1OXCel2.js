import{S as Ie,i as Ke,s as We,V as ze,W as qe,X as W,h as d,d as z,t as J,a as N,I as de,Z as Oe,_ as Qe,C as Xe,$ as Ze,D as Ge,l as u,n as l,m as Q,u as s,A as k,v as p,c as X,w as b,J as Ee,p as Ye,k as Z,o as xe}from"./index-D49pSSYG.js";import{F as et}from"./FieldsQueryParam-CHSdJRip.js";function Je(r,o,a){const n=r.slice();return n[5]=o[a],n}function Ne(r,o,a){const n=r.slice();return n[5]=o[a],n}function Ue(r,o){let a,n=o[5].code+"",m,_,c,h;function g(){return o[4](o[5])}return{key:r,first:null,c(){a=s("button"),m=k(n),_=p(),b(a,"class","tab-item"),Z(a,"active",o[1]===o[5].code),this.first=a},m(v,w){u(v,a,w),l(a,m),l(a,_),c||(h=xe(a,"click",g),c=!0)},p(v,w){o=v,w&4&&n!==(n=o[5].code+"")&&de(m,n),w&6&&Z(a,"active",o[1]===o[5].code)},d(v){v&&d(a),c=!1,h()}}}function je(r,o){let a,n,m,_;return n=new qe({props:{content:o[5].body}}),{key:r,first:null,c(){a=s("div"),X(n.$$.fragment),m=p(),b(a,"class","tab-item"),Z(a,"active",o[1]===o[5].code),this.first=a},m(c,h){u(c,a,h),Q(n,a,null),l(a,m),_=!0},p(c,h){o=c;const g={};h&4&&(g.content=o[5].body),n.$set(g),(!_||h&6)&&Z(a,"active",o[1]===o[5].code)},i(c){_||(N(n.$$.fragment,c),_=!0)},o(c){J(n.$$.fragment,c),_=!1},d(c){c&&d(a),z(n)}}}function tt(r){var Me,He;let o,a,n=r[0].name+"",m,_,c,h,g,v,w,D,G,y,U,ue,j,F,pe,Y,q=r[0].name+"",x,he,fe,I,ee,M,te,C,le,be,H,T,oe,me,ae,_e,f,ke,R,ge,ve,$e,se,Se,ne,ye,we,Ce,re,Te,Pe,B,ce,L,ie,P,V,S=[],Re=new Map,Be,O,$=[],Ae=new Map,A;v=new ze({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${r[3]}');

        ...

        const authData = await pb.collection('${(Me=r[0])==null?void 0:Me.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${r[3]}');

        ...

        final authData = await pb.collection('${(He=r[0])==null?void 0:He.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);
    `}}),R=new qe({props:{content:"?expand=relField1,relField2.subRelField"}}),B=new et({props:{prefix:"record."}});let K=W(r[2]);const De=e=>e[5].code;for(let e=0;e<K.length;e+=1){let t=Ne(r,K,e),i=De(t);Re.set(i,S[e]=Ue(i,t))}let E=W(r[2]);const Fe=e=>e[5].code;for(let e=0;e<E.length;e+=1){let t=Je(r,E,e),i=Fe(t);Ae.set(i,$[e]=je(i,t))}return{c(){o=s("h3"),a=k("认证刷新 ("),m=k(n),_=k(")"),c=p(),h=s("div"),h.innerHTML="<p>为<strong>已认证的记录</strong>返回新的认证响应（令牌和记录数据）。</p> <p>此方法通常在页面/屏幕重新加载时被调用，以确保存储在 <code>pb.authStore</code> 中的数据仍然有效且是最新的。</p>",g=p(),X(v.$$.fragment),w=p(),D=s("h6"),D.textContent="API 详情",G=p(),y=s("div"),U=s("strong"),U.textContent="POST",ue=p(),j=s("div"),F=s("p"),pe=k("/api/collections/"),Y=s("strong"),x=k(q),he=k("/auth-refresh"),fe=p(),I=s("p"),I.innerHTML="需要 <code>Authorization:TOKEN</code> 请求头",ee=p(),M=s("div"),M.textContent="查询参数",te=p(),C=s("table"),le=s("thead"),le.innerHTML='<tr><th>参数</th> <th>类型</th> <th width="60%">描述</th></tr>',be=p(),H=s("tbody"),T=s("tr"),oe=s("td"),oe.textContent="expand",me=p(),ae=s("td"),ae.innerHTML='<span class="label">String</span>',_e=p(),f=s("td"),ke=k(`自动展开记录关联。示例：\r
                `),X(R.$$.fragment),ge=k(`\r
                支持最多6层深度的嵌套关联展开。`),ve=s("br"),$e=k(`\r
                展开的关联将附加到记录的 `),se=s("code"),se.textContent="expand",Se=k(` 属性下\r
                （例如：`),ne=s("code"),ne.textContent='"expand": {"relField1": {...}, ...}',ye=k(`）。\r
                `),we=s("br"),Ce=k(`\r
                只有请求用户具有`),re=s("strong"),re.textContent="查看",Te=k("权限的关联才会被展开。"),Pe=p(),X(B.$$.fragment),ce=p(),L=s("div"),L.textContent="响应",ie=p(),P=s("div"),V=s("div");for(let e=0;e<S.length;e+=1)S[e].c();Be=p(),O=s("div");for(let e=0;e<$.length;e+=1)$[e].c();b(o,"class","m-b-sm"),b(h,"class","content txt-lg m-b-sm"),b(D,"class","m-b-xs"),b(U,"class","label label-primary"),b(j,"class","content"),b(I,"class","txt-hint txt-sm txt-right"),b(y,"class","alert alert-success"),b(M,"class","section-title"),b(C,"class","table-compact table-border m-b-base"),b(L,"class","section-title"),b(V,"class","tabs-header compact combined left"),b(O,"class","tabs-content"),b(P,"class","tabs")},m(e,t){u(e,o,t),l(o,a),l(o,m),l(o,_),u(e,c,t),u(e,h,t),u(e,g,t),Q(v,e,t),u(e,w,t),u(e,D,t),u(e,G,t),u(e,y,t),l(y,U),l(y,ue),l(y,j),l(j,F),l(F,pe),l(F,Y),l(Y,x),l(F,he),l(y,fe),l(y,I),u(e,ee,t),u(e,M,t),u(e,te,t),u(e,C,t),l(C,le),l(C,be),l(C,H),l(H,T),l(T,oe),l(T,me),l(T,ae),l(T,_e),l(T,f),l(f,ke),Q(R,f,null),l(f,ge),l(f,ve),l(f,$e),l(f,se),l(f,Se),l(f,ne),l(f,ye),l(f,we),l(f,Ce),l(f,re),l(f,Te),l(H,Pe),Q(B,H,null),u(e,ce,t),u(e,L,t),u(e,ie,t),u(e,P,t),l(P,V);for(let i=0;i<S.length;i+=1)S[i]&&S[i].m(V,null);l(P,Be),l(P,O);for(let i=0;i<$.length;i+=1)$[i]&&$[i].m(O,null);A=!0},p(e,[t]){var Le,Ve;(!A||t&1)&&n!==(n=e[0].name+"")&&de(m,n);const i={};t&9&&(i.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[3]}');

        ...

        const authData = await pb.collection('${(Le=e[0])==null?void 0:Le.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);
    `),t&9&&(i.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        final authData = await pb.collection('${(Ve=e[0])==null?void 0:Ve.name}').authRefresh();

        // after the above you can also access the refreshed auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);
    `),v.$set(i),(!A||t&1)&&q!==(q=e[0].name+"")&&de(x,q),t&6&&(K=W(e[2]),S=Oe(S,t,De,1,e,K,Re,V,Qe,Ue,null,Ne)),t&6&&(E=W(e[2]),Xe(),$=Oe($,t,Fe,1,e,E,Ae,O,Ze,je,null,Je),Ge())},i(e){if(!A){N(v.$$.fragment,e),N(R.$$.fragment,e),N(B.$$.fragment,e);for(let t=0;t<E.length;t+=1)N($[t]);A=!0}},o(e){J(v.$$.fragment,e),J(R.$$.fragment,e),J(B.$$.fragment,e);for(let t=0;t<$.length;t+=1)J($[t]);A=!1},d(e){e&&(d(o),d(c),d(h),d(g),d(w),d(D),d(G),d(y),d(ee),d(M),d(te),d(C),d(ce),d(L),d(ie),d(P)),z(v,e),z(R),z(B);for(let t=0;t<S.length;t+=1)S[t].d();for(let t=0;t<$.length;t+=1)$[t].d()}}}function lt(r,o,a){let n,{collection:m}=o,_=200,c=[];const h=g=>a(1,_=g.code);return r.$$set=g=>{"collection"in g&&a(0,m=g.collection)},r.$$.update=()=>{r.$$.dirty&1&&a(2,c=[{code:200,body:JSON.stringify({token:"JWT_TOKEN",record:Ee.dummyCollectionRecord(m)},null,2)},{code:401,body:`
                {
                  "status": 401,
                  "message": "请求需要设置有效的记录授权令牌。",
                  "data": {}
                }
            `},{code:403,body:`
                {
                  "status": 403,
                  "message": "已授权的记录模型不允许执行此操作。",
                  "data": {}
                }
            `},{code:404,body:`
                {
                  "status": 404,
                  "message": "缺少认证记录上下文。",
                  "data": {}
                }
            `}])},a(3,n=Ee.getApiExampleUrl(Ye.baseURL)),[m,_,c,n,h]}class st extends Ie{constructor(o){super(),Ke(this,o,lt,tt,We,{collection:0})}}export{st as default};
