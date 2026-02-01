// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://lboeglin.github.io',
  vite: {
  plugins: [
        /** @type {any} */ (tailwindcss())
      ],
  },
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: {
        prefixDefaultLocale: false
    }
  }
});