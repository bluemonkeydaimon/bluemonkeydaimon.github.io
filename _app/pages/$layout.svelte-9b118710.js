var s;import{D as t,S as e,i as a,s as c,E as n,e as l,k as r,c as o,a as $,d as i,n as u,b as p,F as f,f as h,G as m,H as d,I as g,v,r as b,J as w,K as x,L as k,M as E,C as y,j as I,m as L,o as _,w as A,N,t as S,g as M,u as j,z as D,B as F}from"../chunks/vendor-10229201.js";const G={subscribe:s=>(()=>{const s=t("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session}})().page.subscribe(s)};function H(s){let t,e,a,c,x,k,E,y,I;const L=s[2].default,_=n(L,s,s[1],null);return{c(){t=l("nav"),e=l("span"),a=l("img"),x=r(),k=l("ul"),_&&_.c(),this.h()},l(s){t=o(s,"NAV",{class:!0});var c=$(t);e=o(c,"SPAN",{class:!0});var n=$(e);a=o(n,"IMG",{class:!0,src:!0,alt:!0}),n.forEach(i),x=u(c),k=o(c,"UL",{class:!0});var l=$(k);_&&_.l(l),l.forEach(i),c.forEach(i),this.h()},h(){p(a,"class","icon svelte-cbmhcw"),a.src!==(c="/_app/assets/menu-icon.c901140d.svg")&&p(a,"src","/_app/assets/menu-icon.c901140d.svg"),p(a,"alt","menu icon"),p(e,"class","icon-button svelte-cbmhcw"),p(k,"class","navbar-nav svelte-cbmhcw"),f(k,"drop-down",s[0]),p(t,"class","svelte-cbmhcw")},m(c,n){h(c,t,n),m(t,e),m(e,a),m(t,x),m(t,k),_&&_.m(k,null),E=!0,y||(I=[d(e,"click",s[3]),d(k,"click",s[4])],y=!0)},p(s,[t]){_&&_.p&&(!E||2&t)&&g(_,L,s,s[1],t,null,null),1&t&&f(k,"drop-down",s[0])},i(s){E||(v(_,s),E=!0)},o(s){b(_,s),E=!1},d(s){s&&i(t),_&&_.d(s),y=!1,w(I)}}}function O(s,t,e){let{$$slots:a={},$$scope:c}=t,n=!1;return s.$$set=s=>{"$$scope"in s&&e(1,c=s.$$scope)},[n,c,a,()=>{e(0,n=!n)},()=>{e(0,n=!n)}]}class R extends e{constructor(s){super(),a(this,s,O,H,c,{})}}function z(s){let t,e,a,c,r;const u=s[3].default,w=n(u,s,s[2],null);return{c(){t=l("li"),e=l("a"),w&&w.c(),this.h()},l(s){t=o(s,"LI",{class:!0});var a=$(t);e=o(a,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var c=$(e);w&&w.l(c),c.forEach(i),a.forEach(i),this.h()},h(){p(e,"sveltekit:prefetch",""),p(e,"href",s[0]),p(e,"class","svelte-agmwuc"),p(t,"class","nav-item svelte-agmwuc"),f(t,"active",s[1].path===s[0])},m(n,l){h(n,t,l),m(t,e),w&&w.m(e,null),a=!0,c||(r=d(t,"click",s[4]),c=!0)},p(s,[c]){w&&w.p&&(!a||4&c)&&g(w,u,s,s[2],c,null,null),(!a||1&c)&&p(e,"href",s[0]),3&c&&f(t,"active",s[1].path===s[0])},i(s){a||(v(w,s),a=!0)},o(s){b(w,s),a=!1},d(s){s&&i(t),w&&w.d(s),c=!1,r()}}}function B(s,t,e){let a;x(s,G,(s=>e(1,a=s)));let{$$slots:c={},$$scope:n}=t;k();let{path:l}=t;return s.$$set=s=>{"path"in s&&e(0,l=s.path),"$$scope"in s&&e(2,n=s.$$scope)},[l,a,n,c,function(t){E(s,t)}]}class C extends e{constructor(s){super(),a(this,s,B,z,c,{path:0})}}let J="light";"undefined"!=typeof window&&(J=null!=(s=localStorage.getItem("theme"))?s:"light");const K=y(J);K.subscribe((s=>{console.log("theme value",s),"undefined"!=typeof window&&localStorage.setItem("theme","dark"===s?"dark":"light")}));function P(s){let t;return{c(){t=S("home")},l(s){t=M(s,"home")},m(s,e){h(s,t,e)},d(s){s&&i(t)}}}function T(s){let t;return{c(){t=S("about")},l(s){t=M(s,"about")},m(s,e){h(s,t,e)},d(s){s&&i(t)}}}function U(s){let t;return{c(){t=S("articles")},l(s){t=M(s,"articles")},m(s,e){h(s,t,e)},d(s){s&&i(t)}}}function V(s){let t;return{c(){t=S("theme")},l(s){t=M(s,"theme")},m(s,e){h(s,t,e)},d(s){s&&i(t)}}}function q(s){let t,e,a,c,n,l,o,$;return t=new C({props:{path:"/",$$slots:{default:[P]},$$scope:{ctx:s}}}),a=new C({props:{path:"/about",$$slots:{default:[T]},$$scope:{ctx:s}}}),n=new C({props:{path:"/articles",$$slots:{default:[U]},$$scope:{ctx:s}}}),o=new C({props:{$$slots:{default:[V]},$$scope:{ctx:s}}}),o.$on("click",s[0]),{c(){I(t.$$.fragment),e=r(),I(a.$$.fragment),c=r(),I(n.$$.fragment),l=r(),I(o.$$.fragment)},l(s){L(t.$$.fragment,s),e=u(s),L(a.$$.fragment,s),c=u(s),L(n.$$.fragment,s),l=u(s),L(o.$$.fragment,s)},m(s,r){_(t,s,r),h(s,e,r),_(a,s,r),h(s,c,r),_(n,s,r),h(s,l,r),_(o,s,r),$=!0},p(s,e){const c={};4&e&&(c.$$scope={dirty:e,ctx:s}),t.$set(c);const l={};4&e&&(l.$$scope={dirty:e,ctx:s}),a.$set(l);const r={};4&e&&(r.$$scope={dirty:e,ctx:s}),n.$set(r);const $={};4&e&&($.$$scope={dirty:e,ctx:s}),o.$set($)},i(s){$||(v(t.$$.fragment,s),v(a.$$.fragment,s),v(n.$$.fragment,s),v(o.$$.fragment,s),$=!0)},o(s){b(t.$$.fragment,s),b(a.$$.fragment,s),b(n.$$.fragment,s),b(o.$$.fragment,s),$=!1},d(s){A(t,s),s&&i(e),A(a,s),s&&i(c),A(n,s),s&&i(l),A(o,s)}}}function Q(s){let t,e,a;return e=new R({props:{$$slots:{default:[q]},$$scope:{ctx:s}}}),{c(){t=l("header"),I(e.$$.fragment),this.h()},l(s){t=o(s,"HEADER",{class:!0});var a=$(t);L(e.$$.fragment,a),a.forEach(i),this.h()},h(){p(t,"class","svelte-1u3146")},m(s,c){h(s,t,c),_(e,t,null),a=!0},p(s,[t]){const a={};4&t&&(a.$$scope={dirty:t,ctx:s}),e.$set(a)},i(s){a||(v(e.$$.fragment,s),a=!0)},o(s){b(e.$$.fragment,s),a=!1},d(s){s&&i(t),A(e)}}}function W(s,t,e){let a;return x(s,K,(s=>e(1,a=s))),[function(){const s=document.body;"light"===a?(s.classList.replace("light","dark"),N(K,a="dark",a)):(s.classList.replace("dark","light"),N(K,a="light",a))}]}class X extends e{constructor(s){super(),a(this,s,W,Q,c,{})}}function Y(s){let t,e;return t=new X({}),{c(){I(t.$$.fragment)},l(s){L(t.$$.fragment,s)},m(s,a){_(t,s,a),e=!0},i(s){e||(v(t.$$.fragment,s),e=!0)},o(s){b(t.$$.fragment,s),e=!1},d(s){A(t,s)}}}function Z(s){let t,e,a,c,f,m="/"!==s[0].path&&Y();const d=s[2].default,w=n(d,s,s[1],null);return{c(){m&&m.c(),t=r(),e=l("main"),w&&w.c(),a=r(),c=l("footer"),this.h()},l(s){m&&m.l(s),t=u(s),e=o(s,"MAIN",{class:!0});var n=$(e);w&&w.l(n),n.forEach(i),a=u(s),c=o(s,"FOOTER",{class:!0}),$(c).forEach(i),this.h()},h(){p(e,"class","svelte-f5pegm"),p(c,"class","svelte-f5pegm")},m(s,n){m&&m.m(s,n),h(s,t,n),h(s,e,n),w&&w.m(e,null),h(s,a,n),h(s,c,n),f=!0},p(s,[e]){"/"!==s[0].path?m?1&e&&v(m,1):(m=Y(),m.c(),v(m,1),m.m(t.parentNode,t)):m&&(F(),b(m,1,1,(()=>{m=null})),j()),w&&w.p&&(!f||2&e)&&g(w,d,s,s[1],e,null,null)},i(s){f||(v(m),v(w,s),f=!0)},o(s){b(m),b(w,s),f=!1},d(s){m&&m.d(s),s&&i(t),s&&i(e),w&&w.d(s),s&&i(a),s&&i(c)}}}function ss(s,t,e){let a,c;x(s,K,(s=>e(3,a=s))),x(s,G,(s=>e(0,c=s)));let{$$slots:n={},$$scope:l}=t;return D((()=>{document.body.classList.add(`${a}`)})),s.$$set=s=>{"$$scope"in s&&e(1,l=s.$$scope)},[c,l,n]}export default class extends e{constructor(s){super(),a(this,s,ss,Z,c,{})}}
