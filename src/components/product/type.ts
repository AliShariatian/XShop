export interface ProductCardType {
   id: number;
   rate: number;
   slug: string;
   price: number;
   title: string;
   imgs: string[];
   discount: number;
}

export interface ProductsType extends ProductCardType {
   saleCount: number;
}

export interface ProductsPropsType extends ProductsType {
   createdAt: string;
   count: string;
   colors: string[];
   size: string[];
   description: string;
}
