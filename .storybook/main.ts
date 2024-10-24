import type { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
  framework: "@storybook/web-components-vite",
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  staticDirs: ["../static"],
  docs: {
    autodocs: true,
  },
  async viteFinal(config) {
    const { mergeConfig } = await import("vite");
    return mergeConfig(config, {
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
