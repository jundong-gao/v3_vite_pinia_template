import{o as e,c as t,a,d as l,i as n,F as r,q as u}from"./vender_@vue_runtime-core@3.4.19-DxPlDNzv.js";import{o,d as i,p as s,q as d}from"./vender_element-plus@2.5.6_vue@3.4.19-CgbGtrTX.js";import{r as p}from"./index-D_hcFW5A.js";const c={viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},m=[a("path",{fill:"currentColor",d:"M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32z"},null,-1)];const h={name:"ep-menu",render:function(a,l){return e(),t("svg",c,[...m])}};const v=l({props:{isCollapse:Boolean},setup:()=>({}),computed:{menus(){var e;return(null==(e=p.options.routes.find((e=>"/"===(null==e?void 0:e.path))))?void 0:e.children)||[]},acrive_path:()=>p.currentRoute.value.path},render(){let e;return n(o,{class:"menu-real","default-active":this.acrive_path,router:!0,collapse:this.isCollapse,"active-text-color":"#ffd04b","background-color":"#323640","text-color":"#fff"},"function"==typeof(t=e=this.menus.map((e=>this.renderMenuItem(e))))||"[object Object]"===Object.prototype.toString.call(t)&&!u(t)?e:{default:()=>[e]});var t},methods:{renderMenuItem(e){var t;return(null==(t=e.meta)?void 0:t.hideMenu)?null:e.children?n(s,{index:e.path},{default:()=>[e.children.map((e=>this.renderMenuItem(e)))],title:()=>{var t;return n(r,null,[n(i,null,{default:()=>[n(h,null,null)]}),n("span",null,[null==(t=e.meta)?void 0:t.title])])}}):n(d,{index:e.path},{default:()=>[n(i,null,{default:()=>[n(h,null,null)]})],title:()=>{var t;return null==(t=e.meta)?void 0:t.title}})}}});export{v as _};