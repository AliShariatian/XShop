"use client";

import { FC, useState } from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Title from "./Title";

const SLIDER_BOUND = [0, 500] as [number, number];

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
   const [value, setValue] = useState<number[]>(SLIDER_BOUND);

   const sliderChangeHandler = (_: Event, newValue: number | number[]) => {
      setValue(newValue as number[]);
   };

   return (
      <div>
         <Title title="Price" />
         <div className="mx-auto mt-4 w-11/12">
            <PriceSlider
               value={value}
               min={Math.min(...SLIDER_BOUND)}
               max={Math.max(...SLIDER_BOUND)}
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
