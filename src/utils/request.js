import axios from "axios";
import { Message } from "element-ui";
import qs from "qs";
/**
 * 拦截器
 * 创建 axios 赋值给service
 */
const service = axios.create({
  baseURL: "http://127.0.0.1:8081/",
  timeout: 1000,
  transformRequest: [
    function(data, headers) {
      // Do whatever you want to transform the data
      data = qs.stringify(data);
      return data;
    }
  ],
  headers: { "Content-Type": "application/x-www-form-urlencoded" }
});
// Add a request interceptor
service.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
service.interceptors.response.use(
  function(response) {
    if (response.data.code != "0" && response.data.code != "200") {
      Message({
        showClose: true,
        message: response.data.msg,
        type: "error"
      });
      return Promise.reject(response);
    } else {
      return response;
    }
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);
export default service;
