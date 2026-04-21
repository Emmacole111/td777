import Image from "next/image"
import Link from "next/link"
import { Download, ChevronRight, Star, Shield, Zap, Users } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"

// Card suits for background decoration
const SUITS = [
  { sym: "♠", top: "8%",  left: "4%",   size: "7rem",  rot: "-12deg", op: "0.03", delay: "0s"    },
  { sym: "♥", top: "20%", left: "92%",  size: "5rem",  rot:  "8deg",  op: "0.04", delay: "0.8s"  },
  { sym: "♦", top: "55%", left: "2%",   size: "6rem",  rot:  "18deg", op: "0.025",delay: "1.5s"  },
  { sym: "♣", top: "70%", left: "90%",  size: "9rem",  rot: "-6deg",  op: "0.03", delay: "0.4s"  },
  { sym: "♠", top: "40%", left: "96%",  size: "4rem",  rot:  "24deg", op: "0.02", delay: "2s"    },
  { sym: "♥", top: "85%", left: "8%",   size: "5.5rem",rot: "-20deg", op: "0.025",delay: "1.2s"  },
  { sym: "♦", top: "5%",  left: "70%",  size: "4.5rem",rot:  "10deg", op: "0.02", delay: "0.6s"  },
  { sym: "♣", top: "30%", left: "-1%",  size: "8rem",  rot: "-8deg",  op: "0.025",delay: "1.8s"  },
]

const trustBadges = [
  { icon: Users,  label: "100K+ Players",      color: "text-primary-400" },
  { icon: Shield, label: "Safe & Verified",    color: "text-green-400"   },
  { icon: Zap,    label: "Fast Withdrawals",   color: "text-primary-400" },
]


export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20"
      style={{ background: "radial-gradient(ellipse 100% 60% at 50% -5%, #0d2214 0%, #081409 40%, #040a06 100%)" }}
    >
      {/* ── Floating card suit decorations ── */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        {SUITS.map((s, i) => (
          <span
            key={i}
            className="absolute font-display leading-none animate-float"
            style={{
              top: s.top,
              left: s.left,
              fontSize: s.size,
              transform: `rotate(${s.rot})`,
              opacity: s.op,
              color: "#00AA56",
              animationDelay: s.delay,
              animationDuration: `${3.5 + i * 0.4}s`,
              filter: "blur(0.5px)",
            }}
          >
            {s.sym}
          </span>
        ))}
      </div>

      {/* ── Radial glow blobs ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,170,86,0.07) 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,170,86,0.05) 0%, transparent 70%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(10,30,15,0.6) 0%, transparent 70%)" }} />
      </div>

      {/* ── Casino grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,170,86,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(0,170,86,0.018) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Content ── */}
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">

            {/* Top badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-sm font-semibold"
              style={{
                background: "rgba(0,170,86,0.1)",
                border: "1px solid rgba(0,170,86,0.3)",
                color: "#00cc66",
              }}>
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse inline-block" />
              Pakistan&apos;s #1 Real Money Gaming App
            </div>

            {/* H1 */}
            <h1 className="font-display leading-tight text-white mb-6"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", textShadow: "0 2px 16px rgba(0,0,0,0.6)" }}>
              TD777 Game APK{" "}
              <span className="text-primary-400 block">Download 2026</span>
              <span className="text-gray-300 font-normal"
                style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
                Real Earning App Pakistan
              </span>
            </h1>

            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Play{" "}
              <strong className="text-white">Teen Patti, Aviator, Rummy &amp; Slots</strong>.
              {" "}Withdraw real cash via{" "}
              <strong className="text-primary-400">JazzCash &amp; Easypaisa</strong>{" "}
              in minutes. Get{" "}
              <strong className="text-accent-400">Rs111 free</strong>{" "}
              on sign-up — no deposit needed.
            </p>

            {/* Star rating */}
            <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start"
              aria-label="4.8 out of 5 star rating">
              <div className="flex items-center gap-0.5">
                {[1,2,3,4].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-primary-500 text-primary-500" aria-hidden="true" />
                ))}
                <Star className="w-5 h-5 fill-primary-500/50 text-primary-500/50" aria-hidden="true" />
              </div>
              <span className="text-primary-400 font-bold">4.8 / 5</span>
              <span className="text-gray-500 text-sm">· 50,000+ reviews</span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Link
                href={SITE_CONFIG.apkDownloadUrl}
                id="download"
                className="btn-primary text-base px-8 py-4 text-lg animate-glow-ring"
                aria-label="Download TD777 APK free for Android"
              >
                <Download className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                Download APK Free
              </Link>
              <Link
                href="/how-to-download"
                className="btn-outline text-base px-8 py-4 text-lg group"
                aria-label="Learn how to install TD777"
              >
                How to Install
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>

            {/* Hero preview image — mobile only */}
            <div className="block lg:hidden mb-8 flex justify-center">
              <Image
                src="/images/td777-hero-preview.png"
                alt="TD777 Game app preview – Rs111 bonus, 8,241 players online, V2.1.0"
                width={380}
                height={380}
                className="w-full max-w-xs rounded-2xl mx-auto"
                priority
              />
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start" role="list" aria-label="Trust signals">
              {trustBadges.map((b) => {
                const Icon = b.icon
                return (
                  <div
                    key={b.label}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                    role="listitem"
                  >
                    <Icon className={`w-4 h-4 ${b.color}`} aria-hidden="true" />
                    <span className="text-sm text-gray-300 font-medium">{b.label}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: Floating screenshot fan — desktop only */}
          <div className="hidden lg:flex relative order-1 lg:order-2 justify-center items-center py-8">

            {/* Ambient glow */}
            <div
              className="absolute rounded-full pointer-events-none"
              aria-hidden="true"
              style={{
                width: "420px", height: "420px",
                background: "radial-gradient(circle, rgba(0,170,86,0.16) 0%, transparent 62%)",
                filter: "blur(28px)",
              }}
            />

            {/* ── 3-card fan arrangement ── */}
            <div className="relative" style={{ width: "360px", height: "480px" }}>

              {/* Back-left card — td777 APK screen */}
              <div
                className="absolute overflow-hidden rounded-3xl"
                aria-hidden="true"
                style={{
                  width: "200px", height: "360px",
                  left: "0px", top: "55px",
                  transform: "rotate(-10deg)",
                  zIndex: 5,
                  filter: "brightness(0.5) blur(0.8px)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.75)",
                  border: "1px solid rgba(0,170,86,0.15)",
                }}
              >
                <Image
                  src="/images/td777-apk.webp"
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="200px"
                  priority
                />
              </div>

              {/* Back-right card — VIP membership */}
              <div
                className="absolute overflow-hidden rounded-3xl"
                aria-hidden="true"
                style={{
                  width: "200px", height: "360px",
                  right: "0px", top: "55px",
                  transform: "rotate(10deg)",
                  zIndex: 5,
                  filter: "brightness(0.5) blur(0.8px)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.75)",
                  border: "1px solid rgba(0,170,86,0.15)",
                }}
              >
                <Image
                  src="/images/td777-vip-membership.webp"
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="200px"
                  priority
                />
              </div>

              {/* Front-center card — game lobby (main) */}
              <div
                className="absolute left-1/2 -translate-x-1/2"
                style={{ zIndex: 15, top: "0px" }}
                aria-label="TD777 Game app preview"
                role="img"
              >
                <div
                  className="overflow-hidden rounded-[2.4rem]"
                  style={{
                    width: "215px", height: "420px",
                    position: "relative",
                    background: "#000",
                    border: "1.5px solid rgba(0,170,86,0.5)",
                    boxShadow:
                      "0 0 0 1px rgba(255,255,255,0.08), " +
                      "0 32px 80px rgba(0,0,0,0.9), " +
                      "0 0 50px rgba(0,170,86,0.22)",
                  }}
                >
                  {/* Green header bar */}
                  <div
                    className="flex items-center justify-between px-3 py-2 flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #00AA56 0%, #008c47 100%)", height: "34px" }}
                    aria-hidden="true"
                  >
                    <span className="text-white font-bold text-xs tracking-widest">TD777</span>
                    <div style={{ background: "rgba(0,0,0,0.25)", borderRadius: "8px", padding: "1px 6px" }}>
                      <span style={{ color: "#fff", fontSize: "8px", fontWeight: 600 }}>● LIVE</span>
                    </div>
                  </div>
                  {/* Game screenshot — wrapper sits below the 34px header bar */}
                  <div
                    style={{
                      position: "absolute",
                      top: "34px",
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  >
                    <Image
                      src="/images/td777-game.webp"
                      alt="TD777 games lobby — Aviator, JILI Slots, Fortune Gems, Crash and more"
                      fill
                      className="object-cover object-top"
                      sizes="215px"
                      priority
                    />
                  </div>
                </div>

                {/* Glow ring animation on front card */}
                <div
                  className="absolute inset-0 rounded-[2.4rem] pointer-events-none animate-glow-ring"
                  style={{ border: "1.5px solid rgba(0,170,86,0.4)" }}
                  aria-hidden="true"
                />
              </div>

              {/* ── Floating bonus badge ── */}
              <div
                className="absolute z-20 flex items-center justify-center w-20 h-20 rounded-2xl animate-bounce-subtle"
                style={{
                  top: "-16px", right: "12px",
                  background: "linear-gradient(135deg, #008c47 0%, #00cc66 100%)",
                  boxShadow: "0 8px 24px rgba(0,170,86,0.5), inset 0 1px 0 rgba(255,255,255,0.2)",
                  animationDuration: "2.8s",
                }}
                aria-label="Rs111 welcome bonus"
              >
                <div className="text-center leading-none">
                  <div className="text-[9px] font-bold text-white">Rs</div>
                  <div className="text-2xl font-black text-white" style={{ lineHeight: 1.1 }}>111</div>
                  <div className="text-[8px] font-bold text-white tracking-widest uppercase">Bonus</div>
                </div>
              </div>

              {/* ── Version badge ── */}
              <div
                className="absolute z-20 flex items-center gap-2 px-3 py-2 rounded-xl text-xs"
                style={{
                  bottom: "10px", left: "10px",
                  background: "rgba(7,17,10,0.97)",
                  border: "1px solid rgba(0,170,86,0.28)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.6)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <span className="text-gray-300 font-medium">
                  {SITE_CONFIG.apkVersion} · {SITE_CONFIG.apkSize}
                </span>
              </div>

              {/* ── Players online badge ── */}
              <div
                className="absolute z-20 flex items-center gap-2 px-3 py-2 rounded-xl text-xs"
                style={{
                  top: "160px", left: "-10px",
                  background: "rgba(7,17,10,0.92)",
                  border: "1px solid rgba(0,170,86,0.22)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.45)",
                }}
              >
                <Users className="w-3.5 h-3.5 text-primary-400" aria-hidden="true" />
                <span className="text-gray-300 font-medium whitespace-nowrap">8,241 online</span>
              </div>

              {/* Ground shadow */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
                aria-hidden="true"
                style={{
                  width: "260px", height: "20px",
                  background: "radial-gradient(ellipse, rgba(0,170,86,0.28) 0%, transparent 70%)",
                  filter: "blur(8px)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        aria-hidden="true"
        style={{ background: "linear-gradient(to bottom, transparent 0%, #040a06 100%)" }}
      />
    </section>
  )
}
