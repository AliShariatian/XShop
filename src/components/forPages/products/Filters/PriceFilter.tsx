"use client";

import { FC } from "react";
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

type TProps = {
   sliderBound: [number, number];
   prices: number | number[];
   onPriceChange: (_: Event, prices: number | number[]) => void;
};

const PriceFilter: FC<TProps> = ({ onPriceChange, prices, sliderBound }): JSX.Element => {
   return (
      <div>
         <Title title="Price" />
         <div className="mx-auto mt-4 w-11/12">
            <PriceSlider
               value={prices}
               min={Math.min(...sliderBound)}
               max={Math.max(...sliderBound)}
               onChange={onPriceChange}
               valueLabelFormat={valueLabelFormat}
               valueLabelDisplay="on"
               defaultValue={60}
            />
         </div>
      </div>
   );
};

export default PriceFilter;
