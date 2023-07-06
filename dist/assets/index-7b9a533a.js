import{a as U}from"./organization-dab613f1.js";import{_ as E,d as v,r as M,n as a,o as g,c as y,l as e,h as i,j as t,F as O,x as $,i as j,p as c,t as q,v as w}from"./index-573bd06d.js";const A={class:"page-content"},G={class:"page-search-box"},H={class:"page-tool-box"},J={class:"page-table-box"},K={class:"page-sorter-box"},Q={__name:"index",setup(R){const m=v(!1),V=v([{label:"无限责任部门",value:1},{label:"有限责任部门",value:2},{label:"两合部门",value:3},{label:"股份有限部门",value:4},{label:"股份两合部门",value:5}]),b=v(0),n=M({page:1,pageSize:10,name:"",type:"",legalPerson:"",creditCode:"",setupDateTime:""}),h=v([]),D=()=>{m.value=!0,U().then(p=>{const{code:o,data:_,message:u}=p;o==200?setTimeout(()=>{m.value=!1,h.value=_.list,b.value=_.total,w.Message.success("获取数据成功")},1e3):(m.value=!1,w.Message.error(u||"获取数据成功"))})},k=p=>{console.log(p)},T=p=>{console.log(p)};return D(),(p,o)=>{const _=a("PageTitle"),u=a("Input"),r=a("FormItem"),C=a("Option"),P=a("Select"),I=a("DatePicker"),s=a("Button"),z=a("Form"),f=a("Tooltip"),d=a("vxe-column"),x=a("ILink"),B=a("Divider"),F=a("vxe-table"),L=a("Spin"),S=a("Page");return g(),y("div",null,[e(_,{title:"部门管理",subTitle:"部门管理，部门负责人、部门成员、部门职责管理。"}),i("div",A,[i("div",G,[e(z,{model:n,"label-width":70,inline:""},{default:t(()=>[e(r,{label:"部门名称"},{default:t(()=>[e(u,{modelValue:n.name,"onUpdate:modelValue":o[0]||(o[0]=l=>n.name=l),clearable:"",placeholder:"请输入名称",style:{width:"200px"}},null,8,["modelValue"])]),_:1}),e(r,{label:"部门类型"},{default:t(()=>[e(P,{modelValue:n.type,"onUpdate:modelValue":o[1]||(o[1]=l=>n.type=l),placeholder:"请选择类型",clearable:"",filterable:"",style:{width:"200px"}},{default:t(()=>[(g(!0),y(O,null,$(V.value,l=>(g(),j(C,{key:l.value,value:l.value},{default:t(()=>[c(q(l.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"部门法人"},{default:t(()=>[e(u,{modelValue:n.legalPerson,"onUpdate:modelValue":o[2]||(o[2]=l=>n.legalPerson=l),clearable:"",style:{width:"200px"},placeholder:"请输入法人"},null,8,["modelValue"])]),_:1}),e(r,{label:"信用代码"},{default:t(()=>[e(u,{modelValue:n.creditCode,"onUpdate:modelValue":o[3]||(o[3]=l=>n.creditCode=l),clearable:"",style:{width:"200px"},placeholder:"请输入信用代码"},null,8,["modelValue"])]),_:1}),e(r,{label:"注册时间"},{default:t(()=>[e(I,{modelValue:n.setupDateTime,"onUpdate:modelValue":o[4]||(o[4]=l=>n.setupDateTime=l),clearable:"",type:"daterange",placeholder:"请选择注册时间",style:{width:"200px"}},null,8,["modelValue"])]),_:1}),e(r,{"label-width":0},{default:t(()=>[e(s,{type:"primary"},{default:t(()=>[c("查询")]),_:1}),e(s,{style:{"margin-left":"8px"}},{default:t(()=>[c("重置")]),_:1})]),_:1})]),_:1},8,["model"])]),i("div",H,[i("div",null,[e(s,{type:"primary"},{default:t(()=>[c("新增")]),_:1}),e(s,{type:"error",style:{"margin-left":"8px"}},{default:t(()=>[c("停用")]),_:1})]),i("div",null,[e(f,{content:"刷新",placement:"top"},{default:t(()=>[e(s,{shape:"circle",icon:"md-refresh"})]),_:1}),e(f,{content:"全屏",placement:"top"},{default:t(()=>[e(s,{shape:"circle",icon:"md-expand",style:{"margin-left":"8px"}})]),_:1}),e(f,{content:"导出",placement:"top"},{default:t(()=>[e(s,{shape:"circle",icon:"md-download",style:{"margin-left":"8px"}})]),_:1}),e(f,{content:"设置",placement:"top"},{default:t(()=>[e(s,{shape:"circle",icon:"md-settings",style:{"margin-left":"8px"}})]),_:1})])]),i("div",J,[e(F,{data:h.value,border:"",round:"",size:"small","auto-resize":"","sync-resize":"",stripe:"","show-overflow":"",height:"440",align:"left"},{default:t(()=>[e(d,{type:"checkbox",width:"50",align:"center"}),e(d,{field:"name",title:"部门名称",width:"200"}),e(d,{field:"principal",title:"部门负责人",width:"110"}),e(d,{field:"personNumber",title:"成员数量",width:"110"}),e(d,{field:"companyName",title:"所属公司",width:"300"}),e(d,{field:"descript",title:"部门描述",width:"auto"}),e(d,{title:"操作",fixed:"right",width:"120",align:"center"},{default:t(({row:l})=>[e(x,{type:"success",onClick:N=>k(l)},{default:t(()=>[c("编辑")]),_:2},1032,["onClick"]),e(B,{type:"vertical"}),e(x,{type:"error",onClick:N=>T(l)},{default:t(()=>[c("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(L,{size:"large",fix:"",show:m.value},null,8,["show"])]),i("div",K,[e(S,{total:b.value,"show-sizer":"","show-total":""},null,8,["total"])])])])}}},Y=E(Q,[["__scopeId","data-v-4245cbdd"]]);export{Y as default};
