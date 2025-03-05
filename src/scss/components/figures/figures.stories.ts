import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta: Meta = {
  title: "Components/Figures",
  parameters: {},
};

const items = [
  {
    label: html`<span class="iati-figures__label-line">Total</span>
      <span class="iati-figures__label-line">publishers</span>`,
    number: "1,719",
  },
  {
    label: html`<span class="iati-figures__label-line">Total</span>
      <span class="iati-figures__label-line">organisation files</span>`,
    number: "1,186",
  },
  {
    label: html`<span class="iati-figures__label-line">Total</span>
      <span class="iati-figures__label-line">activity files</span>`,
    number: "9,335",
  },
  {
    label: html`<span class="iati-figures__label-line">Total</span>
      <span class="iati-figures__label-line">activities</span>`,
    number: "881,282",
  },
];

export default meta;
type Story = StoryObj;

export const Links: Story = {
  render: () => html`
    <div class="iati-figures">
    <ul class="iati-figures__items">
        ${items.map(
          (i) =>
            html` <li class="iati-figures__item">
              <a href="#" class="iati-figures__content">
                <span class="iati-figures__label">${i.label}</span>
                <span class="iati-figures__number">${i.number}</span>
              </a>
            </li>`,
        )}
      </ul>
    </ul>
    </div>
  `,
};

export const NoLinks: Story = {
  render: () => html`
    <div class="iati-figures">
    <ul class="iati-figures__items">
        ${items.map(
          (i) =>
            html` <li class="iati-figures__item">
              <span href="#" class="iati-figures__content">
                <span class="iati-figures__label">${i.label}</span>
                <span class="iati-figures__number">${i.number}</span>
              </span>
            </li>`,
        )}
      </ul>
    </ul>
    </div>
  `,
};

export const Fewer: Story = {
  render: () => html`
    <div class="iati-figures">
    <ul class="iati-figures__items">
        ${items.slice(2).map(
          (i) =>
            html` <li class="iati-figures__item">
              <span href="#" class="iati-figures__content">
                <span class="iati-figures__label">${i.label}</span>
                <span class="iati-figures__number">${i.number}</span>
              </span>
            </li>`,
        )}
      </ul>
    </ul>
    </div>
  `,
};
