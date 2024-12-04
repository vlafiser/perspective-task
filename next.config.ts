import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  //reactStrictMode: true,
  /* config options here */
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/pages',
  //       permanent: true,
  //     },
  //   ]
  // },
};

export default nextConfig;
