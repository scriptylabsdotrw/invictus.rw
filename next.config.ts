import { NextConfig } from "next";

// The site is fully static: `next build` exports plain HTML/CSS/JS to `out/`,
// which the Docker image serves with Caddy (see Dockerfile and Caddyfile).
const config = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
} satisfies NextConfig;

export default config;
