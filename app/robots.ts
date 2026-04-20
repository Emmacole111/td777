import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
    ],
    sitemap: "https://td777download.com.pk/sitemap.xml",
    host: "https://td777download.com.pk",
  }
}
