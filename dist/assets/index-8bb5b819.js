import{b as U}from"./organization-5283201b.js";import{_ as q,d as v,r as E,l as a,o as g,c as y,k as e,g as d,i as t,F as M,q as O,h as $,m as c,t as j,v as w}from"./index-875f3fc9.js";const A={class:"page-content"},G={class:"page-search-box"},H={class:"page-tool-box"},J={class:"page-table-box"},K={class:"page-sorter-box"},Q={__name:"index",setup(R){const m=v(!1),V=v([{label:"无限责任职务",value:1},{label:"有限责任职务",value:2},{label:"两合职务",value:3},{label:"股份有限职务",value:4},{label:"股份两合职务",value:5}]),b=v(0),n=E({page:1,pageSize:10,name:"",type:"",legalPerson:"",creditCode:"",setupDateTime:""}),h=v([]),k=()=>{m.value=!0,U().then(p=>{const{code:o,data:_,message:u}=p;o==200?setTimeout(()=>{m.value=!1,h.value=_.list,b.value=_.total,w.Message.success("获取数据成功")},1e3):(m.value=!1,w.Message.error(u||"获取数据成功"))})},D=p=>{console.log(p)},T=p=>{console.log(p)};return k(),(p,o)=>{const _=a("PageTitle"),u=a("Input"),r=a("FormItem"),C=a("Option"),P=a("Select"),I=a("DatePicker"),s=a("Button"),z=a("Form"),f=a("Tooltip"),i=a("vxe-column"),x=a("ILink"),B=a("Divider"),F=a("vxe-table"),L=a("Spin"),N=a("Page");return g(),y("div",null,[e(_,{title:"职务管理",subTitle:"职务管理，职务负责人、职务成员、职务职责管理。"}),d("div",A,[d("div",G,[e(z,{model:n,"label-width":70,inline:""},{default:t(()=>[e(r,{label:"职务名称"},{default:t(()=>[e(u,{modelValue:n.name,"onUpdate:modelValue":o[0]||(o[0]=l=>n.name=l),clearable:"",placeholder:"请输入名称",style:{width:"200px"}},null,8,["modelValue"])]),_:1}),e(r,{label:"职务类型"},{default:t(()=>[e(P,{modelValue:n.type,"onUpdate:modelValue":o[1]||(o[1]=l=>n.type=l),placeholder:"请选择类型",clearable:"",filterable:"",style:{width:"200px"}},{default:t(()=>[(g(!0),y(M,null,O(V.value,l=>(g(),$(C,{key:l.value,value:l.value},{default:t(()=>[c(j(l.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"职务法人"},{default:t(()=>[e(u,{modelValue:n.legalPerson,"onUpdate:modelValue":o[2]||(o[2]=l=>n.legalPerson=l),clearable:"",style:{width:"200px"},placeholder:"请输入法人"},null,8,["modelValue"])]),_:1}),e(r,{label:"信用代码"},{default:t(()=>[e(u,{modelValue:n.creditCode,"onUpdate:modelValue":o[3]||(o[3]=l=>n.creditCode=l),clearable:"",style:{width:"200px"},placeholder:"请输入信用代码"},null,8,["modelValue"])]),_:1}),e(r,{label:"注册时间"},{default:t(()=>[e(I,{modelValue:n.setupDateTime,"onUpdate:modelValue":o[4]||(o[4]=l=>n.setupDateTime=l),clearable:"",type:"daterange",placeholder:"请选择注册时间",style:{width:"200px"}},null,8,["modelValue"])]),_:1}),e(r,{"label-width":0},{default:t(()=>[e(s,{type:"primary"},{default:t(()=>[c("查询")]),_:1}),e(s,{style:{"margin-left":"8px"}},{default:t(()=>[c("重置")]),_:1})]),_:1})]),_:1},8,["model"])]),d("div",H,[d("div",null,[e(s,{type:"primary"},{default:t(()=>[c("新增")]),_:1}),e(s,{type:"error",style:{"margin-left":"8px"}},{default:t(()=>[c("停用")]),_:1})]),d("div",null,[e(f,{content:"刷新",placement:"top"},{default:t(()=>[e(s,{shape:"circle",icon:"md-refresh"})]),_:1}),e(f,{content:"全屏",placement:"top"},{default:t(()=>[e(s,{shape:"circle",icon:"md-expand",style:{"margin-left":"8px"}})]),_:1}),e(f,{content:"导出",placement:"top"},{default:t(()=>[e(s,{shape:"circle",icon:"md-download",style:{"margin-left":"8px"}})]),_:1}),e(f,{content:"设置",placement:"top"},{default:t(()=>[e(s,{shape:"circle",icon:"md-settings",style:{"margin-left":"8px"}})]),_:1})])]),d("div",J,[e(F,{data:h.value,border:"",round:"",size:"small","auto-resize":"","sync-resize":"",stripe:"","show-overflow":"",height:"440",align:"left"},{default:t(()=>[e(i,{type:"checkbox",width:"50",align:"center"}),e(i,{field:"name",title:"职务名称",width:"200"}),e(i,{field:"principal",title:"负责人",width:"110"}),e(i,{field:"personNumber",title:"成员数量",width:"110"}),e(i,{field:"companyName",title:"所属公司",width:"300"}),e(i,{field:"departmentName",title:"所属部门",width:"200"}),e(i,{field:"descript",title:"职务描述",width:"auto"}),e(i,{title:"操作",fixed:"right",width:"120",align:"center"},{default:t(({row:l})=>[e(x,{type:"success",onClick:S=>D(l)},{default:t(()=>[c("编辑")]),_:2},1032,["onClick"]),e(B,{type:"vertical"}),e(x,{type:"error",onClick:S=>T(l)},{default:t(()=>[c("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(L,{size:"large",fix:"",show:m.value},null,8,["show"])]),d("div",K,[e(N,{total:b.value,"show-sizer":"","show-total":""},null,8,["total"])])])])}}},Y=q(Q,[["__scopeId","data-v-e0376c53"]]);export{Y as default};
