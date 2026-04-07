/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'chauffeursinlondon.co.uk' }],
        destination: 'https://www.chauffeursinlondon.co.uk/:path*',
        permanent: true,
      },
      { source: '/about', destination: '/editorial-standards', permanent: true },
      { source: '/companies/uber', destination: '/companies/uber-executive', permanent: true },
      { source: '/featured/trouv', destination: '/companies/trouv-chauffeurs', permanent: true },
      { source: '/featured/tristar-worldwide', destination: '/featured/carey', permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
