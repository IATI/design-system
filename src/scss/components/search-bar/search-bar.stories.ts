import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";

const meta: Meta = {
  title: "Components/Search Bar",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Search: Story = {
  render: () => html`
    <div class="iati-search-bar">
      <input type="text" placeholder="Search" />
      <button type="submit" class="iati-button">Go</button>
    </div>
  `,
};
