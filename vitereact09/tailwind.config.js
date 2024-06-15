/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Tailwind CSS requires a configuration to enable dark mode. This configuration determines how dark mode is 
  // applied across your application. There are two strategies:
  // media:Uses the user's system preference for dark mode.
  // class:Uses a specific class to toggle dark mode.
  // For your use case, where you want to toggle dark mode with a button, you should use the class strategy.
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}

