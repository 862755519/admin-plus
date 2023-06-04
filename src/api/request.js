import axios from "axios";
import { Message } from "view-ui-plus";
import { getToken } from "@/utils/auth";

// 设置axios跨域访问
axios.defaults.withCredentials = true; // 设置cross跨域 并设置访问权限 允许跨域携带cookie信息
axios.defaults.crossDomain = true; // 设置axios跨域的配置

// 创建axios实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,  //基础路径
  timeout: 3 * 60 * 1000 // request timeout
});

// 请求拦截
service.interceptors.request.use(
  config => {
    // 发送请求之前做什么操作
    config.headers["Authorization"] = getToken();
    return config;
  },
  error => {
    // do something with request error
    return Promise.reject(error);
  }
);

// 响应拦截

service.interceptors.response.use(
  response => {
    const { status, data } = response;
    if (status == 200) {
      return Promise.resolve(data);
    } else {
      return Promise.reject(new Error(res.message || "Error"));
    }
  },
  error => {
    Message.error({
      content: error.message
    });
    return Promise.reject(error);
  }
);

export default service;
