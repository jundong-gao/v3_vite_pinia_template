import{u as e,i as o,a as s,b as t,c as a,d as n,e as i,f as r,g as l,h as d,j as u,k as p,l as c}from"./js/gaojundong_echarts@5.3.3-BF76t7CT.js";import{d as g,m,w as j,o as f,c as h,a as _,E as y}from"./js/gaojundong_@vue_runtime-core@3.4.19-BpEXqTuW.js";import{k as v}from"./js/gaojundong_@vue_reactivity@3.4.19-BAlQ3FKq.js";import{_ as x}from"./_plugin-vue_export-helper-BCo6x5W8.js";import"./js/gaojundong_zrender@5.3.2-DSlUBKMk.js";import"./js/gaojundong_tslib@2.3.0-ZseNXxlj.js";import"./js/gaojundong_@vue_shared@3.4.19-DM82F0Lm.js";e([o,s,t,a,n,i,r,l,d,u,p]);const b=g({__name:"index",props:{options:{type:Object,default:()=>({legend:{icon:"circle",itemWidth:10,itemHeight:10},tooltip:{trigger:"axis"},grid:{left:20,right:20,bottom:20,containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"兴奋值",symbol:"none",smooth:!0,type:"line",lineStyle:{width:0},areaStyle:{opacity:.8,color:new c.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgb(128, 255, 165)"},{offset:1,color:"rgb(1, 191, 236)"}])},data:[10,50,100,500,1e3,800,600]}]})}},setup(e,{expose:o}){const s=e,t=v();let a=null;function n(){a=c.init(t.value),a.setOption(s.options)}return m((()=>{n()})),j((()=>s.options),(e=>{if(e)return a?void a.setOption(e):n()})),o({echartsInstance:a}),(e,o)=>(f(),h("div",null,[_("div",{class:"h-full w-full",ref_key:"echartsRef",ref:t},null,512)]))}});const w=x({},[["render",function(e,o){const s=b;return f(),y(s,{class:"w-[300px] h-[300px] shadow-md hover:shadow-lg rounded-md"})}]]);export{w as default};
