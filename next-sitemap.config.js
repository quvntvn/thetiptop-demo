/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://dsp5-archi-o22a-4-5-g1.fr/',
    generateRobotsTxt: true, // (optionnel) Générez également un fichier robots.txt
    // Options supplémentaires :
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: [''], // Exclure certaines pages du sitemap
    robotsTxtOptions: {
      additionalSitemaps: [
      ],
    },
  };
  