import React, { memo } from "react"
import {
  DollarSign,
  Gift,
  Zap,
  Users,
  Shield,
  Headphones,
  Globe,
  Download,
} from "lucide-react"
import { FEATURES_LIST } from "@/lib/constants"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  DollarSign,
  Gift,
  Zap,
  Users,
  Shield,
  Headphones,
  Globe,
  Download,
}

export const FeaturesSection = memo(function FeaturesSection() {
  return (
    <section className="section bg-dark-800/30" aria-labelledby="features-heading">
      <div className="container-custom">
        <div className="section-header">
          <span className="section-label">Why Choose TD777?</span>
          <h2
            id="features-heading"
            className="text-3xl md:text-4xl font-bold text-white mt-3"
          >
            Top Features of TD777 Game APK
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            TD777 Game offers everything Pakistani players need — real cash
            earning, fast withdrawals, and exciting games.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES_LIST.map((feature) => {
            const Icon = iconMap[feature.icon]
            return (
              <article
                key={feature.title}
                className="card-hover p-6 group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary-500/10 rounded-xl mb-4 group-hover:bg-primary-500/20 transition-colors duration-300">
                  {Icon && (
                    <Icon
                      className="w-6 h-6 text-primary-400"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
})
