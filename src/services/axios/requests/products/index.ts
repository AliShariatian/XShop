import axios from "../../configs/config";
import { fetchLimitProductsType } from "./type";

export const fetchAllProducts = () => {
   return axios.get("/products");
};

export const fetchLimitProducts = ({ limit, sortBy, order = "ascending" }: fetchLimitProductsType) => {
   const orderBy = order === "ascending" ? "asc" : "desc";
   return axios.get(`/products?_limit=${limit}&_sort=${sortBy}&_order=${orderBy}`);
};

export const fetchSingleProduct = (id: string) => {
   return axios.get(`/products/${id}`);
};
