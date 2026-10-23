/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Uncomment the line below to produce a fully static export (e.g. for Netlify/static hosting).
  // output: 'export',
  // Image optimization requires the Node server (next start / PM2), not static export.
  // If you uncomment output: 'export' above, also set images.unoptimized back to true.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
