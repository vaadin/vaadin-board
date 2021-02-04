import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '../vaadin-board.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
class BoardIfElement extends PolymerElement {
  static get template() {
    return html`
    <vaadin-board>
      <vaadin-board-row>
        <template is="dom-if" if="{{(true)}}}">
          <div>Foo</div>
          <div>Bar</div>
          <div>Baz</div>
          <div>Bax</div>
        </template>
      </vaadin-board-row>
    </vaadin-board>
`;
  }

  static get is() {
    return 'board-if-element';
  }
}
customElements.define(BoardIfElement.is, BoardIfElement);
