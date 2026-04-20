import type { Metadata } from "next"
import Link from "next/link"
import { UserPlus, CheckCircle, Gift } from "lucide-react"
import { BreadCrumb } from "@/components/shared/BreadCrumb"
import { generatePageMetadata } from "@/lib/metadata"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata: Metadata = generatePageMetadata({
  title: "How to Register on TD777 Game – Create Account & Get Rs111 Bonus",
  description:
    "Learn how to register on TD777 Game and claim your Rs111 free welcome bonus. Simple account creation guide for Pakistani users. No deposit required.",
  keywords: [
    "td777 register",
    "td777 account kaise banaye",
    "td777 registration guide",
    "td777 sign up",
    "td777 welcome bonus claim",
    "td777 new account pakistan",
  ],
  slug: "how-to-register",
})

const registrationSteps = [
  {
    step: 1,
    title: "Download TD777 APK",
    description:
      "First, download the TD777 Game APK from our official website. If you already have it installed, skip to step 2.",
  },
  {
    step: 2,
    title: "Open the App",
    description:
      'Launch TD777 Game on your Android phone. You\'ll see the welcome screen with "Login" and "Register" options.',
  },
  {
    step: 3,
    title: "Click Register/Sign Up",
    description:
      'Tap the "Register" or "Sign Up" button. You\'ll be taken to the registration form.',
  },
  {
    step: 4,
    title: "Enter Your Mobile Number",
    description:
      "Enter your Pakistani mobile number (JazzCash or Easypaisa number preferred for easy withdrawals). This will be your username.",
  },
  {
    step: 5,
    title: "Create a Password",
    description:
      "Set a strong password with at least 6 characters. Mix numbers and letters for security.",
  },
  {
    step: 6,
    title: "OTP Verification",
    description:
      "You'll receive a 4-6 digit OTP on your mobile number. Enter it to verify your account.",
  },
  {
    step: 7,
    title: "Claim Your Rs111 Bonus",
    description:
      'Registration complete! Go to Wallet section and your Rs111 welcome bonus will be automatically credited. Click "Claim" if required.',
  },
]

export default function HowToRegisterPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container-custom py-8">
        <BreadCrumb
          items={[
            { name: "How to Register on TD777", href: "/how-to-register" },
          ]}
        />

        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <span className="section-label mb-4">Account Setup</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-5">
              How to Register on TD777 Game & Get Rs111 Free Bonus
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Creating a TD777 account takes less than{" "}
              <strong className="text-white">2 minutes</strong>. Get your{" "}
              <strong className="text-accent-400">Rs111 free welcome bonus</strong>{" "}
              instantly after registration — no deposit required!
            </p>
          </div>

          {/* Bonus highlight */}
          <div className="card p-5 mb-10 border-accent-500/30 bg-accent-500/5 flex items-center gap-4">
            <Gift
              className="w-10 h-10 text-accent-400 flex-shrink-0"
              aria-hidden="true"
            />
            <div>
              <p className="text-white font-bold">Rs111 Free Welcome Bonus!</p>
              <p className="text-sm text-gray-400">
                Every new TD777 account gets Rs111 bonus automatically. No
                deposit needed. Start playing immediately!
              </p>
            </div>
          </div>

          {/* Steps */}
          <h2 className="text-2xl font-bold text-white mb-6">
            Registration Steps
          </h2>

          <ol className="space-y-5 mb-10" aria-label="TD777 registration steps">
            {registrationSteps.map((step) => (
              <li key={step.step} className="card p-6 flex items-start gap-5">
                <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 bg-primary-gradient rounded-xl text-white font-black text-lg">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Tips */}
          <div className="card p-6 mb-10">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <UserPlus className="w-5 h-5 text-primary-400" aria-hidden="true" />
              Important Registration Tips
            </h2>
            <ul className="space-y-3">
              {[
                "Use your real mobile number – it's needed for OTP verification and withdrawals",
                "One account per person – multiple accounts will be banned",
                "Save your password somewhere safe – you'll need it to login each time",
                "Use your JazzCash/Easypaisa number for easiest withdrawals",
                "Complete your profile for higher withdrawal limits",
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
          <div className="p-8 bg-primary-gradient rounded-2xl text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-3">
              Ready to Register?
            </h2>
            <p className="text-blue-100 mb-6">
              Download TD777 APK first, then follow the steps above.
            </p>
            <Link
              href={SITE_CONFIG.apkDownloadUrl}
              className="btn-accent inline-flex items-center gap-2"
              aria-label="Download TD777 APK and register"
            >
              <UserPlus className="w-5 h-5" aria-hidden="true" />
              Download & Register Now
            </Link>
          </div>

          {/* Related */}
          <section aria-labelledby="next-steps">
            <h2 id="next-steps" className="text-xl font-bold text-white mb-5">
              Next Steps After Registration
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "How to Deposit Money on TD777", href: "/how-to-deposit" },
                { label: "How to Withdraw Earnings", href: "/how-to-withdraw" },
                { label: "TD777 Bonus Offers", href: "/td777-bonus" },
                { label: "Read Our Blog Guides", href: "/blog" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="card-hover p-4 text-sm text-gray-300 hover:text-primary-400 flex items-center gap-2"
                >
                  <CheckCircle
                    className="w-4 h-4 text-primary-400"
                    aria-hidden="true"
                  />
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
