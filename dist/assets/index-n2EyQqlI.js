import{d as e,r as t,b as a,A as s,z as l,B as i,C as r,D as n,G as h,H as o,I as u,J as p,o as c,g as d,w as m,e as g,t as y,x as f}from"./index-B9hNVsHm.js";import{_ as b}from"./index.vue_vue_type_script_lang-C24vnzt2.js";/* empty css                 *//* empty css                     *//* empty css                  */import"./el-tooltip-l0sNRNKZ.js";/* empty css                  *//* empty css                */import{t as k}from"./test-o6M0IY2c.js";const v=e({props:{columns:{type:Array,default:()=>[]},searchRowNum:{type:Number,default:4},searchText:{type:String,default:"搜索"},resetText:{type:String,default:"重置"},api:{type:Function,default:()=>null},showPage:{type:Boolean,default:!0}},setup:()=>({tableData:t([]),loading:t(!1),searchParams:t({}),searchFormRef:t({}),pageNum:t(1),pageSize:t(10),total:t(0),pageSizes:t([10,20,30,40]),layout:t("total, sizes, prev, pager, next, jumper")}),computed:{searchColumns(){let e=this.columns.filter((e=>e.search));return e.length&&e.push({label:"",key:"search",span:e.length%this.searchRowNum==0?24:24/this.searchRowNum}),e}},render(){let e;return a("div",null,[a("div",{class:"base-table-search"},[a(s,{ref:"searchFormRef",model:this.searchParams},{default:()=>[a(b,{"row-num":this.searchRowNum,columns:this.searchColumns,"form-data":this.searchParams},{search:()=>a("div",{class:"flex-jasc-end"},[a(l,{onClick:()=>this.reset()},{default:()=>[this.resetText]}),a(l,{type:"primary",onClick:()=>this.search()},{default:()=>[this.searchText]})])})]})]),i(a(n,h({border:!1,data:this.tableData},this.$attrs),(t=e=this.columns.map((e=>this.renderTableColumn(e))),"function"==typeof t||"[object Object]"===Object.prototype.toString.call(t)&&!p(t)?e:{default:()=>[e]})),[[r,this.loading]]),this.showPage?a("div",{class:"flex-jasc-end p-[10px]"},[a(o,{layout:this.layout,"page-sizes":this.pageSizes,small:!0,background:!0,total:this.total,modelValue:this.pageNum,modelModifiers:{"current-page":!0},"onUpdate:modelValue":[e=>this.pageNum=e,e=>this.pageSize=e],onSizeChange:e=>this.sizeChange(e),onCurrentChange:e=>this.currentChange(e)},null)]):null]);var t},mounted(){this.reset()},methods:{renderTableColumn(e){if(e.hidden)return null;let t={};this.$slots[e.key]&&(t.default=t=>{var a,s;return null==(s=(a=this.$slots)[e.key])?void 0:s.call(a,t)}),this.$slots[e.key+"Header"]&&(t.header=t=>{var a,s;return null==(s=(a=this.$slots)[e.key+"Header"])?void 0:s.call(a,t)});let s={...e};return delete s.children,a(u,h({align:"center"},s,{prop:e.key}),{default:()=>[e.children?e.children.map((e=>this.renderTableColumn(e))):null],...t})},getList(){"function"==typeof this.api&&(this.loading=!0,this.api({...this.searchParams,pageNum:this.pageNum,pageSize:this.pageSize}).then((e=>{this.tableData=e.data.list,this.total=e.data.total,0===this.tableData.length&&this.pageNum>1&&(this.pageNum=1,this.getList())})).finally((()=>{this.loading=!1})))},search(){this.getList()},reset(){this.searchFormRef.resetFields(),this.pageNum=1,this.getList()},sizeChange(e){this.pageSize=e,this.getList()},currentChange(e){this.pageNum=e,this.getList()}}}),x=e({__name:"index",setup(e){const s=t([{label:"姓名",key:"name",search:!0,type:"input"},{label:"信息",key:"salary",children:[{label:"信息1",key:"info1"},{label:"信息2",key:"info2"}]},{label:"年龄",key:"age",width:600,search:!0,type:"select",data:[],async:()=>Promise.resolve([{label:"18-25岁",value:1},{label:"26-35岁",value:2}])},{label:"性别",key:"gender"},{label:"电话",key:"phone",search:!0,type:"input"},{label:"操作",key:"action",fixed:"right",width:200}]),i=e=>{let t={...e,page:e.pageNum};return f.success(`请求参数===>${JSON.stringify(t)}`),k(t).then((e=>({data:{list:e.data,total:100}})))};return(e,t)=>{const r=l,n=v;return c(),d(n,{columns:s.value,stripe:"",api:i,"max-height":"calc(100vh - 210px)"},{age:m((({row:e})=>[g("自定义年龄表格单元 ====> "+y(e),1)])),info2Header:m((e=>[g("自定义表头 ==== "+y(e.column.label),1)])),action:m((()=>[a(r,{size:"small",type:"danger",link:""},{default:m((()=>[g("删除")])),_:1}),a(r,{size:"small",link:"",type:"primary"},{default:m((()=>[g("编辑")])),_:1})])),_:1},8,["columns"])}}});export{x as default};
