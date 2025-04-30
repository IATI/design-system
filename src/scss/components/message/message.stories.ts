import { html } from "lit";

import type { Meta, StoryObj } from "@storybook/web-components";

const meta: Meta = {
  title: "Components/Message",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
  argTypes: {
    type: { control: "select", options: ["notice", "info"] },
  },
};

export default meta;
type Story = StoryObj;

const Template = {
  render: ({ type }) => html`
    <p class="iati-message ${type ? "iati-message--" + type : ""}">
      This message is used to
      <span class="iati-message-highlight">inform the reader</span>
      of something.
      <a href="#">Or link to more info.</a>
    </p>
  `,
};

export const Notice: Story = {
  args: {
    type: "notice",
  },
  ...Template,
};

export const Info: Story = {
  args: {
    type: "info",
  },
  ...Template,
};
