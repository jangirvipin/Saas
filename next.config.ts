import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpackDevMiddleware: (config: any) => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 500
        };
        return config;
    },
};

export default nextConfig;