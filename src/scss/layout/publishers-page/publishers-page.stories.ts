import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import { TwoLevel as Breadcrumb } from "../../components/breadcrumb/breadcrumb.stories";
import { Footer } from "../../components/footer/footer.stories";
import { Header } from "../../components/header/header.stories";
import { Default as JumpMenu } from "../../components/jump-menu/jump-menu.stories";
import { Default as Table } from "../../components/table/table.stories";

const meta: Meta = {
  title: "Layout/Publishers Page",
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "grey",
    },
  },
};

export default meta;
type Story = StoryObj;

export const PublishersPage: Story = {
  render: (args, context) => html`
    ${Header.render?.call({ ...args })}
    <main class="iati-publishers-page">
      <div class="iati-publishers-page__breadcrumb-section">
        ${Breadcrumb.render(
          {
            currentPageTitle: "Publisher Page",
            previousPageTitles: ["Home", "Reporting Orgs"],
          },
          context,
        )}
      </div>
      <div class="iati-publishers-page__content">
        <article class="iati-publishers-page__article">
          <div class="iati-publishers-page__before-content">
            <h1>Reporting Org: Publisher Page</h1>
            <div class="iati-publishers-page__intro-row">
              <p class="iati-publishers-page__intro-text">
                A text area next to their name for info and notes about their
                own data, publishers provide information about their
                organisation and the development or humanitarian activities they
                are involved in. This includes details about the organisation
                itself, as well as specific information about each activity,
                like financial data, contextual information, and results.
              </p>
              <div class="iati-publishers-page__intro-button">
                <a href="#" class="iati-button iati-button--submit"
                  >Publisher Stats (.JSON)</a
                >
              </div>
            </div>
          </div>
          <div class="iati-section iati-section--fill-darker">
            <h2 class="iati-section__title" id="headlines">Headlines</h2>
            <div class="iati-section__content">
              <div class="iati-publishers-page__headlines">
                <div class="iati-publishers-page__headlines-column">
                  <div class="iati-publishers-page__headline-item">
                    <span class="iati-publishers-page__headline-key"
                      >On the registry</span
                    >
                    <span class="iati-publishers-page__headline-value">
                      <a href="#">Publisher</a>
                    </span>
                  </div>
                  <div class="iati-publishers-page__headline-item">
                    <span class="iati-publishers-page__headline-key"
                      >Reporting org on registry</span
                    >
                    <span class="iati-publishers-page__headline-value">
                      <code>BE-BCE_KBO-0474198059</code>
                    </span>
                  </div>
                  <div class="iati-publishers-page__headline-item">
                    <span class="iati-publishers-page__headline-key"
                      >Reporting org(s) in data</span
                    >
                    <span class="iati-publishers-page__headline-value">
                      <code>BE-BCE_KBO-0474198059</code>
                    </span>
                  </div>
                </div>
                <div class="iati-publishers-page__headlines-column">
                  <div class="iati-publishers-page__headline-item">
                    <span class="iati-publishers-page__headline-key"
                      >Hierarchies</span
                    >
                    <span class="iati-publishers-page__headline-value">
                      <code>1</code> <code>2</code>
                    </span>
                  </div>
                  <div class="iati-publishers-page__headline-item">
                    <span class="iati-publishers-page__headline-key"
                      >Licenses</span
                    >
                    <span class="iati-publishers-page__headline-value">
                      <a href="#"><code>other-open</code></a>
                      <a href="#"><code>notspecified</code></a>
                    </span>
                  </div>
                  <div class="iati-publishers-page__headline-item">
                    <span class="iati-publishers-page__headline-key"
                      >Files failing scheme validation</span
                    >
                    <span class="iati-publishers-page__headline-value">0</span>
                  </div>
                </div>
              </div>
              <div class="iati-figures">
                <ul class="iati-figures__items">
                  <li class="iati-figures__item">
                    <span class="iati-figures__content">
                      <span class="iati-figures__label">
                        <span class="iati-figures__label-line">Activity</span>
                        <span class="iati-figures__label-line">files</span>
                      </span>
                      <span class="iati-figures__number">2</span>
                    </span>
                  </li>
                  <li class="iati-figures__item">
                    <span class="iati-figures__content">
                      <span class="iati-figures__label">
                        <span class="iati-figures__label-line"
                          >Organisation</span
                        >
                        <span class="iati-figures__label-line">files</span>
                      </span>
                      <span class="iati-figures__number">1</span>
                    </span>
                  </li>

                  <li class="iati-figures__item">
                    <span class="iati-figures__content">
                      <span class="iati-figures__label">
                        <span class="iati-figures__label-line">Total</span>
                        <span class="iati-figures__label-line">file size</span>
                      </span>
                      <span class="iati-figures__number">29.8kb</span>
                    </span>
                  </li>
                  <li class="iati-figures__item">
                    <span class="iati-figures__content">
                      <span class="iati-figures__label">
                        <span class="iati-figures__label-line">Activities</span>
                      </span>
                      <span class="iati-figures__number">19</span>
                    </span>
                  </li>
                  <li class="iati-figures__item">
                    <span class="iati-figures__content">
                      <span class="iati-figures__label">
                        <span class="iati-figures__label-line">Unique</span>
                        <span class="iati-figures__label-line">activities</span>
                      </span>
                      <span class="iati-figures__number">19</span>
                    </span>
                  </li>
                  <li class="iati-figures__item">
                    <span class="iati-figures__content">
                      <span class="iati-figures__label">
                        <span class="iati-figures__label-line"
                          >Organisations</span
                        >
                      </span>
                      <span class="iati-figures__number">1</span>
                    </span>
                  </li>
                  <li class="iati-figures__item">
                    <span class="iati-figures__content">
                      <span class="iati-figures__label">
                        <span class="iati-figures__label-line">Versions</span>
                      </span>
                      <span class="iati-figures__number">2.03</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="iati-publishers-page__data-cards">
              <div class="iati-data-card">
                <h3 class="iati-data-card__title">Activity Status</h3>
                <div class="iati-data-card__content">
                  <div class="iati-data-card__graph">
                    <canvas
                      class="iati-data-card__sparkline"
                      data-sparkline='{"labels":["1","2","3","4","5","6","7"],"values":[15,12,8,5,3,2,1]}'
                    ></canvas>
                  </div>
                  <div class="iati-data-card__caption">
                    Description below chart showing changes over time
                  </div>
                  <div class="iati-data-card__button">
                    <button
                      class="iati-button iati-button--submit iati-button--compact"
                    >
                      Download data (.JSON)
                    </button>
                  </div>
                </div>
              </div>
              <div class="iati-data-card">
                <h3 class="iati-data-card__title">Funding Sources</h3>
                <div class="iati-data-card__content">
                  <div class="iati-data-card__graph">
                    <canvas
                      class="iati-data-card__sparkline"
                      data-sparkline='{"labels":["1","2","3","4","5","6","7","8"],"values":[25,20,15,12,10,8,6,4]}'
                    ></canvas>
                  </div>
                  <div class="iati-data-card__caption">
                    Funding breakdown by source
                  </div>
                  <div class="iati-data-card__button">
                    <button
                      class="iati-button iati-button--submit iati-button--compact"
                    >
                      Download data (.JSON)
                    </button>
                  </div>
                </div>
              </div>
              <div class="iati-data-card">
                <h3 class="iati-data-card__title">Sectors</h3>
                <div class="iati-data-card__content">
                  <div class="iati-data-card__graph">
                    <canvas
                      class="iati-data-card__sparkline"
                      data-sparkline='{"labels":["1","2","3","4","5","6"],"values":[18,14,11,9,7,5]}'
                    ></canvas>
                  </div>
                  <div class="iati-data-card__caption">Most common sectors</div>
                  <div class="iati-data-card__button">
                    <button
                      class="iati-button iati-button--submit iati-button--compact"
                    >
                      Download data (.JSON)
                    </button>
                  </div>
                </div>
              </div>
              <div class="iati-data-card">
                <h3 class="iati-data-card__title">Countries</h3>
                <div class="iati-data-card__content">
                  <div class="iati-data-card__graph">
                    <canvas
                      class="iati-data-card__sparkline"
                      data-sparkline='{"labels":["1","2","3","4","5"],"values":[22,18,16,12,8]}'
                    ></canvas>
                  </div>
                  <div class="iati-data-card__caption">
                    Activities by country
                  </div>
                  <div class="iati-data-card__button">
                    <button
                      class="iati-button iati-button--submit iati-button--compact"
                    >
                      Download data (.JSON)
                    </button>
                  </div>
                </div>
              </div>
              <div class="iati-data-card">
                <h3 class="iati-data-card__title">Budget Timeline</h3>
                <div class="iati-data-card__content">
                  <div class="iati-data-card__graph">
                    <canvas
                      class="iati-data-card__sparkline"
                      data-sparkline='{"labels":["2020","2021","2022","2023","2024"],"values":[80,95,110,125,90]}'
                    ></canvas>
                  </div>
                  <div class="iati-data-card__caption">
                    Budget trends by year
                  </div>
                  <div class="iati-data-card__button">
                    <button
                      class="iati-button iati-button--submit iati-button--compact"
                    >
                      Download data (.JSON)
                    </button>
                  </div>
                </div>
              </div>
              <div class="iati-data-card">
                <h3 class="iati-data-card__title">Transactions</h3>
                <div class="iati-data-card__content">
                  <div class="iati-data-card__graph">
                    <canvas
                      class="iati-data-card__sparkline"
                      data-sparkline='{"labels":["1","2","3","4","5","6"],"values":[35,28,22,18,12,8]}'
                    ></canvas>
                  </div>
                  <div class="iati-data-card__caption">
                    Transaction patterns
                  </div>
                  <div class="iati-data-card__button">
                    <button
                      class="iati-button iati-button--submit iati-button--compact"
                    >
                      Download data (.JSON)
                    </button>
                  </div>
                </div>
              </div>
              <div class="iati-data-card">
                <h3 class="iati-data-card__title">Results Data</h3>
                <div class="iati-data-card__content">
                  <div class="iati-data-card__graph">
                    <canvas
                      class="iati-data-card__sparkline"
                      data-sparkline='{"labels":["Q1","Q2","Q3","Q4"],"values":[45,52,48,55]}'
                    ></canvas>
                  </div>
                  <div class="iati-data-card__caption">
                    Results reporting by quarter
                  </div>
                  <div class="iati-data-card__button">
                    <button
                      class="iati-button iati-button--submit iati-button--compact"
                    >
                      Download data (.JSON)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="iati-section iati-section">
            <h2 class="iati-section__title" id="publisherTable">
              Exploring Data
            </h2>
            <div class="iati-section__content">
              <h3 class="iati-section__subheading">Files</h3>
              <div class="iati-subsection_intro">
                <p>
                  This is a list of all the files the Reporting Organisation has
                  uploaded. Up to 50 words here explaining that the package name
                  might not accurately describe the data. You can access all
                  file information via an API.
                </p>
                <button
                  class="iati-button iati-button--submit iati-button--compact"
                >
                  <i class="iati-icon iati-icon--download"></i>
                  <span>Download API</span>
                </button>
              </div>
              <div class="iati-file-card-table">
                <div class="iati-file-card-table__header">
                  <div class="iati-file-card-table__header-cell">Package</div>
                  <div class="iati-file-card-table__header-cell">
                    Activities
                  </div>
                  <div class="iati-file-card-table__header-cell">
                    Organisations
                  </div>
                  <div class="iati-file-card-table__header-cell">File size</div>
                  <div class="iati-file-card-table__header-cell">Version</div>
                </div>

                <div class="iati-file-card-table__cards">
                  <div class="iati-file-card">
                    <div class="iati-file-card__main-row">
                      <div class="iati-file-card__cell ">
                        Africalia-Activities
                      </div>
                      <div class="iati-file-card__cell">11</div>
                      <div class="iati-file-card__cell">0</div>
                      <div class="iati-file-card__cell">223.1 kb</div>
                      <div class="iati-file-card__cell"></div>
                    </div>
                    <div class="iati-file-card__details-row">
                      <div class="iati-file-card__cell ">
                        <button
                          class="iati-button iati-button--submit iati-button--compact"
                        >
                          <i class="iati-icon iati-icon--download"></i>
                          <span>Download API</span>
                        </button>
                      </div>
                      <div class="iati-file-card__cell ">Activity count</div>
                      <div class="iati-file-card__cell ">Org count</div>
                      <div class="iati-file-card__cell ">Total size</div>
                      <div class="iati-file-card__cell ">IATI version</div>
                    </div>
                    <div class="iati-file-card__footer-row">
                      <div class="iati-file-card__flex">
                        <span>Last updated: 2024-01-15</span>
                        <span>Status: Valid</span>
                        <span>Format: XML</span>
                        <span>Something else here</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="iati-file-card">
                    <div class="iati-file-card__main-row">
                      <div class="iati-file-card__cell ">Alcis-Am</div>
                      <div class="iati-file-card__cell">1</div>
                      <div class="iati-file-card__cell">0</div>
                      <div class="iati-file-card__cell">14.89 kb</div>
                      <div class="iati-file-card__cell"></div>
                    </div>
                    <div class="iati-file-card__details-row">
                      <div class="iati-file-card__cell ">
                        <button
                          class="iati-button iati-button--submit iati-button--compact"
                        >
                          <i class="iati-icon iati-icon--download"></i>
                          <span>Download API</span>
                        </button>
                                                <button
                          class="iati-button iati-button--submit iati-button--compact"
                        >
                          <span>Download from Reporting Org.</span>
                        </button>
                      </div>
                      <div class="iati-file-card__cell ">
                        <div class="iati-file-card__chart-container">
                          <canvas
                            class="iati-data-card__sparkline"
                            data-sparkline='{"labels":["1","2","3","4","5","6","7","8","9","10"],"values":[15,3,25,8,18,5,22,12,28,6]}'
                          ></canvas>
                          <p class="iati-file-card_chart-caption">A short chart  description here</p>
                        </div>
                      </div>
                      <div class="iati-file-card__cell ">                        <div class="iati-file-card__chart-container">
                          <canvas
                            class="iati-data-card__sparkline"
                            data-sparkline='{"labels":["1","2","3","4","5","6","7","8","9","10"],"values":[1,6,22,12,28,6,15,3,25,26]}'
                          ></canvas>
                          <p class="iati-file-card_chart-caption">A short chart  description here</p>
                        </div></div>
                      <div class="iati-file-card__cell ">                        <div class="iati-file-card__chart-container">
                          <canvas
                            class="iati-data-card__sparkline"
                            data-sparkline='{"labels":["1","2","3","4","5","6","7","8","9","10"],"values":[18,5,22,35,3,25,8,12,28,6]}'
                          ></canvas>
                          <p class="iati-file-card_chart-caption">chart description might go over more than 1 or  2 lines</p>
                        </div></div>
                      <div class="iati-file-card__cell ">                        <div class="iati-file-card__chart-container">
                          <canvas
                            class="iati-data-card__sparkline"
                            data-sparkline='{"labels":["1","2","3","4","5","6","7","8","9","10"],"values":[18,5,22,12,28,6,15,3,25,8]}'
                          ></canvas>
                          <p class="iati-file-card_chart-caption">chart  description</p>
                        </div></div>
                    </div>
                    <div class="iati-file-card__footer-row">
                      <div class="iati-file-card__flex">
                        <span>Last updated: 2024-01-10</span>
                        <span>Status: Valid</span>
                        <span>Format: XML</span>
                        <span>Something else here</span>  
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="iati-file-card">
                    <div class="iati-file-card__main-row">
                      <div class="iati-file-card__cell ">Africalia-Org</div>
                      <div class="iati-file-card__cell">1</div>
                      <div class="iati-file-card__cell">0</div>
                      <div class="iati-file-card__cell">14.89 kb</div>
                      <div class="iati-file-card__cell">2.03</div>
                    </div>
                    <div class="iati-file-card__details-row">
                      <div class="iati-file-card__cell ">
                        <button
                          class="iati-button iati-button--submit iati-button--compact"
                        >
                          <i class="iati-icon iati-icon--download"></i>
                          <span>Download API</span>
                        </button>
                      </div>
                      <div class="iati-file-card__cell ">Activity count</div>
                      <div class="iati-file-card__cell ">Org count</div>
                      <div class="iati-file-card__cell ">Total size</div>
                      <div class="iati-file-card__cell ">IATI version</div>
                    </div>
                    <div class="iati-file-card__footer-row">
                      <div class="iati-file-card__flex">
                        <span>Last updated: 2024-01-12</span>
                        <span>Status: Valid</span>
                        <span>Format: XML</span>
                        <span>Something else here</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="iati-section iati-section">
            <h2 class="iati-section__title" id="publisherTable">Errors</h2>
            <div class="iati-section__content"><p>No errors were found</p></div>
          </div>
          <div class="iati-section iati-section--fill">
            <h2 class="iati-section__title" id="publisherTable">Financial</h2>
            <div class="iati-section__content">
              ${Table.render({}, context)}
            </div>
          </div>
        </article>
        <aside
          class="iati-publishers-page__side iati-publishers-page__side--sticky"
        >
          ${JumpMenu.render(
            {
              items: [
                { text: "Headlines", link: "#headlines" },
                { text: "Publisher Data", link: "#publisherData" },
                { text: "Publishers Table", link: "#publisherTable" },
              ],
            },
            context,
          )}
        </aside>
      </div>
    </main>
    ${Footer.render?.call({ ...args })}
  `,
};
