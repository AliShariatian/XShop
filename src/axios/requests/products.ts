import axios from "../configs/config";

export const getAllProducts = () => {
   return axios.get("/products");
};

export const getLimitProducts = (limit: number) => {
   return axios.get(`/products?_limit=${limit}`);
};

export const getLimitAndSortedProducts = (limit: number, sortBy: string, order: "descending" | "ascending" = "ascending") => {
   // + => Order on Ascending
   // - => Order on Descending
   const orderBy = order === "ascending" ? "+" : "-";

   return axios.get(`/products?_limit=${limit}&_sort=${orderBy}${sortBy}`);
};
