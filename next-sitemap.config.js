/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://chauffeursinlondon.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin'],
      },
    ],
    additionalSitemaps: [],
  },
  exclude: ['/admin', '/admin/*', '/api/*'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Higher priority for homepage and blog index
    if (path === '/') return { loc: path, priority: 1.0, changefreq: 'daily' };
    if (path === '/blog') return { loc: path, priority: 0.9, changefreq: 'daily' };
    if (path.startsWith('/blog/')) return { loc: path, priority: 0.8, changefreq: 'weekly' };
    return { loc: path, priority: config.priority, changefreq: config.changefreq };
  },
};
