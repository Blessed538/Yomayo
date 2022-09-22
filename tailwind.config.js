module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "380px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "gray-dark": "#273444",
      gray: "#8492a6",
      "sub-text": "#031D4D",
      white: " #ffffff",
      link: "#1C2977",
      background: "#FFFFFF",
      "btn-bg": "#1682F9",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      "company-logo": "#F3F7FE",
      "bg-about": "#FAFEF8",
      "about-p": "#555555",
      "counter-color": "#111111",
      "bg-services": "#F3F7FE",
      "service-header": "#1682F9",
      "bg-projects": "#242424",
      "view-all": "#1C2977",
      "bg-team": "#F3F7FE",
      "text-team": "#181818",
      "team-member-title": "#000000",
      "bg-footer": "#242424;",
    },
    content: {
      section: {},
    },
    fontFamily: {
      ortica: ["Ortica"],
      aktiv: ["Aktiv Grotesk Corp"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
        top: "8rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};