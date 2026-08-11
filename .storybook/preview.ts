import type { Preview } from "@storybook/web-components-vite";
import { html } from "lit";

import "../src/js/main.js";
import "../src/scss/main.scss";
import DocsTemplate from "./DocsTemplate.mdx";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: "alphabetical",
        order: [
          "Get Started",
          "Installation",
          "Usage",
          "Contributing",
          "Brand",
          "Core",
          "Components",
          "Layout",
        ],
      },
    },
    backgrounds: {
      options: {
        light: { name: "light", value: "#fff" },
        grey: { name: "grey", value: "#f6f6f6" },
        dark: { name: "dark", value: "#155366" },
      },
    },
    docs: {
      page: DocsTemplate,
      source: {
        format: "dedent",
        excludeDecorators: true,
      },
    },
    designSystemEnabled: true,
  },

  decorators: [
    (storyFn, { parameters }) => {
      const { designSystemEnabled } = parameters;
      if (designSystemEnabled) {
        return html`<div class="iati-design-system--enabled">
          ${storyFn()}
        </div>`;
      }
      return storyFn();
    },
  ],

  tags: ["autodocs"],
};

export default preview;
