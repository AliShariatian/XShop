"use client";

import { FC, useState } from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Title from "./Title";

// Custom slider tooltip style
const PriceSlider = styled(Slider)(({ theme }) => ({
   "& .MuiSlider-valueLabel": {
      fontSize: 16,
      top: 56,
      backgroundColor: "unset",
      color: theme.palette.text.primary,
   },
}));

const valueLabelFormat = (value: number): string => {
   return `$${value}`;
};

const PriceFilter: FC = (): JSX.Element => {
   // Slider initial values
   const [value, setValue] = useState<number[]>([100, 350]);

   const sliderChangeHandler = (ev: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
   };
   
   return (
      <div>
         <Title title="Price" />
         <div className="mt-4">
            <PriceSlider
               value={value}
               min={0}
               max={500}
               onChange={sliderChangeHandler}
               valueLabelFormat={valueLabelFormat}
               valueLabelDisplay="on"
               defaultValue={60}
            />
         </div>
      </div>
   );
};

export default PriceFilter;
