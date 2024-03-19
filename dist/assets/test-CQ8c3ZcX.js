var e=Object.defineProperty,t=(t,n,r)=>(((t,n,r)=>{n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r})(t,"symbol"!=typeof n?n+"":n,r),r);function n(e,t){return function(){return e.apply(t,arguments)}}const{toString:r}=Object.prototype,{getPrototypeOf:o}=Object,s=(e=>t=>{const n=r.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),i=e=>(e=e.toLowerCase(),t=>s(t)===e),a=e=>t=>typeof t===e,{isArray:c}=Array,u=a("undefined");const l=i("ArrayBuffer");const f=a("string"),d=a("function"),p=a("number"),h=e=>null!==e&&"object"==typeof e,m=e=>{if("object"!==s(e))return!1;const t=o(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},y=i("Date"),g=i("File"),b=i("Blob"),w=i("FileList"),E=i("URLSearchParams");function O(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),c(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function S(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const R="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,T=e=>!u(e)&&e!==R;const A=(e=>t=>e&&t instanceof e)("undefined"!=typeof Uint8Array&&o(Uint8Array)),j=i("HTMLFormElement"),x=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),C=i("RegExp"),v=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};O(n,((n,o)=>{let s;!1!==(s=t(n,o,e))&&(r[o]=s||n)})),Object.defineProperties(e,r)},N="abcdefghijklmnopqrstuvwxyz",_="0123456789",P={DIGIT:_,ALPHA:N,ALPHA_DIGIT:N+N.toUpperCase()+_};const k=i("AsyncFunction"),F={isArray:c,isArrayBuffer:l,isBuffer:function(e){return null!==e&&!u(e)&&null!==e.constructor&&!u(e.constructor)&&d(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||d(e.append)&&("formdata"===(t=s(e))||"object"===t&&d(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&l(e.buffer),t},isString:f,isNumber:p,isBoolean:e=>!0===e||!1===e,isObject:h,isPlainObject:m,isUndefined:u,isDate:y,isFile:g,isBlob:b,isRegExp:C,isFunction:d,isStream:e=>h(e)&&d(e.pipe),isURLSearchParams:E,isTypedArray:A,isFileList:w,forEach:O,merge:function e(){const{caseless:t}=T(this)&&this||{},n={},r=(r,o)=>{const s=t&&S(n,o)||o;m(n[s])&&m(r)?n[s]=e(n[s],r):m(r)?n[s]=e({},r):c(r)?n[s]=r.slice():n[s]=r};for(let o=0,s=arguments.length;o<s;o++)arguments[o]&&O(arguments[o],r);return n},extend:(e,t,r,{allOwnKeys:o}={})=>(O(t,((t,o)=>{r&&d(t)?e[o]=n(t,r):e[o]=t}),{allOwnKeys:o}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let s,i,a;const c={};if(t=t||{},null==e)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)a=s[i],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&o(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:s,kindOfTest:i,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(c(e))return e;let t=e.length;if(!p(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:j,hasOwnProperty:x,hasOwnProp:x,reduceDescriptors:v,freezeMethods:e=>{v(e,((t,n)=>{if(d(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];d(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return c(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:S,global:R,isContextDefined:T,ALPHABET:P,generateString:(e=16,t=P.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&d(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(h(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=c(e)?[]:{};return O(e,((e,t)=>{const s=n(e,r+1);!u(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:k,isThenable:e=>e&&(h(e)||d(e))&&d(e.then)&&d(e.catch)};function U(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}F.inherits(U,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:F.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const B=U.prototype,L={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{L[e]={value:e}})),Object.defineProperties(U,L),Object.defineProperty(B,"isAxiosError",{value:!0}),U.from=(e,t,n,r,o,s)=>{const i=Object.create(B);return F.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),U.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};function D(e){return F.isPlainObject(e)||F.isArray(e)}function q(e){return F.endsWith(e,"[]")?e.slice(0,-2):e}function I(e,t,n){return e?e.concat(t).map((function(e,t){return e=q(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const z=F.toFlatObject(F,{},null,(function(e){return/^is[A-Z]/.test(e)}));function M(e,t,n){if(!F.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=F.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!F.isUndefined(t[e])}))).metaTokens,o=n.visitor||u,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&F.isSpecCompliantForm(t);if(!F.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(F.isDate(e))return e.toISOString();if(!a&&F.isBlob(e))throw new U("Blob is not supported. Use a Buffer instead.");return F.isArrayBuffer(e)||F.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(F.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(F.isArray(e)&&function(e){return F.isArray(e)&&!e.some(D)}(e)||(F.isFileList(e)||F.endsWith(n,"[]"))&&(a=F.toArray(e)))return n=q(n),a.forEach((function(e,r){!F.isUndefined(e)&&null!==e&&t.append(!0===i?I([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!D(e)||(t.append(I(o,n,s),c(e)),!1)}const l=[],f=Object.assign(z,{defaultVisitor:u,convertValue:c,isVisitable:D});if(!F.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!F.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),F.forEach(n,(function(n,s){!0===(!(F.isUndefined(n)||null===n)&&o.call(t,n,F.isString(s)?s.trim():s,r,f))&&e(n,r?r.concat(s):[s])})),l.pop()}}(e),t}function H(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function J(e,t){this._pairs=[],e&&M(e,this,t)}const W=J.prototype;function K(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function V(e,t,n){if(!t)return e;const r=n&&n.encode||K,o=n&&n.serialize;let s;if(s=o?o(t,n):F.isURLSearchParams(t)?t.toString():new J(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}W.append=function(e,t){this._pairs.push([e,t])},W.toString=function(e){const t=e?function(t){return e.call(this,t,H)}:H;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};class G{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){F.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}const $={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},X={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:J,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},Q="undefined"!=typeof window&&"undefined"!=typeof document,Z=(Y="undefined"!=typeof navigator&&navigator.product,Q&&["ReactNative","NativeScript","NS"].indexOf(Y)<0);var Y;const ee="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,te={...Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Q,hasStandardBrowserEnv:Z,hasStandardBrowserWebWorkerEnv:ee},Symbol.toStringTag,{value:"Module"})),...X};function ne(e){function t(e,n,r,o){let s=e[o++];if("__proto__"===s)return!0;const i=Number.isFinite(+s),a=o>=e.length;if(s=!s&&F.isArray(r)?r.length:s,a)return F.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i;r[s]&&F.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],o)&&F.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i}if(F.isFormData(e)&&F.isFunction(e.entries)){const n={};return F.forEachEntry(e,((e,r)=>{t(function(e){return F.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}const re={transitional:$,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=F.isObject(e);o&&F.isHTMLForm(e)&&(e=new FormData(e));if(F.isFormData(e))return r?JSON.stringify(ne(e)):e;if(F.isArrayBuffer(e)||F.isBuffer(e)||F.isStream(e)||F.isFile(e)||F.isBlob(e))return e;if(F.isArrayBufferView(e))return e.buffer;if(F.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return M(e,new te.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return te.isNode&&F.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=F.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return M(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(F.isString(e))try{return(t||JSON.parse)(e),F.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||re.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&F.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(o){if(n){if("SyntaxError"===o.name)throw U.from(o,U.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:te.classes.FormData,Blob:te.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};F.forEach(["delete","get","head","post","put","patch"],(e=>{re.headers[e]={}}));const oe=re,se=F.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ie=Symbol("internals");function ae(e){return e&&String(e).trim().toLowerCase()}function ce(e){return!1===e||null==e?e:F.isArray(e)?e.map(ce):String(e)}function ue(e,t,n,r,o){return F.isFunction(r)?r.call(this,t,n):(o&&(t=n),F.isString(t)?F.isString(r)?-1!==t.indexOf(r):F.isRegExp(r)?r.test(t):void 0:void 0)}class le{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=ae(t);if(!o)throw new Error("header name must be a non-empty string");const s=F.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=ce(e))}const s=(e,t)=>F.forEach(e,((e,n)=>o(e,n,t)));return F.isPlainObject(e)||e instanceof this.constructor?s(e,t):F.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&se[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=ae(e)){const n=F.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(F.isFunction(t))return t.call(this,e,n);if(F.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ae(e)){const n=F.findKey(this,e);return!(!n||void 0===this[n]||t&&!ue(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=ae(e)){const o=F.findKey(n,e);!o||t&&!ue(0,n[o],o,t)||(delete n[o],r=!0)}}return F.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!ue(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return F.forEach(this,((r,o)=>{const s=F.findKey(n,o);if(s)return t[s]=ce(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=ce(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return F.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&F.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[ie]=this[ie]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ae(e);t[r]||(!function(e,t){const n=F.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return F.isArray(e)?e.forEach(r):r(e),this}}le.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),F.reduceDescriptors(le.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),F.freezeMethods(le);const fe=le;function de(e,t){const n=this||oe,r=t||n,o=fe.from(r.headers);let s=r.data;return F.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function pe(e){return!(!e||!e.__CANCEL__)}function he(e,t,n){U.call(this,null==e?"canceled":e,U.ERR_CANCELED,t,n),this.name="CanceledError"}F.inherits(he,U,{__CANCEL__:!0});const me=te.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];F.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),F.isString(r)&&i.push("path="+r),F.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function ye(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const ge=te.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=F.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return function(){return!0}}();function be(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[i];o||(o=c),n[s]=a,r[s]=c;let l=i,f=0;for(;l!==s;)f+=n[l++],l%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,c=r(a);n=s;const u={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const we={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=fe.from(e.headers).normalize();let s,i,{responseType:a,withXSRFToken:c}=e;function u(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}if(F.isFormData(r))if(te.hasStandardBrowserEnv||te.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if(!1!==(i=o.getContentType())){const[e,...t]=i?i.split(";").map((e=>e.trim())).filter(Boolean):[];o.setContentType([e||"multipart/form-data",...t].join("; "))}let l=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const f=ye(e.baseURL,e.url);function d(){if(!l)return;const r=fe.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new U("Request failed with status code "+n.status,[U.ERR_BAD_REQUEST,U.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),u()}),(function(e){n(e),u()}),{data:a&&"text"!==a&&"json"!==a?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:r,config:e,request:l}),l=null}if(l.open(e.method.toUpperCase(),V(f,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,"onloadend"in l?l.onloadend=d:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(d)},l.onabort=function(){l&&(n(new U("Request aborted",U.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new U("Network Error",U.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||$;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new U(t,r.clarifyTimeoutError?U.ETIMEDOUT:U.ECONNABORTED,e,l)),l=null},te.hasStandardBrowserEnv&&(c&&F.isFunction(c)&&(c=c(e)),c||!1!==c&&ge(f))){const t=e.xsrfHeaderName&&e.xsrfCookieName&&me.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in l&&F.forEach(o.toJSON(),(function(e,t){l.setRequestHeader(t,e)})),F.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),a&&"json"!==a&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",be(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",be(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{l&&(n(!t||t.type?new he(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const p=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(f);p&&-1===te.protocols.indexOf(p)?n(new U("Unsupported protocol "+p+":",U.ERR_BAD_REQUEST,e)):l.send(r||null)}))}};F.forEach(we,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const Ee=e=>`- ${e}`,Oe=e=>F.isFunction(e)||null===e||!1===e,Se=e=>{e=F.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!Oe(n)&&(r=we[(t=String(n)).toLowerCase()],void 0===r))throw new U(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+s]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));throw new U("There is no suitable adapter to dispatch the request "+(t?e.length>1?"since :\n"+e.map(Ee).join("\n"):" "+Ee(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r};function Re(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new he(null,e)}function Te(e){Re(e),e.headers=fe.from(e.headers),e.data=de.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Se(e.adapter||oe.adapter)(e).then((function(t){return Re(e),t.data=de.call(e,e.transformResponse,t),t.headers=fe.from(t.headers),t}),(function(t){return pe(t)||(Re(e),t&&t.response&&(t.response.data=de.call(e,e.transformResponse,t.response),t.response.headers=fe.from(t.response.headers))),Promise.reject(t)}))}const Ae=e=>e instanceof fe?e.toJSON():e;function je(e,t){t=t||{};const n={};function r(e,t,n){return F.isPlainObject(e)&&F.isPlainObject(t)?F.merge.call({caseless:n},e,t):F.isPlainObject(t)?F.merge({},t):F.isArray(t)?t.slice():t}function o(e,t,n){return F.isUndefined(t)?F.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!F.isUndefined(t))return r(void 0,t)}function i(e,t){return F.isUndefined(t)?F.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(Ae(e),Ae(t),!0)};return F.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);F.isUndefined(i)&&s!==a||(n[r]=i)})),n}const xe="1.6.7",Ce={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Ce[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const ve={};Ce.transitional=function(e,t,n){return(r,o,s)=>{if(!1===e)throw new U(function(e,t){return"[Axios v1.6.7] Transitional option '"+e+"'"+t+(n?". "+n:"")}(o," has been removed"+(t?" in "+t:"")),U.ERR_DEPRECATED);return t&&!ve[o]&&(ve[o]=!0),!e||e(r,o,s)}};const Ne={assertOptions:function(e,t,n){if("object"!=typeof e)throw new U("options must be an object",U.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new U("option "+s+" must be "+n,U.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new U("Unknown option "+s,U.ERR_BAD_OPTION)}},validators:Ce},_e=Ne.validators;class Pe{constructor(e){this.defaults=e,this.interceptors={request:new G,response:new G}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e;Error.captureStackTrace?Error.captureStackTrace(e={}):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}throw n}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=je(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&Ne.assertOptions(n,{silentJSONParsing:_e.transitional(_e.boolean),forcedJSONParsing:_e.transitional(_e.boolean),clarifyTimeoutError:_e.transitional(_e.boolean)},!1),null!=r&&(F.isFunction(r)?t.paramsSerializer={serialize:r}:Ne.assertOptions(r,{encode:_e.function,serialize:_e.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&F.merge(o.common,o[t.method]);o&&F.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=fe.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[Te.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);f<l;)u=u.then(e[f++],e[f++]);return u}l=i.length;let d=t;for(f=0;f<l;){const e=i[f++],t=i[f++];try{d=e(d)}catch(p){t.call(this,p);break}}try{u=Te.call(this,d)}catch(p){return Promise.reject(p)}for(f=0,l=c.length;f<l;)u=u.then(c[f++],c[f++]);return u}getUri(e){return V(ye((e=je(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}F.forEach(["delete","get","head","options"],(function(e){Pe.prototype[e]=function(t,n){return this.request(je(n||{},{method:e,url:t,data:(n||{}).data}))}})),F.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(je(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Pe.prototype[e]=t(),Pe.prototype[e+"Form"]=t(!0)}));const ke=Pe;class Fe{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new he(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Fe((function(t){e=t})),cancel:e}}}const Ue=Fe;const Be={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Be).forEach((([e,t])=>{Be[t]=e}));const Le=Be;const De=function e(t){const r=new ke(t),o=n(ke.prototype.request,r);return F.extend(o,ke.prototype,r,{allOwnKeys:!0}),F.extend(o,r,null,{allOwnKeys:!0}),o.create=function(n){return e(je(t,n))},o}(oe);De.Axios=ke,De.CanceledError=he,De.CancelToken=Ue,De.isCancel=pe,De.VERSION=xe,De.toFormData=M,De.AxiosError=U,De.Cancel=De.CanceledError,De.all=function(e){return Promise.all(e)},De.spread=function(e){return function(t){return e.apply(null,t)}},De.isAxiosError=function(e){return F.isObject(e)&&!0===e.isAxiosError},De.mergeConfig=je,De.AxiosHeaders=fe,De.formToJSON=e=>ne(F.isHTMLForm(e)?new FormData(e):e),De.getAdapter=Se,De.HttpStatusCode=Le,De.default=De;const qe=new class{constructor(e){t(this,"axios_instance"),t(this,"cancel"),this.cancel=null,this.axios_instance=De.create({...e,cancelToken:this.setCancelToken()}),this.setInterceptor()}setCancelToken(){return new De.CancelToken((e=>{this.cancel=e}))}setInterceptor(){this.axios_instance.interceptors.request.use((e=>e),(e=>Promise.reject(e))),this.axios_instance.interceptors.response.use((e=>e.data),(e=>(De.isCancel(e),Promise.reject(e))))}get(e,t={}){let n={params:{...t},cancelToken:void 0};return n.params.cancelToken&&(n.cancelToken=t.cancelToken,delete n.params.cancelToken),this.axios_instance.get(e,n)}post(e,t={}){return this.axios_instance.post(e,t)}fetch(e){return this.axios_instance(e)}cancelAllRequest(e){this.cancel(e),this.axios_instance.defaults.cancelToken=this.setCancelToken()}}({baseURL:"/",timeout:15e3}),Ie=e=>qe.get("https://mock.gaojundong.com/info/list",e),ze=e=>qe.get("https://mock.gaojundong.com/random/sleep",e);export{De as a,ze as b,qe as s,Ie as t};