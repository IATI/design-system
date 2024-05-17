import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import Template from "../../../../.storybook/StoriesOnlyTemplate.mdx";

const meta: Meta = {
  title: "Components/Callout",
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: Template,
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div class="iati-callout">
      <p class="iati-callout__title">Title</p>
      <p>Content.</p>
    </div>
  `,
};

export const Green: Story = {
  render: () => html`
    <div class="iati-callout iati-callout--green">
      <p class="iati-callout__title">Title</p>
      <p>Content.</p>
    </div>
  `,
};

export const Orange: Story = {
  render: () => html`
    <div class="iati-callout iati-callout--orange">
      <p class="iati-callout__title">Title</p>
      <p>Content.</p>
    </div>
  `,
};

export const Red: Story = {
  render: () => html`
    <div class="iati-callout iati-callout--red">
      <p class="iati-callout__title">Title</p>
      <p>Content.</p>
    </div>
  `,
};

export const Purple: Story = {
  render: () => html`
    <div class="iati-callout iati-callout--purple">
      <p class="iati-callout__title">Title</p>
      <p>Content.</p>
    </div>
  `,
};
