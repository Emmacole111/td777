import Link from "next/link"
import { Download, CheckCircle } from "lucide-react"
import { APK_INFO, SITE_CONFIG } from "@/lib/constants"

const infoRows = [
  { label: "App Name", value: APK_INFO.appName },
  { label: "Category", value: APK_INFO.category },
  { label: "File Size", value: APK_INFO.size },
  { label: "Version", value: APK_INFO.version },
  { label: "Required OS", value: APK_INFO.requiredOS },
  { label: "Last Update", value: APK_INFO.lastUpdate },
  { label: "Total Downloads", value: APK_INFO.downloads },
  { label: "Rating", value: APK_INFO.rating },
  { label: "Language", value: APK_INFO.language },
  { label: "Price", value: APK_INFO.price },
  { label: "Developer", value: APK_INFO.developer },
]

export function ApkInfoBox() {
  return (
    <section className="section bg-dark-900" aria-label="APK Information">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="section-header">
            <span className="section-label">App Details</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              TD777 Game APK Information
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Everything you need to know before downloading TD777 Game APK for
              Android.
            </p>
          </div>

          <div className="card overflow-hidden">
            {/* Table header */}
            <div className="bg-primary-gradient px-6 py-4">
              <h3 className="text-white font-bold text-lg font-display">
                TD777 Game – APK File Details
              </h3>
            </div>

            {/* Info rows */}
            <div className="divide-y divide-dark-700">
              {infoRows.map((row, index) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between px-6 py-4 ${
                    index % 2 === 0 ? "bg-dark-800" : "bg-dark-800/50"
                  }`}
                >
                  <dt className="text-sm font-medium text-gray-400 w-1/2">
                    {row.label}
                  </dt>
                  <dd className="text-sm font-semibold text-white w-1/2 text-right flex items-center justify-end gap-2">
                    {row.label === "Price" && (
                      <CheckCircle
                        className="w-4 h-4 text-green-400"
                        aria-hidden="true"
                      />
                    )}
                    {row.value}
                  </dd>
                </div>
              ))}
            </div>

            {/* Download CTA */}
            <div className="p-6 bg-dark-900 border-t border-dark-700">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div>
                  <p className="text-white font-semibold">
                    Ready to download TD777 Game?
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Free APK · Android 5.0+ · {SITE_CONFIG.apkSize} · No account needed to
                    download
                  </p>
                </div>
                <Link
                  href={SITE_CONFIG.apkDownloadUrl}
                  className="btn-accent flex-shrink-0"
                  aria-label="Download TD777 Game APK for Android"
                >
                  <Download className="w-5 h-5" aria-hidden="true" />
                  Download Free APK
                </Link>
              </div>
            </div>
          </div>

          {/* Safety notice */}
          <div className="mt-6 flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
            <CheckCircle
              className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <p className="text-sm text-green-300">
              <strong>100% Safe Download:</strong> TD777 APK is verified and
              safe. Enable &quot;Unknown Sources&quot; in your Android settings
              to install. This is normal for apps not available on Google Play.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
