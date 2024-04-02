/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/company/:slug',
        destination: '/about/:slug',
        permanent: true,
      },
      {
        source: '/company/io-hub/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;