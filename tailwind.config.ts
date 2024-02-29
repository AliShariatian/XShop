import type { Config } from "tailwindcss";

const config: Config = {
   content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            integralCF: ["var(--font-integralCF)"],
            satoshi: ["var(--font-satoshi)"],
         },
      },
   },
   plugins: [],
};
export default config;

