import { html } from "lit";

import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Components/Piped List",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export default meta;
type Story = StoryObj;

export const PipedList: Story = {
  render: () => html`
    <ul class="iati-piped-list">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  `,
};
