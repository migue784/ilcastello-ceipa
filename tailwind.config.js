/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Material You - Surface roles
        "primary":                  "#384a35",
        "on-primary":               "#ffffff",
        "primary-container":        "#b8d5b0",
        "on-primary-container":     "#071e06",
        "secondary":                "#52634e",
        "on-secondary":             "#ffffff",
        "surface":                  "#fdf9f4",
        "surface-dim":              "#ded9d4",
        "surface-bright":           "#fdf9f4",
        "surface-container-lowest": "#ffffff",
        "surface-container-low":    "#f8f4ef",
        "surface-container":        "#f2eeea",
        "surface-container-high":   "#ede8e4",
        "surface-container-highest":"#e7e3de",
        "on-surface":               "#1c1c19",
        "on-surface-variant":       "#43483f",
        "outline":                  "#73796e",
        "outline-variant":          "#c3c8bc",
        // Tailwind Material Colors
        "tertiary":             "#aa3322",
        "on-tertiary":          "#ffffff",
        "tertiary-container":   "#c84638",
        "on-tertiary-container":"#ffcbc2",
        // Brand accents
        "tomato":  "#aa3322",
        "wheat":   "#e3b85a",
        "basil":   "#384a35",
        "charcoal":"#2c2c2c",
        "cream":   "#fdf5e8",
      },
      fontFamily: {
        headline: ['"Noto Serif"', "Georgia", "serif"],
        body:     ["Manrope", "system-ui", "sans-serif"],
        label:    ['"DM Sans"', "sans-serif"],
        mono:     ['"JetBrains Mono"', "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
}
