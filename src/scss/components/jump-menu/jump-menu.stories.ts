import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta: Meta = {
  title: "Components/Jump Menu",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

const items = [
  "Page summary",
  "Narrative",
  "Assessment",
  "Exceptions",
  "comparison with original global partnership indicator methodology",
  "Pseudocode",
];

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <nav class="iati-jump-menu">
      <div class="iati-jump-menu__header">
        <h2 class="iati-jump-menu__title">Jump to section</h2>
        <button
          class="iati-jump-menu__toggle js-jump-menu-toggle"
          aria-controls="iati-jump-menu-items"
          aria-expanded="true"
        >
          Open
        </button>
      </div>
      <ul
        id="iati-jump-menu-items"
        class="iati-jump-menu__items js-jump-menu-items"
      >
        ${items.map(
          (i) =>
            html`<li class="iati-jump-menu__item">
              <a href="#" class="iati-jump-menu__link">${i}</a>
            </li>`,
        )}
      </ul>
    </nav>
  `,
};
