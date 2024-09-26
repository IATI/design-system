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
          <li><a href="#">Another even more useful longer lin</a></li>
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
        <p>
          Part of the IATI Unified Platform Code licensed under the GNU AGPL.
        </p>
        <p>Documentation licensed under CC by 3.0</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <p>Web v2.8.2</p>
        <p>Services</p>
        <p>v2.8.0</p>
        <p>API v2.4.0</p>
      </div>
    </div>`,
};
