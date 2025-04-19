import{S as el,i as ll,s as sl,H as Ke,h as u,l as b,o as nl,u as e,v as s,L as ol,w as i,n as t,A as g,V as il,W as Le,X as ie,d as Gt,Y as al,t as wt,a as kt,I as ve,Z as ze,_ as cl,C as rl,$ as dl,D as pl,m as Qt,c as Vt,J as Pe,p as fl,k as Te}from"./index-D49pSSYG.js";import{F as ml}from"./FieldsQueryParam-CHSdJRip.js";function ul(c){let n,o,a;return{c(){n=e("span"),n.textContent="显示详情",o=s(),a=e("i"),i(n,"class","txt"),i(a,"class","ri-arrow-down-s-line")},m(f,_){b(f,n,_),b(f,o,_),b(f,a,_)},d(f){f&&(u(n),u(o),u(a))}}}function bl(c){let n,o,a;return{c(){n=e("span"),n.textContent="隐藏详情",o=s(),a=e("i"),i(n,"class","txt"),i(a,"class","ri-arrow-up-s-line")},m(f,_){b(f,n,_),b(f,o,_),b(f,a,_)},d(f){f&&(u(n),u(o),u(a))}}}function Ge(c){let n,o,a,f,_,p,m,w,h,x,d,Y,Ft,Wt,R,Xt,N,at,H,Z,ae,U,J,ce,ct,vt,tt,yt,re,rt,dt,et,B,Yt,Lt,k,lt,Tt,Zt,Pt,K,st,Ht,te,Mt,v,pt,It,de,ft,pe,O,St,nt,Rt,y,mt,fe,z,Bt,ee,At,le,Nt,me,L,ut,ue,bt,be,q,_e,P,Ot,ot,qt,G,_t,ge,j,jt,F,Dt,it,Et,he,Q,gt,$e,ht,xe,Ut,Ce,D,Jt,we,E,ke,$t,se,M,xt,V,W,I,Kt,ne,X;return{c(){n=e("p"),n.innerHTML=`过滤语法基本遵循以下格式
        <code><span class="txt-success">操作数</span> <span class="txt-danger">运算符</span> <span class="txt-success">操作数</span></code>，其中：`,o=s(),a=e("ul"),f=e("li"),f.innerHTML='<code class="txt-success">操作数</code> - 可以是以下任意一种：字段名、字符串（单引号或双引号）、数字、null、true、false',_=s(),p=e("li"),m=e("code"),m.textContent="运算符",w=g(` - 可以是以下之一：\r
            `),h=e("br"),x=s(),d=e("ul"),Y=e("li"),Ft=e("code"),Ft.textContent="=",Wt=s(),R=e("span"),R.textContent="等于",Xt=s(),N=e("li"),at=e("code"),at.textContent="!=",H=s(),Z=e("span"),Z.textContent="不等于",ae=s(),U=e("li"),J=e("code"),J.textContent=">",ce=s(),ct=e("span"),ct.textContent="大于",vt=s(),tt=e("li"),yt=e("code"),yt.textContent=">=",re=s(),rt=e("span"),rt.textContent="大于等于",dt=s(),et=e("li"),B=e("code"),B.textContent="<",Yt=s(),Lt=e("span"),Lt.textContent="小于",k=s(),lt=e("li"),Tt=e("code"),Tt.textContent="<=",Zt=s(),Pt=e("span"),Pt.textContent="小于等于",K=s(),st=e("li"),Ht=e("code"),Ht.textContent="~",te=s(),Mt=e("span"),Mt.textContent='包含（如果未指定，会自动在右侧字符串操作数两端添加"%"作为通配符匹配）',v=s(),pt=e("li"),It=e("code"),It.textContent="!~",de=s(),ft=e("span"),ft.textContent='不包含（如果未指定，会自动在右侧字符串操作数两端添加"%"作为通配符匹配）',pe=s(),O=e("li"),St=e("code"),St.textContent="?=",nt=s(),Rt=e("em"),Rt.textContent="任意一个/至少一个",y=s(),mt=e("span"),mt.textContent="等于",fe=s(),z=e("li"),Bt=e("code"),Bt.textContent="?!=",ee=s(),At=e("em"),At.textContent="任意一个/至少一个",le=s(),Nt=e("span"),Nt.textContent="不等于",me=s(),L=e("li"),ut=e("code"),ut.textContent="?>",ue=s(),bt=e("em"),bt.textContent="任意一个/至少一个",be=s(),q=e("span"),q.textContent="大于",_e=s(),P=e("li"),Ot=e("code"),Ot.textContent="?>=",ot=s(),qt=e("em"),qt.textContent="任意一个/至少一个",G=s(),_t=e("span"),_t.textContent="大于等于",ge=s(),j=e("li"),jt=e("code"),jt.textContent="?<",F=s(),Dt=e("em"),Dt.textContent="任意一个/至少一个",it=s(),Et=e("span"),Et.textContent="小于",he=s(),Q=e("li"),gt=e("code"),gt.textContent="?<=",$e=s(),ht=e("em"),ht.textContent="任意一个/至少一个",xe=s(),Ut=e("span"),Ut.textContent="小于等于",Ce=s(),D=e("li"),Jt=e("code"),Jt.textContent="?~",we=s(),E=e("em"),E.textContent="任意一个/至少一个",ke=s(),$t=e("span"),$t.textContent='包含（如果未指定，会自动在右侧字符串操作数两端添加"%"作为通配符匹配）',se=s(),M=e("li"),xt=e("code"),xt.textContent="?!~",V=s(),W=e("em"),W.textContent="任意一个/至少一个",I=s(),Kt=e("span"),Kt.textContent='不包含（如果未指定，会自动在右侧字符串操作数两端添加"%"作为通配符匹配）',ne=s(),X=e("p"),X.innerHTML=`要组合多个表达式，你可以使用括号
        <code>(...)</code>、<code>&amp;&amp;</code>（与）和 <code>||</code>（或）运算符。`,i(m,"class","txt-danger"),i(Ft,"class","filter-op svelte-1w7s5nw"),i(R,"class","txt"),i(at,"class","filter-op svelte-1w7s5nw"),i(Z,"class","txt"),i(J,"class","filter-op svelte-1w7s5nw"),i(ct,"class","txt"),i(yt,"class","filter-op svelte-1w7s5nw"),i(rt,"class","txt"),i(B,"class","filter-op svelte-1w7s5nw"),i(Lt,"class","txt"),i(Tt,"class","filter-op svelte-1w7s5nw"),i(Pt,"class","txt"),i(Ht,"class","filter-op svelte-1w7s5nw"),i(Mt,"class","txt"),i(It,"class","filter-op svelte-1w7s5nw"),i(ft,"class","txt"),i(St,"class","filter-op svelte-1w7s5nw"),i(Rt,"class","txt-hint"),i(mt,"class","txt"),i(Bt,"class","filter-op svelte-1w7s5nw"),i(At,"class","txt-hint"),i(Nt,"class","txt"),i(ut,"class","filter-op svelte-1w7s5nw"),i(bt,"class","txt-hint"),i(q,"class","txt"),i(Ot,"class","filter-op svelte-1w7s5nw"),i(qt,"class","txt-hint"),i(_t,"class","txt"),i(jt,"class","filter-op svelte-1w7s5nw"),i(Dt,"class","txt-hint"),i(Et,"class","txt"),i(gt,"class","filter-op svelte-1w7s5nw"),i(ht,"class","txt-hint"),i(Ut,"class","txt"),i(Jt,"class","filter-op svelte-1w7s5nw"),i(E,"class","txt-hint"),i($t,"class","txt"),i(xt,"class","filter-op svelte-1w7s5nw"),i(W,"class","txt-hint"),i(Kt,"class","txt")},m(C,Ct){b(C,n,Ct),b(C,o,Ct),b(C,a,Ct),t(a,f),t(a,_),t(a,p),t(p,m),t(p,w),t(p,h),t(p,x),t(p,d),t(d,Y),t(Y,Ft),t(Y,Wt),t(Y,R),t(d,Xt),t(d,N),t(N,at),t(N,H),t(N,Z),t(d,ae),t(d,U),t(U,J),t(U,ce),t(U,ct),t(d,vt),t(d,tt),t(tt,yt),t(tt,re),t(tt,rt),t(d,dt),t(d,et),t(et,B),t(et,Yt),t(et,Lt),t(d,k),t(d,lt),t(lt,Tt),t(lt,Zt),t(lt,Pt),t(d,K),t(d,st),t(st,Ht),t(st,te),t(st,Mt),t(d,v),t(d,pt),t(pt,It),t(pt,de),t(pt,ft),t(d,pe),t(d,O),t(O,St),t(O,nt),t(O,Rt),t(O,y),t(O,mt),t(d,fe),t(d,z),t(z,Bt),t(z,ee),t(z,At),t(z,le),t(z,Nt),t(d,me),t(d,L),t(L,ut),t(L,ue),t(L,bt),t(L,be),t(L,q),t(d,_e),t(d,P),t(P,Ot),t(P,ot),t(P,qt),t(P,G),t(P,_t),t(d,ge),t(d,j),t(j,jt),t(j,F),t(j,Dt),t(j,it),t(j,Et),t(d,he),t(d,Q),t(Q,gt),t(Q,$e),t(Q,ht),t(Q,xe),t(Q,Ut),t(d,Ce),t(d,D),t(D,Jt),t(D,we),t(D,E),t(D,ke),t(D,$t),t(d,se),t(d,M),t(M,xt),t(M,V),t(M,W),t(M,I),t(M,Kt),b(C,ne,Ct),b(C,X,Ct)},d(C){C&&(u(n),u(o),u(a),u(ne),u(X))}}}function _l(c){let n,o,a,f,_;function p(x,d){return x[0]?bl:ul}let m=p(c),w=m(c),h=c[0]&&Ge();return{c(){n=e("button"),w.c(),o=s(),h&&h.c(),a=ol(),i(n,"class","btn btn-sm btn-secondary m-t-10")},m(x,d){b(x,n,d),w.m(n,null),b(x,o,d),h&&h.m(x,d),b(x,a,d),f||(_=nl(n,"click",c[1]),f=!0)},p(x,[d]){m!==(m=p(x))&&(w.d(1),w=m(x),w&&(w.c(),w.m(n,null))),x[0]?h||(h=Ge(),h.c(),h.m(a.parentNode,a)):h&&(h.d(1),h=null)},i:Ke,o:Ke,d(x){x&&(u(n),u(o),u(a)),w.d(),h&&h.d(x),f=!1,_()}}}function gl(c,n,o){let a=!1;function f(){o(0,a=!a)}return[a,f]}class hl extends el{constructor(n){super(),ll(this,n,gl,_l,sl,{})}}function Qe(c,n,o){const a=c.slice();return a[8]=n[o],a}function Ve(c,n,o){const a=c.slice();return a[8]=n[o],a}function We(c,n,o){const a=c.slice();return a[13]=n[o],a[15]=o,a}function Xe(c){let n;return{c(){n=e("p"),n.innerHTML="需要超级用户 <code>Authorization:TOKEN</code> 头部",i(n,"class","txt-hint txt-sm txt-right")},m(o,a){b(o,n,a)},d(o){o&&u(n)}}}function Ye(c){let n,o=c[13]+"",a,f=c[15]<c[4].length-1?", ":"",_;return{c(){n=e("code"),a=g(o),_=g(f)},m(p,m){b(p,n,m),t(n,a),b(p,_,m)},p(p,m){m&16&&o!==(o=p[13]+"")&&ve(a,o),m&16&&f!==(f=p[15]<p[4].length-1?", ":"")&&ve(_,f)},d(p){p&&(u(n),u(_))}}}function Ze(c,n){let o,a,f;function _(){return n[7](n[8])}return{key:c,first:null,c(){o=e("button"),o.textContent=`${n[8].code} `,i(o,"type","button"),i(o,"class","tab-item"),Te(o,"active",n[2]===n[8].code),this.first=o},m(p,m){b(p,o,m),a||(f=nl(o,"click",_),a=!0)},p(p,m){n=p,m&36&&Te(o,"active",n[2]===n[8].code)},d(p){p&&u(o),a=!1,f()}}}function tl(c,n){let o,a,f,_;return a=new Le({props:{content:n[8].body}}),{key:c,first:null,c(){o=e("div"),Vt(a.$$.fragment),f=s(),i(o,"class","tab-item"),Te(o,"active",n[2]===n[8].code),this.first=o},m(p,m){b(p,o,m),Qt(a,o,null),t(o,f),_=!0},p(p,m){n=p,(!_||m&36)&&Te(o,"active",n[2]===n[8].code)},i(p){_||(kt(a.$$.fragment,p),_=!0)},o(p){wt(a.$$.fragment,p),_=!1},d(p){p&&u(o),Gt(a)}}}function $l(c){var Ie,Se,Re,Be,Ae,Ne;let n,o,a=c[0].name+"",f,_,p,m,w,h,x,d=c[0].name+"",Y,Ft,Wt,R,Xt,N,at,H,Z,ae,U,J,ce,ct,vt=c[0].name+"",tt,yt,re,rt,dt,et,B,Yt,Lt,k,lt,Tt,Zt,Pt,K,st,Ht,te,Mt,v,pt,It,de,ft,pe,O,St,nt,Rt,y,mt,fe,z,Bt,ee,At,le,Nt,me,L,ut,ue,bt,be,q,_e,P,Ot,ot,qt,G,_t,ge,j,jt,F,Dt,it,Et,he,Q,gt,$e,ht,xe,Ut,Ce,D,Jt,we,E,ke,$t,se,M,xt,V,W,I=[],Kt=new Map,ne,X,C=[],Ct=new Map,zt;R=new il({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${c[3]}');

        ...

        // fetch a paginated records list
        const resultList = await pb.collection('${(Ie=c[0])==null?void 0:Ie.name}').getList(1, 50, {
            filter: 'someField1 != someField2',
        });

        // you can also fetch all records at once via getFullList
        const records = await pb.collection('${(Se=c[0])==null?void 0:Se.name}').getFullList({
            sort: '-someField',
        });

        // or fetch only the first record that matches the specified filter
        const record = await pb.collection('${(Re=c[0])==null?void 0:Re.name}').getFirstListItem('someField="test"', {
            expand: 'relField1,relField2.subRelField',
        });
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${c[3]}');

        ...

        // fetch a paginated records list
        final resultList = await pb.collection('${(Be=c[0])==null?void 0:Be.name}').getList(
          page: 1,
          perPage: 50,
          filter: 'someField1 != someField2',
        );

        // you can also fetch all records at once via getFullList
        final records = await pb.collection('${(Ae=c[0])==null?void 0:Ae.name}').getFullList(
          sort: '-someField',
        );

        // or fetch only the first record that matches the specified filter
        final record = await pb.collection('${(Ne=c[0])==null?void 0:Ne.name}').getFirstListItem(
          'someField="test"',
          expand: 'relField1,relField2.subRelField',
        );
    `}});let S=c[1]&&Xe();nt=new Le({props:{content:`
                        // 按created降序，按id升序
                        ?sort=-created,id
                    `}});let oe=ie(c[4]),T=[];for(let l=0;l<oe.length;l+=1)T[l]=Ye(We(c,oe,l));P=new Le({props:{content:`
                        ?filter=(id='abc' && created>'2022-01-01')
                    `}}),ot=new hl({}),it=new Le({props:{content:"?expand=relField1,relField2.subRelField"}}),E=new ml({});let ye=ie(c[5]);const He=l=>l[8].code;for(let l=0;l<ye.length;l+=1){let r=Ve(c,ye,l),$=He(r);Kt.set($,I[l]=Ze($,r))}let Fe=ie(c[5]);const Me=l=>l[8].code;for(let l=0;l<Fe.length;l+=1){let r=Qe(c,Fe,l),$=Me(r);Ct.set($,C[l]=tl($,r))}return{c(){n=e("h3"),o=g("列表/搜索 ("),f=g(a),_=g(")"),p=s(),m=e("div"),w=e("p"),h=g("获取分页的 "),x=e("strong"),Y=g(d),Ft=g(" 记录列表，支持排序和过滤。"),Wt=s(),Vt(R.$$.fragment),Xt=s(),N=e("h6"),N.textContent="API 详情",at=s(),H=e("div"),Z=e("strong"),Z.textContent="GET",ae=s(),U=e("div"),J=e("p"),ce=g("/api/collections/"),ct=e("strong"),tt=g(vt),yt=g("/records"),re=s(),S&&S.c(),rt=s(),dt=e("div"),dt.textContent="查询参数",et=s(),B=e("table"),Yt=e("thead"),Yt.innerHTML='<tr><th>参数</th> <th>类型</th> <th width="60%">描述</th></tr>',Lt=s(),k=e("tbody"),lt=e("tr"),lt.innerHTML='<td>page</td> <td><span class="label">Number</span></td> <td>分页列表的页码（即偏移量）（默认为1）。</td>',Tt=s(),Zt=e("tr"),Zt.innerHTML='<td>perPage</td> <td><span class="label">Number</span></td> <td>指定每页返回的最大记录数（默认为30）。</td>',Pt=s(),K=e("tr"),st=e("td"),st.textContent="sort",Ht=s(),te=e("td"),te.innerHTML='<span class="label">String</span>',Mt=s(),v=e("td"),pt=g("指定记录排序属性。"),It=e("br"),de=g(`\r
                在属性前添加 `),ft=e("code"),ft.textContent="-",pe=g(" / "),O=e("code"),O.textContent="+",St=g(`（默认）表示降序/升序。 例如：\r
                `),Vt(nt.$$.fragment),Rt=s(),y=e("p"),mt=e("strong"),mt.textContent="支持的记录排序字段：",fe=s(),z=e("br"),Bt=s(),ee=e("code"),ee.textContent="@random",At=g(`,\r
                    `),le=e("code"),le.textContent="@rowid",Nt=g(`,\r
                    `);for(let l=0;l<T.length;l+=1)T[l].c();me=s(),L=e("tr"),ut=e("td"),ut.textContent="filter",ue=s(),bt=e("td"),bt.innerHTML='<span class="label">String</span>',be=s(),q=e("td"),_e=g(`过滤返回的记录。例如：\r
                `),Vt(P.$$.fragment),Ot=s(),Vt(ot.$$.fragment),qt=s(),G=e("tr"),_t=e("td"),_t.textContent="expand",ge=s(),j=e("td"),j.innerHTML='<span class="label">String</span>',jt=s(),F=e("td"),Dt=g(`自动展开记录关联。例如：\r
                `),Vt(it.$$.fragment),Et=g(`\r
                支持最多6层深度的嵌套关联展开。`),he=e("br"),Q=g(`\r
                展开的关联将附加到每个记录的\r
                `),gt=e("code"),gt.textContent="expand",$e=g(" 属性下（如："),ht=e("code"),ht.textContent='"expand": {"relField1": {...}, ...}',xe=g(`）。\r
                `),Ut=e("br"),Ce=g(`\r
                只有请求用户有权限`),D=e("strong"),D.textContent="查看",Jt=g("的关联才会被展开。"),we=s(),Vt(E.$$.fragment),ke=s(),$t=e("tr"),$t.innerHTML=`<td id="query-page">skipTotal</td> <td><span class="label">Boolean</span></td> <td>如果设置此项，将跳过总数查询，响应字段
                <code>totalItems</code> 和 <code>totalPages</code> 将为 <code>-1</code> 值。
                <br/>
                当不需要总数计数或使用基于游标的分页时，这可以大大加快搜索查询速度。
                <br/>
                出于优化目的，在SDK的
                <code>getFirstListItem()</code>
                和
                <code>getFullList()</code> 方法中默认设置此项。</td>`,se=s(),M=e("div"),M.textContent="响应",xt=s(),V=e("div"),W=e("div");for(let l=0;l<I.length;l+=1)I[l].c();ne=s(),X=e("div");for(let l=0;l<C.length;l+=1)C[l].c();i(n,"class","m-b-sm"),i(m,"class","content txt-lg m-b-sm"),i(N,"class","m-b-xs"),i(Z,"class","label label-primary"),i(U,"class","content"),i(H,"class","alert alert-info"),i(dt,"class","section-title"),i(B,"class","table-compact table-border m-b-base"),i(M,"class","section-title"),i(W,"class","tabs-header compact combined left"),i(X,"class","tabs-content"),i(V,"class","tabs")},m(l,r){b(l,n,r),t(n,o),t(n,f),t(n,_),b(l,p,r),b(l,m,r),t(m,w),t(w,h),t(w,x),t(x,Y),t(w,Ft),b(l,Wt,r),Qt(R,l,r),b(l,Xt,r),b(l,N,r),b(l,at,r),b(l,H,r),t(H,Z),t(H,ae),t(H,U),t(U,J),t(J,ce),t(J,ct),t(ct,tt),t(J,yt),t(H,re),S&&S.m(H,null),b(l,rt,r),b(l,dt,r),b(l,et,r),b(l,B,r),t(B,Yt),t(B,Lt),t(B,k),t(k,lt),t(k,Tt),t(k,Zt),t(k,Pt),t(k,K),t(K,st),t(K,Ht),t(K,te),t(K,Mt),t(K,v),t(v,pt),t(v,It),t(v,de),t(v,ft),t(v,pe),t(v,O),t(v,St),Qt(nt,v,null),t(v,Rt),t(v,y),t(y,mt),t(y,fe),t(y,z),t(y,Bt),t(y,ee),t(y,At),t(y,le),t(y,Nt);for(let $=0;$<T.length;$+=1)T[$]&&T[$].m(y,null);t(k,me),t(k,L),t(L,ut),t(L,ue),t(L,bt),t(L,be),t(L,q),t(q,_e),Qt(P,q,null),t(q,Ot),Qt(ot,q,null),t(k,qt),t(k,G),t(G,_t),t(G,ge),t(G,j),t(G,jt),t(G,F),t(F,Dt),Qt(it,F,null),t(F,Et),t(F,he),t(F,Q),t(F,gt),t(F,$e),t(F,ht),t(F,xe),t(F,Ut),t(F,Ce),t(F,D),t(F,Jt),t(k,we),Qt(E,k,null),t(k,ke),t(k,$t),b(l,se,r),b(l,M,r),b(l,xt,r),b(l,V,r),t(V,W);for(let $=0;$<I.length;$+=1)I[$]&&I[$].m(W,null);t(V,ne),t(V,X);for(let $=0;$<C.length;$+=1)C[$]&&C[$].m(X,null);zt=!0},p(l,[r]){var Oe,qe,je,De,Ee,Ue;(!zt||r&1)&&a!==(a=l[0].name+"")&&ve(f,a),(!zt||r&1)&&d!==(d=l[0].name+"")&&ve(Y,d);const $={};if(r&9&&($.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${l[3]}');

        ...

        // fetch a paginated records list
        const resultList = await pb.collection('${(Oe=l[0])==null?void 0:Oe.name}').getList(1, 50, {
            filter: 'someField1 != someField2',
        });

        // you can also fetch all records at once via getFullList
        const records = await pb.collection('${(qe=l[0])==null?void 0:qe.name}').getFullList({
            sort: '-someField',
        });

        // or fetch only the first record that matches the specified filter
        const record = await pb.collection('${(je=l[0])==null?void 0:je.name}').getFirstListItem('someField="test"', {
            expand: 'relField1,relField2.subRelField',
        });
    `),r&9&&($.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${l[3]}');

        ...

        // fetch a paginated records list
        final resultList = await pb.collection('${(De=l[0])==null?void 0:De.name}').getList(
          page: 1,
          perPage: 50,
          filter: 'someField1 != someField2',
        );

        // you can also fetch all records at once via getFullList
        final records = await pb.collection('${(Ee=l[0])==null?void 0:Ee.name}').getFullList(
          sort: '-someField',
        );

        // or fetch only the first record that matches the specified filter
        final record = await pb.collection('${(Ue=l[0])==null?void 0:Ue.name}').getFirstListItem(
          'someField="test"',
          expand: 'relField1,relField2.subRelField',
        );
    `),R.$set($),(!zt||r&1)&&vt!==(vt=l[0].name+"")&&ve(tt,vt),l[1]?S||(S=Xe(),S.c(),S.m(H,null)):S&&(S.d(1),S=null),r&16){oe=ie(l[4]);let A;for(A=0;A<oe.length;A+=1){const Je=We(l,oe,A);T[A]?T[A].p(Je,r):(T[A]=Ye(Je),T[A].c(),T[A].m(y,null))}for(;A<T.length;A+=1)T[A].d(1);T.length=oe.length}r&36&&(ye=ie(l[5]),I=ze(I,r,He,1,l,ye,Kt,W,cl,Ze,null,Ve)),r&36&&(Fe=ie(l[5]),rl(),C=ze(C,r,Me,1,l,Fe,Ct,X,dl,tl,null,Qe),pl())},i(l){if(!zt){kt(R.$$.fragment,l),kt(nt.$$.fragment,l),kt(P.$$.fragment,l),kt(ot.$$.fragment,l),kt(it.$$.fragment,l),kt(E.$$.fragment,l);for(let r=0;r<Fe.length;r+=1)kt(C[r]);zt=!0}},o(l){wt(R.$$.fragment,l),wt(nt.$$.fragment,l),wt(P.$$.fragment,l),wt(ot.$$.fragment,l),wt(it.$$.fragment,l),wt(E.$$.fragment,l);for(let r=0;r<C.length;r+=1)wt(C[r]);zt=!1},d(l){l&&(u(n),u(p),u(m),u(Wt),u(Xt),u(N),u(at),u(H),u(rt),u(dt),u(et),u(B),u(se),u(M),u(xt),u(V)),Gt(R,l),S&&S.d(),Gt(nt),al(T,l),Gt(P),Gt(ot),Gt(it),Gt(E);for(let r=0;r<I.length;r+=1)I[r].d();for(let r=0;r<C.length;r+=1)C[r].d()}}}function xl(c,n,o){let a,f,_,p,{collection:m}=n,w=200,h=[];const x=d=>o(2,w=d.code);return c.$$set=d=>{"collection"in d&&o(0,m=d.collection)},c.$$.update=()=>{c.$$.dirty&1&&o(4,a=Pe.getAllCollectionIdentifiers(m)),c.$$.dirty&1&&o(1,f=(m==null?void 0:m.listRule)===null),c.$$.dirty&1&&o(6,p=Pe.dummyCollectionRecord(m)),c.$$.dirty&67&&m!=null&&m.id&&(h.push({code:200,body:JSON.stringify({page:1,perPage:30,totalPages:1,totalItems:2,items:[p,Object.assign({},p,{id:p+"2"})]},null,2)}),h.push({code:400,body:`
                {
                  "status": 400,
                  "message": "Something went wrong while processing your request. Invalid filter.",
                  "data": {}
                }
            `}),f&&h.push({code:403,body:`
                    {
                      "status": 403,
                      "message": "Only superusers can access this action.",
                      "data": {}
                    }
                `}))},o(3,_=Pe.getApiExampleUrl(fl.baseURL)),[m,f,w,_,a,h,p,x]}class kl extends el{constructor(n){super(),ll(this,n,xl,$l,sl,{collection:0})}}export{kl as default};
