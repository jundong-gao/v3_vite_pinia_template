import{t as e,a,b as n,s as t}from"./test-CQ8c3ZcX.js";import{d as s,a as c,o as l,c as o,e as u,w as r,f as i,F as f,b as d,E as m}from"./index-B98WcYUs.js";const k=d("hr",null,null,-1),g=s({__name:"index",setup(s){function d(){e({page:20,pageSize:10}).then((e=>{m.success(JSON.stringify(e.data))}))}let g;function h(){g&&g.cancel("取消请求"),g=a.CancelToken.source(),n({time:1e4,cancelToken:g.token}).then((e=>{})).catch((e=>{m.error(e.message)}))}function p(){n({time:1e4}).then((e=>{})).catch((e=>{m.error(e.message)}))}function _(){t.cancelAllRequest("取消全部请求")}return(e,a)=>{const n=c("el-button");return l(),o(f,null,[u(n,{onClick:d},{default:r((()=>[i("普通发送请求")])),_:1}),k,u(n,{onClick:h},{default:r((()=>[i("自动取消上一个未完成的请求")])),_:1}),u(n,{onClick:p},{default:r((()=>[i("发送等待时长较长的请求")])),_:1}),u(n,{onClick:_},{default:r((()=>[i("取消全部请求")])),_:1})],64)}}});export{g as default};