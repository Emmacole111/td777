import { memo } from "react"
import { GAMES_LIST } from "@/lib/constants"

export const GamesSection = memo(function GamesSection() {
  return (
    <section className="section bg-dark-900" aria-labelledby="games-heading">
      <div className="container-custom">
        <div className="section-header">
          <span className="section-label">Game Library</span>
          <h2
            id="games-heading"
            className="text-3xl md:text-4xl font-bold text-white mt-3"
          >
            Games Available on TD777
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Play Pakistan&apos;s favorite card and casino games for real money.
            New games added regularly!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {GAMES_LIST.map((game) => (
            <article
              key={game.name}
              className="card-hover p-5 text-center group cursor-default"
            >
              <div
                className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300 leading-none"
                aria-hidden="true"
              >
                {game.icon}
              </div>
              <h3 className="text-sm md:text-base font-semibold text-white mb-2">
                {game.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed hidden sm:block">
                {game.description}
              </p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-green-400 font-medium">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
                Live Now
              </div>
            </article>
          ))}
        </div>

        {/* Stat bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { stat: "8+", label: "Game Categories" },
            { stat: "100+", label: "Slot Machines" },
            { stat: "50K+", label: "Active Players" },
            { stat: "24/7", label: "Live Games" },
          ].map((item) => (
            <div
              key={item.label}
              className="text-center p-4 bg-dark-800/50 rounded-xl border border-dark-700"
            >
              <div className="text-2xl md:text-3xl font-bold gradient-text font-display">
                {item.stat}
              </div>
              <div className="text-sm text-gray-400 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})
