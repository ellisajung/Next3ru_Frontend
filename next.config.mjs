/** @type {import('next').NextConfig} */

import bundleAnalyzer from "@next/bundle-analyzer";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wizzap.ktwiz.co.kr",
      },
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_SUPABASE_STORAGE_DOMAIN,
      },
    ],

    domains: ["wizzap.ktwiz.co.kr", process.env.NEXT_PUBLIC_SUPABASE_URL],
  },
  transpilePackages: ["three"],
  typescript: { ignoreBuildErrors: true },
};

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
});

export default withBundleAnalyzer(nextConfig);
