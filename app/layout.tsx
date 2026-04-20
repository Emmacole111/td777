import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { SchemaMarkup } from "@/components/shared/SchemaMarkup"
import { getWebSiteSchema, getOrganizationSchema } from "@/lib/schema"
import { SITE_CONFIG } from "@/lib/constants"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a1a2e",
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: "TD777 Game – Pakistan's #1 Real Money Gaming App",
    template: "%s | TD777 Game Pakistan",
  },
  description:
    "Download TD777 Game APK for Android free. Pakistan's top real money gaming app with Teen Patti, Slots, Rummy & more. Fast withdrawals via JazzCash & Easypaisa.",
  keywords: [
    "TD777 game",
    "TD777 APK",
    "TD777 download",
    "real money gaming pakistan",
    "teen patti real money",
    "online earning app pakistan",
  ],
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
  openGraph: {
    type: "website",
    siteName: SITE_CONFIG.name,
    locale: SITE_CONFIG.locale,
  },
  twitter: {
    card: "summary_large_image",
    creator: SITE_CONFIG.twitterHandle,
    site: SITE_CONFIG.twitterHandle,
  },
  verification: {
    google: SITE_CONFIG.googleVerification,
  },
  icons: {
    icon: "/images/td777-logo.png",
    apple: "/images/td777-logo.png",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: SITE_CONFIG.name,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const websiteSchema = getWebSiteSchema()
  const organizationSchema = getOrganizationSchema()

  return (
    <html
      lang="en-PK"
      className={`${inter.variable} ${poppins.variable} scrollbar-thin`}
    >
      <head>
        {/* Preconnect + DNS prefetch for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        {/* Favicon */}
        <link rel="icon" href="/images/td777-logo.png" type="image/png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/td777-logo.png" />
        {/* Theme color */}
        <meta name="theme-color" content="#1a1a2e" />
        <meta name="msapplication-TileColor" content="#1a1a2e" />
        {/* Pakistan geo targeting */}
        <meta name="geo.region"    content="PK" />
        <meta name="geo.placename" content="Pakistan" />
        <meta name="geo.position"  content="30.3753;69.3451" />
        <meta name="ICBM"          content="30.3753, 69.3451" />
        <meta name="coverage"      content="Pakistan" />
        <meta name="distribution"  content="local" />
        <meta name="target"        content="all" />
        <meta name="content-language" content="en-pk" />
        {/* Schema Markup */}
        <SchemaMarkup schema={websiteSchema} id="website-schema" />
        <SchemaMarkup schema={organizationSchema} id="org-schema" />
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
