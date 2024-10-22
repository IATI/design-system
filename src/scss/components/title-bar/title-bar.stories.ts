import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta: Meta = {
  title: "Components/Title Bar",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div class="iati-header-title">
      <p class="iati-header-title__eyebrow">IATI Tools</p>
      <p class="iati-header-title__heading">Country Development Finance Data</p>
    </div>
  `,
};
