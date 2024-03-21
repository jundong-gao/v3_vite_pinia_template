const t=Math.min,n=Math.max,o=Math.round,e=Math.floor,r=t=>({x:t,y:t}),u={left:"right",right:"left",bottom:"top",top:"bottom"},i={start:"end",end:"start"};function c(o,e,r){return n(o,t(e,r))}function s(t,n){return"function"==typeof t?t(n):t}function a(t){return t.split("-")[0]}function f(t){return t.split("-")[1]}function l(t){return"x"===t?"y":"x"}function d(t){return"y"===t?"height":"width"}function p(t){return["top","bottom"].includes(a(t))?"y":"x"}function m(t){return l(p(t))}function h(t,n,o){void 0===o&&(o=!1);const e=f(t),r=m(t),u=d(r);let i="x"===r?e===(o?"end":"start")?"right":"left":"start"===e?"bottom":"top";return n.reference[u]>n.floating[u]&&(i=y(i)),[i,y(i)]}function w(t){const n=y(t);return[b(t),n,b(n)]}function b(t){return t.replace(/start|end/g,(t=>i[t]))}function g(t,n,o,e){const r=f(t);let u=function(t,n,o){const e=["left","right"],r=["right","left"],u=["top","bottom"],i=["bottom","top"];switch(t){case"top":case"bottom":return o?n?r:e:n?e:r;case"left":case"right":return n?u:i;default:return[]}}(a(t),"start"===o,e);return r&&(u=u.map((t=>t+"-"+r)),n&&(u=u.concat(u.map(b)))),u}function y(t){return t.replace(/left|right|bottom|top/g,(t=>u[t]))}function v(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function S(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function x(t){return T(t)?(t.nodeName||"").toLowerCase():"#document"}function E(t){var n;return(null==t||null==(n=t.ownerDocument)?void 0:n.defaultView)||window}function C(t){var n;return null==(n=(T(t)?t.ownerDocument:t.document)||window.document)?void 0:n.documentElement}function T(t){return t instanceof Node||t instanceof E(t).Node}function D(t){return t instanceof Element||t instanceof E(t).Element}function L(t){return t instanceof HTMLElement||t instanceof E(t).HTMLElement}function M(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof E(t).ShadowRoot)}function k(t){const{overflow:n,overflowX:o,overflowY:e,display:r}=V(t);return/auto|scroll|overlay|hidden|clip/.test(n+e+o)&&!["inline","contents"].includes(r)}function N(t){return["table","td","th"].includes(x(t))}function F(t){const n=R(),o=V(t);return"none"!==o.transform||"none"!==o.perspective||!!o.containerType&&"normal"!==o.containerType||!n&&!!o.backdropFilter&&"none"!==o.backdropFilter||!n&&!!o.filter&&"none"!==o.filter||["transform","perspective","filter"].some((t=>(o.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(o.contain||"").includes(t)))}function H(t){let n=Y(t);for(;L(n)&&!O(n);){if(F(n))return n;n=Y(n)}return null}function R(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function O(t){return["html","body","#document"].includes(x(t))}function V(t){return E(t).getComputedStyle(t)}function X(t){return D(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Y(t){if("html"===x(t))return t;const n=t.assignedSlot||t.parentNode||M(t)&&t.host||C(t);return M(n)?n.host:n}function j(t){const n=Y(t);return O(n)?t.ownerDocument?t.ownerDocument.body:t.body:L(n)&&k(n)?n:j(n)}function q(t,n,o){var e;void 0===n&&(n=[]),void 0===o&&(o=!0);const r=j(t),u=r===(null==(e=t.ownerDocument)?void 0:e.body),i=E(r);return u?n.concat(i,i.visualViewport||[],k(r)?r:[],i.frameElement&&o?q(i.frameElement):[]):n.concat(r,q(r,[],o))}export{k as A,X as B,n as C,N as D,F as E,H as F,Y as G,O as H,a,f as b,p as c,m as d,s as e,y as f,v as g,w as h,g as i,h as j,c as k,d as l,t as m,l as n,q as o,D as p,r as q,S as r,E as s,V as t,C as u,L as v,o as w,R as x,e as y,x as z};