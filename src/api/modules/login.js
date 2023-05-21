import request from "../request";

//用户登录
export function login(params) {
  return request({
    url: "/login",
    method: "post",
    params
  });
}
//获取用户信息
export function getUserInfo(params) {
  return request({
    url: "/getUserInfo",
    method: "post",
    params
  });
}
//退出登录
export function logout(params) {
  return request({
    url: "/logout",
    method: "post",
    params
  });
}
