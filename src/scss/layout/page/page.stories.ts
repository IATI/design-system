import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import { Breadcrumb } from "../../components/breadcrumb/breadcrumb.stories";
import { Notice as MessageNotice } from "../../components/message/message.stories";
import { Footer } from "../footer/footer.stories";
import { Header } from "../header/header.stories";

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
