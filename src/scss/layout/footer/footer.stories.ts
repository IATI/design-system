import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

import { Linkedin, Twitter, Youtube } from "../../components/icon/icon.stories";

const meta: Meta = {
  title: "Layout/Footer",
};

export default meta;
type Story = StoryObj;

export const Footer: Story = {
  render: (args) => html`
    <footer class="iati-footer">
      <div>
        <a href="https://iatistandard.org/" aria-label="Go to IATI homepage">
          <img
            src="http://styles.iatistandard.org/assets/svg/source/logo-white.svg"
            class="iati-footer__logo"
            alt=""
          />
        </a>
        <div class="iati-footer__list">
          <span class="iati-footer__list-title">Useful Links</span>
          <ul>
            <li><a>Contact</a></li>
            <li><a>Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <div>
        <span>© Copyright 2024 IATI Secretariat.</span>
        <div class="iati-footer__social-icons">
          <a href="https://twitter.com/IATI_aid" aria-label="Twitter">
            ${Twitter.render?.call({ ...args })}
          </a>
          <a
            href="https://www.youtube.com/channel/UCAVH1gcgJXElsj8ENC-bDQQ"
            aria-label="YouTube"
          >
            ${Youtube.render?.call({ ...args })}
          </a>
          <a
            href="https://www.linkedin.com/company/international-aid-transparency-initiative/"
            aria-label="LinkedIn"
          >
            ${Linkedin.render?.call({ ...args })}
          </a>
        </div>
      </div>
    </footer>
  `,
};
