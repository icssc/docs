import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/docs/contributor/peterportal/:path*",
        destination: "/docs/contributor/antalmanac-planner/:path*",
        permanent: true,
      },
      {
        source: "/docs/contributor/antalmanac/:path*",
        destination: "/docs/contributor/antalmanac-scheduler/:path*",
        permanent: true,
      },
    ];
  },
};

export default withMDX(config);
