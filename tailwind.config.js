/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New brand tokens — distinct from original
        "brand-bg": "#0b1220",
        "brand-surface": "#0f1724",
        "brand-primary": "#00c2a8",
        "brand-accent": "#ff6b35",
        "brand-muted": "#94a3b8",
        "brand-warm": "#f8f2ec",
        "brand-ink": "#e6eef0",
      },
      fontFamily: {
        serif: ["Merriweather", "Georgia", "serif"],
        sans: ["Inter", "Arial", "sans-serif"],
      },
      animation: {
        "brand-fade": "brandFade 0.9s cubic-bezier(.2,.9,.2,1) forwards",
      },
      keyframes: {
        brandFade: {
          "0%": { opacity: "0", transform: "translateY(18px) scale(0.995)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
