import{S as Re,i as Ee,s as Be,V as Ie,X as j,h as f,d as Ce,t as te,a as le,I as ee,Z as ke,_ as Oe,C as Pe,$ as Te,D as Ae,l as p,n as i,m as we,u as c,A as $,v as h,c as De,w as m,J as Me,p as qe,k as z,o as Le,W as Se}from"./index-D49pSSYG.js";function he(a,l,s){const n=a.slice();return n[6]=l[s],n}function ge(a,l,s){const n=a.slice();return n[6]=l[s],n}function ve(a){let l;return{c(){l=c("p"),l.innerHTML="Requires superuser <code>Authorization:TOKEN</code> header",m(l,"class","txt-hint txt-sm txt-right")},m(s,n){p(s,l,n)},d(s){s&&f(l)}}}function $e(a,l){let s,n,k;function r(){return l[5](l[6])}return{key:a,first:null,c(){s=c("button"),s.textContent=`${l[6].code} `,m(s,"class","tab-item"),z(s,"active",l[2]===l[6].code),this.first=s},m(o,d){p(o,s,d),n||(k=Le(s,"click",r),n=!0)},p(o,d){l=o,d&20&&z(s,"active",l[2]===l[6].code)},d(o){o&&f(s),n=!1,k()}}}function ye(a,l){let s,n,k,r;return n=new Se({props:{content:l[6].body}}),{key:a,first:null,c(){s=c("div"),De(n.$$.fragment),k=h(),m(s,"class","tab-item"),z(s,"active",l[2]===l[6].code),this.first=s},m(o,d){p(o,s,d),we(n,s,null),i(s,k),r=!0},p(o,d){l=o,(!r||d&20)&&z(s,"active",l[2]===l[6].code)},i(o){r||(le(n.$$.fragment,o),r=!0)},o(o){te(n.$$.fragment,o),r=!1},d(o){o&&f(s),Ce(n)}}}function He(a){var pe,me;let l,s,n=a[0].name+"",k,r,o,d,y,C,F,q=a[0].name+"",J,se,K,w,N,B,V,g,L,ae,S,E,ne,W,H=a[0].name+"",X,oe,Z,ie,G,I,Q,O,Y,P,x,D,T,v=[],ce=new Map,re,A,b=[],de=new Map,R;w=new Ie({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${a[3]}');

        ...

        await pb.collection('${(pe=a[0])==null?void 0:pe.name}').delete('RECORD_ID');
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${a[3]}');

        ...

        await pb.collection('${(me=a[0])==null?void 0:me.name}').delete('RECORD_ID');
    `}});let _=a[1]&&ve(),U=j(a[4]);const ue=e=>e[6].code;for(let e=0;e<U.length;e+=1){let t=ge(a,U,e),u=ue(t);ce.set(u,v[e]=$e(u,t))}let M=j(a[4]);const fe=e=>e[6].code;for(let e=0;e<M.length;e+=1){let t=he(a,M,e),u=fe(t);de.set(u,b[e]=ye(u,t))}return{c(){l=c("h3"),s=$("删除 ("),k=$(n),r=$(")"),o=h(),d=c("div"),y=c("p"),C=$("删除单个 "),F=c("strong"),J=$(q),se=$(" 记录。"),K=h(),De(w.$$.fragment),N=h(),B=c("h6"),B.textContent="API 详情",V=h(),g=c("div"),L=c("strong"),L.textContent="DELETE",ae=h(),S=c("div"),E=c("p"),ne=$("/api/collections/"),W=c("strong"),X=$(H),oe=$("/records/"),Z=c("strong"),Z.textContent=":id",ie=h(),_&&_.c(),G=h(),I=c("div"),I.textContent="路径参数",Q=h(),O=c("table"),O.innerHTML='<thead><tr><th>参数</th> <th>类型</th> <th width="60%">描述</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>要删除的记录ID。</td></tr></tbody>',Y=h(),P=c("div"),P.textContent="响应",x=h(),D=c("div"),T=c("div");for(let e=0;e<v.length;e+=1)v[e].c();re=h(),A=c("div");for(let e=0;e<b.length;e+=1)b[e].c();m(l,"class","m-b-sm"),m(d,"class","content txt-lg m-b-sm"),m(B,"class","m-b-xs"),m(L,"class","label label-primary"),m(S,"class","content"),m(g,"class","alert alert-danger"),m(I,"class","section-title"),m(O,"class","table-compact table-border m-b-base"),m(P,"class","section-title"),m(T,"class","tabs-header compact combined left"),m(A,"class","tabs-content"),m(D,"class","tabs")},m(e,t){p(e,l,t),i(l,s),i(l,k),i(l,r),p(e,o,t),p(e,d,t),i(d,y),i(y,C),i(y,F),i(F,J),i(y,se),p(e,K,t),we(w,e,t),p(e,N,t),p(e,B,t),p(e,V,t),p(e,g,t),i(g,L),i(g,ae),i(g,S),i(S,E),i(E,ne),i(E,W),i(W,X),i(E,oe),i(E,Z),i(g,ie),_&&_.m(g,null),p(e,G,t),p(e,I,t),p(e,Q,t),p(e,O,t),p(e,Y,t),p(e,P,t),p(e,x,t),p(e,D,t),i(D,T);for(let u=0;u<v.length;u+=1)v[u]&&v[u].m(T,null);i(D,re),i(D,A);for(let u=0;u<b.length;u+=1)b[u]&&b[u].m(A,null);R=!0},p(e,[t]){var be,_e;(!R||t&1)&&n!==(n=e[0].name+"")&&ee(k,n),(!R||t&1)&&q!==(q=e[0].name+"")&&ee(J,q);const u={};t&9&&(u.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[3]}');

        ...

        await pb.collection('${(be=e[0])==null?void 0:be.name}').delete('RECORD_ID');
    `),t&9&&(u.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        await pb.collection('${(_e=e[0])==null?void 0:_e.name}').delete('RECORD_ID');
    `),w.$set(u),(!R||t&1)&&H!==(H=e[0].name+"")&&ee(X,H),e[1]?_||(_=ve(),_.c(),_.m(g,null)):_&&(_.d(1),_=null),t&20&&(U=j(e[4]),v=ke(v,t,ue,1,e,U,ce,T,Oe,$e,null,ge)),t&20&&(M=j(e[4]),Pe(),b=ke(b,t,fe,1,e,M,de,A,Te,ye,null,he),Ae())},i(e){if(!R){le(w.$$.fragment,e);for(let t=0;t<M.length;t+=1)le(b[t]);R=!0}},o(e){te(w.$$.fragment,e);for(let t=0;t<b.length;t+=1)te(b[t]);R=!1},d(e){e&&(f(l),f(o),f(d),f(K),f(N),f(B),f(V),f(g),f(G),f(I),f(Q),f(O),f(Y),f(P),f(x),f(D)),Ce(w,e),_&&_.d();for(let t=0;t<v.length;t+=1)v[t].d();for(let t=0;t<b.length;t+=1)b[t].d()}}}function Ue(a,l,s){let n,k,{collection:r}=l,o=204,d=[];const y=C=>s(2,o=C.code);return a.$$set=C=>{"collection"in C&&s(0,r=C.collection)},a.$$.update=()=>{a.$$.dirty&1&&s(1,n=(r==null?void 0:r.deleteRule)===null),a.$$.dirty&3&&r!=null&&r.id&&(d.push({code:204,body:`
                null
            `}),d.push({code:400,body:`
                {
                  "status": 400,
                  "message": "Failed to delete record. Make sure that the record is not part of a required relation reference.",
                  "data": {}
                }
            `}),n&&d.push({code:403,body:`
                    {
                      "status": 403,
                      "message": "Only superusers can access this action.",
                      "data": {}
                    }
                `}),d.push({code:404,body:`
                {
                  "status": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `}))},s(3,k=Me.getApiExampleUrl(qe.baseURL)),[r,n,o,k,d,y]}class ze extends Re{constructor(l){super(),Ee(this,l,Ue,He,Be,{collection:0})}}export{ze as default};
