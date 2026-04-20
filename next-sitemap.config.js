/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.td777game.com.pk",
  generateRobotsTxt: false,
  exclude: ["/api/*", "/admin/*"],
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
}
