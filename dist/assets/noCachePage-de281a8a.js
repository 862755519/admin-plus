import{_ as k,r as v,n,o as C,c as I,l as e,h as m,j as t,p as s,q as S,s as P}from"./index-6a54087f.js";const f=u=>(S("data-v-615700ce"),u=u(),P(),u),R={class:"form-box"},U=f(()=>m("span",null,"开",-1)),B=f(()=>m("span",null,"关",-1)),F={__name:"noCachePage",setup(u){const l=v({input:"",select:"",radio:"male",checkbox:[],switch:!0,date:"",textarea:""});return(E,o)=>{const b=n("PageTitle"),c=n("Input"),d=n("FormItem"),_=n("Option"),x=n("Select"),V=n("DatePicker"),i=n("Radio"),h=n("RadioGroup"),p=n("Checkbox"),w=n("CheckboxGroup"),y=n("i-switch"),r=n("Button"),g=n("Form");return C(),I("div",null,[e(b,{title:"无缓存页面",subTitle:"此页面没有开启页面缓存，在下面表单中输入内容然后跳转其他页面返回查看效果。"}),m("div",R,[e(g,{model:l,"label-width":80},{default:t(()=>[e(d,{label:"输入框"},{default:t(()=>[e(c,{modelValue:l.input,"onUpdate:modelValue":o[0]||(o[0]=a=>l.input=a),style:{width:"300px"},placeholder:"Enter something..."},null,8,["modelValue"])]),_:1}),e(d,{label:"下拉选择"},{default:t(()=>[e(x,{modelValue:l.select,"onUpdate:modelValue":o[1]||(o[1]=a=>l.select=a),style:{width:"300px"}},{default:t(()=>[e(_,{value:"beijing"},{default:t(()=>[s("New York")]),_:1}),e(_,{value:"shanghai"},{default:t(()=>[s("London")]),_:1}),e(_,{value:"shenzhen"},{default:t(()=>[s("Sydney")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"日期选择"},{default:t(()=>[e(V,{type:"date",placeholder:"Select date",style:{width:"300px"},modelValue:l.date,"onUpdate:modelValue":o[2]||(o[2]=a=>l.date=a)},null,8,["modelValue"])]),_:1}),e(d,{label:"单选"},{default:t(()=>[e(h,{modelValue:l.radio,"onUpdate:modelValue":o[3]||(o[3]=a=>l.radio=a)},{default:t(()=>[e(i,{label:"male"},{default:t(()=>[s("Male")]),_:1}),e(i,{label:"female"},{default:t(()=>[s("Female")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"多选"},{default:t(()=>[e(w,{modelValue:l.checkbox,"onUpdate:modelValue":o[4]||(o[4]=a=>l.checkbox=a)},{default:t(()=>[e(p,{label:"Eat"}),e(p,{label:"Sleep"}),e(p,{label:"Run"}),e(p,{label:"Movie"})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"开关"},{default:t(()=>[e(y,{modelValue:l.switch,"onUpdate:modelValue":o[5]||(o[5]=a=>l.switch=a),size:"large"},{open:t(()=>[U]),close:t(()=>[B]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"文本域"},{default:t(()=>[e(c,{modelValue:l.textarea,"onUpdate:modelValue":o[6]||(o[6]=a=>l.textarea=a),type:"textarea",style:{width:"600px"},autosize:{minRows:4,maxRows:6},placeholder:"Enter something..."},null,8,["modelValue"])]),_:1}),e(d,null,{default:t(()=>[e(r,{type:"primary"},{default:t(()=>[s("提交")]),_:1}),e(r,{style:{"margin-left":"8px"}},{default:t(()=>[s("重置")]),_:1})]),_:1})]),_:1},8,["model"])])])}}},N=k(F,[["__scopeId","data-v-615700ce"]]);export{N as default};
