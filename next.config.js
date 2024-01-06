/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // cair sempre no loguin
  async redirects(){
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig
