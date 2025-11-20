import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import "./multi-select.ts";

const meta: Meta = {
  title: "Components/Select",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
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

export const MultiSelectProgrammatic: Story = {
  name: "Multi Select (Programmatic)",
  args: {
    label: "Choose your language(s)",
    options: ["English", "French"],
  },
  parameters: {
    docs: {
      source: {
        code: `<multi-select label="Choose your language(s)" .options="['English', 'French']"></multi-select>`,
      },
    },
  },
  render: (args) => html`
    <multi-select .label=${args.label} .options=${args.options}></multi-select>
  `,
};

export const MultiSelectSlot: Story = {
  name: "Multi Select (HTML Slot)",
  render: () => html`
    <multi-select label="Choose your language(s)">
      <option>English</option>
      <option>French</option>
    </multi-select>
  `,
};

export const MultiSelectWithValues: Story = {
  name: "Multi Select (HTML Slot With Custom Values)",
  render: () => html`
    <multi-select label="Choose your language(s)">
      <option value="en">English</option>
      <option value="fr">French</option>
    </multi-select>
  `,
};
