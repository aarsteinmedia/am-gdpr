import type { AMGDPR } from '../elements/AMGDPR'

/**
 * Cookie Warning
 */
export default function cookieWarning(this: AMGDPR) {
  if (!this.gdprContainer) {
    return
  }
  this.gdprContainer.innerHTML = /* HTML */ `<div
    class="cookie-container ${this.alignPrompt} ${this.format}-format"
    lang="${document.documentElement.lang}"
  >
    <div class="content">
      <div
        aria-describedby="cookie-warning-text"
        aria-labelledby="cookie-warning-text"
        aria-modal="false"
        role="dialog"
      >
        <p class="h3" id="cookie-warning-text"></p>
      </div>
      <div class="button-wrapper">
        <button
          class="button gdpr customize"
          style="background-color: transparent"
        ></button>
        <button class="button gdpr accept"></button>
      </div>
    </div>
  </div>`

  if (this.text) {
    this.setText(this.text)
  }

  const acceptAll = this.gdprContainer.querySelector('.accept')
  if (acceptAll instanceof HTMLButtonElement) {
    acceptAll.onclick = this.acceptAll
  }

  const customize = this.gdprContainer.querySelector('.customize')
  if (customize instanceof HTMLButtonElement) {
    customize.onclick = () => this.setCustomize(true)
  }
}
