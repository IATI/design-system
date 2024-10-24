import path from "path";
import { NodePackageImporter } from "sass";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: {
        iati: path.resolve(__dirname, "src/js/main.js"),
        css: path.resolve(__dirname, "src/scss/main.scss"),
      },
      fileName: "iati",
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        entryFileNames: "js/[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == "style.css") {
            return `css/iati.css`;
          }
          return assetInfo.name;
        },
      },
    },
    cssMinify: false,
  },
  css: {
    preprocessorOptions: {
      scss: {
        pkgImporter: new NodePackageImporter(),
      },
    },
  },
});
