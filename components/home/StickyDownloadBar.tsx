"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Download, X, Star } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"

export function StickyDownloadBar() {
  const [visible, setVisible]     = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (!dismissed) setVisible(window.scrollY > 650)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [dismissed])

  if (dismissed) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{ transform: visible ? "translateY(0)" : "translateY(110%)", transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)" }}
      role="complementary"
      aria-label="Download TD777 APK"
    >
      {/* Progress bar accent at top */}
      <div className="h-[2px] w-full" style={{ background: "linear-gradient(90deg,#008c47,#00cc66,#008c47)" }} aria-hidden="true" />

      <div
        className="flex items-center justify-between gap-3 px-4 py-3 md:px-10"
        style={{
          background: "linear-gradient(135deg,#03290f 0%,#04380f 50%,#052e10 100%)",
          boxShadow: "0 -6px 32px rgba(0,170,86,0.28)",
        }}
      >
        {/* App info */}
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="hidden sm:flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
            style={{ background: "rgba(0,170,86,0.18)", border: "1px solid rgba(0,170,86,0.3)" }}
            aria-hidden="true"
          >
            <Download className="w-5 h-5 text-primary-400" />
          </div>
          <div className="min-w-0">
            <p className="text-white font-bold text-sm leading-tight truncate">
              TD777 APK {SITE_CONFIG.apkVersion}
            </p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="flex items-center gap-0.5" aria-hidden="true">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-gray-400 text-xs">{SITE_CONFIG.apkSize} · Free</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Link
          href={SITE_CONFIG.apkDownloadUrl}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            background: "linear-gradient(135deg,#007a3d 0%,#00AA56 60%,#008c47 100%)",
            color: "#fff",
            boxShadow: "0 4px 18px rgba(0,170,86,0.45)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
          aria-label={`Download TD777 APK ${SITE_CONFIG.apkVersion} free for Android`}
        >
          <Download className="w-4 h-4" aria-hidden="true" />
          Download APK Free
        </Link>

        {/* Bonus + dismiss */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="hidden md:block text-right">
            <p className="text-primary-400 font-black text-sm leading-tight">Rs111 Bonus</p>
            <p className="text-gray-500 text-xs">on sign-up · no deposit</p>
          </div>
          <button
            onClick={() => { setDismissed(true); setVisible(false) }}
            className="flex items-center justify-center w-7 h-7 rounded-full transition-all hover:bg-white/10 flex-shrink-0"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
            aria-label="Close download bar"
          >
            <X className="w-3.5 h-3.5 text-gray-400" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
