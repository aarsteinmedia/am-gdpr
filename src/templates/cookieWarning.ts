import type AMCookies from '@/elements/AMCookies'
import { icon } from '@/templates'

/**
 * Cookie Warning
 */
export default function cookieWarning(this: AMCookies) {
  if (!this.gdprContainer) {
    return
  }

  const {
    accept,
    customize: { label: customizeLabel },
    header,
  } = this.getText()

  this.gdprContainer.innerHTML = /* HTML */ `<div
    aria-describedby="cookie-warning-text"
    aria-labelledby="cookie-warning-text"
    aria-modal="false"
    role="dialog"
    class="cookie-container ${this.alignPrompt} ${this.format}-format"
    lang="${document.documentElement.lang}"
  >
    <div class="content">
      <p class="h3" id="cookie-warning-text">${header} ${icon}</p>
      <div class="button-wrapper">
        <button
          class="button gdpr customize"
          style="background-color: transparent"
        >
          ${customizeLabel}
        </button>
        <button class="button gdpr accept">${accept}</button>
      </div>
    </div>
  </div>`

  const acceptAll = this.gdprContainer.querySelector('.accept')
  if (acceptAll instanceof HTMLButtonElement) {
    acceptAll.onclick = this.acceptAll
  }

  const customize = this.gdprContainer.querySelector('.customize')
  if (customize instanceof HTMLButtonElement) {
    customize.onclick = () => this.setCustomize(true)
  }
}
