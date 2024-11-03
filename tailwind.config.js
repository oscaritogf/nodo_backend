/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-gray': '#27403D',
        'custom-fond': '#F3F4F6',
        'custom-fondoInput': '#FAFAFA',
        'custom-orange-light': '#FF701F',
        'custom-orange': '#FC7B32',
        'custom-orange-dark': '#E0793F',
        'custom-brown-light': '#C77648',
        'custom-brown-dark': '#AC6F4D',
      },
    },
  },
  plugins: [],
};
