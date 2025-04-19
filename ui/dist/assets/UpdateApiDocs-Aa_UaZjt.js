import{S as $t,i as Ot,s as St,V as Mt,J as z,X as ae,W as Tt,h as o,d as ge,t as ke,a as ye,I as te,Z as Ee,_ as bt,C as Ht,$ as qt,D as Lt,l as r,n,m as we,u as a,A as k,v as p,c as Ce,w as h,p as Dt,k as Te,o as Rt,H as de}from"./index-D49pSSYG.js";import{F as Bt}from"./FieldsQueryParam-CHSdJRip.js";function mt(d,e,t){const i=d.slice();return i[10]=e[t],i}function _t(d,e,t){const i=d.slice();return i[10]=e[t],i}function kt(d,e,t){const i=d.slice();return i[15]=e[t],i}function yt(d){let e;return{c(){e=a("p"),e.innerHTML=`<em>请注意，如果更改密码，当前记录的所有已颁发令牌将自动失效。如果您希望用户保持登录状态，
                需要在更新调用后手动重新认证。</em>`},m(t,i){r(t,e,i)},d(t){t&&o(e)}}}function ht(d){let e;return{c(){e=a("p"),e.innerHTML="需要超级用户 <code>Authorization:TOKEN</code> 请求头",h(e,"class","txt-hint txt-sm txt-right")},m(t,i){r(t,e,i)},d(t){t&&o(e)}}}function vt(d){let e,t,i,m,u,c,f,b,$,T,S,L,O,J,H,D,E,N,M,q,R,v,g,w;function K(_,C){var le,W,ne;return C&1&&(b=null),b==null&&(b=!!((ne=(W=(le=_[0])==null?void 0:le.fields)==null?void 0:W.find(Qt))!=null&&ne.required)),b?Pt:Ft}let Q=K(d,-1),F=Q(d);return{c(){e=a("tr"),e.innerHTML='<td colspan="3" class="txt-hint txt-bold">认证特定字段</td>',t=p(),i=a("tr"),i.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>email</span></div></td> <td><span class="label">String</span></td> <td>认证记录的邮箱地址。
                    <br/>
                    此字段只能由超级用户或具有&quot;管理&quot;权限的认证记录更新。
                    <br/>
                    普通账户可以通过调用&quot;请求更改邮箱&quot;来更新其邮箱。</td>`,m=p(),u=a("tr"),c=a("td"),f=a("div"),F.c(),$=p(),T=a("span"),T.textContent="emailVisibility",S=p(),L=a("td"),L.innerHTML='<span class="label">Boolean</span>',O=p(),J=a("td"),J.textContent="获取记录数据时是否显示/隐藏认证记录的邮箱。",H=p(),D=a("tr"),D.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>oldPassword</span></div></td> <td><span class="label">String</span></td> <td>旧的认证记录密码。
                    <br/>
                    仅在更改记录密码时需要此字段。超级用户和具有&quot;管理&quot;权限的认证记录 可以跳过此字段。</td>`,E=p(),N=a("tr"),N.innerHTML='<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>password</span></div></td> <td><span class="label">String</span></td> <td>新的认证记录密码。</td>',M=p(),q=a("tr"),q.innerHTML='<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>passwordConfirm</span></div></td> <td><span class="label">String</span></td> <td>新的认证记录密码确认。</td>',R=p(),v=a("tr"),v.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>verified</span></div></td> <td><span class="label">Boolean</span></td> <td>指示认证记录是否已验证。
                    <br/>
                    此字段只能由超级用户或具有&quot;管理&quot;权限的认证记录设置。</td>`,g=p(),w=a("tr"),w.innerHTML='<td colspan="3" class="txt-hint txt-bold">其他字段</td>',h(f,"class","inline-flex")},m(_,C){r(_,e,C),r(_,t,C),r(_,i,C),r(_,m,C),r(_,u,C),n(u,c),n(c,f),F.m(f,null),n(f,$),n(f,T),n(u,S),n(u,L),n(u,O),n(u,J),r(_,H,C),r(_,D,C),r(_,E,C),r(_,N,C),r(_,M,C),r(_,q,C),r(_,R,C),r(_,v,C),r(_,g,C),r(_,w,C)},p(_,C){Q!==(Q=K(_,C))&&(F.d(1),F=Q(_),F&&(F.c(),F.m(f,$)))},d(_){_&&(o(e),o(t),o(i),o(m),o(u),o(H),o(D),o(E),o(N),o(M),o(q),o(R),o(v),o(g),o(w)),F.d()}}}function Ft(d){let e;return{c(){e=a("span"),e.textContent="Optional",h(e,"class","label label-warning")},m(t,i){r(t,e,i)},d(t){t&&o(e)}}}function Pt(d){let e;return{c(){e=a("span"),e.textContent="Required",h(e,"class","label label-success")},m(t,i){r(t,e,i)},d(t){t&&o(e)}}}function jt(d){let e;return{c(){e=a("span"),e.textContent="Optional",h(e,"class","label label-warning")},m(t,i){r(t,e,i)},d(t){t&&o(e)}}}function At(d){let e;return{c(){e=a("span"),e.textContent="Required",h(e,"class","label label-success")},m(t,i){r(t,e,i)},d(t){t&&o(e)}}}function It(d){let e,t=d[15].maxSelect==1?"id":"ids",i,m;return{c(){e=k("关联记录"),i=k(t),m=k("。")},m(u,c){r(u,e,c),r(u,i,c),r(u,m,c)},p(u,c){c&64&&t!==(t=u[15].maxSelect==1?"id":"ids")&&te(i,t)},d(u){u&&(o(e),o(i),o(m))}}}function Jt(d){let e,t,i,m,u;return{c(){e=k("文件对象。"),t=a("br"),i=k(`\r
                        设置为 `),m=a("code"),m.textContent="null",u=k(" 可删除已上传的文件。")},m(c,f){r(c,e,f),r(c,t,f),r(c,i,f),r(c,m,f),r(c,u,f)},p:de,d(c){c&&(o(e),o(t),o(i),o(m),o(u))}}}function Nt(d){let e;return{c(){e=k("URL地址。")},m(t,i){r(t,e,i)},p:de,d(t){t&&o(e)}}}function Et(d){let e;return{c(){e=k("邮箱地址。")},m(t,i){r(t,e,i)},p:de,d(t){t&&o(e)}}}function Vt(d){let e;return{c(){e=k("JSON数组或对象。")},m(t,i){r(t,e,i)},p:de,d(t){t&&o(e)}}}function Ut(d){let e;return{c(){e=k("数值。")},m(t,i){r(t,e,i)},p:de,d(t){t&&o(e)}}}function zt(d){let e;return{c(){e=k("纯文本值。")},m(t,i){r(t,e,i)},p:de,d(t){t&&o(e)}}}function gt(d,e){let t,i,m,u,c,f=e[15].name+"",b,$,T,S,L=z.getFieldValueType(e[15])+"",O,J,H,D;function E(g,w){return g[15].required?At:jt}let N=E(e),M=N(e);function q(g,w){if(g[15].type==="text")return zt;if(g[15].type==="number")return Ut;if(g[15].type==="json")return Vt;if(g[15].type==="email")return Et;if(g[15].type==="url")return Nt;if(g[15].type==="file")return Jt;if(g[15].type==="relation")return It}let R=q(e),v=R&&R(e);return{key:d,first:null,c(){t=a("tr"),i=a("td"),m=a("div"),M.c(),u=p(),c=a("span"),b=k(f),$=p(),T=a("td"),S=a("span"),O=k(L),J=p(),H=a("td"),v&&v.c(),D=p(),h(m,"class","inline-flex"),h(S,"class","label"),this.first=t},m(g,w){r(g,t,w),n(t,i),n(i,m),M.m(m,null),n(m,u),n(m,c),n(c,b),n(t,$),n(t,T),n(T,S),n(S,O),n(t,J),n(t,H),v&&v.m(H,null),n(t,D)},p(g,w){e=g,N!==(N=E(e))&&(M.d(1),M=N(e),M&&(M.c(),M.m(m,u))),w&64&&f!==(f=e[15].name+"")&&te(b,f),w&64&&L!==(L=z.getFieldValueType(e[15])+"")&&te(O,L),R===(R=q(e))&&v?v.p(e,w):(v&&v.d(1),v=R&&R(e),v&&(v.c(),v.m(H,null)))},d(g){g&&o(t),M.d(),v&&v.d()}}}function wt(d,e){let t,i=e[10].code+"",m,u,c,f;function b(){return e[9](e[10])}return{key:d,first:null,c(){t=a("button"),m=k(i),u=p(),h(t,"class","tab-item"),Te(t,"active",e[2]===e[10].code),this.first=t},m($,T){r($,t,T),n(t,m),n(t,u),c||(f=Rt(t,"click",b),c=!0)},p($,T){e=$,T&8&&i!==(i=e[10].code+"")&&te(m,i),T&12&&Te(t,"active",e[2]===e[10].code)},d($){$&&o(t),c=!1,f()}}}function Ct(d,e){let t,i,m,u;return i=new Tt({props:{content:e[10].body}}),{key:d,first:null,c(){t=a("div"),Ce(i.$$.fragment),m=p(),h(t,"class","tab-item"),Te(t,"active",e[2]===e[10].code),this.first=t},m(c,f){r(c,t,f),we(i,t,null),n(t,m),u=!0},p(c,f){e=c;const b={};f&8&&(b.content=e[10].body),i.$set(b),(!u||f&12)&&Te(t,"active",e[2]===e[10].code)},i(c){u||(ye(i.$$.fragment,c),u=!0)},o(c){ke(i.$$.fragment,c),u=!1},d(c){c&&o(t),ge(i)}}}function Kt(d){var ct,ft;let e,t,i=d[0].name+"",m,u,c,f,b,$,T,S=d[0].name+"",L,O,J,H,D,E,N,M,q,R,v,g,w,K,Q,F,_,C,le,W=d[0].name+"",ne,Ve,$e,Ue,Oe,oe,Se,re,Me,ce,He,X,qe,ze,Y,Le,V=[],Ke=new Map,De,fe,Re,Z,Be,Qe,ue,G,Fe,We,Pe,Xe,P,Ye,ie,Ze,Ge,xe,je,et,Ae,tt,Ie,lt,nt,se,Je,pe,Ne,x,be,U=[],it=new Map,st,me,j=[],at=new Map,ee,A=d[1]&&yt();q=new Mt({props:{js:`
import PocketBase from 'pocketbase';

const pb = new PocketBase('${d[5]}');

...

// example update data
const data = ${JSON.stringify(Object.assign({},d[4],z.dummyCollectionSchemaData(d[0],!0)),null,4)};

const record = await pb.collection('${(ct=d[0])==null?void 0:ct.name}').update('RECORD_ID', data);
    `,dart:`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${d[5]}');

...

// example update body
final body = <String, dynamic>${JSON.stringify(Object.assign({},d[4],z.dummyCollectionSchemaData(d[0],!0)),null,2)};

final record = await pb.collection('${(ft=d[0])==null?void 0:ft.name}').update('RECORD_ID', body: body);
    `}});let I=d[7]&&ht(),B=d[1]&&vt(d),he=ae(d[6]);const dt=l=>l[15].name;for(let l=0;l<he.length;l+=1){let s=kt(d,he,l),y=dt(s);Ke.set(y,V[l]=gt(y,s))}ie=new Tt({props:{content:"?expand=relField1,relField2.subRelField21"}}),se=new Bt({});let ve=ae(d[3]);const ot=l=>l[10].code;for(let l=0;l<ve.length;l+=1){let s=_t(d,ve,l),y=ot(s);it.set(y,U[l]=wt(y,s))}let _e=ae(d[3]);const rt=l=>l[10].code;for(let l=0;l<_e.length;l+=1){let s=mt(d,_e,l),y=rt(s);at.set(y,j[l]=Ct(y,s))}return{c(){e=a("h3"),t=k("更新 ("),m=k(i),u=k(")"),c=p(),f=a("div"),b=a("p"),$=k("更新单个 "),T=a("strong"),L=k(S),O=k(" 记录。"),J=p(),H=a("p"),H.innerHTML=`Body参数可以通过 <code>application/json</code> 或
        <code>multipart/form-data</code> 发送。`,D=p(),E=a("p"),E.innerHTML=`文件上传仅支持 <code>multipart/form-data</code>。
        <br/>
        更多信息和示例请查看详细的
        <a href="https://pocketbase.io/docs/files-handling" target="_blank" rel="noopener noreferrer">文件上传和处理文档
        </a>。`,N=p(),A&&A.c(),M=p(),Ce(q.$$.fragment),R=p(),v=a("h6"),v.textContent="API 详情",g=p(),w=a("div"),K=a("strong"),K.textContent="PATCH",Q=p(),F=a("div"),_=a("p"),C=k("/api/collections/"),le=a("strong"),ne=k(W),Ve=k("/records/"),$e=a("strong"),$e.textContent=":id",Ue=p(),I&&I.c(),Oe=p(),oe=a("div"),oe.textContent="路径参数",Se=p(),re=a("table"),re.innerHTML='<thead><tr><th>参数</th> <th>类型</th> <th width="60%">描述</th></tr></thead> <tbody><tr><td>id</td> <td><span class="label">String</span></td> <td>要更新的记录ID。</td></tr></tbody>',Me=p(),ce=a("div"),ce.textContent="Body参数",He=p(),X=a("table"),qe=a("thead"),qe.innerHTML='<tr><th>参数</th> <th>类型</th> <th width="50%">描述</th></tr>',ze=p(),Y=a("tbody"),B&&B.c(),Le=p();for(let l=0;l<V.length;l+=1)V[l].c();De=p(),fe=a("div"),fe.textContent="查询参数",Re=p(),Z=a("table"),Be=a("thead"),Be.innerHTML='<tr><th>参数</th> <th>类型</th> <th width="60%">描述</th></tr>',Qe=p(),ue=a("tbody"),G=a("tr"),Fe=a("td"),Fe.textContent="expand",We=p(),Pe=a("td"),Pe.innerHTML='<span class="label">String</span>',Xe=p(),P=a("td"),Ye=k(`自动展开返回的更新记录中的关联。例如：\r
                `),Ce(ie.$$.fragment),Ze=k(`\r
                支持最多6层深度的嵌套关联展开。`),Ge=a("br"),xe=k(`\r
                展开的关联将附加到记录的\r
                `),je=a("code"),je.textContent="expand",et=k(" 属性下（如："),Ae=a("code"),Ae.textContent='"expand": {"relField1": {...}, ...}',tt=k(`）。\r
                只有用户有权限`),Ie=a("strong"),Ie.textContent="查看",lt=k("的关联才会被展开。"),nt=p(),Ce(se.$$.fragment),Je=p(),pe=a("div"),pe.textContent="响应",Ne=p(),x=a("div"),be=a("div");for(let l=0;l<U.length;l+=1)U[l].c();st=p(),me=a("div");for(let l=0;l<j.length;l+=1)j[l].c();h(e,"class","m-b-sm"),h(f,"class","content txt-lg m-b-sm"),h(v,"class","m-b-xs"),h(K,"class","label label-primary"),h(F,"class","content"),h(w,"class","alert alert-warning"),h(oe,"class","section-title"),h(re,"class","table-compact table-border m-b-base"),h(ce,"class","section-title"),h(X,"class","table-compact table-border m-b-base"),h(fe,"class","section-title"),h(Z,"class","table-compact table-border m-b-lg"),h(pe,"class","section-title"),h(be,"class","tabs-header compact combined left"),h(me,"class","tabs-content"),h(x,"class","tabs")},m(l,s){r(l,e,s),n(e,t),n(e,m),n(e,u),r(l,c,s),r(l,f,s),n(f,b),n(b,$),n(b,T),n(T,L),n(b,O),n(f,J),n(f,H),n(f,D),n(f,E),n(f,N),A&&A.m(f,null),r(l,M,s),we(q,l,s),r(l,R,s),r(l,v,s),r(l,g,s),r(l,w,s),n(w,K),n(w,Q),n(w,F),n(F,_),n(_,C),n(_,le),n(le,ne),n(_,Ve),n(_,$e),n(w,Ue),I&&I.m(w,null),r(l,Oe,s),r(l,oe,s),r(l,Se,s),r(l,re,s),r(l,Me,s),r(l,ce,s),r(l,He,s),r(l,X,s),n(X,qe),n(X,ze),n(X,Y),B&&B.m(Y,null),n(Y,Le);for(let y=0;y<V.length;y+=1)V[y]&&V[y].m(Y,null);r(l,De,s),r(l,fe,s),r(l,Re,s),r(l,Z,s),n(Z,Be),n(Z,Qe),n(Z,ue),n(ue,G),n(G,Fe),n(G,We),n(G,Pe),n(G,Xe),n(G,P),n(P,Ye),we(ie,P,null),n(P,Ze),n(P,Ge),n(P,xe),n(P,je),n(P,et),n(P,Ae),n(P,tt),n(P,Ie),n(P,lt),n(ue,nt),we(se,ue,null),r(l,Je,s),r(l,pe,s),r(l,Ne,s),r(l,x,s),n(x,be);for(let y=0;y<U.length;y+=1)U[y]&&U[y].m(be,null);n(x,st),n(x,me);for(let y=0;y<j.length;y+=1)j[y]&&j[y].m(me,null);ee=!0},p(l,[s]){var ut,pt;(!ee||s&1)&&i!==(i=l[0].name+"")&&te(m,i),(!ee||s&1)&&S!==(S=l[0].name+"")&&te(L,S),l[1]?A||(A=yt(),A.c(),A.m(f,null)):A&&(A.d(1),A=null);const y={};s&49&&(y.js=`
import PocketBase from 'pocketbase';

const pb = new PocketBase('${l[5]}');

...

// example update data
const data = ${JSON.stringify(Object.assign({},l[4],z.dummyCollectionSchemaData(l[0],!0)),null,4)};

const record = await pb.collection('${(ut=l[0])==null?void 0:ut.name}').update('RECORD_ID', data);
    `),s&49&&(y.dart=`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${l[5]}');

...

// example update body
final body = <String, dynamic>${JSON.stringify(Object.assign({},l[4],z.dummyCollectionSchemaData(l[0],!0)),null,2)};

final record = await pb.collection('${(pt=l[0])==null?void 0:pt.name}').update('RECORD_ID', body: body);
    `),q.$set(y),(!ee||s&1)&&W!==(W=l[0].name+"")&&te(ne,W),l[7]?I||(I=ht(),I.c(),I.m(w,null)):I&&(I.d(1),I=null),l[1]?B?B.p(l,s):(B=vt(l),B.c(),B.m(Y,Le)):B&&(B.d(1),B=null),s&64&&(he=ae(l[6]),V=Ee(V,s,dt,1,l,he,Ke,Y,bt,gt,null,kt)),s&12&&(ve=ae(l[3]),U=Ee(U,s,ot,1,l,ve,it,be,bt,wt,null,_t)),s&12&&(_e=ae(l[3]),Ht(),j=Ee(j,s,rt,1,l,_e,at,me,qt,Ct,null,mt),Lt())},i(l){if(!ee){ye(q.$$.fragment,l),ye(ie.$$.fragment,l),ye(se.$$.fragment,l);for(let s=0;s<_e.length;s+=1)ye(j[s]);ee=!0}},o(l){ke(q.$$.fragment,l),ke(ie.$$.fragment,l),ke(se.$$.fragment,l);for(let s=0;s<j.length;s+=1)ke(j[s]);ee=!1},d(l){l&&(o(e),o(c),o(f),o(M),o(R),o(v),o(g),o(w),o(Oe),o(oe),o(Se),o(re),o(Me),o(ce),o(He),o(X),o(De),o(fe),o(Re),o(Z),o(Je),o(pe),o(Ne),o(x)),A&&A.d(),ge(q,l),I&&I.d(),B&&B.d();for(let s=0;s<V.length;s+=1)V[s].d();ge(ie),ge(se);for(let s=0;s<U.length;s+=1)U[s].d();for(let s=0;s<j.length;s+=1)j[s].d()}}}const Qt=d=>d.name=="emailVisibility";function Wt(d,e,t){let i,m,u,c,f,{collection:b}=e,$=200,T=[],S={};const L=O=>t(2,$=O.code);return d.$$set=O=>{"collection"in O&&t(0,b=O.collection)},d.$$.update=()=>{var O,J,H;d.$$.dirty&1&&t(1,i=(b==null?void 0:b.type)==="auth"),d.$$.dirty&1&&t(7,m=(b==null?void 0:b.updateRule)===null),d.$$.dirty&2&&t(8,u=i?["id","password","verified","email","emailVisibility"]:["id"]),d.$$.dirty&257&&t(6,c=((O=b==null?void 0:b.fields)==null?void 0:O.filter(D=>!D.hidden&&D.type!="autodate"&&!u.includes(D.name)))||[]),d.$$.dirty&1&&t(3,T=[{code:200,body:JSON.stringify(z.dummyCollectionRecord(b),null,2)},{code:400,body:`
                {
                  "status": 400,
                  "message": "Failed to update record.",
                  "data": {
                    "${(H=(J=b==null?void 0:b.fields)==null?void 0:J[0])==null?void 0:H.name}": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `},{code:403,body:`
                {
                  "status": 403,
                  "message": "You are not allowed to perform this request.",
                  "data": {}
                }
            `},{code:404,body:`
                {
                  "status": 404,
                  "message": "The requested resource wasn't found.",
                  "data": {}
                }
            `}]),d.$$.dirty&2&&(i?t(4,S={password:"87654321",passwordConfirm:"87654321",oldPassword:"12345678"}):t(4,S={}))},t(5,f=z.getApiExampleUrl(Dt.baseURL)),[b,i,$,T,S,f,c,m,u,L]}class Zt extends $t{constructor(e){super(),Ot(this,e,Wt,Kt,St,{collection:0})}}export{Zt as default};
