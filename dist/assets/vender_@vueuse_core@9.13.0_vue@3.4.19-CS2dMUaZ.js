import{t as e,r as t,i as n,n as r,a as o,b as a,c as s,d as i,e as u,f as l}from"./vender_@vueuse_shared@9.13.0_vue@3.4.19-BvGCUM93.js";import{w as c,l as d,k as p}from"./vender_@vue_runtime-core@3.4.19-DxPlDNzv.js";import{k as v}from"./vender_@vue_reactivity@3.4.19-dBGfcXZR.js";function f(e){var n;const r=t(e);return null!=(n=null==r?void 0:r.$el)?n:r}const O=i?window:void 0;function m(...o){let a,s,i,u;if(n(o[0])||Array.isArray(o[0])?([s,i,u]=o,a=O):[a,s,i,u]=o,!a)return r;Array.isArray(s)||(s=[s]),Array.isArray(i)||(i=[i]);const l=[],d=()=>{l.forEach((e=>e())),l.length=0},p=c((()=>[f(a),t(u)]),(([e,t])=>{d(),e&&l.push(...s.flatMap((n=>i.map((r=>((e,t,n,r)=>(e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)))(e,n,r,t))))))}),{immediate:!0,flush:"post"}),v=()=>{p(),d()};return e(v),v}let b=!1;function y(e,t,n={}){const{window:a=O,ignore:s=[],capture:i=!0,detectIframe:u=!1}=n;if(!a)return;o&&!b&&(b=!0,Array.from(a.document.body.children).forEach((e=>e.addEventListener("click",r))));let l=!0;const c=e=>s.some((t=>{if("string"==typeof t)return Array.from(a.document.querySelectorAll(t)).some((t=>t===e.target||e.composedPath().includes(t)));{const n=f(t);return n&&(e.target===n||e.composedPath().includes(n))}})),d=[m(a,"click",(n=>{const r=f(e);r&&r!==n.target&&!n.composedPath().includes(r)&&(0===n.detail&&(l=!c(n)),l?t(n):l=!0)}),{passive:!0,capture:i}),m(a,"pointerdown",(t=>{const n=f(e);n&&(l=!t.composedPath().includes(n)&&!c(t))}),{passive:!0}),u&&m(a,"blur",(n=>{var r;const o=f(e);"IFRAME"!==(null==(r=a.document.activeElement)?void 0:r.tagName)||(null==o?void 0:o.contains(a.document.activeElement))||t(n)}))].filter(Boolean);return()=>d.forEach((e=>e()))}function w(e,t=!1){const n=v(),r=()=>n.value=Boolean(e());return r(),a(r,t),n}const I="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h="__vueuse_ssr_handlers__";I[h]=I[h]||{};var E=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;function P(t,n,r={}){const o=r,{window:a=O}=o,s=((e,t)=>{var n={};for(var r in e)g.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&E)for(var r of E(e))t.indexOf(r)<0&&j.call(e,r)&&(n[r]=e[r]);return n})(o,["window"]);let i;const u=w((()=>a&&"ResizeObserver"in a)),l=()=>{i&&(i.disconnect(),i=void 0)},d=c((()=>f(t)),(e=>{l(),u.value&&a&&e&&(i=new ResizeObserver(n),i.observe(e,s))}),{immediate:!0,flush:"post"}),p=()=>{l(),d()};return e(p),{isSupported:u,stop:p}}var _,S,x=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;function Q(t,n,r={}){const o=r,{window:a=O}=o,s=((e,t)=>{var n={};for(var r in e)A.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&x)for(var r of x(e))t.indexOf(r)<0&&N.call(e,r)&&(n[r]=e[r]);return n})(o,["window"]);let i;const u=w((()=>a&&"MutationObserver"in a)),l=()=>{i&&(i.disconnect(),i=void 0)},d=c((()=>f(t)),(e=>{l(),u.value&&a&&e&&(i=new MutationObserver(n),i.observe(e,s))}),{immediate:!0}),p=()=>{l(),d()};return e(p),{isSupported:u,stop:p}}(S=_||(_={})).UP="UP",S.RIGHT="RIGHT",S.DOWN="DOWN",S.LEFT="LEFT",S.NONE="NONE";var k=Object.defineProperty,C=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,L=(e,t,n)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function R(e,t,n,r={}){var o,a,s;const{clone:i=!1,passive:f=!1,eventName:O,deep:m=!1,defaultValue:b}=r,y=p(),w=n||(null==y?void 0:y.emit)||(null==(o=null==y?void 0:y.$emit)?void 0:o.bind(y))||(null==(s=null==(a=null==y?void 0:y.proxy)?void 0:a.$emit)?void 0:s.bind(null==y?void 0:y.proxy));let I=O;t||(t="modelValue"),I=O||I||`update:${t.toString()}`;const h=e=>{return i?u(i)?i(e):(t=e,JSON.parse(JSON.stringify(t))):e;var t},E=()=>l(e[t])?h(e[t]):b;if(f){const n=E(),r=v(n);return c((()=>e[t]),(e=>r.value=h(e))),c(r,(n=>{(n!==e[t]||m)&&w(I,n)}),{deep:m}),r}return d({get:()=>E(),set(e){w(I,e)}})}((e,t)=>{for(var n in t||(t={}))T.call(t,n)&&L(e,n,t[n]);if(C)for(var n of C(t))B.call(t,n)&&L(e,n,t[n])})({linear:s},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});export{P as a,f as b,Q as c,R as d,y as o,m as u};
