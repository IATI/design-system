import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import logoColourUrl from "../../../assets/svg/logo-colour.svg";
import { CountrySwitcher } from "../../components/country-switcher/country-switcher.stories";
import {
  Info as InfoButton,
  Search as SearchButton,
} from "../../components/header-button/header-button.stories";
import { Open as MenuToggle } from "../../components/menu-toggle/menu-toggle.stories";
import { MobileNav } from "../../components/mobile-nav/mobile-nav.stories";
import { Default as TitleBar } from "../../components/title-bar/title-bar.stories";
import { ToolNav } from "../../components/tool-nav/tool-nav.stories";

const meta: Meta = {
  title: "Layout/Header",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    open: {
      defaultValue: true,
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj;

const logo = html`
  <a href="https://iatistandard.org/" aria-label="Go to IATI homepage">
    <img src="${logoColourUrl}" class="iati-header__logo" alt="" />
  </a>
`;

export const WithHorizontalNav: Story = {
  render: (args) => html`
    <header class="iati-header">
      <div class="iati-header__section iati-header__section--first">
        <div class="iati-header__container">
          ${logo}
          <nav class="iati-header__general-nav">
            <ul class="iati-piped-list">
              <li><a href="https://iatistandard.org/">IATI Home</a></li>
              <li><a href="https://iatistandard.org/news/">News</a></li>
              <li><a href="https://iatistandard.org/events/">Events</a></li>
              <li>
                <a href="https://iatistandard.org/guidance/get-support/">
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        class="iati-header__section iati-header__section--last iati-brand-background"
      >
        <div class="iati-header__container iati-brand-background__content">
          <div class="iati-header__actions">
            ${CountrySwitcher.render?.call({ ...args })}
            ${InfoButton.render?.call({ ...args })}
            ${SearchButton.render?.call({ ...args })}
          </div>
          ${TitleBar.render?.call({ ...args })}
          <div class="iati-header__nav">
            ${ToolNav.render?.call({ ...args })}
          </div>
        </div>
      </div>
    </header>
  `,
};

export const WithMobileNav: Story = {
  parameters: {
    viewport: {
      defaultviewport: "tablet",
    },
  },
  render: (args, context) => html`
    ${MobileNav.render({ ...args }, context)}
    <header class="iati-header">
      <div class="iati-header__section iati-header__section--first">
        <div class="iati-header__container">
          ${logo}
        </div>
      </div>
      <div class="iati-header__section iati-header__section--last iati-brand-background">
        <div class="iati-header__container iati-brand-background__content">
          <div class="iati-header__actions">
            ${CountrySwitcher.render?.call({ ...args })}
            ${SearchButton.render?.call({ ...args })}
            ${MenuToggle.render?.call({ ...args })}
          </div>
          ${TitleBar.render?.call({ ...args })}
          <div class="iati-header__nav" hidden>
            ${ToolNav.render?.call({ ...args })}
          </div>
        <div>
      </div>
    </header>
    <script src="js/header.js"></script>
  `,
};
