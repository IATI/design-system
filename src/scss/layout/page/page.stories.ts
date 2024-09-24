import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import { Footer } from "../footer/footer.stories";
import { WithHorizontalNav, WithMobileNav } from "../header/header.stories";

const meta: Meta = {
  title: "Layout/Page",
  parameters: {
    layout: 'fullscreen'
  },
};

export default meta;
type Story = StoryObj;

export const HorizontalNav: Story = {
  render: (args) => html`
    ${WithHorizontalNav.render?.call({ ...args })}
    <main class="iati-main">
      <h1>Page heading</h1>
      <p>Page contents</p>
    </main>
    ${Footer.render?.call({ ...args })}
  `,
};

export const MobileNav: Story = {
  render: (args) => html`
    ${WithMobileNav.render?.call({ ...args })}
    <main class="iati-main">
      <h1>Page heading</h1>
      <p>Page contents</p>
    </main>
    ${Footer.render?.call({ ...args })}
  `,
};