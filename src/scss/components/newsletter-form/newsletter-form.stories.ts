import { html } from "lit";
import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Components/Newsletter Form",
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <form class="iati-newsletter-form">
      <div class="iati-newsletter-form__item">
        <label for="newsletter-email" class="iati-newsletter-form__label">Email</label>
        <input id="newsletter-email" type="text" class="iati-newsletter-form__input" />
      </div>
      <div class="iati-newsletter-form__item">
        <label for="newsletter-firstname" class="iati-newsletter-form__label">First name</label>
        <input id="newsletter-firstname" type="text" class="iati-newsletter-form__input" />
      </div>
      <div class="iati-newsletter-form__item">
        <label for="newsletter-surname" class="iati-newsletter-form__label">Surname</label>
        <input id="newsletter-surname" type="text" class="iati-newsletter-form__input" />
      </div>
      <div class="iati-newsletter-form__item">
        <button class="iati-newsletter-form__submit iati-button iati-button--submit">Subscribe</button>
      </div>
    </form>
  `,
};
