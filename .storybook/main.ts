import type { StorybookConfig } from "@storybook/web-components-vite";
import { NodePackageImporter } from "sass";

const config: StorybookConfig = {
  framework: "@storybook/web-components-vite",
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  docs: {
    autodocs: true,
  },
  async viteFinal(config) {
    const { mergeConfig } = await import("vite");
    return mergeConfig(config, {
      css: {
        preprocessorOptions: {
          scss: {
            pkgImporter: new NodePackageImporter(),
          },
        },
      },
      optimizeDeps: {
        exclude: [
          "@storybook/blocks",
          "@storybook/theming",
          "@storybook/components",
        ],
      },
    });
  },
};

export default config;
