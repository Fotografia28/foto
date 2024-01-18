module.exports = {
  siteUrl: 'https://www.fotoestudioequipe.com.br',
  // generateRobotsTxt: true, // opcional
  priority: null,
  changefreq: null,
  exclude: ['/server-sitemap-index.xml', '/post/*'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://www.fotostudioequipe.com.br/server-sitemap-index.xml'],
  },
}