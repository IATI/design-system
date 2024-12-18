import type { Preview } from "@storybook/web-components";

import "../src/js/main.js";
import "../src/scss/main.scss";
import DocsTemplate from "./DocsTemplate.mdx";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
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
      values: [
        { name: "light", value: "#fff" },
        { name: "dark", value: "#155366" },
      ],
    },
    docs: {
      page: DocsTemplate,
      source: {
        format: "dedent",
      },
      toc: true,
    },
  },
};

export default preview;
