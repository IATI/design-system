import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";

const meta: Meta = {
  title: "Components/Button",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<button class="iati-button">Button</button>`,
};

export const Link: Story = {
  render: () => html`<a href="#" class="iati-button">Button</a>`,
};

export const Light: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () =>
    html`<button class="iati-button iati-button--light">Button</button>`,
};

export const Submit: Story = {
  render: () =>
    html`<button class="iati-button iati-button--submit">Submit</button>`,
};

export const WithIcon: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  render: () => html`
    <button class="iati-button iati-button--light">
      <span>Info</span>
      <i class="iati-icon iati-icon--info"></i>
    </button>
  `,
};
