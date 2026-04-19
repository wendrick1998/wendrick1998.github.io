import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/iblu-landing" : "",
  assetPrefix: isProd ? "/iblu-landing/" : "",
};

export default nextConfig;
