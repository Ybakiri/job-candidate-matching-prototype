/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      colors: {
        // Neutral Brand Colors
        'neutral-900': '#0E0E14',
        'neutral-800': '#202333',
        'neutral-600': '#585D72',
        'neutral-500': '#7F8393',
        'neutral-300': '#B8BAC3',
        'neutral-100': '#E6E6EA',
        'neutral-50': '#F9F9FA',
        
        // Blue palette
        'blue-60': '#004099',
        
        // Gray palette
        'gray-90': '#222222',
      },
      boxShadow: {
        'card': '0px 4px 6px -4px rgba(24,39,75,0.12), 0px 8px 8px -4px rgba(24,39,75,0.08)',
      },
    },
  },
  plugins: [],
}