import axios from "../configs/config";
import { GenericAbortSignal } from "axios";

export const getAllProducts = (signal?: GenericAbortSignal) => {
   return axios.get("/products", { signal: signal });
};

export const getLimitProducts = (
   limit: number,
   sortBy: string,
   order: "descending" | "ascending" = "ascending",
   signal?: GenericAbortSignal,
) => {
   const orderBy = order === "ascending" ? "asc" : "desc";

   return axios.get(`/products?_limit=${limit}&_sort=${sortBy}&_order=${orderBy}`, { signal: signal });
};
