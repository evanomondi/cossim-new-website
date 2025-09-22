/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.cossim.co.ke',
  changefreq: 'weekly',
  priority: 0.7,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: 'public',
  transform: async (config, path) => {
    return { 
      loc: path, 
      changefreq: 'weekly', 
      priority: path === '/' ? 1.0 : 0.7 
    };
  },
}