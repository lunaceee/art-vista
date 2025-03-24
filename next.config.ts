import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['www.artic.edu'],
  },
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'www.artic.edu',
      port: '',
      pathname: '',
      search: '',
    },
  ],
};

export default nextConfig;
