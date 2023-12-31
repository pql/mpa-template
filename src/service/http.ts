import { AxiosResponse } from "axios";
import { App } from "vue";
import request from "./axios.config";

export interface HttpOption {
  url: string;
  data?: any;
  method?: string;
  headers?: any;
  beforeRequest?: () => void;
  afterRequest?: () => void;
}

export interface Response<T = any> {
  totalSize: number | 0;
  code: number;
  msg: string;
  data: T;
}

function http<T = any>({
  url,
  data,
  method,
  headers,
  beforeRequest,
  afterRequest,
}: HttpOption) {
  const successHandler = (res: AxiosResponse<Response<T>>) => {
    if (res.status === 200) {
      if (res.data.code === 200) {
        return res.data;
      }
    }
    throw new Error(res.data.msg || "请求失败，未知异常");
  };
  const failHandler = (error: Response<Error>) => {
    afterRequest && afterRequest();
    throw new Error(error.msg || "请求失败，未知异常");
  };
  beforeRequest && beforeRequest();
  method = method || "GET";
  const params = Object.assign(
    typeof data === "function" ? data() : data || {},
    {}
  );
  return method === "GET"
    ? request.get(url, { params }).then(successHandler, failHandler)
    : method === "POST"
    ? request
        .post(url, params, { headers: headers })
        .then(successHandler, failHandler)
    : method === "PUT"
    ? request
        .put(url, params, { headers: headers })
        .then(successHandler, failHandler)
    : method === "DELETE"
    ? request.delete(url, params).then(successHandler, failHandler)
    : request.get(url, { params }).then(successHandler, failHandler);
}

export function $get<T = any>({
  url,
  data,
  method = "GET",
  beforeRequest,
  afterRequest,
}: HttpOption): Promise<Response<T>> {
  return http<T>({
    url,
    method,
    data,
    beforeRequest,
    afterRequest,
  });
}

export function $post<T = any>({
  url,
  data,
  method = "POST",
  headers,
  beforeRequest,
  afterRequest,
}: HttpOption): Promise<Response<T>> {
  return http<T>({
    url,
    method,
    data,
    headers,
    beforeRequest,
    afterRequest,
  });
}

export function $put<T = any>({
  url,
  data,
  method = "PUT",
  headers,
  beforeRequest,
  afterRequest,
}: HttpOption): Promise<Response<T>> {
  return http<T>({
    url,
    method,
    data,
    headers,
    beforeRequest,
    afterRequest,
  });
}

export function $delete<T = any>({
  url,
  data,
  method = "DELETE",
  headers,
  beforeRequest,
  afterRequest,
}: HttpOption): Promise<Response<T>> {
  return http<T>({
    url,
    method,
    data,
    headers,
    beforeRequest,
    afterRequest,
  });
}

function install(app: App): void {
  app.config.globalProperties.$http = http;
  app.config.globalProperties.$get = $get;
  app.config.globalProperties.$post = $post;
  app.config.globalProperties.$put = $put;
  app.config.globalProperties.$del = $delete;
}

export default {
  install,
  get: $get,
  post: $post,
  delete: $delete,
  put: $put,
};
