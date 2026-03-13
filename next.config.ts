import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://missionseaturtlenest.wordpress.com/wp-content/uploads/**",
      ),
    ],
  },
  /* config options here */
};

export default nextConfig;
