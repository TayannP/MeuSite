import type { Config } from "tailwindcss";

export default <Config>{
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      width: {
        "container-global": "1447.09px", // Largura personalizada
      },
      screens: {
        xs: "480px", // Extra small devices
        sm: "640px", // Small devices
        md: "768px", // Medium devices
        lg: "1024px", // Large devices
        xl: "1280px", // Extra large devices
        "2xl": "1536px", // 2x Extra large devices
      },
      colors: {
        primary: "#ff5733", // Cor Primária
        secondary: "#4caf50", // Cor Secundária
        neutral: "#f4f4f4", // Cor Neutra (fundo)
        "text-primary": "linear-gradient(to right, white, gray, #333)", // Cor do texto principal
        "text-secondary": "#555", // Cor do texto secundário
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"], // Fonte principal
        heading: ["Roboto", "sans-serif"], // Fonte dos títulos
      },
      spacing: {
        "4": "1rem", // Espaçamento padrão
        "8": "2rem", // Espaçamento maior
        "16": "4rem", // Espaçamento extra
      },
      borderRadius: {
        default: "8px",
        full: "50%",
      },
    },
  },
  plugins: [],
};
