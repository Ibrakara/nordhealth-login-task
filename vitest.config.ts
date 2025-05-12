import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("provet-"),
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "~": resolve(__dirname, "./"),
      "@": resolve(__dirname, "./"),
    },
  },

  test: {
    globals: true, // Enable globals like `describe`, `it`, etc.
    environment: "jsdom", // Set the environment to jsdom (for simulating DOM in tests)
    include: ["**/*.test.ts", "**/*.test.js"], // Files to include for tests
  },
});
