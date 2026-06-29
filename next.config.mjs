/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three"],
  // Static export — produces a fully static `out/` for Cloudflare Pages.
  output: "export",
  // The Next image optimizer needs a server; static export serves images as-is.
  images: { unoptimized: true },
};

export default nextConfig;
