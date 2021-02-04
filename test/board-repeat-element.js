import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '../vaadin-board.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
class BoardRepeatElement extends PolymerElement {
  static get template() {
    return html`
    <vaadin-board>
      <vaadin-board-row>
        <dom-repeat items="{{items}}">
          <template>
            <div>{{item}}</div>
          </template>
        </dom-repeat>
      </vaadin-board-row>
    </vaadin-board>
`;
  }

  static get is() {
    return 'board-repeat-element';
  }

  static get properties() {
    return {
      items: {
        type: Array,
        value: ["Foo", "Bar", "Faz", "Foo"]
      }
    }
  }
}
customElements.define(BoardRepeatElement.is, BoardRepeatElement);
