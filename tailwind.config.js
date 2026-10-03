/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        royal: {
          DEFAULT: "#2563EB",
          50: "#EFF4FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#2563EB",
          600: "#1D4ED8",
          700: "#1E40AF",
          800: "#1E3A8A",
          900: "#172554",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      backgroundImage: {
        "royal-gradient": "linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)",
        "hero-gradient":
          "radial-gradient(ellipse at top left, rgba(37,99,235,0.25), transparent 60%), radial-gradient(ellipse at bottom right, rgba(37,99,235,0.15), transparent 60%)",
        "glass-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(37,99,235,0.35)",
        "glow-lg": "0 0 80px rgba(37,99,235,0.45)",
        premium: "0 20px 60px -15px rgba(15,23,42,0.25)",
        "premium-dark": "0 20px 60px -15px rgba(0,0,0,0.6)",
        nav: "0 4px 24px -8px rgba(15,23,42,0.12)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        blob: "blob 12s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "ping-once": "ping-once 0.65s ease-out forwards",
      },
      keyframes: {
        "ping-once": {
          "0%": { transform: "scale(0)", opacity: "0.6" },
          "100%": { transform: "scale(1)", opacity: "0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        blob: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-40px) scale(1.1)" },
          "66%": { transform: "translate(-20px,20px) scale(0.95)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-700px 0" },
          "100%": { backgroundPosition: "700px 0" },
        },
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};
