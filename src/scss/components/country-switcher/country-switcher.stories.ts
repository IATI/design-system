import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta: Meta = {
  title: "Components/Country Switcher",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj;

export const CountrySwitcher: Story = {
  render: () => html`
    <div class="iati-country-switcher">
      <label for="iati-country-switcher" class="iati-country-switcher__label"
        >Choose your language</label
      >
      <select id="iati-country-switcher" class="iati-country-switcher__control">
        <option>English</option>
        <option>French</option>
      </select>
    </div>
  `,
};
