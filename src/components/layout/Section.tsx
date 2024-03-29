import { FC } from "react";

type TProps = {
   children: React.ReactNode;
   parentClassName?: string;
   sectionClassName?: string;
};

const Section: FC<TProps> = ({ children, parentClassName, sectionClassName }): JSX.Element => {
   return (
      <div className={parentClassName}>
         <section className={`${sectionClassName} container`}>{children}</section>
      </div>
   );
};

export default Section;
