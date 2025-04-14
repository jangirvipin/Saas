import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  webpackDevMiddleware: (config: any) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 500,
    };
    return config;
  },
};
