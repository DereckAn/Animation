import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.onko-es.com.mx',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
