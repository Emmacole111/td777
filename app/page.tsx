import dynamic from "next/dynamic"
import type { Metadata } from "next"
import { HeroSection } from "@/components/home/HeroSection"
import { HomepageContent } from "@/components/home/HomepageContent"
import { AppScreenshotsSlider } from "@/components/home/AppScreenshotsSlider"
import { StatsSection } from "@/components/home/StatsSection"
import { TrustBar } from "@/components/home/TrustBar"
import { StickyDownloadBar } from "@/components/home/StickyDownloadBar"
import { ConclusionSection } from "@/components/home/ConclusionSection"
import { SchemaMarkup } from "@/components/shared/SchemaMarkup"
import {
  getSoftwareApplicationSchema,
  getFAQSchema,
  getHowToDownloadSchema,
  getHomeBreadcrumbSchema,
} from "@/lib/schema"
import { SITE_CONFIG } from "@/lib/constants"

const TestimonialsSection = dynamic(
  () =>
    import("@/components/home/TestimonialsSection").then(
      (m) => m.TestimonialsSection
    ),
  { ssr: true }
)

const FaqSection = dynamic(
  () => import("@/components/home/FaqSection").then((m) => m.FaqSection),
  { ssr: true }
)

export const metadata: Metadata = {
  title: {
    absolute: "TD777 Game Download APK 2026 – Official Pakistan App",
  },
  description:
    "Download the official TD777 Game APK for Android free. Play Teen Patti, Aviator, Rummy and slots for real money. Fast JazzCash & Easypaisa withdrawals. Rs111 welcome bonus included.",
  keywords: [
    "td777",
    "td777 game",
    "td777 game download",
    "td777 apk",
    "td777 login",
    "td777 download",
    "td777 game apk",
    "td777 game download apk",
    "td777 game download for android",
    "td777 aviator",
    "td777 registration",
    "td777 app download",
    "td777 real or fake",
    "td777 official website",
    "td777 game login",
  ],
  alternates: {
    canonical: SITE_CONFIG.domain,
  },
  openGraph: {
    title: "TD777 Game Download APK 2026 | Official TD777 Real Money App Pakistan",
    description:
      "Download the official TD777 Game APK for Android free. Play Teen Patti, Aviator, Rummy and slots for real money. Fast JazzCash & Easypaisa withdrawals. Rs111 welcome bonus included.",
    url: SITE_CONFIG.domain,
    images: [
      {
        url: `${SITE_CONFIG.domain}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "TD777 Game – Real Money Gaming App Pakistan",
      },
    ],
  },
}

export default function HomePage() {
  const appSchema        = getSoftwareApplicationSchema()
  const faqSchema        = getFAQSchema()
  const howToSchema      = getHowToDownloadSchema()
  const breadcrumbSchema = getHomeBreadcrumbSchema()

  return (
    <>
      <SchemaMarkup schema={appSchema}        id="app-schema" />
      <SchemaMarkup schema={faqSchema}        id="faq-schema" />
      <SchemaMarkup schema={howToSchema}      id="howto-schema" />
      <SchemaMarkup schema={breadcrumbSchema} id="breadcrumb-schema" />

      {/* Sticky download bar — appears after 650 px scroll */}
      <StickyDownloadBar />

      {/* H1 hero section */}
      <HeroSection />

      {/* Animated stats: 100K players, 500+ games, Rs111 bonus, 30-min withdrawal, 4.8 stars */}
      <StatsSection />

      {/* Trust signals: JazzCash, Easypaisa, SSL, Android, Free, Support */}
      <TrustBar />

      {/* App screenshots coverflow slider */}
      <AppScreenshotsSlider />

      {/* H2 sections: Introduction → Features → Games → Download →
          Safety → Register/Login → Deposit → Withdrawal → Why This Site */}
      <HomepageContent />

      {/* H2: Users Review */}
      <TestimonialsSection />

      {/* H2: FAQs */}
      <FaqSection />

      {/* H2: Conclusion */}
      <ConclusionSection />
    </>
  )
}
