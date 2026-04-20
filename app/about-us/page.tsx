import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Zap, Users, Trophy, Heart, Target } from "lucide-react"
import { BreadCrumb } from "@/components/shared/BreadCrumb"
import { generatePageMetadata } from "@/lib/metadata"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata: Metadata = generatePageMetadata({
  title: "About TD777 Game Pakistan – Our Story & Mission",
  description:
    "Learn about TD777 Game – Pakistan's leading real money gaming platform. Our mission is to provide safe, fair, and entertaining gaming experiences for Pakistani players.",
  keywords: [
    "about td777",
    "td777 game pakistan",
    "td777 company",
    "td777 trusted platform",
    "td777 about us",
  ],
  slug: "about-us",
})

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "We use SSL encryption, secure payment processing, and advanced fraud detection to keep every player safe.",
    color: "text-green-400 bg-green-500/10",
  },
  {
    icon: Zap,
    title: "Fast & Reliable",
    description:
      "Instant deposits, fast withdrawals, and zero downtime — we respect your time and money.",
    color: "text-yellow-400 bg-yellow-500/10",
  },
  {
    icon: Users,
    title: "Community Focused",
    description:
      "Built for Pakistani players, with support in Urdu and English, and payment via local methods.",
    color: "text-blue-400 bg-blue-500/10",
  },
  {
    icon: Trophy,
    title: "Fair Play",
    description:
      "All games use certified RNG (Random Number Generator) technology to ensure fair outcomes.",
    color: "text-purple-400 bg-purple-500/10",
  },
  {
    icon: Heart,
    title: "Responsible Gaming",
    description:
      "We promote responsible gaming with deposit limits, self-exclusion tools, and 24/7 support.",
    color: "text-pink-400 bg-pink-500/10",
  },
  {
    icon: Target,
    title: "Constant Innovation",
    description:
      "We regularly add new games, features, and promotions to keep the experience fresh and exciting.",
    color: "text-orange-400 bg-orange-500/10",
  },
]

const stats = [
  { value: "100K+", label: "Registered Players" },
  { value: "Rs50M+", label: "Withdrawals Processed" },
  { value: "8+", label: "Games Available" },
  { value: "24/7", label: "Customer Support" },
]

export default function AboutUsPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container-custom py-8">
        <BreadCrumb
          items={[{ name: "About Us", href: "/about-us" }]}
        />

        <div className="max-w-5xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-14">
            <span className="section-label mb-4">Our Story</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
              About TD777 Game Pakistan
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              TD777 Game was created with one mission: to provide Pakistani
              players with a <strong className="text-white">safe</strong>,{" "}
              <strong className="text-white">fair</strong>, and{" "}
              <strong className="text-white">exciting</strong> real money gaming
              platform that supports local payment methods.
            </p>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14"
            role="list"
            aria-label="TD777 game statistics"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="card p-5 text-center"
                role="listitem"
              >
                <div className="text-3xl font-black gradient-text font-display mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mission */}
          <section className="mb-14" aria-labelledby="mission">
            <h2 id="mission" className="text-2xl md:text-3xl font-bold text-white mb-6">
              Our Mission
            </h2>
            <div className="card p-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-5">
                At TD777 Game, our mission is to make real money gaming
                accessible, safe, and enjoyable for every Pakistani player. We
                believe everyone deserves a fair chance to win, and we&apos;re
                committed to providing a transparent, secure platform where
                skill and luck can both be rewarded.
              </p>
              <p className="text-gray-300 leading-relaxed mb-5">
                We built TD777 because we saw a gap in the market — Pakistani
                players wanted a dedicated gaming platform that supports local
                payment methods like JazzCash and Easypaisa, operates in both
                English and Urdu, and provides 24/7 support from people who
                understand the local context.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, TD777 Game serves over 100,000 registered players across
                Pakistan, processing millions of rupees in withdrawals monthly.
                We&apos;re proud to be Pakistan&apos;s trusted gaming platform.
              </p>
            </div>
          </section>

          {/* Values */}
          <section className="mb-14" aria-labelledby="values">
            <h2 id="values" className="text-2xl md:text-3xl font-bold text-white mb-8">
              Why Choose TD777 Game?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div key={value.title} className="card-hover p-6">
                    <div
                      className={`flex items-center justify-center w-12 h-12 ${value.color} rounded-xl mb-4`}
                    >
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Trust section */}
          <section className="mb-14 card p-8" aria-labelledby="trust">
            <h2 id="trust" className="text-2xl font-bold text-white mb-5">
              Our Commitment to Trust
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Security &amp; Privacy
                </h3>
                <ul className="space-y-2">
                  {[
                    "SSL/TLS encryption for all data",
                    "Secure payment processing",
                    "Regular security audits",
                    "No sharing of personal data",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                      <Shield className="w-4 h-4 text-green-400" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Fair Gaming
                </h3>
                <ul className="space-y-2">
                  {[
                    "Certified RNG technology",
                    "Transparent payout rates",
                    "No manipulation of results",
                    "Equal opportunity for all players",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                      <Trophy className="w-4 h-4 text-yellow-400" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="p-8 bg-primary-gradient rounded-2xl text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Ready to Join 100,000+ Players?
            </h2>
            <p className="text-blue-100 mb-6">
              Download TD777 Game free and claim your Rs111 welcome bonus today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={SITE_CONFIG.apkDownloadUrl}
                className="btn-accent"
                aria-label="Download TD777 APK"
              >
                Download APK Free
              </Link>
              <Link
                href="/contact-us"
                className="btn-outline border-white/30 text-white hover:bg-white/10"
                aria-label="Contact TD777 support"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
