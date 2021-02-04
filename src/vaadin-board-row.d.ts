import {PolymerElement} from '@polymer/polymer/polymer-element.js';

import {IronResizableBehavior} from '@polymer/iron-resizable-behavior/iron-resizable-behavior.js';

import {ElementMixin} from '@vaadin/vaadin-element-mixin/vaadin-element-mixin.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import {afterNextRender} from '@polymer/polymer/lib/utils/render-status.js';

import {DomRepeat} from '@polymer/polymer/lib/elements/dom-repeat.js';

import {DomIf} from '@polymer/polymer/lib/elements/dom-if.js';

import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';

/**
 * `<vaadin-board-row>` is a Polymer element that together with `vaadin-board` element allows to create flexible responsive layouts and build nice looking dashboard.
 *
 * Each row can contain up to four elements (fewer if colspan is used) and is automatically responsive. The row changes between `large`, `medium` and `small` modes depending on the available width and the set breakpoints. In `large` mode, typically all content is shown side-by-side, in `medium` half of the content is side by side and in `small` mode, content is laid out vertically.
 *
 * The breakpoints can be set using custom CSS properties. By default the breakpoints are `small: <600px`, `medium: < 960px`, `large >= 960px`.
 *
 *
 * ```html
 * <vaadin-board>
 *   <vaadin-board-row>
 *     <div>This could be chart 1</div>
 *     <div>This could be chart 2</div>
 *     <div>This could be chart 3</div>
 *     <div>This could be chart 4</div>
 *   </vaadin-board-row>
 * </vaadin-board>
 * ```
 *
 * ### Styling
 *
 * The following custom properties are available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|-------------
 * `--vaadin-board-width-small` | Determines the width where mode changes from `small` to `medium` | `600px`
 * `--vaadin-board-width-medium` | Determines the width where mode changes from `medium` to `large` | `960px`
 */
declare class BoardRowElement extends
  ElementMixin(
  PolymerElement) {
  ready(): void;
  connectedCallback(): void;

  /**
   * Redraws the row, if necessary.
   *
   * In most cases, a board row will redraw itself if your reconfigure it. If you dynamically change CSS which affects the row, then you need to call this method.
   */
  redraw(): void;
}

declare global {

  interface HTMLElementTagNameMap {
    "vaadin-board-row": BoardRowElement;
  }
}

export {BoardRowElement};