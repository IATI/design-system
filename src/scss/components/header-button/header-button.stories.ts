import type { Meta, StoryObj } from "@storybook/web-components";
import iconInfoUrl from "../../../assets/svg/icon-info.svg";
import iconSearchUrl from "../../../assets/svg/icon-search.svg";

import { html } from "lit";

const meta: Meta = {
  title: "Components/Header/Button",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Info: Story = {
  render: () => html`
    <a href="#" class="header-button header-button--hide-mobile">
      <span class="header-button__title">Help docs</span>
      <img class="header-button__icon" src="${iconInfoUrl}" alt="" />
    </a>
  `,
};

export const Search: Story = {
  render: () => html`
    <a href="#" class="header-button">
      <span class="header-button__title">Search</span>
      <img class="header-button__icon" src="${iconSearchUrl}" alt="" />
    </a>
  `,
};
