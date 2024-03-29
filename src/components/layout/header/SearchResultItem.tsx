import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type TProps = {
   title: string;
   img: string;
   slug: string;
   category: string;
};

const SearchResultItem: FC<TProps> = ({ img, slug, title, category }): JSX.Element => {
   return (
      <Link href={`/${slug}`} title={title} className="flex w-full items-start gap-4 px-2 py-3">
         <div>
            <Image src={img} width={50} height={50} alt={title} className="size-24 rounded-xl shadow" />
         </div>
         <div className="flex grow flex-wrap items-start justify-between">
            <h4 className="text-lg font-semibold capitalize">{title}</h4>
            <span className="mr-2 rounded-md border border-gray-200 px-3 py-1 capitalize">{category}</span>
         </div>
      </Link>
   );
};

export default SearchResultItem;
