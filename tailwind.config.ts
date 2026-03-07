import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--color-bg)",
        panel: "var(--color-bg-elevated)",
        soft: "var(--color-bg-soft)",
        ink: "var(--color-text-primary)",
        muted: "var(--color-text-secondary)",
        line: "var(--color-border-subtle)",
        accent: "var(--color-accent)",
        brand: "var(--color-brand-primary)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "74rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 600ms ease-out both",
        "fade-in": "fade-in 700ms ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
