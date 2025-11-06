import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";

@customElement("multi-select")
export class MultiSelect extends LitElement {
  @property({ type: String })
  label: string = "Select options";

  @property({ type: Array })
  options: string[] = [];

  @state()
  selectedItems: string[] = [];

  createRenderRoot() {
    return this;
  }

  _handleSelect(e: Event) {
    const selectEl = e.target as HTMLSelectElement;
    const value = selectEl.value;

    if (value && !this.selectedItems.includes(value)) {
      this.selectedItems = [...this.selectedItems, value];
    }
    selectEl.value = "";
  }

  _handleRemove(itemToRemove: string) {
    this.selectedItems = this.selectedItems.filter(
      (item) => item !== itemToRemove,
    );
  }

  render() {
    const availableOptions = this.options.filter(
      (opt) => !this.selectedItems.includes(opt),
    );

    return html`
      <div class="iati-select">
        <label for="iati-multi-select" class="iati-select__label"
          >${this.label}</label
        >

        <div class="iati-select__control-wrapper">
          <select
            id="iati-multi-select"
            class="iati-select__control"
            @change=${this._handleSelect}
          >
            <option value="">---</option>
            ${map(
              availableOptions,
              (opt) => html`<option value=${opt}>${opt}</option>`,
            )}
          </select>
        </div>
      </div>

      <ul class="iati-multi-select">
        ${map(
          this.selectedItems,
          (item) => html`
            <li class="iati-multi-select__item">
              <button
                class="iati-button iati-button--pill iati-button--remove"
                @click=${() => this._handleRemove(item)}
                title="Remove ${item}"
              >
                ${item}
              </button>
            </li>
          `,
        )}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "multi-select": MultiSelect;
  }
}
