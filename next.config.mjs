import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/docs/contributor/peterportal",
        destination: "/docs/contributor/antalmanac-planner",
        permanent: true,
      },
      {
        source: "/docs/contributor/peterportal/:path*",
        destination: "/docs/contributor/antalmanac-planner/:path*",
        permanent: true,
      },
      {
        source: "/docs/contributor/antalmanac",
        destination: "/docs/contributor/antalmanac-scheduler",
        permanent: true,
      },
      {
        source: "/docs/contributor/antalmanac/:path*",
        destination: "/docs/contributor/antalmanac-scheduler/:path*",
        permanent: true,
      },
      {
        source: "/docs/contributor/common/getting-started/:path*",
        destination: "/docs/contributor/common/development-guide/:path*",
        permanent: true,
      },
    ];
  },
};

export default withMDX(config);
