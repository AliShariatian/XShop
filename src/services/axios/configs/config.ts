import axios from "axios";
import baseURL from "./baseURL";
import requestInterceptor from "../interceptors/request";
import responseInterceptor from "../interceptors/response";

const instance = axios.create({ baseURL });

// Global error handling
requestInterceptor(instance);
responseInterceptor(instance);

export default instance;
