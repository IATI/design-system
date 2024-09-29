import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta: Meta = {
  title: "Components/Menu Toggle",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Open: Story = {
  render: () => html`
    <button class="iati-menu-toggle iati-menu-toggle--open js-iati-menu-toggle-open">
      <span class="iati-menu-toggle__label">Menu</span>
    </button>
  `,
};

export const Close: Story = {
  render: () => html`
    <button class="iati-menu-toggle iati-menu-toggle--close js-iati-menu-toggle-close">
      <span>Close</span>
    </button>
  `,
};
