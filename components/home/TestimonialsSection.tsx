"use client"

import { useRef, useEffect, useState } from "react"
import { Star } from "lucide-react"
import { TESTIMONIALS } from "@/lib/constants"

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

// Accent colors cycling through for avatar backgrounds
const AVATAR_GRADIENTS = [
  "linear-gradient(135deg, #005c2e 0%, #00AA56 100%)",
  "linear-gradient(135deg, #007a3d 0%, #00cc66 100%)",
  "linear-gradient(135deg, #004d26 0%, #008c47 100%)",
  "linear-gradient(135deg, #006e38 0%, #00e070 100%)",
  "linear-gradient(135deg, #003d1f 0%, #00AA56 100%)",
  "linear-gradient(135deg, #008c47 0%, #00e070 100%)",
]

function ReviewCard({
  t,
  index,
  inView,
}: {
  t: typeof TESTIMONIALS[0]
  index: number
  inView: boolean
}) {
  return (
    <article
      className="group relative flex flex-col rounded-2xl p-6 cursor-default"
      style={{
        background: "rgba(7,18,11,0.85)",
        border: "1px solid rgba(0,170,86,0.12)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(36px) scale(0.97)",
        transition: `opacity 0.6s ease ${index * 0.09}s, transform 0.6s ease ${index * 0.09}s`,
      }}
      aria-label={`Review by ${t.name}`}
    >
      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
        style={{ boxShadow: "inset 0 0 0 1px rgba(0,170,86,0.4), 0 8px 32px rgba(0,170,86,0.1)" }}
        aria-hidden="true"
      />

      {/* Decorative large quote mark */}
      <div
        className="absolute top-4 right-5 font-serif leading-none select-none pointer-events-none"
        style={{ fontSize: "5rem", color: "rgba(0,170,86,0.08)", lineHeight: 1 }}
        aria-hidden="true"
      >
        &#8221;
      </div>

      {/* Star rating */}
      <div className="flex items-center gap-0.5 mb-4" aria-label={`${t.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4"
            style={{
              fill: i < t.rating ? "#f59e0b" : "rgba(255,255,255,0.1)",
              color: i < t.rating ? "#f59e0b" : "rgba(255,255,255,0.1)",
            }}
            aria-hidden="true"
          />
        ))}
        <span className="text-amber-400 text-xs font-bold ml-1">{t.rating}.0</span>
      </div>

      {/* Review text */}
      <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6 relative z-10">
        &ldquo;{t.review}&rdquo;
      </p>

      {/* Reviewer footer */}
      <div
        className="flex items-center gap-3 pt-4"
        style={{ borderTop: "1px solid rgba(0,170,86,0.12)" }}
      >
        <div
          className="flex items-center justify-center w-10 h-10 rounded-full text-white text-sm font-bold flex-shrink-0"
          style={{ background: AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length] }}
          aria-hidden="true"
        >
          {t.avatar}
        </div>
        <div className="min-w-0">
          <p className="text-white text-sm font-semibold truncate">{t.name}</p>
          <p className="text-gray-500 text-xs">{t.city}</p>
        </div>
        {/* Verified badge */}
        <div
          className="ml-auto flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full"
          style={{
            background: "rgba(0,170,86,0.12)",
            border: "1px solid rgba(0,170,86,0.28)",
            color: "#00cc66",
          }}
        >
          ✓ Verified
        </div>
      </div>
    </article>
  )
}

export function TestimonialsSection() {
  const header = useInView(0.1)
  const grid   = useInView(0.05)

  return (
    <section
      className="relative section overflow-hidden"
      style={{ background: "linear-gradient(180deg, #040a06 0%, #06110a 60%, #040a06 100%)" }}
      aria-labelledby="testimonials-heading"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg,transparent,rgba(0,170,86,0.3),transparent)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg,transparent,rgba(0,170,86,0.18),transparent)" }} />
        <div className="absolute top-1/2 left-1/4 w-72 h-72 -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(circle,rgba(0,170,86,0.05) 0%,transparent 70%)" }} />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle,rgba(0,170,86,0.04) 0%,transparent 70%)" }} />
      </div>

      <div className="container-custom relative z-10">

        {/* ── Heading ── */}
        <div
          ref={header.ref}
          className="text-center mb-14"
          style={{
            opacity: header.inView ? 1 : 0,
            transform: header.inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="section-label">Real Players</span>
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold font-display text-white mt-3 mb-3"
          >
            Users <span className="gradient-text">Review</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Over 100,000 Pakistani players earn real money with TD777 every day.
            Here is what some of them have to say.
          </p>
        </div>

        {/* ── Overall rating bar ── */}
        <div
          className="flex items-center justify-center gap-6 mb-12"
          style={{
            opacity: header.inView ? 1 : 0,
            transition: "opacity 0.7s ease 0.2s",
          }}
        >
          <div
            className="flex items-center gap-4 px-6 py-4 rounded-2xl"
            style={{
              background: "rgba(13,26,16,0.9)",
              border: "1px solid rgba(0,170,86,0.22)",
              boxShadow: "0 0 30px rgba(0,170,86,0.07)",
            }}
          >
            <div className="text-center">
              <div className="text-5xl font-black text-white font-display leading-none">4.8</div>
              <div className="text-xs text-gray-500 mt-1">out of 5</div>
            </div>
            <div
              className="w-px self-stretch"
              style={{ background: "rgba(0,170,86,0.2)" }}
              aria-hidden="true"
            />
            <div>
              <div className="flex items-center gap-1 mb-1" aria-label="4.8 out of 5 stars">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-gray-400 text-sm">Based on <strong className="text-white">50,000+</strong> reviews</p>
            </div>
          </div>
        </div>

        {/* ── Reviews grid ── */}
        <div
          ref={grid.ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {TESTIMONIALS.map((t, i) => (
            <ReviewCard key={i} t={t} index={i} inView={grid.inView} />
          ))}
        </div>

      </div>
    </section>
  )
}
