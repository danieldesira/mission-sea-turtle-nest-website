import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://missionseaturtlenest.wordpress.com/wp-content/uploads/**",
      ),
      new URL("https://turtle-quest.b73395dc4409c7c3d4a6ad00497d5876.r2.cloudflarestorage.com/turtle-quest/profile-pics/**")
    ],
  },
  /* config options here */
};

export default nextConfig;
