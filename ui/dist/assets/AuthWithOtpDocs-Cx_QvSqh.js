import{S as me,i as _e,s as ge,W as ve,X as Y,h as m,d as x,t as E,a as J,I as ce,Z as de,_ as Ee,C as ue,$ as Ke,D as fe,l as _,n as a,m as ee,u as d,v as O,A as D,c as te,w as v,J as ke,k as N,o as $e,V as Qe,Y as Ae,p as Xe,a0 as Me}from"./index-D49pSSYG.js";import{F as Ze}from"./FieldsQueryParam-CHSdJRip.js";function We(o,t,e){const l=o.slice();return l[4]=t[e],l}function Be(o,t,e){const l=o.slice();return l[4]=t[e],l}function Re(o,t){let e,l=t[4].code+"",f,i,c,s;function h(){return t[3](t[4])}return{key:o,first:null,c(){e=d("button"),f=D(l),i=O(),v(e,"class","tab-item"),N(e,"active",t[1]===t[4].code),this.first=e},m(g,q){_(g,e,q),a(e,f),a(e,i),c||(s=$e(e,"click",h),c=!0)},p(g,q){t=g,q&4&&l!==(l=t[4].code+"")&&ce(f,l),q&6&&N(e,"active",t[1]===t[4].code)},d(g){g&&m(e),c=!1,s()}}}function Ue(o,t){let e,l,f,i;return l=new ve({props:{content:t[4].body}}),{key:o,first:null,c(){e=d("div"),te(l.$$.fragment),f=O(),v(e,"class","tab-item"),N(e,"active",t[1]===t[4].code),this.first=e},m(c,s){_(c,e,s),ee(l,e,null),a(e,f),i=!0},p(c,s){t=c;const h={};s&4&&(h.content=t[4].body),l.$set(h),(!i||s&6)&&N(e,"active",t[1]===t[4].code)},i(c){i||(J(l.$$.fragment,c),i=!0)},o(c){E(l.$$.fragment,c),i=!1},d(c){c&&m(e),x(l)}}}function ze(o){let t,e,l,f,i,c,s,h=o[0].name+"",g,q,U,W,B,A,K,M,F,w,S,C,k,L,V,I,X,j,n,$,P,z,u,p,y,T,Z,Te,Oe,Pe,pe,Se,we,le,be,ne,he,G,oe,Q=[],ye=new Map,Ce,se,H=[],qe=new Map,ae;P=new ve({props:{content:"?expand=relField1,relField2.subRelField"}}),le=new Ze({props:{prefix:"record."}});let re=Y(o[2]);const Ie=r=>r[4].code;for(let r=0;r<re.length;r+=1){let b=Be(o,re,r),R=Ie(b);ye.set(R,Q[r]=Re(R,b))}let ie=Y(o[2]);const De=r=>r[4].code;for(let r=0;r<ie.length;r+=1){let b=We(o,ie,r),R=De(b);qe.set(R,H[r]=Ue(R,b))}return{c(){t=d("div"),e=d("strong"),e.textContent="POST",l=O(),f=d("div"),i=d("p"),c=D("/api/collections/"),s=d("strong"),g=D(h),q=D("/auth-with-otp"),U=O(),W=d("div"),W.textContent="请求参数",B=O(),A=d("table"),A.innerHTML='<thead><tr><th>参数</th> <th>类型</th> <th width="50%">描述</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-success">必填</span> <span>otpId</span></div></td> <td><span class="label">String</span></td> <td>OTP请求的ID。</td></tr> <tr><td><div class="inline-flex"><span class="label label-success">必填</span> <span>password</span></div></td> <td><span class="label">String</span></td> <td>一次性密码。</td></tr></tbody>',K=O(),M=d("div"),M.textContent="查询参数",F=O(),w=d("table"),S=d("thead"),S.innerHTML='<tr><th>参数</th> <th>类型</th> <th width="60%">描述</th></tr>',C=O(),k=d("tbody"),L=d("tr"),V=d("td"),V.textContent="expand",I=O(),X=d("td"),X.innerHTML='<span class="label">String</span>',j=O(),n=d("td"),$=D(`自动展开记录关联。示例：\r
                `),te(P.$$.fragment),z=D(`\r
                支持最多6层深度的嵌套关联展开。`),u=d("br"),p=D(`\r
                展开的关联将被追加到记录的`),y=d("code"),y.textContent="expand",T=D(`属性下\r
                (例如：`),Z=d("code"),Z.textContent='"expand": {"relField1": {...}, ...}',Te=D(`)。\r
                `),Oe=d("br"),Pe=D(`\r
                只有请求用户具有`),pe=d("strong"),pe.textContent="查看",Se=D("权限的关联才会被展开。"),we=O(),te(le.$$.fragment),be=O(),ne=d("div"),ne.textContent="响应结果",he=O(),G=d("div"),oe=d("div");for(let r=0;r<Q.length;r+=1)Q[r].c();Ce=O(),se=d("div");for(let r=0;r<H.length;r+=1)H[r].c();v(e,"class","label label-primary"),v(f,"class","content"),v(t,"class","alert alert-success"),v(W,"class","section-title"),v(A,"class","table-compact table-border m-b-base"),v(M,"class","section-title"),v(w,"class","table-compact table-border m-b-base"),v(ne,"class","section-title"),v(oe,"class","tabs-header compact combined left"),v(se,"class","tabs-content"),v(G,"class","tabs")},m(r,b){_(r,t,b),a(t,e),a(t,l),a(t,f),a(f,i),a(i,c),a(i,s),a(s,g),a(i,q),_(r,U,b),_(r,W,b),_(r,B,b),_(r,A,b),_(r,K,b),_(r,M,b),_(r,F,b),_(r,w,b),a(w,S),a(w,C),a(w,k),a(k,L),a(L,V),a(L,I),a(L,X),a(L,j),a(L,n),a(n,$),ee(P,n,null),a(n,z),a(n,u),a(n,p),a(n,y),a(n,T),a(n,Z),a(n,Te),a(n,Oe),a(n,Pe),a(n,pe),a(n,Se),a(k,we),ee(le,k,null),_(r,be,b),_(r,ne,b),_(r,he,b),_(r,G,b),a(G,oe);for(let R=0;R<Q.length;R+=1)Q[R]&&Q[R].m(oe,null);a(G,Ce),a(G,se);for(let R=0;R<H.length;R+=1)H[R]&&H[R].m(se,null);ae=!0},p(r,[b]){(!ae||b&1)&&h!==(h=r[0].name+"")&&ce(g,h),b&6&&(re=Y(r[2]),Q=de(Q,b,Ie,1,r,re,ye,oe,Ee,Re,null,Be)),b&6&&(ie=Y(r[2]),ue(),H=de(H,b,De,1,r,ie,qe,se,Ke,Ue,null,We),fe())},i(r){if(!ae){J(P.$$.fragment,r),J(le.$$.fragment,r);for(let b=0;b<ie.length;b+=1)J(H[b]);ae=!0}},o(r){E(P.$$.fragment,r),E(le.$$.fragment,r);for(let b=0;b<H.length;b+=1)E(H[b]);ae=!1},d(r){r&&(m(t),m(U),m(W),m(B),m(A),m(K),m(M),m(F),m(w),m(be),m(ne),m(he),m(G)),x(P),x(le);for(let b=0;b<Q.length;b+=1)Q[b].d();for(let b=0;b<H.length;b+=1)H[b].d()}}}function Ge(o,t,e){let{collection:l}=t,f=200,i=[];const c=s=>e(1,f=s.code);return o.$$set=s=>{"collection"in s&&e(0,l=s.collection)},o.$$.update=()=>{o.$$.dirty&1&&e(2,i=[{code:200,body:JSON.stringify({token:"JWT_TOKEN",record:ke.dummyCollectionRecord(l)},null,2)},{code:400,body:`
                {
                  "status": 400,
                  "message": "认证失败。",
                  "data": {
                    "otpId": {
                      "code": "validation_required",
                      "message": "缺少必填值。"
                    }
                  }
                }
            `}])},[l,f,i,c]}class xe extends me{constructor(t){super(),_e(this,t,Ge,ze,ge,{collection:0})}}function Fe(o,t,e){const l=o.slice();return l[4]=t[e],l}function He(o,t,e){const l=o.slice();return l[4]=t[e],l}function Le(o,t){let e,l=t[4].code+"",f,i,c,s;function h(){return t[3](t[4])}return{key:o,first:null,c(){e=d("button"),f=D(l),i=O(),v(e,"class","tab-item"),N(e,"active",t[1]===t[4].code),this.first=e},m(g,q){_(g,e,q),a(e,f),a(e,i),c||(s=$e(e,"click",h),c=!0)},p(g,q){t=g,q&4&&l!==(l=t[4].code+"")&&ce(f,l),q&6&&N(e,"active",t[1]===t[4].code)},d(g){g&&m(e),c=!1,s()}}}function Ve(o,t){let e,l,f,i;return l=new ve({props:{content:t[4].body}}),{key:o,first:null,c(){e=d("div"),te(l.$$.fragment),f=O(),v(e,"class","tab-item"),N(e,"active",t[1]===t[4].code),this.first=e},m(c,s){_(c,e,s),ee(l,e,null),a(e,f),i=!0},p(c,s){t=c;const h={};s&4&&(h.content=t[4].body),l.$set(h),(!i||s&6)&&N(e,"active",t[1]===t[4].code)},i(c){i||(J(l.$$.fragment,c),i=!0)},o(c){E(l.$$.fragment,c),i=!1},d(c){c&&m(e),x(l)}}}function et(o){let t,e,l,f,i,c,s,h=o[0].name+"",g,q,U,W,B,A,K,M,F,w,S,C=[],k=new Map,L,V,I=[],X=new Map,j,n=Y(o[2]);const $=u=>u[4].code;for(let u=0;u<n.length;u+=1){let p=He(o,n,u),y=$(p);k.set(y,C[u]=Le(y,p))}let P=Y(o[2]);const z=u=>u[4].code;for(let u=0;u<P.length;u+=1){let p=Fe(o,P,u),y=z(p);X.set(y,I[u]=Ve(y,p))}return{c(){t=d("div"),e=d("strong"),e.textContent="POST",l=O(),f=d("div"),i=d("p"),c=D("/api/collections/"),s=d("strong"),g=D(h),q=D("/request-otp"),U=O(),W=d("div"),W.textContent="请求参数",B=O(),A=d("table"),A.innerHTML='<thead><tr><th>参数</th> <th>类型</th> <th width="50%">描述</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-success">必填</span> <span>email</span></div></td> <td><span class="label">String</span></td> <td>用于发送OTP请求的认证记录邮箱地址（如果存在）。</td></tr></tbody>',K=O(),M=d("div"),M.textContent="响应结果",F=O(),w=d("div"),S=d("div");for(let u=0;u<C.length;u+=1)C[u].c();L=O(),V=d("div");for(let u=0;u<I.length;u+=1)I[u].c();v(e,"class","label label-primary"),v(f,"class","content"),v(t,"class","alert alert-success"),v(W,"class","section-title"),v(A,"class","table-compact table-border m-b-base"),v(M,"class","section-title"),v(S,"class","tabs-header compact combined left"),v(V,"class","tabs-content"),v(w,"class","tabs")},m(u,p){_(u,t,p),a(t,e),a(t,l),a(t,f),a(f,i),a(i,c),a(i,s),a(s,g),a(i,q),_(u,U,p),_(u,W,p),_(u,B,p),_(u,A,p),_(u,K,p),_(u,M,p),_(u,F,p),_(u,w,p),a(w,S);for(let y=0;y<C.length;y+=1)C[y]&&C[y].m(S,null);a(w,L),a(w,V);for(let y=0;y<I.length;y+=1)I[y]&&I[y].m(V,null);j=!0},p(u,[p]){(!j||p&1)&&h!==(h=u[0].name+"")&&ce(g,h),p&6&&(n=Y(u[2]),C=de(C,p,$,1,u,n,k,S,Ee,Le,null,He)),p&6&&(P=Y(u[2]),ue(),I=de(I,p,z,1,u,P,X,V,Ke,Ve,null,Fe),fe())},i(u){if(!j){for(let p=0;p<P.length;p+=1)J(I[p]);j=!0}},o(u){for(let p=0;p<I.length;p+=1)E(I[p]);j=!1},d(u){u&&(m(t),m(U),m(W),m(B),m(A),m(K),m(M),m(F),m(w));for(let p=0;p<C.length;p+=1)C[p].d();for(let p=0;p<I.length;p+=1)I[p].d()}}}function tt(o,t,e){let{collection:l}=t,f=200,i=[];const c=s=>e(1,f=s.code);return o.$$set=s=>{"collection"in s&&e(0,l=s.collection)},e(2,i=[{code:200,body:JSON.stringify({otpId:ke.randomString(15)},null,2)},{code:400,body:`
                {
                  "status": 400,
                  "message": "提交的数据验证时发生错误。",
                  "data": {
                    "email": {
                      "code": "validation_is_email",
                      "message": "必须是有效的邮箱地址。"
                    }
                  }
                }
            `},{code:429,body:`
                {
                  "status": 429,
                  "message": "您发送了太多OTP请求，请稍后再试。",
                  "data": {}
                }
            `}]),[l,f,i,c]}class lt extends me{constructor(t){super(),_e(this,t,tt,et,ge,{collection:0})}}function Ye(o,t,e){const l=o.slice();return l[5]=t[e],l[7]=e,l}function Je(o,t,e){const l=o.slice();return l[5]=t[e],l[7]=e,l}function Ne(o){let t,e,l,f,i;function c(){return o[4](o[7])}return{c(){t=d("button"),e=d("div"),e.textContent=`${o[5].title}`,l=O(),v(e,"class","txt"),v(t,"class","tab-item"),N(t,"active",o[1]==o[7])},m(s,h){_(s,t,h),a(t,e),a(t,l),f||(i=$e(t,"click",c),f=!0)},p(s,h){o=s,h&2&&N(t,"active",o[1]==o[7])},d(s){s&&m(t),f=!1,i()}}}function je(o){let t,e,l,f;var i=o[5].component;function c(s,h){return{props:{collection:s[0]}}}return i&&(e=Me(i,c(o))),{c(){t=d("div"),e&&te(e.$$.fragment),l=O(),v(t,"class","tab-item"),N(t,"active",o[1]==o[7])},m(s,h){_(s,t,h),e&&ee(e,t,null),a(t,l),f=!0},p(s,h){if(i!==(i=s[5].component)){if(e){ue();const g=e;E(g.$$.fragment,1,0,()=>{x(g,1)}),fe()}i?(e=Me(i,c(s)),te(e.$$.fragment),J(e.$$.fragment,1),ee(e,t,l)):e=null}else if(i){const g={};h&1&&(g.collection=s[0]),e.$set(g)}(!f||h&2)&&N(t,"active",s[1]==s[7])},i(s){f||(e&&J(e.$$.fragment,s),f=!0)},o(s){e&&E(e.$$.fragment,s),f=!1},d(s){s&&m(t),e&&x(e)}}}function nt(o){var V,I,X,j;let t,e,l=o[0].name+"",f,i,c,s,h,g,q,U,W,B,A,K,M,F;g=new Qe({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${o[2]}');

        ...

        // 向提供的认证记录发送OTP邮件
        const req = await pb.collection('${(V=o[0])==null?void 0:V.name}').requestOTP('test@example.com');

        // ... 显示一个屏幕/弹窗来输入邮件中的密码 ...

        // 使用请求的OTP ID和邮件密码进行认证
        const authData = await pb.collection('${(I=o[0])==null?void 0:I.name}').authWithOTP(
            req.otpId,
            "YOUR_OTP",
        );

        // 完成上述步骤后，你也可以从authStore中访问认证数据
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);

        // "退出登录"
        pb.authStore.clear();
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${o[2]}');

        ...

        // 向提供的认证记录发送OTP邮件
        final req = await pb.collection('${(X=o[0])==null?void 0:X.name}').requestOTP('test@example.com');

        // ... 显示一个屏幕/弹窗来输入邮件中的密码 ...

        // 使用请求的OTP ID和邮件密码进行认证
        final authData = await pb.collection('${(j=o[0])==null?void 0:j.name}').authWithOTP(
            req.otpId,
            "YOUR_OTP",
        );

        // 完成上述步骤后，你也可以从authStore中访问认证数据
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);

        // "退出登录"
        pb.authStore.clear();
    `}});let w=Y(o[3]),S=[];for(let n=0;n<w.length;n+=1)S[n]=Ne(Je(o,w,n));let C=Y(o[3]),k=[];for(let n=0;n<C.length;n+=1)k[n]=je(Ye(o,C,n));const L=n=>E(k[n],1,1,()=>{k[n]=null});return{c(){t=d("h3"),e=D("使用OTP认证 ("),f=D(l),i=D(")"),c=O(),s=d("div"),s.innerHTML="<p>使用一次性密码（OTP）进行认证。</p> <p>注意：当请求OTP时，即使提供的邮箱地址对应的用户不存在，我们也会返回一个<code>otpId</code>，这是一个基本的枚举保护措施。</p>",h=O(),te(g.$$.fragment),q=O(),U=d("h6"),U.textContent="API详情",W=O(),B=d("div"),A=d("div");for(let n=0;n<S.length;n+=1)S[n].c();K=O(),M=d("div");for(let n=0;n<k.length;n+=1)k[n].c();v(t,"class","m-b-sm"),v(s,"class","content txt-lg m-b-sm"),v(U,"class","m-b-xs"),v(A,"class","tabs-header compact"),v(M,"class","tabs-content"),v(B,"class","tabs")},m(n,$){_(n,t,$),a(t,e),a(t,f),a(t,i),_(n,c,$),_(n,s,$),_(n,h,$),ee(g,n,$),_(n,q,$),_(n,U,$),_(n,W,$),_(n,B,$),a(B,A);for(let P=0;P<S.length;P+=1)S[P]&&S[P].m(A,null);a(B,K),a(B,M);for(let P=0;P<k.length;P+=1)k[P]&&k[P].m(M,null);F=!0},p(n,[$]){var z,u,p,y;(!F||$&1)&&l!==(l=n[0].name+"")&&ce(f,l);const P={};if($&5&&(P.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${n[2]}');

        ...

        // 向提供的认证记录发送OTP邮件
        const req = await pb.collection('${(z=n[0])==null?void 0:z.name}').requestOTP('test@example.com');

        // ... 显示一个屏幕/弹窗来输入邮件中的密码 ...

        // 使用请求的OTP ID和邮件密码进行认证
        const authData = await pb.collection('${(u=n[0])==null?void 0:u.name}').authWithOTP(
            req.otpId,
            "YOUR_OTP",
        );

        // 完成上述步骤后，你也可以从authStore中访问认证数据
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);

        // "退出登录"
        pb.authStore.clear();
    `),$&5&&(P.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${n[2]}');

        ...

        // 向提供的认证记录发送OTP邮件
        final req = await pb.collection('${(p=n[0])==null?void 0:p.name}').requestOTP('test@example.com');

        // ... 显示一个屏幕/弹窗来输入邮件中的密码 ...

        // 使用请求的OTP ID和邮件密码进行认证
        final authData = await pb.collection('${(y=n[0])==null?void 0:y.name}').authWithOTP(
            req.otpId,
            "YOUR_OTP",
        );

        // 完成上述步骤后，你也可以从authStore中访问认证数据
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);

        // "退出登录"
        pb.authStore.clear();
    `),g.$set(P),$&10){w=Y(n[3]);let T;for(T=0;T<w.length;T+=1){const Z=Je(n,w,T);S[T]?S[T].p(Z,$):(S[T]=Ne(Z),S[T].c(),S[T].m(A,null))}for(;T<S.length;T+=1)S[T].d(1);S.length=w.length}if($&11){C=Y(n[3]);let T;for(T=0;T<C.length;T+=1){const Z=Ye(n,C,T);k[T]?(k[T].p(Z,$),J(k[T],1)):(k[T]=je(Z),k[T].c(),J(k[T],1),k[T].m(M,null))}for(ue(),T=C.length;T<k.length;T+=1)L(T);fe()}},i(n){if(!F){J(g.$$.fragment,n);for(let $=0;$<C.length;$+=1)J(k[$]);F=!0}},o(n){E(g.$$.fragment,n),k=k.filter(Boolean);for(let $=0;$<k.length;$+=1)E(k[$]);F=!1},d(n){n&&(m(t),m(c),m(s),m(h),m(q),m(U),m(W),m(B)),x(g,n),Ae(S,n),Ae(k,n)}}}function ot(o,t,e){let l,{collection:f}=t;const i=[{title:"OTP请求",component:lt},{title:"OTP认证",component:xe}];let c=0;const s=h=>e(1,c=h);return o.$$set=h=>{"collection"in h&&e(0,f=h.collection)},e(2,l=ke.getApiExampleUrl(Xe.baseURL)),[f,c,l,i,s]}class it extends me{constructor(t){super(),_e(this,t,ot,nt,ge,{collection:0})}}export{it as default};
