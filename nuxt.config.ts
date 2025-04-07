// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: [
    "@fortawesome/fontawesome-free/css/all.css", // Importando o Font Awesome
  ],
  app: {
    head: {
      charset: "utf-8",
      link: [{ rel: "icon", type: "image/svg", href: "/logo-Tayan.svg" }],
    },
  },
});
