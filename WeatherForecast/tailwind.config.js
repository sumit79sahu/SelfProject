/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Ash':"url('/src/assets/images/Ash.jpg')",
        'Clear': "url('/src/assets/images/Clear.jpg')",
        'Clouds':"url('/src/assets/images/Clouds.jpg')",
        'Drizzle':"url('/src/assets/images/Drizzle.jpg')",
        'Dust':"url('/src/assets/images/Dust.jpg')",
        'Fog': "url('/src/assets/images/Fog.png')",
        'Haze': "url('/src/assets/images/Haze.jpg')",
        'Rain': "url('/src/assets/images/Rain.jpg')",
        'Sand': "url('/src/assets/images/Sand.jpg')",
        'Smoke': "url('/src/assets/images/Smoke.jpg')",        
        'Snow': "url('/src/assets/images/Snow.jpg')",
        'Squall': "url('/src/assets/images/Squall.jpg')",
        'Sunny': "url('/src/assets/images/Sunny.jpg')",   
        'Thunderstorm': "url('/src/assets/images/Thunderstorm.jpg')",
        'Tornado': "url('/src/assets/images/Tornado.jpg')",      
      }
    },
  },
  plugins: [],
}