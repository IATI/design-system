import type { Preview } from "@storybook/web-components-vite";
import { html } from "lit";

import "../src/js/main.js";
import "../src/scss/main.scss";
import DocsTemplate from "./DocsTemplate.mdx";

const contentBackgroundStyles = "background-color: white;";
const fullHeightStyles =
  "display: flex; flex-direction: column; min-height: 100vh; min-height: 100dvh;";

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
    contentBackground: true,
    fullHeight: false,
  },

  decorators: [
    (storyFn, { parameters }) => {
      const { designSystemEnabled, contentBackground, fullHeight } = parameters;
      const story = contentBackground
        ? html`<div style="${contentBackgroundStyles}">${storyFn()}</div>`
        : storyFn();
      if (designSystemEnabled) {
        return html`<div
          class="iati-design-system--enabled"
          style="${fullHeight ? fullHeightStyles : ""}"
        >
          ${story}
        </div>`;
      }
      return story;
    },
  ],

  tags: ["autodocs"],
};

export default preview;
