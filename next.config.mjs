/** @type {import('next').NextConfig} */

import bundleAnalyzer from "@next/bundle-analyzer";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "wizzap.ktwiz.co.kr",
      },
    ],
  },
  transpilePackages: ["three"],
  typescript: { ignoreBuildErrors: true },
};

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
});

export default withBundleAnalyzer(nextConfig);
