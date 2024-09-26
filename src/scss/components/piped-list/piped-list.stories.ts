import { html } from "lit";

import type { Meta, StoryObj } from "@storybook/web-components";

const items = ["IATI home", "News", "Events", "Contacts"];

const meta: Meta = {
  title: "Components/Piped List",
};

export default meta;
type Story = StoryObj;

export const PipedList: Story = {
  render: () => html`
    <ul class="iati-piped-list">
      ${items.map((i) => html`<li>${i}</li>`)}
    </ul>
  `,
};
