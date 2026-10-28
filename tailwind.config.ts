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
          DEFAULT: "#0055D4", // EasyRentPe Official Royal Blue
          light: "#2563EB",   // Vibrant Sapphire Blue
          dark: "#0040A8",
        },
        accent: {
          DEFAULT: "#00A859", // EasyRentPe Official Emerald Green
          light: "#10B981",   // Fresh Mint Emerald
          dark: "#047857",
        },
        surface: {
          DEFAULT: "#F8FAFC", // Clean Crisp Light Slate-50 Base
          elevated: "#FFFFFF", // Pure Diamond White Card
        },
        ink: {
          DEFAULT: "#0F172A", // Deep Obsidian Slate-900 (High-Contrast Readability)
          muted: "#475569",   // Refined Slate-600
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
        soft: "0 10px 40px -10px rgba(15, 23, 42, 0.08)",
        card: "0 2px 14px -2px rgba(15, 23, 42, 0.06), 0 0 1px 1px rgba(15, 23, 42, 0.04)",
        glow: "0 14px 34px -8px rgba(0, 85, 212, 0.28)", // Royal Blue Glow
        "glow-accent": "0 14px 34px -8px rgba(0, 168, 89, 0.26)", // Emerald Glow
        "glow-primary": "0 14px 34px -8px rgba(0, 85, 212, 0.28)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
        "clean-light":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,85,212,0.06), transparent 70%), radial-gradient(ellipse 60% 40% at 90% 30%, rgba(0,168,89,0.05), transparent 60%), radial-gradient(ellipse 60% 40% at 10% 70%, rgba(37,99,235,0.05), transparent 60%)",
        "dot-matrix":
          "radial-gradient(rgba(15, 23, 42, 0.07) 1.2px, transparent 1.2px)",
        "hero-mesh":
          "radial-gradient(ellipse 70% 50% at 20% 10%, rgba(0,85,212,0.08), transparent 60%), radial-gradient(ellipse 60% 40% at 85% 15%, rgba(0,168,89,0.07), transparent 60%)",
        "noise":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.015'/%3E%3C/svg%3E\")",
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
        marquee: "marquee 30s linear infinite",
        "spin-slow": "spin-slow 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
