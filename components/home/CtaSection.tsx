import Link from "next/link"
import { Download, Shield, Zap, Gift } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"

export function CtaSection() {
  return (
    <section
      className="section bg-gradient-to-br from-primary-900 via-dark-800 to-dark-900 border-t border-primary-800/30"
      aria-labelledby="cta-heading"
    >
      <div className="container-custom text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 badge-accent mb-6 text-sm px-4 py-2">
          <Gift className="w-4 h-4" aria-hidden="true" />
          Limited Offer – Rs111 Free Bonus
        </div>

        <h2
          id="cta-heading"
          className="text-3xl md:text-5xl font-bold font-display text-white mb-6 max-w-3xl mx-auto"
        >
          Download TD777 Game Now —{" "}
          <span className="gradient-text">Start Earning Today!</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join 100,000+ Pakistani players who are earning real money daily.
          Download free, play instantly, withdraw via JazzCash &amp; Easypaisa.
        </p>

        {/* Main CTA */}
        <Link
          href={SITE_CONFIG.apkDownloadUrl}
          className="btn-accent text-xl px-10 py-5 shadow-2xl hover:shadow-accent-500/40 inline-flex items-center gap-3 mb-10"
          aria-label="Download TD777 APK for Android - Start earning real money"
        >
          <Download className="w-6 h-6" aria-hidden="true" />
          Download TD777 APK – Free
        </Link>

        {/* Trust signals */}
        <div
          className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
          role="list"
          aria-label="Trust signals"
        >
          <div className="flex items-center gap-2" role="listitem">
            <Shield className="w-4 h-4 text-green-400" aria-hidden="true" />
            100% Safe &amp; Secure
          </div>
          <div className="flex items-center gap-2" role="listitem">
            <Zap className="w-4 h-4 text-yellow-400" aria-hidden="true" />
            Instant Withdrawals
          </div>
          <div className="flex items-center gap-2" role="listitem">
            <Gift className="w-4 h-4 text-purple-400" aria-hidden="true" />
            Rs111 Welcome Bonus
          </div>
          <div className="flex items-center gap-2" role="listitem">
            <Download className="w-4 h-4 text-blue-400" aria-hidden="true" />
            Free Download – {SITE_CONFIG.apkSize}
          </div>
        </div>

        {/* Version info */}
        <p className="mt-6 text-xs text-gray-600">
          TD777 Game {SITE_CONFIG.apkVersion} · Android 5.0+ ·{" "}
          {SITE_CONFIG.apkSize} · Updated April 2026
        </p>
      </div>
    </section>
  )
}
