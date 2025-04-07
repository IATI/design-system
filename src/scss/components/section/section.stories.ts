import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";

const meta: Meta = {
  title: "Components/Section",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div class="iati-section">
      <h2 class="iati-section__title">About</h2>
      <div class="iati-section__content">
        <p>
          The time-lag statistics attempt to assess how up to date the data
          is at the point that it is refreshed. For instance a publisher may
          refresh their data monthly, but the refreshed data is in fact three
          months old. Alternatively a publisher may only refresh their data once
          a year, but when they do it contains current data that is less than
          one month out of date.
        </p>
        <p>
          Transactions are the most numerous and most regularly refreshed
          elements in reported IATI activities and they are therefore used to
          make this assessment.
        </p>
        <p>
          The table of statistics shows the number of transaction dates reported
          in each of the last twelve calendar months. The current month is shown
          for informational purposes, but excluded from the assessment.
        </p>
      </div>
    </div>
  `,
};

export const Fill: Story = {
  render: () => html`
    <div class="iati-section iati-section--fill">
      <h2 class="iati-section__title">About</h2>
      <div class="iati-section__content">
        <p>
          The time-lag statistics attempt to assess how up to date the data
          is at the point that it is refreshed. For instance a publisher may
          refresh their data monthly, but the refreshed data is in fact three
          months old. Alternatively a publisher may only refresh their data once
          a year, but when they do it contains current data that is less than
          one month out of date.
        </p>
        <p>
          Transactions are the most numerous and most regularly refreshed
          elements in reported IATI activities and they are therefore used to
          make this assessment.
        </p>
        <p>
          The table of statistics shows the number of transaction dates reported
          in each of the last twelve calendar months. The current month is shown
          for informational purposes, but excluded from the assessment.
        </p>
      </div>
    </div>
  `,
};
