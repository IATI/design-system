import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta: Meta = {
  title: "Components/File Card",
  parameters: {
    docs: {
      description: {
        component:
          "A card-based layout for displaying file information that maintains the visual structure of a table header while presenting data in an accessible card format.",
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div class="iati-file-card-table">
      <div class="iati-file-card-table__header">
        <div class="iati-file-card-table__header-cell">Package</div>
        <div class="iati-file-card-table__header-cell">Activities</div>
        <div class="iati-file-card-table__header-cell">Organisations</div>
        <div class="iati-file-card-table__header-cell">File size</div>
        <div class="iati-file-card-table__header-cell">Version</div>
      </div>

      <div class="iati-file-card-table__cards">
        <div class="iati-file-card">
          <div class="iati-file-card__main-row">
            <div class="iati-file-card__cell iati-file-card__cell--strong">
              Africalia-Activities
            </div>
            <div class="iati-file-card__cell">11</div>
            <div class="iati-file-card__cell">0</div>
            <div class="iati-file-card__cell">223.1 kb</div>
            <div class="iati-file-card__cell">2.03</div>
          </div>
          <div class="iati-file-card__details-row">
            <div class="iati-file-card__cell iati-file-card__cell--muted">
              Package details
            </div>
            <div class="iati-file-card__cell iati-file-card__cell--muted">
              Activity count
            </div>
            <div class="iati-file-card__cell iati-file-card__cell--muted">
              Org count
            </div>
            <div class="iati-file-card__cell iati-file-card__cell--muted">
              Total size
            </div>
            <div class="iati-file-card__cell iati-file-card__cell--muted">
              IATI version
            </div>
          </div>
          <div class="iati-file-card__footer-row">
            <div class="iati-file-card__cell">
              <span class="iati-file-card__info-label"
                >Recipient country info</span
              >
              <span>Algeria, Greece, Saint Helena</span>
            </div>
            <div class="iati-file-card__cell">
              <span class="iati-file-card__info-label"
                >Something else here</span
              >
              <div class="iati-file-card__chart-container">
                <canvas
                  class="iati-data-card__sparkline"
                  data-sparkline='{"labels":["1","2","3","4","5","6","7","8","9","10"],"values":[15,3,25,8,18,5,22,12,28,6]}'
                ></canvas>
              </div>
            </div>
            <div class="iati-file-card__cell">
              <span class="iati-file-card__info-label"
                >Something else here</span
              >
              <span>Another value</span>
            </div>
            <div class="iati-file-card__cell">
              <span class="iati-file-card__info-label">Validation status</span>
              <span
                class="iati-file-card__status iati-file-card__status--success"
                >Success</span
              >
            </div>
          </div>
        </div>

        <div class="iati-file-card">
          <div class="iati-file-card__main-row">
            <div class="iati-file-card__cell iati-file-card__cell--strong">
              Alcis-Am
            </div>
            <div class="iati-file-card__cell">1</div>
            <div class="iati-file-card__cell">0</div>
            <div class="iati-file-card__cell">14.89 kb</div>
            <div class="iati-file-card__cell"></div>
          </div>
          <div class="iati-file-card__details-row">
            <div class="iati-file-card__cell iati-file-card__cell--muted">
              Package details
            </div>
            <div class="iati-file-card__cell iati-file-card__cell--muted">
              Activity count
            </div>
            <div class="iati-file-card__cell iati-file-card__cell--muted">
              Org count
            </div>
            <div class="iati-file-card__cell iati-file-card__cell--muted">
              Total size
            </div>
            <div class="iati-file-card__cell iati-file-card__cell--muted">
              IATI version
            </div>
          </div>
          <div class="iati-file-card__footer-row">
            <div class="iati-file-card__cell">
              <span class="iati-file-card__info-label"
                >Recipient country info</span
              >
              <span>Algeria, Greece, Saint Helena</span>
            </div>
            <div class="iati-file-card__cell">
              <span class="iati-file-card__info-label"
                >Something else here</span
              >
              <div class="iati-file-card__chart-container">
                <canvas
                  class="iati-data-card__sparkline"
                  data-sparkline='{"labels":["1","2","3","4","5","6","7","8","9","10"],"values":[15,3,25,8,18,5,22,12,28,6]}'
                ></canvas>
              </div>
            </div>
            <div class="iati-file-card__cell">
              <span class="iati-file-card__info-label"
                >Something else here</span
              >
              <span>Another value</span>
            </div>
            <div class="iati-file-card__cell">
              <span class="iati-file-card__info-label">Validation status</span>
              <span
                class="iati-file-card__status iati-file-card__status--critical"
                >Critical</span
              >
            </div>
          </div>
        </div>

        <div class="iati-file-card">
          <div class="iati-file-card__main-row">
            <div class="iati-file-card__cell iati-file-card__cell--strong">
              Africalia-Org
            </div>
            <div class="iati-file-card__cell">1</div>
            <div class="iati-file-card__cell">0</div>
            <div class="iati-file-card__cell">14.89 kb</div>
            <div class="iati-file-card__cell">2.03</div>
          </div>
          <div class="iati-file-card__details-row">
            <div class="iati-file-card__cell iati-file-card__cell--muted">
              Package details
            </div>
            <div class="iati-file-card__cell iati-file-card__cell--muted">
              Activity count
            </div>
            <div class="iati-file-card__cell iati-file-card__cell--muted">
              Org count
            </div>
            <div class="iati-file-card__cell iati-file-card__cell--muted">
              Total size
            </div>
            <div class="iati-file-card__cell iati-file-card__cell--muted">
              IATI version
            </div>
          </div>
          <div class="iati-file-card__footer-row">
            <div class="iati-file-card__cell">
              <span class="iati-file-card__info-label"
                >Recipient country info</span
              >
              <span>Algeria, Greece, Saint Helena</span>
            </div>
            <div class="iati-file-card__cell">
              <span class="iati-file-card__info-label"
                >Something else here</span
              >
              <div class="iati-file-card__chart-container">
                <canvas
                  class="iati-data-card__sparkline"
                  data-sparkline='{"labels":["1","2","3","4","5","6","7","8","9","10"],"values":[15,3,25,8,18,5,22,12,28,6]}'
                ></canvas>
              </div>
            </div>
            <div class="iati-file-card__cell">
              <span class="iati-file-card__info-label"
                >Something else here</span
              >
              <span>Another value</span>
            </div>
            <div class="iati-file-card__cell">
              <span class="iati-file-card__info-label">Validation status</span>
              <span class="iati-file-card__status iati-file-card__status--error"
                >Error</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
};

export const SingleCard: Story = {
  render: () => html`
    <div class="iati-file-card-table">
      <div class="iati-file-card-table__header">
        <div class="iati-file-card-table__header-cell">Package</div>
        <div class="iati-file-card-table__header-cell">Activities</div>
        <div class="iati-file-card-table__header-cell">Organisations</div>
        <div class="iati-file-card-table__header-cell">File size</div>
        <div class="iati-file-card-table__header-cell">Version</div>
      </div>

      <div class="iati-file-card-table__cards">
        <div class="iati-file-card">
          <div class="iati-file-card__main-row">
            <div class="iati-file-card__cell iati-file-card__cell--strong">
              Example-Package
            </div>
            <div class="iati-file-card__cell">25</div>
            <div class="iati-file-card__cell">3</div>
            <div class="iati-file-card__cell">542.7 kb</div>
            <div class="iati-file-card__cell">2.03</div>
          </div>
          <div class="iati-file-card__details-row">
            <div class="iati-file-card__cell iati-file-card__cell--muted">
              Package details
            </div>
            <div class="iati-file-card__cell iati-file-card__cell--muted">
              Activity count
            </div>
            <div class="iati-file-card__cell iati-file-card__cell--muted">
              Org count
            </div>
            <div class="iati-file-card__cell iati-file-card__cell--muted">
              Total size
            </div>
            <div class="iati-file-card__cell iati-file-card__cell--muted">
              IATI version
            </div>
          </div>
          <div class="iati-file-card__footer-row">
            <div class="iati-file-card__cell">
              <span class="iati-file-card__info-label"
                >Recipient country info</span
              >
              <span>Algeria, Greece, Saint Helena</span>
            </div>
            <div class="iati-file-card__cell">
              <span class="iati-file-card__info-label"
                >Something else here</span
              >
              <div class="iati-file-card__chart-container">
                <canvas
                  class="iati-data-card__sparkline"
                  data-sparkline='{"labels":["1","2","3","4","5","6","7","8","9","10"],"values":[15,3,25,8,18,5,22,12,28,6]}'
                ></canvas>
              </div>
            </div>
            <div class="iati-file-card__cell">
              <span class="iati-file-card__info-label"
                >Something else here</span
              >
              <span>Another value</span>
            </div>
            <div class="iati-file-card__cell">
              <span class="iati-file-card__info-label">Validation status</span>
              <span
                class="iati-file-card__status iati-file-card__status--success"
                >Success</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
};
