import { html } from "lit";
import {classMap} from 'lit-html/directives/class-map.js';

import type { Meta, StoryObj } from "@storybook/web-components";

const items = ["Home", "About", "Current page"];

const meta: Meta = {
  title: "Components/Breadcrumb",
};

export default meta;
type Story = StoryObj;

export const Breadcrumb: Story = {
  render: () => html`
    <nav class="iati-breadcrumb">
      <p class="iati-breadcrumb__previous">
        <a href="#" class="iati-breadcrumb-link">${items[items.length - 2]}</a>
      </p>
      <ol class="iati-breadcrumb__list"">
        ${items.map(
          (i) =>
            html`<li class="iati-breadcrumb-item ${classMap({'iati-breadcrumb-item--current' : i == 'Current page'})}">
              ${i != 'Current page'
              ? html`<a href="#" class="iati-breadcrumb-link">${i}</a>`
              : html`<a aria-current="page" class="iati-breadcrumb-link">${i}</a>`
              }
            </li>`,
        )}
      </ol>
    </nav>
  `,
};
