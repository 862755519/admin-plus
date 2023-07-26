import { defineStore } from 'pinia'
import { login, logout, getUserInfo, getUserAuthority } from '@/api/modules/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import usePermissionStore from "@/store/modules/permission";
import useTabsViewStore from "@/store/modules/tabsView";
const useUserStore = defineStore(
    'user',
    {
        state: () => ({
            token: getToken(),
            userInfo: null, //用户信息
            roles: [], //角色信息
            menuList: [],//菜单列表
            permissions: [], //按钮权限
        }),
        persist: {
            storage: localStorage,
            paths: ['userInfo', 'roles', 'menuList', 'permissions'],
            debug: true
        },
        actions: {
            // 登录
            login(userInfo) {
                const { username, password } = userInfo;
                return new Promise((resolve, reject) => {
                    login({
                        username: username.trim(),
                        password
                    }).then(async res => {
                        const { code, data } = res;
                        if (code == 200) {
                            // set token
                            this.token = data.token;
                            setToken(data.token);
                            // 获取个人信息
                            await this.getUserInfo();
                            // 获取路由权限信息
                            await this.getUserAuthority();
                        }
                        resolve(res);
                    }).catch(err => {
                        reject(err)
                    })
                })
            },
            // 获取用户信息
            getUserInfo() {
                return new Promise((resolve, reject) => {
                    getUserInfo().then(res => {
                        const { code, data } = res;
                        if (code == 200) {
                            // set userInfo
                            this.userInfo = data;
                        }
                        resolve(res)
                    }).catch(err => {
                        reject(err)
                    })
                })
            },
            //获取用户权限信息
            getUserAuthority() {
                return new Promise((resolve, reject) => {
                    getUserAuthority().then(res => {
                        const { code, data } = res;
                        if (code == 200) {
                            // set roles
                            this.roles = data.roles;
                            // set permissions
                            this.permissions = data.permissions;
                            // set menuList
                            this.menuList = data.menuList;
                        }
                        resolve(res)
                    }).catch(err => {
                        reject(err)
                    })
                })
            },
            // 退出系统
            logout() {
                return new Promise((resolve, reject) => {
                    logout().then((res) => {
                        const { code } = res;
                        if (code == 200) {
                            this.token = ''
                            this.userInfo = null
                            this.roles = []
                            this.menuList = []
                            this.permissions = []
                            //清除token
                            removeToken()
                            sessionStorage.clear();
                            localStorage.clear();
                            //清除路由
                            const permissionStore = usePermissionStore();
                            permissionStore.resetRoutes();
                        }
                        resolve(res)
                    }).catch(error => {
                        reject(error)
                    })
                })
            },
        }
    })

export default useUserStore
