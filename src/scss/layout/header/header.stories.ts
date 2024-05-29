import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta: Meta = {
  title: "Layout/Header",
};

export default meta;
type Story = StoryObj;

export const Header: Story = {
  render: () => html`
    <header class="iati-header">
      <div>
        <a href="https://iatistandard.org/">
          <img
            src="http://styles.iatistandard.org/assets/svg/source/logo-colour.svg"
            class="iati-header__logo"
          />
        </a>
      </div>
      <ul class="iati-header__nav">
        <li class="iati-header__nav-item"><a>Events</a></li>
        <li class="iati-header__nav-item"><a>Contact</a></li>
        <li class="iati-header__nav-item"><a>Search</a></li>
      </ul>
    </header>
  `,
};
