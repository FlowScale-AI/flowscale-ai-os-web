import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* No basePath — serves at / */
  async rewrites() {
    return [
      {
        source: "/os",
        destination: "http://localhost:5175/os",
      },
      {
        source: "/os/:path*",
        destination: "http://localhost:5175/os/:path*",
      },
    ];
  },
};

export default nextConfig;
