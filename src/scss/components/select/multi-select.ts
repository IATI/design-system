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

  @state()
  optionsMap: Map<string, string> = new Map();

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.options.length === 0) {
      this._readOptionsFromSlot();
    } else {
      this.optionsMap = new Map(this.options.map((opt) => [opt, opt]));
    }
    this._hideSlottedOptions();
  }

  _hideSlottedOptions() {
    const optionElements = this.querySelectorAll("option");
    optionElements.forEach((opt) => {
      opt.style.display = "none";
    });
  }

  _readOptionsFromSlot() {
    const optionElements = this.querySelectorAll("option");
    this.optionsMap = new Map();

    optionElements.forEach((opt) => {
      const value = opt.value || opt.textContent || "";
      const text = opt.textContent || "";
      if (value) {
        this.optionsMap.set(value, text);
      }
    });

    this.options = Array.from(this.optionsMap.keys());
  }

  _handleSelect(e: Event) {
    const selectEl = e.target as HTMLSelectElement;
    const value = selectEl.value;

    if (value && !this.selectedItems.includes(value)) {
      this.selectedItems = [...this.selectedItems, value];
      this._dispatchChangeEvent();
    }
    selectEl.value = "";
  }

  _handleRemove(itemToRemove: string) {
    this.selectedItems = this.selectedItems.filter(
      (item) => item !== itemToRemove,
    );
    this._dispatchChangeEvent();
  }

  _dispatchChangeEvent() {
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: { value: this.selectedItems },
        bubbles: true,
        composed: true,
      }),
    );
  }

  get value() {
    return this.selectedItems;
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
              (opt) =>
                html`<option value=${opt}>
                  ${this.optionsMap.get(opt) || opt}
                </option>`,
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
                title="Remove ${this.optionsMap.get(item) || item}"
              >
                ${this.optionsMap.get(item) || item}
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
