"use client"

import { useRef, useEffect, useState } from "react"
import { Plus, Minus } from "lucide-react"
import { FAQ_LIST } from "@/lib/constants"

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

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const section = useInView(0.08)

  return (
    <section
      className="section"
      style={{ background: "rgba(4,10,6,0.95)" }}
      aria-labelledby="faq-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <div
          ref={section.ref}
          className="section-header transition-all duration-700"
          style={{
            opacity: section.inView ? 1 : 0,
            transform: section.inView ? "none" : "translateY(24px)",
          }}
        >
          <span className="section-label">FAQ</span>
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold text-white mt-3"
          >
            Frequently Asked Questions About TD777
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Find answers to the most common questions about downloading, playing, and withdrawing from TD777 Game.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: isOpen ? "rgba(13,26,16,0.9)" : "rgba(10,20,12,0.7)",
                  border: isOpen
                    ? "1px solid rgba(0,170,86,0.3)"
                    : "1px solid rgba(255,255,255,0.06)",
                  boxShadow: isOpen ? "0 0 24px rgba(0,170,86,0.08), 0 4px 16px rgba(0,0,0,0.4)" : "none",
                  opacity: section.inView ? 1 : 0,
                  transform: section.inView ? "none" : "translateY(16px)",
                  transition: `opacity 0.6s ease ${index * 60}ms, transform 0.6s ease ${index * 60}ms, background 0.3s, border-color 0.3s, box-shadow 0.3s`,
                }}
              >
                <h3>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full px-6 py-5 text-left focus:outline-none"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    {/* Number badge */}
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold mr-4 transition-all duration-300"
                      style={
                        isOpen
                          ? { background: "#00AA56", color: "#fff" }
                          : { background: "rgba(0,170,86,0.12)", color: "#00cc66" }
                      }
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className={`flex-1 text-base font-semibold pr-4 transition-colors duration-200 ${isOpen ? "text-primary-400" : "text-white"}`}>
                      {faq.question}
                    </span>

                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                      style={
                        isOpen
                          ? { background: "rgba(0,170,86,0.15)", color: "#00cc66" }
                          : { background: "rgba(255,255,255,0.05)", color: "#6b7280" }
                      }
                      aria-hidden="true"
                    >
                      {isOpen
                        ? <Minus className="w-3.5 h-3.5" />
                        : <Plus  className="w-3.5 h-3.5" />}
                    </span>
                  </button>
                </h3>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`overflow-hidden transition-all duration-400 ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  {/* Green left-accent bar */}
                  <div className="mx-6 mb-5 pl-4 border-l-2 border-primary-500/50">
                    <p className="text-gray-300 leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
