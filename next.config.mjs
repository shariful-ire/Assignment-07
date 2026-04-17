/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  devIndicators: false,
  experimental: {
    globalNotFound: true,
  },
};

export default nextConfig;
