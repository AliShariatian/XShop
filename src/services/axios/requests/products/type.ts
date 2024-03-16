import { GenericAbortSignal } from "axios";

export interface getAllProductsType {
   signal?: GenericAbortSignal;
}

export interface getLimitProductsType extends getAllProductsType {
   limit: number;
   sortBy: string;
   order: "descending" | "ascending";
}
