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
        hostname: "aysfabvtaixfvuhmmmyp.supabase.co",
      },
    ],
  },
  transpilePackages: ["three"],
  typescript: { ignoreBuildErrors: true },
  webpack(config) {
    // SVG 파일을 React 컴포넌트로 처리할 수 있도록 설정
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"], // @svgr/webpack을 사용하여 SVG를 React 컴포넌트로 변환
    });

    return config;
  },
};

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
});

export default withBundleAnalyzer(nextConfig);
