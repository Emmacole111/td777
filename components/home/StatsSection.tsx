"use client"

import { useRef, useEffect, useState } from "react"
import { Users, Gamepad2, Gift, Zap, Star } from "lucide-react"

const STATS = [
  {
    icon: Users,
    target: 100,
    format: (v: number) => `${v}K+`,
    label: "Active Players",
    sublabel: "in Pakistan",
    color: "#00AA56",
  },
  {
    icon: Gamepad2,
    target: 500,
    format: (v: number) => `${v}+`,
    label: "Games Available",
    sublabel: "slots, cards & more",
    color: "#00cc66",
  },
  {
    icon: Gift,
    target: 111,
    format: (v: number) => `Rs${v}`,
    label: "Welcome Bonus",
    sublabel: "no deposit needed",
    color: "#00AA56",
  },
  {
    icon: Zap,
    target: 30,
    format: (v: number) => `${v} Min`,
    label: "Avg. Withdrawal",
    sublabel: "JazzCash & Easypaisa",
    color: "#00e070",
  },
  {
    icon: Star,
    target: 48,
    format: (v: number) => `${(v / 10).toFixed(1)}/5`,
    label: "Player Rating",
    sublabel: "50,000+ reviews",
    color: "#00AA56",
  },
]

function CountUp({
  target,
  format,
  trigger,
}: {
  target: number
  format: (v: number) => string
  trigger: boolean
}) {
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!trigger) return
    const DURATION = 1600
    const start = Date.now()
    const id = setInterval(() => {
      const p = Math.min((Date.now() - start) / DURATION, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(eased * target))
      if (p >= 1) clearInterval(id)
    }, 16)
    return () => clearInterval(id)
  }, [trigger, target])

  return <span>{format(val)}</span>
}

export function StatsSection() {
  const ref    = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold: 0.2 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative py-10 overflow-hidden"
      style={{ background: "linear-gradient(180deg,#040a06 0%,#071409 100%)" }}
      aria-label="TD777 key statistics"
    >
      {/* Top rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg,transparent,rgba(0,170,86,0.3),transparent)" }}
        aria-hidden="true"
      />

      <div className="container-custom">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {STATS.map(({ icon: Icon, target, format, label, sublabel, color }, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-3 py-5 rounded-2xl group"
              style={{
                background: "rgba(7,18,11,0.7)",
                border: "1px solid rgba(0,170,86,0.1)",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
                transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
              }}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center w-11 h-11 rounded-xl mb-3"
                style={{ background: `rgba(0,170,86,0.12)`, border: `1px solid rgba(0,170,86,0.22)` }}
                aria-hidden="true"
              >
                <Icon className="w-5 h-5" style={{ color }} />
              </div>

              {/* Animated number */}
              <div
                className="font-display font-black text-2xl md:text-3xl leading-none mb-1"
                style={{ color }}
                aria-live="polite"
              >
                <CountUp target={target} format={format} trigger={inView} />
              </div>

              {/* Label */}
              <p className="text-white font-semibold text-xs md:text-sm mt-1">{label}</p>
              <p className="text-gray-500 text-[10px] md:text-xs mt-0.5">{sublabel}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom rule */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg,transparent,rgba(0,170,86,0.2),transparent)" }}
        aria-hidden="true"
      />
    </section>
  )
}
