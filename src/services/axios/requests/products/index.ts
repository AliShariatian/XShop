import axios from "../../configs/config";
import { fetchLimitProductsType } from "./type";

export const fetchAllProducts = () => {
   return axios.get("/products");
};

export const fetchLimitProducts = ({ limit, sortBy, order = "ascending" }: fetchLimitProductsType) => {
   const orderBy = order === "ascending" ? "asc" : "desc";
   return axios.get(`/products?_limit=${limit}&_sort=${sortBy}&_order=${orderBy}`);
};

export const fetchSingleProduct = (slug: string) => {
   return axios.get(`/products?slug=/${slug}`);
};

export const fetchSearchProduct = (query: string) => {
   return axios.get(`/products?title_like=${query}`);
};
