import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://media.iquanta.in/ui_images/**")],
  },
};

export default nextConfig;
