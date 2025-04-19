import{S as se,i as oe,s as ie,X as K,h as v,t as X,a as V,I as F,Z as le,_ as Oe,C as ne,$ as qe,D as ae,l as g,n as u,u as h,v as E,A as U,w as b,k as Y,o as ce,W as Me,d as x,m as ee,c as te,V as Re,Y as _e,J as Be,p as Ne,a0 as be}from"./index-D49pSSYG.js";function ve(n,e,t){const l=n.slice();return l[4]=e[t],l}function ge(n,e,t){const l=n.slice();return l[4]=e[t],l}function ke(n,e){let t,l=e[4].code+"",d,i,r,a;function m(){return e[3](e[4])}return{key:n,first:null,c(){t=h("button"),d=U(l),i=E(),b(t,"class","tab-item"),Y(t,"active",e[1]===e[4].code),this.first=t},m(k,T){g(k,t,T),u(t,d),u(t,i),r||(a=ce(t,"click",m),r=!0)},p(k,T){e=k,T&4&&l!==(l=e[4].code+"")&&F(d,l),T&6&&Y(t,"active",e[1]===e[4].code)},d(k){k&&v(t),r=!1,a()}}}function $e(n,e){let t,l,d,i;return l=new Me({props:{content:e[4].body}}),{key:n,first:null,c(){t=h("div"),te(l.$$.fragment),d=E(),b(t,"class","tab-item"),Y(t,"active",e[1]===e[4].code),this.first=t},m(r,a){g(r,t,a),ee(l,t,null),u(t,d),i=!0},p(r,a){e=r;const m={};a&4&&(m.content=e[4].body),l.$set(m),(!i||a&6)&&Y(t,"active",e[1]===e[4].code)},i(r){i||(V(l.$$.fragment,r),i=!0)},o(r){X(l.$$.fragment,r),i=!1},d(r){r&&v(t),x(l)}}}function We(n){let e,t,l,d,i,r,a,m=n[0].name+"",k,T,G,H,J,L,z,B,N,q,W,A=[],M=new Map,S,j,P=[],D=new Map,w,y=K(n[2]);const R=c=>c[4].code;for(let c=0;c<y.length;c+=1){let f=ge(n,y,c),s=R(f);M.set(s,A[c]=ke(s,f))}let _=K(n[2]);const Z=c=>c[4].code;for(let c=0;c<_.length;c+=1){let f=ve(n,_,c),s=Z(f);D.set(s,P[c]=$e(s,f))}return{c(){e=h("div"),t=h("strong"),t.textContent="POST",l=E(),d=h("div"),i=h("p"),r=U("/api/collections/"),a=h("strong"),k=U(m),T=U("/confirm-email-change"),G=E(),H=h("div"),H.textContent="Body参数",J=E(),L=h("table"),L.innerHTML='<thead><tr><th>参数</th> <th>类型</th> <th width="50%">描述</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-success">必填</span> <span>token</span></div></td> <td><span class="label">String</span></td> <td>来自邮箱变更请求邮件中的令牌。</td></tr> <tr><td><div class="inline-flex"><span class="label label-success">必填</span> <span>password</span></div></td> <td><span class="label">String</span></td> <td>确认邮箱变更的账户密码。</td></tr></tbody>',z=E(),B=h("div"),B.textContent="响应",N=E(),q=h("div"),W=h("div");for(let c=0;c<A.length;c+=1)A[c].c();S=E(),j=h("div");for(let c=0;c<P.length;c+=1)P[c].c();b(t,"class","label label-primary"),b(d,"class","content"),b(e,"class","alert alert-success"),b(H,"class","section-title"),b(L,"class","table-compact table-border m-b-base"),b(B,"class","section-title"),b(W,"class","tabs-header compact combined left"),b(j,"class","tabs-content"),b(q,"class","tabs")},m(c,f){g(c,e,f),u(e,t),u(e,l),u(e,d),u(d,i),u(i,r),u(i,a),u(a,k),u(i,T),g(c,G,f),g(c,H,f),g(c,J,f),g(c,L,f),g(c,z,f),g(c,B,f),g(c,N,f),g(c,q,f),u(q,W);for(let s=0;s<A.length;s+=1)A[s]&&A[s].m(W,null);u(q,S),u(q,j);for(let s=0;s<P.length;s+=1)P[s]&&P[s].m(j,null);w=!0},p(c,[f]){(!w||f&1)&&m!==(m=c[0].name+"")&&F(k,m),f&6&&(y=K(c[2]),A=le(A,f,R,1,c,y,M,W,Oe,ke,null,ge)),f&6&&(_=K(c[2]),ne(),P=le(P,f,Z,1,c,_,D,j,qe,$e,null,ve),ae())},i(c){if(!w){for(let f=0;f<_.length;f+=1)V(P[f]);w=!0}},o(c){for(let f=0;f<P.length;f+=1)X(P[f]);w=!1},d(c){c&&(v(e),v(G),v(H),v(J),v(L),v(z),v(B),v(N),v(q));for(let f=0;f<A.length;f+=1)A[f].d();for(let f=0;f<P.length;f+=1)P[f].d()}}}function De(n,e,t){let{collection:l}=e,d=204,i=[];const r=a=>t(1,d=a.code);return n.$$set=a=>{"collection"in a&&t(0,l=a.collection)},t(2,i=[{code:204,body:"null"},{code:400,body:`
                {
                  "status": 400,
                  "message": "An error occurred while validating the submitted data.",
                  "data": {
                    "token": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `}]),[l,d,i,r]}class He extends se{constructor(e){super(),oe(this,e,De,We,ie,{collection:0})}}function we(n,e,t){const l=n.slice();return l[4]=e[t],l}function Ce(n,e,t){const l=n.slice();return l[4]=e[t],l}function Ee(n,e){let t,l=e[4].code+"",d,i,r,a;function m(){return e[3](e[4])}return{key:n,first:null,c(){t=h("button"),d=U(l),i=E(),b(t,"class","tab-item"),Y(t,"active",e[1]===e[4].code),this.first=t},m(k,T){g(k,t,T),u(t,d),u(t,i),r||(a=ce(t,"click",m),r=!0)},p(k,T){e=k,T&4&&l!==(l=e[4].code+"")&&F(d,l),T&6&&Y(t,"active",e[1]===e[4].code)},d(k){k&&v(t),r=!1,a()}}}function ye(n,e){let t,l,d,i;return l=new Me({props:{content:e[4].body}}),{key:n,first:null,c(){t=h("div"),te(l.$$.fragment),d=E(),b(t,"class","tab-item"),Y(t,"active",e[1]===e[4].code),this.first=t},m(r,a){g(r,t,a),ee(l,t,null),u(t,d),i=!0},p(r,a){e=r;const m={};a&4&&(m.content=e[4].body),l.$set(m),(!i||a&6)&&Y(t,"active",e[1]===e[4].code)},i(r){i||(V(l.$$.fragment,r),i=!0)},o(r){X(l.$$.fragment,r),i=!1},d(r){r&&v(t),x(l)}}}function Le(n){let e,t,l,d,i,r,a,m=n[0].name+"",k,T,G,H,J,L,z,B,N,q,W,A,M,S=[],j=new Map,P,D,w=[],y=new Map,R,_=K(n[2]);const Z=s=>s[4].code;for(let s=0;s<_.length;s+=1){let p=Ce(n,_,s),O=Z(p);j.set(O,S[s]=Ee(O,p))}let c=K(n[2]);const f=s=>s[4].code;for(let s=0;s<c.length;s+=1){let p=we(n,c,s),O=f(p);y.set(O,w[s]=ye(O,p))}return{c(){e=h("div"),t=h("strong"),t.textContent="POST",l=E(),d=h("div"),i=h("p"),r=U("/api/collections/"),a=h("strong"),k=U(m),T=U("/request-email-change"),G=E(),H=h("p"),H.innerHTML="需要 <code>Authorization:TOKEN</code>",J=E(),L=h("div"),L.textContent="请求参数",z=E(),B=h("table"),B.innerHTML='<thead><tr><th>参数</th> <th>类型</th> <th width="50%">描述</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-success">Reuired</span> <span>newEmail</span></div></td> <td><span class="label">String</span></td> <td>要发送变更请求的新邮箱地址。</td></tr></tbody>',N=E(),q=h("div"),q.textContent="响应",W=E(),A=h("div"),M=h("div");for(let s=0;s<S.length;s+=1)S[s].c();P=E(),D=h("div");for(let s=0;s<w.length;s+=1)w[s].c();b(t,"class","label label-primary"),b(d,"class","content"),b(H,"class","txt-hint txt-sm txt-right"),b(e,"class","alert alert-success"),b(L,"class","section-title"),b(B,"class","table-compact table-border m-b-base"),b(q,"class","section-title"),b(M,"class","tabs-header compact combined left"),b(D,"class","tabs-content"),b(A,"class","tabs")},m(s,p){g(s,e,p),u(e,t),u(e,l),u(e,d),u(d,i),u(i,r),u(i,a),u(a,k),u(i,T),u(e,G),u(e,H),g(s,J,p),g(s,L,p),g(s,z,p),g(s,B,p),g(s,N,p),g(s,q,p),g(s,W,p),g(s,A,p),u(A,M);for(let O=0;O<S.length;O+=1)S[O]&&S[O].m(M,null);u(A,P),u(A,D);for(let O=0;O<w.length;O+=1)w[O]&&w[O].m(D,null);R=!0},p(s,[p]){(!R||p&1)&&m!==(m=s[0].name+"")&&F(k,m),p&6&&(_=K(s[2]),S=le(S,p,Z,1,s,_,j,M,Oe,Ee,null,Ce)),p&6&&(c=K(s[2]),ne(),w=le(w,p,f,1,s,c,y,D,qe,ye,null,we),ae())},i(s){if(!R){for(let p=0;p<c.length;p+=1)V(w[p]);R=!0}},o(s){for(let p=0;p<w.length;p+=1)X(w[p]);R=!1},d(s){s&&(v(e),v(J),v(L),v(z),v(B),v(N),v(q),v(W),v(A));for(let p=0;p<S.length;p+=1)S[p].d();for(let p=0;p<w.length;p+=1)w[p].d()}}}function Ue(n,e,t){let{collection:l}=e,d=204,i=[];const r=a=>t(1,d=a.code);return n.$$set=a=>{"collection"in a&&t(0,l=a.collection)},t(2,i=[{code:204,body:"null"},{code:400,body:`
                {
                  "status": 400,
                  "message": "An error occurred while validating the submitted data.",
                  "data": {
                    "newEmail": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `},{code:401,body:`
                {
                  "status": 401,
                  "message": "The request requires valid record authorization token to be set.",
                  "data": {}
                }
            `},{code:403,body:`
                {
                  "status": 403,
                  "message": "The authorized record model is not allowed to perform this action.",
                  "data": {}
                }
            `}]),[l,d,i,r]}class Ie extends se{constructor(e){super(),oe(this,e,Ue,Le,ie,{collection:0})}}function Ae(n,e,t){const l=n.slice();return l[5]=e[t],l[7]=t,l}function Pe(n,e,t){const l=n.slice();return l[5]=e[t],l[7]=t,l}function Te(n){let e,t,l,d,i;function r(){return n[4](n[7])}return{c(){e=h("button"),t=h("div"),t.textContent=`${n[5].title}`,l=E(),b(t,"class","txt"),b(e,"class","tab-item"),Y(e,"active",n[1]==n[7])},m(a,m){g(a,e,m),u(e,t),u(e,l),d||(i=ce(e,"click",r),d=!0)},p(a,m){n=a,m&2&&Y(e,"active",n[1]==n[7])},d(a){a&&v(e),d=!1,i()}}}function Se(n){let e,t,l,d;var i=n[5].component;function r(a,m){return{props:{collection:a[0]}}}return i&&(t=be(i,r(n))),{c(){e=h("div"),t&&te(t.$$.fragment),l=E(),b(e,"class","tab-item"),Y(e,"active",n[1]==n[7])},m(a,m){g(a,e,m),t&&ee(t,e,null),u(e,l),d=!0},p(a,m){if(i!==(i=a[5].component)){if(t){ne();const k=t;X(k.$$.fragment,1,0,()=>{x(k,1)}),ae()}i?(t=be(i,r(a)),te(t.$$.fragment),V(t.$$.fragment,1),ee(t,e,l)):t=null}else if(i){const k={};m&1&&(k.collection=a[0]),t.$set(k)}(!d||m&2)&&Y(e,"active",a[1]==a[7])},i(a){d||(t&&V(t.$$.fragment,a),d=!0)},o(a){t&&X(t.$$.fragment,a),d=!1},d(a){a&&v(e),t&&x(t)}}}function Ke(n){var c,f,s,p,O,re;let e,t,l=n[0].name+"",d,i,r,a,m,k,T,G=n[0].name+"",H,J,L,z,B,N,q,W,A,M,S,j,P,D;N=new Re({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${n[2]}');

        ...

        await pb.collection('${(c=n[0])==null?void 0:c.name}').authWithPassword('test@example.com', '1234567890');

        await pb.collection('${(f=n[0])==null?void 0:f.name}').requestEmailChange('new@example.com');

        // ---
        // (optional) in your custom confirmation page:
        // ---

        // note: after this call all previously issued auth tokens are invalidated
        await pb.collection('${(s=n[0])==null?void 0:s.name}').confirmEmailChange(
            'EMAIL_CHANGE_TOKEN',
            'YOUR_PASSWORD',
        );
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${n[2]}');

        ...

        await pb.collection('${(p=n[0])==null?void 0:p.name}').authWithPassword('test@example.com', '1234567890');

        await pb.collection('${(O=n[0])==null?void 0:O.name}').requestEmailChange('new@example.com');

        ...

        // ---
        // (optional) in your custom confirmation page:
        // ---

        // note: after this call all previously issued auth tokens are invalidated
        await pb.collection('${(re=n[0])==null?void 0:re.name}').confirmEmailChange(
          'EMAIL_CHANGE_TOKEN',
          'YOUR_PASSWORD',
        );
    `}});let w=K(n[3]),y=[];for(let o=0;o<w.length;o+=1)y[o]=Te(Pe(n,w,o));let R=K(n[3]),_=[];for(let o=0;o<R.length;o+=1)_[o]=Se(Ae(n,R,o));const Z=o=>X(_[o],1,1,()=>{_[o]=null});return{c(){e=h("h3"),t=U("邮箱变更 ("),d=U(l),i=U(")"),r=E(),a=h("div"),m=h("p"),k=U("发送 "),T=h("strong"),H=U(G),J=U(" 邮箱变更请求。"),L=E(),z=h("p"),z.textContent="邮箱变更成功后，该记录之前签发的所有认证令牌将自动失效。",B=E(),te(N.$$.fragment),q=E(),W=h("h6"),W.textContent="API详情",A=E(),M=h("div"),S=h("div");for(let o=0;o<y.length;o+=1)y[o].c();j=E(),P=h("div");for(let o=0;o<_.length;o+=1)_[o].c();b(e,"class","m-b-sm"),b(a,"class","content txt-lg m-b-sm"),b(W,"class","m-b-xs"),b(S,"class","tabs-header compact"),b(P,"class","tabs-content"),b(M,"class","tabs")},m(o,C){g(o,e,C),u(e,t),u(e,d),u(e,i),g(o,r,C),g(o,a,C),u(a,m),u(m,k),u(m,T),u(T,H),u(m,J),u(a,L),u(a,z),g(o,B,C),ee(N,o,C),g(o,q,C),g(o,W,C),g(o,A,C),g(o,M,C),u(M,S);for(let I=0;I<y.length;I+=1)y[I]&&y[I].m(S,null);u(M,j),u(M,P);for(let I=0;I<_.length;I+=1)_[I]&&_[I].m(P,null);D=!0},p(o,[C]){var de,ue,fe,me,pe,he;(!D||C&1)&&l!==(l=o[0].name+"")&&F(d,l),(!D||C&1)&&G!==(G=o[0].name+"")&&F(H,G);const I={};if(C&5&&(I.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${o[2]}');

        ...

        await pb.collection('${(de=o[0])==null?void 0:de.name}').authWithPassword('test@example.com', '1234567890');

        await pb.collection('${(ue=o[0])==null?void 0:ue.name}').requestEmailChange('new@example.com');

        // ---
        // (optional) in your custom confirmation page:
        // ---

        // note: after this call all previously issued auth tokens are invalidated
        await pb.collection('${(fe=o[0])==null?void 0:fe.name}').confirmEmailChange(
            'EMAIL_CHANGE_TOKEN',
            'YOUR_PASSWORD',
        );
    `),C&5&&(I.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${o[2]}');

        ...

        await pb.collection('${(me=o[0])==null?void 0:me.name}').authWithPassword('test@example.com', '1234567890');

        await pb.collection('${(pe=o[0])==null?void 0:pe.name}').requestEmailChange('new@example.com');

        ...

        // ---
        // (optional) in your custom confirmation page:
        // ---

        // note: after this call all previously issued auth tokens are invalidated
        await pb.collection('${(he=o[0])==null?void 0:he.name}').confirmEmailChange(
          'EMAIL_CHANGE_TOKEN',
          'YOUR_PASSWORD',
        );
    `),N.$set(I),C&10){w=K(o[3]);let $;for($=0;$<w.length;$+=1){const Q=Pe(o,w,$);y[$]?y[$].p(Q,C):(y[$]=Te(Q),y[$].c(),y[$].m(S,null))}for(;$<y.length;$+=1)y[$].d(1);y.length=w.length}if(C&11){R=K(o[3]);let $;for($=0;$<R.length;$+=1){const Q=Ae(o,R,$);_[$]?(_[$].p(Q,C),V(_[$],1)):(_[$]=Se(Q),_[$].c(),V(_[$],1),_[$].m(P,null))}for(ne(),$=R.length;$<_.length;$+=1)Z($);ae()}},i(o){if(!D){V(N.$$.fragment,o);for(let C=0;C<R.length;C+=1)V(_[C]);D=!0}},o(o){X(N.$$.fragment,o),_=_.filter(Boolean);for(let C=0;C<_.length;C+=1)X(_[C]);D=!1},d(o){o&&(v(e),v(r),v(a),v(B),v(q),v(W),v(A),v(M)),x(N,o),_e(y,o),_e(_,o)}}}function Ye(n,e,t){let l,{collection:d}=e;const i=[{title:"请求邮箱变更",component:Ie},{title:"确认邮箱变更",component:He}];let r=0;const a=m=>t(1,r=m);return n.$$set=m=>{"collection"in m&&t(0,d=m.collection)},t(2,l=Be.getApiExampleUrl(Ne.baseURL)),[d,r,l,i,a]}class ze extends se{constructor(e){super(),oe(this,e,Ye,Ke,ie,{collection:0})}}export{ze as default};
