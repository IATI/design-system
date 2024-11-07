import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import iconInfoUrl from "../../../assets/svg/icon-info.svg";
import iconSearchUrl from "../../../assets/svg/icon-search.svg";
import logoColourUrl from "../../../assets/svg/logo-colour.svg";
import { CountrySwitcher } from "../../components/country-switcher/country-switcher.stories";
import { Open as MenuToggle } from "../../components/menu-toggle/menu-toggle.stories";
import { MobileNav } from "../../components/mobile-nav/mobile-nav.stories";
import { ToolNav } from "../../components/tool-nav/tool-nav.stories";
import { Default as TitleBar } from "./title-bar/title-bar.stories";

const meta: Meta = {
  title: "Components/Header",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

const logo = html`
  <a href="https://iatistandard.org/" aria-label="Go to IATI homepage">
    <img src="${logoColourUrl}" class="iati-header__logo" alt="" />
  </a>
`;

export const Header: Story = {
  render: (args, context) => html`
    ${MobileNav.render({ ...args }, context)}
    <header class="iati-header">
      <div class="iati-header__section iati-header__section--first">
        <div class="iati-header__container">
          ${logo}
          <nav class="iati-header__general-nav">
            <ul class="iati-piped-list">
              <li>
                <a href="https://iatistandard.org/en/about/">About IATI</a>
              </li>
              <li>
                <a href="https://iatistandard.org/en/using-data/">Use Data</a>
              </li>
              <li>
                <a href="https://iatistandard.org/en/guidance/publishing-data/">
                  Publish Data
                </a>
              </li>
              <li>
                <a href="https://iatistandard.org/guidance/get-support/">
                  Contact
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
            <button class="iati-button iati-button--light hide display--sm">
              <span>Help Docs</span>
              <img class="iati-button__icon" src="${iconInfoUrl}" alt="" />
            </button>
            <button class="iati-button iati-button--light">
              <span>Search</span>
              <img class="iati-button__icon" src="${iconSearchUrl}" alt="" />
            </button>
            ${MenuToggle.render?.call({ ...args })}
          </div>
          ${TitleBar.render?.call({ ...args })}
          <div class="iati-header__nav">
            ${ToolNav.render?.call({ ...args })}
          </div>
        </div>
      </div>
    </header>
    <script src="js/header.js"></script>
  `,
};
