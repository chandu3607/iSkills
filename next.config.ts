import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "media.iquanta.in",
      pathname: "/ui_images/**",
    },
  ],
},

};

export default nextConfig;
