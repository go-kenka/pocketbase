import{S as Pe,i as Be,s as Se,V as Te,X as G,h as d,d as ne,t as N,a as O,I as Q,Z as we,_ as Le,C as Ue,$ as je,D as qe,l as u,n,m as ae,u as c,A as y,v as k,c as ie,w as _,p as oe,J as De,k as R,o as Ee,W as Fe}from"./index-D49pSSYG.js";import{F as He}from"./FieldsQueryParam-CHSdJRip.js";function ye(a,s,l){const o=a.slice();return o[8]=s[l],o}function Me(a,s,l){const o=a.slice();return o[8]=s[l],o}function Ae(a,s){let l,o=s[8].code+"",p,b,i,f;function m(){return s[6](s[8])}return{key:a,first:null,c(){l=c("button"),p=y(o),b=k(),_(l,"class","tab-item"),R(l,"active",s[1]===s[8].code),this.first=l},m(v,$){u(v,l,$),n(l,p),n(l,b),i||(f=Ee(l,"click",m),i=!0)},p(v,$){s=v,$&4&&o!==(o=s[8].code+"")&&Q(p,o),$&6&&R(l,"active",s[1]===s[8].code)},d(v){v&&d(l),i=!1,f()}}}function Ce(a,s){let l,o,p,b;return o=new Fe({props:{content:s[8].body}}),{key:a,first:null,c(){l=c("div"),ie(o.$$.fragment),p=k(),_(l,"class","tab-item"),R(l,"active",s[1]===s[8].code),this.first=l},m(i,f){u(i,l,f),ae(o,l,null),n(l,p),b=!0},p(i,f){s=i;const m={};f&4&&(m.content=s[8].body),o.$set(m),(!b||f&6)&&R(l,"active",s[1]===s[8].code)},i(i){b||(O(o.$$.fragment,i),b=!0)},o(i){N(o.$$.fragment,i),b=!1},d(i){i&&d(l),ne(o)}}}function Ie(a){var ke,ge;let s,l,o=a[0].name+"",p,b,i,f,m,v,$,g=a[0].name+"",V,ce,W,M,X,T,Z,A,F,re,H,L,de,z,I=a[0].name+"",K,ue,Y,U,x,C,ee,fe,te,S,le,j,se,P,q,w=[],me=new Map,pe,D,h=[],be=new Map,B;M=new Te({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${a[3]}');

        ...

        const result = await pb.collection('${(ke=a[0])==null?void 0:ke.name}').listAuthMethods();
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${a[3]}');

        ...

        final result = await pb.collection('${(ge=a[0])==null?void 0:ge.name}').listAuthMethods();
    `}}),S=new He({});let J=G(a[2]);const _e=e=>e[8].code;for(let e=0;e<J.length;e+=1){let t=Me(a,J,e),r=_e(t);me.set(r,w[e]=Ae(r,t))}let E=G(a[2]);const he=e=>e[8].code;for(let e=0;e<E.length;e+=1){let t=ye(a,E,e),r=he(t);be.set(r,h[e]=Ce(r,t))}return{c(){s=c("h3"),l=y("认证方法列表 ("),p=y(o),b=y(")"),i=k(),f=c("div"),m=c("p"),v=y("返回"),$=c("strong"),V=y(g),ce=y("集合所有允许的认证方法的公开列表。"),W=k(),ie(M.$$.fragment),X=k(),T=c("h6"),T.textContent="API 详情",Z=k(),A=c("div"),F=c("strong"),F.textContent="GET",re=k(),H=c("div"),L=c("p"),de=y("/api/collections/"),z=c("strong"),K=y(I),ue=y("/auth-methods"),Y=k(),U=c("div"),U.textContent="查询参数",x=k(),C=c("table"),ee=c("thead"),ee.innerHTML='<tr><th>参数</th> <th>类型</th> <th width="50%">描述</th></tr>',fe=k(),te=c("tbody"),ie(S.$$.fragment),le=k(),j=c("div"),j.textContent="响应",se=k(),P=c("div"),q=c("div");for(let e=0;e<w.length;e+=1)w[e].c();pe=k(),D=c("div");for(let e=0;e<h.length;e+=1)h[e].c();_(s,"class","m-b-sm"),_(f,"class","content txt-lg m-b-sm"),_(T,"class","m-b-xs"),_(F,"class","label label-primary"),_(H,"class","content"),_(A,"class","alert alert-info"),_(U,"class","section-title"),_(C,"class","table-compact table-border m-b-base"),_(j,"class","section-title"),_(q,"class","tabs-header compact combined left"),_(D,"class","tabs-content"),_(P,"class","tabs")},m(e,t){u(e,s,t),n(s,l),n(s,p),n(s,b),u(e,i,t),u(e,f,t),n(f,m),n(m,v),n(m,$),n($,V),n(m,ce),u(e,W,t),ae(M,e,t),u(e,X,t),u(e,T,t),u(e,Z,t),u(e,A,t),n(A,F),n(A,re),n(A,H),n(H,L),n(L,de),n(L,z),n(z,K),n(L,ue),u(e,Y,t),u(e,U,t),u(e,x,t),u(e,C,t),n(C,ee),n(C,fe),n(C,te),ae(S,te,null),u(e,le,t),u(e,j,t),u(e,se,t),u(e,P,t),n(P,q);for(let r=0;r<w.length;r+=1)w[r]&&w[r].m(q,null);n(P,pe),n(P,D);for(let r=0;r<h.length;r+=1)h[r]&&h[r].m(D,null);B=!0},p(e,[t]){var ve,$e;(!B||t&1)&&o!==(o=e[0].name+"")&&Q(p,o),(!B||t&1)&&g!==(g=e[0].name+"")&&Q(V,g);const r={};t&9&&(r.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[3]}');

        ...

        const result = await pb.collection('${(ve=e[0])==null?void 0:ve.name}').listAuthMethods();
    `),t&9&&(r.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        final result = await pb.collection('${($e=e[0])==null?void 0:$e.name}').listAuthMethods();
    `),M.$set(r),(!B||t&1)&&I!==(I=e[0].name+"")&&Q(K,I),t&6&&(J=G(e[2]),w=we(w,t,_e,1,e,J,me,q,Le,Ae,null,Me)),t&6&&(E=G(e[2]),Ue(),h=we(h,t,he,1,e,E,be,D,je,Ce,null,ye),qe())},i(e){if(!B){O(M.$$.fragment,e),O(S.$$.fragment,e);for(let t=0;t<E.length;t+=1)O(h[t]);B=!0}},o(e){N(M.$$.fragment,e),N(S.$$.fragment,e);for(let t=0;t<h.length;t+=1)N(h[t]);B=!1},d(e){e&&(d(s),d(i),d(f),d(W),d(X),d(T),d(Z),d(A),d(Y),d(U),d(x),d(C),d(le),d(j),d(se),d(P)),ne(M,e),ne(S);for(let t=0;t<w.length;t+=1)w[t].d();for(let t=0;t<h.length;t+=1)h[t].d()}}}function Je(a,s,l){let o,{collection:p}=s,b=200,i=[],f={},m=!1;v();async function v(){l(5,m=!0);try{l(4,f=await oe.collection(p.name).listAuthMethods())}catch(g){oe.error(g)}l(5,m=!1)}const $=g=>l(1,b=g.code);return a.$$set=g=>{"collection"in g&&l(0,p=g.collection)},a.$$.update=()=>{a.$$.dirty&48&&l(2,i=[{code:200,body:m?"...":JSON.stringify(f,null,2)},{code:404,body:`
                {
                  "status": 404,
                  "message": "Missing collection context.",
                  "data": {}
                }
            `}])},l(3,o=De.getApiExampleUrl(oe.baseURL)),[p,b,i,o,f,m,$]}class Oe extends Pe{constructor(s){super(),Be(this,s,Je,Ie,Se,{collection:0})}}export{Oe as default};
