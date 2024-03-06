import { FC } from "react";

type PropsType = {
   children: React.ReactNode;
   className?: string;
   widthFull?: boolean;
   borderColor?: string;
   bgColor?: "dark" | "white" | "grey";
   type?: "button" | "submit" | "reset";
};

const Button: FC<PropsType> = ({ children, type = "button", className, bgColor = "grey", widthFull, borderColor }): JSX.Element => {
   return (
      <button
         type={type}
         className={`${className} 
            ${widthFull && "w-full"} 
            ${bgColor === "dark" && "bg-dark text-light"} 
            ${bgColor === "white" && "bg-light text-dark"} 
            ${bgColor === "grey" && "bg-grey-50 text-dark"} 
            ${borderColor && `border ${borderColor}`} 
            rounded-full px-16 py-4 text-lg font-medium`}
      >
         {children}
      </button>
   );
};

export default Button;
