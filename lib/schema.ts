import { SITE_CONFIG, FAQ_LIST } from "./constants"

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.domain,
    description: `${SITE_CONFIG.name} – ${SITE_CONFIG.tagline}. Download TD777 APK for Android and earn real money playing card games in Pakistan.`,
    inLanguage: "en-PK",
  }
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TD777 Game Pakistan",
    url: SITE_CONFIG.domain,
    logo: `${SITE_CONFIG.domain}/images/td777-logo.png`,
    sameAs: [
      `https://facebook.com/td777game`,
      `https://t.me/td777game`,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["English", "Urdu"],
      areaServed: "PK",
    },
  }
}

export function getSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TD777 Game",
    operatingSystem: "Android",
    applicationCategory: "GameApplication",
    applicationSubCategory: "CardGame",
    description:
      "TD777 Game APK – Pakistan's top real money gaming app. Play Teen Patti, Rummy, Slots and more. Withdraw via JazzCash and Easypaisa.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PKR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "50000",
      bestRating: "5",
      worstRating: "1",
    },
    downloadUrl: SITE_CONFIG.domain,
    fileSize: "42MB",
    softwareVersion: "2.1.0",
    countriesSupported: "PK",
    screenshot: `${SITE_CONFIG.domain}/images/td777-game.webp`,
    publisher: {
      "@type": "Organization",
      name: "TD777 Game Pakistan",
    },
  }
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_LIST.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  }
}

export function getBreadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href.startsWith("http")
        ? item.href
        : `${SITE_CONFIG.domain}${item.href}`,
    })),
  }
}

export function getHowToDownloadSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Download and Install TD777 APK on Android",
    description:
      "Complete step-by-step guide to download the TD777 Game APK free on any Android device and claim your Rs111 welcome bonus.",
    totalTime: "PT5M",
    estimatedCost: { "@type": "MonetaryAmount", currency: "PKR", value: "0" },
    tool: [
      { "@type": "HowToTool", name: "Android phone (version 5.0 or higher)" },
      { "@type": "HowToTool", name: "45 MB free storage" },
      { "@type": "HowToTool", name: "Stable internet connection" },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Tap the Download Button",
        text: 'Click the green "Download APK Free" button on this page to start downloading the TD777 APK file.',
        url: SITE_CONFIG.domain,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Allow Installation from Unknown Sources",
        text: "On your Android device, go to Settings → Security (or Privacy) and enable 'Install from Unknown Sources' or 'Install Unknown Apps'.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Open the Downloaded APK File",
        text: "Open your Downloads folder (or notification shade) and tap the td777.apk file to begin installation.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Complete the Installation",
        text: "Tap Install on the confirmation screen and wait approximately 30 seconds for the app to install.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Register and Claim Rs111 Bonus",
        text: "Open TD777, register with your Pakistani mobile number, and receive your Rs111 welcome bonus automatically — no deposit required.",
      },
    ],
  }
}

export function getHomeBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_CONFIG.domain,
      },
    ],
  }
}

export function getArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  slug,
  author = "TD777 Team",
}: {
  headline: string
  description: string
  image: string
  datePublished: string
  dateModified: string
  slug: string
  author?: string
}) {
  const absoluteImage = image.startsWith("http")
    ? image
    : `${SITE_CONFIG.domain}${image}`

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    image: absoluteImage,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.domain}/images/td777-logo.png`,
      },
    },
    datePublished,
    dateModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.domain}/blog/${slug}`,
    },
    inLanguage: "en-PK",
  }
}
