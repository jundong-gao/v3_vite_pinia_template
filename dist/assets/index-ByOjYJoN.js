/* empty css                                                     */import{l as e,d as o,o as s,c as a,K as u,i as n,F as t,E as j}from"./js/gaojundong_@vue_runtime-core@3.4.19-B_DqhbiT.js";import{m as l}from"./js/gaojundong_element-plus@2.5.6_vue@3.4.19-BunSpYOT.js";import{L as r}from"./js/gaojundong_@vue_shared@3.4.19-DM82F0Lm.js";import{u as m,k as d}from"./js/gaojundong_@vue_reactivity@3.4.19-BAlQ3FKq.js";import"./js/gaojundong_@vue_runtime-dom@3.4.19-D5SUXjx0.js";import"./js/gaojundong_lodash-es@4.17.21-DuYRbacB.js";import"./js/gaojundong_async-validator@4.2.5-Cuo4gI4y.js";import"./js/gaojundong_@vueuse_core@9.13.0_vue@3.4.19-6u3Ecg0h.js";import"./js/gaojundong_@vueuse_shared@9.13.0_vue@3.4.19-CVP7fUGR.js";import"./js/gaojundong_dayjs@1.11.10-BKYM6hcM.js";import"./js/gaojundong_@element-plus_icons-vue@2.3.1_vue@3.4.19-BS2I2cMU.js";import"./js/gaojundong_@ctrl_tinycolor@3.6.1-D2oWfImC.js";import"./js/gaojundong_@sxzz_popperjs-es@2.11.7-D3lHDW-0.js";import"./js/gaojundong_normalize-wheel-es@1.2.0-Vn5vHDCm.js";const g=o({__name:"Child",props:{modelValue:{}},emits:["update:modelValue"],setup(o,{emit:j}){const d=function(o,s,a){return e({get:()=>new Proxy(o[s],{get:(e,o)=>e[o],set:(e,o,u)=>(a(`update:${s}`,{...e,[o]:u}),!0)}),set(e){a(`update:${s}`,e)}})}(o,"modelValue",j);return(e,o)=>{const j=l;return s(),a(t,null,[u(r(m(d))+" ",1),n(j,{modelValue:m(d).age,"onUpdate:modelValue":o[0]||(o[0]=e=>m(d).age=e)},null,8,["modelValue"])],64)}}}),_=o({__name:"index",setup(e){const o=d({name:"高天",age:18});return(e,a)=>(s(),j(g,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e)},null,8,["modelValue"]))}});export{_ as default};