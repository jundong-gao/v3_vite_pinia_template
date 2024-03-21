import{f as e}from"./js/gaojundong_@vue_runtime-dom@3.4.19-B_z-8jkI.js";/* empty css                                                     */import{E as t,z as o}from"./js/gaojundong_element-plus@2.5.6_vue@3.4.19-DQRU43ei.js";import{d as n,o as r,H as s,G as i,i as a,V as p}from"./js/gaojundong_@vue_runtime-core@3.4.19-CncSpy8U.js";import{u as m}from"./js/gaojundong_@vue_reactivity@3.4.19-4N_wAvkI.js";import{c as _,a as d}from"./js/gaojundong_vue-router@4.2.5_vue@3.4.19-CAqtaFBo.js";import{d as l,c as u}from"./js/gaojundong_pinia@2.1.7_typescript@5.3.3_vue@3.4.19-q2vZrCM3.js";import{s as c}from"./js/gaojundong_pinia-plugin-persistedstate@3.2.1_pinia@2.1.7-Cs-f0Iqr.js";import"./js/gaojundong_@vue_shared@3.4.19-CyPW2GST.js";import"./js/gaojundong_lodash-es@4.17.21-DuYRbacB.js";import"./js/gaojundong_async-validator@4.2.5-Cuo4gI4y.js";import"./js/gaojundong_@vueuse_core@9.13.0_vue@3.4.19-noqSnwi2.js";import"./js/gaojundong_@vueuse_shared@9.13.0_vue@3.4.19-CSjWpbqh.js";import"./js/gaojundong_dayjs@1.11.10-BKYM6hcM.js";import"./js/gaojundong_@element-plus_icons-vue@2.3.1_vue@3.4.19-edFoSpwG.js";import"./js/gaojundong_@ctrl_tinycolor@3.6.1-D2oWfImC.js";import"./js/gaojundong_@sxzz_popperjs-es@2.11.7-D3lHDW-0.js";import"./js/gaojundong_normalize-wheel-es@1.2.0-Vn5vHDCm.js";import"./js/gaojundong_vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const j=n({__name:"App",setup:e=>(e,n)=>{const _=p("router-view"),d=t;return r(),s(d,{locale:m(o)},{default:i((()=>[a(_)])),_:1},8,["locale"])}}),h={},g=function(e,t,o){let n=Promise.resolve();if(t&&t.length>0){const e=document.getElementsByTagName("link");n=Promise.all(t.map((t=>{if((t=function(e){return"/vue3/"+e}(t))in h)return;h[t]=!0;const n=t.endsWith(".css"),r=n?'[rel="stylesheet"]':"";if(!!o)for(let o=e.length-1;o>=0;o--){const r=e[o];if(r.href===t&&(!n||"stylesheet"===r.rel))return}else if(document.querySelector(`link[href="${t}"]${r}`))return;const s=document.createElement("link");return s.rel=n?"stylesheet":"modulepreload",n||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),n?new Promise(((e,o)=>{s.addEventListener("load",e),s.addEventListener("error",(()=>o(new Error(`Unable to preload CSS for ${t}`))))})):void 0})))}return n.then((()=>e())).catch((e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}))},f=l("user",{state:()=>({userInfo:{},address:"初始地址",weatherInfo:{}}),actions:{setUserInfo(e){this.userInfo=e},setAddress(e){this.address=e}},getters:{getUserInfo(){return this.userInfo}},persist:{storage:sessionStorage,key:"gaotiankey",paths:["address","userInfo","weatherInfo.city"],beforeRestore(e){},afterRestore(e){}}}),E=_({routes:[{path:"/:pathMatch(.*)*",redirect:"/"},{path:"/",component:()=>g((()=>import("./index-mBvFG_II.js")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23])),redirect:"/home",children:[{path:"/home",meta:{title:"简介",icon:"i-ep-location"},component:()=>g((()=>import("./index-BOr9iGci.js")),__vite__mapDeps([24,18]))},{path:"/comps",meta:{title:"组件"},redirect:"/comps/form",children:[{path:"/comps/form",meta:{title:"表单"},component:()=>g((()=>import("./index-CwmjdMR6.js")),__vite__mapDeps([25,26,5,4,6,3,2,7,8,9,10,11,12,13,14,15,16,27]))},{path:"/comps/table",meta:{title:"表格"},component:()=>g((()=>import("./index-CtHiff3l.js")),__vite__mapDeps([28,26,5,4,6,3,2,7,8,9,10,11,12,13,14,15,16,27,29,30,31]))},{path:"/comps/dialog",meta:{title:"模态框"},component:()=>g((()=>import("./index-Cmmi4h22.js")),__vite__mapDeps([32,12,2,3,4,5,6,7,8,9,10,11,13,14,15,16,33]))},{path:"/comps/watermark",meta:{title:"水印"},component:()=>g((()=>import("./index-DcYNVxdw.js")),__vite__mapDeps([34,2,3,4,18,35]))}]},{path:"/hooks",meta:{title:"hooks"},redirect:"/hooks/fps",children:[{path:"/hooks/pfs",meta:{title:"渲染帧"},component:()=>g((()=>import("./index-CixIahDr.js")),__vite__mapDeps([36,3,4,5,6,2,7,8,9,10,11,12,13,14,15,16]))},{path:"/hooks/debounce",meta:{title:"防抖"},component:()=>g((()=>import("./index-Dq-bNqnn.js")),__vite__mapDeps([37,5,4,6,3,2,7,8,9,10,11,12,13,14,15,16]))},{path:"/hooks/vmodel",meta:{title:"vmodel"},component:()=>g((()=>import("./index-DVQYb2z4.js")),__vite__mapDeps([38,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]))},{path:"/hooks/uuid",meta:{title:"uuid"},component:()=>g((()=>import("./index-FjYSasRe.js")),__vite__mapDeps([39,5,4,6,3,2,7,8,9,10,11,12,13,14,15,16]))},{path:"/hooks/intervalCallback",meta:{title:"intervalCallback"},component:()=>g((()=>import("./index-DrauyTIz.js")),__vite__mapDeps([40,3,4,5,6,2,7,8,9,10,11,12,13,14,15,16]))}]},{path:"/other",meta:{title:"其他"},redirect:"/other/readbase64",children:[{path:"/other/readbase64",meta:{title:"读取文件原始内容"},component:()=>g((()=>import("./index-CWGvz-iO.js")),__vite__mapDeps([41,2,3,4]))},{path:"/other/sendRequest",meta:{title:"发送请求"},component:()=>g((()=>import("./index-BsbLqTo1.js")),__vite__mapDeps([42,29,30,5,4,6,3,2,7,8,9,10,11,12,13,14,15,16]))},{path:"/other/uploadFace",meta:{title:"修改头像"},component:()=>g((()=>import("./index-D4VCe2-g.js")),__vite__mapDeps([43,7,2,3,4,18,5,6,8,9,10,11,12,13,14,15,16,44]))}]},{path:"/test",meta:{title:"测试",hideMenu:!0},component:()=>g((()=>import("./index-CBQPjOTI.js")),__vite__mapDeps([45,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22]))}]},{path:"/login",component:()=>g((()=>import("./index-DBY7qKKe.js")),__vite__mapDeps([46,26,5,4,6,3,2,7,8,9,10,11,12,13,14,15,16,27,19,18,20,21,22,47]))}],history:d("/vue3")}),v=["/login"];E.beforeEach(((e,t,o)=>{const n=f();return v.includes(e.path)?o():n.$state.userInfo.token?void o():o("/login")}));const I=e(j),y=u();y.use(c),I.use(y),I.use(E),I.mount("#app");export{E as r,f as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-mBvFG_II.js","assets/index.vue_vue_type_script_lang-CLQl1O52.js","assets/js/gaojundong_@vue_runtime-core@3.4.19-CncSpy8U.js","assets/js/gaojundong_@vue_reactivity@3.4.19-4N_wAvkI.js","assets/js/gaojundong_@vue_shared@3.4.19-CyPW2GST.js","assets/js/gaojundong_element-plus@2.5.6_vue@3.4.19-DQRU43ei.js","assets/js/gaojundong_lodash-es@4.17.21-DuYRbacB.js","assets/js/gaojundong_@vue_runtime-dom@3.4.19-B_z-8jkI.js","assets/js/gaojundong_async-validator@4.2.5-Cuo4gI4y.js","assets/js/gaojundong_@vueuse_core@9.13.0_vue@3.4.19-noqSnwi2.js","assets/js/gaojundong_@vueuse_shared@9.13.0_vue@3.4.19-CSjWpbqh.js","assets/js/gaojundong_dayjs@1.11.10-BKYM6hcM.js","assets/js/gaojundong_@element-plus_icons-vue@2.3.1_vue@3.4.19-edFoSpwG.js","assets/js/gaojundong_@ctrl_tinycolor@3.6.1-D2oWfImC.js","assets/js/gaojundong_@sxzz_popperjs-es@2.11.7-D3lHDW-0.js","assets/js/gaojundong_normalize-wheel-es@1.2.0-Vn5vHDCm.js","assets/css/gaojundong_element-plus@2.5.6_vue@3.4-C-EOu-32.css","assets/index-D8KjNdaJ.css","assets/_plugin-vue_export-helper-BCo6x5W8.js","assets/js/gaojundong_vue-router@4.2.5_vue@3.4.19-CAqtaFBo.js","assets/js/gaojundong_pinia@2.1.7_typescript@5.3.3_vue@3.4.19-q2vZrCM3.js","assets/js/gaojundong_vue-demi@0.14.7_vue@3.4.19-Dq6ymT-8.js","assets/js/gaojundong_pinia-plugin-persistedstate@3.2.1_pinia@2.1.7-Cs-f0Iqr.js","assets/index-CNBS-Ope.css","assets/index-BOr9iGci.js","assets/index-CwmjdMR6.js","assets/index.vue_vue_type_script_lang-D7n_45bR.js","assets/index-2Mz7H0r7.css","assets/index-CtHiff3l.js","assets/test-CuHVgSTL.js","assets/js/gaojundong_axios@1.6.7-X0xcXtXw.js","assets/index-BNO2fcFD.css","assets/index-Cmmi4h22.js","assets/index-ILxMcIdX.css","assets/index-DcYNVxdw.js","assets/index-CzwMBUUr.css","assets/index-CixIahDr.js","assets/index-Dq-bNqnn.js","assets/index-DVQYb2z4.js","assets/index-FjYSasRe.js","assets/index-DrauyTIz.js","assets/index-CWGvz-iO.js","assets/index-BsbLqTo1.js","assets/index-D4VCe2-g.js","assets/index-BCKHBbNo.css","assets/index-CBQPjOTI.js","assets/index-DBY7qKKe.js","assets/index-klcOEYqQ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
