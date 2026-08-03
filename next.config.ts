import { NextConfig } from "next";

const config = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
} satisfies NextConfig;

export default config;
