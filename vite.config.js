import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import postcssPresetEnv from "postcss-preset-env";

export default defineConfig({
  root: "src",
  publicDir: "../public",
  build: {
    rollupOptions: {
      input: {
        app: "./src/index.html",
      },
    },
    outDir: "../dist",
    emptyOutDir: true,
  },

  css: {
    postcss: {
      plugins: [
        postcssPresetEnv({
          logical: {
            inlineDirection: "right-to-left",
          },
        }),
        autoprefixer(),
      ],
    },
  },
});
