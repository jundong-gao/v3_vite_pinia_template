/* empty css                                                     */import{d as e}from"./js/gaojundong_@element-plus_icons-vue@2.3.1_vue@3.4.19-edFoSpwG.js";import{g as o,d as l,l as a}from"./js/gaojundong_element-plus@2.5.6_vue@3.4.19-DQRU43ei.js";import{d as t,i as s,F as i,o as n,c as d,G as u,J as r,a as m}from"./js/gaojundong_@vue_runtime-core@3.4.19-CncSpy8U.js";import{k as g,u as j,a as p}from"./js/gaojundong_@vue_reactivity@3.4.19-4N_wAvkI.js";import"./js/gaojundong_@vue_shared@3.4.19-CyPW2GST.js";import"./js/gaojundong_lodash-es@4.17.21-DuYRbacB.js";import"./js/gaojundong_@vue_runtime-dom@3.4.19-B_z-8jkI.js";import"./js/gaojundong_async-validator@4.2.5-Cuo4gI4y.js";import"./js/gaojundong_@vueuse_core@9.13.0_vue@3.4.19-noqSnwi2.js";import"./js/gaojundong_@vueuse_shared@9.13.0_vue@3.4.19-CSjWpbqh.js";import"./js/gaojundong_dayjs@1.11.10-BKYM6hcM.js";import"./js/gaojundong_@ctrl_tinycolor@3.6.1-D2oWfImC.js";import"./js/gaojundong_@sxzz_popperjs-es@2.11.7-D3lHDW-0.js";import"./js/gaojundong_normalize-wheel-es@1.2.0-Vn5vHDCm.js";const c=t({props:{modelValue:Boolean,showFooter:{type:Boolean,default:!0},cancelText:{type:String,default:"取消"},confirmText:{type:String,default:"确定"}},computed:{dialog:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}},setup:()=>({loading:g(!1)}),render(){return s(a,{modelValue:this.dialog,"onUpdate:modelValue":e=>this.dialog=e,"show-close":!1,"append-to-body":!0,"close-on-press-escape":!1},{default:()=>{var e,l;return[s("div",{class:"base-dialog-content"},[null==(l=(e=this.$slots).default)?void 0:l.call(e)]),this.showFooter?s("div",{class:"base-dialog-footer flex-jasc-end"},[this.$slots.footer?this.$slots.footer():s(i,null,[s(o,{size:"small",onClick:()=>this.dialog=!1},{default:()=>[this.cancelText]}),s(o,{type:"primary",size:"small",onClick:()=>this.confirm(),loading:this.loading},{default:()=>[this.confirmText]})])]):null]},header:({close:o,titleId:a,titleClass:t})=>s("div",{class:["base-dialog-header","flex-jasc",t],id:a},[s("div",{class:"base-dialog-header-title"},[this.$attrs.title]),s("div",{onClick:()=>o(),class:"cursor-pointer flex-jac"},[s(l,{size:"16px"},{default:()=>[s(e,null,null)]})])])})},methods:{confirm(){var e,o;let l=null==(o=null==(e=this.$attrs)?void 0:e.onConfirm)?void 0:o.call(e);this.loading=!0,"[object Promise]"===Object.prototype.toString.call(l)?(this.loading=!0,l.finally((()=>{this.loading=!1}))):this.loading=!1}}}),f=m("p",null,"基本使用, 如果 @confirm 函数返回的是promise对象，确认按钮会自动启用loading,直到结束",-1),_=m("p",null,"自定义底部按钮",-1),h=m("p",null,"隐藏底部按钮",-1),v=t({__name:"index",setup(e){const l=g(!1),a=g(!1),t=g(!1),m=()=>new Promise((e=>{setTimeout((()=>{l.value=!1,e({})}),1e3)}));return(e,g)=>{const v=o,x=c;return n(),d(i,null,[s(v,{onClick:g[0]||(g[0]=e=>l.value=!0)},{default:u((()=>[r("基本使用")])),_:1}),s(v,{onClick:g[1]||(g[1]=e=>a.value=!0)},{default:u((()=>[r("自定义底部按钮")])),_:1}),s(v,{onClick:g[2]||(g[2]=e=>t.value=!0)},{default:u((()=>[r("隐藏底部按钮")])),_:1}),s(x,{modelValue:j(l),"onUpdate:modelValue":g[3]||(g[3]=e=>p(l)?l.value=e:null),title:"标题",width:"500px",draggable:"","cancel-text":"自定义取消文字","confirm-text":"自定义确定文字",onConfirm:m},{default:u((()=>[f])),_:1},8,["modelValue"]),s(x,{modelValue:j(a),"onUpdate:modelValue":g[4]||(g[4]=e=>p(a)?a.value=e:null),title:"自定义底部按钮",width:"500px",draggable:""},{footer:u((()=>[r(" 自定义底部 ")])),default:u((()=>[_])),_:1},8,["modelValue"]),s(x,{modelValue:j(t),"onUpdate:modelValue":g[5]||(g[5]=e=>p(t)?t.value=e:null),title:"隐藏底部按钮",width:"500px",draggable:"","show-footer":!1},{default:u((()=>[h])),_:1},8,["modelValue"])],64)}}});export{v as default};
