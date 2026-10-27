import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#06B6D4", // Electric Cyan (Aurora Sky)
          light: "#38BDF8",   // Bright Cyan Sky
          dark: "#0891B2",
        },
        accent: {
          DEFAULT: "#10B981", // Mint Emerald (Money, Rent, Verified)
          light: "#34D399",
          dark: "#059669",
        },
        surface: {
          DEFAULT: "#040711", // Deep Midnight Obsidian
          elevated: "#0B132B", // Obsidian Aurora Glass
        },
        ink: {
          DEFAULT: "#F8FAFC", // Diamond Pure White
          muted: "#94A3B8",   // Crisp Slate Muted
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "system-ui",
          "sans-serif",
        ],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(0, 0, 0, 0.75)",
        card: "0 4px 24px -4px rgba(0, 0, 0, 0.65)",
        glow: "0 20px 60px -15px rgba(16, 185, 129, 0.5)", // Mint Emerald Glow
        "glow-cyan": "0 20px 60px -15px rgba(6, 182, 212, 0.5)", // Electric Cyan Glow
        "glow-primary": "0 20px 60px -15px rgba(6, 182, 212, 0.45)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
        "cyber-aurora":
          "radial-gradient(ellipse 70% 55% at 15% 15%, rgba(16,185,129,0.26), transparent 60%), radial-gradient(ellipse 65% 50% at 85% 20%, rgba(6,182,212,0.28), transparent 60%), radial-gradient(ellipse 60% 50% at 50% 85%, rgba(59,130,246,0.20), transparent 65%)",
        "dot-matrix":
          "radial-gradient(rgba(255, 255, 255, 0.08) 1.2px, transparent 1.2px)",
        "hero-mesh":
          "radial-gradient(ellipse 65% 50% at 20% 20%, rgba(16,185,129,0.26), transparent 60%), radial-gradient(ellipse 60% 45% at 85% 15%, rgba(6,182,212,0.30), transparent 60%)",
        "noise":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.1)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out infinite 1.2s",
        "pulse-glow": "pulse-glow 4.5s ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        marquee: "marquee 25s linear infinite",
        "spin-slow": "spin-slow 12s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
