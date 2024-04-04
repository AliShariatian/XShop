"use client";

import { FC, useCallback, useState } from "react";
import { email } from "@/utils/yup/email";
import { toast } from "react-toastify";
// COMPONENT
import { Section, Button, Input } from "@/components";

type TProps = {
   className?: string;
};

const Subscribe: FC<TProps> = ({ className }): JSX.Element => {
   const [inputValue, setInputValue] = useState<string>("");
   const [isButtonDisable, setIsButtonDisable] = useState<boolean>(true);

   // onClick for button
   const buttonClickHandler = (ev: React.MouseEvent<HTMLElement>) => {
      ev.preventDefault();

      setInputValue("");
      setIsButtonDisable(true);
      toast.success("Subscribe Successfully");
   };

   // onChange for input
   const inputOnChangeHandler = useCallback(
      async (ev: React.ChangeEvent<HTMLInputElement>) => {
         setInputValue(ev.target.value);

         let isValid: { email: string } | null = null;

         try {
            isValid = await email.validate(
               {
                  email: inputValue,
               },
               { abortEarly: false },
            );
         } catch (err: any) {
            setIsButtonDisable(true);
         }

         isValid && setIsButtonDisable(false);
      },
      [inputValue],
   );

   return (
      <Section parentClassName={className}>
         <div className="flex items-center justify-between rounded-20 bg-dark px-6 py-9 max-xl:flex-col max-xl:gap-8 xl:p-16">
            <div className="items-left flex w-full flex-col justify-center xl:w-2/3">
               <p className="text-left font-integralCF text-3xl leading-tight text-light xl:-mt-6 xl:w-5/6 xl:text-5xl">
                  STAY UPTO DATE ABOUT OUR LATEST OFFERS
               </p>
            </div>

            <form className="flex flex-col justify-center gap-3 xl:w-1/3">
               <Input
                  type="email"
                  placeholder="Enter your email address"
                  icon
                  value={inputValue}
                  onChange={inputOnChangeHandler}
                  className="max-xl:px-5 max-xl:py-3"
               />
               <Button
                  type="submit"
                  bgColor="white"
                  className="font-extrabold max-xl:px-0 max-xl:py-3 xl:text-lg"
                  disable={isButtonDisable}
                  onClick={buttonClickHandler}
               >
                  Subscribe to Newsletter
               </Button>
            </form>
         </div>
      </Section>
   );
};

export default Subscribe;
