import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import { Breadcrumb } from "../../components/breadcrumb/breadcrumb.stories";
import { Links as Figures } from "../../components/figures/figures.stories";
import { Footer } from "../../components/footer/footer.stories";
import { Header } from "../../components/header/header.stories";
import { Default as JumpMenu } from "../../components/jump-menu/jump-menu.stories";
import { Notice as MessageNotice } from "../../components/message/message.stories";
import {
  Default as Section,
  Fill as Summary,
} from "../../components/section/section.stories";

const meta: Meta = {
  title: "Layout/Page",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

export const Page: Story = {
  render: (args) => html`
    ${Header.render?.call({ ...args })}
    <main class="iati-main">
      ${Breadcrumb.render?.call({ ...args })}
      ${MessageNotice.render?.call({ ...args })}
      <h1>Page heading</h1>
      <p>Page contents</p>
    </main>
    ${Footer.render?.call({ ...args })}
  `,
};

export const Sidebar: Story = {
  render: (args) => html`
    ${Header.render?.call({ ...args })}
    <main class="iati-page">
      <div class="iati-page__before-content">
        ${Breadcrumb.render?.call({ ...args })}
        ${MessageNotice.render?.call({ ...args })}
      </div>
      <div class="iati-page__content">
        <article class="iati-page__article">
          <h1>Timeliness</h1>
          <p>
            This page provides statistics on the timeliness of IATI data
            publication by organisations. Timeliness is an important measure of
            IATI data quality and usefulness.
          </p>
          ${Summary.render?.call({ ...args })}
          ${Figures.render?.call({ ...args })}
          ${Section.render?.call({ ...args })}
        </article>
        <aside class="iati-page__side iati-page__side--sticky">
          ${JumpMenu.render?.call({ ...args })}
        </aside>
      </div>
      <div class="iati-page__after-content">
        ${Section.render?.call({ ...args })}
      </div>
    </main>
    ${Footer.render?.call({ ...args })}
  `,
};
