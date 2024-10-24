import path from "path";
import { NodePackageImporter } from "sass";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: {
        css: path.resolve(__dirname, "src/scss/main.scss"),
      },
      formats: ["es"],
    },
    rollupOptions: {
      output: {
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
