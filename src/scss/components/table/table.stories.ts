import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta: Meta = {
  title: "Components/Table",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <table>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
        <th>Column 4</th>
        <th>Column 5</th>
      </tr>
      <tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
        <td>Cell 3</td>
        <td>Cell 4</td>
        <td>Cell 5</td>
      </tr>
    </table>
  `,
};

export const Scrolling: Story = {
  render: () => html`
    <div style="width: 300px;">
      <table>
        <caption>
          This table should scroll within its fixed-width container.
        </caption>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <th>Column 4</th>
          <th>Column 5</th>
        </tr>
        <tr>
          <td>Cell 1</td>
          <td>Cell 2</td>
          <td>Cell 3</td>
          <td>Cell 4</td>
          <td>Cell 5</td>
        </tr>
      </table>
    </div>
  `,
};
