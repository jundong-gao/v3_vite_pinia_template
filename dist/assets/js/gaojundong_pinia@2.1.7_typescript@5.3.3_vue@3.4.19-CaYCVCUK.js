import{i as t}from"./gaojundong_vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";import{w as e,x as n,n as s,Y as o,l as a}from"./gaojundong_@vue_runtime-core@3.4.19-BpEXqTuW.js";import{w as c,k as r,m as i,f as u,a as f,d as p,h as l,g as h,o as d,v as y}from"./gaojundong_@vue_reactivity@3.4.19-BAlQ3FKq.js";
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let v;const _=t=>v=t,b=Symbol();function g(t){return t&&"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!=typeof t.toJSON}var j,m;function O(){const e=c(!0),n=e.run((()=>r({})));let s=[],o=[];const a=i({install(t){_(a),a._a=t,t.provide(b,a),t.config.globalProperties.$pinia=a,o.forEach((t=>s.push(t))),o=[]},use(e){return this._a||t?s.push(e):o.push(e),this},_p:s,_a:null,_e:e,_s:new Map,state:n});return a}(m=j||(j={})).direct="direct",m.patchObject="patch object",m.patchFunction="patch function";const $=()=>{};function w(t,e,n,s=$){t.push(e);const o=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),s())};return!n&&h()&&d(o),o}function P(t,...e){t.slice().forEach((t=>{t(...e)}))}const S=t=>t();function E(t,e){t instanceof Map&&e instanceof Map&&e.forEach(((e,n)=>t.set(n,e))),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],o=t[n];g(o)&&g(s)&&t.hasOwnProperty(n)&&!f(s)&&!p(s)?t[n]=E(o,s):t[n]=s}return t}const x=Symbol();const{assign:I}=Object;function M(t,n,o={},a,i,h){let d;const y=I({actions:{}},o),v={deep:!0};let b,m,O,M=[],k=[];const A=a.state.value[t];let F;function C(e){let n;b=m=!1,"function"==typeof e?(e(a.state.value[t]),n={type:j.patchFunction,storeId:t,events:O}):(E(a.state.value[t],e),n={type:j.patchObject,payload:e,storeId:t,events:O});const o=F=Symbol();s().then((()=>{F===o&&(b=!0)})),m=!0,P(M,n,a.state.value[t])}h||A||(a.state.value[t]={}),r({});const J=h?function(){const{state:t}=o,e=t?t():{};this.$patch((t=>{I(t,e)}))}:$;function N(e,n){return function(){_(a);const s=Array.from(arguments),o=[],c=[];let r;P(k,{args:s,name:e,store:Y,after:function(t){o.push(t)},onError:function(t){c.push(t)}});try{r=n.apply(this&&this.$id===t?this:Y,s)}catch(i){throw P(c,i),i}return r instanceof Promise?r.then((t=>(P(o,t),t))).catch((t=>(P(c,t),Promise.reject(t)))):(P(o,r),r)}}const W={_p:a,$id:t,$onAction:w.bind(null,k),$patch:C,$reset:J,$subscribe(n,s={}){const o=w(M,n,s.detached,(()=>c())),c=d.run((()=>e((()=>a.state.value[t]),(e=>{("sync"===s.flush?m:b)&&n({storeId:t,type:j.direct,events:O},e)}),I({},v,s))));return o},$dispose:function(){d.stop(),M=[],k=[],a._s.delete(t)}},Y=u(W);a._s.set(t,Y);const q=(a._a&&a._a.runWithContext||S)((()=>a._e.run((()=>(d=c()).run(n)))));for(const e in q){const n=q[e];if(f(n)&&(!f(B=n)||!B.effect)||p(n))h||(!A||g(z=n)&&z.hasOwnProperty(x)||(f(n)?n.value=A[e]:E(n,A[e])),a.state.value[t][e]=n);else if("function"==typeof n){const t=N(e,n);q[e]=t,y.actions[e]=n}}var z,B;return I(Y,q),I(l(Y),q),Object.defineProperty(Y,"$state",{get:()=>a.state.value[t],set:t=>{C((e=>{I(e,t)}))}}),a._p.forEach((t=>{I(Y,d.run((()=>t({store:Y,app:a._a,pinia:a,options:y}))))})),A&&h&&o.hydrate&&o.hydrate(Y.$state,A),b=!0,m=!0,Y}function k(t,e,s){let c,r;const u="function"==typeof e;function f(t,s){const f=o();(t=t||(f?n(b,null):null))&&_(t),(t=v)._s.has(c)||(u?M(c,e,r,t):function(t,e,n,s){const{state:o,actions:c,getters:r}=e,u=n.state.value[t];let f;f=M(t,(function(){u||(n.state.value[t]=o?o():{});const e=y(n.state.value[t]);return I(e,c,Object.keys(r||{}).reduce(((e,s)=>(e[s]=i(a((()=>{_(n);const e=n._s.get(t);return r[s].call(e,e)}))),e)),{}))}),e,n,0,!0)}(c,r,t));return t._s.get(c)}return"string"==typeof t?(c=t,r=u?s:e):(r=t,c=t.id),f.$id=c,f}export{O as c,k as d};