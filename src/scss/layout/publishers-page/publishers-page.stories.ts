import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import { TwoLevel as Breadcrumb } from "../../components/breadcrumb/breadcrumb.stories";
import { Footer } from "../../components/footer/footer.stories";
import { Header } from "../../components/header/header.stories";
import { Default as JumpMenu } from "../../components/jump-menu/jump-menu.stories";

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
          <div class="iati-data-card iati-data-card--wide" id="headlines">
            <header class="iati-data-card--header iati-data-card--header-dark">
              <h2 class="iati-data-card__title">Headlines</h2>
            </header>
            <div class="iati-data-card--body">
              <div class="iati-data-card--columns">
                <div class="iati-data-card--left">
                  <div
                    class="iati-data-card--column iati-data-card--column-title"
                  >
                    On the registry
                  </div>
                  <div class="iati-data-card--column">
                    <a href="#">Publisher</a>
                  </div>
                  <div
                    class="iati-data-card--column iati-data-card--column-title"
                  >
                    Reporting org on registry
                  </div>
                  <div class="iati-data-card--column">
                    <code>BE-BCE_KBO-0474198059</code>
                  </div>
                  <div
                    class="iati-data-card--column iati-data-card--column-title"
                  >
                    Reporting org(s) in data
                  </div>
                  <div class="iati-data-card--column">
                    <code>BE-BCE_KBO-0474198059</code>
                  </div>
                </div>
                <div class="iati-data-card--right">
                  <div
                    class="iati-data-card--column iati-data-card--column-title"
                  >
                    Hierarchies
                  </div>
                  <div class="iati-data-card--column">
                    <code>1</code> <code>2</code>
                  </div>
                  <div
                    class="iati-data-card--column iati-data-card--column-title"
                  >
                    Licenses
                  </div>
                  <div class="iati-data-card--column">
                    <a href="#"><code>other-open</code></a>
                    <a href="#"><code>notspecified</code></a>
                  </div>
                  <div
                    class="iati-data-card--column iati-data-card--column-title"
                  >
                    Files failing scheme validation
                  </div>
                  <div class="iati-data-card--column">0</div>
                </div>
              </div>
              <div class="iati-data-card__stats">
                <div class="iati-data-card__stat">
                  <div class="iati-data-card__stat-label">Activity files</div>
                  <div class="iati-data-card__stat-value">2</div>
                </div>
                <div class="iati-data-card__stat">
                  <div class="iati-data-card__stat-label">
                    Organisation files
                  </div>
                  <div class="iati-data-card__stat-value">1</div>
                </div>
                <div class="iati-data-card__stat">
                  <div class="iati-data-card__stat-label">Total file size</div>
                  <div class="iati-data-card__stat-value">29.8kb</div>
                </div>
                <div class="iati-data-card__stat">
                  <div class="iati-data-card__stat-label">Activities</div>
                  <div class="iati-data-card__stat-value">19</div>
                </div>
                <div class="iati-data-card__stat">
                  <div class="iati-data-card__stat-label">
                    Unique activities
                  </div>
                  <div class="iati-data-card__stat-value">19</div>
                </div>
                <div class="iati-data-card__stat">
                  <div class="iati-data-card__stat-label">Organisations</div>
                  <div class="iati-data-card__stat-value">1</div>
                </div>
                <div class="iati-data-card__stat">
                  <div class="iati-data-card__stat-label">Versions</div>
                  <div class="iati-data-card__stat-value">2.03</div>
                </div>
              </div>
            </div>
          </div>
          <div class="iati-publishers-page__data-cards">
            <div class="iati-data-card">
              <header class="iati-data-card--header">
                <h3 class="iati-data-card__title">Activity Status</h3>
              </header>
              <div class="iati-data-card--body">
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
              <header class="iati-data-card--header">
                <h3 class="iati-data-card__title">Funding Sources</h3>
              </header>
              <div class="iati-data-card--body">
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
              <header class="iati-data-card--header">
                <h3 class="iati-data-card__title">Sectors</h3>
              </header>
              <div class="iati-data-card--body">
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
              <header class="iati-data-card--header">
                <h3 class="iati-data-card__title">Countries</h3>
              </header>
              <div class="iati-data-card--body">
                <div class="iati-data-card__graph">
                  <canvas
                    class="iati-data-card__sparkline"
                    data-sparkline='{"labels":["1","2","3","4","5"],"values":[22,18,16,12,8]}'
                  ></canvas>
                </div>
                <div class="iati-data-card__caption">Activities by country</div>
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
              <header class="iati-data-card--header">
                <h3 class="iati-data-card__title">Budget Timeline</h3>
              </header>
              <div class="iati-data-card--body">
                <div class="iati-data-card__graph">
                  <canvas
                    class="iati-data-card__sparkline"
                    data-sparkline='{"labels":["2020","2021","2022","2023","2024"],"values":[80,95,110,125,90]}'
                  ></canvas>
                </div>
                <div class="iati-data-card__caption">Budget trends by year</div>
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
              <header class="iati-data-card--header">
                <h3 class="iati-data-card__title">Transactions</h3>
              </header>
              <div class="iati-data-card--body">
                <div class="iati-data-card__graph">
                  <canvas
                    class="iati-data-card__sparkline"
                    data-sparkline='{"labels":["1","2","3","4","5","6"],"values":[35,28,22,18,12,8]}'
                  ></canvas>
                </div>
                <div class="iati-data-card__caption">Transaction patterns</div>
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
              <header class="iati-data-card--header">
                <h3 class="iati-data-card__title">Results Data</h3>
              </header>
              <div class="iati-data-card--body">
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
              <div
                class="iati-file-card-table"
                data-sortable
                data-sort-rows=".iati-file-card-table__cards"
              >
                <div class="iati-file-card-table__header">
                  <div
                    class="iati-file-card-table__header-cell"
                    aria-sort="none"
                    data-sort-type="string"
                  >
                    Package
                  </div>
                  <div
                    class="iati-file-card-table__header-cell"
                    aria-sort="none"
                    data-sort-type="number"
                  >
                    Activities
                  </div>
                  <div
                    class="iati-file-card-table__header-cell"
                    aria-sort="none"
                    data-sort-type="number"
                  >
                    Organisations
                  </div>
                  <div
                    class="iati-file-card-table__header-cell"
                    aria-sort="none"
                    data-sort-type="number"
                  >
                    File size
                  </div>
                  <div
                    class="iati-file-card-table__header-cell"
                    aria-sort="none"
                    data-sort-type="string"
                  >
                    Version
                  </div>
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
                      <div class="iati-file-card__cell">
                        <span class="iati-file-card__info-label"
                          >Recipient country info</span
                        >
                        <span
                          >Algeria, Greece, Saint Helena, Ascension and Tristan
                          da Cunha</span
                        >
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
                        <span>A short chart description here</span>
                      </div>
                      <div class="iati-file-card__cell">
                        <span class="iati-file-card__info-label"
                          >Validation status</span
                        >
                        <span
                          class="iati-file-card__status iati-file-card__status--success"
                          >Success</span
                        >
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
                          <p class="iati-file-card_chart-caption">
                            A short chart  description here
                          </p>
                        </div>
                      </div>
                      <div class="iati-file-card__cell ">
                        <div class="iati-file-card__chart-container">
                          <canvas
                            class="iati-data-card__sparkline"
                            data-sparkline='{"labels":["1","2","3","4","5","6","7","8","9","10"],"values":[1,6,22,12,28,6,15,3,25,26]}'
                          ></canvas>
                          <p class="iati-file-card_chart-caption">
                            A short chart  description here
                          </p>
                        </div>
                      </div>
                      <div class="iati-file-card__cell ">
                        <div class="iati-file-card__chart-container">
                          <canvas
                            class="iati-data-card__sparkline"
                            data-sparkline='{"labels":["1","2","3","4","5","6","7","8","9","10"],"values":[18,5,22,35,3,25,8,12,28,6]}'
                          ></canvas>
                          <p class="iati-file-card_chart-caption">
                            chart description might go over more than 1 or  2
                            lines
                          </p>
                        </div>
                      </div>
                      <div class="iati-file-card__cell ">
                        <div class="iati-file-card__chart-container">
                          <canvas
                            class="iati-data-card__sparkline"
                            data-sparkline='{"labels":["1","2","3","4","5","6","7","8","9","10"],"values":[18,5,22,12,28,6,15,3,25,8]}'
                          ></canvas>
                          <p class="iati-file-card_chart-caption">
                            chart  description
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="iati-file-card__footer-row">
                      <div class="iati-file-card__cell">
                        <span class="iati-file-card__info-label"
                          >Recipient country info</span
                        >
                        <span
                          >Algeria, Greece, Saint Helena, Ascension and Tristan
                          da Cunha</span
                        >
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
                        <span>A short chart description here</span>
                      </div>
                      <div class="iati-file-card__cell">
                        <span class="iati-file-card__info-label"
                          >Validation status</span
                        >
                        <span
                          class="iati-file-card__status iati-file-card__status--critical"
                          >Critical</span
                        >
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
                      <div class="iati-file-card__cell">
                        <span class="iati-file-card__info-label"
                          >Recipient country info</span
                        >
                        <span
                          >Algeria, Greece, Saint Helena, Ascension and Tristan
                          da Cunha</span
                        >
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
                        <span>A short chart description here</span>
                      </div>
                      <div class="iati-file-card__cell">
                        <span class="iati-file-card__info-label"
                          >Validation status</span
                        >
                        <span
                          class="iati-file-card__status iati-file-card__status--error"
                          >Error</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="iati-section__header">
                <h3 class="iati-section__subheading" id="codelistValues">
                  Codelist Values (version 2.xx)
                </h3>
                <a
                  href="#"
                  class="iati-button iati-button--submit iati-button--compact"
                >
                  Download (.JSON)
                </a>
              </div>
              <div class="iati-table">
                <table class="iati-table__table" data-sortable>
                  <thead>
                    <tr>
                      <th aria-sort="none" data-sort-type="string">
                        ELEMENT/ATTRIBUTE
                      </th>
                      <th aria-sort="none" data-sort-type="string">CODELIST</th>
                      <th aria-sort="none" data-sort-type="number">
                        VALUES ON CODELIST
                      </th>
                      <th aria-sort="none" data-sort-type="number">FILES</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><a href="#">@default-currency</a></td>
                      <td><a href="#">Currency</a></td>
                      <td><a href="#">1</a></td>
                      <td><a href="#">0</a></td>
                    </tr>
                    <tr>
                      <td><a href="#">@xml:lang</a></td>
                      <td><a href="#">Language</a></td>
                      <td><a href="#">3</a></td>
                      <td><a href="#">0</a></td>
                    </tr>
                    <tr>
                      <td><a href="#">activity-date/@type</a></td>
                      <td><a href="#">ActivityDateType</a></td>
                      <td><a href="#">4</a></td>
                      <td><a href="#">0</a></td>
                    </tr>
                    <tr>
                      <td><a href="#">activity-status/@code</a></td>
                      <td><a href="#">ActivityStatus</a></td>
                      <td><a href="#">2</a></td>
                      <td><a href="#">0</a></td>
                    </tr>
                    <tr>
                      <td><a href="#">budget/@status</a></td>
                      <td><a href="#">BudgetStatus</a></td>
                      <td><a href="#">1</a></td>
                      <td><a href="#">0</a></td>
                    </tr>
                    <tr>
                      <td><a href="#">budget/@type</a></td>
                      <td><a href="#">BudgetType</a></td>
                      <td><a href="#">1</a></td>
                      <td><a href="#">0</a></td>
                    </tr>
                    <tr>
                      <td><a href="#">budget/value/@currency</a></td>
                      <td><a href="#">Currency</a></td>
                      <td><a href="#">1</a></td>
                      <td><a href="#">0</a></td>
                    </tr>
                    <tr>
                      <td><a href="#">collaboration-type/@code</a></td>
                      <td><a href="#">CollaborationType</a></td>
                      <td><a href="#">1</a></td>
                      <td><a href="#">0</a></td>
                    </tr>
                    <tr>
                      <td><a href="#">contact-info/@type</a></td>
                      <td><a href="#">ContactType</a></td>
                      <td><a href="#">4</a></td>
                      <td><a href="#">0</a></td>
                    </tr>
                    <tr>
                      <td><a href="#">default-aid-type/@vocabulary</a></td>
                      <td><a href="#">AidTypeVocabulary</a></td>
                      <td><a href="#">1</a></td>
                      <td><a href="#">0</a></td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#"
                          >default-aid-type[(@vocabulary = '1' or
                          not(@vocabulary)]/@code</a
                        >
                      </td>
                      <td><a href="#">AidType</a></td>
                      <td><a href="#">3</a></td>
                      <td><a href="#">0</a></td>
                    </tr>
                    <tr>
                      <td><a href="#">default-finance-type/@code</a></td>
                      <td><a href="#">FinanceType</a></td>
                      <td><a href="#">1</a></td>
                      <td><a href="#">0</a></td>
                    </tr>
                    <tr>
                      <td><a href="#">default-flow-type/@code</a></td>
                      <td><a href="#">FlowType</a></td>
                      <td><a href="#">1</a></td>
                      <td><a href="#">0</a></td>
                    </tr>
                    <tr>
                      <td><a href="#">default-tied-status/@code</a></td>
                      <td><a href="#">TiedStatus</a></td>
                      <td><a href="#">1</a></td>
                      <td><a href="#">0</a></td>
                    </tr>
                    <tr>
                      <td><a href="#">description/@type</a></td>
                      <td><a href="#">DescriptionType</a></td>
                      <td><a href="#">3</a></td>
                      <td><a href="#">0</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="iati-section__header">
                <h3 class="iati-section__subheading" id="elementsAttributes">
                  Elements and Attributes Published
                </h3>
                <a
                  href="#"
                  class="iati-button iati-button--submit iati-button--compact"
                >
                  Download (.JSON)
                </a>
              </div>
              <div class="iati-table">
                <table class="iati-table__table" data-sortable>
                  <thead>
                    <tr>
                      <th aria-sort="none" data-sort-type="string">
                        Element / attribute
                      </th>
                      <th aria-sort="none" data-sort-type="number">
                        Activities / Organisations
                      </th>
                      <th aria-sort="none" data-sort-type="number">Files</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><a href="#">iati-activity</a></td>
                      <td>19</td>
                      <td><a href="#">2</a></td>
                    </tr>
                    <tr>
                      <td><a href="#">iati-activity/@default-currency</a></td>
                      <td>19</td>
                      <td><a href="#">2</a></td>
                    </tr>
                    <tr>
                      <td><a href="#">iati-activity/@hierarchy</a></td>
                      <td>19</td>
                      <td><a href="#">2</a></td>
                    </tr>
                    <tr>
                      <td><a href="#">iati-activity/@humanitarian</a></td>
                      <td>11</td>
                      <td><a href="#">1</a></td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">iati-activity/@last-updated-datetime</a>
                      </td>
                      <td>19</td>
                      <td><a href="#">2</a></td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#"
                          >iati-activity/@{http://www.w3.org/XML/1998/namespace}lang</a
                        >
                      </td>
                      <td>19</td>
                      <td><a href="#">2</a></td>
                    </tr>
                    <tr>
                      <td><a href="#">iati-activity/activity-date</a></td>
                      <td>19</td>
                      <td><a href="#">2</a></td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">iati-activity/activity-date/@iso-date</a>
                      </td>
                      <td>19</td>
                      <td><a href="#">2</a></td>
                    </tr>
                    <tr>
                      <td><a href="#">iati-activity/activity-date/@type</a></td>
                      <td>19</td>
                      <td><a href="#">2</a></td>
                    </tr>
                    <tr>
                      <td><a href="#">iati-activity/activity-status</a></td>
                      <td>19</td>
                      <td><a href="#">2</a></td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">iati-activity/activity-status/@code</a>
                      </td>
                      <td>19</td>
                      <td><a href="#">2</a></td>
                    </tr>
                    <tr>
                      <td><a href="#">iati-activity/budget</a></td>
                      <td>17</td>
                      <td><a href="#">2</a></td>
                    </tr>
                    <tr>
                      <td><a href="#">iati-activity/budget/@status</a></td>
                      <td>17</td>
                      <td><a href="#">2</a></td>
                    </tr>
                    <tr>
                      <td><a href="#">iati-activity/budget/@type</a></td>
                      <td>17</td>
                      <td><a href="#">2</a></td>
                    </tr>
                    <tr>
                      <td><a href="#">iati-activity/budget/period-end</a></td>
                      <td>17</td>
                      <td><a href="#">2</a></td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#"
                          >iati-activity/budget/period-end/@iso-date</a
                        >
                      </td>
                      <td>17</td>
                      <td><a href="#">2</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3 class="iati-section__subheading" id="orgIdentifiers">
                Organisation Identifiers
              </h3>
              <div class="iati-table iati-table--plain">
                <table class="iati-table__table" data-sortable>
                  <thead>
                    <tr>
                      <th
                        rowspan="2"
                        aria-sort="none"
                        data-sort-type="string"
                        data-column-index="0"
                      >
                        Org Type
                      </th>
                      <th colspan="3">Total</th>
                      <th
                        rowspan="2"
                        aria-sort="none"
                        data-sort-type="number"
                        data-column-index="4"
                      >
                        Self Refs
                      </th>
                      <th colspan="5">Excluding Self Refs</th>
                    </tr>
                    <tr>
                      <th
                        aria-sort="none"
                        data-sort-type="number"
                        data-column-index="1"
                      >
                        Org Elements
                      </th>
                      <th
                        aria-sort="none"
                        data-sort-type="number"
                        data-column-index="2"
                      >
                        Refs
                      </th>
                      <th
                        aria-sort="none"
                        data-sort-type="number"
                        data-column-index="3"
                      >
                        Non-Empty Refs
                      </th>
                      <th
                        aria-sort="none"
                        data-sort-type="number"
                        data-column-index="5"
                      >
                        Org Elements
                      </th>
                      <th
                        aria-sort="none"
                        data-sort-type="number"
                        data-column-index="6"
                      >
                        Refs
                      </th>
                      <th
                        aria-sort="none"
                        data-sort-type="number"
                        data-column-index="7"
                      >
                        Non-Empty Refs
                      </th>
                      <th
                        aria-sort="none"
                        data-sort-type="number"
                        data-column-index="8"
                      >
                        Valid Refs
                      </th>
                      <th
                        aria-sort="none"
                        data-sort-type="number"
                        data-column-index="9"
                      >
                        Provided
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Accountable</td>
                      <td>19</td>
                      <td>19</td>
                      <td>19</td>
                      <td>19</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>Extending</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>Funding</td>
                      <td>27</td>
                      <td>27</td>
                      <td>27</td>
                      <td>8</td>
                      <td>19</td>
                      <td>19</td>
                      <td>19</td>
                      <td>19</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td>Implementing</td>
                      <td>37</td>
                      <td>12</td>
                      <td>12</td>
                      <td>11</td>
                      <td>26</td>
                      <td>1</td>
                      <td>1</td>
                      <td>1</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>Provider</td>
                      <td>181</td>
                      <td>181</td>
                      <td>181</td>
                      <td>122</td>
                      <td>59</td>
                      <td>59</td>
                      <td>59</td>
                      <td>54</td>
                      <td>92</td>
                    </tr>
                    <tr>
                      <td>Receiver</td>
                      <td>159</td>
                      <td>40</td>
                      <td>40</td>
                      <td>29</td>
                      <td>130</td>
                      <td>11</td>
                      <td>11</td>
                      <td>10</td>
                      <td>8</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="iati-section iati-section">
            <h2 class="iati-section__title" id="publisherTable">Errors</h2>
            <div class="iati-section__content"><p>No errors were found</p></div>
          </div>
          <div class="iati-section">
            <h2 class="iati-section__title" id="financial">Financial</h2>
            <div class="iati-section__content">
              <h3 class="iati-section__subheading">Budgets</h3>
              <p>
                The below figures are calculated based on the data contained
                within the &lt;budget&gt; element for each reported activity.
                Original and revised elements are based on the value declared in
                the budget/@type attribute. Where budgets fall across two
                calendar years, the month of the &lt;period-end&gt; date is used
                to determine annual groupings, with budgets for periods ending
                January–June added to the previous calendar year.
              </p>
              <div class="iati-table iati-table--plain">
                <table class="iati-table__table" data-sortable>
                  <thead>
                    <tr>
                      <th aria-sort="none" data-sort-type="number">Year</th>
                      <th aria-sort="none" data-sort-type="number">
                        Count (all)
                      </th>
                      <th aria-sort="none" data-sort-type="number">
                        Sum (all)
                      </th>
                      <th aria-sort="none" data-sort-type="number">
                        Count (Original)
                      </th>
                      <th aria-sort="none" data-sort-type="number">
                        Sum (Original)
                      </th>
                      <th aria-sort="none" data-sort-type="number">
                        Count (Revised)
                      </th>
                      <th aria-sort="none" data-sort-type="number">
                        Sum (Revised)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2021</td>
                      <td>4</td>
                      <td>1,250,000</td>
                      <td>3</td>
                      <td>900,000</td>
                      <td>1</td>
                      <td>350,000</td>
                    </tr>
                    <tr>
                      <td>2022</td>
                      <td>6</td>
                      <td>1,820,500</td>
                      <td>5</td>
                      <td>1,500,500</td>
                      <td>1</td>
                      <td>320,000</td>
                    </tr>
                    <tr>
                      <td>2023</td>
                      <td>7</td>
                      <td>2,140,750</td>
                      <td>5</td>
                      <td>1,640,750</td>
                      <td>2</td>
                      <td>500,000</td>
                    </tr>
                    <tr>
                      <td>2024</td>
                      <td>5</td>
                      <td>1,675,000</td>
                      <td>4</td>
                      <td>1,275,000</td>
                      <td>1</td>
                      <td>400,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                { text: "Codelist values", link: "#codelistValues" },
                {
                  text: "Elements and attributes",
                  link: "#elementsAttributes",
                },
                { text: "Organisation identifiers", link: "#orgIdentifiers" },
                { text: "Financial", link: "#financial" },
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
