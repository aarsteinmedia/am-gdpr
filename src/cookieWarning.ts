import { html } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'

import icon from './icon'

import type { AMGDPR } from '.'

export default function cookieWarning(this: AMGDPR) {
  return (
    html`
      <div
        class="cookieContainer"
        style="color: ${this.color};background-color: ${this.backgroundColor};"
      >
        <div class="content">
          <div
            aria-describedby="cookieWarningText"
            aria-labelledby="cookieWarningText"
            aria-modal="false"
            role="dialog"
          >
            <p
              class="h3"
              id="cookieWarningText"
              lang=${document.documentElement.lang}
            >${this.text?.header}${' '}${icon}</p>
        </div>
        <div class="buttonWrapper">
          <button aria-label=${ifDefined(this.text?.customize.label)}
            class="button gdpr"
            @click=${this.setCustomize}
            style="background-color: ${this.accentColor}"
          >${this.text?.customize.label}</button>
          <button
            aria-label=${ifDefined(this.text?.accept)}
            class="button gdpr"
            @click=${this.acceptAll}
            style="backgroundColor: ${this.accentColor}"
          >${this.text?.accept}</button></div>
      </div>
      </div>
      `
  )
}