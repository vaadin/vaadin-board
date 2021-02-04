import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
class OuterElement extends PolymerElement {
  static get template() {
    return html`
        <style>
            :host {
                border-width: 3px;
                border-style: solid;
                border-color: red;
            }
        </style>
        <div>Header</div>
        <slot>
        </slot>
`;
  }

  static get is() {
      return 'outer-element';
  }
}
customElements.define(OuterElement.is, OuterElement);
