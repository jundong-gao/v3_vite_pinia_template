import{s as e,d as a,a as l,o as t,c as u,f as s,t as n,g as o,e as d,F as m,r,h as p}from"./index-B98WcYUs.js";const V=a({__name:"Child",props:{modelValue:{}},emits:["update:modelValue"],setup(a,{emit:r}){const p=function(a,l,t){return e({get:()=>new Proxy(a[l],{get:(e,a)=>e[a],set:(e,a,u)=>(t(`update:${l}`,{...e,[a]:u}),!0)}),set(e){t(`update:${l}`,e)}})}(a,"modelValue",r);return(e,a)=>{const r=l("el-input");return t(),u(m,null,[s(n(o(p))+" ",1),d(r,{modelValue:o(p).age,"onUpdate:modelValue":a[0]||(a[0]=e=>o(p).age=e)},null,8,["modelValue"])],64)}}}),i=a({__name:"index",setup(e){const a=r({name:"高天",age:18});return(e,l)=>(t(),p(V,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e)},null,8,["modelValue"]))}});export{i as default};