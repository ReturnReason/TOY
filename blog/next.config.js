/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.namu.wiki",
        port: "",
        pathname: "/i/**",
      },
    ],
  },
};

module.exports = nextConfig;
