import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import "../select/multi-select.ts";

const meta: Meta = {
  title: "Components/Form",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <form class="iati-form">
      <div class="iati-form__inner">
        <div class="iati-form__item">
          <label for="search-input" class="iati-form__label"
            >Search for items containing:</label
          >
          <input id="search-input" type="text" class="iati-form__input" />
        </div>
        <div class="iati-form__item">
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
        </div>
        <div class="iati-form__item">
          <multi-select
            .label=${"Choose your language(s)"}
            .options=${["English", "French"]}
          ></multi-select>
        </div>
      </div>
      <button class="iati-form__submit iati-button iati-button--submit">
        Search
      </button>
    </form>
  `,
};
