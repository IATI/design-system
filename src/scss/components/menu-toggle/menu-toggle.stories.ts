import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta: Meta = {
  title: "Components/Menu Toggle",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Open: Story = {
  render: () => html`
    <button class="iati-menu-toggle js-iati-menu-togle-open">
      <svg focusable="false" viewBox="0 0 38 17" fill="currentColor">
        <path d="M 0 0 H 38 v 3 H 0 Z" stroke-width="0"></path>
        <path d="M 0 7 H 38 v 3 H 0 Z" stroke-width="0"></path>
        <path d="M 0 14 H 38 v 3 H 0 Z" stroke-width="0"></path>
      </svg>
      <span class="iati-menu-toggle__label">Menu</span>
    </button>
  `,
};

export const Close: Story = {
  render: () => html`
    <button class="iati-menu-toggle js-iati-menu-togle-close">
      <svg
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <path
          d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z"
          stroke="currentColor"
          stroke-width="1.3"
          stroke-miterlimit="10"
        />
        <path
          d="M18.4163 18.416L7.58386 7.58386"
          stroke="currentColor"
          stroke-width="1.3"
          stroke-miterlimit="10"
        />
        <path
          d="M7.58386 18.416L18.4163 7.58386"
          stroke="currentColor"
          stroke-width="1.3"
          stroke-miterlimit="10"
        />
      </svg>
      <span>Close</span>
    </button>
  `,
};
