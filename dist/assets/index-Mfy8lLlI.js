import{d as t,E as e,a as s,o as n,h as a,w as o,f as u,g as i}from"./index-B98WcYUs.js";const r=t({__name:"index",setup(t){let r=function(t,e=200){let s=0;return function(...n){s&&clearTimeout(s),s=setTimeout((()=>{t.apply(this,n)}),e)}}((function(){e.success("test")}),200);return(t,e)=>{const c=s("el-button");return n(),a(c,{type:"primary",onClick:i(r)},{default:o((()=>[u("test debounce")])),_:1},8,["onClick"])}}});export{r as default};