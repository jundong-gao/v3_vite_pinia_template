/* empty css                                                     */import{k as s,u as o}from"./js/gaojundong_@vue_reactivity@3.4.19-BAlQ3FKq.js";import{g as e,e as n}from"./js/gaojundong_element-plus@2.5.6_vue@3.4.19-CSoDTLWd.js";import{d as a,o as u,c as j,K as r,i as t,G as i,F as g}from"./js/gaojundong_@vue_runtime-core@3.4.19-BpEXqTuW.js";import{L as l}from"./js/gaojundong_@vue_shared@3.4.19-DM82F0Lm.js";import"./js/gaojundong_@vue_runtime-dom@3.4.19-CH4-7NK0.js";import"./js/gaojundong_lodash-es@4.17.21-DuYRbacB.js";import"./js/gaojundong_async-validator@4.2.5-Cuo4gI4y.js";import"./js/gaojundong_@vueuse_core@9.13.0_vue@3.4.19-D1OQYGPG.js";import"./js/gaojundong_@vueuse_shared@9.13.0_vue@3.4.19-C5utu3Ay.js";import"./js/gaojundong_dayjs@1.11.10-BKYM6hcM.js";import"./js/gaojundong_@element-plus_icons-vue@2.3.1_vue@3.4.19-BavSja34.js";import"./js/gaojundong_@ctrl_tinycolor@3.6.1-D2oWfImC.js";import"./js/gaojundong_@sxzz_popperjs-es@2.11.7-D3lHDW-0.js";import"./js/gaojundong_normalize-wheel-es@1.2.0-Vn5vHDCm.js";function _(o,e){let n,a=s(0);return{time:a,handle:function(...s){a.value>0||(n=setInterval((()=>{if(a.value--,a.value<=0)return clearInterval(n)}),1e3),a.value=o,e(...s))}}}const m=a({__name:"index",setup(s){const{time:a,handle:m}=_(10,(()=>{n.success("发送成功")}));return(s,n)=>{const _=e;return u(),j(g,null,[r(" interval callback "),t(_,{onClick:o(m)},{default:i((()=>[r(l(o(a)?`${o(a)}s后重新发送`:"发送验证码"),1)])),_:1},8,["onClick"])],64)}}});export{m as default};