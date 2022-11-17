/** @type {import('next').NextConfig} */

const securityHeaders = require("./headers");

const nextConfig = {
  experimental: {
    appDir: false,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
