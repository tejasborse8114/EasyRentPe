/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Uncomment the line below to produce a fully static export (e.g. for Netlify/static hosting).
  // output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
