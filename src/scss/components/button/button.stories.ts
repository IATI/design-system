import type { Meta, StoryObj } from "@storybook/web-components-vite";

import { html } from "lit";

const meta: Meta = {
  title: "Components/Button",
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
  render: () =>
    html`<button class="iati-button iati-button--light">Button</button>`,
  globals: {
    backgrounds: {
      value: "dark",
    },
  },
};

export const Submit: Story = {
  render: () =>
    html`<button class="iati-button iati-button--submit">Submit</button>`,
};

export const WithIcon: Story = {
  render: () => html`
    <button class="iati-button iati-button--light">
      <span>Info</span>
      <i class="iati-icon iati-icon--info"></i>
    </button>
  `,
  globals: {
    backgrounds: {
      value: "dark",
    },
  },
};

export const Compact: Story = {
  render: () =>
    html`<button class="iati-button iati-button--compact">Button</button>`,
};

export const CompactLight: Story = {
  render: () =>
    html`<button class="iati-button iati-button--light iati-button--compact">
      Button
    </button>`,
  globals: {
    backgrounds: {
      value: "dark",
    },
  },
};

export const CompactSubmit: Story = {
  render: () =>
    html`<button class="iati-button iati-button--submit iati-button--compact">
      Submit
    </button>`,
};
