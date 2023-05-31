import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ViewUIPlus from 'view-ui-plus' //引入ViewUIPlus
import 'view-ui-plus/dist/styles/viewuiplus.css'

//引入vxe-table
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

import 'virtual:svg-icons-register'; // 引入svg icon注册脚本
import SvgIcon from "@/components/SvgIcon/index.vue";

// import global index.less
import "@/styles/index.less";

import "./permission";

//注册全局组件
import PageTitle from '@/components/PageTitle/index.vue'
import ColorIcon from '@/components/ColorIcon/index.vue'
import ILink from '@/components/ILink/index.vue'
 
function useTable (app) {
    app.use(VXETable)
}

const app = createApp(App)

app.use(router)
app.use(store)
app.use(ViewUIPlus)
app.use(useTable)
app.component("SvgIcon",SvgIcon)
app.component("PageTitle",PageTitle)
app.component("ColorIcon",ColorIcon)
app.component("ILink",ILink)
app.mount('#app')

