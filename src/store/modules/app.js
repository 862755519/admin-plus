import { defineStore } from 'pinia'
import Cookies from "js-cookie";
//页面设置信息
const useSettingsStore = defineStore(
    'app',
    {
        state: () => ({
            sidebar: {
                // 侧边栏是否展开
                opened: Cookies.get("sidebarStatus")
                    ? !!+Cookies.get("sidebarStatus")
                    : true // sidebarStatus代表的状态：1：展开，0：关闭
            },
            device: "desktop" // 设备类型，桌面：desktop；手机：mobile；平板：tablet
        }),
        persist: false,
        actions: {
            toggleSideBar() {
                this.sidebar.opened = !this.sidebar.opened
                if (this.sidebar.opened) {
                    Cookies.set('sidebarStatus', 1)
                } else {
                    Cookies.set('sidebarStatus', 0)
                }
            },
            showSideBar() {
                Cookies.set("sidebarStatus", 1);
                this.sidebar.opened = true;
            },
            closeSideBar() {
                Cookies.set('sidebarStatus', 0)
                this.sidebar.opened = false
            },
            toggleDevice(device) {
                this.device = device
            },
        }
    })

export default useSettingsStore


