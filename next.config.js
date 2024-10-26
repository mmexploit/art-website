/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        
        hostname: "utfs.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
