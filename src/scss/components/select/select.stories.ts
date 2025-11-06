import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import "./multi-select.ts";

const meta: Meta = {
  title: "Components/Select",
  argTypes: {
    label: { control: "text" },
    options: { control: "object" },
  },
};

export default meta;
type Story = StoryObj;

export const SingleSelect: Story = {
  name: "Single Select",
  render: () => html`
    <div class="iati-select">
      <label for="iati-single-select" class="iati-select__label">
        Choose your language
      </label>
      <div class="iati-select__control-wrapper">
        <select id="iati-single-select" class="iati-select__control">
          <option>English</option>
          <option>French</option>
        </select>
      </div>
    </div>
  `,
};

export const MultiSelect: Story = {
  name: "Multi Select",
  args: {
    label: "Choose your language(s)",
    options: ["English", "French"],
  },
  render: (args) => html`
    <multi-select .label=${args.label} .options=${args.options}></multi-select>
  `,
};
