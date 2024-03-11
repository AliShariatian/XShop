import { FC } from "react";

type PropsType = {
   children: React.ReactNode;
   className?: string;
   widthFull?: boolean;
   borderColor?: "border-grey-50" | "border-grey-100";
   bgColor?: "dark" | "white" | "grey";
   type?: "button" | "submit" | "reset";
   py?: "py-4" | "py-3";
};

const Button: FC<PropsType> = ({
   children,
   className,
   widthFull,
   borderColor,
   type = "button",
   bgColor = "grey",
   py = "py-4",
}): JSX.Element => {
   return (
      <button
         type={type}
         className={`${className} 
            ${widthFull && "w-full"} 
            ${bgColor === "dark" && "bg-dark text-light hover:bg-gray-900"} 
            ${bgColor === "white" && "bg-light text-dark hover:bg-gray-100"} 
            ${bgColor === "grey" && "bg-grey-50 text-dark hover:bg-gray-100"} 
            ${borderColor && `border ${borderColor}`} 
            ${py && py} 
            rounded-full px-16 text-lg font-medium`}
      >
         {children}
      </button>
   );
};

export default Button;
