export interface ProductCardType {
   id: number;
   rate: number;
   slug: string;
   price: number;
   title: string;
   img: string;
   discount: number;
}

export interface ProductsType extends ProductCardType {
   saleCount: number;
}
