import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import "./select-option.ts";

@customElement("multi-select")
export class MultiSelect extends LitElement {
  @property({ type: String })
  label: string = "Select options";

  @property({ type: String, attribute: "field-name" })
  name: string = "";

  @property({ type: Array })
  options: string[] = [];

  @state()
  selectedItems: string[] = [];

  @state()
  optionsMap: Map<string, string> = new Map();

  private hiddenInputsContainer?: HTMLDivElement;

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    Promise.resolve().then(() => {
      if (this.options.length === 0) {
        this._readOptionsFromSlot();
      } else {
        this.optionsMap = new Map(this.options.map((opt) => [opt, opt]));
      }
      this._hideSlottedOptions();
      this._createHiddenInputsContainer();
    });

    this.addEventListener("select-option-connected", this._onOptionConnected);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener(
      "select-option-connected",
      this._onOptionConnected,
    );
    this._removeHiddenInputsContainer();
  }

  private _onOptionConnected = () => {
    if (this.options.length === 0) {
      this._readOptionsFromSlot();
      this._hideSlottedOptions();
    }
  };

  _createHiddenInputsContainer() {
    if (!this.hiddenInputsContainer) {
      this.hiddenInputsContainer = document.createElement("div");
      this.hiddenInputsContainer.style.display = "none";
      this.appendChild(this.hiddenInputsContainer);
    }
  }

  _removeHiddenInputsContainer() {
    if (this.hiddenInputsContainer?.parentNode) {
      this.hiddenInputsContainer.parentNode.removeChild(
        this.hiddenInputsContainer,
      );
      this.hiddenInputsContainer = undefined;
    }
  }

  _updateHiddenInputs() {
    if (!this.hiddenInputsContainer) {
      this._createHiddenInputsContainer();
    }

    if (this.hiddenInputsContainer) {
      this.hiddenInputsContainer.innerHTML = "";

      if (this.name) {
        this.selectedItems.forEach((value) => {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = this.name;
          input.value = value;
          this.hiddenInputsContainer!.appendChild(input);
        });
      }
    }
  }

  _hideSlottedOptions() {
    this.querySelectorAll<HTMLElement>("select-option").forEach((el) => {
      el.style.display = "none";
    });
  }

  _readOptionsFromSlot() {
    const optionElements = this.querySelectorAll("select-option");
    this.optionsMap = new Map();
    const preselected: string[] = [];

    optionElements.forEach((opt) => {
      const value = opt.getAttribute("value") || opt.textContent?.trim() || "";
      const text = opt.textContent?.trim() || "";
      if (value) {
        this.optionsMap.set(value, text);
        if (opt.hasAttribute("selected")) {
          preselected.push(value);
        }
      }
    });

    this.options = Array.from(this.optionsMap.keys());

    if (preselected.length > 0) {
      this.selectedItems = preselected;
      this._updateHiddenInputs();
    }
  }

  _handleSelect(e: Event) {
    const selectEl = e.target as HTMLSelectElement;
    const value = selectEl.value;

    if (value && !this.selectedItems.includes(value)) {
      this.selectedItems = [...this.selectedItems, value];
      this._updateHiddenInputs();
      this._dispatchChangeEvent();
    }
    selectEl.value = "";
  }

  _handleRemove(itemToRemove: string) {
    this.selectedItems = this.selectedItems.filter(
      (item) => item !== itemToRemove,
    );
    this._updateHiddenInputs();
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

  setValue(values: string[]) {
    this.selectedItems = values.filter((v) => this.options.includes(v));
    this._updateHiddenInputs();
    this._dispatchChangeEvent();
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
                type="button"
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
