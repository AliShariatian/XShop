import { FC } from "react";

type PropsType = {
   title: string;
};

const Title: FC<PropsType> = ({ title }): JSX.Element => {
   return <h4 className="text-xl font-bold">{title}</h4>;
};

export default Title;
