import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ViewUIPlus from 'view-ui-plus' //引入ViewUIPlus
import 'view-ui-plus/dist/styles/viewuiplus.css'

import 'virtual:svg-icons-register'; // 引入svg icon注册脚本
import SvgIcon from "@/components/SvgIcon/index.vue";

// import global index.less
import "@/styles/index.less";

import "./permission";


const app = createApp(App)

app.use(router)
app.use(store)
app.use(ViewUIPlus)
app.component("SvgIcon",SvgIcon)
app.mount('#app')
