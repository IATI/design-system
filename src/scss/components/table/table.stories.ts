import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";

const meta: Meta = {
  title: "Components/Table",
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <div class="iati-table">
      <table class="iati-table__table">
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
            <th>Column 5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
            <td>Cell 3</td>
            <td>Cell 4</td>
            <td>Cell 5</td>
          </tr>
          <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
            <td>Cell 3</td>
            <td>Cell 4</td>
            <td>Cell 5</td>
          </tr>
          <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
            <td>Cell 3</td>
            <td>Cell 4</td>
            <td>Cell 5</td>
          </tr>
          <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
            <td>Cell 3</td>
            <td>Cell 4</td>
            <td>Cell 5</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>Cell 2</td>
            <td>Cell 3</td>
            <td>Cell 4</td>
            <td>Cell 5</td>
          </tr>
        </tfoot>
      </table>
    </div>
  `,
};

export const Scrolling: Story = {
  render: () => html`
    <div style="width: 300px;">
      <div class="iati-table">
        <table class="iati-table__table">
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
    </div>
  `,
};
