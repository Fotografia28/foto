module.exports = {
  siteUrl: 'https://fotostudioequipe.com.br',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://fotostudioequipe.com.br/server-sitemap.xml', // <==== Add here
    ],
  },
}