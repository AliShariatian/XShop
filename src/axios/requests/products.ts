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
   // + => Order on Ascending
   // - => Order on Descending
   const orderBy = order === "ascending" ? "+" : "-";

   return axios.get(`/products?_limit=${limit}&_sort=${orderBy}${sortBy}`, { signal: signal });
};
