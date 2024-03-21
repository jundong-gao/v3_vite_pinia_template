/**
* @vue/shared v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function e(e,t){const n=new Set(e.split(","));return t?e=>n.has(e.toLowerCase()):e=>n.has(e)}const t={},n=[],r=()=>{},o=()=>!1,s=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),a=e=>e.startsWith("onUpdate:"),i=Object.assign,l=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},c=Object.prototype.hasOwnProperty,f=(e,t)=>c.call(e,t),u=Array.isArray,p=e=>"[object Map]"===w(e),d=e=>"[object Set]"===w(e),g=e=>"[object Date]"===w(e),y=e=>"function"==typeof e,h=e=>"string"==typeof e,b=e=>"symbol"==typeof e,m=e=>null!==e&&"object"==typeof e,j=e=>(m(e)||y(e))&&y(e.then)&&y(e.catch),O=Object.prototype.toString,w=e=>O.call(e),S=e=>w(e).slice(8,-1),N=e=>"[object Object]"===w(e),A=e=>h(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,C=e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),v=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},U=/-(\w)/g,V=v((e=>e.replace(U,((e,t)=>t?t.toUpperCase():"")))),k=/\B([A-Z])/g,B=v((e=>e.replace(k,"-$1").toLowerCase())),M=v((e=>e.charAt(0).toUpperCase()+e.slice(1))),$=v((e=>e?`on${M(e)}`:"")),_=(e,t)=>!Object.is(e,t),x=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},P=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},T=e=>{const t=parseFloat(e);return isNaN(t)?e:t},z=e=>{const t=h(e)?Number(e):NaN;return isNaN(t)?e:t};let I;const L=()=>I||(I="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{});function D(e){if(u(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=h(r)?q(r):D(r);if(o)for(const e in o)t[e]=o[e]}return t}if(h(e)||m(e))return e}const E=/;(?![^(]*\))/g,F=/:([^]+)/,J=/\/\*[^]*?\*\//g;function q(e){const t={};return e.replace(J,"").split(E).forEach((e=>{if(e){const n=e.split(F);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function G(e){let t="";if(h(e))t=e;else if(u(e))for(let n=0;n<e.length;n++){const r=G(e[n]);r&&(t+=r+" ")}else if(m(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function H(e){if(!e)return null;let{class:t,style:n}=e;return t&&!h(t)&&(e.class=G(t)),n&&(e.style=D(n)),e}const K=e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function R(e){return!!e||""===e}function W(e,t){if(e===t)return!0;let n=g(e),r=g(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=b(e),r=b(t),n||r)return e===t;if(n=u(e),r=u(t),n||r)return!(!n||!r)&&function(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=W(e[r],t[r]);return n}(e,t);if(n=m(e),r=m(t),n||r){if(!n||!r)return!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e){const r=e.hasOwnProperty(n),o=t.hasOwnProperty(n);if(r&&!o||!r&&o||!W(e[n],t[n]))return!1}}return String(e)===String(t)}function Z(e,t){return e.findIndex((e=>W(e,t)))}const Q=e=>h(e)?e:null==e?"":u(e)||m(e)&&(e.toString===O||!y(e.toString))?JSON.stringify(e,X,2):String(e),X=(e,t)=>t&&t.__v_isRef?X(e,t.value):p(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],r)=>(e[Y(t,r)+" =>"]=n,e)),{})}:d(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>Y(e)))}:b(t)?Y(t):!m(t)||u(t)||N(t)?t:String(t),Y=(e,t="")=>{var n;return b(e)?`Symbol(${null!=(n=e.description)?n:t})`:e};export{T as A,$ as B,B as C,o as D,n as E,a as F,z as G,Z as H,W as I,K as J,R as K,Q as L,g as M,r as N,H as O,m as a,y as b,u as c,P as d,A as e,f,p as g,_ as h,b as i,i as j,h as k,D as l,e as m,G as n,s as o,V as p,M as q,t as r,L as s,S as t,j as u,l as v,d as w,N as x,C as y,x as z};
