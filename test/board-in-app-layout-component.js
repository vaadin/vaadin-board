import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import '../vaadin-board-row.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
class BoardInAppLayoutComponent extends PolymerElement {
  static get template() {
    return html`
    <!-- Simple app layout with a drawer menu and a vaadin-board content-->
    <app-drawer-layout fullbleed="" id="layout">
      <app-drawer id="drawer" slot="drawer" on-app-drawer-transitioned="_appDrawerTransitioned">
        <h1>Menu title</h1>
      </app-drawer>
      <app-header-layout has-scrolling-region="">
        <vaadin-board-row id="row">
          <div>top A</div>
          <div>top B</div>
          <div>top C</div>
          <div>top D</div>
        </vaadin-board-row>
      </app-header-layout>
    </app-drawer-layout>
`;
  }

  static get is() { return 'board-in-app-layout-component' }

  _appDrawerTransitioned(){
    this.$.layout.notifyResize();
  }
}

customElements.define(BoardInAppLayoutComponent.is, BoardInAppLayoutComponent);
