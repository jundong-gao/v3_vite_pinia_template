import{g as e,e as r}from"./vender_element-plus@2.5.6_vue@3.4.19-Cz1JTsiA.js";import{k as s,u as n}from"./vender_@vue_reactivity@3.4.19-dBGfcXZR.js";import{d as t,o as a,c as o,J as v,i,G as u,F as _}from"./vender_@vue_runtime-core@3.4.19-DxPlDNzv.js";import{L as l}from"./vender_@vue_shared@3.4.19-CyPW2GST.js";import"./vender_lodash-es@4.17.21-DuYRbacB.js";import"./vender_@vue_runtime-dom@3.4.19-BrtrBs_4.js";import"./vender_async-validator@4.2.5-Cuo4gI4y.js";import"./vender_@vueuse_core@9.13.0_vue@3.4.19-CS2dMUaZ.js";import"./vender_@vueuse_shared@9.13.0_vue@3.4.19-BvGCUM93.js";import"./vender_dayjs@1.11.10-BKYM6hcM.js";import"./vender_@element-plus_icons-vue@2.3.1_vue@3.4.19-BZDyjLJY.js";import"./vender_@ctrl_tinycolor@3.6.1-D2oWfImC.js";import"./vender_@sxzz_popperjs-es@2.11.7-D3lHDW-0.js";import"./vender_normalize-wheel-es@1.2.0-Vn5vHDCm.js";function d(e,r){let n,t=s(0);return{time:t,handle:function(...s){t.value>0||(n=setInterval((()=>{if(t.value--,t.value<=0)return clearInterval(n)}),1e3),t.value=e,r(...s))}}}const m=t({__name:"index",setup(s){const{time:t,handle:m}=d(10,(()=>{r.success("发送成功")}));return(r,s)=>{const d=e;return a(),o(_,null,[v(" interval callback "),i(d,{onClick:n(m)},{default:u((()=>[v(l(n(t)?`${n(t)}s后重新发送`:"发送验证码"),1)])),_:1},8,["onClick"])],64)}}});export{m as default};
