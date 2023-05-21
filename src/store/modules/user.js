import { defineStore } from 'pinia'
import { login, logout, getUserInfo } from '@/api/modules/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const useUserStore = defineStore(
    'user',
    {
        state: () => ({
            token: getToken(),
            name: '',
            avatar: '',
            roles: [],
            permissions: [],
        }),
        actions: {
            // 登录
            login(userInfo) {
                const { username, password } = userInfo;
                return new Promise((resolve, reject) => {
                    login({
                        username: username.trim(),
                        password
                    }).then(res => {
                        const { code, data } = res;
                        if (code == 200) {
                            // set token
                            this.token = data;
                            setToken(data);
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
                            // set name
                            this.name = data.username;
                            sessionStorage.setItem("name", data.username);
                            // set avatar
                            this.avatar = data.avatar;
                            sessionStorage.setItem("avatar", data.avatar);
                            // set roles
                            this.roles = data.roles;
                            sessionStorage.setItem("roles", data.roles);
                            // set roles
                            this.permissions = data.permissions;
                            sessionStorage.setItem("permissions", data.permissions);
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
                            this.roles = []
                            this.permissions = []
                            removeToken()
                            sessionStorage.clear();
                        }
                        resolve(res)
                    }).catch(error => {
                        reject(error)
                    })
                })
            }
        }
    })

export default useUserStore
