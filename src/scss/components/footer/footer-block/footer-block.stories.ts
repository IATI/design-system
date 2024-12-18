import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";

const meta: Meta = {
  title: "Components/Footer/Footer Block",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;
type Story = StoryObj;

export const UsefulLinks: Story = {
  render: () =>
    html`<div class="iati-footer-block">
      <h2 class="iati-footer-block__title">Useful links</h2>
      <div class="iati-footer-block__content">
        <ul>
          <li><a href="#">Useful link</a></li>
          <li><a href="#">Translation FAQs</a></li>
          <li><a href="#">Another useful link</a></li>
          <li><a href="#">Another even more useful longer link</a></li>
        </ul>
      </div>
    </div>`,
};

export const AdditionInfo: Story = {
  render: () =>
    html`<div class="iati-footer-block">
      <h2 class="iati-footer-block__title">Additional information</h2>
      <div
        class="iati-footer-block__content iati-footer-block__content--columns"
      >
        <div>
          <p>Part of the IATI Unified Platform.</p>
          <p>Code licensed under <a href="#">GNU AGPL</a>.</p>
          <p>Documentation licensed under <a href="#">CC BY 3.0</a>.</p>
        </div>
        <div>
          <ul>
            <li><a href="#">Web v2.8.2</a></li>
            <li><a href="#">Services v2.8.0</a></li>
            <li><a href="#">API v2.4.0</a></li>
          </ul>
        </div>
      </div>
    </div>`,
};
