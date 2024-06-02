/** @type {import('next').NextConfig} */

import PWA from "@ducanh2912/next-pwa";

const withPWA = PWA({
   dest: "public",
   cacheOnFrontEndNav: true,
   aggressiveFrontEndNavCaching: true,
   reloadOnOnline: true,
   swcMinify: true,
   disable: process.env.NODE_ENV === "development",
   workboxOptions: {
      disableDevLogs: true,
   },
});

const nextConfig = {
   output: "standalone",
};

export default withPWA(nextConfig);
