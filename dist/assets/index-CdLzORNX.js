import{d as e,u as a,r as s,a as r,o as l,c as o,b as t,e as n,w as u,f as d,v as i,p as m,k as c,_ as p}from"./index-CC-YTM2n.js";const f={class:"login-page flex-jac"},g={class:"login-container"},v=(e=>(m("data-v-1f6c22a5"),e=e(),c(),e))((()=>t("div",{class:"login-logo"},null,-1))),b=p(e({__name:"index",setup(e){const m=i(),c=a(),p=s({username:"admin",password:"123456"}),b=s([{label:"",key:"username",type:"input",placeholder:"请输入用户名"},{label:"",key:"password",type:"password",placeholder:"请输入密码"}]),w=s({username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]});function y(){c.setUserInfo({username:"Admin",age:18,token:"123456"}),c.setAddress("修改之后的地址"),c.$state.weatherInfo={city:"杭州",temperature:"20"},m.replace("/")}return(e,a)=>{const s=r("base-form"),i=r("el-form"),m=r("el-button");return l(),o("div",f,[t("div",g,[v,n(i,{model:p.value,rules:w.value},{default:u((()=>[n(s,{"row-num":1,columns:b.value,"form-data":p.value},null,8,["columns","form-data"])])),_:1},8,["model","rules"]),n(m,{type:"primary",class:"login-btn",onClick:y},{default:u((()=>[d("登录")])),_:1})])])}}}),[["__scopeId","data-v-1f6c22a5"]]);export{b as default};