import { FC } from "react";

type PropsType = {
   size: string[];
};

const Size: FC<PropsType> = ({ size }): JSX.Element => {
   return (
      <div>
         <span>Choose Size</span>

         <div className="mt-2 flex gap-3">
            {size.map((item) => (
               <button
                  key={item}
                  className="rounded-full bg-grey-100 px-4 py-2 capitalize text-dark/70 transition hover:bg-dark hover:text-light"
               >
                  {item}
               </button>
            ))}
         </div>
      </div>
   );
};

export default Size;
