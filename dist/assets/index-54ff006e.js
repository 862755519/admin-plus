import{c as j}from"./organization-9cd78e13.js";import{_ as q,d as h,r as E,n as a,o as g,c as w,l as e,h as d,j as t,F as M,x as O,i as $,p as c,t as A,v as V,q as G,s as H}from"./index-6a54087f.js";const J=m=>(G("data-v-78c62c33"),m=m(),H(),m),K={class:"page-content"},Q={class:"page-search-box"},R={class:"page-tool-box"},W={class:"page-table-box"},X=J(()=>d("span",null,"男",-1)),Y={class:"page-sorter-box"},Z={__name:"index",setup(m){const _=h(!1),k=h([{label:"无限责任用户",value:1},{label:"有限责任用户",value:2},{label:"两合用户",value:3},{label:"股份有限用户",value:4},{label:"股份两合用户",value:5}]),b=h(0),s=E({page:1,pageSize:10,name:"",type:"",legalPerson:"",creditCode:"",setupDateTime:""}),x=h([]),D=()=>{_.value=!0,j().then(p=>{const{code:n,data:f,message:u}=p;n==200?setTimeout(()=>{_.value=!1,x.value=f.list,b.value=f.total,V.Message.success("获取数据成功")},1e3):(_.value=!1,V.Message.error(u||"获取数据成功"))})},T=p=>{console.log(p)},C=p=>{console.log(p)};return D(),(p,n)=>{const f=a("PageTitle"),u=a("Input"),r=a("FormItem"),I=a("Option"),P=a("Select"),S=a("DatePicker"),i=a("Button"),N=a("Form"),v=a("Tooltip"),o=a("vxe-column"),y=a("ILink"),z=a("Divider"),B=a("vxe-table"),F=a("Spin"),L=a("Page");return g(),w("div",null,[e(f,{title:"用户管理",subTitle:"用户管理，用户负责人、用户成员、用户职责管理。"}),d("div",K,[d("div",Q,[e(N,{model:s,"label-width":70,inline:""},{default:t(()=>[e(r,{label:"用户名称"},{default:t(()=>[e(u,{modelValue:s.name,"onUpdate:modelValue":n[0]||(n[0]=l=>s.name=l),clearable:"",placeholder:"请输入名称",style:{width:"200px"}},null,8,["modelValue"])]),_:1}),e(r,{label:"用户类型"},{default:t(()=>[e(P,{modelValue:s.type,"onUpdate:modelValue":n[1]||(n[1]=l=>s.type=l),placeholder:"请选择类型",clearable:"",filterable:"",style:{width:"200px"}},{default:t(()=>[(g(!0),w(M,null,O(k.value,l=>(g(),$(I,{key:l.value,value:l.value},{default:t(()=>[c(A(l.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"用户法人"},{default:t(()=>[e(u,{modelValue:s.legalPerson,"onUpdate:modelValue":n[2]||(n[2]=l=>s.legalPerson=l),clearable:"",style:{width:"200px"},placeholder:"请输入法人"},null,8,["modelValue"])]),_:1}),e(r,{label:"信用代码"},{default:t(()=>[e(u,{modelValue:s.creditCode,"onUpdate:modelValue":n[3]||(n[3]=l=>s.creditCode=l),clearable:"",style:{width:"200px"},placeholder:"请输入信用代码"},null,8,["modelValue"])]),_:1}),e(r,{label:"注册时间"},{default:t(()=>[e(S,{modelValue:s.setupDateTime,"onUpdate:modelValue":n[4]||(n[4]=l=>s.setupDateTime=l),clearable:"",type:"daterange",placeholder:"请选择注册时间",style:{width:"200px"}},null,8,["modelValue"])]),_:1}),e(r,{"label-width":0},{default:t(()=>[e(i,{type:"primary"},{default:t(()=>[c("查询")]),_:1}),e(i,{style:{"margin-left":"8px"}},{default:t(()=>[c("重置")]),_:1})]),_:1})]),_:1},8,["model"])]),d("div",R,[d("div",null,[e(i,{type:"primary"},{default:t(()=>[c("新增")]),_:1}),e(i,{type:"error",style:{"margin-left":"8px"}},{default:t(()=>[c("停用")]),_:1})]),d("div",null,[e(v,{content:"刷新",placement:"top"},{default:t(()=>[e(i,{shape:"circle",icon:"md-refresh"})]),_:1}),e(v,{content:"全屏",placement:"top"},{default:t(()=>[e(i,{shape:"circle",icon:"md-expand",style:{"margin-left":"8px"}})]),_:1}),e(v,{content:"导出",placement:"top"},{default:t(()=>[e(i,{shape:"circle",icon:"md-download",style:{"margin-left":"8px"}})]),_:1}),e(v,{content:"设置",placement:"top"},{default:t(()=>[e(i,{shape:"circle",icon:"md-settings",style:{"margin-left":"8px"}})]),_:1})])]),d("div",W,[e(B,{data:x.value,border:"",round:"",size:"small","auto-resize":"","sync-resize":"",stripe:"","show-overflow":"",height:"440",align:"left"},{default:t(()=>[e(o,{type:"checkbox",width:"50",align:"center"}),e(o,{field:"name",title:"姓名",width:"80"}),e(o,{field:"mobile",title:"电话",width:"100"}),e(o,{field:"email",title:"邮箱",width:"150"}),e(o,{field:"sex",title:"性别",width:"60"},{default:t(()=>[X]),_:1}),e(o,{field:"dutyName",title:"职务",width:"150"}),e(o,{field:"jobCode",title:"工号",width:"120"}),e(o,{field:"companyName",title:"所属公司",width:"200"}),e(o,{field:"departmentName",title:"所属部门",width:"200"}),e(o,{field:"supervisorName",title:"主管",width:"100"}),e(o,{field:"address",title:"住址",width:"300"}),e(o,{field:"descript",title:"用户描述","min-width":"100",width:"auto"}),e(o,{title:"操作",fixed:"right",width:"120",align:"center"},{default:t(({row:l})=>[e(y,{type:"success",onClick:U=>T(l)},{default:t(()=>[c("编辑")]),_:2},1032,["onClick"]),e(z,{type:"vertical"}),e(y,{type:"error",onClick:U=>C(l)},{default:t(()=>[c("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(F,{size:"large",fix:"",show:_.value},null,8,["show"])]),d("div",Y,[e(L,{total:b.value,"show-sizer":"","show-total":""},null,8,["total"])])])])}}},le=q(Z,[["__scopeId","data-v-78c62c33"]]);export{le as default};
