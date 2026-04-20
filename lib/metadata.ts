import type { Metadata } from "next"
import { SITE_CONFIG } from "./constants"

interface PageMetadataOptions {
  title: string
  description: string
  keywords: string[]
  slug: string
  ogImage?: string
}

export function generatePageMetadata({
  title,
  description,
  keywords,
  slug,
  ogImage,
}: PageMetadataOptions): Metadata {
  const canonicalUrl = slug === "" ? SITE_CONFIG.domain : `${SITE_CONFIG.domain}/${slug}`
  const resolvedOgImage = ogImage ?? SITE_CONFIG.defaultOgImage
  const absoluteOgImage = resolvedOgImage.startsWith("http")
    ? resolvedOgImage
    : `${SITE_CONFIG.domain}${resolvedOgImage}`

  return {
    title: {
      absolute: `${title} | TD777 Game Pakistan`,
    },
    description,
    keywords,
    authors: [{ name: "TD777 Game Team", url: SITE_CONFIG.domain }],
    creator: "TD777 Game",
    publisher: "TD777 Game Pakistan",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      title: `${title} | TD777 Game Pakistan`,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: absoluteOgImage,
          width: 1200,
          height: 630,
          alt: `${title} - TD777 Game Pakistan`,
        },
      ],
      locale: SITE_CONFIG.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | TD777 Game Pakistan`,
      description,
      images: [absoluteOgImage],
      creator: SITE_CONFIG.twitterHandle,
      site: SITE_CONFIG.twitterHandle,
    },
    verification: {
      google: SITE_CONFIG.googleVerification,
      other: {
        "msvalidate.01": SITE_CONFIG.bingVerification,
      },
    },
    manifest: "/manifest.json",
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
      title: SITE_CONFIG.name,
    },
    category: "gaming",
    classification: "Gaming, Entertainment",
  }
}
