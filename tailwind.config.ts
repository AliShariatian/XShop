import type { Config } from "tailwindcss";

const config: Config = {
   content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
   theme: {
      extend: {
         container: {
            center: true,
            padding: {
               DEFAULT: "1rem",
               sm: "2rem",
               lg: "4rem",
               xl: "5rem",
               "2xl": "6rem",
            },
         },
         fontFamily: {
            integralCF: ["var(--font-integralCF)"],
            satoshi: ["var(--font-satoshi)"],
         },
         fontSize: {
            sm: "0.75rem" /* 12px */,
            base: "0.875rem" /* 14px */,
         },
         colors: {
            dark: "black",
            light: "white",
            grey: {
               50: "#F2F0F1",
               100: "#F0F0F0",
            },
         },
      },
   },
   plugins: [],
};
export default config;
