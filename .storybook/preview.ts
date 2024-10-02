import type { Preview } from "@storybook/web-components";

import "../src/scss/iati.scss";
import DocsTemplate from "./DocsTemplate.mdx";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["Get Started", "Brand", "Core", "Components", "Layout"],
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
    },
  },
};

export default preview;
