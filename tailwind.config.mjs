/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1A1A1A",
        paper: "#FAFAF7",
        accent: "#1F3A5F",
        muted: "#6B6B6B",
        rule: "#E5E2DA",
      },
      fontFamily: {
        serif: ['"Newsreader"', "Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
        wide: "72rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
