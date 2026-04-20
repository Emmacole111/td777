import Link from "next/link"
import { ChevronRight, Gift } from "lucide-react"
import { BONUSES_LIST } from "@/lib/constants"

export function BonusSection() {
  return (
    <section className="section bg-dark-800/30" aria-labelledby="bonus-heading">
      <div className="container-custom">
        <div className="section-header">
          <span className="section-label">Promotions</span>
          <h2
            id="bonus-heading"
            className="text-3xl md:text-4xl font-bold text-white mt-3"
          >
            TD777 Bonus &amp; Promotions
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Claim exclusive bonuses and earn more on TD777 Game. New offers
            added every week!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BONUSES_LIST.map((bonus) => (
            <article
              key={bonus.title}
              className="relative card overflow-hidden group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Gradient top bar */}
              <div
                className={`h-1.5 w-full bg-gradient-to-r ${bonus.color}`}
                aria-hidden="true"
              />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="badge-primary text-xs mb-2">
                      {bonus.badge}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">
                      {bonus.title}
                    </h3>
                  </div>
                  <div
                    className={`text-2xl font-black bg-gradient-to-r ${bonus.color} bg-clip-text text-transparent font-display`}
                  >
                    {bonus.amount}
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {bonus.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/td777-bonus"
            className="btn-primary inline-flex items-center gap-2"
            aria-label="View all TD777 bonuses and promotions"
          >
            <Gift className="w-5 h-5" aria-hidden="true" />
            View All Bonuses
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
