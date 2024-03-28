import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type PropsType = {
   title: string;
   img: string;
   slug: string;
};

const SearchResultItem: FC<PropsType> = ({ img, slug, title }): JSX.Element => {
   return (
      <Link href={`/${slug}`} title={title} className="flex w-full gap-4 px-2 py-3">
         <div>
            <Image src={img} width={50} height={50} alt={title} className="size-24 rounded-xl shadow" />
         </div>
         <div>
            <h4 className="text-lg font-semibold capitalize">{title}</h4>
         </div>
      </Link>
   );
};

export default SearchResultItem;
