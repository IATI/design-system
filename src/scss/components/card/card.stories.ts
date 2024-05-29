import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";

const meta: Meta = {
  title: "Components/Card",
};

export default meta;
type Story = StoryObj;

export const Card: Story = {
  render: () => html`
    <div class="iati-card">
      <p class="iati-card__title">Card Title</p>
      <p class="iati-card__subtitle">Subtitle</p>
      <p>Card content.</p>
    </div>
  `,
};
