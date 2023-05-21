import { defineStore } from 'pinia'
//导入默认配置文件
import defaultSettings from '@/settings'
//页面设置信息
const useSettingsStore = defineStore(
    'settings',
    {
        state: () => ({
            // layout属性
            ...defaultSettings.layout,
            // 动态标题，只会在开启showDynamicTitle=true后起作用
            showDynamicTitle: defaultSettings.showDynamicTitle,
            dynamicTitle: ""
        }),
        actions: {
            // 修改布局设置
            changeLayoutSetting(key, value) {
                if (this.hasOwnProperty(key)) {
                    this[key] = value
                }
            },
            // 保存动态标题
            changeDynamicTitle(dynamicTitle) {
                this.dynamicTitle = dynamicTitle;
            }
        }
    })

export default useSettingsStore
