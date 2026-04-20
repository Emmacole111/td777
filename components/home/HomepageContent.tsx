"use client"

import { useState, useRef, useEffect } from "react"
import type { CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Shield, Zap, Gift, Headphones, Download, CheckCircle,
  Trophy, Lock, Smartphone, RefreshCw, Award, Gamepad2,
  ChevronDown, CheckCheck, XCircle,
} from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"

// ── Scroll-reveal hook ────────────────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

// Fade-up style helper (CSS transition — no keyframe needed)
function fu(visible: boolean, delay = 0): CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : "translateY(24px)",
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  }
}

// ── Static data ──────────────────────────────────────────────────────────────

const APK_DETAILS = [
  { label: "App Name",           value: "TD777 Game" },
  { label: "Latest Version",     value: SITE_CONFIG.apkVersion },
  { label: "File Size",          value: SITE_CONFIG.apkSize },
  { label: "Android Requirement",value: SITE_CONFIG.apkRequirement },
  { label: "Last Updated",       value: "April 2026" },
  { label: "Developer",          value: "TD777 Studios" },
  { label: "Price",              value: "Free" },
  { label: "Installation Type",  value: "APK (Side-load)" },
]

const FEATURES = [
  { icon: Zap,        title: "Instant JazzCash and Easypaisa Withdrawals", body: "Most gaming apps in Pakistan take 24 to 72 hours to process a payout. TD777 sends winnings directly to your JazzCash or Easypaisa wallet within 30 minutes to 2 hours, with zero fees. The minimum withdrawal is Rs200, so you do not need to wait until you have accumulated a large balance before cashing out. This single difference — fast, local, fee-free payouts — is the reason most Pakistani players prefer TD777 over international alternatives." },
  { icon: Gift,       title: "Rs111 No-Deposit Welcome Bonus", body: "Every new account receives Rs111 in real, spendable balance credited automatically on registration — no deposit needed. This is not a promotion code, a locked reward, or an in-app coin; it is actual Pakistani Rupees you can use on any game immediately. Once you complete the 3× wagering requirement, whatever you have left is fully withdrawable. It lets you try the platform and complete your first withdrawal without risking any of your own money." },
  { icon: Shield,     title: "Bank-Grade Account Security", body: "Your account is protected by TLS-encrypted connections on all traffic, hashed password storage (the platform cannot read your password, only verify it), and OTP verification required on both login and withdrawals. That last point matters most: even if an attacker somehow learned your password, they could not move a single rupee without the one-time code sent to your registered SIM card. The app also requests only the permissions it genuinely needs — no SMS inbox access, no contact list, no location." },
  { icon: Smartphone, title: "Smooth Performance on Budget Android Phones", body: "The TD777 APK is around 42 MB installed — compact enough to fit on phones with limited storage. It is tested and runs well on Android 5.0 devices with 2 GB RAM, which covers the majority of smartphones currently in use across Pakistan. Lower-end devices automatically receive a reduced-animation mode to keep gameplay fluid without requiring a high-end processor. On 3G connections, a low-bandwidth mode reduces asset sizes without removing any gameplay features." },
  { icon: Gamepad2,   title: "100+ Games Across Multiple Categories", body: "From Teen Patti and Rummy to Aviator, Dragon Tiger, 100+ slots, Ludo, and arcade games, TD777 covers more ground than almost any other Pakistani gaming app. Games are organised into clear categories so you can reach your preferred type in one tap. New titles are added through periodic in-app updates (typically 10–15 MB patches) rather than requiring you to re-download the full APK each time." },
  { icon: Trophy,     title: "Weekly Leaderboards, Referral Commission and VIP Cashback", body: "Earning on TD777 extends well beyond individual game outcomes. Weekly leaderboards pay Rs150 to Rs500 in bonus cash to the top earners in each category. The referral programme gives you 30% of the platform's margin on every deposit your friends make — not 30% of their losses, which is what makes it genuinely sustainable as a passive income source. VIP members also receive up to 15% cashback on net losses each month." },
  { icon: Headphones, title: "24/7 WhatsApp Support in Urdu and English", body: "When something goes wrong with a deposit or withdrawal, the last thing you want is a 24-hour email ticket queue. TD777 runs active WhatsApp and Telegram support around the clock with typical response times under 30 minutes. Both channels handle Urdu and English, which means you can explain an issue in whichever language is easier for you without being told to contact a different department." },
  { icon: RefreshCw,  title: "Provably Fair Games and Regular Security Updates", body: "For crash-style titles like Aviator, the result of every single round is generated using a hash-chained server seed that is published before the round starts. You can verify any historical result independently. For slots and card games, certified random number generation is used and the RTP percentage for each game is disclosed inside the game information screen — a standard that many competing apps in Pakistan do not meet." },
]

const GAMES = [
  { name: "Teen Patti",          tag: "Card",       color: "bg-primary-500/20 text-primary-300",   desc: "Pakistan's most-played card game. Variants: Classic, Joker, Muflis, AK47. Low, medium, and high-stakes tables available 24/7." },
  { name: "Aviator",             tag: "Crash",      color: "bg-accent-500/20 text-accent-300",     desc: "A multiplier climbs from 1×. Cash out at any moment to lock in your winnings. Provably fair — every round is independently verifiable." },
  { name: "Rummy",               tag: "Card",       color: "bg-primary-500/20 text-primary-300",   desc: "Skill-based 13-card rummy with cash tables and scheduled tournaments running around the clock." },
  { name: "Dragon Tiger",        tag: "Card",       color: "bg-primary-500/20 text-primary-300",   desc: "Single-card comparison — Dragon or Tiger wins. Extremely fast rounds, ideal for short sessions." },
  { name: "Andar Bahar",         tag: "Card",       color: "bg-primary-500/20 text-primary-300",   desc: "Traditional South Asian card game now available with real-money stakes and instant play." },
  { name: "7 Up 7 Down",         tag: "Dice",       color: "bg-yellow-500/20 text-yellow-300",     desc: "Bet whether two dice will total above, below, or exactly 7. Simple rules, results in seconds." },
  { name: "Slots (100+ Machines)",tag: "Slots",     color: "bg-purple-500/20 text-purple-300",     desc: "Fruit machines, progressive jackpots, mythology themes. RTP rates are publicly disclosed for every machine." },
  { name: "Ludo",                tag: "Board",      color: "bg-green-500/20 text-green-300",       desc: "Classic board game with cash prize tournaments. Playable in 2-player or 4-player rooms." },
  { name: "Fishing Game",        tag: "Arcade",     color: "bg-blue-500/20 text-blue-300",         desc: "Shoot fish to earn coins. Coins convert to real-cash rewards at fixed exchange rates." },
  { name: "Spin & Win",          tag: "Instant Win",color: "bg-orange-500/20 text-orange-300",     desc: "One-tap spinning wheel with instant cash prizes. Rounds take seconds." },
]

const GAME_CATEGORIES = ["All", "Card", "Crash", "Slots", "Dice", "Board", "Arcade", "Instant Win"]

const DOWNLOAD_STEPS = [
  { n: 1, title: "Open this page in your Android browser",   body: "Use Chrome, Edge, or any browser on your phone. Tap the green Download APK button at the top of this page. The file is around 42 MB and downloads in one to three minutes on 4G." },
  { n: 2, title: "Allow your browser to install apps",       body: "Go to Settings → Apps → Special Access → Install Unknown Apps, select your browser, and enable it. This one-time step is needed because TD777 is not on the Play Store — it is not a sign the file is unsafe." },
  { n: 3, title: "Install the APK file",                     body: "Open your Downloads folder, tap td777.apk, then tap Install. Android completes the installation in 30 to 60 seconds." },
  { n: 4, title: "Register and claim your bonus",            body: "Tap Open, then Register. Enter your Pakistani mobile number, set a password, verify the OTP, and your Rs111 welcome bonus is credited automatically." },
]

const TROUBLESHOOTING = [
  { problem: '"App not installed" error',       fix: 'Delete the downloaded APK, clear your browser cache, and re-download from this page. On Samsung devices, try temporarily disabling the App Security option under Biometrics and security.' },
  { problem: "Download keeps stopping mid-way", fix: "Switch networks (mobile data ↔ Wi-Fi) and retry. If the default browser fails repeatedly, switch to Chrome or Firefox." },
  { problem: "App installs but does not open",  fix: "Restart your phone once. The Android installer sometimes holds a process lock on first install; a reboot clears it and the app launches normally." },
  { problem: "Google Play Protect warning",     fix: 'This is a standard Android warning for any APK installed outside the Play Store — not a virus detection. Tap "Install anyway". The file is clean and signed.' },
]

const SECURITY_CHECKS = [
  { title: "Digitally signed APK with a consistent certificate",  body: "Every official TD777 release is signed with the same developer certificate. Android verifies the signature at install time. If a certificate mismatch ever appears in the install prompt, do not proceed — it means the file was tampered with." },
  { title: "No unnecessary app permissions",                       body: "The app does not request SMS inbox access, your contact list, microphone, or camera. Required permissions are storage (for cached game assets), network access, and phone state (device ID for fraud detection). You can review each permission in the Android install dialog before confirming." },
  { title: "TLS 1.3 encryption on all traffic",                    body: "Every request between the app and its servers is encrypted. Your login credentials, game bets, wallet balances, and payment details are never sent in plain text, even on public Wi-Fi." },
  { title: "OTP required on every withdrawal",                     body: "Funds cannot leave your account without a one-time code sent to your registered SIM. Even if your phone is lost and your password is exposed, an attacker cannot initiate a withdrawal without physical access to your SIM card." },
]

const WHY_US = [
  { icon: Award,      title: "Official, Unmodified APK",              body: "The file on this page is the original, digitally-signed APK released by TD777. We do not repackage it, insert tracking libraries, or modify the code. The file you install is byte-for-byte identical to what TD777 releases." },
  { icon: RefreshCw,  title: "Always the Current Version",             body: "We update the download link within 24 hours of every official release. Bookmark this page and you will never install an outdated build missing security patches or new games." },
  { icon: Shield,     title: "Scanned Before Every Update",            body: "Each new APK is run through multiple antivirus engines before being published here. If a scan returns any detection, the file is withheld until the issue is explained by TD777 directly." },
  { icon: Download,   title: "Free — No Sign-Up Required to Download", body: "Downloading costs nothing. You do not need to create an account on this site, share your email, or complete any survey. Tap the button and the file begins downloading immediately." },
  { icon: Headphones, title: "Guides for Every Step",                  body: "Whether you need help with installation, registration, deposits, withdrawals, or troubleshooting, this page and our blog cover every common scenario with step-by-step instructions." },
  { icon: Lock,       title: "No Bundled Software or Trackers",        body: "The APK hosted here contains no additional analytics SDKs, bundled adware, or third-party trackers beyond what TD777 itself ships. What you install is exactly what TD777 built." },
]

const WHAT_IS_TIMELINE = [
  {
    n: 1,
    title: "Types of Games",
    body: "The platform has five broad game categories. Card games include Teen Patti (multiple variants), Rummy, Dragon Tiger, and Andar Bahar. The crash section has Aviator — a game where a multiplier climbs until a plane flies away and you win based on when you choose to cash out. The slot library has over 100 machines. Dice and arcade categories cover 7 Up 7 Down, Ludo, Fishing Game, and Spin & Win.",
  },
  {
    n: 2,
    title: "Why Players Choose TD777",
    body: "The most consistent feedback from long-term players is about two things: fast withdrawals and local payment support. Getting money out through JazzCash or Easypaisa — the wallets most Pakistanis already use — removes the friction that makes international platforms inconvenient. The Rs111 no-deposit bonus, 30% referral commission, and weekly leaderboard prizes provide earning opportunities beyond the games themselves.",
  },
  {
    n: 3,
    title: "Who It Is Suitable For",
    body: "TD777 is designed for adults aged 18 and over in Pakistan who enjoy card games like Teen Patti or Rummy and want to play with real stakes in a secure, mobile-first environment. Casual players who want to try a few rounds of Aviator or a few slot spins are also well-served — the Rs100 minimum deposit and the free Rs111 welcome bonus make the platform accessible to try at effectively zero financial commitment.",
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

export function HomepageContent() {
  const [gameFilter,  setGameFilter]  = useState("All")
  const [regTab,      setRegTab]      = useState<"register" | "login">("register")
  const [showTips,    setShowTips]    = useState(false)

  const s1  = useInView()
  const s2  = useInView()
  const s3  = useInView()
  const s4  = useInView()
  const s5  = useInView()
  const s6  = useInView()
  const s7  = useInView()
  const s8  = useInView()
  const s9  = useInView()
  const s10 = useInView()
  const s11 = useInView()

  const filteredGames = gameFilter === "All" ? GAMES : GAMES.filter(g => g.tag === gameFilter)

  // Must be capitalized variables to use as JSX components
  const WhyIcon0 = WHY_US[0].icon
  const WhyIcon5 = WHY_US[5].icon

  return (
    <div>

      {/* ── 1. INTRODUCTION ─────────────────────────────────────────────────── */}
      <section id="introduction" className="section relative overflow-hidden">
        {/* Background green radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none" aria-hidden="true"
          style={{ background: "radial-gradient(ellipse, rgba(0,170,86,0.07) 0%, transparent 70%)" }} />

        <div ref={s1.ref} className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto" style={fu(s1.inView)}>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              TD777 Game APK Download —{" "}
              <span className="gradient-text">Official Page for Android</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              You are on the official download page for the{" "}
              <strong className="text-white">TD777 Game APK</strong>. The latest version is{" "}
              <strong className="text-white">{SITE_CONFIG.apkVersion}</strong>, compatible with{" "}
              <strong className="text-white">Android 5.0 and above</strong>, and the file size is{" "}
              <strong className="text-white">{SITE_CONFIG.apkSize}</strong>. The APK is digitally signed, scanned before every update, and free to download.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              This page gives you everything you need in one place: the download file, a step-by-step installation guide, a full list of games, information on bonuses and payments, and answers to the most common questions. Whether you are installing TD777 for the first time or updating an older version, you are in the right place.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              TD777 is built around the Pakistani market. Deposits and withdrawals work through{" "}
              <strong className="text-white">JazzCash</strong> and{" "}
              <strong className="text-white">Easypaisa</strong>. A{" "}
              <strong className="text-accent-400">Rs111 welcome bonus</strong>{" "}
              is added to every new account with no deposit required. Registration takes about two minutes.
            </p>

            {/* Animated stat cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Latest Version",  val: SITE_CONFIG.apkVersion, icon: "📱" },
                { label: "File Size",       val: SITE_CONFIG.apkSize,    icon: "💾" },
                { label: "Requires Android",val: "5.0+",                  icon: "🤖" },
                { label: "Welcome Bonus",   val: "Rs111 Free",            icon: "🎁" },
              ].map((item, i) => (
                <div key={item.label} className="card-casino text-center p-4 group cursor-default"
                  style={fu(s1.inView, 200 + i * 100)}>
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <p className="text-primary-400 font-bold text-base leading-tight"
                    style={s1.inView ? { animation: `countUp 0.6s ease-out ${300 + i * 100}ms both` } : { opacity: 0 }}>
                    {item.val}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHAT IS TD777 ─────────────────────────────────────────────────── */}
      <section id="what-is-td777" className="section relative overflow-hidden"
        style={{ background: "rgba(7,20,10,0.4)" }}>
        {/* Side glow behind timeline */}
        <div className="absolute top-0 left-0 w-32 h-full pointer-events-none" aria-hidden="true"
          style={{ background: "linear-gradient(to right, rgba(0,170,86,0.05) 0%, transparent 100%)" }} />

        <div ref={s2.ref} className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto">
            <div style={fu(s2.inView)}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Is <span className="gradient-text">TD777 Game?</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                TD777 is a real-money mobile gaming application for Android where players use actual Pakistani Rupees to play games and withdraw winnings to their mobile wallet. It is not a virtual-coin app and not a reward-point app — every balance is real money that you fund, play with, and cash out through JazzCash or Easypaisa.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Animated vertical line */}
              <div className="absolute left-[1.125rem] top-4 bottom-4 w-0.5 origin-top"
                style={{
                  background: "linear-gradient(to bottom, #00AA56, rgba(0,170,86,0.15))",
                  transform: s2.inView ? "scaleY(1)" : "scaleY(0)",
                  transformOrigin: "top center",
                  transition: "transform 1.4s ease-out 300ms",
                }}
              />
              <div className="space-y-8">
                {WHAT_IS_TIMELINE.map((item, i) => (
                  <div key={item.title} className="flex gap-5 items-start"
                    style={fu(s2.inView, 400 + i * 200)}>
                    <div className="step-circle relative z-10 flex-shrink-0">{item.n}</div>
                    <div className="pb-2">
                      <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. APK DETAILS TABLE ─────────────────────────────────────────────── */}
      <section id="apk-details" className="section">
        <div ref={s3.ref} className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div style={fu(s3.inView)}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                TD777 Game APK Details
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Before installing any APK, it is good practice to verify the technical details. The table below shows the current version information. If the version on your phone does not match, you have an outdated build and should update through the download button on this page.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl"
              style={{
                border: "1px solid rgba(0,170,86,0.2)",
                boxShadow: "0 0 40px rgba(0,170,86,0.05), 0 8px 32px rgba(0,0,0,0.4)",
              }}>
              <table className="w-full text-sm">
                <tbody>
                  {APK_DETAILS.map((row, i) => (
                    <tr key={row.label}
                      style={{
                        background: i % 2 === 0 ? "rgba(13,26,16,0.8)" : "rgba(20,40,24,0.6)",
                        ...fu(s3.inView, i * 70),
                      }}>
                      <td className="px-5 py-4 font-medium text-gray-400 w-2/5"
                        style={{ borderRight: "1px solid rgba(0,170,86,0.12)" }}>
                        {row.label}
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold"
                          style={{ background: "rgba(0,170,86,0.12)", color: "#00cc66", border: "1px solid rgba(0,170,86,0.2)" }}>
                          {row.value}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              This page is updated within 24 hours of each official release. If you have an older build installed, the app will prompt you to update on next launch.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. FEATURES ──────────────────────────────────────────────────────── */}
      <section id="features" className="section relative overflow-hidden"
        style={{ background: "rgba(7,20,10,0.4)" }}>
        {/* Faint section number watermark */}
        <div className="absolute right-6 top-4 text-[10rem] font-black text-white select-none pointer-events-none leading-none"
          aria-hidden="true" style={{ opacity: "0.015" }}>04</div>

        <div ref={s4.ref} className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto mb-10" style={fu(s4.inView)}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Features of <span className="gradient-text">TD777 App</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
              A feature list is only useful if it explains what the feature actually does for you. Each point below is written to tell you specifically how it affects your experience — not just that the feature exists.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {FEATURES.map((f, i) => (
              <div key={f.title}
                className="card-casino p-5 flex gap-4 items-start group relative overflow-hidden"
                style={fu(s4.inView, i * 80)}>
                {/* Background number */}
                <div className="absolute right-3 bottom-1 text-6xl font-black text-white select-none pointer-events-none leading-none"
                  aria-hidden="true" style={{ opacity: "0.025" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div
                  className="relative z-10 flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(0,170,86,0.4)]"
                  style={{ background: "rgba(0,170,86,0.1)", border: "1px solid rgba(0,170,86,0.2)" }}>
                  <f.icon className="w-5 h-5 text-primary-400" aria-hidden="true" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-white font-semibold mb-2 text-sm leading-snug">{f.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. GAMES LIST ────────────────────────────────────────────────────── */}
      <section id="games" className="section">
        <div ref={s5.ref} className="container-custom">
          <div style={fu(s5.inView)}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 max-w-3xl mx-auto">
              TD777 Games — Updated List
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-3xl mx-auto">
              The game catalog is updated regularly as new titles are added through app updates. Use the filter to find games by category.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-start max-w-6xl mx-auto">
            {/* Left: filter pills + game list */}
            <div>
              <div className="flex flex-wrap gap-2 mb-6" style={fu(s5.inView, 150)}>
                {GAME_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setGameFilter(cat)}
                    className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
                    style={
                      gameFilter === cat
                        ? { background: "#00AA56", color: "#fff", boxShadow: "0 0 14px rgba(0,170,86,0.45)", transform: "scale(1.05)" }
                        : { background: "rgba(13,26,16,0.8)", color: "#6b7280", border: "1px solid rgba(0,170,86,0.15)" }
                    }
                    aria-pressed={gameFilter === cat}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {filteredGames.map((g, i) => (
                  <div key={g.name}
                    className="card-hover p-4 flex items-center gap-3"
                    style={{ ...fu(s5.inView, 200 + i * 60), transitionDelay: `${200 + i * 60}ms` }}>
                    <span className={`flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-lg whitespace-nowrap ${g.color}`}>
                      {g.tag}
                    </span>
                    <div>
                      <p className="text-white font-semibold text-sm">{g.name}</p>
                      <p className="text-gray-500 text-xs leading-relaxed mt-0.5">{g.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: real app games screenshot */}
            <div className="hidden lg:block sticky top-24" style={fu(s5.inView, 100)}>
              <div className="rounded-3xl overflow-hidden shadow-2xl"
                style={{ border: "1px solid rgba(0,170,86,0.25)", boxShadow: "0 0 40px rgba(0,170,86,0.12), 0 20px 60px rgba(0,0,0,0.6)" }}>
                <Image
                  src="/images/td777-game.webp"
                  alt="TD777 game lobby — Aviator, JILI Slots, Fortune Gems and more"
                  width={340}
                  height={460}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-gray-500 text-xs mt-3">
                Live game lobby inside the TD777 app
              </p>
            </div>
          </div>

          <div className="mt-6 text-center max-w-6xl mx-auto" style={fu(s5.inView, 600)}>
            <Link href="/blog/td777-aviator-game-guide" className="text-primary-400 hover:text-primary-300 text-sm underline">
              Read our complete TD777 Aviator game strategy guide →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. HOW TO DOWNLOAD ───────────────────────────────────────────────── */}
      <section id="how-to-download" className="section relative overflow-hidden"
        style={{ background: "rgba(7,20,10,0.4)" }}>
        {/* Left timeline glow */}
        <div className="absolute top-0 left-0 w-40 h-full pointer-events-none" aria-hidden="true"
          style={{ background: "linear-gradient(to right, rgba(0,170,86,0.06) 0%, transparent 100%)" }} />

        <div ref={s6.ref} className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto">
            <div style={fu(s6.inView)}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How to Download TD777 APK on Android (Step by Step)
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                The full installation process takes about five minutes. Follow these steps in order and the app will be ready before you finish reading.
              </p>
            </div>

            {/* Animated timeline */}
            <div className="relative mb-12">
              {/* Vertical green line */}
              <div className="absolute left-[1.125rem] top-4 bottom-0 w-0.5 origin-top"
                style={{
                  background: "linear-gradient(to bottom, #00AA56, rgba(0,170,86,0.1))",
                  transform: s6.inView ? "scaleY(1)" : "scaleY(0)",
                  transformOrigin: "top center",
                  transition: "transform 1.6s ease-out 200ms",
                }}
              />
              <div className="space-y-8">
                {DOWNLOAD_STEPS.map((step, i) => (
                  <div key={step.n} className="flex gap-5 items-start"
                    style={fu(s6.inView, 300 + i * 220)}>
                    <div className="step-circle relative z-10 flex-shrink-0">{step.n}</div>
                    <div className="flex-1 pt-0.5">
                      <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Collapsible troubleshooting */}
            <div style={fu(s6.inView, 400)}>
              <button
                onClick={() => setShowTips(!showTips)}
                className="flex items-center gap-3 w-full p-4 rounded-xl mb-3 transition-all duration-200"
                style={{
                  background: "rgba(13,26,16,0.7)",
                  border: "1px solid rgba(0,170,86,0.2)",
                }}
                aria-expanded={showTips}>
                <h3 className="text-white font-semibold flex-1 text-left">
                  Troubleshooting — What to Do If Installation Fails
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary-400 transition-transform duration-300 ${showTips ? "rotate-180" : ""}`}
                  aria-hidden="true" />
              </button>

              <div className={`overflow-hidden transition-all duration-400 ${showTips ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="space-y-3">
                  {TROUBLESHOOTING.map((item) => (
                    <div key={item.problem} className="p-4 rounded-xl"
                      style={{
                        background: "rgba(13,26,16,0.7)",
                        border: "1px solid rgba(0,170,86,0.12)",
                        borderLeft: "3px solid rgba(0,170,86,0.5)",
                      }}>
                      <p className="text-primary-400 font-semibold text-sm mb-1">⚠ {item.problem}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        <span className="text-white font-medium">Fix: </span>{item.fix}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 text-center space-y-2" style={fu(s6.inView, 500)}>
              <Link href="/how-to-download" className="block text-primary-400 hover:text-primary-300 text-sm underline">
                Read the full download guide with screenshots →
              </Link>
              <Link href="/blog/how-to-download-td777-apk" className="block text-primary-400 hover:text-primary-300 text-sm underline">
                Detailed APK download &amp; install blog guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. IS IT SAFE ────────────────────────────────────────────────────── */}
      <section id="safety" className="section relative overflow-hidden">
        {/* Shield watermark */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[16rem] select-none pointer-events-none leading-none"
          aria-hidden="true" style={{ opacity: "0.018", color: "#00AA56" }}>🛡</div>

        <div ref={s7.ref} className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto">
            <div style={fu(s7.inView)}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Is TD777 Game APK Safe to Download?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Yes — the official TD777 APK from this page is safe. Here are the four specific reasons we can say that with confidence, and what you can verify yourself before and after installation.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                The bigger risk, frankly, is not the official app but the imitator APKs that circulate under names like{" "}
                <em>TD777 Mod</em>, <em>TD777 Premium</em>, or <em>TD777 Unlimited</em>. Those files are almost always fake — they look identical to the real app on the outside but are designed to steal your login credentials. The section below the security checks explains how to spot them.
              </p>
            </div>

            {/* Security checks with sequential pop-in */}
            <div className="space-y-3 mb-8">
              {SECURITY_CHECKS.map((item, i) => (
                <div key={item.title}
                  className="flex items-start gap-3 p-4 rounded-xl"
                  style={{
                    ...fu(s7.inView, i * 150),
                    background: "rgba(13,26,16,0.7)",
                    border: "1px solid rgba(34,197,94,0.15)",
                  }}>
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5"
                    style={{
                      background: "rgba(34,197,94,0.12)",
                      border: "1px solid rgba(34,197,94,0.3)",
                      ...(s7.inView
                        ? { animation: `popIn 0.5s cubic-bezier(0.175,0.885,0.32,1.275) ${i * 150}ms both` }
                        : { opacity: 0 }),
                    }}>
                    <CheckCircle className="w-4 h-4 text-green-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl bg-red-500/10 border border-red-500/20 animate-pulse-border"
              style={fu(s7.inView, 600)}>
              <h3 className="text-red-300 font-semibold mb-2">Warning: Imitator APKs Are a Real Risk</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Because TD777 is a well-known name in Pakistan, fake versions of the app circulate on third-party download sites and get forwarded over WhatsApp and Telegram groups. These files often look identical to the real app on the outside — same icon, same loading screen — but they contain credential-stealing code. Only download the TD777 APK by tapping the official download button on this page. Never install a file sent to you in a chat group, regardless of who sent it.
              </p>
            </div>

            <div className="mt-5 text-center" style={fu(s7.inView, 700)}>
              <Link href="/blog/is-td777-real-or-fake" className="text-primary-400 hover:text-primary-300 text-sm underline">
                Full honest review: Is TD777 real or fake? →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. REGISTER AND LOGIN ────────────────────────────────────────────── */}
      <section id="register-login" className="section relative overflow-hidden"
        style={{ background: "rgba(7,20,10,0.4)" }}>
        <div ref={s8.ref} className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div style={fu(s8.inView)}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How to Register and Log In to TD777
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Registration takes about two minutes. You only need a Pakistani mobile number — no email address, no identity document at this stage. The mobile number becomes your account identifier, so use a number you have long-term access to (ideally the same number as your JazzCash or Easypaisa wallet to keep withdrawals straightforward later).
              </p>
            </div>

            {/* Real app screenshots — register & login screens */}
            <div className="grid sm:grid-cols-2 gap-5 mb-8" style={fu(s8.inView, 100)}>
              <div className="rounded-2xl overflow-hidden shadow-xl"
                style={{ border: "1px solid rgba(0,170,86,0.2)", boxShadow: "0 0 30px rgba(0,170,86,0.08), 0 12px 40px rgba(0,0,0,0.5)" }}>
                <Image
                  src="/images/td777-registration.webp"
                  alt="TD777 Register and Login screens on Android"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl flex items-center justify-center"
                style={{ border: "1px solid rgba(0,170,86,0.2)", boxShadow: "0 0 30px rgba(0,170,86,0.08), 0 12px 40px rgba(0,0,0,0.5)", background: "rgba(13,26,16,0.4)" }}>
                <Image
                  src="/images/td777-vip-membership.webp"
                  alt="TD777 Rs111 welcome bonus credited after registration"
                  width={400}
                  height={400}
                  className="w-full h-auto max-w-xs mx-auto"
                />
              </div>
            </div>

            {/* Mobile tab switcher */}
            <div className="flex md:hidden mb-6 p-1 rounded-xl gap-1"
              style={{ background: "rgba(13,26,16,0.8)", border: "1px solid rgba(0,170,86,0.15)" }}>
              {(["register", "login"] as const).map((tab) => (
                <button key={tab} onClick={() => setRegTab(tab)}
                  className="flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                  style={
                    regTab === tab
                      ? { background: "#00AA56", color: "#fff", boxShadow: "0 0 12px rgba(0,170,86,0.4)" }
                      : { color: "#6b7280" }
                  }
                  aria-pressed={regTab === tab}>
                  {tab === "register" ? "Create Account" : "Log In"}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6" style={fu(s8.inView, 150)}>
              {/* Register */}
              <div className={`card p-6 ${regTab !== "register" ? "hidden md:block" : ""}`}>
                <h3 className="text-white font-bold mb-5 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #006e38 0%, #00AA56 100%)" }}>R</span>
                  Create a New Account
                </h3>
                <ol className="space-y-4">
                  {[
                    "Open the TD777 app and tap Register.",
                    "Enter your Pakistani mobile number.",
                    "Set a password — at least 8 characters with a mix of letters and numbers.",
                    "Enter the OTP code that arrives by SMS within 30 seconds.",
                    "Complete the short profile. Your Rs111 welcome bonus is automatically credited.",
                  ].map((s, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-primary-400 text-xs font-bold"
                        style={{ background: "rgba(0,170,86,0.15)" }}>{i + 1}</span>
                      <span className="text-gray-300 text-sm">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Login */}
              <div className={`card p-6 ${regTab !== "login" ? "hidden md:block" : ""}`}>
                <h3 className="text-white font-bold mb-5 flex items-center gap-2">
                  <span className="w-7 h-7 bg-accent-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">L</span>
                  Log In to an Existing Account
                </h3>
                <ol className="space-y-4">
                  {[
                    "Open the TD777 app and tap Login.",
                    "Enter your registered Pakistani mobile number.",
                    "Enter your password.",
                    "Tap Login. Your session stays active for 30 days on the same device.",
                    "Forgotten password? Tap Forgot Password, enter your number, and reset it via the OTP.",
                  ].map((s, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 bg-accent-500/20 rounded-full flex items-center justify-center text-accent-400 text-xs font-bold">
                        {i + 1}
                      </span>
                      <span className="text-gray-300 text-sm">{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="mt-5 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20" style={fu(s8.inView, 300)}>
              <p className="text-yellow-300 text-sm">
                <strong>Security reminder:</strong> TD777 support will never ask for your password or OTP in any message or call. If anyone claiming to be support requests either of those, it is a social engineering attempt. End the conversation immediately.
              </p>
            </div>

            <div className="mt-4 text-center space-y-2" style={fu(s8.inView, 350)}>
              <Link href="/blog/td777-login-guide" className="block text-primary-400 hover:text-primary-300 text-sm underline">
                Full login guide including common error fixes →
              </Link>
              <Link href="/blog/td777-welcome-bonus-guide" className="block text-primary-400 hover:text-primary-300 text-sm underline">
                How to claim your Rs111 welcome bonus →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. ADD MONEY ─────────────────────────────────────────────────────── */}
      <section id="deposit" className="section">
        <div ref={s9.ref} className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div style={fu(s9.inView)}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How to Add Money to Your TD777 Account
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                TD777 deposits go through JazzCash or Easypaisa and reflect in your wallet instantly. There are no deposit fees on either method. The minimum is Rs100, which is low enough to start without a significant financial commitment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                {
                  wallet: "JazzCash",  border: "border-red-500/30",  bg: "bg-red-500/10",
                  title:  "text-red-300", accent: "text-red-400",
                  steps:  ["Open TD777 and go to Wallet → Deposit.", "Select JazzCash.", "Enter your JazzCash mobile number.", "Enter the deposit amount (min Rs100).", "Enter your JazzCash MPIN to confirm.", "Balance reflects within 5 seconds."],
                },
                {
                  wallet: "Easypaisa", border: "border-green-500/30", bg: "bg-green-500/10",
                  title:  "text-green-300", accent: "text-green-400",
                  steps:  ["Open TD777 and go to Wallet → Deposit.", "Select Easypaisa.", "Enter your Easypaisa mobile number.", "Enter the deposit amount (min Rs100).", "Enter your Easypaisa PIN to confirm.", "Balance reflects within 5 seconds."],
                },
              ].map((m, i) => (
                <div key={m.wallet}
                  className={`card p-5 border ${m.border} ${m.bg}`}
                  style={fu(s9.inView, 150 + i * 100)}>
                  <h3 className={`font-bold mb-4 ${m.title}`}>Deposit via {m.wallet}</h3>
                  <ol className="space-y-3">
                    {m.steps.map((s, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className={`flex-shrink-0 text-xs font-bold w-5 ${m.accent}`}>{j + 1}.</span>
                        <span className="text-gray-300 text-sm">{s}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 text-center" style={fu(s9.inView, 350)}>
              {[
                { label: "Minimum Deposit", val: "Rs100" },
                { label: "Processing Time", val: "Instant" },
                { label: "Deposit Fee",     val: "Rs0" },
              ].map((i) => (
                <div key={i.label} className="card-casino p-4">
                  <p className="text-primary-400 font-bold text-lg">{i.val}</p>
                  <p className="text-gray-500 text-xs mt-1">{i.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 text-center space-y-2" style={fu(s9.inView, 450)}>
              <Link href="/how-to-deposit" className="block text-primary-400 hover:text-primary-300 text-sm underline">
                Full deposit guide with troubleshooting →
              </Link>
              <Link href="/blog/td777-jazzcash-deposit-guide" className="block text-primary-400 hover:text-primary-300 text-sm underline">
                TD777 JazzCash deposit step-by-step blog guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. WITHDRAWAL ───────────────────────────────────────────────────── */}
      <section id="withdrawal" className="section relative overflow-hidden"
        style={{ background: "rgba(7,20,10,0.4)" }}>
        <div className="absolute left-0 top-0 w-40 h-full pointer-events-none" aria-hidden="true"
          style={{ background: "linear-gradient(to right, rgba(0,170,86,0.05) 0%, transparent 100%)" }} />

        <div ref={s10.ref} className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto">
            <div style={fu(s10.inView)}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                TD777 Withdrawal Process
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Withdrawals work through the same JazzCash and Easypaisa wallets as deposits, with no fees and a typical processing time of 30 minutes to 2 hours. The minimum withdrawal is Rs200.
              </p>
            </div>

            {/* Withdrawal timeline */}
            <div className="relative mb-10">
              <div className="absolute left-[1.125rem] top-4 bottom-4 w-0.5 origin-top"
                style={{
                  background: "linear-gradient(to bottom, #00AA56, rgba(0,170,86,0.1))",
                  transform: s10.inView ? "scaleY(1)" : "scaleY(0)",
                  transformOrigin: "top center",
                  transition: "transform 1.6s ease-out 200ms",
                }}
              />
              <div className="space-y-7">
                {[
                  { n: 1, title: "Open Wallet → Withdraw",        body: "Log into TD777, tap Wallet in the bottom menu, and tap Withdraw." },
                  { n: 2, title: "Select your payment method",    body: "Choose JazzCash or Easypaisa. Both are zero-fee. JazzCash is typically a little faster during peak evening hours." },
                  { n: 3, title: "Enter the amount and number",   body: "Type the withdrawal amount (min Rs200, max Rs25,000 per transaction). Enter your JazzCash or Easypaisa mobile number. Double-check the number before proceeding — funds sent to the wrong number cannot be recalled." },
                  { n: 4, title: "Verify with OTP",               body: "A six-digit code is sent by SMS to your registered number. Enter it within 5 minutes to authorise the transfer." },
                  { n: 5, title: "Wait for confirmation",         body: "The transaction appears as Pending, then Processing, then Completed in your history. Your JazzCash or Easypaisa account sends an SMS when the money arrives." },
                ].map((step, i) => (
                  <div key={step.n} className="flex gap-5 items-start"
                    style={fu(s10.inView, 250 + i * 200)}>
                    <div className="step-circle relative z-10 flex-shrink-0">{step.n}</div>
                    <div className="pt-0.5">
                      <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center mb-5" style={fu(s10.inView, 400)}>
              {[
                { label: "Minimum",    val: "Rs200" },
                { label: "Processing", val: "30 min – 2 hrs" },
                { label: "Fee",        val: "Rs0" },
              ].map((i) => (
                <div key={i.label} className="card-casino p-4">
                  <p className="text-primary-400 font-bold text-lg">{i.val}</p>
                  <p className="text-gray-500 text-xs mt-1">{i.label}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-400 text-sm mb-4" style={fu(s10.inView, 500)}>
              First-time withdrawals include a one-time identity check that adds 15–30 minutes. All subsequent withdrawals skip this step. Amounts above Rs15,000 may take up to 8 hours due to standard anti-fraud review.
            </p>

            <div className="text-center" style={fu(s10.inView, 550)}>
              <Link href="/blog/td777-withdrawal-guide" className="text-primary-400 hover:text-primary-300 text-sm underline">
                Full withdrawal guide with troubleshooting →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. WHY THIS SITE — BENTO GRID ───────────────────────────────────── */}
      <section id="why-us" className="section relative overflow-hidden">
        {/* Subtle corner accent */}
        <div className="absolute bottom-0 right-0 w-80 h-80 pointer-events-none" aria-hidden="true"
          style={{ background: "radial-gradient(circle at bottom right, rgba(0,170,86,0.07) 0%, transparent 70%)" }} />

        <div ref={s11.ref} className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto mb-10" style={fu(s11.inView)}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Download TD777 APK <span className="gradient-text">From This Website?</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
              There are dozens of sites hosting the TD777 APK — or claiming to. Here is what sets this page apart and why it is the safest place to get the file.
            </p>
          </div>

          {/* Bento grid: item 0 full-width, 1-4 half, item 5 full-width */}
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {/* Featured card (full width) */}
            <div className="md:col-span-2 card-casino p-6 flex flex-col md:flex-row gap-5 items-start group"
              style={fu(s11.inView, 0)}>
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,170,86,0.4)]"
                style={{ background: "rgba(0,170,86,0.12)", border: "1px solid rgba(0,170,86,0.25)" }}>
                <WhyIcon0 className="w-7 h-7 text-primary-400" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-2 text-lg">{WHY_US.at(0)?.title}</h3>
                <p className="text-gray-400 leading-relaxed">{WHY_US.at(0)?.body}</p>
              </div>
            </div>

            {/* Regular cards (2 × 2 grid) */}
            {WHY_US.slice(1, 5).map((item, i) => (
              <div key={item.title} className="card-casino p-5 flex gap-4 items-start group"
                style={fu(s11.inView, 100 + i * 80)}>
                <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(0,170,86,0.35)]"
                  style={{ background: "rgba(0,170,86,0.1)", border: "1px solid rgba(0,170,86,0.2)" }}>
                  <item.icon className="w-5 h-5 text-primary-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1 text-sm">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}

            {/* Featured card at bottom (full width) */}
            <div className="md:col-span-2 card-casino p-6 flex flex-col md:flex-row gap-5 items-start group"
              style={fu(s11.inView, 420)}>
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,170,86,0.4)]"
                style={{ background: "rgba(0,170,86,0.12)", border: "1px solid rgba(0,170,86,0.25)" }}>
                <WhyIcon5 className="w-7 h-7 text-primary-400" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-2 text-lg">{WHY_US.at(5)?.title}</h3>
                <p className="text-gray-400 leading-relaxed">{WHY_US.at(5)?.body}</p>
              </div>
            </div>
          </div>

          {/* ── Comparison Table ─────────────────────────────── */}
          <div className="mt-14 max-w-3xl mx-auto" style={fu(s11.inView, 500)}>
            <h3 className="text-2xl font-bold text-white text-center mb-2">
              TD777 vs <span className="gradient-text">Other Apps</span>
            </h3>
            <p className="text-gray-400 text-sm text-center mb-8">
              See why Pakistani players choose TD777 over every alternative
            </p>

            <div className="overflow-x-auto rounded-2xl" style={{ border: "1px solid rgba(0,170,86,0.2)" }}>
              <table className="w-full text-sm" role="table" aria-label="TD777 vs competitors comparison">
                <thead>
                  <tr style={{ background: "rgba(0,170,86,0.12)", borderBottom: "1px solid rgba(0,170,86,0.2)" }}>
                    <th className="px-5 py-3.5 text-left text-gray-300 font-semibold">Feature</th>
                    <th className="px-5 py-3.5 text-center text-primary-400 font-bold">TD777</th>
                    <th className="px-5 py-3.5 text-center text-gray-500 font-semibold">Other Apps</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Free APK Download",           td: true,  other: true  },
                    { feature: "Rs111 No-Deposit Bonus",       td: true,  other: false },
                    { feature: "JazzCash Withdrawals",         td: true,  other: false },
                    { feature: "Easypaisa Withdrawals",        td: true,  other: false },
                    { feature: "Withdrawal Within 30 Minutes", td: true,  other: false },
                    { feature: "Zero Withdrawal Fees",         td: true,  other: false },
                    { feature: "Urdu Customer Support",        td: true,  other: false },
                    { feature: "OTP Security on Withdrawals",  td: true,  other: null  },
                    { feature: "Pakistan-Focused Platform",    td: true,  other: false },
                  ].map(({ feature, other }, i) => (
                    <tr
                      key={i}
                      style={{ borderBottom: "1px solid rgba(0,170,86,0.07)", background: i % 2 === 0 ? "rgba(7,18,11,0.5)" : "transparent" }}
                    >
                      <td className="px-5 py-3.5 text-gray-300">{feature}</td>
                      <td className="px-5 py-3.5 text-center">
                        <CheckCheck className="w-4 h-4 text-primary-400 inline" aria-label="Yes" />
                      </td>
                      <td className="px-5 py-3.5 text-center">
                        {other === true  && <CheckCheck className="w-4 h-4 text-gray-500 inline" aria-label="Yes" />}
                        {other === false && <XCircle    className="w-4 h-4 text-red-500/60 inline"  aria-label="No"  />}
                        {other === null  && <span className="text-gray-600 text-xs">Varies</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 text-center" style={fu(s11.inView, 600)}>
              <Link href="/blog/td777-vs-teen-patti-gold" className="text-primary-400 hover:text-primary-300 text-sm underline">
                Read our detailed TD777 vs Teen Patti Gold comparison →
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
