import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        night: {
          DEFAULT: '#000f08',
          100: '#000302',
          200: '#000603',
          300: '#000905',
          400: '#000c07',
          500: '#000f08',
          600: '#00723d',
          700: '#00d572',
          800: '#39ffa3',
          900: '#9cffd1'
        },
        gunmetal: {
          DEFAULT: '#1c3738',
          100: '#050b0b',
          200: '#0b1516',
          300: '#102021',
          400: '#162b2b',
          500: '#1c3738',
          600: '#386d6f',
          700: '#55a5a8',
          800: '#8dc4c6',
          900: '#c6e1e2'
        },
        // Renaming "davy's_gray" to avoid syntax issues
        davys_gray: {
          DEFAULT: '#4d4847',
          100: '#0f0e0e',
          200: '#1f1d1c',
          300: '#2e2b2b',
          400: '#3e3a39',
          500: '#4d4847',
          600: '#736b6a',
          700: '#978f8e',
          800: '#b9b5b4',
          900: '#dcdad9'
        },
        mint_cream: {
          DEFAULT: '#f4fff8',
          100: '#006425',
          200: '#00c849',
          300: '#2dff7a',
          400: '#91ffb9',
          500: '#f4fff8',
          600: '#f7fffa',
          700: '#f9fffb',
          800: '#fbfffc',
          900: '#fdfffe'
        },
        cadet_gray: {
          DEFAULT: '#8baaad',
          100: '#1a2424',
          200: '#344749',
          300: '#4d6b6d',
          400: '#678e92',
          500: '#8baaad',
          600: '#a2bbbd',
          700: '#b9cccd',
          800: '#d0ddde',
          900: '#e8eeee'
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
