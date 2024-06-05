import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";

import { Header } from "../header/header.stories";

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

export const WithHeader: Story = {
  render: (args) => html`
    <div class="iati-title-bar">
      ${Header.render?.call({ ...args })}
      <div class="iati-title-bar__title">Title</div>
    </div>
  `,
};
