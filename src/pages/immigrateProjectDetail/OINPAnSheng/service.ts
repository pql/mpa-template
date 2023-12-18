import http from "../../../service/http";
import useAxios from "../../../hooks/useAxios";
import CustomRequestInterceptor from "../../../service/interceptors/CustomRequestInterceptor";
import { queryParams } from "../../../hooks/useLocationSearch";

const axios = useAxios();
const query = queryParams();

axios.interceptors.request.use((config: any) => {
  config = CustomRequestInterceptor(config);
  config.headers["Authorization"] = query.token || "";
  return config;
});

const BASE_URL_DEV = "http://192.168.110.107:8003/buildx";
const BASE_URL_PROD = "http://47.98.153.103:8003/buildx";

const BASE_URL = BASE_URL_PROD;

export default function () {
//   const getPDFBuffer = (url: string) => {
//     return http.get({
//       url: BASE_URL + "/publish/file/buffer/json",
//       data: { url },
//     });
//   };

  return {
    // getPDFBuffer,
  };
}
