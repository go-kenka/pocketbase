import{S as ke,i as ge,s as ve,V as Se,X as B,W as me,h as c,d as at,Y as $e,t as X,a as Z,I as z,Z as ce,_ as ye,C as we,$ as Pe,D as Ce,l as d,n as e,m as ot,u as s,A as f,v as p,c as st,w as k,J as de,p as Re,k as nt,o as Oe}from"./index-D49pSSYG.js";import{F as Te}from"./FieldsQueryParam-CHSdJRip.js";function ue(i,o,a){const n=i.slice();return n[7]=o[a],n}function pe(i,o,a){const n=i.slice();return n[7]=o[a],n}function be(i,o,a){const n=i.slice();return n[12]=o[a],n[14]=a,n}function We(i){let o;return{c(){o=f("or")},m(a,n){d(a,o,n)},d(a){a&&c(o)}}}function he(i){let o,a,n=i[12]+"",_,h=i[14]>0&&We();return{c(){h&&h.c(),o=p(),a=s("strong"),_=f(n)},m(r,b){h&&h.m(r,b),d(r,o,b),d(r,a,b),e(a,_)},p(r,b){b&2&&n!==(n=r[12]+"")&&z(_,n)},d(r){r&&(c(o),c(a)),h&&h.d(r)}}}function fe(i,o){let a,n=o[7].code+"",_,h,r,b;function g(){return o[6](o[7])}return{key:i,first:null,c(){a=s("button"),_=f(n),h=p(),k(a,"class","tab-item"),nt(a,"active",o[2]===o[7].code),this.first=a},m(w,m){d(w,a,m),e(a,_),e(a,h),r||(b=Oe(a,"click",g),r=!0)},p(w,m){o=w,m&8&&n!==(n=o[7].code+"")&&z(_,n),m&12&&nt(a,"active",o[2]===o[7].code)},d(w){w&&c(a),r=!1,b()}}}function _e(i,o){let a,n,_,h;return n=new me({props:{content:o[7].body}}),{key:i,first:null,c(){a=s("div"),st(n.$$.fragment),_=p(),k(a,"class","tab-item"),nt(a,"active",o[2]===o[7].code),this.first=a},m(r,b){d(r,a,b),ot(n,a,null),e(a,_),h=!0},p(r,b){o=r;const g={};b&8&&(g.content=o[7].body),n.$set(g),(!h||b&12)&&nt(a,"active",o[2]===o[7].code)},i(r){h||(Z(n.$$.fragment,r),h=!0)},o(r){X(n.$$.fragment,r),h=!1},d(r){r&&c(a),at(n)}}}function Ae(i){var oe,se;let o,a,n=i[0].name+"",_,h,r,b,g,w,m,G=i[1].join("/")+"",it,At,rt,Dt,ct,C,dt,H,ut,R,x,Ft,tt,q,Mt,pt,et=i[0].name+"",bt,Ut,ht,Y,ft,O,_t,Lt,j,T,mt,Bt,kt,Ht,V,gt,qt,vt,St,N,$t,W,yt,Yt,E,A,wt,jt,Pt,Vt,v,Nt,M,Et,It,Jt,Ct,Kt,Rt,Qt,Xt,Zt,Ot,zt,Gt,U,Tt,I,Wt,D,J,P=[],xt=new Map,te,K,$=[],ee=new Map,F;C=new Se({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${i[5]}');

        ...

        const authData = await pb.collection('${(oe=i[0])==null?void 0:oe.name}').authWithPassword(
            '${i[4]}',
            'YOUR_PASSWORD',
        );

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${i[5]}');

        ...

        final authData = await pb.collection('${(se=i[0])==null?void 0:se.name}').authWithPassword(
          '${i[4]}',
          'YOUR_PASSWORD',
        );

        // after the above you can also access the auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `}});let L=B(i[1]),S=[];for(let t=0;t<L.length;t+=1)S[t]=he(be(i,L,t));M=new me({props:{content:"?expand=relField1,relField2.subRelField"}}),U=new Te({props:{prefix:"record."}});let lt=B(i[3]);const le=t=>t[7].code;for(let t=0;t<lt.length;t+=1){let l=pe(i,lt,t),u=le(l);xt.set(u,P[t]=fe(u,l))}let Q=B(i[3]);const ae=t=>t[7].code;for(let t=0;t<Q.length;t+=1){let l=ue(i,Q,t),u=ae(l);ee.set(u,$[t]=_e(u,l))}return{c(){o=s("h3"),a=f("密码认证 ("),_=f(n),h=f(")"),r=p(),b=s("div"),g=s("p"),w=f("使用"),m=s("strong"),it=f(G),At=f("和"),rt=s("strong"),rt.textContent="密码",Dt=f("组合进行认证。"),ct=p(),st(C.$$.fragment),dt=p(),H=s("h6"),H.textContent="API 详情",ut=p(),R=s("div"),x=s("strong"),x.textContent="POST",Ft=p(),tt=s("div"),q=s("p"),Mt=f("/api/collections/"),pt=s("strong"),bt=f(et),Ut=f("/auth-with-password"),ht=p(),Y=s("div"),Y.textContent="请求参数",ft=p(),O=s("table"),_t=s("thead"),_t.innerHTML='<tr><th>参数</th> <th>类型</th> <th width="50%">描述</th></tr>',Lt=p(),j=s("tbody"),T=s("tr"),mt=s("td"),mt.innerHTML='<div class="inline-flex"><span class="label label-success">Required</span> <span>identity</span></div>',Bt=p(),kt=s("td"),kt.innerHTML='<span class="label">String</span>',Ht=p(),V=s("td");for(let t=0;t<S.length;t+=1)S[t].c();gt=f(`\r
                用于认证的记录。`),qt=p(),vt=s("tr"),vt.innerHTML='<td><div class="inline-flex"><span class="label label-success">Required</span> <span>password</span></div></td> <td><span class="label">String</span></td> <td>认证记录的密码。</td>',St=p(),N=s("div"),N.textContent="查询参数",$t=p(),W=s("table"),yt=s("thead"),yt.innerHTML='<tr><th>参数</th> <th>类型</th> <th width="60%">描述</th></tr>',Yt=p(),E=s("tbody"),A=s("tr"),wt=s("td"),wt.textContent="expand",jt=p(),Pt=s("td"),Pt.innerHTML='<span class="label">String</span>',Vt=p(),v=s("td"),Nt=f(`自动展开记录关联。例如：\r
                `),st(M.$$.fragment),Et=f(`\r
                支持最多6层深度的嵌套关联展开。`),It=s("br"),Jt=f(`\r
                展开的关联将会被添加到记录的`),Ct=s("code"),Ct.textContent="expand",Kt=f("属性下 (例如："),Rt=s("code"),Rt.textContent='"expand": {"relField1": {...}, ...}',Qt=f(`)。\r
                `),Xt=s("br"),Zt=f(`\r
                只有请求用户具有`),Ot=s("strong"),Ot.textContent="查看",zt=f("权限的关联才会被展开。"),Gt=p(),st(U.$$.fragment),Tt=p(),I=s("div"),I.textContent="响应",Wt=p(),D=s("div"),J=s("div");for(let t=0;t<P.length;t+=1)P[t].c();te=p(),K=s("div");for(let t=0;t<$.length;t+=1)$[t].c();k(o,"class","m-b-sm"),k(b,"class","content txt-lg m-b-sm"),k(H,"class","m-b-xs"),k(x,"class","label label-primary"),k(tt,"class","content"),k(R,"class","alert alert-success"),k(Y,"class","section-title"),k(O,"class","table-compact table-border m-b-base"),k(N,"class","section-title"),k(W,"class","table-compact table-border m-b-base"),k(I,"class","section-title"),k(J,"class","tabs-header compact combined left"),k(K,"class","tabs-content"),k(D,"class","tabs")},m(t,l){d(t,o,l),e(o,a),e(o,_),e(o,h),d(t,r,l),d(t,b,l),e(b,g),e(g,w),e(g,m),e(m,it),e(g,At),e(g,rt),e(g,Dt),d(t,ct,l),ot(C,t,l),d(t,dt,l),d(t,H,l),d(t,ut,l),d(t,R,l),e(R,x),e(R,Ft),e(R,tt),e(tt,q),e(q,Mt),e(q,pt),e(pt,bt),e(q,Ut),d(t,ht,l),d(t,Y,l),d(t,ft,l),d(t,O,l),e(O,_t),e(O,Lt),e(O,j),e(j,T),e(T,mt),e(T,Bt),e(T,kt),e(T,Ht),e(T,V);for(let u=0;u<S.length;u+=1)S[u]&&S[u].m(V,null);e(V,gt),e(j,qt),e(j,vt),d(t,St,l),d(t,N,l),d(t,$t,l),d(t,W,l),e(W,yt),e(W,Yt),e(W,E),e(E,A),e(A,wt),e(A,jt),e(A,Pt),e(A,Vt),e(A,v),e(v,Nt),ot(M,v,null),e(v,Et),e(v,It),e(v,Jt),e(v,Ct),e(v,Kt),e(v,Rt),e(v,Qt),e(v,Xt),e(v,Zt),e(v,Ot),e(v,zt),e(E,Gt),ot(U,E,null),d(t,Tt,l),d(t,I,l),d(t,Wt,l),d(t,D,l),e(D,J);for(let u=0;u<P.length;u+=1)P[u]&&P[u].m(J,null);e(D,te),e(D,K);for(let u=0;u<$.length;u+=1)$[u]&&$[u].m(K,null);F=!0},p(t,[l]){var ne,ie;(!F||l&1)&&n!==(n=t[0].name+"")&&z(_,n),(!F||l&2)&&G!==(G=t[1].join("/")+"")&&z(it,G);const u={};if(l&49&&(u.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${t[5]}');

        ...

        const authData = await pb.collection('${(ne=t[0])==null?void 0:ne.name}').authWithPassword(
            '${t[4]}',
            'YOUR_PASSWORD',
        );

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `),l&49&&(u.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${t[5]}');

        ...

        final authData = await pb.collection('${(ie=t[0])==null?void 0:ie.name}').authWithPassword(
          '${t[4]}',
          'YOUR_PASSWORD',
        );

        // after the above you can also access the auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `),C.$set(u),(!F||l&1)&&et!==(et=t[0].name+"")&&z(bt,et),l&2){L=B(t[1]);let y;for(y=0;y<L.length;y+=1){const re=be(t,L,y);S[y]?S[y].p(re,l):(S[y]=he(re),S[y].c(),S[y].m(V,gt))}for(;y<S.length;y+=1)S[y].d(1);S.length=L.length}l&12&&(lt=B(t[3]),P=ce(P,l,le,1,t,lt,xt,J,ye,fe,null,pe)),l&12&&(Q=B(t[3]),we(),$=ce($,l,ae,1,t,Q,ee,K,Pe,_e,null,ue),Ce())},i(t){if(!F){Z(C.$$.fragment,t),Z(M.$$.fragment,t),Z(U.$$.fragment,t);for(let l=0;l<Q.length;l+=1)Z($[l]);F=!0}},o(t){X(C.$$.fragment,t),X(M.$$.fragment,t),X(U.$$.fragment,t);for(let l=0;l<$.length;l+=1)X($[l]);F=!1},d(t){t&&(c(o),c(r),c(b),c(ct),c(dt),c(H),c(ut),c(R),c(ht),c(Y),c(ft),c(O),c(St),c(N),c($t),c(W),c(Tt),c(I),c(Wt),c(D)),at(C,t),$e(S,t),at(M),at(U);for(let l=0;l<P.length;l+=1)P[l].d();for(let l=0;l<$.length;l+=1)$[l].d()}}}function De(i,o,a){let n,_,h,{collection:r}=o,b=200,g=[];const w=m=>a(2,b=m.code);return i.$$set=m=>{"collection"in m&&a(0,r=m.collection)},i.$$.update=()=>{var m;i.$$.dirty&1&&a(1,_=((m=r==null?void 0:r.passwordAuth)==null?void 0:m.identityFields)||[]),i.$$.dirty&2&&a(4,h=_.length==0?"NONE":"YOUR_"+_.join("_OR_").toUpperCase()),i.$$.dirty&1&&a(3,g=[{code:200,body:JSON.stringify({token:"JWT_TOKEN",record:de.dummyCollectionRecord(r)},null,2)},{code:400,body:`
                {
                  "status": 400,
                  "message": "Failed to authenticate.",
                  "data": {
                    "identity": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `}])},a(5,n=de.getApiExampleUrl(Re.baseURL)),[r,_,b,g,h,n,w]}class Ue extends ke{constructor(o){super(),ge(this,o,De,Ae,ve,{collection:0})}}export{Ue as default};
