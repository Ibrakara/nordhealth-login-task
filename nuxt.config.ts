// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/scripts", "@nuxt/test-utils"],
  plugins: ["~/plugins/provet-web-components.ts"],
  css: ["~/assets/css/reset.css"],
  alias: {
    "~": resolve(__dirname, "./"),
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.includes("-"),
    },
  },
});
