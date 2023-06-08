import{g as N}from"./organization-00ad0e63.js";import{_ as q,d as v,r as E,l as a,o as g,c as y,k as e,g as d,i as t,F as M,q as O,h as $,m as c,t as j,v as w}from"./index-04e543a6.js";const A={class:"page-content"},G={class:"page-search-box"},H={class:"page-tool-box"},J={class:"page-table-box"},K={class:"page-sorter-box"},Q={__name:"index",setup(R){const m=v(!1),V=v([{label:"无限责任公司",value:1},{label:"有限责任公司",value:2},{label:"两合公司",value:3},{label:"股份有限公司",value:4},{label:"股份两合公司",value:5}]),h=v(0),n=E({page:1,pageSize:10,name:"",type:"",legalPerson:"",creditCode:"",setupDateTime:""}),b=v([]),k=()=>{m.value=!0,N().then(p=>{const{code:o,data:_,message:u}=p;o==200?setTimeout(()=>{m.value=!1,b.value=_.list,h.value=_.total,w.Message.success("获取数据成功")},1e3):(m.value=!1,w.Message.error(u||"获取数据成功"))})},D=p=>{console.log(p)},C=p=>{console.log(p)};return k(),(p,o)=>{const _=a("PageTitle"),u=a("Input"),r=a("FormItem"),T=a("Option"),P=a("Select"),I=a("DatePicker"),i=a("Button"),z=a("Form"),f=a("Tooltip"),s=a("vxe-column"),x=a("ILink"),B=a("Divider"),F=a("vxe-table"),L=a("Spin"),S=a("Page");return g(),y("div",null,[e(_,{title:"公司管理",subTitle:"公司，分子公司，法人，营业执照，经营范围，系统账号管理。"}),d("div",A,[d("div",G,[e(z,{model:n,"label-width":70,inline:""},{default:t(()=>[e(r,{label:"公司名称"},{default:t(()=>[e(u,{modelValue:n.name,"onUpdate:modelValue":o[0]||(o[0]=l=>n.name=l),clearable:"",placeholder:"请输入名称",style:{width:"200px"}},null,8,["modelValue"])]),_:1}),e(r,{label:"公司类型"},{default:t(()=>[e(P,{modelValue:n.type,"onUpdate:modelValue":o[1]||(o[1]=l=>n.type=l),placeholder:"请选择类型",clearable:"",filterable:"",style:{width:"200px"}},{default:t(()=>[(g(!0),y(M,null,O(V.value,l=>(g(),$(T,{key:l.value,value:l.value},{default:t(()=>[c(j(l.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"公司法人"},{default:t(()=>[e(u,{modelValue:n.legalPerson,"onUpdate:modelValue":o[2]||(o[2]=l=>n.legalPerson=l),clearable:"",style:{width:"200px"},placeholder:"请输入法人"},null,8,["modelValue"])]),_:1}),e(r,{label:"信用代码"},{default:t(()=>[e(u,{modelValue:n.creditCode,"onUpdate:modelValue":o[3]||(o[3]=l=>n.creditCode=l),clearable:"",style:{width:"200px"},placeholder:"请输入信用代码"},null,8,["modelValue"])]),_:1}),e(r,{label:"注册时间"},{default:t(()=>[e(I,{modelValue:n.setupDateTime,"onUpdate:modelValue":o[4]||(o[4]=l=>n.setupDateTime=l),clearable:"",type:"daterange",placeholder:"请选择注册时间",style:{width:"200px"}},null,8,["modelValue"])]),_:1}),e(r,{"label-width":0},{default:t(()=>[e(i,{type:"primary"},{default:t(()=>[c("查询")]),_:1}),e(i,{style:{"margin-left":"8px"}},{default:t(()=>[c("重置")]),_:1})]),_:1})]),_:1},8,["model"])]),d("div",H,[d("div",null,[e(i,{type:"primary"},{default:t(()=>[c("新增")]),_:1}),e(i,{type:"error",style:{"margin-left":"8px"}},{default:t(()=>[c("停用")]),_:1})]),d("div",null,[e(f,{content:"刷新",placement:"top"},{default:t(()=>[e(i,{shape:"circle",icon:"md-refresh"})]),_:1}),e(f,{content:"全屏",placement:"top"},{default:t(()=>[e(i,{shape:"circle",icon:"md-expand",style:{"margin-left":"8px"}})]),_:1}),e(f,{content:"导出",placement:"top"},{default:t(()=>[e(i,{shape:"circle",icon:"md-download",style:{"margin-left":"8px"}})]),_:1}),e(f,{content:"设置",placement:"top"},{default:t(()=>[e(i,{shape:"circle",icon:"md-settings",style:{"margin-left":"8px"}})]),_:1})])]),d("div",J,[e(F,{data:b.value,border:"",round:"",size:"small","auto-resize":"","sync-resize":"",stripe:"","show-overflow":"",height:"440",align:"left"},{default:t(()=>[e(s,{type:"checkbox",width:"50",align:"center"}),e(s,{field:"name",title:"公司名称",width:"200"}),e(s,{field:"legalPerson",title:"法人",width:"80"}),e(s,{field:"creditCode",title:"统一信用代码",width:"180"}),e(s,{field:"registeredCapital",title:"注册资本（万元）",width:"130"}),e(s,{field:"setupDateTime",title:"注册时间",width:"130"}),e(s,{field:"type",title:"公司类型",width:"200"}),e(s,{field:"email",title:"邮箱",width:"200"}),e(s,{field:"address",title:"公司地址",width:"auto"}),e(s,{title:"操作",fixed:"right",width:"120",align:"center"},{default:t(({row:l})=>[e(x,{type:"success",onClick:U=>D(l)},{default:t(()=>[c("编辑")]),_:2},1032,["onClick"]),e(B,{type:"vertical"}),e(x,{type:"error",onClick:U=>C(l)},{default:t(()=>[c("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(L,{size:"large",fix:"",show:m.value},null,8,["show"])]),d("div",K,[e(S,{total:h.value,"show-sizer":"","show-total":""},null,8,["total"])])])])}}},Y=q(Q,[["__scopeId","data-v-657cb6e3"]]);export{Y as default};
