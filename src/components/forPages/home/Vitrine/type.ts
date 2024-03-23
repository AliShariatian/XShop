export type VitrinePropsType = {
   id: string;
   title: string;
   buttonHref: string;
   order: "descending" | "ascending";
   sortBy: "createdAt" | "saleCount";
   productShowCount: number;
};
