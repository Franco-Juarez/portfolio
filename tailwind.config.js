/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  'darkMode': 'class',
  theme: {
    extend: {
      backgroundColor: {
        'black-theme': '#211F1C',
        'black-card':'#1A160F',
        'orange-theme': '#FFAA00',
        'white-card': '#FFFFFF',
        'white-theme': '#FFFCF5',
        'orange-light-theme': '#E08A00' 
      },
      borderColor: {
        'orange-theme': '#FFAA00',
        'orange-light-theme': '#E08A00',
        'black-card':'#1A160F'
      },
      textColor: {
        'orange-theme': '#FFAA00',
        'white-theme': '#FFF8EB',
        'btn-text':'#1A160F',
        'black-theme': '#211F1C',
        'orange-light-theme': '#E08A00' 
      },
      fontFamily: {
        display: ['IBM Plex Mono', 'Menlo', 'monospace'],
        body: ['IBM Plex Mono', 'Menlo', 'monospace'],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        gradientAnimation: {
          '0%, 100%': { backgroundPosition: '100%' },
          '25%': {backgroundPosition: '25% 50%'},
          '50%': { backgroundPosition: '30% 50%' },
          '75%': { backgroundPosition: '25% 75%' },
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s linear',
        'fade-in-slow': 'fadeIn 0.2s linear',
        'gradientText':'gradientAnimation 5s linear infinite'
      },
    },
  },
  plugins: [],
}
