export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    '@/assets/styles/index.css'
  ],
  modules: [
    "@nuxt/image",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      "PT Sans": [400, 700],
    }
  }
})