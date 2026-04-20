import type { Metadata } from "next"
import Link from "next/link"
import { Banknote, CheckCircle, AlertCircle } from "lucide-react"
import { BreadCrumb } from "@/components/shared/BreadCrumb"
import { generatePageMetadata } from "@/lib/metadata"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata: Metadata = generatePageMetadata({
  title: "How to Withdraw Money from TD777 – JazzCash & Easypaisa 2026",
  description:
    "Learn how to withdraw money from TD777 Game to JazzCash or Easypaisa. Minimum Rs200. Step-by-step withdrawal guide for Pakistani players.",
  keywords: [
    "td777 withdrawal",
    "td777 paise kaise nikale",
    "td777 jazzcash withdrawal",
    "td777 easypaisa withdrawal",
    "td777 withdraw guide pakistan",
    "td777 minimum withdrawal",
  ],
  slug: "how-to-withdraw",
})

const withdrawalSteps = [
  {
    step: 1,
    title: "Open TD777 App & Login",
    description: "Launch the TD777 Game app and log in with your credentials.",
  },
  {
    step: 2,
    title: "Go to Wallet Section",
    description:
      'Tap the "Wallet" icon in the bottom navigation menu of the app.',
  },
  {
    step: 3,
    title: "Select Withdraw",
    description: 'Tap the "Withdraw" button to open the withdrawal screen.',
  },
  {
    step: 4,
    title: "Choose Payment Method",
    description:
      "Select JazzCash or Easypaisa as your preferred withdrawal method.",
  },
  {
    step: 5,
    title: "Enter Your Account Number",
    description:
      "Enter your JazzCash or Easypaisa mobile number. Double-check it carefully.",
  },
  {
    step: 6,
    title: "Enter Withdrawal Amount",
    description:
      "Enter the amount you want to withdraw. Minimum is Rs200, maximum per day is Rs50,000.",
  },
  {
    step: 7,
    title: "OTP Verification",
    description:
      "An OTP will be sent to your registered mobile number. Enter it to confirm.",
  },
  {
    step: 8,
    title: "Wait for Processing",
    description:
      "Your withdrawal is submitted. Processing takes 30 minutes to 2 hours. You will receive an SMS when completed.",
  },
]

export default function HowToWithdrawPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container-custom py-8">
        <BreadCrumb
          items={[{ name: "How to Withdraw", href: "/how-to-withdraw" }]}
        />

        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <span className="section-label mb-4">Withdrawal Guide</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-5">
              How to Withdraw Money from TD777 – JazzCash &amp; Easypaisa
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Withdraw your TD777 Game earnings directly to{" "}
              <strong className="text-white">JazzCash</strong> or{" "}
              <strong className="text-white">Easypaisa</strong> in just a few
              minutes. Minimum withdrawal is only{" "}
              <strong className="text-accent-400">Rs200</strong>.
            </p>
          </div>

          {/* Withdrawal info summary */}
          <div className="grid sm:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Min Withdrawal", value: "Rs200", emoji: "💵" },
              { label: "Max Per Day", value: "Rs50,000", emoji: "📈" },
              { label: "Processing Time", value: "30 min – 2 hrs", emoji: "⏱️" },
              { label: "Withdrawal Fee", value: "Zero", emoji: "🎁" },
            ].map((item) => (
              <div key={item.label} className="card p-4 text-center">
                <div className="text-2xl mb-2" aria-hidden="true">{item.emoji}</div>
                <div className="text-lg font-bold text-white">{item.value}</div>
                <div className="text-xs text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Steps */}
          <h2 className="text-2xl font-bold text-white mb-6">
            Withdrawal Steps
          </h2>

          <ol className="space-y-5 mb-10" aria-label="TD777 withdrawal steps">
            {withdrawalSteps.map((step) => (
              <li key={step.step} className="card p-5 flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-primary-gradient rounded-xl text-white font-black">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Requirements */}
          <div className="card p-6 mb-10">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-accent-400" aria-hidden="true" />
              Withdrawal Requirements
            </h2>
            <ul className="space-y-3">
              {[
                "Your TD777 account must be verified with your real mobile number",
                "Minimum balance of Rs200 in your main wallet",
                "First withdrawal may require ID verification",
                "JazzCash or Easypaisa account must be active and verified",
                "Account name must match your registered name",
              ].map((req) => (
                <li key={req} className="flex items-start gap-2">
                  <CheckCircle
                    className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-gray-300">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Troubleshooting */}
          <div className="card p-6 mb-10">
            <h2 className="text-xl font-bold text-white mb-4">
              Withdrawal Issues &amp; Solutions
            </h2>
            <div className="space-y-4">
              {[
                {
                  issue: "Withdrawal stuck in pending",
                  solution: "Wait 2 hours. If still pending, screenshot the pending status and contact support via WhatsApp.",
                },
                {
                  issue: "Withdrawal rejected",
                  solution: "Ensure wagering requirements are met, account is verified, and minimum amount is Rs200.",
                },
                {
                  issue: "Wrong number entered",
                  solution: "Contact support immediately with your transaction details. Always double-check before confirming.",
                },
                {
                  issue: "Withdrawal not received after approval",
                  solution: "Check JazzCash/Easypaisa SMS notifications. Contact support if not received after 3 hours.",
                },
              ].map((item) => (
                <div key={item.issue} className="border-l-2 border-accent-500 pl-4">
                  <p className="text-white font-medium text-sm">❓ {item.issue}</p>
                  <p className="text-gray-400 text-sm mt-1">✅ {item.solution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="p-8 bg-primary-gradient rounded-2xl text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Start Earning on TD777 Today
            </h2>
            <p className="text-blue-100 mb-6">
              Download free, claim Rs111 bonus, play and withdraw your earnings!
            </p>
            <Link
              href={SITE_CONFIG.apkDownloadUrl}
              className="btn-accent inline-flex items-center gap-2"
              aria-label="Download TD777 APK and start earning"
            >
              <Banknote className="w-5 h-5" aria-hidden="true" />
              Download TD777 Free
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
