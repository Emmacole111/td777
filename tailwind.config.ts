import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary green — #00AA56 as base
        primary: {
          50:  "#f0fdf4",
          100: "#dcfce7",
          200: "#b3f5cc",
          300: "#6ee9a4",
          400: "#00cc66",   // lighter green for text highlights
          500: "#00AA56",   // base green (user request)
          600: "#008c47",   // darker green (buttons/hover)
          700: "#006e38",   // dark green
          800: "#005229",
          900: "#003a1c",
        },
        // Amber highlight (kept for contrast on login/register)
        accent: {
          300: "#fde68a",
          400: "#fcd34d",
          500: "#f59e0b",
          600: "#d97706",
        },
        // Deep dark greens — complements the #00AA56 palette
        dark: {
          950: "#040a06",
          900: "#07110a",
          800: "#0d1a10",
          700: "#131f16",
          600: "#1b2b1e",
          500: "#233528",
        },
        success: "#22c55e",
        danger:  "#ef4444",
      },
      fontFamily: {
        sans:    ["Inter",   "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
      animation: {
        "shimmer":      "shimmer 2.8s linear infinite",
        "float":        "float 3.5s ease-in-out infinite",
        "glow-pulse":   "glowPulse 2.5s ease-in-out infinite",
        "glow-ring":    "glowRing 2s ease-in-out infinite",
        "spin-slow":    "spin 12s linear infinite",
        "flicker":      "flicker 5s ease-in-out infinite",
        "fade-in-up":   "fadeInUp 0.7s ease-out forwards",
        "slide-right":  "slideRight 0.6s ease-out forwards",
        // Legacy names kept for compatibility
        "fade-in":      "fadeIn 0.5s ease-in-out",
        "slide-up":     "slideUp 0.5s ease-out",
        "bounce-subtle":"bounceSubtle 2.5s ease-in-out infinite",
        "pulse-glow":   "pulseGlow 2s infinite",
        // New — non-hero animations
        "marquee":        "marquee 28s linear infinite",
        "marquee-reverse":"marqueeReverse 28s linear infinite",
        "draw-down":      "drawDown 1.4s ease-out forwards",
        "pop-in":         "popIn 0.5s cubic-bezier(0.175,0.885,0.32,1.275) forwards",
        "count-up":       "countUp 0.6s ease-out forwards",
      },
      keyframes: {
        shimmer: {
          "0%":   { backgroundPosition: "-400% center" },
          "100%": { backgroundPosition: "400% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)   rotate(0deg)" },
          "33%":      { transform: "translateY(-10px) rotate(1deg)"  },
          "66%":      { transform: "translateY(-5px)  rotate(-1deg)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,170,86,0.25), 0 0 40px rgba(0,170,86,0.05)" },
          "50%":      { boxShadow: "0 0 35px rgba(0,170,86,0.55), 0 0 70px rgba(0,170,86,0.15)" },
        },
        glowRing: {
          "0%, 100%": { boxShadow: "0 0 0 2px rgba(0,170,86,0.3)" },
          "50%":      { boxShadow: "0 0 0 6px rgba(0,170,86,0.0)" },
        },
        flicker: {
          "0%, 85%, 100%": { opacity: "1" },
          "88%":           { opacity: "0.7" },
          "90%":           { opacity: "1"   },
          "93%":           { opacity: "0.8" },
          "95%":           { opacity: "1"   },
        },
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)"    },
        },
        slideRight: {
          "0%":   { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)"     },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)"   },
          "50%":      { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0px rgba(0,170,86,0.5)" },
          "50%":      { boxShadow: "0 0 0 12px rgba(0,170,86,0)"  },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)"    },
        },
        // New — non-hero
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%":   { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        drawDown: {
          "from": { transform: "scaleY(0)" },
          "to":   { transform: "scaleY(1)" },
        },
        popIn: {
          "0%":   { transform: "scale(0) rotate(-12deg)", opacity: "0" },
          "70%":  { transform: "scale(1.15) rotate(3deg)",  opacity: "1" },
          "100%": { transform: "scale(1) rotate(0deg)",     opacity: "1" },
        },
        countUp: {
          "from": { opacity: "0", transform: "translateY(10px)" },
          "to":   { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "hero-gradient":   "radial-gradient(ellipse at 50% 0%, #0d2214 0%, #081409 50%, #040a06 100%)",
        "card-gradient":   "linear-gradient(160deg, #0d1a10 0%, #07110a 100%)",
        "green-gradient":  "linear-gradient(135deg, #006e38 0%, #00AA56 40%, #00cc66 60%, #008c47 100%)",
        "green-shimmer":   "linear-gradient(90deg, transparent 0%, rgba(0,170,86,0.35) 50%, transparent 100%)",
        "accent-gradient": "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",
        "primary-gradient":"linear-gradient(135deg, #006e38 0%, #00AA56 50%, #008c47 100%)",
        "casino-grid":     "linear-gradient(rgba(0,170,86,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,170,86,0.025) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-40": "40px 40px",
      },
      dropShadow: {
        "green":    "0 0 12px rgba(0,170,86,0.6)",
        "green-lg": "0 0 24px rgba(0,170,86,0.5)",
      },
    },
  },
  plugins: [],
}

export default config
