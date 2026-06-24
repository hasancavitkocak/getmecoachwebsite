import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f4fef0',
          100: '#e8fde1',
          200: '#d1fbc3',
          300: '#b3f79f',
          400: '#A8E056', // Ana yeşil
          500: '#8fc73e',
          600: '#76a832',
          700: '#5d8429',
          800: '#4a6921',
          900: '#3d571d',
          950: '#1e2f0c',
        },
        dark: {
          50: '#f8fafc',
          100: '#e8eef5',
          200: '#d1dde8',
          300: '#a3b9d1',
          400: '#6b8aaf',
          500: '#4a6a8f',
          600: '#384f6e',
          700: '#2a3f56',
          800: '#1a2838',
          900: '#0A0E21', // Ana lacivert
          950: '#050712',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
