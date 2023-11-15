import axios from "axios";
import { baseUrl } from "./url.contants";

const axiosInstance = axios.create({ baseURL: baseUrl });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response) || "General Axios Error happend"
    )
);

export default axiosInstance;
