import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import { TwoLevel as Breadcrumb } from "../../components/breadcrumb/breadcrumb.stories";
import { Links as Figures } from "../../components/figures/figures.stories";
import { Footer } from "../../components/footer/footer.stories";
import { Header } from "../../components/header/header.stories";
import { Default as JumpMenu } from "../../components/jump-menu/jump-menu.stories";
import { Notice as NoticeMessage } from "../../components/message/message.stories";
import {
  Fill as FillSection,
  Default as Section,
} from "../../components/section/section.stories";

const meta: Meta = {
  title: "Layout/Page",
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "grey",
    },
  },
};

export default meta;
type Story = StoryObj;

export const SimpleLayout: Story = {
  render: (args, context) => html`
    ${Header.render?.call({ ...args })}
    <main class="iati-main">
      ${Breadcrumb.render(
        { ...Breadcrumb.args, currentPageTitle: "Simple Layout" },
        context,
      )}
      ${NoticeMessage.render({ ...NoticeMessage.args }, context)}
      <h1>Simple Layout</h1>
      <p>
        This example shows how to combine components together into a simple page
        layout.
      </p>
    </main>
    ${Footer.render?.call({ ...args })}
  `,
};

export const LongPageLayout: Story = {
  render: (args, context) => html`
    ${Header.render?.call({ ...args })}
    <main class="iati-main">
      <div class="iati-main__before-content">
        ${Breadcrumb.render(
          { ...Breadcrumb.args, currentPageTitle: "Long Page Layout" },
          context,
        )}
        ${NoticeMessage.render({ ...NoticeMessage.args }, context)}
        <h1>Long Page Layout</h1>
        <p>
          This example shows how to combine components together into a long page
          layout. Long pages should include the "Jump to Section" menu, and can
          make use of the "Section" component to break up content.
        </p>
      </div>
      <div class="iati-main__content">
        <article class="iati-main__article">
          ${FillSection.render(
            { ...FillSection.args, title: "Section A", headingId: "sectionA" },
            context,
          )}
          ${Figures.render?.call({ ...args })}
          ${Section.render(
            { ...Section.args, title: "Section B", headingId: "sectionB" },
            context,
          )}
          ${Section.render(
            {
              ...Section.args,
              title: "Section C",
              fill: true,
              headingId: "sectionC",
            },
            context,
          )}
          ${Section.render(
            { ...Section.args, title: "Section D", headingId: "sectionD" },
            context,
          )}
        </article>
        <aside class="iati-main__side iati-main__side--sticky">
          ${JumpMenu.render(
            {
              items: [
                { text: "Section A", link: "#sectionA" },
                { text: "Section B", link: "#sectionB" },
                { text: "Section C", link: "#sectionC" },
                { text: "Section D", link: "#sectionD" },
              ],
            },
            context,
          )}
        </aside>
      </div>
      <div class="iati-main__after-content">
        ${Section.render(
          { ...Section.args, title: "Section E", fill: true },
          context,
        )}
      </div>
    </main>
    ${Footer.render?.call({ ...args })}
  `,
};

export const IncrementalMigration: Story = {
  parameters: {
    designSystemEnabled: false,
  },
  render: (args) => html`
    <div class="iati-design-system--enabled">
      ${Header.render?.call({ ...args })}
    </div>
    <h1>Incremental Migration</h1>
    <p>This example shows how to apply the IATI Design System incrementally.</p>
    <p>
      By wrapping the
      <code>header</code>and <code>footer</code> in the
      <code>.iati-design-system--enabled</code> class, the IATI Design System
      styles are applied only to those sections of the page, leaving the rest
      as-is.
    </p>
    <p>
      See the
      <a href="/?path=/docs/installation--docs#incremental-migration-version"
        >installation</a
      >
      and
      <a href="/?path=/docs/usage--docs#incremental-migration">usage</a> docs
      for more information.
    </p>
    <div class="iati-design-system--enabled">
      ${Footer.render?.call({ ...args })}
    </div>
  `,
};
