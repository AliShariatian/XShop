import { TFilterState } from "@/components/forPages/products";
import axios from "../../configs/config";
import { fetchLimitProductsType } from "./type";

export const fetchAllProducts = (query: TFilterState) => {
   const category = query.category ? `&category=${query.category.toLocaleLowerCase()}` : "";
   const pageNumber = `&_page=${query.pageNumber}`;
   const pageLimit = `&_limit=${query.limitPerPage}`;
   const color = query.color ? `&colors_like=${query.color}` : "";
   const minPrice = query.prices[0] ? `&price_gte=${query.prices[0]}` : "";
   const maxPrice = query.prices[1] ? `&price_lte=${query.prices[1]}` : "";

   const sort =
      query.sort.orderBy && query.sort.sortBy
         ? `_sort=${query.sort.sortBy}&_order=${query.sort.orderBy}`
         : "_sort=createdAt&_order=desc";

   const q: string = `${sort}${category}${color}${minPrice}${maxPrice}${pageLimit}${pageNumber}`;

   return axios.get(`/products?${q}`);
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
