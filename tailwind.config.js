/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        chronorexDefault: {
          "primary": "#242c79",
          "secondary": "#bf1522",
          "accent": "#00ffff",
          "neutral": "#22d3ee",
          "base-100": "#ffffff",
          "info": "#fef08a",
          "success": "#00ff00",
          "warning": "#fbbf24",
          "error": "#ff0000",
        },
      }, 
    ]
  }
}

