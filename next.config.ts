import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "missionseaturtlenest.wordpress.com",
      },
      {
        protocol: "https",
        hostname:
          "turtle-quest.b73395dc4409c7c3d4a6ad00497d5876.r2.cloudflarestorage.com",
      },
    ],
  },
};

export default nextConfig;
