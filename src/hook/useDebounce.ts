import { useEffect, useState } from "react";

const useDebounce = (value: string, delay: number, minValueLimit: number = 4) => {
   const [debouncedValue, setDebouncedValue] = useState<string>(value);

   useEffect(() => {
      const handler = setTimeout(() => {
         if (value.length > minValueLimit) setDebouncedValue(value);
      }, delay);

      return () => {
         clearTimeout(handler);
      };
   }, [value, delay, minValueLimit]);

   return debouncedValue;
};

export default useDebounce;
