import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://images-pw.pixieset.com/**")],
    // Pixieset already serves pre-sized, cached CDN images; re-encoding them
    // through Next's optimizer times out on the larger exports, so skip it.
    unoptimized: true,
  },
};

export default nextConfig;
