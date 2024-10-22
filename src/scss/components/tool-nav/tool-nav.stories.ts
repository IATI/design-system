import { html } from "lit";

import type { Meta, StoryObj } from "@storybook/web-components";

const items = ["Tool Home", "About", "Data Dashboards", "Custom Data Download"];

const meta: Meta = {
  title: "Components/Header/Tool Nav",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj;

export const ToolNav: Story = {
  render: () => html`
    <nav>
      <ul class="iati-tool-nav">
        ${items.map(
          (i) => html`<li><a href="#" class="iati-tool-nav-link">${i}</a></li>`,
        )}
      </ul>
    </nav>
  `,
};
