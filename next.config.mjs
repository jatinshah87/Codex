/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Codex",
  assetPrefix: "/Codex/",
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true
  }
};

export default nextConfig;
