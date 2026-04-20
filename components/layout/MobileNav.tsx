"use client"

import Link from "next/link"
import Image from "next/image"
import { Download, X } from "lucide-react"
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants"

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  pathname: string
}

export function MobileNav({ isOpen, onClose, pathname }: MobileNavProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <nav
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-dark-800 border-l border-dark-700 flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-dark-700">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-2"
            aria-label="TD777 Game - Home"
          >
            <Image
              src="/images/td777-logo.png"
              alt="TD777 Game"
              width={36}
              height={36}
              className="rounded-xl"
            />
            <span className="text-xl font-bold font-display text-white">
              TD<span className="text-primary-400">777</span>
            </span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="flex items-center justify-center w-11 h-11 rounded-xl bg-dark-700 text-gray-400 hover:text-white hover:bg-dark-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Nav Links */}
        <ul className="flex-1 overflow-y-auto p-4 space-y-1">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href))
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center px-4 py-4 rounded-xl text-base font-medium transition-all duration-200 min-h-[44px] ${
                    isActive
                      ? "text-primary-400 bg-primary-500/10 border border-primary-500/20"
                      : "text-gray-300 hover:text-white hover:bg-dark-700"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* CTA Button */}
        <div className="p-6 border-t border-dark-700">
          <Link
            href={SITE_CONFIG.apkDownloadUrl}
            onClick={onClose}
            className="btn-accent w-full justify-center text-base py-4 min-h-[44px]"
            aria-label="Download TD777 APK for Android"
          >
            <Download className="w-5 h-5" aria-hidden="true" />
            Download TD777 APK Free
          </Link>
          <p className="text-center text-xs text-gray-500 mt-3">
            Android 5.0+ · {SITE_CONFIG.apkSize} · Free
          </p>
        </div>
      </nav>
    </>
  )
}
