/* empty css                                                     */import{r as e,s as a,f as t,t as l,u as r,w as o,x as s,y as u,A as n,B as m,C as d,m as i}from"./js/gaojundong_element-plus@2.5.6_vue@3.4.19-DQRU43ei.js";import{d as p,i as c,C as f,q as h}from"./js/gaojundong_@vue_runtime-core@3.4.19-CncSpy8U.js";function y(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!h(e)}const D=p({props:{formData:{type:Object,default:()=>({})},columns:{type:Array,default:()=>[]},rowNum:{type:Number,default:2},colGutter:{type:Number,default:20}},setup(e){e.columns.forEach((async e=>{e.async&&(e.data=await e.async())}))},render(){let t;return c(a,{gutter:this.colGutter},y(t=this.columns.map((a=>{let t;return c(e,{span:a.span??24/this.rowNum},y(t=this.renderFormItem(a))?t:{default:()=>[t]})})))?t:{default:()=>[t]})},methods:{renderFormItem(e){var a,l;let r;return this.$slots[e.key]?null==(l=(a=this.$slots)[e.key])?void 0:l.call(a,e):c(t,f(e,{prop:e.key}),y(r=this.renderFormContent(e))?r:{default:()=>[r]})},renderFormContent(e){switch(e.type){case"input":case"textarea":case"password":return c(i,f({modelValue:this.formData[e.key],"onUpdate:modelValue":a=>this.formData[e.key]=a,placeholder:"请输入"},e),null);case"inputNumber":return c(d,f({class:"w-[100%]","controls-position":"right",modelValue:this.formData[e.key],"onUpdate:modelValue":a=>this.formData[e.key]=a,placeholder:"请输入"},e),null);case"select":return c(m,f({modelValue:this.formData[e.key],"onUpdate:modelValue":a=>this.formData[e.key]=a,placeholder:"请选择"},e),{default:()=>{var a;return[null==(a=e.data)?void 0:a.map((e=>c(n,{key:e.value,label:e.label,value:e.value},null)))]}});case"date":return c(s,f({"value-format":"YYYY-MM-DD",modelValue:this.formData[e.key],"onUpdate:modelValue":a=>this.formData[e.key]=a,placeholder:"请选择"},e),null);case"dateRange":return c(s,f({"value-format":"YYYY-MM-DD",modelValue:this.formData[e.key],"onUpdate:modelValue":a=>this.formData[e.key]=a,"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},e,{type:"daterange"}),null);case"time":return c(u,f({"value-format":"HH:mm:ss",modelValue:this.formData[e.key],"onUpdate:modelValue":a=>this.formData[e.key]=a,placeholder:"请选择"},e),null);case"dateTime":return c(s,f({"value-format":"YYYY-MM-DD HH:mm:ss",modelValue:this.formData[e.key],"onUpdate:modelValue":a=>this.formData[e.key]=a,placeholder:"请选择"},e,{type:"datetime"}),null);case"switch":return c(o,f({modelValue:this.formData[e.key],"onUpdate:modelValue":a=>this.formData[e.key]=a},e),null);case"radio":return c(r,f({modelValue:this.formData[e.key],"onUpdate:modelValue":a=>this.formData[e.key]=a},e),{default:()=>{var a;return[null==(a=e.data)?void 0:a.map((e=>c(l,{label:e.value},{default:()=>[e.label]})))]}});default:return null}}}});export{D as _};
