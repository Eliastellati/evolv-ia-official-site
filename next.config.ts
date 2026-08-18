import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // This runs on Cloudflare via vinext, not Node — there's no `sharp`
    // backing the built-in optimizer, so `/_vinext/image` 400s on any
    // raster source. Serve images as-is instead of proxying them.
    unoptimized: true,
  },
};

export default nextConfig;
