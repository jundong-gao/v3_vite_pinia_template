/* empty css                                                     */import{k as e,u as n}from"./js/gaojundong_@vue_reactivity@3.4.19-BAlQ3FKq.js";import{g as o}from"./js/gaojundong_element-plus@2.5.6_vue@3.4.19-BunSpYOT.js";import{d as s,o as a,c as t,K as r,a as u,i,G as j}from"./js/gaojundong_@vue_runtime-core@3.4.19-B_DqhbiT.js";import{L as l}from"./js/gaojundong_@vue_shared@3.4.19-DM82F0Lm.js";import"./js/gaojundong_@vue_runtime-dom@3.4.19-D5SUXjx0.js";import"./js/gaojundong_lodash-es@4.17.21-DuYRbacB.js";import"./js/gaojundong_async-validator@4.2.5-Cuo4gI4y.js";import"./js/gaojundong_@vueuse_core@9.13.0_vue@3.4.19-6u3Ecg0h.js";import"./js/gaojundong_@vueuse_shared@9.13.0_vue@3.4.19-CVP7fUGR.js";import"./js/gaojundong_dayjs@1.11.10-BKYM6hcM.js";import"./js/gaojundong_@element-plus_icons-vue@2.3.1_vue@3.4.19-BS2I2cMU.js";import"./js/gaojundong_@ctrl_tinycolor@3.6.1-D2oWfImC.js";import"./js/gaojundong_@sxzz_popperjs-es@2.11.7-D3lHDW-0.js";import"./js/gaojundong_normalize-wheel-es@1.2.0-Vn5vHDCm.js";const m=s({__name:"index",setup(s){let{fps:m,destory:d,restart:g}=((n={delay:10,infinite:!0})=>{let o=e(0),s=n.delay,a=e(0),t=e(!1),r=performance.now(),u=0;const i=()=>{if(u+=1,u>s){const e=performance.now(),s=e-r;if(o.value=Math.round(1e3/(s/u)),r=e,u=0,t.value=!1,!n.infinite)return j()}a.value=requestAnimationFrame(i)};function j(){t.value=!1,cancelAnimationFrame(a.value)}return a.value=requestAnimationFrame(i),{fps:o,destory:j,restart:function(){t.value||(t.value=!0,a.value=requestAnimationFrame(i))}}})({delay:100,infinite:!1});return(e,s)=>{const _=o;return a(),t("div",null,[r("FPS: "+l(n(m))+" ",1),u("div",null,[i(_,{type:"warning",onClick:n(g)},{default:j((()=>[r("restart")])),_:1},8,["onClick"]),i(_,{type:"warning",onClick:n(d)},{default:j((()=>[r("destory")])),_:1},8,["onClick"])])])}}});export{m as default};