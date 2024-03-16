import axios from "../../configs/config";
import { getAllProductsType, getLimitProductsType } from "./type";

export const getAllProducts = ({ signal }: getAllProductsType) => {
   return axios.get("/products", { signal });
};

export const getLimitProducts = ({ limit, sortBy, signal, order = "ascending" }: getLimitProductsType) => {
   const orderBy = order === "ascending" ? "asc" : "desc";

   return axios.get(`/products?_limit=${limit}&_sort=${sortBy}&_order=${orderBy}`, { signal });
};
