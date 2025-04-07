import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";

const meta: Meta = {
  title: "Components/Brand Background",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () =>
    html`<div class="iati-brand-background">
      <div class="iati-brand-background__content">
        <!-- Example child container for documentation purposes only -->
        <div style="height: 500px;"></div>
      </div>
    </div>`,
};
