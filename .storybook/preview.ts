import type { Preview } from "@storybook/web-components";

import "../src/scss/iati.scss";
import DocsTemplate from "./DocsTemplate.mdx";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["Get Started", "Core", "Components", "Layout"],
      },
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
