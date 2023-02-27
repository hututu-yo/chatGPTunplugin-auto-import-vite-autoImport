// import axios from "axios";
// import { ElMessage, ElLoading } from "element-plus";
// // import store from "@/stores/user";
// import { userStore } from "@/stores/user.js";
// import { useRouter } from "vue-router";

// import { randomString, objectEmptyFilter } from "../utils/index";

// let user = userStore();
// const router = useRouter();

// // 导出弹窗 loading
// let loadingInstance = null;

// /**
//  * 错误码对应的提示语
//  */
// const ERROR_MESSAE_MAP = {
//   400: "请求错误",
//   500: "服务器错误",
//   404: "服务器繁忙",
// };

// /**
//  * 错误提示Toast
//  * @param {string} message 提示语
//  */
// const errorToast = (message) => {
//   ElMessage({
//     message,
//     type: "warning",
//   });
// };

// /**
//  * 请求默认参数抓取
//  */
// const deviceID = window.localStorage.getItem("__DS_DEVICE_ID__") || "";

// /**
//  * 请求实例构建
//  */
// const axiosInstance = axios.create({
//   timeout: 60000,
// });

// /**
//  * 设置通用请求头
//  * X-TOKEN 用户登录态
//  * X-PLATFORM 请求载体
//  */
// axiosInstance.defaults.headers.common["X-PLATFORM"] = "ADMIN-FINANCE";

// /**
//  * 请求预处理
//  * 1. 设置请求trace-id，请求结果返回时也会带上同一个trace-id便于请求追踪
//  * @TODO 添加请求发起的上报
//  */
// const beforeRequest = (config) => {
//   const newConfig = config;
//   if (user.token) {
//     // token 信息
//     newConfig.headers["Authorization"] = "Bearer " + user.token;
//   } else {
//     // 未登录
//     newConfig.headers["Authorization"] = "";
//   }
//   newConfig.headers["X-TRACE-ID"] = randomString(32, "Aa#");
//   newConfig.headers["DS-DEVICE-ID"] =
//     deviceID || window.localStorage.getItem("__DS_DEVICE_ID__") || "";
//   return newConfig;
// };

// axiosInstance.interceptors.request.use(beforeRequest);

// /**
//  * 请求回包处理
//  * @TODO 请求回包上报
//  */
// const afterResponse = (response) => {
//   console.log("response: ", response);
//   //  关闭导出 loading
//   if (loadingInstance) {
//     loadingInstance.close();
//   }
//   const { status, data } = response;

//   const code = String(status);

//   if ((code !== "200" || code !== "204") && data.message) {
//     ElMessage.error(`${data.message}`);
//   }

//   return { ...response, code: 200 };
// };

// /**
//  * 请求错误处理
//  * @property {function} error.response.config.failHook - 可选，如果定义failHook方法则不会走默认的错误处理
//  * @TODO 请求异常上报
//  */
// const errorResponse = (error) => {
//   //  关闭导出 loading
//   if (loadingInstance) {
//     loadingInstance.close();
//   }

//   if (!error.response) {
//     return Promise.reject(error);
//   }

//   const { data, status, config } = error.response;

//   if (config.failHook) {
//     return config.failHook({ status, data });
//   }

//   if (ERROR_MESSAE_MAP[status]) {
//     // errorToast(ERROR_MESSAE_MAP[status]);
//     errorToast(data.message);
//   }

//   /**
//    * 状态码为401时需要重新登录
//    */
//   if (status === 401) {
//     return Promise.reject(new Error("请重新登录"));
//   }
//   if (status === 403) {
//     ElMessage.error("请重新登录");
//     return Promise.reject(new Error("无权限"));
//   }

//   return Promise.reject(error.response);
// };

// axiosInstance.interceptors.response.use(afterResponse, errorResponse);

// /**
//  * 通用请求生成器
//  * @param {Object} baseInfo
//  * @param {string} baseInfo.name
//  * @param {string} baseInfo.method
//  * @param {string} baseInfo.url
//  * @returns
//  */
// const requestCreator = (baseInfo) => {
//   /**
//    * @param {Object} options
//    * @param {Boolean} options.emptyFilter
//    * @param {Boolean} options.hideResToast
//    * @param {Object} options.data
//    * @param {Object} options.headers
//    * @param {Function} options.failHook
//    */
//   return (options) => {
//     // 全局导出添加 loading
//     if (options.responseType === "arraybuffer") {
//       loadingInstance = ElLoading.service(options);
//     }

//     if (options.emptyFilter && options.data) {
//       options.data = objectEmptyFilter(options.data);
//     }
//     return axiosInstance({ ...baseInfo, ...options });
//   };
// };

// export { axiosInstance as Request, requestCreator };

// // export default axiosInstance;

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { ElMessage, ElLoading } from "element-plus";
import { userStore } from "@/stores/user.js";
import { useRouter } from "vue-router";
import { randomString, objectEmptyFilter } from "../utils/index";

interface ErrorResponse {
  status: number;
  data: any;
}

interface RequestConfig extends AxiosRequestConfig {
  failHook?: (error: ErrorResponse) => Promise<any>;
  emptyFilter?: boolean;
  hideResToast?: boolean;
  headers?: any;
}

let user = userStore();
const router = useRouter();

let loadingInstance: any = null;

const ERROR_MESSAE_MAP: Record<number, string> = {
  400: "请求错误",
  500: "服务器错误",
  404: "服务器繁忙",
};

const errorToast = (message: string) => {
  ElMessage({
    message,
    type: "warning",
  });
};

const deviceID = window.localStorage.getItem("__DS_DEVICE_ID__") || "";

const axiosInstance: AxiosInstance = axios.create({
  timeout: 60000,
});

axiosInstance.defaults.headers.common["X-PLATFORM"] = "ADMIN-FINANCE";

const beforeRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const newConfig: AxiosRequestConfig = config;
  if (user.token) {
    newConfig.headers["Authorization"] = "Bearer " + user.token;
  } else {
    newConfig.headers["Authorization"] = "";
  }
  newConfig.headers["X-TRACE-ID"] = randomString(32, "Aa#");
  newConfig.headers["DS-DEVICE-ID"] =
    deviceID || window.localStorage.getItem("__DS_DEVICE_ID__") || "";
  return newConfig;
};

axiosInstance.interceptors.request.use(beforeRequest);

const afterResponse = (response: AxiosResponse): AxiosResponse => {
  console.log("response: ", response);
  if (loadingInstance) {
    loadingInstance.close();
  }
  const { status, data } = response;

  const code: string = String(status);

  if ((code !== "200" || code !== "204") && data.message && !hideResToast) {
    ElMessage.error(`${data.message}`);
  }

  return { ...response, code: 200 };
};

const errorResponse = (error: any): Promise<ErrorResponse> => {
  if (loadingInstance) {
    loadingInstance.close();
  }

  if (!error.response) {
    return Promise.reject(error);
  }

  const { data, status, config } = error.response;

  if (config.failHook) {
    return config.failHook({ status, data });
  }

  if (ERROR_MESSAE_MAP[status]) {
    errorToast(data.message);
  }

  if (status === 401) {
    return Promise.reject(new Error("请重新登录"));
  }
  if (status === 403) {
    ElMessage.error("请重新登录");
    return Promise.reject(new Error("无权限"));
  }

  return Promise.reject(error.response);
};

axiosInstance.interceptors.response.use(afterResponse, errorResponse);

const requestCreator = (baseInfo: AxiosRequestConfig) => {
  return (options: RequestConfig) => {
    if (options.responseType === "arraybuffer") {
      loadingInstance = ElLoading.service(options);
    }

    if (options.emptyFilter && options.data) {
      options.data = objectEmptyFilter(options.data);
    }
    return axiosInstance({ ...baseInfo, ...options });
  };
};

export { axiosInstance as Request, requestCreator };
