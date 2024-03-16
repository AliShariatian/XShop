import { FC } from "react";

type PropsType = {
   children: React.ReactNode;
   parentClassName?: string;
   sectionClassName?: string;
};

const Section: FC<PropsType> = ({ children, parentClassName, sectionClassName }): JSX.Element => {
   return (
      <div className={parentClassName}>
         <section className={`${sectionClassName} container`}>{children}</section>
      </div>
   );
};

export default Section;
