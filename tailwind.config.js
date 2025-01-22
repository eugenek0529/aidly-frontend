/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a1a',  // Main brand color
          light: '#2d2d2d',
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#4a5568',  // Secondary brand color
          light: '#718096',
          dark: '#2d3748',
        },
        accent: {
          DEFAULT: '#3498db',  // Accent color for CTAs
          hover: '#2980b9',
        },
        layout: {
          navbar: 'rgba(26, 26, 26, 0.1)',    // Navbar background
          footer: '#d1d5db',    // Footer background
          hero: '#ffffff',      // Hero section background
        },
        text: {
          primary: '#ffffff',   // Main text color
          secondary: '#a0aec0', // Secondary text color
          footer: '#cbd5e0',    // Footer text color
        }
      },
    },
  },
  plugins: [],
}

