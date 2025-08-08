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
          aria-expanded="false"
        >
          Open
        </button>
      </div>
      <ul
        id="iati-jump-menu-items"
        class="iati-jump-menu__items js-jump-menu-items"
        aria-hidden="true"
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

export const WithSubMenus: Story = {
  args: {
    items: [
      { text: "First section", link: "#" },
      {
        text: "Second section",
        children: [
          { text: "First subsection", link: "#" },
          { text: "Second subsection", link: "#" },
          { text: "Another subsection", link: "#" },
        ],
      },
      { text: "Another section", link: "#" },
      {
        text: "A slightly longer title",
        children: [
          { text: "Subsection", link: "#" },
          { text: "Another subsection", link: "#" },
        ],
      },
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
          aria-expanded="false"
        >
          Open
        </button>
      </div>
      <ul
        id="iati-jump-menu-items"
        class="iati-jump-menu__items js-jump-menu-items"
        aria-hidden="true"
      >
        ${items.map((item) => {
          if (item.children) {
            return html`<li class="iati-jump-menu__item">
              <a href=${item.link || "#"} class="iati-jump-menu__link"
                >${item.text}</a
              >
              <ul class="iati-jump-menu__subitems">
                ${item.children.map(
                  (child) =>
                    html`<li class="iati-jump-menu__subitem">
                      <a href=${child.link} class="iati-jump-menu__sublink"
                        >${child.text}</a
                      >
                    </li>`,
                )}
              </ul>
            </li>`;
          } else {
            return html`<li class="iati-jump-menu__item">
              <a href=${item.link} class="iati-jump-menu__link">${item.text}</a>
            </li>`;
          }
        })}
      </ul>
    </nav>
  `,
};
