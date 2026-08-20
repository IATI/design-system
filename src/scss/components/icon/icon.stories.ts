import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";

const meta: Meta = {
  title: "Components/Icon",
};

export default meta;
type Story = StoryObj;

const createStory = (variant: string, onDarkBackground = false) => {
  const classes = `iati-icon iati-icon--${variant}`;
  return {
    globals: onDarkBackground ? { backgrounds: { value: "dark" } } : {},
    render: () => html`<i class=${classes}></i>`,
  };
};

export const Info: Story = createStory("info");
export const Search: Story = createStory("search");
export const Globe: Story = createStory("globe");
export const ChevronLeft: Story = createStory("chevron-left");
export const Youtube: Story = createStory("youtube", true);
export const X: Story = createStory("x", true);
export const LinkedIn: Story = createStory("linkedin", true);
export const Facebook: Story = createStory("facebook", true);
