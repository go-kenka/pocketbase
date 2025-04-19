import{S as lt,i as st,s as nt,V as at,W as tt,X as Q,h as d,d as W,t as J,a as N,I as $e,Z as Ke,_ as ot,C as it,$ as dt,D as rt,l as r,n as l,m as X,u as a,A as _,v as b,c as Z,w as m,J as Qe,p as ct,k as Y,o as ut}from"./index-D49pSSYG.js";import{F as pt}from"./FieldsQueryParam-CHSdJRip.js";function We(o,s,n){const i=o.slice();return i[6]=s[n],i}function Xe(o,s,n){const i=o.slice();return i[6]=s[n],i}function Ze(o){let s;return{c(){s=a("p"),s.innerHTML="需要超级用户 <code>Authorization:TOKEN</code> 请求头",m(s,"class","txt-hint txt-sm txt-right")},m(n,i){r(n,s,i)},d(n){n&&d(s)}}}function Ye(o,s){let n,i,$;function u(){return s[5](s[6])}return{key:o,first:null,c(){n=a("button"),n.textContent=`${s[6].code} `,m(n,"class","tab-item"),Y(n,"active",s[2]===s[6].code),this.first=n},m(c,f){r(c,n,f),i||($=ut(n,"click",u),i=!0)},p(c,f){s=c,f&20&&Y(n,"active",s[2]===s[6].code)},d(c){c&&d(n),i=!1,$()}}}function et(o,s){let n,i,$,u;return i=new tt({props:{content:s[6].body}}),{key:o,first:null,c(){n=a("div"),Z(i.$$.fragment),$=b(),m(n,"class","tab-item"),Y(n,"active",s[2]===s[6].code),this.first=n},m(c,f){r(c,n,f),X(i,n,null),l(n,$),u=!0},p(c,f){s=c,(!u||f&20)&&Y(n,"active",s[2]===s[6].code)},i(c){u||(N(i.$$.fragment,c),u=!0)},o(c){J(i.$$.fragment,c),u=!1},d(c){c&&d(n),W(i)}}}function ft(o){var Ve,xe;let s,n,i=o[0].name+"",$,u,c,f,C,w,ee,V=o[0].name+"",te,ve,le,F,se,I,ne,v,x,ye,z,P,Ce,ae,G=o[0].name+"",oe,we,ie,Fe,de,A,re,M,ce,S,ue,R,pe,Re,H,O,fe,Oe,be,De,h,Te,B,Pe,Be,Ee,me,Ie,_e,Ae,Me,Se,he,He,Le,E,ke,L,ge,D,q,y=[],qe=new Map,Ue,U,k=[],je=new Map,T;F=new at({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${o[3]}');

        ...

        // 获取单条记录
        const record = await pb.collection('${(Ve=o[0])==null?void 0:Ve.name}').getOne('RECORD_ID', {
            expand: 'relField1,relField2.subRelField',
        });
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${o[3]}');

        ...

        // 获取单条记录
        final record = await pb.collection('${(xe=o[0])==null?void 0:xe.name}').getOne('RECORD_ID',
          expand: 'relField1,relField2.subRelField',
        );
    `}});let g=o[1]&&Ze();B=new tt({props:{content:"?expand=relField1,relField2.subRelField"}}),E=new pt({});let K=Q(o[4]);const Je=e=>e[6].code;for(let e=0;e<K.length;e+=1){let t=Xe(o,K,e),p=Je(t);qe.set(p,y[e]=Ye(p,t))}let j=Q(o[4]);const Ne=e=>e[6].code;for(let e=0;e<j.length;e+=1){let t=We(o,j,e),p=Ne(t);je.set(p,k[e]=et(p,t))}return{c(){s=a("h3"),n=_("查看 ("),$=_(i),u=_(")"),c=b(),f=a("div"),C=a("p"),w=_("获取单个 "),ee=a("strong"),te=_(V),ve=_(" 记录。"),le=b(),Z(F.$$.fragment),se=b(),I=a("h6"),I.textContent="API 详情",ne=b(),v=a("div"),x=a("strong"),x.textContent="GET",ye=b(),z=a("div"),P=a("p"),Ce=_("/api/collections/"),ae=a("strong"),oe=_(G),we=_("/records/"),ie=a("strong"),ie.textContent=":id",Fe=b(),g&&g.c(),de=b(),A=a("div"),A.textContent="路径参数",re=b(),M=a("table"),M.innerHTML='<thead><tr><th>参数</th> <th>类型</th> <th width="60%">描述</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>要查看的记录ID。</td></tr></tbody>',ce=b(),S=a("div"),S.textContent="查询参数",ue=b(),R=a("table"),pe=a("thead"),pe.innerHTML='<tr><th>参数</th> <th>类型</th> <th width="60%">描述</th></tr>',Re=b(),H=a("tbody"),O=a("tr"),fe=a("td"),fe.textContent="expand",Oe=b(),be=a("td"),be.innerHTML='<span class="label">String</span>',De=b(),h=a("td"),Te=_(`自动展开记录关联。例如：\r
                `),Z(B.$$.fragment),Pe=_(`\r
                支持最多6层深度的嵌套关联展开。`),Be=a("br"),Ee=_(`\r
                展开的关联将附加到记录的\r
                `),me=a("code"),me.textContent="expand",Ie=_(" 属性下（如："),_e=a("code"),_e.textContent='"expand": {"relField1": {...}, ...}',Ae=_(`）。\r
                `),Me=a("br"),Se=_(`\r
                只有请求用户有权限`),he=a("strong"),he.textContent="查看",He=_("的关联才会被展开。"),Le=b(),Z(E.$$.fragment),ke=b(),L=a("div"),L.textContent="响应",ge=b(),D=a("div"),q=a("div");for(let e=0;e<y.length;e+=1)y[e].c();Ue=b(),U=a("div");for(let e=0;e<k.length;e+=1)k[e].c();m(s,"class","m-b-sm"),m(f,"class","content txt-lg m-b-sm"),m(I,"class","m-b-xs"),m(x,"class","label label-primary"),m(z,"class","content"),m(v,"class","alert alert-info"),m(A,"class","section-title"),m(M,"class","table-compact table-border m-b-base"),m(S,"class","section-title"),m(R,"class","table-compact table-border m-b-base"),m(L,"class","section-title"),m(q,"class","tabs-header compact combined left"),m(U,"class","tabs-content"),m(D,"class","tabs")},m(e,t){r(e,s,t),l(s,n),l(s,$),l(s,u),r(e,c,t),r(e,f,t),l(f,C),l(C,w),l(C,ee),l(ee,te),l(C,ve),r(e,le,t),X(F,e,t),r(e,se,t),r(e,I,t),r(e,ne,t),r(e,v,t),l(v,x),l(v,ye),l(v,z),l(z,P),l(P,Ce),l(P,ae),l(ae,oe),l(P,we),l(P,ie),l(v,Fe),g&&g.m(v,null),r(e,de,t),r(e,A,t),r(e,re,t),r(e,M,t),r(e,ce,t),r(e,S,t),r(e,ue,t),r(e,R,t),l(R,pe),l(R,Re),l(R,H),l(H,O),l(O,fe),l(O,Oe),l(O,be),l(O,De),l(O,h),l(h,Te),X(B,h,null),l(h,Pe),l(h,Be),l(h,Ee),l(h,me),l(h,Ie),l(h,_e),l(h,Ae),l(h,Me),l(h,Se),l(h,he),l(h,He),l(H,Le),X(E,H,null),r(e,ke,t),r(e,L,t),r(e,ge,t),r(e,D,t),l(D,q);for(let p=0;p<y.length;p+=1)y[p]&&y[p].m(q,null);l(D,Ue),l(D,U);for(let p=0;p<k.length;p+=1)k[p]&&k[p].m(U,null);T=!0},p(e,[t]){var ze,Ge;(!T||t&1)&&i!==(i=e[0].name+"")&&$e($,i),(!T||t&1)&&V!==(V=e[0].name+"")&&$e(te,V);const p={};t&9&&(p.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[3]}');

        ...

        // 获取单条记录
        const record = await pb.collection('${(ze=e[0])==null?void 0:ze.name}').getOne('RECORD_ID', {
            expand: 'relField1,relField2.subRelField',
        });
    `),t&9&&(p.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        // 获取单条记录
        final record = await pb.collection('${(Ge=e[0])==null?void 0:Ge.name}').getOne('RECORD_ID',
          expand: 'relField1,relField2.subRelField',
        );
    `),F.$set(p),(!T||t&1)&&G!==(G=e[0].name+"")&&$e(oe,G),e[1]?g||(g=Ze(),g.c(),g.m(v,null)):g&&(g.d(1),g=null),t&20&&(K=Q(e[4]),y=Ke(y,t,Je,1,e,K,qe,q,ot,Ye,null,Xe)),t&20&&(j=Q(e[4]),it(),k=Ke(k,t,Ne,1,e,j,je,U,dt,et,null,We),rt())},i(e){if(!T){N(F.$$.fragment,e),N(B.$$.fragment,e),N(E.$$.fragment,e);for(let t=0;t<j.length;t+=1)N(k[t]);T=!0}},o(e){J(F.$$.fragment,e),J(B.$$.fragment,e),J(E.$$.fragment,e);for(let t=0;t<k.length;t+=1)J(k[t]);T=!1},d(e){e&&(d(s),d(c),d(f),d(le),d(se),d(I),d(ne),d(v),d(de),d(A),d(re),d(M),d(ce),d(S),d(ue),d(R),d(ke),d(L),d(ge),d(D)),W(F,e),g&&g.d(),W(B),W(E);for(let t=0;t<y.length;t+=1)y[t].d();for(let t=0;t<k.length;t+=1)k[t].d()}}}function bt(o,s,n){let i,$,{collection:u}=s,c=200,f=[];const C=w=>n(2,c=w.code);return o.$$set=w=>{"collection"in w&&n(0,u=w.collection)},o.$$.update=()=>{o.$$.dirty&1&&n(1,i=(u==null?void 0:u.viewRule)===null),o.$$.dirty&3&&u!=null&&u.id&&(f.push({code:200,body:JSON.stringify(Qe.dummyCollectionRecord(u),null,2)}),i&&f.push({code:403,body:`
                    {
                      "status": 403,
                      "message": "Only superusers can access this action.",
                      "data": {}
                    }
                `}),f.push({code:404,body:`
                {
                  "status": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `}))},n(3,$=Qe.getApiExampleUrl(ct.baseURL)),[u,i,c,$,f,C]}class ht extends lt{constructor(s){super(),st(this,s,bt,ft,nt,{collection:0})}}export{ht as default};
