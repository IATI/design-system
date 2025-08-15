import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta: Meta = {
  title: "Components/Header/Title Bar",
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
      <p class="iati-header-title__heading">Tool Name</p>
    </div>
  `,
};

export const Compact: Story = {
  args: {
    heading: "Tool Name",
  },
  argTypes: {
    heading: { control: "text" },
  },
  render: ({ heading } = {}) => html`
    <div class="iati-header--compact">
      <div class="iati-header-title">
        <p class="iati-header-title__eyebrow">
          <span>IATI</span><span>Tools</span>
        </p>
        <p class="iati-header-title__heading">${heading}</p>
      </div>
    </div>
  `,
};
