import{S as se,i as ne,s as oe,X as H,h,t as X,a as V,I as Z,Z as ee,_ as ye,C as te,$ as Ee,D as le,l as v,n as u,u as p,v as P,A as D,w as g,k as L,o as ae,W as Ce,d as G,m as Q,c as x,V as Oe,Y as fe,J as Ae,p as Te,a0 as pe}from"./index-D49pSSYG.js";function _e(o,t,e){const n=o.slice();return n[4]=t[e],n}function me(o,t,e){const n=o.slice();return n[4]=t[e],n}function be(o,t){let e,n=t[4].code+"",d,c,r,a;function f(){return t[3](t[4])}return{key:o,first:null,c(){e=p("button"),d=D(n),c=P(),g(e,"class","tab-item"),L(e,"active",t[1]===t[4].code),this.first=e},m(k,y){v(k,e,y),u(e,d),u(e,c),r||(a=ae(e,"click",f),r=!0)},p(k,y){t=k,y&4&&n!==(n=t[4].code+"")&&Z(d,n),y&6&&L(e,"active",t[1]===t[4].code)},d(k){k&&h(e),r=!1,a()}}}function he(o,t){let e,n,d,c;return n=new Ce({props:{content:t[4].body}}),{key:o,first:null,c(){e=p("div"),x(n.$$.fragment),d=P(),g(e,"class","tab-item"),L(e,"active",t[1]===t[4].code),this.first=e},m(r,a){v(r,e,a),Q(n,e,null),u(e,d),c=!0},p(r,a){t=r;const f={};a&4&&(f.content=t[4].body),n.$set(f),(!c||a&6)&&L(e,"active",t[1]===t[4].code)},i(r){c||(V(n.$$.fragment,r),c=!0)},o(r){X(n.$$.fragment,r),c=!1},d(r){r&&h(e),G(n)}}}function We(o){let t,e,n,d,c,r,a,f=o[0].name+"",k,y,F,A,J,N,U,T,W,E,O,R=[],M=new Map,j,q,b=[],K=new Map,C,S=H(o[2]);const B=l=>l[4].code;for(let l=0;l<S.length;l+=1){let s=me(o,S,l),m=B(s);M.set(m,R[l]=be(m,s))}let _=H(o[2]);const Y=l=>l[4].code;for(let l=0;l<_.length;l+=1){let s=_e(o,_,l),m=Y(s);K.set(m,b[l]=he(m,s))}return{c(){t=p("div"),e=p("strong"),e.textContent="POST",n=P(),d=p("div"),c=p("p"),r=D("/api/collections/"),a=p("strong"),k=D(f),y=D("/confirm-password-reset"),F=P(),A=p("div"),A.textContent="Body参数",J=P(),N=p("table"),N.innerHTML='<thead><tr><th>参数</th> <th>类型</th> <th width="50%">描述</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>token</span></div></td> <td><span class="label">String</span></td> <td>来自密码重置请求邮件中的令牌。</td></tr> <tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>password</span></div></td> <td><span class="label">String</span></td> <td>要设置的新密码。</td></tr> <tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>passwordConfirm</span></div></td> <td><span class="label">String</span></td> <td>新密码确认。</td></tr></tbody>',U=P(),T=p("div"),T.textContent="响应",W=P(),E=p("div"),O=p("div");for(let l=0;l<R.length;l+=1)R[l].c();j=P(),q=p("div");for(let l=0;l<b.length;l+=1)b[l].c();g(e,"class","label label-primary"),g(d,"class","content"),g(t,"class","alert alert-success"),g(A,"class","section-title"),g(N,"class","table-compact table-border m-b-base"),g(T,"class","section-title"),g(O,"class","tabs-header compact combined left"),g(q,"class","tabs-content"),g(E,"class","tabs")},m(l,s){v(l,t,s),u(t,e),u(t,n),u(t,d),u(d,c),u(c,r),u(c,a),u(a,k),u(c,y),v(l,F,s),v(l,A,s),v(l,J,s),v(l,N,s),v(l,U,s),v(l,T,s),v(l,W,s),v(l,E,s),u(E,O);for(let m=0;m<R.length;m+=1)R[m]&&R[m].m(O,null);u(E,j),u(E,q);for(let m=0;m<b.length;m+=1)b[m]&&b[m].m(q,null);C=!0},p(l,[s]){(!C||s&1)&&f!==(f=l[0].name+"")&&Z(k,f),s&6&&(S=H(l[2]),R=ee(R,s,B,1,l,S,M,O,ye,be,null,me)),s&6&&(_=H(l[2]),te(),b=ee(b,s,Y,1,l,_,K,q,Ee,he,null,_e),le())},i(l){if(!C){for(let s=0;s<_.length;s+=1)V(b[s]);C=!0}},o(l){for(let s=0;s<b.length;s+=1)X(b[s]);C=!1},d(l){l&&(h(t),h(F),h(A),h(J),h(N),h(U),h(T),h(W),h(E));for(let s=0;s<R.length;s+=1)R[s].d();for(let s=0;s<b.length;s+=1)b[s].d()}}}function Ne(o,t,e){let{collection:n}=t,d=204,c=[];const r=a=>e(1,d=a.code);return o.$$set=a=>{"collection"in a&&e(0,n=a.collection)},e(2,c=[{code:204,body:"null"},{code:400,body:`
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
            `}]),[n,d,c,r]}class qe extends se{constructor(t){super(),ne(this,t,Ne,We,oe,{collection:0})}}function ve(o,t,e){const n=o.slice();return n[4]=t[e],n}function ge(o,t,e){const n=o.slice();return n[4]=t[e],n}function ke(o,t){let e,n=t[4].code+"",d,c,r,a;function f(){return t[3](t[4])}return{key:o,first:null,c(){e=p("button"),d=D(n),c=P(),g(e,"class","tab-item"),L(e,"active",t[1]===t[4].code),this.first=e},m(k,y){v(k,e,y),u(e,d),u(e,c),r||(a=ae(e,"click",f),r=!0)},p(k,y){t=k,y&4&&n!==(n=t[4].code+"")&&Z(d,n),y&6&&L(e,"active",t[1]===t[4].code)},d(k){k&&h(e),r=!1,a()}}}function $e(o,t){let e,n,d,c;return n=new Ce({props:{content:t[4].body}}),{key:o,first:null,c(){e=p("div"),x(n.$$.fragment),d=P(),g(e,"class","tab-item"),L(e,"active",t[1]===t[4].code),this.first=e},m(r,a){v(r,e,a),Q(n,e,null),u(e,d),c=!0},p(r,a){t=r;const f={};a&4&&(f.content=t[4].body),n.$set(f),(!c||a&6)&&L(e,"active",t[1]===t[4].code)},i(r){c||(V(n.$$.fragment,r),c=!0)},o(r){X(n.$$.fragment,r),c=!1},d(r){r&&h(e),G(n)}}}function De(o){let t,e,n,d,c,r,a,f=o[0].name+"",k,y,F,A,J,N,U,T,W,E,O,R=[],M=new Map,j,q,b=[],K=new Map,C,S=H(o[2]);const B=l=>l[4].code;for(let l=0;l<S.length;l+=1){let s=ge(o,S,l),m=B(s);M.set(m,R[l]=ke(m,s))}let _=H(o[2]);const Y=l=>l[4].code;for(let l=0;l<_.length;l+=1){let s=ve(o,_,l),m=Y(s);K.set(m,b[l]=$e(m,s))}return{c(){t=p("div"),e=p("strong"),e.textContent="POST",n=P(),d=p("div"),c=p("p"),r=D("/api/collections/"),a=p("strong"),k=D(f),y=D("/request-password-reset"),F=P(),A=p("div"),A.textContent="请求参数",J=P(),N=p("table"),N.innerHTML='<thead><tr><th>参数</th> <th>类型</th> <th width="50%">描述</th></tr></thead> <tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> <span>email</span></div></td> <td><span class="label">String</span></td> <td>用于发送密码重置请求的认证记录邮箱地址（如果存在）。</td></tr></tbody>',U=P(),T=p("div"),T.textContent="响应",W=P(),E=p("div"),O=p("div");for(let l=0;l<R.length;l+=1)R[l].c();j=P(),q=p("div");for(let l=0;l<b.length;l+=1)b[l].c();g(e,"class","label label-primary"),g(d,"class","content"),g(t,"class","alert alert-success"),g(A,"class","section-title"),g(N,"class","table-compact table-border m-b-base"),g(T,"class","section-title"),g(O,"class","tabs-header compact combined left"),g(q,"class","tabs-content"),g(E,"class","tabs")},m(l,s){v(l,t,s),u(t,e),u(t,n),u(t,d),u(d,c),u(c,r),u(c,a),u(a,k),u(c,y),v(l,F,s),v(l,A,s),v(l,J,s),v(l,N,s),v(l,U,s),v(l,T,s),v(l,W,s),v(l,E,s),u(E,O);for(let m=0;m<R.length;m+=1)R[m]&&R[m].m(O,null);u(E,j),u(E,q);for(let m=0;m<b.length;m+=1)b[m]&&b[m].m(q,null);C=!0},p(l,[s]){(!C||s&1)&&f!==(f=l[0].name+"")&&Z(k,f),s&6&&(S=H(l[2]),R=ee(R,s,B,1,l,S,M,O,ye,ke,null,ge)),s&6&&(_=H(l[2]),te(),b=ee(b,s,Y,1,l,_,K,q,Ee,$e,null,ve),le())},i(l){if(!C){for(let s=0;s<_.length;s+=1)V(b[s]);C=!0}},o(l){for(let s=0;s<b.length;s+=1)X(b[s]);C=!1},d(l){l&&(h(t),h(F),h(A),h(J),h(N),h(U),h(T),h(W),h(E));for(let s=0;s<R.length;s+=1)R[s].d();for(let s=0;s<b.length;s+=1)b[s].d()}}}function Me(o,t,e){let{collection:n}=t,d=204,c=[];const r=a=>e(1,d=a.code);return o.$$set=a=>{"collection"in a&&e(0,n=a.collection)},e(2,c=[{code:204,body:"null"},{code:400,body:`
                {
                  "status": 400,
                  "message": "An error occurred while validating the submitted data.",
                  "data": {
                    "email": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `}]),[n,d,c,r]}class Be extends se{constructor(t){super(),ne(this,t,Me,De,oe,{collection:0})}}function we(o,t,e){const n=o.slice();return n[5]=t[e],n[7]=e,n}function Re(o,t,e){const n=o.slice();return n[5]=t[e],n[7]=e,n}function Se(o){let t,e,n,d,c;function r(){return o[4](o[7])}return{c(){t=p("button"),e=p("div"),e.textContent=`${o[5].title}`,n=P(),g(e,"class","txt"),g(t,"class","tab-item"),L(t,"active",o[1]==o[7])},m(a,f){v(a,t,f),u(t,e),u(t,n),d||(c=ae(t,"click",r),d=!0)},p(a,f){o=a,f&2&&L(t,"active",o[1]==o[7])},d(a){a&&h(t),d=!1,c()}}}function Pe(o){let t,e,n,d;var c=o[5].component;function r(a,f){return{props:{collection:a[0]}}}return c&&(e=pe(c,r(o))),{c(){t=p("div"),e&&x(e.$$.fragment),n=P(),g(t,"class","tab-item"),L(t,"active",o[1]==o[7])},m(a,f){v(a,t,f),e&&Q(e,t,null),u(t,n),d=!0},p(a,f){if(c!==(c=a[5].component)){if(e){te();const k=e;X(k.$$.fragment,1,0,()=>{G(k,1)}),le()}c?(e=pe(c,r(a)),x(e.$$.fragment),V(e.$$.fragment,1),Q(e,t,n)):e=null}else if(c){const k={};f&1&&(k.collection=a[0]),e.$set(k)}(!d||f&2)&&L(t,"active",a[1]==a[7])},i(a){d||(e&&V(e.$$.fragment,a),d=!0)},o(a){e&&X(e.$$.fragment,a),d=!1},d(a){a&&h(t),e&&G(e)}}}function Ie(o){var l,s,m,ie;let t,e,n=o[0].name+"",d,c,r,a,f,k,y,F=o[0].name+"",A,J,N,U,T,W,E,O,R,M,j,q,b,K;W=new Oe({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${o[2]}');

        ...

        await pb.collection('${(l=o[0])==null?void 0:l.name}').requestPasswordReset('test@example.com');

        // ---
        // (optional) in your custom confirmation page:
        // ---

        // note: after this call all previously issued auth tokens are invalidated
        await pb.collection('${(s=o[0])==null?void 0:s.name}').confirmPasswordReset(
            'RESET_TOKEN',
            'NEW_PASSWORD',
            'NEW_PASSWORD_CONFIRM',
        );
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${o[2]}');

        ...

        await pb.collection('${(m=o[0])==null?void 0:m.name}').requestPasswordReset('test@example.com');

        // ---
        // (optional) in your custom confirmation page:
        // ---

        // note: after this call all previously issued auth tokens are invalidated
        await pb.collection('${(ie=o[0])==null?void 0:ie.name}').confirmPasswordReset(
          'RESET_TOKEN',
          'NEW_PASSWORD',
          'NEW_PASSWORD_CONFIRM',
        );
    `}});let C=H(o[3]),S=[];for(let i=0;i<C.length;i+=1)S[i]=Se(Re(o,C,i));let B=H(o[3]),_=[];for(let i=0;i<B.length;i+=1)_[i]=Pe(we(o,B,i));const Y=i=>X(_[i],1,1,()=>{_[i]=null});return{c(){t=p("h3"),e=D("密码重置 ("),d=D(n),c=D(")"),r=P(),a=p("div"),f=p("p"),k=D("发送 "),y=p("strong"),A=D(F),J=D(" 密码重置邮件请求。"),N=P(),U=p("p"),U.textContent="密码重置成功后，该记录之前签发的所有认证令牌将自动失效。",T=P(),x(W.$$.fragment),E=P(),O=p("h6"),O.textContent="API详情",R=P(),M=p("div"),j=p("div");for(let i=0;i<S.length;i+=1)S[i].c();q=P(),b=p("div");for(let i=0;i<_.length;i+=1)_[i].c();g(t,"class","m-b-sm"),g(a,"class","content txt-lg m-b-sm"),g(O,"class","m-b-xs"),g(j,"class","tabs-header compact"),g(b,"class","tabs-content"),g(M,"class","tabs")},m(i,w){v(i,t,w),u(t,e),u(t,d),u(t,c),v(i,r,w),v(i,a,w),u(a,f),u(f,k),u(f,y),u(y,A),u(f,J),u(a,N),u(a,U),v(i,T,w),Q(W,i,w),v(i,E,w),v(i,O,w),v(i,R,w),v(i,M,w),u(M,j);for(let I=0;I<S.length;I+=1)S[I]&&S[I].m(j,null);u(M,q),u(M,b);for(let I=0;I<_.length;I+=1)_[I]&&_[I].m(b,null);K=!0},p(i,[w]){var ce,re,de,ue;(!K||w&1)&&n!==(n=i[0].name+"")&&Z(d,n),(!K||w&1)&&F!==(F=i[0].name+"")&&Z(A,F);const I={};if(w&5&&(I.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${i[2]}');

        ...

        await pb.collection('${(ce=i[0])==null?void 0:ce.name}').requestPasswordReset('test@example.com');

        // ---
        // (optional) in your custom confirmation page:
        // ---

        // note: after this call all previously issued auth tokens are invalidated
        await pb.collection('${(re=i[0])==null?void 0:re.name}').confirmPasswordReset(
            'RESET_TOKEN',
            'NEW_PASSWORD',
            'NEW_PASSWORD_CONFIRM',
        );
    `),w&5&&(I.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${i[2]}');

        ...

        await pb.collection('${(de=i[0])==null?void 0:de.name}').requestPasswordReset('test@example.com');

        // ---
        // (optional) in your custom confirmation page:
        // ---

        // note: after this call all previously issued auth tokens are invalidated
        await pb.collection('${(ue=i[0])==null?void 0:ue.name}').confirmPasswordReset(
          'RESET_TOKEN',
          'NEW_PASSWORD',
          'NEW_PASSWORD_CONFIRM',
        );
    `),W.$set(I),w&10){C=H(i[3]);let $;for($=0;$<C.length;$+=1){const z=Re(i,C,$);S[$]?S[$].p(z,w):(S[$]=Se(z),S[$].c(),S[$].m(j,null))}for(;$<S.length;$+=1)S[$].d(1);S.length=C.length}if(w&11){B=H(i[3]);let $;for($=0;$<B.length;$+=1){const z=we(i,B,$);_[$]?(_[$].p(z,w),V(_[$],1)):(_[$]=Pe(z),_[$].c(),V(_[$],1),_[$].m(b,null))}for(te(),$=B.length;$<_.length;$+=1)Y($);le()}},i(i){if(!K){V(W.$$.fragment,i);for(let w=0;w<B.length;w+=1)V(_[w]);K=!0}},o(i){X(W.$$.fragment,i),_=_.filter(Boolean);for(let w=0;w<_.length;w+=1)X(_[w]);K=!1},d(i){i&&(h(t),h(r),h(a),h(T),h(E),h(O),h(R),h(M)),G(W,i),fe(S,i),fe(_,i)}}}function Fe(o,t,e){let n,{collection:d}=t;const c=[{title:"请求密码重置",component:Be},{title:"确认密码重置",component:qe}];let r=0;const a=f=>e(1,r=f);return o.$$set=f=>{"collection"in f&&e(0,d=f.collection)},e(2,n=Ae.getApiExampleUrl(Te.baseURL)),[d,r,n,c,a]}class He extends se{constructor(t){super(),ne(this,t,Fe,Ie,oe,{collection:0})}}export{He as default};
