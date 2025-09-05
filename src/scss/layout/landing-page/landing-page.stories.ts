import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import { TwoLevel as Breadcrumb } from "../../components/breadcrumb/breadcrumb.stories";
import {
  Complete,
  Graph,
  ManyStats,
  Stat,
} from "../../components/data-card/data-card.stories";
import { Footer } from "../../components/footer/footer.stories";
import { Header } from "../../components/header/header.stories";

const meta: Meta = {
  title: "Layout/Landing Page",
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "grey",
    },
  },
};

export default meta;
type Story = StoryObj;

export const DataCardsLanding: Story = {
  render: (args, context) => html`
    ${Header.render?.call({ ...args })}
    <main class="iati-main">
      ${Breadcrumb.render(
        { ...Breadcrumb.args, currentPageTitle: "Exploring Data" },
        context,
      )}

      <div class="iati-masonry-container">
        <div class="iati-landing-page_header">
          <h1 class="iati-landing-page__title">Exploring data</h1>
          <h3 class="iati-landing-page__subtitle">
            Which parts of the IATI Standard are being used?
          </h3>
          <p class="iati-landing-page__description">
            This section shows the various elements, attributes and codelists
            within published IATI data. For every instance of these properties,
            a report is made available.
          </p>
        </div>
        <div class="iati-masonry">
          ${Stat.render?.call({ ...args })}
          ${ManyStats.render?.call({ ...args })}
          ${Graph.render?.call({ ...args })}
          ${Complete.render?.call({ ...args })}
          ${ManyStats.render?.call({ ...args })}
          ${Stat.render?.call({ ...args })}
          ${ManyStats.render?.call({ ...args })}
          ${Stat.render?.call({ ...args })}
          ${Complete.render?.call({ ...args })}
          ${Stat.render?.call({ ...args })} ${Graph.render?.call({ ...args })}
          ${ManyStats.render?.call({ ...args })}
        </div>
      </div>
    </main>
    ${Footer.render?.call({ ...args })}
  `,
};
