import { useEffect, useState } from "react";

const useDebounce = (value: string | number[], delay: number, minValueLimit: number | false = 4) => {
   const [debouncedValue, setDebouncedValue] = useState<string | number[]>(value);

   useEffect(() => {
      const handler = setTimeout(() => {
         minValueLimit === false ? setDebouncedValue(value) : value.length > minValueLimit ? setDebouncedValue(value) : null;
      }, delay);

      return () => {
         clearTimeout(handler);
      };
   }, [value, delay, minValueLimit]);

   return debouncedValue;
};

export default useDebounce;
