import type { Metadata } from "next"
import Link from "next/link"
import { CreditCard, CheckCircle, AlertCircle } from "lucide-react"
import { BreadCrumb } from "@/components/shared/BreadCrumb"
import { generatePageMetadata } from "@/lib/metadata"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata: Metadata = generatePageMetadata({
  title: "How to Deposit Money on TD777 – JazzCash & Easypaisa Guide 2026",
  description:
    "Learn how to deposit money on TD777 Game using JazzCash or Easypaisa. Minimum Rs100. Instant deposit guide for Pakistani players.",
  keywords: [
    "td777 deposit",
    "td777 jazzcash deposit",
    "td777 easypaisa deposit",
    "td777 mein paisa kaise dale",
    "td777 deposit guide pakistan",
    "td777 minimum deposit",
  ],
  slug: "how-to-deposit",
})

const depositMethods = [
  {
    name: "JazzCash",
    emoji: "📱",
    minAmount: "Rs100",
    processingTime: "Instant",
    steps: [
      "Open TD777 app and go to Wallet",
      "Tap 'Deposit' button",
      "Select 'JazzCash' as payment method",
      "Enter your JazzCash mobile number",
      "Enter deposit amount (minimum Rs100)",
      "Confirm your JazzCash MPIN",
      "Enter OTP if required",
      "Balance credited instantly!",
    ],
  },
  {
    name: "Easypaisa",
    emoji: "📲",
    minAmount: "Rs100",
    processingTime: "Instant",
    steps: [
      "Open TD777 app and go to Wallet",
      "Tap 'Deposit' button",
      "Select 'Easypaisa' as payment method",
      "Enter your Easypaisa mobile number",
      "Enter deposit amount (minimum Rs100)",
      "Confirm with your Easypaisa PIN",
      "Enter OTP sent to your number",
      "Balance credited instantly!",
    ],
  },
]

export default function HowToDepositPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container-custom py-8">
        <BreadCrumb
          items={[{ name: "How to Deposit", href: "/how-to-deposit" }]}
        />

        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <span className="section-label mb-4">Deposit Guide</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-5">
              How to Deposit Money on TD777 – JazzCash &amp; Easypaisa
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Depositing money on TD777 Game is quick and easy. Use{" "}
              <strong className="text-white">JazzCash</strong> or{" "}
              <strong className="text-white">Easypaisa</strong> to instantly
              fund your account with as little as{" "}
              <strong className="text-accent-400">Rs100</strong>.
            </p>
          </div>

          {/* Deposit info summary */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { label: "Minimum Deposit", value: "Rs100", emoji: "💰" },
              { label: "Processing Time", value: "Instant", emoji: "⚡" },
              { label: "Deposit Fee", value: "Zero", emoji: "🎁" },
            ].map((item) => (
              <div key={item.label} className="card p-5 text-center">
                <div className="text-3xl mb-2" aria-hidden="true">{item.emoji}</div>
                <div className="text-xl font-bold text-white">{item.value}</div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Payment methods */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {depositMethods.map((method) => (
              <div key={method.name} className="card p-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl" aria-hidden="true">{method.emoji}</span>
                  Deposit via {method.name}
                </h2>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-dark-700 rounded-lg p-3">
                    <p className="text-xs text-gray-500">Min Amount</p>
                    <p className="text-sm font-semibold text-white">{method.minAmount}</p>
                  </div>
                  <div className="bg-dark-700 rounded-lg p-3">
                    <p className="text-xs text-gray-500">Processing</p>
                    <p className="text-sm font-semibold text-white">{method.processingTime}</p>
                  </div>
                </div>
                <ol className="space-y-2">
                  {method.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center bg-primary-500/20 text-primary-400 rounded text-xs font-bold mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-sm text-gray-300">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          {/* Common Issues */}
          <div className="card p-6 mb-10">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-accent-400" aria-hidden="true" />
              Common Deposit Issues &amp; Solutions
            </h2>
            <div className="space-y-4">
              {[
                {
                  issue: "Deposit deducted but balance not credited",
                  solution:
                    "Wait 5-10 minutes and refresh the app. If still not credited, contact support with your transaction ID.",
                },
                {
                  issue: "JazzCash/Easypaisa MPIN forgotten",
                  solution:
                    "Reset your MPIN through the respective mobile wallet app.",
                },
                {
                  issue: "Insufficient balance error",
                  solution:
                    "Ensure your JazzCash/Easypaisa account has sufficient balance. Load money at any franchise or bank.",
                },
              ].map((item) => (
                <div key={item.issue} className="border-l-2 border-primary-500 pl-4">
                  <p className="text-white font-medium text-sm">❓ {item.issue}</p>
                  <p className="text-gray-400 text-sm mt-1">✅ {item.solution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="card p-6 mb-10">
            <h2 className="text-xl font-bold text-white mb-4">
              💡 Pro Tips for Deposits
            </h2>
            <ul className="space-y-2">
              {[
                "Always verify your wallet number before confirming",
                "Keep your transaction reference number safe",
                "Deposit during daytime for fastest processing",
                "Rs111 welcome bonus is free – no deposit needed for first play",
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-2">
                  <CheckCircle
                    className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-300">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="p-8 bg-primary-gradient rounded-2xl text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Haven&apos;t Downloaded TD777 Yet?
            </h2>
            <p className="text-blue-100 mb-6">
              Download free, register, and get Rs111 bonus before your first deposit!
            </p>
            <Link
              href={SITE_CONFIG.apkDownloadUrl}
              className="btn-accent inline-flex items-center gap-2"
              aria-label="Download TD777 APK"
            >
              <CreditCard className="w-5 h-5" aria-hidden="true" />
              Download TD777 Free
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
