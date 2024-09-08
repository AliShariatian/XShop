export interface IProductCard {
   id: number;
   rate: number;
   slug: string;
   price: number;
   title: string;
   imgs: string[];
   discount: number;
}

export interface IProducts extends IProductCard {
   saleCount: number;
}

export interface IProductsProps extends IProducts {
   createdAt: string;
   count: number;
   colors: string[];
   size: string[];
   description: string;
   category: string;
}
