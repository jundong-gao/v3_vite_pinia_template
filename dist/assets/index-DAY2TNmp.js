import{g as e}from"./vender_element-plus@2.5.6_vue@3.4.19-gQs-ezRw.js";import{k as r,u as n}from"./vender_@vue_reactivity@3.4.19-CT0fOkG_.js";import{d as t,o as i,c as o,L as s,a,i as u,H as m}from"./vender_@vue_runtime-core@3.4.19-B3wHNLg9.js";import{L as v}from"./vender_@vue_shared@3.4.19-BqlcddsJ.js";import"./vender_lodash-es@4.17.21-BOD1Zk9H.js";import"./vender_@vueuse_core@9.13.0_vue@3.4.19-gmFKCLvb.js";import"./vender_@vueuse_shared@9.13.0_vue@3.4.19-JgXqF0wo.js";import"./vender_@vue_runtime-dom@3.4.19-CxaGZhfE.js";import"./vender_@element-plus_icons-vue@2.3.1_vue@3.4.19-YOBRtq19.js";import"./vender_@sxzz_popperjs-es@2.11.7-D3lHDW-0.js";import"./vender_@ctrl_tinycolor@3.6.1-D2oWfImC.js";import"./vender_dayjs@1.11.10-BKYM6hcM.js";import"./vender_async-validator@4.2.5-Cuo4gI4y.js";import"./vender_memoize-one@6.0.0-Ds0C_khL.js";import"./vender_normalize-wheel-es@1.2.0-Vn5vHDCm.js";import"./vender_@floating-ui_dom@1.6.3-CSrpQn7c.js";import"./vender_@floating-ui_core@1.6.0-4pTMFri_.js";import"./vender_@floating-ui_utils@0.2.1-BjL72BsT.js";const l=t({__name:"index",setup(t){let{fps:l,destory:d,restart:_}=((e={delay:10,infinite:!0})=>{let n=r(0),t=e.delay,i=r(0),o=r(!1),s=performance.now(),a=0;const u=()=>{if(a+=1,a>t){const r=performance.now(),t=r-s;if(n.value=Math.round(1e3/(t/a)),s=r,a=0,o.value=!1,!e.infinite)return m()}i.value=requestAnimationFrame(u)};function m(){o.value=!1,cancelAnimationFrame(i.value)}return i.value=requestAnimationFrame(u),{fps:n,destory:m,restart:function(){o.value||(o.value=!0,i.value=requestAnimationFrame(u))}}})({delay:100,infinite:!1});return(r,t)=>{const p=e;return i(),o("div",null,[s("FPS: "+v(n(l))+" ",1),a("div",null,[u(p,{type:"warning",onClick:n(_)},{default:m((()=>[s("restart")])),_:1},8,["onClick"]),u(p,{type:"warning",onClick:n(d)},{default:m((()=>[s("destory")])),_:1},8,["onClick"])])])}}});export{l as default};
