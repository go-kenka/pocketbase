import{S as It,i as At,s as Lt,V as Mt,W as Ht,X as Q,h as r,d as we,t as Y,a as x,I as jt,Z as Pt,_ as Nt,C as Jt,$ as Ut,D as Kt,l as m,n as t,m as Fe,E as Gt,G as Wt,u as o,A as h,v as c,c as Pe,w as b,J as Ot,p as zt,k as ee,o as Vt}from"./index-D49pSSYG.js";function Et(a,s,n){const i=a.slice();return i[6]=s[n],i}function qt(a,s,n){const i=a.slice();return i[6]=s[n],i}function Bt(a,s){let n,i,$;function _(){return s[5](s[6])}return{key:a,first:null,c(){n=o("button"),n.textContent=`${s[6].code} `,b(n,"class","tab-item"),ee(n,"active",s[1]===s[6].code),this.first=n},m(d,f){m(d,n,f),i||($=Vt(n,"click",_),i=!0)},p(d,f){s=d,f&10&&ee(n,"active",s[1]===s[6].code)},d(d){d&&r(n),i=!1,$()}}}function St(a,s){let n,i,$,_;return i=new Ht({props:{content:s[6].body}}),{key:a,first:null,c(){n=o("div"),Pe(i.$$.fragment),$=c(),b(n,"class","tab-item"),ee(n,"active",s[1]===s[6].code),this.first=n},m(d,f){m(d,n,f),Fe(i,n,null),t(n,$),_=!0},p(d,f){s=d,(!_||f&10)&&ee(n,"active",s[1]===s[6].code)},i(d){_||(x(i.$$.fragment,d),_=!0)},o(d){Y(i.$$.fragment,d),_=!1},d(d){d&&r(n),we(i)}}}function Xt(a){var pt,ut,bt,ft,ht,_t,$t,kt;let s,n,i=a[0].name+"",$,_,d,f,O,D,J,Oe,P,E,Ee,q,qe,Be,te,le,R,oe,B,ae,S,se,H,ne,U,ce,T,ie,Se,de,I,K,He,k,G,Ie,re,Ae,v,W,Le,me,Me,z,je,pe,Ne,g,Je,ue,Ue,Ke,Ge,V,We,X,ze,be,Ve,fe,Xe,he,Ze,p,_e,Qe,$e,Ye,ke,xe,Ce,et,De,tt,ye,lt,ot,at,ve,st,w,ge,A,Re,F,L,y=[],nt=new Map,ct,M,C=[],it=new Map,j,Te,dt;R=new Mt({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${a[2]}');

        ...

        const batch = pb.createBatch();

        batch.collection('${(pt=a[0])==null?void 0:pt.name}').create({ ... });
        batch.collection('${(ut=a[0])==null?void 0:ut.name}').update('RECORD_ID', { ... });
        batch.collection('${(bt=a[0])==null?void 0:bt.name}').delete('RECORD_ID');
        batch.collection('${(ft=a[0])==null?void 0:ft.name}').upsert({ ... });

        const result = await batch.send();
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${a[2]}');

        ...

        final batch = pb.createBatch();

        batch.collection('${(ht=a[0])==null?void 0:ht.name}').create(body: { ... });
        batch.collection('${(_t=a[0])==null?void 0:_t.name}').update('RECORD_ID', body: { ... });
        batch.collection('${($t=a[0])==null?void 0:$t.name}').delete('RECORD_ID');
        batch.collection('${(kt=a[0])==null?void 0:kt.name}').upsert(body: { ... });

        final result = await batch.send();
    `}}),w=new Ht({props:{language:"javascript",content:`
                            const formData = new FormData();

                            formData.append("@jsonPayload", JSON.stringify({
                                requests: [
                                    {
                                        method: "POST",
                                        url: "/api/collections/${a[0].name}/records?fields=id",
                                        body: { someField: "test1" }
                                    },
                                    {
                                        method: "PATCH",
                                        url: "/api/collections/${a[0].name}/records/RECORD_ID",
                                        body: { someField: "test2" }
                                    }
                                ]
                            }))

                            // 第一个请求的文件
                            formData.append("requests.0.someFileField", new File(...))

                            // 第二个请求的文件
                            formData.append("requests.1.someFileField", new File(...))
                        `}});let Z=Q(a[3]);const rt=e=>e[6].code;for(let e=0;e<Z.length;e+=1){let l=qt(a,Z,e),u=rt(l);nt.set(u,y[e]=Bt(u,l))}let N=Q(a[3]);const mt=e=>e[6].code;for(let e=0;e<N.length;e+=1){let l=Et(a,N,e),u=mt(l);it.set(u,C[e]=St(u,l))}return{c(){s=o("h3"),n=h("批量创建/更新/插入/删除 ("),$=h(i),_=h(")"),d=c(),f=o("div"),f.innerHTML="<p>在单个请求中批量和事务性地创建/更新/插入/删除多条记录。</p>",O=c(),D=o("div"),J=o("div"),J.innerHTML='<i class="ri-error-warning-line"></i>',Oe=c(),P=o("div"),E=o("p"),Ee=h("批量Web API需要在"),q=o("a"),q.textContent="仪表盘设置",qe=h("中明确启用和配置。"),Be=c(),te=o("p"),te.textContent=`由于此端点在单个事务中处理请求，如果配置不当（例如：过大的执行超时时间、过大的请求体大小限制等），\r
            可能会降低应用程序的性能。`,le=c(),Pe(R.$$.fragment),oe=c(),B=o("h6"),B.textContent="API 详情",ae=c(),S=o("div"),S.innerHTML='<strong class="label label-primary">POST</strong> <div class="content">/api/batch</div>',se=c(),H=o("div"),H.textContent="请求体参数",ne=c(),U=o("p"),U.innerHTML=`请求体参数可以通过 <em>application/json</em> 或 <em>multipart/form-data</em> 格式发送。
    <br/>
    文件上传仅支持通过 <em>multipart/form-data</em> 格式（详见下文）。`,ce=c(),T=o("table"),ie=o("thead"),ie.innerHTML='<tr><th>参数</th> <th width="80%">描述</th></tr>',Se=c(),de=o("tbody"),I=o("tr"),K=o("td"),K.innerHTML='<div class="flex txt-nowrap"><span class="label label-success">Reuired</span> <span>requests</span></div>',He=c(),k=o("td"),G=o("span"),G.textContent="Array<Request>",Ie=h(` - 待处理的请求列表。\r
\r
                `),re=o("p"),re.textContent="支持的批量请求操作包括：",Ae=c(),v=o("ul"),W=o("li"),Le=h("记录创建 - "),me=o("code"),me.textContent="POST /api/collections/{collection}/records",Me=c(),z=o("li"),je=h(`记录更新 -\r
                        `),pe=o("code"),pe.textContent="PATCH /api/collections/{collection}/records/{id}",Ne=c(),g=o("li"),Je=h("记录插入 - "),ue=o("code"),ue.textContent="PUT /api/collections/{collection}/records",Ue=c(),Ke=o("br"),Ge=c(),V=o("small"),V.innerHTML='(请求体必须包含 <code class="txt-sm">id</code> 字段)',We=c(),X=o("li"),ze=h(`记录删除 -\r
                        `),be=o("code"),be.textContent="DELETE /api/collections/{collection}/records/{id}",Ve=c(),fe=o("p"),fe.textContent="每个批量请求元素包含以下属性：",Xe=c(),he=o("ul"),he.innerHTML="<li><code>url path</code> <em>(可以包含查询参数)</em></li> <li><code>method</code> <em>(GET, POST, PUT, PATCH, DELETE)</em></li> <li><code>headers</code> <br/> <em>(目前暂不支持自定义每个请求的 <code>Authorization</code> 头， 即所有批量请求共享相同的认证状态)</em></li> <li><code>body</code></li>",Ze=c(),p=o("p"),_e=o("strong"),_e.textContent="注意！",Qe=h(" 当批量请求以 "),$e=o("code"),$e.textContent="multipart/form-data",Ye=h(` 格式发送时，\r
                    常规的批量操作字段需要序列化为JSON并提交到 `),ke=o("code"),ke.textContent="@jsonPayload",xe=h(` 字段中，\r
                    文件字段的键名需要遵循 `),Ce=o("code"),Ce.textContent="requests.N.fileField",et=h(` 或\r
                    `),De=o("code"),De.textContent="requests[N].fileField",tt=h(` 的模式\r
                    `),ye=o("em"),ye.textContent="(当使用SDK的特定对象表示法时，这通常会被SDK自动处理) ",lt=h(`。\r
                    `),ot=o("br"),at=h(`\r
                    如果你不使用SDK或者想手动构造 `),ve=o("code"),ve.textContent="FormData",st=h(` 请求体， 可以参考以下示例：\r
                    `),Pe(w.$$.fragment),ge=c(),A=o("div"),A.textContent="响应",Re=c(),F=o("div"),L=o("div");for(let e=0;e<y.length;e+=1)y[e].c();ct=c(),M=o("div");for(let e=0;e<C.length;e+=1)C[e].c();b(s,"class","m-b-sm"),b(f,"class","content txt-lg m-b-sm"),b(J,"class","icon"),b(q,"href","/settings"),b(P,"class","content"),b(D,"class","alert alert-warning"),b(B,"class","m-b-xs"),b(S,"class","api-route alert alert-success"),b(H,"class","section-title"),b(K,"valign","top"),b(G,"class","label"),b(V,"class","txt-hint"),b(T,"class","table-compact table-border m-t-xs m-b-base"),b(A,"class","section-title"),b(L,"class","tabs-header compact combined left"),b(M,"class","tabs-content"),b(F,"class","tabs")},m(e,l){m(e,s,l),t(s,n),t(s,$),t(s,_),m(e,d,l),m(e,f,l),m(e,O,l),m(e,D,l),t(D,J),t(D,Oe),t(D,P),t(P,E),t(E,Ee),t(E,q),t(E,qe),t(P,Be),t(P,te),m(e,le,l),Fe(R,e,l),m(e,oe,l),m(e,B,l),m(e,ae,l),m(e,S,l),m(e,se,l),m(e,H,l),m(e,ne,l),m(e,U,l),m(e,ce,l),m(e,T,l),t(T,ie),t(T,Se),t(T,de),t(de,I),t(I,K),t(I,He),t(I,k),t(k,G),t(k,Ie),t(k,re),t(k,Ae),t(k,v),t(v,W),t(W,Le),t(W,me),t(v,Me),t(v,z),t(z,je),t(z,pe),t(v,Ne),t(v,g),t(g,Je),t(g,ue),t(g,Ue),t(g,Ke),t(g,Ge),t(g,V),t(v,We),t(v,X),t(X,ze),t(X,be),t(k,Ve),t(k,fe),t(k,Xe),t(k,he),t(k,Ze),t(k,p),t(p,_e),t(p,Qe),t(p,$e),t(p,Ye),t(p,ke),t(p,xe),t(p,Ce),t(p,et),t(p,De),t(p,tt),t(p,ye),t(p,lt),t(p,ot),t(p,at),t(p,ve),t(p,st),Fe(w,p,null),m(e,ge,l),m(e,A,l),m(e,Re,l),m(e,F,l),t(F,L);for(let u=0;u<y.length;u+=1)y[u]&&y[u].m(L,null);t(F,ct),t(F,M);for(let u=0;u<C.length;u+=1)C[u]&&C[u].m(M,null);j=!0,Te||(dt=Gt(Wt.call(null,q)),Te=!0)},p(e,[l]){var Dt,yt,vt,gt,Rt,Tt,wt,Ft;(!j||l&1)&&i!==(i=e[0].name+"")&&jt($,i);const u={};l&5&&(u.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[2]}');

        ...

        const batch = pb.createBatch();

        batch.collection('${(Dt=e[0])==null?void 0:Dt.name}').create({ ... });
        batch.collection('${(yt=e[0])==null?void 0:yt.name}').update('RECORD_ID', { ... });
        batch.collection('${(vt=e[0])==null?void 0:vt.name}').delete('RECORD_ID');
        batch.collection('${(gt=e[0])==null?void 0:gt.name}').upsert({ ... });

        const result = await batch.send();
    `),l&5&&(u.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[2]}');

        ...

        final batch = pb.createBatch();

        batch.collection('${(Rt=e[0])==null?void 0:Rt.name}').create(body: { ... });
        batch.collection('${(Tt=e[0])==null?void 0:Tt.name}').update('RECORD_ID', body: { ... });
        batch.collection('${(wt=e[0])==null?void 0:wt.name}').delete('RECORD_ID');
        batch.collection('${(Ft=e[0])==null?void 0:Ft.name}').upsert(body: { ... });

        final result = await batch.send();
    `),R.$set(u);const Ct={};l&1&&(Ct.content=`
                            const formData = new FormData();

                            formData.append("@jsonPayload", JSON.stringify({
                                requests: [
                                    {
                                        method: "POST",
                                        url: "/api/collections/${e[0].name}/records?fields=id",
                                        body: { someField: "test1" }
                                    },
                                    {
                                        method: "PATCH",
                                        url: "/api/collections/${e[0].name}/records/RECORD_ID",
                                        body: { someField: "test2" }
                                    }
                                ]
                            }))

                            // 第一个请求的文件
                            formData.append("requests.0.someFileField", new File(...))

                            // 第二个请求的文件
                            formData.append("requests.1.someFileField", new File(...))
                        `),w.$set(Ct),l&10&&(Z=Q(e[3]),y=Pt(y,l,rt,1,e,Z,nt,L,Nt,Bt,null,qt)),l&10&&(N=Q(e[3]),Jt(),C=Pt(C,l,mt,1,e,N,it,M,Ut,St,null,Et),Kt())},i(e){if(!j){x(R.$$.fragment,e),x(w.$$.fragment,e);for(let l=0;l<N.length;l+=1)x(C[l]);j=!0}},o(e){Y(R.$$.fragment,e),Y(w.$$.fragment,e);for(let l=0;l<C.length;l+=1)Y(C[l]);j=!1},d(e){e&&(r(s),r(d),r(f),r(O),r(D),r(le),r(oe),r(B),r(ae),r(S),r(se),r(H),r(ne),r(U),r(ce),r(T),r(ge),r(A),r(Re),r(F)),we(R,e),we(w);for(let l=0;l<y.length;l+=1)y[l].d();for(let l=0;l<C.length;l+=1)C[l].d();Te=!1,dt()}}}function Zt(a,s,n){let i,$,{collection:_}=s,d=200,f=[];const O=D=>n(1,d=D.code);return a.$$set=D=>{"collection"in D&&n(0,_=D.collection)},a.$$.update=()=>{a.$$.dirty&1&&n(4,$=Ot.dummyCollectionRecord(_)),a.$$.dirty&17&&_!=null&&_.id&&(f.push({code:200,body:JSON.stringify([{status:200,body:$},{status:200,body:Object.assign({},$,{id:$.id+"2"})}],null,2)}),f.push({code:400,body:`
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
            `}),f.push({code:403,body:`
                {
                  "status": 403,
                  "message": "Batch requests are not allowed.",
                  "data": {}
                }
            `}))},n(2,i=Ot.getApiExampleUrl(zt.baseURL)),[_,d,i,f,$,O]}class Yt extends It{constructor(s){super(),At(this,s,Zt,Xt,Lt,{collection:0})}}export{Yt as default};
