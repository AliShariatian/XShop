export type VitrinePropsType = {
   title: string;
   buttonHref: string;
   order: "descending" | "ascending";
   sortBy: "createdAt" | "saleCount";
   productShowCount: number;
};