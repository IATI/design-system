import path from "path";
import { NodePackageImporter } from "sass";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: {
        iati: path.resolve(__dirname, "src/js/main.js"),
        "css/iati": path.resolve(__dirname, "src/scss/main.scss"),
      },
      fileName: "iati",
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        entryFileNames: "js/[name].js",
      },
    },
    cssMinify: false,
    cssCodeSplit: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        pkgImporter: new NodePackageImporter(),
      },
    },
  },
  resolve: {
    alias: {
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
    },
  },
});
