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

export const Basic: Story = {
  render: () => html`
    <div class="iati-data-card">
      <h3 class="iati-data-card__title">Project Overview</h3>
      <p class="iati-data-card__tagline">
        Essential metrics and insights for the IATI transparency initiative
        project dashboard
      </p>
      <div class="iati-data-card__button">
        <button class="iati-button">View Details</button>
      </div>
    </div>
  `,
};

export const WithStats: Story = {
  render: () => html`
    <div class="iati-data-card">
      <h3 class="iati-data-card__title">Country Data</h3>
      <p class="iati-data-card__tagline">
        Key statistics for development activities in this region
      </p>
      <div class="iati-data-card__stats">
        <div class="iati-data-card__stat">
          <div class="iati-data-card__stat-label">Files</div>
          <div class="iati-data-card__stat-value">845</div>
        </div>
        <div class="iati-data-card__stat">
          <div class="iati-data-card__stat-label">Money</div>
          <div class="iati-data-card__stat-value">$100,000</div>
        </div>
      </div>
      <div class="iati-data-card__button">
        <button class="iati-button">Explore Data</button>
      </div>
    </div>
  `,
};

export const WithSingleStat: Story = {
  render: () => html`
    <div class="iati-data-card">
      <h3 class="iati-data-card__title">Organization Summary</h3>
      <p class="iati-data-card__tagline">
        Total projects managed by this organization across all regions
      </p>
      <div class="iati-data-card__stats">
        <div class="iati-data-card__stat">
          <div class="iati-data-card__stat-label">Projects</div>
          <div class="iati-data-card__stat-value">247</div>
        </div>
      </div>
      <div class="iati-data-card__button">
        <button class="iati-button">View Projects</button>
      </div>
    </div>
  `,
};

export const WithGraph: Story = {
  render: () => html`
    <div class="iati-data-card">
      <h3 class="iati-data-card__title">Funding Trends</h3>
      <p class="iati-data-card__tagline">
        Monthly funding distribution over the past 12 months
      </p>
      <div class="iati-data-card__stats">
        <div class="iati-data-card__stat">
          <div class="iati-data-card__stat-label">Total</div>
          <div class="iati-data-card__stat-value">$2.4M</div>
        </div>
        <div class="iati-data-card__stat">
          <div class="iati-data-card__stat-label">Growth</div>
          <div class="iati-data-card__stat-value">+12%</div>
        </div>
      </div>
      <div class="iati-data-card__graph">
        <canvas
          class="iati-data-card__sparkline"
          data-sparkline='{"labels":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"values":[435,321,532,801,1231,1098,732,321,451,482,513,397]}'
        ></canvas>
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
      <h3 class="iati-data-card__title">Regional Analysis</h3>
      <p class="iati-data-card__tagline">
        Comprehensive view of development aid effectiveness across Sub-Saharan
        Africa including funding patterns and project outcomes
      </p>
      <div class="iati-data-card__stats">
        <div class="iati-data-card__stat">
          <div class="iati-data-card__stat-label">Countries</div>
          <div class="iati-data-card__stat-value">48</div>
        </div>
        <div class="iati-data-card__stat">
          <div class="iati-data-card__stat-label">Budget</div>
          <div class="iati-data-card__stat-value">$15.7M</div>
        </div>
      </div>
      <div class="iati-data-card__graph">
        <canvas
          class="iati-data-card__sparkline"
          data-sparkline='{"labels":["Q1","Q2","Q3","Q4","Q5","Q6"],"values":[12500000, 13200000, 15100000, 14800000, 15700000, 16200000]}'
        ></canvas>
      </div>
      <div class="iati-data-card__button">
        <button class="iati-button">Detailed Analysis</button>
      </div>
    </div>
  `,
};
