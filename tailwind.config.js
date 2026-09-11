/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        abyss: {
          950: "#05070d",
          900: "#0a0e1a",
          800: "#0f1729",
          700: "#161f38",
          600: "#1f2c4d",
        },
        azure: {
          400: "#5b8cff",
          500: "#3b64ff",
          600: "#2e4fe0",
        },
        cyan: {
          300: "#6ee9dd",
          400: "#3dd6c6",
        },
        mist: {
          100: "#f4f7ff",
          300: "#c4cde3",
          500: "#8a94b8",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        depth1: "0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 40px -12px rgba(0,0,0,0.6)",
        depth2: "0 1px 0 rgba(255,255,255,0.06) inset, 0 30px 60px -15px rgba(0,0,0,0.7)",
        glow: "0 0 0 1px rgba(91,140,255,0.25), 0 0 40px rgba(59,100,255,0.25)",
      },
      backgroundImage: {
        "grid-glow": "radial-gradient(circle at 50% 0%, rgba(59,100,255,0.18), transparent 60%)",
      },
    },
  },
  plugins: [],
};
