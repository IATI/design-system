import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";

const meta: Meta = {
  title: "Components/Button",
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  render: () => html`<button class="btn">Button</button>`,
};
