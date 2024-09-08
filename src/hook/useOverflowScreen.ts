import { useEffect } from "react";

const useOverflowScreen = (): null => {
   useEffect(() => {
      document.body.style.overflow = "hidden";

      return () => {
         document.body.style.overflow = "auto";
      };
   }, []);

   return null;
};

export default useOverflowScreen;
