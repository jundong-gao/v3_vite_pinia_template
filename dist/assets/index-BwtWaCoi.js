import{t as e}from"./test-BBcpamD4.js";import{d as a,r as l,a as t,o as s,h as n,w as i,f as r,t as o,e as c,E as p}from"./index-ZCgGiMnq.js";const u=a({__name:"index",setup(a){const u=l([{label:"姓名",key:"name",search:!0,type:"input"},{label:"信息",key:"salary",children:[{label:"信息1",key:"info1"},{label:"信息2",key:"info2"}]},{label:"年龄",key:"age",width:600,search:!0,type:"select",data:[],async:()=>Promise.resolve([{label:"18-25岁",value:1},{label:"26-35岁",value:2}])},{label:"性别",key:"gender"},{label:"电话",key:"phone",search:!0,type:"input"},{label:"操作",key:"action",fixed:"right",width:200}]),y=a=>{let l={...a,page:a.pageNum};return p.success(`请求参数===>${JSON.stringify(l)}`),e(l).then((e=>({data:{list:e.data,total:100}})))};return(e,a)=>{const l=t("el-button"),p=t("base-table");return s(),n(p,{columns:u.value,stripe:"",api:y,"max-height":"calc(100vh - 210px)"},{age:i((({row:e})=>[r("自定义年龄表格单元 ====> "+o(e),1)])),info2Header:i((e=>[r("自定义表头 ==== "+o(e.column.label),1)])),action:i((()=>[c(l,{size:"small",type:"danger",link:""},{default:i((()=>[r("删除")])),_:1}),c(l,{size:"small",link:"",type:"primary"},{default:i((()=>[r("编辑")])),_:1})])),_:1},8,["columns"])}}});export{u as default};
