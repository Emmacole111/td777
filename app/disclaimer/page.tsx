import type { Metadata } from "next"
import { AlertTriangle } from "lucide-react"
import { BreadCrumb } from "@/components/shared/BreadCrumb"
import { generatePageMetadata } from "@/lib/metadata"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata: Metadata = generatePageMetadata({
  title: "Disclaimer – TD777 Game Pakistan | 18+ Responsible Gaming",
  description:
    "Read TD777 Game's official disclaimer. Important information about gambling risks, age restrictions (18+), affiliate disclosure, and terms of use for Pakistani users.",
  keywords: [
    "td777 disclaimer",
    "td777 terms",
    "td777 responsible gaming",
    "td777 gambling warning",
    "td777 18 plus",
  ],
  slug: "disclaimer",
})

export default function DisclaimerPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container-custom py-8">
        <BreadCrumb
          items={[{ name: "Disclaimer", href: "/disclaimer" }]}
        />

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Disclaimer – TD777 Game Pakistan
            </h1>
            <p className="text-gray-400 text-sm">
              Last Updated: April 17, 2026
            </p>
          </div>

          {/* Age restriction prominent notice */}
          <div
            className="flex items-start gap-4 p-5 bg-red-500/10 border-2 border-red-500/30 rounded-2xl mb-10"
            role="alert"
          >
            <AlertTriangle
              className="w-8 h-8 text-red-400 flex-shrink-0 mt-1"
              aria-hidden="true"
            />
            <div>
              <h2 className="text-xl font-bold text-red-300 mb-2">
                18+ Only – Age Restriction Notice
              </h2>
              <p className="text-red-200 leading-relaxed">
                TD777 Game is strictly for users aged{" "}
                <strong>18 years and above</strong>. By accessing, downloading,
                or using TD777 Game, you confirm that you are at least 18 years
                old. If you are under 18, you must immediately stop using this
                platform and delete the app. Parents and guardians should
                monitor minors&apos; device usage to prevent access to gaming
                platforms.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* General Disclaimer */}
            <section aria-labelledby="general-disclaimer">
              <h2 id="general-disclaimer" className="text-xl font-bold text-white mb-4 pb-2 border-b border-dark-700">
                1. General Disclaimer
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The information provided on TD777 Game website and application
                is for general informational purposes only. While we strive to
                keep information accurate and up-to-date, TD777 Game makes no
                representations or warranties of any kind, express or implied,
                about the completeness, accuracy, reliability, suitability, or
                availability of the information, products, services, or related
                graphics on the platform.
              </p>
              <p className="text-gray-300 leading-relaxed">
                TD777 Game is not responsible for any losses, damages, or
                liabilities arising from the use of information provided on
                this platform. All gaming activities are subject to our Terms
                and Conditions.
              </p>
            </section>

            {/* Gambling Risk Warning */}
            <section aria-labelledby="gambling-risk">
              <h2 id="gambling-risk" className="text-xl font-bold text-white mb-4 pb-2 border-b border-dark-700">
                2. Gambling Risk Warning
              </h2>
              <div className="card p-5 border-orange-500/30 bg-orange-500/5">
                <p className="text-orange-200 leading-relaxed mb-4">
                  <strong className="text-orange-300">
                    ⚠️ Important: Gambling involves financial risk.
                  </strong>{" "}
                  Please be aware of the following:
                </p>
                <ul className="space-y-2">
                  {[
                    "Never gamble with money you cannot afford to lose",
                    "Gambling should be for entertainment, not as a primary income source",
                    "The house always maintains an edge in casino-style games",
                    "Past winnings do not guarantee future results",
                    "If you feel gambling is becoming a problem, seek help immediately",
                    "Addiction helpline is available at 1099 (Pakistan)",
                  ].map((warning) => (
                    <li
                      key={warning}
                      className="flex items-start gap-2 text-orange-200 text-sm"
                    >
                      <span className="text-orange-400 mt-0.5">•</span>
                      {warning}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Affiliate Disclosure */}
            <section aria-labelledby="affiliate-disclosure">
              <h2 id="affiliate-disclosure" className="text-xl font-bold text-white mb-4 pb-2 border-b border-dark-700">
                3. Affiliate Disclosure
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                TD777 Game operates an affiliate/referral program where users
                can earn commissions by referring new players. Blog content,
                guides, and promotional materials on this website may contain
                affiliate links or promotional content.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our editorial content is written independently of affiliate
                relationships. We only recommend products and services we
                believe are beneficial to our users. Affiliate relationships do
                not influence our editorial content, reviews, or rankings.
              </p>
            </section>

            {/* External Links */}
            <section aria-labelledby="external-links">
              <h2 id="external-links" className="text-xl font-bold text-white mb-4 pb-2 border-b border-dark-700">
                4. External Links
              </h2>
              <p className="text-gray-300 leading-relaxed">
                TD777 Game website may contain links to external websites,
                including JazzCash, Easypaisa, and other third-party services.
                These links are provided for convenience only. TD777 Game has
                no control over the content of those sites and accepts no
                responsibility for them or for any loss or damage arising from
                your use of them.
              </p>
            </section>

            {/* No Investment Advice */}
            <section aria-labelledby="no-investment">
              <h2 id="no-investment" className="text-xl font-bold text-white mb-4 pb-2 border-b border-dark-700">
                5. Not Investment Advice
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Nothing on TD777 Game should be construed as financial,
                investment, or legal advice. Gaming outcomes are based on
                chance and/or skill and are not predictable. Any winnings from
                gaming should not be considered as guaranteed income or
                investment returns.
              </p>
            </section>

            {/* Responsible Gaming */}
            <section aria-labelledby="responsible-gaming">
              <h2 id="responsible-gaming" className="text-xl font-bold text-white mb-4 pb-2 border-b border-dark-700">
                6. Responsible Gaming Commitment
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                TD777 Game is committed to responsible gaming. We provide
                tools to help users manage their gaming activity:
              </p>
              <ul className="space-y-2">
                {[
                  "Daily/weekly deposit limits can be set in account settings",
                  "Self-exclusion option available for users who need a break",
                  "Reality checks show time spent gaming",
                  "24/7 customer support for problem gambling concerns",
                ].map((tool) => (
                  <li key={tool} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-green-400 mt-0.5">✓</span>
                    {tool}
                  </li>
                ))}
              </ul>
            </section>

            {/* Contact */}
            <section
              aria-labelledby="disclaimer-contact"
              className="card p-6"
            >
              <h2
                id="disclaimer-contact"
                className="text-xl font-bold text-white mb-3"
              >
                Contact Us
              </h2>
              <p className="text-gray-300 mb-3">
                If you have questions about this disclaimer or need assistance
                with responsible gaming resources, please contact us:
              </p>
              <p className="text-primary-400">
                Email:{" "}
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}`}
                  className="hover:text-primary-300 underline"
                >
                  {SITE_CONFIG.contactEmail}
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
