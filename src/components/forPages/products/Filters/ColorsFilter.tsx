"use client";

import { FC, useState } from "react";
import Title from "./Title";
import { Colors } from "@/components";

const colors: string[] = ["#000", "#314F4A", "#31344F"];

const ColorsFilter: FC = (): JSX.Element => {
   const [selectedColor, setSelectedColor] = useState<string>("");

   return (
      <div>
         <Title title="Colors" />

         <Colors colors={colors} state={selectedColor} setState={setSelectedColor} className="mt-4" sizeMini />
      </div>
   );
};

export default ColorsFilter;
