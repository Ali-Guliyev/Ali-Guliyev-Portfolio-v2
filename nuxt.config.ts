import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/css/global.css"],
  head: {
    title: "My awesome project", // Other meta information
    script: [
      {
        src: "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js",
        defer: true,
      },
    ],
  },
});
