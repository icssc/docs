// @ts-check

import nextra from "nextra";

/**
 * @type {(nextConfig: import('next').NextConfig) => NextConfig}
 */
const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

export default withNextra({});
