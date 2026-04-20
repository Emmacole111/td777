import type { Metadata } from "next"
import Link from "next/link"
import { Gift, CheckCircle, Star } from "lucide-react"
import { BreadCrumb } from "@/components/shared/BreadCrumb"
import { generatePageMetadata } from "@/lib/metadata"
import { BONUSES_LIST, SITE_CONFIG } from "@/lib/constants"

export const metadata: Metadata = generatePageMetadata({
  title: "TD777 Bonus & Promotions 2026 – Rs111 Welcome Bonus & Daily Rewards",
  description:
    "Claim TD777 Game bonuses including Rs111 welcome bonus, daily login rewards, 30% referral bonus, weekly leaderboard prizes and VIP cashback. Updated April 2026.",
  keywords: [
    "td777 bonus",
    "td777 rs111 bonus",
    "td777 welcome bonus",
    "td777 referral bonus",
    "td777 daily bonus",
    "td777 promotions pakistan",
    "td777 free bonus",
    "td777 vip cashback",
  ],
  slug: "td777-bonus",
})

export default function Td777BonusPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container-custom py-8">
        <BreadCrumb
          items={[{ name: "TD777 Bonus", href: "/td777-bonus" }]}
        />

        <div className="max-w-5xl mx-auto">
          {/* Page header */}
          <div className="mb-10 text-center">
            <span className="section-label mb-4">Promotions</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-5">
              TD777 Bonus &amp; Promotions 2026
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              TD777 Game offers the most generous bonuses for Pakistani players.
              From welcome bonuses to daily rewards — there&apos;s always
              something to claim!
            </p>
          </div>

          {/* Bonus cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {BONUSES_LIST.map((bonus) => (
              <article
                key={bonus.title}
                className="card overflow-hidden hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`h-2 w-full bg-gradient-to-r ${bonus.color}`}
                  aria-hidden="true"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="badge-primary text-xs">{bonus.badge}</span>
                    <span
                      className={`text-2xl font-black bg-gradient-to-r ${bonus.color} bg-clip-text text-transparent font-display`}
                    >
                      {bonus.amount}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-white mb-2">
                    {bonus.title}
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {bonus.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-xs text-green-400">
                    <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Active Offer</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* How to claim */}
          <section aria-labelledby="how-to-claim">
            <h2 id="how-to-claim" className="text-2xl font-bold text-white mb-6">
              How to Claim TD777 Welcome Bonus (Rs111)
            </h2>
            <div className="card p-6 mb-8">
              <ol className="space-y-4">
                {[
                  "Download and install TD777 Game APK from the official website",
                  "Open the app and tap 'Register' button",
                  "Enter your Pakistani mobile number and create a password",
                  "Verify your number with the OTP received via SMS",
                  "Complete your profile registration",
                  "The Rs111 bonus is automatically credited to your wallet!",
                  "Use the bonus to play games. Complete wagering to withdraw.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-7 h-7 flex-shrink-0 flex items-center justify-center bg-primary-500/20 text-primary-400 rounded-lg text-sm font-bold">
                      {i + 1}
                    </span>
                    <span className="text-gray-300">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Bonus terms */}
          <section aria-labelledby="bonus-terms">
            <h2 id="bonus-terms" className="text-2xl font-bold text-white mb-6">
              Bonus Terms &amp; Conditions
            </h2>
            <div className="card p-6 mb-10">
              <ul className="space-y-3">
                {[
                  "Welcome bonus Rs111 is for new accounts only – one per person",
                  "Bonus requires 3x wagering before withdrawal",
                  "Bonuses are valid for 7 days from credit date",
                  "Using fake accounts or multiple accounts will result in ban",
                  "TD777 reserves the right to modify bonus terms at any time",
                  "Bonus misuse or abuse will result in account suspension",
                ].map((term) => (
                  <li key={term} className="flex items-start gap-2 text-sm">
                    <Star
                      className="w-4 h-4 text-accent-400 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-gray-400">{term}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Referral program */}
          <section
            className="card p-8 mb-10 bg-gradient-to-br from-purple-900/30 to-dark-800"
            aria-labelledby="referral-program"
          >
            <h2
              id="referral-program"
              className="text-2xl font-bold text-white mb-4"
            >
              🎯 Referral Program – Earn 30% Commission
            </h2>
            <p className="text-gray-300 mb-5">
              TD777&apos;s referral program is one of the best in Pakistan. Refer a
              friend and earn{" "}
              <strong className="text-white">30% of their deposits</strong> as
              commission. There&apos;s no limit on how many friends you can refer!
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { step: "1", text: "Share your referral code/link" },
                { step: "2", text: "Friend registers & deposits" },
                { step: "3", text: "You earn 30% commission!" },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-dark-800/50 rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-black gradient-text font-display mb-2">
                    {item.step}
                  </div>
                  <p className="text-sm text-gray-300">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="p-8 bg-primary-gradient rounded-2xl text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Claim Your Rs111 Bonus Now!
            </h2>
            <p className="text-blue-100 mb-6">
              Download TD777, register free, and get your welcome bonus instantly.
            </p>
            <Link
              href={SITE_CONFIG.apkDownloadUrl}
              className="btn-accent inline-flex items-center gap-2"
              aria-label="Download TD777 APK and claim Rs111 bonus"
            >
              <Gift className="w-5 h-5" aria-hidden="true" />
              Download & Claim Bonus
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
