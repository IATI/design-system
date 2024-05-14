import type { Preview } from "@storybook/web-components";

import "../src/scss/iati.scss";

const preview: Preview = {
  parameters: {
    docs: {
      source: {
        format: "dedent",
      },
    },
  },
};

export default preview;
