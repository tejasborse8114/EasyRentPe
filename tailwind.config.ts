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
          DEFAULT: "#8B5CF6", // Electric Violet (Raycast / Solana high-tech)
          light: "#A78BFA",   // Luminous Soft Lavender
          dark: "#6D28D9",   // Deep Royal Amethyst
        },
        accent: {
          DEFAULT: "#F59E0B", // Radiant Solar Amber / Gold
          light: "#FBBF24",   // Sunbeam Yellow-Gold
          dark: "#D97706",   // Warm Bronze Amber
        },
        surface: {
          DEFAULT: "#06040A", // Deep Void Obsidian (Space black with faint violet undertone)
          elevated: "#0E0A18", // Dark Amethyst Slate Card
        },
        ink: {
          DEFAULT: "#F8FAFC", // Brilliant Pure White
          muted: "#94A3B8",   // Refined Silver Slate-400
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
        soft: "0 10px 40px -10px rgba(0, 0, 0, 0.6)",
        card: "0 8px 32px 0 rgba(0, 0, 0, 0.55), 0 0 1px 1px rgba(139, 92, 246, 0.12)",
        "card-hover": "0 16px 40px -8px rgba(0, 0, 0, 0.75), 0 0 1px 1px rgba(139, 92, 246, 0.3)",
        glow: "0 0 35px -5px rgba(139, 92, 246, 0.5)",
        "glow-accent": "0 0 35px -5px rgba(245, 158, 11, 0.45)",
        "glow-primary": "0 0 35px -5px rgba(139, 92, 246, 0.5)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
        "cyber-dark":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(139,92,246,0.18), transparent 70%), radial-gradient(ellipse 60% 40% at 85% 25%, rgba(245,158,11,0.12), transparent 60%), radial-gradient(ellipse 60% 40% at 15% 75%, rgba(124,58,237,0.14), transparent 60%)",
        "dot-matrix":
          "radial-gradient(rgba(167, 139, 250, 0.12) 1.2px, transparent 1.2px)",
        "hero-mesh":
          "radial-gradient(ellipse 70% 50% at 20% 10%, rgba(139,92,246,0.22), transparent 60%), radial-gradient(ellipse 60% 40% at 85% 15%, rgba(245,158,11,0.18), transparent 60%)",
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
