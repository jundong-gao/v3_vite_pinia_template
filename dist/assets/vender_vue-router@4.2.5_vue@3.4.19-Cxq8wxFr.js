import{n as e,u as t,s as n,f as r,k as o}from"./vender_@vue_reactivity@3.4.19-dBGfcXZR.js";import{n as a,d as s,x as c,l as i,h as l,z as u,w as f}from"./vender_@vue_runtime-core@3.4.19-DxPlDNzv.js";
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const p="undefined"!=typeof window;const h=Object.assign;function d(e,t){const n={};for(const r in t){const o=t[r];n[r]=g(o)?o.map(e):e(o)}return n}const m=()=>{},g=Array.isArray,v=/\/$/,y=e=>e.replace(v,"");function b(e,t,n="/"){let r,o={},a="",s="";const c=t.indexOf("#");let i=t.indexOf("?");return c<i&&c>=0&&(i=-1),i>-1&&(r=t.slice(0,i),a=t.slice(i+1,c>-1?c:t.length),o=e(a)),c>-1&&(r=r||t.slice(0,c),s=t.slice(c,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];".."!==o&&"."!==o||r.push("");let a,s,c=n.length-1;for(a=0;a<r.length;a++)if(s=r[a],"."!==s){if(".."!==s)break;c>1&&c--}return n.slice(0,c).join("/")+"/"+r.slice(a-(a===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(a&&"?")+a+s,path:r,query:o,hash:s}}function w(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function E(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function k(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!O(e[n],t[n]))return!1;return!0}function O(e,t){return g(e)?R(e,t):g(t)?R(t,e):e===t}function R(e,t){return g(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var x,P,C,j;(P=x||(x={})).pop="pop",P.push="push",(j=C||(C={})).back="back",j.forward="forward",j.unknown="";const $=/^[^#]+#/;function S(e,t){return e.replace($,"#")+t}const A=()=>({left:window.pageXOffset,top:window.pageYOffset});function q(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),o="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function _(e,t){return(history.state?history.state.position-t:-1)+e}const L=new Map;let M=()=>location.protocol+"//"+location.host;function B(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let t=o.includes(e.slice(a))?e.slice(a).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),w(n,"")}return w(n,e)+r+o}function G(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?A():null}}function I(e){const t=function(e){const{history:t,location:n}=window,r={value:B(e,n)},o={value:t.state};function a(r,a,s){const c=e.indexOf("#"),i=c>-1?(n.host&&document.querySelector("base")?e:e.slice(c))+r:M()+e+r;try{t[s?"replaceState":"pushState"](a,"",i),o.value=a}catch(l){n[s?"replace":"assign"](i)}}return o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:o,push:function(e,n){const s=h({},o.value,t.state,{forward:e,scroll:A()});a(s.current,s,!0),a(e,h({},G(r.value,e,null),{position:s.position+1},n),!1),r.value=e},replace:function(e,n){a(e,h({},t.state,G(o.value.back,e,o.value.forward,!0),n,{position:o.value.position}),!0),r.value=e}}}(e=function(e){if(!e)if(p){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),y(e)}(e)),n=function(e,t,n,r){let o=[],a=[],s=null;const c=({state:a})=>{const c=B(e,location),i=n.value,l=t.value;let u=0;if(a){if(n.value=c,t.value=a,s&&s===i)return void(s=null);u=l?a.position-l.position:0}else r(c);o.forEach((e=>{e(n.value,i,{delta:u,type:x.pop,direction:u?u>0?C.forward:C.back:C.unknown})}))};function i(){const{history:e}=window;e.state&&e.replaceState(h({},e.state,{scroll:A()}),"")}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",i,{passive:!0}),{pauseListeners:function(){s=n.value},listen:function(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return a.push(t),t},destroy:function(){for(const e of a)e();a=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",i)}}}(e,t.state,t.location,t.replace);const r=h({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:S.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function W(e){return"string"==typeof e||"symbol"==typeof e}const D={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},U=Symbol("");var F,T;function z(e,t){return h(new Error,{type:e,[U]:!0},t)}function V(e,t){return e instanceof Error&&U in e&&(null==t||!!(e.type&t))}(T=F||(F={}))[T.aborted=4]="aborted",T[T.cancelled=8]="cancelled",T[T.duplicated=16]="duplicated";const K="[^/]+?",H={sensitive:!1,strict:!1,start:!0,end:!0},Q=/[.+*?^${}()[\]/\\]/g;function X(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Y(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const e=X(r[n],o[n]);if(e)return e;n++}if(1===Math.abs(o.length-r.length)){if(N(r))return 1;if(N(o))return-1}return o.length-r.length}function N(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Z={type:0,value:""},J=/[a-zA-Z0-9_]/;function ee(e,t,n){const r=function(e,t){const n=h({},H,t),r=[];let o=n.start?"^":"";const a=[];for(const i of e){const e=i.length?[]:[90];n.strict&&!i.length&&(o+="/");for(let t=0;t<i.length;t++){const r=i[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(o+="/"),o+=r.value.replace(Q,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:l,regexp:u}=r;a.push({name:e,repeatable:n,optional:l});const f=u||K;if(f!==K){s+=10;try{new RegExp(`(${f})`)}catch(c){throw new Error(`Invalid custom RegExp for param "${e}" (${f}): `+c.message)}}let p=n?`((?:${f})(?:/(?:${f}))*)`:`(${f})`;t||(p=l&&i.length<2?`(?:/${p})`:"/"+p),l&&(p+="?"),o+=p,s+=20,l&&(s+=-8),n&&(s+=-20),".*"===f&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");return{re:s,score:r,keys:a,parse:function(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",o=a[r-1];n[o.name]=e&&o.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:a,repeatable:s,optional:c}=e,i=a in t?t[a]:"";if(g(i)&&!s)throw new Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);const l=g(i)?i.join("/"):i;if(!l){if(!c)throw new Error(`Missing required param "${a}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n||"/"}}}(function(e){if(!e)return[[]];if("/"===e)return[[Z]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const o=[];let a;function s(){a&&o.push(a),a=[]}let c,i=0,l="",u="";function f(){l&&(0===n?a.push({type:0,value:l}):1===n||2===n||3===n?(a.length>1&&("*"===c||"+"===c)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:u,repeatable:"*"===c||"+"===c,optional:"*"===c||"?"===c})):t("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;i<e.length;)if(c=e[i++],"\\"!==c||2===n)switch(n){case 0:"/"===c?(l&&f(),s()):":"===c?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===c?n=2:J.test(c)?p():(f(),n=0,"*"!==c&&"?"!==c&&"+"!==c&&i--);break;case 2:")"===c?"\\"==u[u.length-1]?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,"*"!==c&&"?"!==c&&"+"!==c&&i--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),f(),s(),o}(e.path),n),o=h(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function te(e,t){const n=[],r=new Map;function o(e,n,r){const c=!r,i=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:re(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}(e);i.aliasOf=r&&r.record;const l=se(t,e),u=[i];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(h({},i,{components:r?r.record.components:i.components,path:e,aliasOf:r?r.record:i}))}let f,p;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(f=ee(t,n,l),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),c&&e.name&&!oe(f)&&a(e.name)),i.children){const e=i.children;for(let t=0;t<e.length;t++)o(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&s(f)}return p?()=>{a(p)}:m}function a(e){if(W(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(a),t.alias.forEach(a))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(a),e.alias.forEach(a))}}function s(e){let t=0;for(;t<n.length&&Y(e,n[t])>=0&&(e.record.path!==n[t].record.path||!ce(e,n[t]));)t++;n.splice(t,0,e),e.record.name&&!oe(e)&&r.set(e.record.name,e)}return t=se({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:function(e,t){let o,a,s,c={};if("name"in e&&e.name){if(o=r.get(e.name),!o)throw z(1,{location:e});s=o.record.name,c=h(ne(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&ne(e.params,o.keys.map((e=>e.name)))),a=o.stringify(c)}else if("path"in e)a=e.path,o=n.find((e=>e.re.test(a))),o&&(c=o.parse(a),s=o.record.name);else{if(o=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw z(1,{location:e,currentLocation:t});s=o.record.name,c=h({},t.params,e.params),a=o.stringify(c)}const i=[];let l=o;for(;l;)i.unshift(l.record),l=l.parent;return{name:s,path:a,params:c,matched:i,meta:ae(i)}},removeRoute:a,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function ne(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function re(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"==typeof n?n[r]:n;return t}function oe(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ae(e){return e.reduce(((e,t)=>h(e,t.meta)),{})}function se(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ce(e,t){return t.children.some((t=>t===e||ce(e,t)))}const ie=/#/g,le=/&/g,ue=/\//g,fe=/=/g,pe=/\?/g,he=/\+/g,de=/%5B/g,me=/%5D/g,ge=/%5E/g,ve=/%60/g,ye=/%7B/g,be=/%7C/g,we=/%7D/g,Ee=/%20/g;function ke(e){return encodeURI(""+e).replace(be,"|").replace(de,"[").replace(me,"]")}function Oe(e){return ke(e).replace(he,"%2B").replace(Ee,"+").replace(ie,"%23").replace(le,"%26").replace(ve,"`").replace(ye,"{").replace(we,"}").replace(ge,"^")}function Re(e){return null==e?"":function(e){return ke(e).replace(ie,"%23").replace(pe,"%3F")}(e).replace(ue,"%2F")}function xe(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Pe(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(he," "),o=e.indexOf("="),a=xe(o<0?e:e.slice(0,o)),s=o<0?null:xe(e.slice(o+1));if(a in t){let e=t[a];g(e)||(e=t[a]=[e]),e.push(s)}else t[a]=s}return t}function Ce(e){let t="";for(let n in e){const r=e[n];if(n=Oe(n).replace(fe,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(g(r)?r.map((e=>e&&Oe(e))):[r&&Oe(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function je(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=g(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const $e=Symbol(""),Se=Symbol(""),Ae=Symbol(""),qe=Symbol(""),_e=Symbol("");function Le(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e.slice(),reset:function(){e=[]}}}function Me(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((s,c)=>{const i=e=>{var i;!1===e?c(z(4,{from:n,to:t})):e instanceof Error?c(e):"string"==typeof(i=e)||i&&"object"==typeof i?c(z(2,{from:t,to:e})):(a&&r.enterCallbacks[o]===a&&"function"==typeof e&&a.push(e),s())},l=e.call(r&&r.instances[o],t,n,i);let u=Promise.resolve(l);e.length<3&&(u=u.then(i)),u.catch((e=>c(e)))}))}function Be(e,t,n,r){const o=[];for(const s of e)for(const e in s.components){let c=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if("object"==typeof(a=c)||"displayName"in a||"props"in a||"__vccOpts"in a){const a=(c.__vccOpts||c)[t];a&&o.push(Me(a,n,r,s,e))}else{let a=c();o.push((()=>a.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=(c=o).__esModule||"Module"===c[Symbol.toStringTag]?o.default:o;var c;s.components[e]=a;const i=(a.__vccOpts||a)[t];return i&&Me(i,n,r,s,e)()}))))}}var a;return o}function Ge(e){const n=c(Ae),r=c(qe),o=i((()=>n.resolve(t(e.to)))),a=i((()=>{const{matched:e}=o.value,{length:t}=e,n=e[t-1],a=r.matched;if(!n||!a.length)return-1;const s=a.findIndex(E.bind(null,n));if(s>-1)return s;const c=We(e[t-2]);return t>1&&We(n)===c&&a[a.length-1].path!==c?a.findIndex(E.bind(null,e[t-2])):s})),s=i((()=>a.value>-1&&function(e,t){for(const n in t){const r=t[n],o=e[n];if("string"==typeof r){if(r!==o)return!1}else if(!g(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}(r.params,o.value.params))),l=i((()=>a.value>-1&&a.value===r.matched.length-1&&k(r.params,o.value.params)));return{route:o,href:i((()=>o.value.href)),isActive:s,isExactActive:l,navigate:function(r={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(r)?n[t(e.replace)?"replace":"push"](t(e.to)).catch(m):Promise.resolve()}}}const Ie=s({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ge,setup(e,{slots:t}){const n=r(Ge(e)),{options:o}=c(Ae),a=i((()=>({[De(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[De(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:l("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},r)}}});function We(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const De=(e,t,n)=>null!=e?e:null!=t?t:n;function Ue(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Fe=s({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:r}){const a=c(_e),s=i((()=>e.route||a.value)),p=c(Se,0),d=i((()=>{let e=t(p);const{matched:n}=s.value;let r;for(;(r=n[e])&&!r.components;)e++;return e})),m=i((()=>s.value.matched[d.value]));u(Se,i((()=>d.value+1))),u($e,m),u(_e,s);const g=o();return f((()=>[g.value,m.value,e.name]),(([e,t,n],[r,o,a])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&E(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const t=s.value,o=e.name,a=m.value,c=a&&a.components[o];if(!c)return Ue(r.default,{Component:c,route:t});const i=a.props[o],u=i?!0===i?t.params:"function"==typeof i?i(t):i:null,f=l(c,h({},u,n,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(a.instances[o]=null)},ref:g}));return Ue(r.default,{Component:f,route:t})||f}}});function Te(r){const o=te(r.routes,r),s=r.parseQuery||Pe,c=r.stringifyQuery||Ce,i=r.history,l=Le(),u=Le(),f=Le(),v=e(D);let y=D;p&&r.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=d.bind(null,(e=>""+e)),O=d.bind(null,Re),R=d.bind(null,xe);function P(e,t){if(t=h({},t||v.value),"string"==typeof e){const n=b(s,e,t.path),r=o.resolve({path:n.path},t),a=i.createHref(n.fullPath);return h(n,r,{params:R(r.params),hash:xe(n.hash),redirectedFrom:void 0,href:a})}let n;if("path"in e)n=h({},e,{path:b(s,e.path,t.path).path});else{const r=h({},e.params);for(const e in r)null==r[e]&&delete r[e];n=h({},e,{params:O(r)}),t.params=O(t.params)}const r=o.resolve(n,t),a=e.hash||"";r.params=w(R(r.params));const l=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(c,h({},e,{hash:(u=a,ke(u).replace(ye,"{").replace(we,"}").replace(ge,"^")),path:r.path}));var u;const f=i.createHref(l);return h({fullPath:l,hash:a,query:c===Ce?je(e.query):e.query||{}},r,{redirectedFrom:void 0,href:f})}function C(e){return"string"==typeof e?b(s,e,v.value.path):h({},e)}function j(e,t){if(y!==e)return z(8,{from:t,to:e})}function $(e){return M(e)}function S(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=C(r):{path:r},r.params={}),h({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function M(e,t){const n=y=P(e),r=v.value,o=e.state,a=e.force,s=!0===e.replace,i=S(n);if(i)return M(h(C(i),{state:"object"==typeof i?h({},o,i.state):o,force:a,replace:s}),t||n);const l=n;let u;return l.redirectedFrom=t,!a&&function(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&E(t.matched[r],n.matched[o])&&k(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(c,r,n)&&(u=z(16,{to:l,from:r}),Z(r,r,!0,!1)),(u?Promise.resolve(u):I(l,r)).catch((e=>V(e)?V(e,2)?e:N(e):Y(e,l,r))).then((e=>{if(e){if(V(e,2))return M(h({replace:s},C(e.to),{state:"object"==typeof e.to?h({},o,e.to.state):o,force:a}),t||l)}else e=F(l,r,!0,s,o);return U(l,r,e),e}))}function B(e,t){const n=j(e,t);return n?Promise.reject(n):Promise.resolve()}function G(e){const t=ne.values().next().value;return t&&"function"==typeof t.runWithContext?t.runWithContext(e):e()}function I(e,t){let n;const[r,o,a]=function(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let s=0;s<a;s++){const a=t.matched[s];a&&(e.matched.find((e=>E(e,a)))?r.push(a):n.push(a));const c=e.matched[s];c&&(t.matched.find((e=>E(e,c)))||o.push(c))}return[n,r,o]}(e,t);n=Be(r.reverse(),"beforeRouteLeave",e,t);for(const c of r)c.leaveGuards.forEach((r=>{n.push(Me(r,e,t))}));const s=B.bind(null,e,t);return n.push(s),oe(n).then((()=>{n=[];for(const r of l.list())n.push(Me(r,e,t));return n.push(s),oe(n)})).then((()=>{n=Be(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(Me(r,e,t))}));return n.push(s),oe(n)})).then((()=>{n=[];for(const r of a)if(r.beforeEnter)if(g(r.beforeEnter))for(const o of r.beforeEnter)n.push(Me(o,e,t));else n.push(Me(r.beforeEnter,e,t));return n.push(s),oe(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Be(a,"beforeRouteEnter",e,t),n.push(s),oe(n)))).then((()=>{n=[];for(const r of u.list())n.push(Me(r,e,t));return n.push(s),oe(n)})).catch((e=>V(e,8)?e:Promise.reject(e)))}function U(e,t,n){f.list().forEach((r=>G((()=>r(e,t,n)))))}function F(e,t,n,r,o){const a=j(e,t);if(a)return a;const s=t===D,c=p?history.state:{};n&&(r||s?i.replace(e.fullPath,h({scroll:s&&c&&c.scroll},o)):i.push(e.fullPath,o)),v.value=e,Z(e,t,n,s),N()}let T;function K(){T||(T=i.listen(((e,t,n)=>{if(!re.listening)return;const r=P(e),o=S(r);if(o)return void M(h(o,{replace:!0}),r).catch(m);y=r;const a=v.value;var s,c;p&&(s=_(a.fullPath,n.delta),c=A(),L.set(s,c)),I(r,a).catch((e=>V(e,12)?e:V(e,2)?(M(e.to,r).then((e=>{V(e,20)&&!n.delta&&n.type===x.pop&&i.go(-1,!1)})).catch(m),Promise.reject()):(n.delta&&i.go(-n.delta,!1),Y(e,r,a)))).then((e=>{(e=e||F(r,a,!1))&&(n.delta&&!V(e,8)?i.go(-n.delta,!1):n.type===x.pop&&V(e,20)&&i.go(-1,!1)),U(r,a,e)})).catch(m)})))}let H,Q=Le(),X=Le();function Y(e,t,n){N(e);const r=X.list();return r.length&&r.forEach((r=>r(e,t,n))),Promise.reject(e)}function N(e){return H||(H=!e,K(),Q.list().forEach((([t,n])=>e?n(e):t())),Q.reset()),e}function Z(e,t,n,o){const{scrollBehavior:s}=r;if(!p||!s)return Promise.resolve();const c=!n&&function(e){const t=L.get(e);return L.delete(e),t}(_(e.fullPath,0))||(o||!n)&&history.state&&history.state.scroll||null;return a().then((()=>s(e,t,c))).then((e=>e&&q(e))).catch((n=>Y(n,e,t)))}const J=e=>i.go(e);let ee;const ne=new Set,re={currentRoute:v,listening:!0,addRoute:function(e,t){let n,r;return W(e)?(n=o.getRecordMatcher(e),r=t):r=e,o.addRoute(r,n)},removeRoute:function(e){const t=o.getRecordMatcher(e);t&&o.removeRoute(t)},hasRoute:function(e){return!!o.getRecordMatcher(e)},getRoutes:function(){return o.getRoutes().map((e=>e.record))},resolve:P,options:r,push:$,replace:function(e){return $(h(C(e),{replace:!0}))},go:J,back:()=>J(-1),forward:()=>J(1),beforeEach:l.add,beforeResolve:u.add,afterEach:f.add,onError:X.add,isReady:function(){return H&&v.value!==D?Promise.resolve():new Promise(((e,t)=>{Q.add([e,t])}))},install(e){e.component("RouterLink",Ie),e.component("RouterView",Fe),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>t(v)}),p&&!ee&&v.value===D&&(ee=!0,$(i.location).catch((e=>{})));const r={};for(const t in D)Object.defineProperty(r,t,{get:()=>v.value[t],enumerable:!0});e.provide(Ae,this),e.provide(qe,n(r)),e.provide(_e,v);const o=e.unmount;ne.add(e),e.unmount=function(){ne.delete(e),ne.size<1&&(y=D,T&&T(),T=null,v.value=D,ee=!1,H=!1),o()}}};function oe(e){return e.reduce(((e,t)=>e.then((()=>G(t)))),Promise.resolve())}return re}function ze(){return c(Ae)}export{I as a,Te as c,ze as u};