"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Smartphone } from "lucide-react"

const SCREENSHOTS = [
  {
    src: "/images/td777-apk.webp",
    alt: "TD777 APK — app overview and download screen",
    label: "APK Download",
    desc: "Download the official TD777 APK free for Android",
  },
  {
    src: "/images/td777-game.webp",
    alt: "TD777 game lobby — Aviator, JILI Slots, Fortune Gems, Crash",
    label: "Game Lobby",
    desc: "500+ games — Aviator, Slots, Cards & more",
  },
  {
    src: "/images/td777-registration.webp",
    alt: "TD777 registration and login screen",
    label: "Quick Sign-Up",
    desc: "Create your account in under 60 seconds",
  },
  {
    src: "/images/td777-vip-membership.webp",
    alt: "TD777 VIP membership benefits and welcome bonus",
    label: "VIP Membership",
    desc: "Exclusive rewards and cashback for loyal players",
  },
  {
    src: "/images/td777-withdrawal.webp",
    alt: "TD777 add money and fast withdrawal screen",
    label: "Fast Withdrawals",
    desc: "Cash out via JazzCash & Easypaisa in minutes",
  },
]

const DURATION_MS = 4500

// Deterministic sparkle positions — no Math.random to prevent hydration mismatch
const SPARKLES = Array.from({ length: 16 }, (_, i) => ({
  left:    `${(i * 39 + 7) % 100}%`,
  delay:   `${(i * 0.28) % 3}s`,
  dur:     `${2.6 + (i % 5) * 0.5}s`,
  size:    (i % 3) + 2,
  opacity: 0.10 + (i % 4) * 0.05,
}))

// ── Card dimensions (landscape) ──────────────────────────
const CARD_W = 400   // px — centre card width
const CARD_H = 370   // px — centre card height

export function AppScreenshotsSlider() {
  const n = SCREENSHOTS.length
  const [active, setActive]   = useState(0)
  const [paused, setPaused]   = useState(false)
  const [progress, setProgress] = useState(0)
  const [inView, setInView]   = useState(false)
  const [dragStart, setDragStart] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // ── Scroll-reveal ──────────────────────────────────────
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold: 0.1 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // ── Auto-advance ───────────────────────────────────────
  useEffect(() => {
    if (paused) return
    const TICK = 40
    let elapsed = 0
    const id = setInterval(() => {
      elapsed += TICK
      setProgress(Math.min((elapsed / DURATION_MS) * 100, 100))
      if (elapsed >= DURATION_MS) {
        setActive(a => (a + 1) % n)
        elapsed = 0
        setProgress(0)
      }
    }, TICK)
    return () => clearInterval(id)
  }, [active, paused, n])

  const goTo   = useCallback((i: number) => { setActive(i); setProgress(0) }, [])
  const goPrev = useCallback(() => goTo((active - 1 + n) % n), [active, n, goTo])
  const goNext = useCallback(() => goTo((active + 1) % n),     [active, n, goTo])

  // ── Touch / swipe ──────────────────────────────────────
  const onPointerDown = (e: React.PointerEvent) => setDragStart(e.clientX)
  const onPointerUp   = (e: React.PointerEvent) => {
    if (dragStart === null) return
    const delta = e.clientX - dragStart
    if (Math.abs(delta) > 48) {
      if (delta > 0) { goPrev() } else { goNext() }
    }
    setDragStart(null)
  }

  // ── Visual offset per slide (−2 … +2) ─────────────────
  const getOffset = (i: number) => {
    let d = ((i - active) % n + n) % n
    if (d > Math.floor(n / 2)) d -= n
    return Math.max(-2, Math.min(2, d))
  }

  // ── 3-D coverflow transform ────────────────────────────
  // perspective lives on the CONTAINER div — per-element perspective causes
  // subpixel compositing blur; container-level perspective renders sharper.
  const slideStyle = (i: number): React.CSSProperties => {
    const d = getOffset(i)
    type S = { tx: string; ry: string; scale: number; op: number; z: number }
    const MAP: Record<number, S> = {
      [-2]: { tx: "calc(-50% - 430px)", ry:  "34deg", scale: 0.52, op: 0.12, z: 1  },
      [-1]: { tx: "calc(-50% - 260px)", ry:  "20deg", scale: 0.76, op: 0.58, z: 10 },
       [0]: { tx: "-50%",               ry:   "0deg", scale: 1.00, op: 1.00, z: 20 },
       [1]: { tx: "calc(-50% + 260px)", ry: "-20deg", scale: 0.76, op: 0.58, z: 10 },
       [2]: { tx: "calc(-50% + 430px)", ry: "-34deg", scale: 0.52, op: 0.12, z: 1  },
    }
    const c = MAP[d] ?? MAP[0]
    return {
      position: "absolute",
      left: "50%",
      top: 0,
      width: `${CARD_W}px`,
      // No perspective() here — handled by the container
      transform: `translateX(${c.tx}) rotateY(${c.ry}) scale(${c.scale})`,
      opacity: c.op,
      zIndex: c.z,
      // Active card gets no filter at all — even identity filters add compositing overhead
      filter: d !== 0 ? `brightness(${0.35 + (1 - Math.abs(d)) * 0.25}) saturate(0.7)` : "none",
      transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ease, filter 0.5s ease",
      cursor: d !== 0 ? "pointer" : "default",
      willChange: "transform",
      backfaceVisibility: "hidden",
    }
  }

  // ── Scroll-reveal helper ───────────────────────────────
  const show = (delay = "0s"): React.CSSProperties => ({
    opacity:   inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.7s ease ${delay}, transform 0.7s ease ${delay}`,
  })

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #040a06 0%, #071409 55%, #040a06 100%)" }}
    >
      {/* ── Decorative lines + glow ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg,transparent,rgba(0,170,86,0.38),transparent)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg,transparent,rgba(0,170,86,0.22),transparent)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: "700px", height: "400px",
            background: "radial-gradient(ellipse,rgba(0,170,86,0.07) 0%,transparent 68%)" }} />
      </div>

      {/* ── Floating sparkles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {SPARKLES.map((sp, i) => (
          <div key={i} className="absolute rounded-full animate-float"
            style={{
              left: sp.left, bottom: "-8px",
              width: `${sp.size}px`, height: `${sp.size}px`,
              background: "#00AA56", opacity: sp.opacity,
              animationDelay: sp.delay, animationDuration: sp.dur,
              filter: "blur(0.6px)",
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">

        {/* ── Heading ── */}
        <div className="text-center mb-14" style={show()}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{ background: "rgba(0,170,86,0.1)", border: "1px solid rgba(0,170,86,0.28)", color: "#00cc66" }}>
            <Smartphone className="w-3.5 h-3.5" aria-hidden="true" />
            Visual Tour
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
            App <span className="gradient-text">Screenshots</span>
          </h2>
          <p className="text-gray-400 max-w-sm mx-auto text-sm leading-relaxed">
            Real gameplay, real wins, real withdrawals — see it for yourself
          </p>
        </div>

        {/* ── 3-D Landscape Coverflow ── */}
        <div
          className="relative select-none"
          style={{
            height: `${CARD_H + 60}px`,
            perspective: "1400px",
            perspectiveOrigin: "50% 50%",
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          {SCREENSHOTS.map((shot, i) => {
            const d       = getOffset(i)
            const isActive = d === 0
            return (
              <div
                key={i}
                style={slideStyle(i)}
                onClick={() => !isActive && goTo(i)}
              >
                {/* ── Landscape card frame ── */}
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    width: `${CARD_W}px`,
                    height: `${CARD_H}px`,
                    position: "relative",
                    background: "#0a0a0a",
                    boxShadow: isActive
                      ? "0 0 0 1.5px rgba(0,170,86,0.55), 0 28px 70px rgba(0,0,0,0.85), 0 0 60px rgba(0,170,86,0.22)"
                      : "0 0 0 1px rgba(255,255,255,0.07), 0 12px 36px rgba(0,0,0,0.65)",
                  }}
                >
                  {/* Animated border glow on active */}
                  {isActive && (
                    <div
                      className="absolute inset-0 rounded-2xl pointer-events-none animate-glow-ring"
                      style={{ border: "1.5px solid rgba(0,170,86,0.5)", zIndex: 10 }}
                      aria-hidden="true"
                    />
                  )}

                  {/* Top "screen chrome" bar */}
                  <div
                    className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 z-10 flex-shrink-0"
                    style={{ height: "36px", background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
                    aria-hidden="true"
                  >
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(0,170,86,0.7)" }} />
                      <span className="text-white/50 text-[10px] font-medium">TD777</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-green-400 text-[9px] font-semibold">LIVE</span>
                    </div>
                  </div>

                  {/* Screenshot image fills the card */}
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    className="object-cover object-top"
                    sizes={`${CARD_W}px`}
                    priority={i <= 1}
                  />

                  {/* Bottom gradient overlay so label is readable */}
                  {isActive && (
                    <div
                      className="absolute bottom-0 left-0 right-0 h-16 z-10"
                      style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)" }}
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Ground glow */}
                {isActive && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
                    style={{ bottom: "-14px", width: "280px", height: "14px",
                      background: "rgba(0,170,86,0.28)", filter: "blur(12px)" }}
                    aria-hidden="true"
                  />
                )}
              </div>
            )
          })}
        </div>

        {/* ── Slide label ── */}
        <div className="text-center mt-6 h-14" style={show("0.15s")}>
          <div key={active} style={{ animation: "fadeInUp 0.38s ease both" }}>
            <div className="gradient-text font-bold text-xl font-display">
              {SCREENSHOTS[active].label}
            </div>
            <div className="text-gray-400 text-sm mt-0.5">
              {SCREENSHOTS[active].desc}
            </div>
          </div>
        </div>

        {/* ── Navigation ── */}
        <div className="flex items-center justify-center gap-5 mt-5" style={show("0.25s")}>

          <button
            onClick={goPrev}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
            style={{ background: "rgba(0,170,86,0.12)", border: "1px solid rgba(0,170,86,0.32)" }}
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-5 h-5 text-primary-400" />
          </button>

          {/* Progress pill dots */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Screenshot navigation">
            {SCREENSHOTS.map((s, i) => {
              const isA = i === active
              return (
                <button
                  key={i}
                  role="tab"
                  aria-selected={isA}
                  aria-label={`${s.label}`}
                  onClick={() => goTo(i)}
                  className="relative rounded-full overflow-hidden transition-all duration-300"
                  style={{ width: isA ? "36px" : "8px", height: "8px",
                    background: isA ? "rgba(0,170,86,0.28)" : "rgba(255,255,255,0.18)" }}
                >
                  {isA && (
                    <div
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{ width: `${progress}%`,
                        background: "linear-gradient(90deg,#008c47,#00cc66)",
                        transition: "width 0.04s linear" }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          <button
            onClick={goNext}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
            style={{ background: "rgba(0,170,86,0.12)", border: "1px solid rgba(0,170,86,0.32)" }}
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-5 h-5 text-primary-400" />
          </button>
        </div>

        {/* ── Landscape thumbnail strip ── */}
        <div className="flex items-center justify-center gap-3 mt-8" style={show("0.35s")}>
          {SCREENSHOTS.map((shot, i) => {
            const isA = i === active
            return (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="relative overflow-hidden flex-shrink-0 transition-all duration-300 rounded-lg"
                style={{
                  width: "80px", height: "50px",
                  opacity: isA ? 1 : 0.38,
                  border: isA ? "2px solid rgba(0,170,86,0.85)" : "2px solid rgba(255,255,255,0.1)",
                  transform: isA ? "scale(1.08)" : "scale(1)",
                  boxShadow: isA ? "0 0 14px rgba(0,170,86,0.45)" : "none",
                }}
                aria-label={`Jump to ${shot.label}`}
              >
                <Image
                  src={shot.src}
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="80px"
                  aria-hidden="true"
                />
              </button>
            )
          })}
        </div>

      </div>
    </section>
  )
}
