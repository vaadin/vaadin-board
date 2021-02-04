import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '../vaadin-board.js';
import '../vaadin-board-row.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
class BoardElement extends PolymerElement {
  static get template() {
    return html`
        <vaadin-board style="width:1200px;">
            <vaadin-board-row>
                <slot>
                </slot>
            </vaadin-board-row>
        </vaadin-board>
`;
  }

  static get is() {
      return 'board-element';
  }
}
customElements.define(BoardElement.is, BoardElement);
