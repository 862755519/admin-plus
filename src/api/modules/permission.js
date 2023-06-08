import request from "../request";

//获取操作日志
export function getLogList() {
  return request({
    url: "/getLogList",
    method: "post"
  });
}

