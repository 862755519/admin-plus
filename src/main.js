import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ViewUIPlus from "view-ui-plus"; //引入ViewUIPlus
import "view-ui-plus/dist/styles/viewuiplus.css";

//引入vxe-table
import VXETable from "vxe-table";
import "vxe-table/lib/style.css";

import "virtual:svg-icons-register"; // 引入svg icon注册脚本
import SvgIcon from "@/components/SvgIcon/index.vue";

// import global index.less
import "@/styles/index.less";

import "@/styles/vxe-table.scss";

import "./permission";

// 引入全局指令
import * as directives from "@/directives/index.js";

//注册全局组件
import PageTitle from "@/components/PageTitle/index.vue";
import PageSearch from "@/components/PageSearch/index.vue";
import PageTable from "@/components/PageTable/index.vue";
import ColorIcon from "@/components/ColorIcon/index.vue";
import BooleanSelect from "@/components/BooleanSelect/index.vue";
import BooleanRodio from "@/components/BooleanRodio/index.vue";
import ILink from "@/components/ILink/index.vue";

function useTable(app) {
  app.use(VXETable);
}

const app = createApp(App);

app.use(router);
app.use(store);
app.use(ViewUIPlus);
app.use(useTable);
app.component("SvgIcon", SvgIcon);
app.component("PageTitle", PageTitle);
app.component("PageSearch", PageSearch);
app.component("PageTable", PageTable);
app.component("ColorIcon", ColorIcon);
app.component("BooleanSelect", BooleanSelect);
app.component("BooleanRodio", BooleanRodio);
app.component("ILink", ILink);
app.mount("#app");

//注册自定义指令
Object.keys(directives).forEach((key) => {
  //Object.keys() 返回一个数组，值是所有可遍历属性的key名
  app.directive(key, directives[key]); //key是自定义指令名字；后面应该是自定义指令的值，值类型是string
});
