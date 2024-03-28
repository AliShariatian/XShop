import { FC } from "react";

type PropsType = {
   size: string[];
   state: string;
   setState: (item: string) => void;
};

const ProductSize: FC<PropsType> = ({ setState, size, state }): JSX.Element => {
   return (
      <div className="mt-2 flex flex-wrap gap-3">
         {size.map((item) => (
            <button
               key={item}
               onClick={() => setState(item)}
               className={`${state === item ? "bg-dark text-light" : "bg-grey-100 text-dark/70"} rounded-full px-4 py-2 capitalize transition hover:bg-dark hover:text-light`}
            >
               {item}
            </button>
         ))}
      </div>
   );
};

export default ProductSize;
