"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { Download, ArrowRight } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"

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

export function ConclusionSection() {
  const section = useInView(0.1)

  return (
    <section
      id="conclusion"
      className="section relative overflow-hidden"
      aria-labelledby="conclusion-heading"
      style={{ background: "rgba(7,20,10,0.5)" }}
    >
      {/* Decorative corner glows */}
      <div className="absolute top-0 left-0 w-80 h-80 pointer-events-none" aria-hidden="true"
        style={{ background: "radial-gradient(circle at top left, rgba(0,170,86,0.07) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 pointer-events-none" aria-hidden="true"
        style={{ background: "radial-gradient(circle at bottom right, rgba(0,170,86,0.07) 0%, transparent 70%)" }} />

      <div ref={section.ref} className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">

          {/* Animated rule */}
          <div
            className="h-px mb-8 origin-left"
            style={{
              background: "linear-gradient(90deg, #00AA56, rgba(0,170,86,0.1))",
              transform: section.inView ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 1s ease-out",
            }}
          />

          <div style={{
            opacity: section.inView ? 1 : 0,
            transform: section.inView ? "none" : "translateY(24px)",
            transition: "opacity 0.7s ease 200ms, transform 0.7s ease 200ms",
          }}>
            <h2
              id="conclusion-heading"
              className="text-3xl md:text-4xl font-bold text-white mb-5"
            >
              Conclusion
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              TD777 is a legitimate real-money gaming application built specifically for Pakistan. It pays withdrawals reliably via JazzCash and Easypaisa, offers a wider game library than most alternatives in the market, and gives every new player a genuine Rs111 no-deposit bonus to start with. Installation takes five minutes on any Android phone running version 5.0 or above.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have read through this page, you now know how the APK installation works, how to register and log in, how to deposit and withdraw, and what security features protect your account. You have everything you need to start confidently.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              One last reminder before you play: use the in-app deposit limits from day one, treat the platform as entertainment first, and only stake what you are comfortable losing. That mindset keeps the experience enjoyable over the long term. If anything comes up, our{" "}
              <Link href="/contact-us" className="text-primary-400 hover:text-primary-300 underline">
                support team
              </Link>{" "}
              is on WhatsApp around the clock.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4" style={{
            opacity: section.inView ? 1 : 0,
            transform: section.inView ? "none" : "translateY(16px)",
            transition: "opacity 0.7s ease 400ms, transform 0.7s ease 400ms",
          }}>
            <Link
              href={SITE_CONFIG.apkDownloadUrl}
              className="btn-primary flex items-center justify-center gap-2"
              aria-label={`Download TD777 ${SITE_CONFIG.apkVersion} APK`}
            >
              <Download className="w-5 h-5" aria-hidden="true" />
              Download TD777 APK Free
            </Link>
            <Link
              href="/blog"
              className="btn-secondary flex items-center justify-center gap-2 group"
            >
              Read More Guides
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
