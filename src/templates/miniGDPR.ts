import type AMCookies from '@/elements/AMCookies'
import icon from '@/templates/icon'

/**
 * Mini GDPR
 */
export default function miniGDPR(this: AMCookies) {
  if (!this.gdprContainer) {
    return
  }
  this.gdprContainer.innerHTML = /* HTML */ `<button
    class="mini-gdpr ${this.alignMiniPrompt}"
    data-hide="false"
    aria-label=""
  >
    <figure class="icon-cookies settings">${icon}</figure>
  </button>`

  this.populateText()

  const button = this.gdprContainer.querySelector('.mini-gdpr')
  if (button instanceof HTMLButtonElement) {
    button.onclick = this.setVisible
  }
}
