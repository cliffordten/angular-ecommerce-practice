/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        success: '#28a745',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8',
        light: '#f8f9fa',
        primary:  "#00427F",
        text: "#343a40",
        title: "#292D33",
        secondary: "#00427F"
      },
    },
  },
  plugins: [],
}

