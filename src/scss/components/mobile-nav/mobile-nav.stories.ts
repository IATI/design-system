import { html } from "lit";

import type { Meta, StoryObj } from "@storybook/web-components";
import { Close as MenuToggle } from "../menu-toggle/menu-toggle.stories";

const toolItems = ["Tool Home", "About", "Data Dashboards", "Custom Data Download"];
const generalItems = ["IATI home", "News", "Events", "Contact", "Help docs"];


const meta: Meta = {
  title: "Components/Mobile Nav",
  argTypes: {
    open: {
      defaultValue: true,
      control: { type: 'boolean' }
    },
  },
};

export default meta;
type Story = StoryObj;

export const MobileNav: Story = {
  render: (args) => html`
    <div class="iati-mobile-nav js-iati-mobile-nav ${args.open ? 'iati-mobile-nav--open' : ''}">
      <div class="iati-mobile-nav__overlay js-iati-mobile-overlay"></div>
      <nav class="iati-mobile-nav__menu">
        <div class="iati-mobile-nav__header">
          <h2 class="iati-mobile-nav__label">Menu</h2>
          ${MenuToggle.render?.call({ ...args })}
        </div>
        <ul class="">
          ${toolItems.map((i) => html`<li class="iati-mobile-nav__item"><a href="#" class="iati-mobile-nav__link">${i}</a></li>`)}
        </ul>
        <ul class="">
          ${generalItems.map((i) => html`<li class="iati-mobile-nav__item"><a href="#" class="iati-mobile-nav__link">${i}</a></li>`)}
        </ul>
      </nav>
    </div>
  `,
};
