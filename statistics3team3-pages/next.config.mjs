
const isProd = process.env.NODE_ENV === 'production';
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  assetPrefix: isProd ? '/statistics3team3/' : undefined,
  basePath: isProd ? '/statistics3team3' : undefined,
};
export default nextConfig;
