import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";

const meta: Meta = {
  title: "Layout/Title Bar",
};

export default meta;
type Story = StoryObj;

export const TitleBar: Story = {
  render: () => html`
    <div class="iati-title-bar">
      <div class="iati-title-bar__title">Title</div>
    </div>
  `,
};
