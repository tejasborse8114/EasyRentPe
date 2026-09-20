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
          DEFAULT: "#1E3A8A",
          light: "#2C4FA8",
          dark: "#152a63",
        },
        accent: {
          DEFAULT: "#F59E0B",
          light: "#FBBF48",
          dark: "#B45309",
        },
        surface: "#F9FAFB",
        ink: {
          DEFAULT: "#111827",
          muted: "#6B7280",
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
        soft: "0 10px 40px -10px rgba(17, 24, 39, 0.15)",
        card: "0 4px 24px -4px rgba(17, 24, 39, 0.08)",
        glow: "0 20px 60px -15px rgba(245, 158, 11, 0.45)",
        "glow-primary": "0 20px 60px -15px rgba(30, 58, 138, 0.45)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
        "hero-mesh":
          "radial-gradient(ellipse 60% 50% at 20% 20%, rgba(30,58,138,0.16), transparent 60%), radial-gradient(ellipse 55% 45% at 85% 15%, rgba(245,158,11,0.18), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
