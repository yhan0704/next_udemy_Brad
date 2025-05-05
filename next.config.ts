import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  transpilePackages: ["first-library"],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
