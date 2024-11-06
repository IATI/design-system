import { html } from "lit";

import type { Meta, StoryObj } from "@storybook/web-components";
import { Close as MenuToggle } from "../menu-toggle/menu-toggle.stories";

const toolItems = ["Tool Home", "About"];

const meta: Meta = {
  title: "Components/Mobile Nav",
  argTypes: {
    open: {
      control: { type: "boolean" },
    },
  },
  parameters: {
    docs: {
      story: {
        height: "600px",
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const MobileNav: Story = {
  args: {
    open: true,
  },
  render: (args) => html`
    <div
      class="iati-mobile-nav js-iati-mobile-nav ${args.open
        ? "iati-mobile-nav--open"
        : ""}"
    >
      <div class="iati-mobile-nav__overlay js-iati-mobile-overlay"></div>
      <nav class="iati-mobile-nav__menu">
        <div class="iati-mobile-nav__header">
          <h2 class="iati-mobile-nav__label">Menu</h2>
          ${MenuToggle.render?.call({ ...args })}
        </div>
        <ul class="">
          ${toolItems.map(
            (i) =>
              html`<li class="iati-mobile-nav__item">
                <a href="#" class="iati-mobile-nav__link">${i}</a>
              </li>`,
          )}
        </ul>
        <ul class="">
          <li class="iati-mobile-nav__item">
            <a
              href="https://iatistandard.org/en/about/"
              class="iati-mobile-nav__link"
              >About IATI</a
            >
          </li>
          <li class="iati-mobile-nav__item">
            <a
              href="https://iatistandard.org/en/using-data/"
              class="iati-mobile-nav__link"
              >Use Data</a
            >
          </li>
          <li class="iati-mobile-nav__item">
            <a
              href="https://iatistandard.org/en/guidance/publishing-data/"
              class="iati-mobile-nav__link"
            >
              Publish Data
            </a>
          </li>
          <li class="iati-mobile-nav__item">
            <a
              href="https://iatistandard.org/guidance/get-support/"
              class="iati-mobile-nav__link"
            >
              Contact
            </a>
          </li>
          <li class="iati-mobile-nav__item">
            <a href="#" class="iati-mobile-nav__link">Help Docs</a>
          </li>
        </ul>
      </nav>
    </div>
  `,
};
