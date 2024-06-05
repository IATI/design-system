import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import { Footer } from "../footer/footer.stories";
import { WithHeader as TitleBarWithHeader } from "../title-bar/title-bar.stories";

const meta: Meta = {
  title: "Layout/Page",
};

export default meta;
type Story = StoryObj;

export const Page: Story = {
  render: (args) => html`
    ${TitleBarWithHeader.render?.call({ ...args })}
    <main class="iati-main">
      <h1>Page heading</h1>
      <p>Page contents</p>
    </main>
    ${Footer.render?.call({ ...args })}
  `,
};
