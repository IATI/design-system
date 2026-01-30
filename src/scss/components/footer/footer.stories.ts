import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import { CountrySwitcher } from "../../components/country-switcher/country-switcher.stories";
import {
  Facebook,
  LinkedIn,
  X,
  Youtube,
} from "../../components/icon/icon.stories";

const meta: Meta = {
  title: "Components/Footer",
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "light",
    },
  },
};

export default meta;
type Story = StoryObj;

const wrapInFooter = (children) =>
  html`<footer class="iati-footer iati-brand-background">
    <div class="iati-brand-background__content">${children}</div>
  </footer>`;

const usefulLinksSectionHtml = html`
  <div class="iati-footer__section iati-footer__section--first">
    <div class="iati-footer__container">
      <div class="iati-footer-block">
        <h2 class="iati-footer-block__title">Useful Links</h2>
        <div class="iati-footer-block__content">
          <ul>
            <li><a href="#">Useful link</a></li>
            <li><a href="#">Translation FAQs</a></li>
            <li><a href="#">Another useful link</a></li>
            <li><a href="#">Another even more useful longer link</a></li>
          </ul>
        </div>
      </div>
      <div class="iati-footer-block">
          <h2 class="iati-footer-block__title iati-footer-block__title--centered">
            Sign Up to Our Newsletter
          </h2>
          <div class="iati-footer-block__content">
            <form class="iati-newsletter-form">
              <div class="iati-newsletter-form__item">
                <label for="newsletter-email" class="iati-newsletter-form__label">Email</label>
                <input id="newsletter-email" type="text" class="iati-newsletter-form__input">
              </div>
              <div class="iati-newsletter-form__item">
                <label for="newsletter-firstname" class="iati-newsletter-form__label">First name</label>
                <input id="newsletter-firstname" type="text" class="iati-newsletter-form__input">
              </div>
              <div class="iati-newsletter-form__item">
                <label for="newsletter-surname" class="iati-newsletter-form__label">Surname</label>
                <input id="newsletter-surname" type="text" class="iati-newsletter-form__input">
              </div>
              <div class="iati-newsletter-form__item">
                <button class="iati-newsletter-form__submit iati-button iati-button--submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>`;

export const UsefulLinksSection: Story = {
  render: () => wrapInFooter(usefulLinksSectionHtml),
};

const additionalInformationHtml = html`
  <div class="iati-footer__section iati-footer__section--mid">
    <div class="iati-footer__container">
      <div class="iati-footer-block">
        <h2 class="iati-footer-block__title">Additional Information</h2>
        <div class="iati-footer-block__content">
          <p>Part of the IATI Unified Platform.</p>
          <p>
            Code licensed under
            <a href="https://www.gnu.org/licenses/agpl-3.0.en.html"
              >GNU AGPL</a
            >.
          </p>
          <p>
            Documentation licensed under
            <a href="https://creativecommons.org/licenses/by/4.0/"
              >CC BY 3.0</a
            >.
          </p>
        </div>
      </div>
      <div class="iati-footer-block iati-footer-block--bordered">
        <h2 class="iati-footer-block__title">Your Feedback</h2>
        <div class="iati-footer-block__content">
          <ul>
            <li><a href="#">Feedback &amp; Suggestions</a></li>
            <li><a href="#">Translation Issues &amp; Feedback</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
`;

export const AdditionalInformationSection: Story = {
  render: () => wrapInFooter(additionalInformationHtml),
};

const legalNavItems = [
  html`<a href="https://web-terms.iatistandard.org/en/latest/privacy-policy/"
    >Privacy</a
  >`,
  html`<a href="https://web-terms.iatistandard.org/en/latest/cookie-policy/"
    >Cookies</a
  >`,
  html`<a href="https://web-terms.iatistandard.org/en/latest/copyright/"
    >Copyright</a
  >`,
  html`<a href="https://web-terms.iatistandard.org/en/latest/data-removal/"
    >Data Removal</a
  >`,
];

const legalSectionHtml = html`
  <div class="iati-footer__section iati-footer__section--last">
    <div class="iati-footer__container">
      <nav>
        <ul class="iati-piped-list iati-footer__legal-nav">
          ${legalNavItems.map((i) => html`<li>${i}</li>`)}
        </ul>
      </nav>
      ${CountrySwitcher.render?.call({})}
      <div class="iati-footer__social">
        <a
          href="https://www.linkedin.com/company/international-aid-transparency-initiative/"
          aria-label="LinkedIn"
        >
          ${LinkedIn.render?.call({})}
        </a>
        <a href="https://x.com/IATI_aid" aria-label="X">
          ${X.render?.call({})}
        </a>
        <a
          href="https://www.youtube.com/channel/UCAVH1gcgJXElsj8ENC-bDQQ"
          aria-label="YouTube"
        >
          ${Youtube.render?.call({})}
        </a>
        <a href="https://www.facebook.com/IATIaid/" aria-label="Facebook">
          ${Facebook.render?.call({})}
        </a>
      </div>
    </div>
  </div>
`;

export const LegalSection: Story = {
  render: () => wrapInFooter(legalSectionHtml),
};

export const Footer: Story = {
  render: () =>
    wrapInFooter([
      usefulLinksSectionHtml,
      additionalInformationHtml,
      legalSectionHtml,
    ]),
};
