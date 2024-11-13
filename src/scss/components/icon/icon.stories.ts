import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta: Meta = {
  title: "Components/Icon",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Youtube: Story = {
  render: () => html`<i class="iati-icon iati-icon--youtube"></i>`,
};

export const X: Story = {
  render: () => html`<i class="iati-icon iati-icon--x"></i>`,
};

export const Linkedin: Story = {
  render: () => html`<i class="iati-icon iati-icon--linkedin"></i>`,
};
