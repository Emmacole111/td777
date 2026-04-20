import Link from "next/link"
import Image from "next/image"
import { Shield } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Download APK", href: "/how-to-download" },
  { label: "Blog & Guides", href: "/blog" },
  { label: "Bonuses", href: "/td777-bonus" },
  { label: "About Us", href: "/about-us" },
]

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "How to Register", href: "/how-to-register" },
  { label: "How to Withdraw", href: "/how-to-withdraw" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 mb-4 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg w-fit"
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
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              TD777 Game is Pakistan&apos;s leading real money gaming platform.
              Download our free APK and start earning by playing Teen Patti,
              Rummy, Slots and more. Withdraw instantly via JazzCash &amp;
              Easypaisa.
            </p>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Shield className="w-3 h-3 text-green-400" aria-hidden="true" />
              <span>SSL Secured Platform</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              &copy; {currentYear} TD777 Game. All Rights Reserved.
            </p>

            <p className="text-xs text-gray-600 text-center md:text-right">
              For entertainment purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
