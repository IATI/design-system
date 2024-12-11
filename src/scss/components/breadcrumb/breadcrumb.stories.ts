import { html } from "lit";

import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Components/Breadcrumb",
};

export default meta;
type Story = StoryObj;

export const Breadcrumb: Story = {
  render: () => html`
    <nav class="iati-breadcrumb">
      <span class="iati-breadcrumb__previous">
        <i class="iati-icon iati-icon--chevron-left"></i>
        <a href="#" class="iati-breadcrumb-link">About</a>
      </span>
      <ol class="iati-breadcrumb__list">
        <li class="iati-breadcrumb-item">
          <a href="#" class="iati-breadcrumb-link">Home</a>
        </li>
        <li class="iati-breadcrumb-item">
          <a href="#" class="iati-breadcrumb-link">About</a>
        </li>
        <li class="iati-breadcrumb-item iati-breadcrumb-item--current">
          <a aria-current="page" class="iati-breadcrumb-link">Current page</a>
        </li>
      </ol>
    </nav>
  `,
};
