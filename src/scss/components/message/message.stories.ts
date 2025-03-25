import { html } from "lit";

import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Components/Message",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Notice: Story = {
  render: () => html`
    <p class="iati-message iati-message--notice">
      You are viewing
      <span class="iati-message-highlight"
        >VERSION 2.03 of IATI Standard Reference</span
      >. <a href="#">View another version</a>.
    </p>
  `,
};

export const Info: Story = {
  render: () => html`
    <p class="iati-message iati-message--info">
      You are viewing
      <span class="iati-message-highlight"
        >VERSION 2.03 of IATI Standard Reference</span
      >. <a href="#">View another version</a>.
    </p>
  `,
};
