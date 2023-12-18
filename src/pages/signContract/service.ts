import http from "../../service/http";
import useAxios from "../../hooks/useAxios";
import CustomRequestInterceptor from "../../service/interceptors/CustomRequestInterceptor";
import { queryParams } from "../../hooks/useLocationSearch";

const axios = useAxios();
const query = queryParams();

axios.interceptors.request.use((config: any) => {
  config = CustomRequestInterceptor(config);
  config.headers["Authorization"] =
    query.token ||
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzQzOTc3NzIsImRhdGEiOnsiaWQiOjY4LCJsb2dpbl91c2VyX2tleSI6IjkyMzcwMzkwMzg0Mzc3OTM5NSIsImVtYWlsIjoiMTEwMTE5Mjk5MUBxcS5jb20iLCJuYW1lIjoiRXJpYyBtaWRkbGUgbmFtZSBQIiwidHMiOjE2NzE4MDU3NzI3MzF9LCJpYXQiOjE2NzE4MDU3NzJ9.DSqphQnuYtwWo7Zn4LMmRpfsxqi9i-lutzC_2T9ZxMo";
  return config;
});

const BASE_URL_DEV = "http://192.168.110.107:8003/buildx";
const BASE_URL_PROD = "http://47.98.153.103:8003/buildx";

const BASE_URL = BASE_URL_PROD;

export default function () {
  const getPDFBuffer = (url: string) => {
    return http.get({
      url: BASE_URL + "/publish/file/buffer/json",
      data: { url },
    });
  };
  const getProductInfo = (productId: String | Number) => {
    return http.get({
      url: BASE_URL + "/common/product/" + productId,
    });
  };

  const getSealList = () => {
    return http.get({
      url: BASE_URL + "/investor/seal/list",
    });
  };

  return {
    getPDFBuffer,
    getSealList,
    getProductInfo,
  };
}
