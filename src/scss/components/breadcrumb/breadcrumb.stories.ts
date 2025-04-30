import { html } from "lit";

import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Components/Breadcrumb",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export default meta;
type Story = StoryObj;

const Template = {
  render: ({ currentPageTitle, previousPageTitles }) => html`
    <nav class="iati-breadcrumb">
      <span class="iati-breadcrumb__previous">
        <i class="iati-icon iati-icon--chevron-left"></i>
        <a href="#" class="iati-breadcrumb-link"
          >${previousPageTitles[previousPageTitles.length - 1]}</a
        >
      </span>
      <ol class="iati-breadcrumb__list">
        ${previousPageTitles.map(
          (pageTitle) =>
            html`<li class="iati-breadcrumb-pageTitle">
              <a href="#" class="iati-breadcrumb-link">${pageTitle}</a>
            </li> `,
        )}
        <li class="iati-breadcrumb-item iati-breadcrumb-item--current">
          <a aria-current="page" class="iati-breadcrumb-link"
            >${currentPageTitle}</a
          >
        </li>
      </ol>
    </nav>
  `,
};

export const TwoLevel: Story = {
  ...Template,
  args: {
    currentPageTitle: "Current Page",
    previousPageTitles: ["Home"],
  },
};

export const ThreeLevel: Story = {
  ...Template,
  args: {
    currentPageTitle: "Current Page",
    previousPageTitles: ["Home", "About"],
  },
};
