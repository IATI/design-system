import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";

const meta: Meta = {
  title: "Components/Card",
};

export default meta;
type Story = StoryObj;

export const Card: Story = {
  render: () => html`
    <div class="iati-card">
      <p class="iati-card__title">Card Title</p>
      <p class="iati-card__subtitle">Subtitle</p>
      <p>Card content.</p>
    </div>
  `,
};

export const CardWithMenu: Story = {
  render: () => html`
    <div class="iati-card">
      <p class="iati-card__title">Card Title</p>
      <p class="iati-card__subtitle">Subtitle</p>
      <ul class="iati-card__menu">
        <li><a>Item 1</a></li>
        <li>
          <a>Item 2</a>
          <ul>
            <li>
              <a class="current">Nested Item 1</a>
              <ul>
                <li><a>Nested Item 2</a></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  `,
};

export const CardGallery: Story = {
  render: () =>
    html`<div class="iati-card-gallery">
      ${Array(5).fill(Card.render?.call({}))}
    </div>`,
};
