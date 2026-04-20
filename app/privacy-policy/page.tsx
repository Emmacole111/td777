import type { Metadata } from "next"
import { BreadCrumb } from "@/components/shared/BreadCrumb"
import { generatePageMetadata } from "@/lib/metadata"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy – TD777 Game Pakistan",
  description:
    "Read TD777 Game's Privacy Policy. Learn how we collect, use, and protect your personal information when you use our gaming platform.",
  keywords: ["td777 privacy policy", "td777 data protection", "td777 user privacy"],
  slug: "privacy-policy",
})

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: `When you use TD777 Game, we collect the following types of information:

**Personal Information:** When you register, we collect your mobile phone number, username, and password (encrypted). We do not collect your CNIC unless required for withdrawal verification.

**Transaction Information:** We record all deposits and withdrawals, including amounts, timestamps, and payment method details. This is required for financial security and dispute resolution.

**Device Information:** We automatically collect your device type, operating system version, app version, and device identifier. This helps us optimize the app for your device.

**Usage Data:** We collect information about how you use the app, including games played, time spent, and features accessed. This helps us improve the user experience.

**Location Data:** We may collect approximate location data to prevent fraud and comply with regional regulations. We do not track your precise GPS location.`,
  },
  {
    id: "how-we-use-it",
    title: "2. How We Use Your Information",
    content: `We use your information for the following purposes:

- **Account Management:** To create and manage your TD777 account, process registrations, and handle login authentication.

- **Game Operations:** To run games, calculate winnings, process bonuses, and maintain game history records.

- **Financial Transactions:** To process deposits via JazzCash/Easypaisa and handle withdrawal requests to your mobile wallet.

- **Security & Fraud Prevention:** To detect and prevent fraudulent activity, multiple account creation, and unauthorized access.

- **Customer Support:** To respond to your queries, resolve disputes, and provide assistance when you contact us.

- **Platform Improvements:** To analyze usage patterns and improve our games, features, and user experience.

- **Marketing Communications:** With your consent, to send you promotional offers, bonus notifications, and important updates.`,
  },
  {
    id: "cookies",
    title: "3. Cookies & Tracking Technologies",
    content: `TD777 Game uses cookies and similar tracking technologies to:

- Keep you logged in between sessions
- Remember your game preferences and settings
- Analyze app performance and usage patterns
- Prevent unauthorized access to your account

You can disable cookies in your device settings, but this may affect app functionality. We use both session cookies (which expire when you close the app) and persistent cookies (which remain on your device).`,
  },
  {
    id: "third-party-links",
    title: "4. Third-Party Links & Services",
    content: `TD777 Game may contain links to third-party websites or services, including payment providers JazzCash and Easypaisa. Please note:

- We are not responsible for the privacy practices of third-party services
- We recommend reviewing the privacy policies of JazzCash and Easypaisa before making transactions
- We use industry-standard payment gateways that comply with PCI-DSS security standards
- Your payment credentials are never stored on our servers`,
  },
  {
    id: "data-security",
    title: "5. Data Security",
    content: `We take data security seriously and implement multiple layers of protection:

- **SSL Encryption:** All data transmitted between your device and our servers is encrypted using SSL/TLS technology.

- **Password Security:** Your password is stored using industry-standard bcrypt hashing. We never store passwords in plain text.

- **Access Controls:** Only authorized personnel have access to user data, and access is logged and monitored.

- **Regular Audits:** We conduct regular security audits to identify and address potential vulnerabilities.

Despite our efforts, no online platform can guarantee 100% security. We encourage you to use a strong, unique password and not share your login credentials with anyone.`,
  },
  {
    id: "data-retention",
    title: "6. Data Retention",
    content: `We retain your personal information for as long as your account is active or as needed to provide services. Specifically:

- Account information is retained until you request account deletion
- Transaction records are retained for 7 years as required by financial regulations
- Usage logs are retained for 12 months
- Deleted account data is purged within 30 days, except where required by law`,
  },
  {
    id: "your-rights",
    title: "7. Your Rights",
    content: `As a TD777 user, you have the following rights regarding your personal data:

- **Access:** Request a copy of the personal data we hold about you
- **Correction:** Request correction of inaccurate or incomplete data
- **Deletion:** Request deletion of your account and associated data
- **Restriction:** Request restriction of processing in certain circumstances
- **Portability:** Request your data in a portable format

To exercise these rights, contact us at ${SITE_CONFIG.contactEmail}`,
  },
  {
    id: "contact-us",
    title: "8. Contact Us About Privacy",
    content: `If you have questions or concerns about this Privacy Policy or how we handle your data, please contact us:

**Email:** ${SITE_CONFIG.contactEmail}
**WhatsApp:** ${SITE_CONFIG.whatsapp}

We aim to respond to all privacy inquiries within 48 hours.`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="container-custom py-8">
        <BreadCrumb
          items={[{ name: "Privacy Policy", href: "/privacy-policy" }]}
        />

        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Privacy Policy – TD777 Game
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <span>Last Updated: April 17, 2026</span>
              <span>Effective Date: January 1, 2026</span>
            </div>
            <p className="mt-5 text-gray-300 leading-relaxed">
              Welcome to TD777 Game. Your privacy is important to us. This
              Privacy Policy explains how TD777 Game collects, uses, and
              protects your personal information when you use our gaming
              platform. By using TD777 Game, you agree to the practices
              described in this policy.
            </p>
          </div>

          {/* Table of contents */}
          <nav className="card p-5 mb-10" aria-label="Privacy policy sections">
            <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Table of Contents
            </h2>
            <ol className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.id} id={section.id} aria-label={section.title}>
                <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-dark-700">
                  {section.title}
                </h2>
                <div className="prose-custom">
                  {section.content.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="text-gray-300 leading-relaxed mb-4">
                      {paragraph.replace(/\*\*(.*?)\*\*/g, "$1")}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-10 p-5 bg-dark-800 rounded-xl border border-dark-700 text-sm text-gray-400">
            <p>
              This Privacy Policy may be updated periodically. We will notify
              users of significant changes via the app or email. Continued use
              of TD777 Game after changes constitutes acceptance of the updated
              policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
