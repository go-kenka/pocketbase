import{S as $t,i as qt,s as St,V as Tt,J as ee,X as fe,W as wt,h as r,d as $e,t as ve,a as he,I as oe,Z as je,_ as pt,C as Mt,$ as Ot,D as Lt,l as c,n as i,m as qe,u as a,A as _,v as p,c as Se,w as g,p as Ht,k as Te,o as Pt,L as Dt,H as ge}from"./index-D49pSSYG.js";import{F as Ft}from"./FieldsQueryParam-CHSdJRip.js";function bt(s,e,t){const l=s.slice();return l[10]=e[t],l}function mt(s,e,t){const l=s.slice();return l[10]=e[t],l}function _t(s,e,t){const l=s.slice();return l[15]=e[t],l}function kt(s){let e;return{c(){e=a("p"),e.innerHTML="需要超级用户 <code>Authorization:TOKEN</code> 请求头",g(e,"class","txt-hint txt-sm txt-right")},m(t,l){c(t,e,l)},d(t){t&&r(e)}}}function yt(s){let e,t,l,f,d,u,m,b,$,y,C,V,T,M,F,O,U,J,S,K,L,q,k,H,te,W,E,re,X,Y,Z;function ue(v,w){var j,Q,D;return w&1&&(u=null),u==null&&(u=!!((D=(Q=(j=v[0])==null?void 0:j.fields)==null?void 0:Q.find(Yt))!=null&&D.required)),u?Vt:Rt}let le=ue(s,-1),I=le(s);function G(v,w){var j,Q,D;return w&1&&(U=null),U==null&&(U=!!((D=(Q=(j=v[0])==null?void 0:j.fields)==null?void 0:Q.find(Xt))!=null&&D.required)),U?jt:Bt}let x=G(s,-1),P=x(s);return{c(){e=a("tr"),e.innerHTML='<td colspan="3" class="txt-hint txt-bold">认证特定字段</td>',t=p(),l=a("tr"),f=a("td"),d=a("div"),I.c(),m=p(),b=a("span"),b.textContent="email",$=p(),y=a("td"),y.innerHTML='<span class="label">String</span>',C=p(),V=a("td"),V.textContent="认证记录的邮箱地址。",T=p(),M=a("tr"),F=a("td"),O=a("div"),P.c(),J=p(),S=a("span"),S.textContent="emailVisibility",K=p(),L=a("td"),L.innerHTML='<span class="label">Boolean</span>',q=p(),k=a("td"),k.textContent="获取记录数据时是否显示/隐藏认证记录的邮箱。",H=p(),te=a("tr"),te.innerHTML='<td><div class="inline-flex"><span class="label label-success">Required</span> <span>password</span></div></td> <td><span class="label">String</span></td> <td>认证记录的密码。</td>',W=p(),E=a("tr"),E.innerHTML='<td><div class="inline-flex"><span class="label label-success">Required</span> <span>passwordConfirm</span></div></td> <td><span class="label">String</span></td> <td>认证记录的密码确认。</td>',re=p(),X=a("tr"),X.innerHTML=`<td><div class="inline-flex"><span class="label label-warning">Optional</span> <span>verified</span></div></td> <td><span class="label">Boolean</span></td> <td>指示认证记录是否已验证。
                    <br/>
                    此字段只能由超级用户或具有&quot;管理&quot;权限的认证记录设置。</td>`,Y=p(),Z=a("tr"),Z.innerHTML='<td colspan="3" class="txt-hint txt-bold">其他字段</td>',g(d,"class","inline-flex"),g(O,"class","inline-flex")},m(v,w){c(v,e,w),c(v,t,w),c(v,l,w),i(l,f),i(f,d),I.m(d,null),i(d,m),i(d,b),i(l,$),i(l,y),i(l,C),i(l,V),c(v,T,w),c(v,M,w),i(M,F),i(F,O),P.m(O,null),i(O,J),i(O,S),i(M,K),i(M,L),i(M,q),i(M,k),c(v,H,w),c(v,te,w),c(v,W,w),c(v,E,w),c(v,re,w),c(v,X,w),c(v,Y,w),c(v,Z,w)},p(v,w){le!==(le=ue(v,w))&&(I.d(1),I=le(v),I&&(I.c(),I.m(d,m))),x!==(x=G(v,w))&&(P.d(1),P=x(v),P&&(P.c(),P.m(O,J)))},d(v){v&&(r(e),r(t),r(l),r(T),r(M),r(H),r(te),r(W),r(E),r(re),r(X),r(Y),r(Z)),I.d(),P.d()}}}function Rt(s){let e;return{c(){e=a("span"),e.textContent="Optional",g(e,"class","label label-warning")},m(t,l){c(t,e,l)},d(t){t&&r(e)}}}function Vt(s){let e;return{c(){e=a("span"),e.textContent="Required",g(e,"class","label label-success")},m(t,l){c(t,e,l)},d(t){t&&r(e)}}}function Bt(s){let e;return{c(){e=a("span"),e.textContent="Optional",g(e,"class","label label-warning")},m(t,l){c(t,e,l)},d(t){t&&r(e)}}}function jt(s){let e;return{c(){e=a("span"),e.textContent="Required",g(e,"class","label label-success")},m(t,l){c(t,e,l)},d(t){t&&r(e)}}}function Nt(s){let e;return{c(){e=a("span"),e.textContent="Required",g(e,"class","label label-success")},m(t,l){c(t,e,l)},d(t){t&&r(e)}}}function At(s){let e;return{c(){e=a("span"),e.textContent="Optional",g(e,"class","label label-warning")},m(t,l){c(t,e,l)},d(t){t&&r(e)}}}function Jt(s){let e,t=s[15].maxSelect===1?"ID":"ID列表",l,f;return{c(){e=_("关联记录"),l=_(t),f=_("。")},m(d,u){c(d,e,u),c(d,l,u),c(d,f,u)},p(d,u){u&64&&t!==(t=d[15].maxSelect===1?"ID":"ID列表")&&oe(l,t)},d(d){d&&(r(e),r(l),r(f))}}}function It(s){let e,t,l,f,d,u,m,b,$;return{c(){e=_("文件对象。"),t=a("br"),l=_(`\r
                        设置为空值 (`),f=a("code"),f.textContent="null",d=_("、"),u=a("code"),u.textContent='""',m=_(" 或 "),b=a("code"),b.textContent="[]",$=_(`) 以删除\r
                        已上传的文件。`)},m(y,C){c(y,e,C),c(y,t,C),c(y,l,C),c(y,f,C),c(y,d,C),c(y,u,C),c(y,m,C),c(y,b,C),c(y,$,C)},p:ge,d(y){y&&(r(e),r(t),r(l),r(f),r(d),r(u),r(m),r(b),r($))}}}function Ut(s){let e;return{c(){e=_("URL 地址。")},m(t,l){c(t,e,l)},p:ge,d(t){t&&r(e)}}}function Et(s){let e;return{c(){e=_("电子邮件地址。")},m(t,l){c(t,e,l)},p:ge,d(t){t&&r(e)}}}function zt(s){let e;return{c(){e=_("JSON 数组或对象。")},m(t,l){c(t,e,l)},p:ge,d(t){t&&r(e)}}}function Kt(s){let e;return{c(){e=_("数值。")},m(t,l){c(t,e,l)},p:ge,d(t){t&&r(e)}}}function Qt(s){let e,t,l=s[15].autogeneratePattern&&vt();return{c(){e=_(`纯文本值。\r
                        `),l&&l.c(),t=Dt()},m(f,d){c(f,e,d),l&&l.m(f,d),c(f,t,d)},p(f,d){f[15].autogeneratePattern?l||(l=vt(),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null)},d(f){f&&(r(e),r(t)),l&&l.d(f)}}}function vt(s){let e;return{c(){e=_("如果未设置则自动生成。")},m(t,l){c(t,e,l)},d(t){t&&r(e)}}}function ht(s,e){let t,l,f,d,u,m=e[15].name+"",b,$,y,C,V=ee.getFieldValueType(e[15])+"",T,M,F,O;function U(k,H){return!k[15].required||k[15].type=="text"&&k[15].autogeneratePattern?At:Nt}let J=U(e),S=J(e);function K(k,H){if(k[15].type==="text")return Qt;if(k[15].type==="number")return Kt;if(k[15].type==="json")return zt;if(k[15].type==="email")return Et;if(k[15].type==="url")return Ut;if(k[15].type==="file")return It;if(k[15].type==="relation")return Jt}let L=K(e),q=L&&L(e);return{key:s,first:null,c(){t=a("tr"),l=a("td"),f=a("div"),S.c(),d=p(),u=a("span"),b=_(m),$=p(),y=a("td"),C=a("span"),T=_(V),M=p(),F=a("td"),q&&q.c(),O=p(),g(f,"class","inline-flex"),g(C,"class","label"),this.first=t},m(k,H){c(k,t,H),i(t,l),i(l,f),S.m(f,null),i(f,d),i(f,u),i(u,b),i(t,$),i(t,y),i(y,C),i(C,T),i(t,M),i(t,F),q&&q.m(F,null),i(t,O)},p(k,H){e=k,J!==(J=U(e))&&(S.d(1),S=J(e),S&&(S.c(),S.m(f,d))),H&64&&m!==(m=e[15].name+"")&&oe(b,m),H&64&&V!==(V=ee.getFieldValueType(e[15])+"")&&oe(T,V),L===(L=K(e))&&q?q.p(e,H):(q&&q.d(1),q=L&&L(e),q&&(q.c(),q.m(F,null)))},d(k){k&&r(t),S.d(),q&&q.d()}}}function gt(s,e){let t,l=e[10].code+"",f,d,u,m;function b(){return e[9](e[10])}return{key:s,first:null,c(){t=a("button"),f=_(l),d=p(),g(t,"class","tab-item"),Te(t,"active",e[2]===e[10].code),this.first=t},m($,y){c($,t,y),i(t,f),i(t,d),u||(m=Pt(t,"click",b),u=!0)},p($,y){e=$,y&8&&l!==(l=e[10].code+"")&&oe(f,l),y&12&&Te(t,"active",e[2]===e[10].code)},d($){$&&r(t),u=!1,m()}}}function Ct(s,e){let t,l,f,d;return l=new wt({props:{content:e[10].body}}),{key:s,first:null,c(){t=a("div"),Se(l.$$.fragment),f=p(),g(t,"class","tab-item"),Te(t,"active",e[2]===e[10].code),this.first=t},m(u,m){c(u,t,m),qe(l,t,null),i(t,f),d=!0},p(u,m){e=u;const b={};m&8&&(b.content=e[10].body),l.$set(b),(!d||m&12)&&Te(t,"active",e[2]===e[10].code)},i(u){d||(he(l.$$.fragment,u),d=!0)},o(u){ve(l.$$.fragment,u),d=!1},d(u){u&&r(t),$e(l)}}}function Wt(s){var st,at,ot,rt;let e,t,l=s[0].name+"",f,d,u,m,b,$,y,C=s[0].name+"",V,T,M,F,O,U,J,S,K,L,q,k,H,te,W,E,re,X,Y=s[0].name+"",Z,ue,le,I,G,x,P,v,w,j,Q,D=[],Ne=new Map,Me,pe,Oe,ne,Le,Ae,be,ie,He,Je,Pe,Ie,R,Ue,ce,Ee,ze,Ke,De,Qe,Fe,We,Xe,Ye,Re,Ze,Ge,de,Ve,me,Be,se,_e,z=[],xe=new Map,et,ke,N=[],tt=new Map,ae;S=new Tt({props:{js:`
import PocketBase from 'pocketbase';

const pb = new PocketBase('${s[5]}');

...

// example create data
const data = ${JSON.stringify(Object.assign({},s[4],ee.dummyCollectionSchemaData(s[0],!0)),null,4)};

const record = await pb.collection('${(st=s[0])==null?void 0:st.name}').create(data);
`+(s[1]?`
// (optional) send an email verification request
await pb.collection('${(at=s[0])==null?void 0:at.name}').requestVerification('test@example.com');
`:""),dart:`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${s[5]}');

...

// example create body
final body = <String, dynamic>${JSON.stringify(Object.assign({},s[4],ee.dummyCollectionSchemaData(s[0],!0)),null,2)};

final record = await pb.collection('${(ot=s[0])==null?void 0:ot.name}').create(body: body);
`+(s[1]?`
// (optional) send an email verification request
await pb.collection('${(rt=s[0])==null?void 0:rt.name}').requestVerification('test@example.com');
`:"")}});let A=s[7]&&kt(),B=s[1]&&yt(s),Ce=fe(s[6]);const lt=n=>n[15].name;for(let n=0;n<Ce.length;n+=1){let o=_t(s,Ce,n),h=lt(o);Ne.set(h,D[n]=ht(h,o))}ce=new wt({props:{content:"?expand=relField1,relField2.subRelField"}}),de=new Ft({});let we=fe(s[3]);const nt=n=>n[10].code;for(let n=0;n<we.length;n+=1){let o=mt(s,we,n),h=nt(o);xe.set(h,z[n]=gt(h,o))}let ye=fe(s[3]);const it=n=>n[10].code;for(let n=0;n<ye.length;n+=1){let o=bt(s,ye,n),h=it(o);tt.set(h,N[n]=Ct(h,o))}return{c(){e=a("h3"),t=_("创建 ("),f=_(l),d=_(")"),u=p(),m=a("div"),b=a("p"),$=_("创建一个新的 "),y=a("strong"),V=_(C),T=_(" 记录。"),M=p(),F=a("p"),F.innerHTML=`请求体参数可以通过 <code>application/json</code> 或
        <code>multipart/form-data</code> 方式发送。`,O=p(),U=a("p"),U.innerHTML=`文件上传仅支持 <code>multipart/form-data</code> 方式。
        <br/>
        更多信息和示例请查看详细的
        <a href="https://pocketbase.io/docs/files-handling" target="_blank" rel="noopener noreferrer">文件上传和处理文档
        </a>。`,J=p(),Se(S.$$.fragment),K=p(),L=a("h6"),L.textContent="API 详情",q=p(),k=a("div"),H=a("strong"),H.textContent="POST",te=p(),W=a("div"),E=a("p"),re=_("/api/collections/"),X=a("strong"),Z=_(Y),ue=_("/records"),le=p(),A&&A.c(),I=p(),G=a("div"),G.textContent="请求体参数",x=p(),P=a("table"),v=a("thead"),v.innerHTML='<tr><th>参数</th> <th>类型</th> <th width="50%">描述</th></tr>',w=p(),j=a("tbody"),B&&B.c(),Q=p();for(let n=0;n<D.length;n+=1)D[n].c();Me=p(),pe=a("div"),pe.textContent="查询参数",Oe=p(),ne=a("table"),Le=a("thead"),Le.innerHTML='<tr><th>参数</th> <th>类型</th> <th width="60%">描述</th></tr>',Ae=p(),be=a("tbody"),ie=a("tr"),He=a("td"),He.textContent="expand",Je=p(),Pe=a("td"),Pe.innerHTML='<span class="label">String</span>',Ie=p(),R=a("td"),Ue=_(`返回创建的记录时自动展开关联。示例：\r
                `),Se(ce.$$.fragment),Ee=_(`\r
                支持最多6层深度的嵌套关联展开。`),ze=a("br"),Ke=_(`\r
                展开的关联将附加到记录的\r
                `),De=a("code"),De.textContent="expand",Qe=_(" 属性下（例如："),Fe=a("code"),Fe.textContent='"expand": {"relField1": {...}, ...}',We=_(`）。\r
                `),Xe=a("br"),Ye=_(`\r
                只有请求用户具有`),Re=a("strong"),Re.textContent="查看",Ze=_("权限的关联才会被展开。"),Ge=p(),Se(de.$$.fragment),Ve=p(),me=a("div"),me.textContent="响应",Be=p(),se=a("div"),_e=a("div");for(let n=0;n<z.length;n+=1)z[n].c();et=p(),ke=a("div");for(let n=0;n<N.length;n+=1)N[n].c();g(e,"class","m-b-sm"),g(m,"class","content txt-lg m-b-sm"),g(L,"class","m-b-xs"),g(H,"class","label label-primary"),g(W,"class","content"),g(k,"class","alert alert-success"),g(G,"class","section-title"),g(P,"class","table-compact table-border m-b-base"),g(pe,"class","section-title"),g(ne,"class","table-compact table-border m-b-base"),g(me,"class","section-title"),g(_e,"class","tabs-header compact combined left"),g(ke,"class","tabs-content"),g(se,"class","tabs")},m(n,o){c(n,e,o),i(e,t),i(e,f),i(e,d),c(n,u,o),c(n,m,o),i(m,b),i(b,$),i(b,y),i(y,V),i(b,T),i(m,M),i(m,F),i(m,O),i(m,U),c(n,J,o),qe(S,n,o),c(n,K,o),c(n,L,o),c(n,q,o),c(n,k,o),i(k,H),i(k,te),i(k,W),i(W,E),i(E,re),i(E,X),i(X,Z),i(E,ue),i(k,le),A&&A.m(k,null),c(n,I,o),c(n,G,o),c(n,x,o),c(n,P,o),i(P,v),i(P,w),i(P,j),B&&B.m(j,null),i(j,Q);for(let h=0;h<D.length;h+=1)D[h]&&D[h].m(j,null);c(n,Me,o),c(n,pe,o),c(n,Oe,o),c(n,ne,o),i(ne,Le),i(ne,Ae),i(ne,be),i(be,ie),i(ie,He),i(ie,Je),i(ie,Pe),i(ie,Ie),i(ie,R),i(R,Ue),qe(ce,R,null),i(R,Ee),i(R,ze),i(R,Ke),i(R,De),i(R,Qe),i(R,Fe),i(R,We),i(R,Xe),i(R,Ye),i(R,Re),i(R,Ze),i(be,Ge),qe(de,be,null),c(n,Ve,o),c(n,me,o),c(n,Be,o),c(n,se,o),i(se,_e);for(let h=0;h<z.length;h+=1)z[h]&&z[h].m(_e,null);i(se,et),i(se,ke);for(let h=0;h<N.length;h+=1)N[h]&&N[h].m(ke,null);ae=!0},p(n,[o]){var ct,dt,ft,ut;(!ae||o&1)&&l!==(l=n[0].name+"")&&oe(f,l),(!ae||o&1)&&C!==(C=n[0].name+"")&&oe(V,C);const h={};o&51&&(h.js=`
import PocketBase from 'pocketbase';

const pb = new PocketBase('${n[5]}');

...

// example create data
const data = ${JSON.stringify(Object.assign({},n[4],ee.dummyCollectionSchemaData(n[0],!0)),null,4)};

const record = await pb.collection('${(ct=n[0])==null?void 0:ct.name}').create(data);
`+(n[1]?`
// (optional) send an email verification request
await pb.collection('${(dt=n[0])==null?void 0:dt.name}').requestVerification('test@example.com');
`:"")),o&51&&(h.dart=`
import 'package:pocketbase/pocketbase.dart';

final pb = PocketBase('${n[5]}');

...

// example create body
final body = <String, dynamic>${JSON.stringify(Object.assign({},n[4],ee.dummyCollectionSchemaData(n[0],!0)),null,2)};

final record = await pb.collection('${(ft=n[0])==null?void 0:ft.name}').create(body: body);
`+(n[1]?`
// (optional) send an email verification request
await pb.collection('${(ut=n[0])==null?void 0:ut.name}').requestVerification('test@example.com');
`:"")),S.$set(h),(!ae||o&1)&&Y!==(Y=n[0].name+"")&&oe(Z,Y),n[7]?A||(A=kt(),A.c(),A.m(k,null)):A&&(A.d(1),A=null),n[1]?B?B.p(n,o):(B=yt(n),B.c(),B.m(j,Q)):B&&(B.d(1),B=null),o&64&&(Ce=fe(n[6]),D=je(D,o,lt,1,n,Ce,Ne,j,pt,ht,null,_t)),o&12&&(we=fe(n[3]),z=je(z,o,nt,1,n,we,xe,_e,pt,gt,null,mt)),o&12&&(ye=fe(n[3]),Mt(),N=je(N,o,it,1,n,ye,tt,ke,Ot,Ct,null,bt),Lt())},i(n){if(!ae){he(S.$$.fragment,n),he(ce.$$.fragment,n),he(de.$$.fragment,n);for(let o=0;o<ye.length;o+=1)he(N[o]);ae=!0}},o(n){ve(S.$$.fragment,n),ve(ce.$$.fragment,n),ve(de.$$.fragment,n);for(let o=0;o<N.length;o+=1)ve(N[o]);ae=!1},d(n){n&&(r(e),r(u),r(m),r(J),r(K),r(L),r(q),r(k),r(I),r(G),r(x),r(P),r(Me),r(pe),r(Oe),r(ne),r(Ve),r(me),r(Be),r(se)),$e(S,n),A&&A.d(),B&&B.d();for(let o=0;o<D.length;o+=1)D[o].d();$e(ce),$e(de);for(let o=0;o<z.length;o+=1)z[o].d();for(let o=0;o<N.length;o+=1)N[o].d()}}}const Xt=s=>s.name=="emailVisibility",Yt=s=>s.name=="email";function Zt(s,e,t){let l,f,d,u,m,{collection:b}=e,$=200,y=[],C={};const V=T=>t(2,$=T.code);return s.$$set=T=>{"collection"in T&&t(0,b=T.collection)},s.$$.update=()=>{var T,M,F;s.$$.dirty&1&&t(1,l=b.type==="auth"),s.$$.dirty&1&&t(7,f=(b==null?void 0:b.createRule)===null),s.$$.dirty&2&&t(8,d=l?["password","verified","email","emailVisibility"]:[]),s.$$.dirty&257&&t(6,u=((T=b==null?void 0:b.fields)==null?void 0:T.filter(O=>!O.hidden&&O.type!="autodate"&&!d.includes(O.name)))||[]),s.$$.dirty&1&&t(3,y=[{code:200,body:JSON.stringify(ee.dummyCollectionRecord(b),null,2)},{code:400,body:`
                {
                  "status": 400,
                  "message": "Failed to create record.",
                  "data": {
                    "${(F=(M=b==null?void 0:b.fields)==null?void 0:M[0])==null?void 0:F.name}": {
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
            `}]),s.$$.dirty&2&&(l?t(4,C={password:"12345678",passwordConfirm:"12345678"}):t(4,C={}))},t(5,m=ee.getApiExampleUrl(Ht.baseURL)),[b,l,$,y,C,m,u,f,d,V]}class el extends $t{constructor(e){super(),qt(this,e,Zt,Wt,St,{collection:0})}}export{el as default};
