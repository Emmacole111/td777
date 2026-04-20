import { Shield, Smartphone, Lock, Headphones, CheckCircle2, BadgeCheck } from "lucide-react"

const BADGES = [
  { icon: CheckCircle2, label: "JazzCash",        sub: "Payments",      color: "#e53e3e" },
  { icon: CheckCircle2, label: "Easypaisa",       sub: "Payments",      color: "#38a169" },
  { icon: Smartphone,  label: "Android 5.0+",    sub: "Compatible",    color: "#00AA56" },
  { icon: Lock,        label: "SSL Secured",      sub: "256-bit",       color: "#00AA56" },
  { icon: BadgeCheck,  label: "100% Free",        sub: "No Hidden Fees",color: "#00cc66" },
  { icon: Shield,      label: "Safe & Verified",  sub: "Malware-Free",  color: "#00AA56" },
  { icon: Headphones,  label: "24/7 Support",     sub: "Urdu & English",color: "#00AA56" },
]

export function TrustBar() {
  return (
    <section
      className="relative overflow-hidden py-4"
      style={{
        background: "rgba(4,10,6,0.98)",
        borderTop:    "1px solid rgba(0,170,86,0.12)",
        borderBottom: "1px solid rgba(0,170,86,0.12)",
      }}
      aria-label="Trust and payment badges"
    >
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
          {BADGES.map(({ icon: Icon, label, sub, color }, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3 py-2 rounded-lg flex-shrink-0"
              style={{
                background: "rgba(7,18,11,0.6)",
                border: "1px solid rgba(0,170,86,0.1)",
              }}
            >
              <Icon className="w-4 h-4 flex-shrink-0" style={{ color }} aria-hidden="true" />
              <div className="leading-tight">
                <p className="text-white text-xs font-semibold">{label}</p>
                <p className="text-gray-500 text-[10px]">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
