import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta: Meta = {
  title: "Components/Icon",
};

export default meta;
type Story = StoryObj;

const createStory = (variant: string, background = "light") => {
  const classes = `iati-icon iati-icon--${variant}`;
  return {
    parameters: {
      backgrounds: {
        default: background,
      },
    },
    render: () => html`<i class=${classes}></i>`,
  };
};

export const Info: Story = createStory("info");
export const Search: Story = createStory("search");
export const Globe: Story = createStory("globe");
export const Youtube: Story = createStory("youtube", "dark");
export const X: Story = createStory("x", "dark");
export const LinkedIn: Story = createStory("linkedin", "dark");
export const Facebook: Story = createStory("facebook", "dark");
