import{S as s,i as t,s as e,k as a,e as o,t as c,L as r,d as n,n as l,c as h,a as u,g as i,b as f,f as p,G as m,M as d,N as v,O as b,H as g,P as E}from"../chunks/vendor-1d3f2ef6.js";import{r as y}from"../chunks/singletons-6b53f818.js";const x=async function(s,t){return y.goto(s,t,[])};function N(s){let t,e,y,x,N,O,S,T,k,w,H,j;return{c(){t=a(),e=o("section"),y=o("h1"),x=c("Welcome"),N=a(),O=o("form"),S=o("input"),T=a(),k=o("button"),w=c("Search"),this.h()},l(s){r('[data-svelte="svelte-1anpopb"]',document.head).forEach(n),t=l(s),e=h(s,"SECTION",{class:!0});var a=u(e);y=h(a,"H1",{class:!0});var o=u(y);x=i(o,"Welcome"),o.forEach(n),N=l(a),O=h(a,"FORM",{});var c=u(O);S=h(c,"INPUT",{type:!0,placeholder:!0}),T=l(c),k=h(c,"BUTTON",{type:!0});var f=u(k);w=i(f,"Search"),f.forEach(n),c.forEach(n),a.forEach(n),this.h()},h(){document.title="Home",f(y,"class","svelte-1bgohwt"),f(S,"type","text"),f(S,"placeholder","search"),f(k,"type","submit"),f(e,"class","svelte-1bgohwt")},m(a,o){p(a,t,o),p(a,e,o),m(e,y),m(y,x),m(e,N),m(e,O),m(O,S),d(S,s[0]),m(O,T),m(O,k),m(k,w),H||(j=[v(S,"input",s[2]),v(O,"submit",b(s[1]))],H=!0)},p(s,[t]){1&t&&S.value!==s[0]&&d(S,s[0])},i:g,o:g,d(s){s&&n(t),s&&n(e),H=!1,E(j)}}}const O=!0;function S(s,t,e){let a="";return[a,function(s){let t=a.replace(/\s/g,"-");x(`articles/${t.toLowerCase()}`)},function(){a=this.value,e(0,a)}]}export default class extends s{constructor(s){super(),t(this,s,S,N,e,{})}}export{O as prerender};
