import{u as e,i as o,a as s,b as t,c as a,d as n,e as r,f as i,g as l,h as u,j as d,k as p,l as c}from"./js/gaojundong_echarts@5.3.3-BF76t7CT.js";import{d as g,m as j,w as m,o as f,c as h,E as _}from"./js/gaojundong_@vue_runtime-core@3.4.19-B_DqhbiT.js";import{k as y}from"./js/gaojundong_@vue_reactivity@3.4.19-BAlQ3FKq.js";import{_ as b}from"./_plugin-vue_export-helper-BCo6x5W8.js";import"./js/gaojundong_zrender@5.3.2-DSlUBKMk.js";import"./js/gaojundong_tslib@2.3.0-ZseNXxlj.js";import"./js/gaojundong_@vue_shared@3.4.19-DM82F0Lm.js";e([o,s,t,a,n,r,i,l,u,d,p]);const x=g({__name:"index",props:{options:{type:Object,default:()=>({legend:{icon:"circle",itemWidth:10,itemHeight:10},tooltip:{trigger:"axis"},grid:{left:20,right:20,bottom:20,containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"兴奋值",symbol:"none",smooth:!0,type:"line",lineStyle:{width:0},areaStyle:{opacity:.8,color:new c.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgb(128, 255, 165)"},{offset:1,color:"rgb(1, 191, 236)"}])},data:[10,50,100,500,1e3,800,600]}]})}},setup(e,{expose:o}){const s=e,t=y();let a=null;function n(){a=c.init(t.value),a.setOption(s.options)}return j((()=>{n()})),m((()=>s.options),(e=>{if(e)return a?void a.setOption(e):n()})),o({echartsInstance:a}),(e,o)=>(f(),h("div",{class:"h-full w-full",ref_key:"echartsRef",ref:t},null,512))}});const v=b({},[["render",function(e,o){const s=x;return f(),_(s,{class:"w-[300px] h-[300px] shadow-md hover:shadow-lg rounded-md"})}]]);export{v as default};
