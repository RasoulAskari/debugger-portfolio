/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: false,
  },
};

module.exports = nextConfig;
