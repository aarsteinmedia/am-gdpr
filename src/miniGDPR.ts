import { html } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'

import icon from './icon'

import type { AMGDPR } from '.'

export default function miniGDPR(this: AMGDPR) {
  
  return html`
    <button
      class="miniGDPR"
      id="miniGDPR"
      @click=${this.setVisible}
      style="background-color: ${this.accentColor};"
    >
      <figure aria-label=${ifDefined(this.text?.settings)} class="icon-cookies">
        ${icon}
      </figure>
    </button>
  `
}