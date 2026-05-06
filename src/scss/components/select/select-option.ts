import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("select-option")
export class SelectOption extends LitElement {
  @property({ type: String }) value: string = "";
  @property({ type: Boolean }) selected: boolean = false;

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this.dispatchEvent(
      new CustomEvent("select-option-connected", {
        bubbles: true,
        composed: true,
      }),
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "select-option": SelectOption;
  }
}
