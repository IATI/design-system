import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import { CountrySwitcher } from "../../components/country-switcher/country-switcher.stories";
import {
  AdditionInfo as AdditionalInfoFooterBlock,
  UsefulLinks as UsefulLinksFooterBlock,
} from "../../components/footer-block/footer-block.stories";
import { Linkedin, Twitter, Youtube } from "../../components/icon/icon.stories";
import { Default as NewsletterForm } from "../../components/newsletter-form/newsletter-form.stories";

const legalNavItems = [
  html`<a href="#">Privacy</a>`,
  html`<a href="#">Data removal</a>`,
  html`<span>© Copyright IATI 2024. All rights reserved</span>`,
];

const meta: Meta = {
  title: "Components/Footer",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

export const Footer: Story = {
  render: (args) => html`
    <footer class="iati-footer iati-brand-background">
      <div class="iati-brand-background__content">
        <div class="iati-footer__section iati-footer__section--first">
          <div class="iati-footer__container">
            ${UsefulLinksFooterBlock.render?.call({ ...args })}
            <div class="iati-footer-block">
              <h2
                class="iati-footer-block__title iati-footer-block__title--centered"
              >
                Sign up to our newsletter
              </h2>
              <div class="iati-footer-block__content">
                ${NewsletterForm.render?.call({ ...args })}
              </div>
            </div>
          </div>
        </div>
        <div class="iati-footer__section">
          <div class="iati-footer__container">
            ${AdditionalInfoFooterBlock.render?.call({ ...args })}
          </div>
        </div>
        <div class="iati-footer__section iati-footer__section--last">
          <div class="iati-footer__container">
            <nav>
              <ul class="iati-piped-list iati-footer__legal-nav">
                ${legalNavItems.map((i) => html`<li>${i}</li>`)}
              </ul>
            </nav>
            ${CountrySwitcher.render?.call({ ...args })}
            <div class="iati-footer__social">
              <a
                https://www.linkedin.com/company/international-aid-transparency-initiative/"
                aria-label="LinkedIn"
              >
                ${Linkedin.render?.call({ ...args })}
              </a>
              <a href="https://twitter.com/IATI_aid" aria-label="Twitter">
                ${Twitter.render?.call({ ...args })}
              </a>
              <a
                href="https://www.youtube.com/channel/UCAVH1gcgJXElsj8ENC-bDQQ"
                aria-label="YouTube"
              >
                ${Youtube.render?.call({ ...args })}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
};
