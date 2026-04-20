import Link from "next/link"
import { ChevronRight, Globe, Download, Settings, Package, Play } from "lucide-react"
import { DOWNLOAD_STEPS } from "@/lib/constants"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Download,
  Settings,
  Package,
  Play,
}

export function HowToDownload() {
  return (
    <section className="section bg-dark-900" aria-labelledby="how-to-download-heading">
      <div className="container-custom">
        <div className="section-header">
          <span className="section-label">Quick Guide</span>
          <h2
            id="how-to-download-heading"
            className="text-3xl md:text-4xl font-bold text-white mt-3"
          >
            How to Download TD777 Game APK on Android
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Installing TD777 on your Android device takes less than 3 minutes.
            Follow these simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div
            className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary-600 via-primary-500 to-accent-500 -translate-x-1/2"
            aria-hidden="true"
          />

          <ol className="space-y-6" aria-label="Steps to download TD777 APK">
            {DOWNLOAD_STEPS.map((step, index) => {
              const Icon = iconMap[step.icon]
              const isEven = index % 2 === 1
              return (
                <li
                  key={step.step}
                  className={`flex flex-col lg:flex-row items-start lg:items-center gap-6 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "lg:text-right" : ""}`}>
                    <div
                      className={`card-hover p-6 ${isEven ? "lg:ml-12" : "lg:mr-12"}`}
                    >
                      <div
                        className={`flex items-center gap-3 mb-3 ${isEven ? "lg:flex-row-reverse" : ""}`}
                      >
                        <span className="text-3xl font-black gradient-text font-display">
                          {step.step.toString().padStart(2, "0")}
                        </span>
                        {Icon && (
                          <div className="flex items-center justify-center w-9 h-9 bg-primary-500/10 rounded-lg">
                            <Icon
                              className="w-5 h-5 text-primary-400"
                              aria-hidden="true"
                            />
                          </div>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center bullet */}
                  <div className="hidden lg:flex flex-shrink-0 items-center justify-center w-10 h-10 bg-primary-gradient rounded-full border-4 border-dark-900 z-10 shadow-lg shadow-primary-500/30">
                    <span className="text-white text-xs font-bold">{step.step}</span>
                  </div>

                  {/* Empty space for other side */}
                  <div className="hidden lg:block flex-1" aria-hidden="true" />
                </li>
              )
            })}
          </ol>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/how-to-download"
            className="btn-primary inline-flex items-center gap-2"
            aria-label="Read complete TD777 APK download guide"
          >
            Read Full Download Guide
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
