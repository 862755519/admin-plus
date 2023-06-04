import request from "../request";

//用户登录
export function login(data) {
  return request({
    url: "/login",
    method: "post",
    data
  });
}
//获取用户信息
export function getUserInfo() {
  return request({
    url: "/getUserInfo",
    method: "post"
  });
}
//获取用户权限信息
export function getUserAuthority() {
  return request({
    url: "/getUserAuthority",
    method: "post"
  });
}
//退出登录
export function logout() {
  return request({
    url: "/logout",
    method: "post"
  });
}
