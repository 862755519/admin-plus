import request from "../request";

//获取公司列表
export function getCompanyList(data) {
  return request({
    url: "/getCompanyList",
    method: "post",
    data
  });
}
//获取部门列表
export function getDepartmentList(data) {
  return request({
    url: "/getDepartmentList",
    method: "post",
    data
  });
}
//获取职务列表
export function getDutyList(data) { 
  return request({
    url: "/getDutyList",
    method: "post",
    data
  });
}
//获取用户列表
export function getUserList(data) { 
  return request({
    url: "/getUserList",
    method: "post",
    data
  });
}