import type { Metadata } from "next"
import Link from "next/link"
import {
  Download,
  Globe,
  Settings,
  Package,
  Play,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { BreadCrumb } from "@/components/shared/BreadCrumb"
import { generatePageMetadata } from "@/lib/metadata"
import { SITE_CONFIG, DOWNLOAD_STEPS } from "@/lib/constants"

export const metadata: Metadata = generatePageMetadata({
  title: "How to Download TD777 APK on Android – Step by Step Guide 2026",
  description:
    "Learn how to download and install TD777 Game APK on your Android phone. Simple step-by-step guide for Pakistani users. Enable Unknown Sources and install in 3 minutes.",
  keywords: [
    "how to download td777",
    "td777 apk download android",
    "td777 install guide",
    "td777 unknown sources",
    "download td777 apk pakistan",
    "td777 game kaise download kare",
  ],
  slug: "how-to-download",
})

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Download,
  Settings,
  Package,
  Play,
}

export default function HowToDownloadPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container-custom py-8">
        <BreadCrumb
          items={[{ name: "How to Download TD777", href: "/how-to-download" }]}
        />

        {/* Hero */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <span className="section-label mb-4">Step-by-Step Guide</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-5">
              How to Download TD777 Game APK on Android (2026)
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Downloading and installing TD777 Game APK on your Android device
              takes less than <strong className="text-white">3 minutes</strong>.
              Follow our simple guide below. The app is completely free and safe
              to install.
            </p>
          </div>

          {/* Requirements */}
          <div className="card p-6 mb-10">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-accent-400" aria-hidden="true" />
              Before You Start – Requirements
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Android 5.0 or higher",
                "At least 100MB free storage",
                "Stable internet connection (3G/4G/WiFi)",
                "Pakistani mobile number for registration",
                "JazzCash or Easypaisa for deposits/withdrawals",
              ].map((req) => (
                <li key={req} className="flex items-center gap-2 text-gray-300">
                  <CheckCircle
                    className="w-4 h-4 text-green-400 flex-shrink-0"
                    aria-hidden="true"
                  />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* Steps */}
          <h2 className="text-2xl font-bold text-white mb-6">
            Step-by-Step Download Instructions
          </h2>

          <ol className="space-y-6 mb-10" aria-label="TD777 download steps">
            {DOWNLOAD_STEPS.map((step) => {
              const Icon = iconMap[step.icon]
              return (
                <li key={step.step} className="card p-6 flex items-start gap-5">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-primary-gradient rounded-xl text-white text-lg font-black">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {Icon && (
                        <Icon
                          className="w-5 h-5 text-primary-400"
                          aria-hidden="true"
                        />
                      )}
                      <h3 className="text-lg font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </li>
              )
            })}
          </ol>

          {/* Detailed Instructions */}
          <section aria-labelledby="detailed-instructions">
            <h2
              id="detailed-instructions"
              className="text-2xl font-bold text-white mb-6"
            >
              Detailed Instructions for Each Step
            </h2>
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-lg font-bold text-white mb-3">
                  How to Enable Unknown Sources on Android
                </h3>
                <p className="text-gray-400 mb-4">
                  Since TD777 APK is not on Google Play Store, you need to allow
                  installation from unknown sources. This is completely safe.
                </p>
                <div className="space-y-2">
                  {[
                    "Open Settings on your Android phone",
                    "Go to Security (or Privacy on some phones)",
                    'Find "Install Unknown Apps" or "Unknown Sources"',
                    "Enable it for your browser or file manager",
                    "You can disable it again after installation",
                  ].map((instruction, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center bg-primary-500/20 text-primary-400 rounded text-xs font-bold">
                        {i + 1}
                      </span>
                      <span className="text-sm text-gray-300">{instruction}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-white mb-3">
                  Troubleshooting Common Download Issues
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      problem: "Download not starting",
                      solution:
                        "Check your internet connection and try again. Use WiFi for faster downloads.",
                    },
                    {
                      problem: "APK not installing",
                      solution:
                        "Make sure Unknown Sources is enabled. Check you have enough storage space.",
                    },
                    {
                      problem: "App keeps crashing",
                      solution:
                        "Try reinstalling the app. Make sure your Android version is 5.0 or higher.",
                    },
                  ].map((item) => (
                    <div key={item.problem}>
                      <p className="text-white font-medium text-sm">
                        ❓ {item.problem}
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        ✅ {item.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="mt-10 p-8 bg-primary-gradient rounded-2xl text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Ready to Download TD777 Game?
            </h2>
            <p className="text-blue-100 mb-6">
              Free APK · {SITE_CONFIG.apkSize} · Android 5.0+ · Rs111 Welcome Bonus
            </p>
            <Link
              href={SITE_CONFIG.apkDownloadUrl}
              className="btn-accent inline-flex items-center gap-2"
              aria-label="Download TD777 APK for Android"
            >
              <Download className="w-5 h-5" aria-hidden="true" />
              Download TD777 APK Free
            </Link>
          </div>

          {/* Related guides */}
          <section className="mt-12" aria-labelledby="related-guides">
            <h2 id="related-guides" className="text-xl font-bold text-white mb-5">
              Related Guides
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "How to Register on TD777", href: "/how-to-register" },
                { label: "How to Deposit Money", href: "/how-to-deposit" },
                { label: "How to Withdraw Money", href: "/how-to-withdraw" },
                { label: "TD777 Bonus Guide", href: "/td777-bonus" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="card-hover p-4 text-sm text-gray-300 hover:text-primary-400 flex items-center gap-2"
                >
                  <CheckCircle
                    className="w-4 h-4 text-primary-400"
                    aria-hidden="true"
                  />
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
