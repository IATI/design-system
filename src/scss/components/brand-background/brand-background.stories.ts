import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";

const meta: Meta = {
  title: "Components/Brand Background",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<div class="iati-brand-background">
    <div class="iati-brand-background__content">
      <p>Some words</p>
    </div>
  </div>`,
};
