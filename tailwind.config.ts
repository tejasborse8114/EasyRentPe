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
          DEFAULT: "#8B5CF6",
          light: "#A78BFA",
          dark: "#5B21B6",
        },
        accent: {
          DEFAULT: "#2DD4BF",
          light: "#5EEAD4",
          dark: "#0F766E",
        },
        surface: {
          DEFAULT: "#0A0A14",
          elevated: "#15151F",
        },
        ink: {
          DEFAULT: "#EAE8F5",
          muted: "#9B96B5",
        },
      },
      fontFamily: {
        // Falls back to the OS's Inter-like system sans-serif stack (no external font fetch required).
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
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(0, 0, 0, 0.55)",
        card: "0 4px 24px -4px rgba(0, 0, 0, 0.45)",
        glow: "0 20px 60px -15px rgba(45, 212, 191, 0.4)",
        "glow-primary": "0 20px 60px -15px rgba(139, 92, 246, 0.45)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
        "hero-mesh":
          "radial-gradient(ellipse 60% 50% at 20% 20%, rgba(139,92,246,0.28), transparent 60%), radial-gradient(ellipse 55% 45% at 85% 15%, rgba(45,212,191,0.22), transparent 60%)",
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "noise":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
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
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out infinite 1.2s",
        "pulse-glow": "pulse-glow 4.5s ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
