"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Download, Menu, X } from "lucide-react"
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants"
import { MobileNav } from "./MobileNav"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileOpen])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={
          isScrolled
            ? {
                background: "rgba(4,6,13,0.92)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                borderBottom: "1px solid rgba(0,170,86,0.12)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,0,0,0.2)",
              }
            : { background: "transparent" }
        }
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-none rounded-lg"
              aria-label="TD777 Game - Home"
            >
              <Image
                src="/images/td777-logo.png"
                alt="TD777 Game"
                width={36}
                height={36}
                className="rounded-xl transition-all duration-200 group-hover:scale-105"
                style={{ boxShadow: "0 4px 12px rgba(0,170,86,0.4)" }}
              />
              <span className="text-xl font-bold font-display text-white">
                TD<span className="shimmer-text">777</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href))
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                    style={
                      isActive
                        ? { color: "#00cc66", background: "rgba(0,170,86,0.1)" }
                        : { color: "#9ca3af" }
                    }
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "#fff"
                        e.currentTarget.style.background = "rgba(255,255,255,0.04)"
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "#9ca3af"
                        e.currentTarget.style.background = "transparent"
                      }
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                href={SITE_CONFIG.apkDownloadUrl}
                className="btn-primary text-sm px-5 py-2.5"
                aria-label="Download TD777 APK"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                Download APK
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-200"
              style={{
                background: "rgba(7,17,10,0.8)",
                border: "1px solid rgba(0,170,86,0.2)",
                color: "#00AA56",
              }}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        pathname={pathname}
      />
    </>
  )
}
