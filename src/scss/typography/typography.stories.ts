import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta: Meta = {
  title: "Core/Typography",
};

export default meta;
type Story = StoryObj;

export const Headings: Story = {
  render: () => html`
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
  `,
};

export const Body: Story = {
  render: () => html`
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor
      tortor vitae magna aliquam, nec interdum libero bibendum. Donec lacinia et
      est at tempus. Nullam libero neque, lobortis vitae enim mattis, porttitor
      dapibus purus. Vestibulum sed dolor nec libero convallis sollicitudin in
      sed ligula. Nulla aliquet quam at vehicula dictum.
    </p>
    <p>
      Integer lorem leo, rutrum quis erat in, commodo tincidunt magna. Aenean ut
      libero at dolor tempus porta eget hendrerit mi. Curabitur molestie est id
      libero molestie, vel convallis urna mollis. Etiam ut felis gravida,
      ultrices ante at, bibendum risus.
    </p>
    <p>
      Nulla tempor porta dignissim. Quisque pellentesque nisi a massa aliquet,
      id facilisis sem dapibus. Quisque at diam aliquet, convallis tellus a,
      bibendum justo. Proin in est feugiat, rhoncus sapien eu, suscipit ante.
    </p>
  `,
};

export const Links: Story = {
  render: () => html`
    <a>This is a link.</a>
    <p>This is a <a>link</a> within a paragraph.</p>
  `,
};

export const Lists: Story = {
  render: () => html`
    <p>
      This section shows the different types of lists. Below is an unordered
      list:
    </p>
    <ul>
      <li>This is an unordered list.</li>
      <li>It has bulleted items.</li>
      <li>
        <p>Paragraphs within list items shouldn't create extra margins.</p>
      </li>
    </ul>
    <p>Below is an ordered list:</p>
    <ol>
      <li>This is an ordered list.</li>
      <li>It has numbered items.</li>
    </ol>
  `,
};

export const Quotes: Story = {
  render: () => html`
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor
      tortor vitae magna aliquam, nec interdum libero bibendum. Donec lacinia et
      est at tempus. Nullam libero neque, lobortis vitae enim mattis, porttitor
      dapibus purus. Vestibulum sed dolor nec libero convallis sollicitudin in
      sed ligula. Nulla aliquet quam at vehicula dictum.
    </p>
    <blockquote>
      <p>
        Integer lorem leo, rutrum quis erat in, commodo tincidunt magna. Aenean
        ut libero at dolor tempus porta eget hendrerit mi. Curabitur molestie
        est id libero molestie, vel convallis urna mollis. Etiam ut felis
        gravida, ultrices ante at, bibendum risus.
      </p>
    </blockquote>
    <p>
      Nulla tempor porta dignissim. Quisque pellentesque nisi a massa aliquet,
      id facilisis sem dapibus. Quisque at diam aliquet, convallis tellus a,
      bibendum justo. Proin in est feugiat, rhoncus sapien eu, suscipit ante.
    </p>
  `,
};

export const Code: Story = {
  render: () => html`
    <h3>This heading contains <span class="iati-code">inline code</span>.</h3>
    <p>
      This paragraph contains
      <span class="iati-code">inline code</span>.
    </p>
    <code class="iati-code iati-code--block">
      <span>print("This is a block of code")</span>
    </code>
    <p>
      This paragraph contains a key-binding: <kbd>Ctrl</kbd> + <kbd>C</kbd>.
      Key-bindings can be nested, e.g.
      <kbd><kbd>Ctrl</kbd>+<kbd>C</kbd></kbd>
      .
    </p>
  `,
};
