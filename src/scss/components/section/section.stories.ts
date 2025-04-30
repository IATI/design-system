import type { Meta, StoryObj } from "@storybook/web-components";
import { Default as Table } from "../../components/table/table.stories";

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

const Template = {
  render: ({ title, content, fill, headingId }) => html`
    <div class=${fill ? "iati-section iati-section--fill" : "iati-section"}>
      <h2 class="iati-section__title" id=${headingId ? headingId : undefined}>
        ${title}
      </h2>
      <div class="iati-section__content">${content}</div>
    </div>
  `,
};

export const Default: Story = {
  ...Template,
  args: {
    title: "Section",
    fill: false,
    headingId: "section",
    content: html`
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        non augue diam. Morbi nibh arcu, pulvinar sit amet erat ut, gravida
        imperdiet erat. Donec pretium, metus quis tempor iaculis, libero dolor
        posuere risus, nec mollis arcu orci ac augue. Proin laoreet neque et
        sagittis vestibulum. Integer commodo tellus arcu, eu placerat ligula
        tempor sed. Sed mattis nibh in consequat mattis.
      </p>
      <p>
        Vestibulum aliquet viverra sem quis tristique. Nunc a lacinia lacus.
        Nullam at est ultricies nibh euismod dictum at sit amet libero. Etiam
        vitae neque eget urna porttitor imperdiet. Mauris efficitur ipsum quis
        ligula posuere, vel interdum augue elementum. Donec tempor eu turpis
        eget faucibus. Suspendisse rhoncus pellentesque lacus, non rutrum elit
        molestie non. Etiam ut magna feugiat ipsum lobortis viverra. Maecenas
        quam odio, tristique ut condimentum ut, porttitor sed lacus. Phasellus
        est nisi, molestie ut accumsan id, aliquet vitae lorem.
      </p>
    `,
  },
};

export const Fill: Story = {
  ...Template,
  args: {
    title: "Section",
    fill: true,
    content: html`
      <p>
        Cras ultrices dui sed magna mollis molestie. Morbi a mauris feugiat
        lorem aliquam viverra eget lobortis ipsum. Vestibulum lobortis nec urna
        in sagittis. Etiam viverra nibh ut lobortis pretium. Sed varius sapien
        non lorem lacinia venenatis. Ut porttitor justo eget posuere euismod.
        Donec vel diam pretium, rhoncus mi id, euismod arcu. Sed ultrices, enim
        non egestas varius, libero lorem ullamcorper libero, non rutrum leo
        lacus a enim. Donec consequat ac odio tincidunt posuere. Maecenas
        maximus tellus nisl, eget ornare ligula vehicula vel.
      </p>
      ${Table.render?.call({})}
    `,
  },
};
