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
          DEFAULT: "#5B8DEF",
          light: "#7BA7FF",
          dark: "#1E3A8A",
        },
        accent: {
          DEFAULT: "#F59E0B",
          light: "#FBBF48",
          dark: "#B45309",
        },
        surface: {
          DEFAULT: "#0B1120",
          elevated: "#141B2E",
        },
        ink: {
          DEFAULT: "#E7ECF5",
          muted: "#93A0B8",
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
        glow: "0 20px 60px -15px rgba(245, 158, 11, 0.45)",
        "glow-primary": "0 20px 60px -15px rgba(91, 141, 239, 0.45)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
        "hero-mesh":
          "radial-gradient(ellipse 60% 50% at 20% 20%, rgba(91,141,239,0.25), transparent 60%), radial-gradient(ellipse 55% 45% at 85% 15%, rgba(245,158,11,0.22), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
