import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";

const meta: Meta = {
  title: "Components/Button",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<button class="iati-button">Buttons</button>`,
};

export const Submit: Story = {
  render: () => html`<button class="iati-button iati-button--submit">Buttons</button>`,
};