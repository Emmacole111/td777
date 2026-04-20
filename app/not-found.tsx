import type { Metadata } from "next"
import Link from "next/link"
import { Home, Search, Download } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"
import { BackButton } from "@/components/shared/BackButton"

export const metadata: Metadata = {
  title: "404 – Page Not Found | TD777 Game",
  description: "The page you are looking for could not be found. Go back to the TD777 Game homepage.",
  robots: {
    index: false,
    follow: false,
  },
}

const helpfulLinks = [
  { label: "Download TD777 APK", href: "/how-to-download", icon: Download },
  { label: "Blog & Guides", href: "/blog", icon: Search },
  { label: "Contact Support", href: "/contact-us", icon: Home },
]

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Display */}
        <div className="mb-8">
          <div
            className="text-[120px] md:text-[180px] font-black font-display leading-none gradient-text mb-4 select-none"
            aria-hidden="true"
          >
            404
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track!
          </p>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            href="/"
            className="btn-primary py-4 px-8 text-lg"
            aria-label="Go back to TD777 Game homepage"
          >
            <Home className="w-5 h-5" aria-hidden="true" />
            Go to Homepage
          </Link>
          <Link
            href={SITE_CONFIG.apkDownloadUrl}
            className="btn-accent py-4 px-8 text-lg"
            aria-label="Download TD777 APK"
          >
            <Download className="w-5 h-5" aria-hidden="true" />
            Download TD777 APK
          </Link>
        </div>

        {/* Suggestion links */}
        <div className="card p-6">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Maybe you were looking for:
          </h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {helpfulLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 p-3 bg-dark-700 hover:bg-dark-600 rounded-lg text-sm text-gray-300 hover:text-white transition-all duration-150"
                >
                  <Icon className="w-4 h-4 text-primary-400" aria-hidden="true" />
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Back link */}
        <BackButton />
      </div>
    </div>
  )
}
