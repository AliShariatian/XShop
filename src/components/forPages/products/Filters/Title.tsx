import { FC } from "react";

type TProps = {
   title: string;
};

const Title: FC<TProps> = ({ title }): JSX.Element => {
   return <h4 className="text-xl font-bold">{title}</h4>;
};

export default Title;
