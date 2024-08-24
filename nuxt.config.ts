import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/css/global.css"],
  components: true,
  ssr: false,
  target: 'static',
  nitro: {
    preset: 'netlify',
  },
  generate: {
    fallback: true,
  },
});
