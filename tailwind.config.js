/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'football-green': '#00A651',
        'football-blue': '#003DA5',
        'transfermarket-green': '#00A651',
        'transfermarket-blue': '#1E3A8A',
        'transfermarket-orange': '#F97316',
        'transfermarket-red': '#DC2626',
        'pitch-green': '#228B22',
        'goal-yellow': '#FFD700',
        'referee-black': '#1F2937',
        'club-navy': '#1E293B',
        'highlight-lime': '#84CC16',
      },
      fontFamily: {
        'football': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

