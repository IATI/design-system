import { html } from "lit";

import type { Meta, StoryObj } from "@storybook/web-components";

const items = ["Home", "About", "Current page"];

const meta: Meta = {
  title: "Components/Breadcrumb",
};

export default meta;
type Story = StoryObj;

export const Breadcrumb: Story = {
  render: () => html`
    <nav>
      <ul class="iati-breadcrumb">
        ${items.map(
          (i) =>
            html`<li class="iati-breadcrumb-item">
              <a href="#" class="iati-breadcrumb-link">${i}</a>
            </li>`,
        )}
      </ul>
    </nav>
  `,
};
