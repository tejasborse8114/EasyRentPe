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
          DEFAULT: "#0B2545", // Deep Navy (from concept hero & CTAs)
          light: "#133E6E",   // Lighter Navy
          dark: "#061528",    // Darkest Midnight Navy
        },
        accent: {
          DEFAULT: "#00A859", // EasyRentPe Emerald Teal (from "Simplify your life" & badges)
          light: "#00C267",   // Mint Green
          dark: "#008A48",    // Deep Emerald
        },
        surface: {
          DEFAULT: "#FFFFFF", // Pure Crisp White
          elevated: "#F8FAFC", // Soft Slate-50 surface
          tint: "#F0FDF8",    // Mint/Teal tint wash for banners
        },
        ink: {
          DEFAULT: "#0F172A", // Deep Slate-900 for crisp readable text
          muted: "#64748B",   // Slate-500 for subtext
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
        soft: "0 4px 20px -2px rgba(15, 23, 42, 0.05)",
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)",
        "card-hover": "0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)",
        glow: "0 0 25px -5px rgba(0, 168, 89, 0.25)",
        "glow-accent": "0 0 25px -5px rgba(11, 37, 69, 0.2)",
        "glow-primary": "0 0 25px -5px rgba(11, 37, 69, 0.25)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
        "cyber-dark":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,245,155,0.16), transparent 70%), radial-gradient(ellipse 60% 40% at 85% 25%, rgba(0,210,255,0.12), transparent 60%), radial-gradient(ellipse 60% 40% at 15% 75%, rgba(5,150,105,0.14), transparent 60%)",
        "dot-matrix":
          "radial-gradient(rgba(0, 245, 155, 0.12) 1.2px, transparent 1.2px)",
        "hero-mesh":
          "radial-gradient(ellipse 70% 50% at 20% 10%, rgba(0,245,155,0.2), transparent 60%), radial-gradient(ellipse 60% 40% at 85% 15%, rgba(0,210,255,0.16), transparent 60%)",
        "noise":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.02'/%3E%3C/svg%3E\")",
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
