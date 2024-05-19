export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    '@/assets/styles/index.css'
  ],
  modules: [
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@vee-validate/nuxt",
  ],
  googleFonts: {
    families: {
      "PT Sans": [400, 700],
    }
  },
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
})