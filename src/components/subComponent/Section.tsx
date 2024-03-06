import { FC } from "react";

type PropsType = {
   children: React.ReactNode;
   parentClass?: string;
   sectionClass?: string;
};

const Section: FC<PropsType> = ({ children, parentClass, sectionClass }): JSX.Element => {
   return (
      <div className={parentClass}>
         <section className={`${sectionClass} container`}>{children}</section>
      </div>
   );
};

export default Section;
