import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";

const meta: Meta = {
  title: "Components/Data Card",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Stat: Story = {
  render: () => html`
    <div class="iati-data-card">
      <h3 class="iati-data-card__title">IATI Publishers</h3>
      <p class="iati-data-card__tagline">
        How many organisations are publishing IATI data?
      </p>
      <div class="iati-data-card__stats">
        <div class="iati-data-card__stat">
          <div class="iati-data-card__stat-label">Total Iati Publishers</div>
          <div class="iati-data-card__stat-value">1719</div>
        </div>
      </div>
      <div class="iati-data-card__button">
        <button class="iati-button">Learn more about IATI Publishers</button>
      </div>
    </div>
  `,
};

export const ManyStats: Story = {
  render: () => html`
    <div class="iati-data-card">
      <h3 class="iati-data-card__title">Organisation Identifiers</h3>
      <p class="iati-data-card__tagline">
        Which versions of the IATI Standard are being used?
      </p>
      <div class="iati-data-card__stats">
        <div class="iati-data-card__stat">
          <div class="iati-data-card__stat-label">Active Files</div>
          <div class="iati-data-card__stat-value">845</div>
        </div>
        <div class="iati-data-card__stat">
          <div class="iati-data-card__stat-label">Number</div>
          <div class="iati-data-card__stat-value">$100,000</div>
        </div>
        <div class="iati-data-card__stat">
          <div class="iati-data-card__stat-label">Stat 3</div>
          <div class="iati-data-card__stat-value">502,476</div>
        </div>
        <div class="iati-data-card__stat">
          <div class="iati-data-card__stat-label">Stat</div>
          <div class="iati-data-card__stat-value">4071</div>
        </div>
      </div>

      <div class="iati-data-card__button">
        <button class="iati-button">
          Learn more about Organisation Identifiers
        </button>
      </div>
    </div>
  `,
};

export const Graph: Story = {
  render: () => html`
    <div class="iati-data-card">
      <h3 class="iati-data-card__title">Codelists</h3>
      <p class="iati-data-card__tagline">
        How are codelists used in IATI data?
      </p>
      <div class="iati-data-card__graph">
        <canvas
          class="iati-data-card__sparkline"
          data-sparkline='{"labels":["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],"values":[100,120,90,150,80,140,110,95,160,75,130,130,132,136,130,70,155,125,95,170,85,60,135,132,80,90,145,110,150,145]}'
        ></canvas>
      </div>
      <div class="iati-data-card__caption">
        Description below chart showing changes over time
      </div>
      <div class="iati-data-card__button">
        <button class="iati-button">Full Report</button>
      </div>
    </div>
  `,
};

export const Complete: Story = {
  render: () => html`
    <div class="iati-data-card">
      <h3 class="iati-data-card__title">IATI Files</h3>
      <p class="iati-data-card__tagline">How many IATI files are published?</p>
      <div class="iati-data-card__stats">
        <div class="iati-data-card__stat">
          <div class="iati-data-card__stat-label">Big number title</div>
          <div class="iati-data-card__stat-value">897,548</div>
        </div>
        <div class="iati-data-card__stat">
          <div class="iati-data-card__stat-label">Small number title</div>
          <div class="iati-data-card__stat-value">12</div>
        </div>
      </div>
      <div class="iati-data-card__graph">
        <canvas
          class="iati-data-card__sparkline"
          data-sparkline='{"labels":["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],"values":[100,120,90,150,80,140,110,95,160,75,130,130,132,136,130,70,155,125,95,170,85,60,135,132,80,90,145,110,150,145]}'
        ></canvas>
      </div>
      <div class="iati-data-card__caption">
        Description below chart showing changes over time
      </div>
      <div class="iati-data-card__button">
        <button class="iati-button">Full Report</button>
      </div>
    </div>
  `,
};
