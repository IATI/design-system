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

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    items: [
      { text: "First section", link: "#" },
      { text: "Second section", link: "#" },
      { text: "Another section", link: "#" },
      { text: "A slightly longer title", link: "#" },
      { text: "Final section", link: "#" },
    ],
  },
  render: ({ items }) => html`
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
          (item) =>
            html`<li class="iati-jump-menu__item">
              <a href=${item.link} class="iati-jump-menu__link">${item.text}</a>
            </li>`,
        )}
      </ul>
    </nav>
  `,
};
