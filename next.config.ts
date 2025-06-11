import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "dev-assets.channelboost.com",
      "d9e5riiwc0eyd.cloudfront.net",
      "www.gravatar.com",
    ], // 👈 add the domain here
  },
};

export default nextConfig;
