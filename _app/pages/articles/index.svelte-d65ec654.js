import{S as t,i as e,s,e as a,k as r,t as n,c,a as l,n as o,g as i,d as h,b as u,f,G as v,Q as d,H as p,R as m,O as g,J as y,h as w,j as x,P as $,m as b,o as E,T as j,v as k,r as A,w as P,U as T}from"../../chunks/vendor-10229201.js";import{r as I}from"../../chunks/singletons-bb9012b7.js";const O=async function(t,e){return I.goto(t,e,[])};function S(t){let e,s,w,x,$,b,E;return{c(){e=a("form"),s=a("input"),w=r(),x=a("button"),$=n("Search"),this.h()},l(t){e=c(t,"FORM",{class:!0});var a=l(e);s=c(a,"INPUT",{type:!0,placeholder:!0,class:!0}),w=o(a),x=c(a,"BUTTON",{type:!0,class:!0});var r=l(x);$=i(r,"Search"),r.forEach(h),a.forEach(h),this.h()},h(){u(s,"type","text"),u(s,"placeholder","search"),u(s,"class","svelte-9hwx7c"),u(x,"type","submit"),u(x,"class","svelte-9hwx7c"),u(e,"class","search svelte-9hwx7c")},m(a,r){f(a,e,r),v(e,s),d(s,t[0]),v(e,w),v(e,x),v(x,$),b||(E=[p(s,"input",t[2]),p(e,"submit",m(t[1]))],b=!0)},p(t,[e]){1&e&&s.value!==t[0]&&d(s,t[0])},i:g,o:g,d(t){t&&h(e),b=!1,y(E)}}}function U(t,e,s){let a="";return[a,function(t){let e=a.replace(/\s/g,"-");O(`articles/${e.toLowerCase()}`)},function(){a=this.value,s(0,a)}]}class D extends t{constructor(t){super(),e(this,t,U,S,s,{})}}function H(t,e,s){const a=t.slice();return a[1]=e[s],a}function M(t,e){let s,d,p,m,g,y,x=e[1].title+"";return{key:t,first:null,c(){s=a("div"),d=a("p"),p=a("a"),m=n(x),y=r(),this.h()},l(t){s=c(t,"DIV",{class:!0});var e=l(s);d=c(e,"P",{});var a=l(d);p=c(a,"A",{href:!0});var r=l(p);m=i(r,x),r.forEach(h),a.forEach(h),y=o(e),e.forEach(h),this.h()},h(){u(p,"href",g="articles/"+e[1].slug),u(s,"class","article svelte-wych9b"),this.first=s},m(t,e){f(t,s,e),v(s,d),v(d,p),v(p,m),v(s,y)},p(t,s){e=t,1&s&&x!==(x=e[1].title+"")&&w(m,x),1&s&&g!==(g="articles/"+e[1].slug)&&u(p,"href",g)},d(t){t&&h(s)}}}function N(t){let e,s,d,p,m,g,y,w,I=[],O=new Map;g=new D({});let S=t[0];const U=t=>t[1].id;for(let a=0;a<S.length;a+=1){let e=H(t,S,a),s=U(e);O.set(s,I[a]=M(s,e))}return{c(){e=r(),s=a("div"),d=a("h1"),p=n("Articles"),m=r(),x(g.$$.fragment),y=r();for(let t=0;t<I.length;t+=1)I[t].c();this.h()},l(t){$('[data-svelte="svelte-ieydlj"]',document.head).forEach(h),e=o(t),s=c(t,"DIV",{class:!0});var a=l(s);d=c(a,"H1",{});var r=l(d);p=i(r,"Articles"),r.forEach(h),m=o(a),b(g.$$.fragment,a),y=o(a);for(let e=0;e<I.length;e+=1)I[e].l(a);a.forEach(h),this.h()},h(){document.title="Articles",u(s,"class","articles svelte-wych9b")},m(t,a){f(t,e,a),f(t,s,a),v(s,d),v(d,p),v(s,m),E(g,s,null),v(s,y);for(let e=0;e<I.length;e+=1)I[e].m(s,null);w=!0},p(t,[e]){1&e&&(S=t[0],I=j(I,e,U,1,t,S,O,s,T,M,null,H))},i(t){w||(k(g.$$.fragment,t),w=!0)},o(t){A(g.$$.fragment,t),w=!1},d(t){t&&h(e),t&&h(s),P(g);for(let e=0;e<I.length;e+=1)I[e].d()}}}var R=function(t,e,s,a){return new(s||(s=Promise))((function(r,n){function c(t){try{o(a.next(t))}catch(e){n(e)}}function l(t){try{o(a.throw(t))}catch(e){n(e)}}function o(t){var e;t.done?r(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(c,l)}o((a=a.apply(t,e||[])).next())}))};const V=({page:t,fetch:e,session:s,context:a})=>R(void 0,void 0,void 0,(function*(){const t=yield e("/articles.json");if(t.ok){return{props:{articles:yield t.json()}}}const{message:s}=yield t.json();return{error:new Error(s)}}));function B(t,e,s){let{articles:a}=e;return t.$$set=t=>{"articles"in t&&s(0,a=t.articles)},[a]}export default class extends t{constructor(t){super(),e(this,t,B,N,s,{articles:0})}}export{V as load};
