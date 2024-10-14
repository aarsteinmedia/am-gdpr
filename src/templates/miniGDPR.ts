import type { AMGDPR } from '@/elements/AMGDPR'
import icon from '@/templates/icon'

/**
 * Mini GDPR
 */
export default function miniGDPR(this: AMGDPR) {
  if (!this.gdprContainer) {
    return
  }
  this.gdprContainer.innerHTML = /* HTML */ `<button
    class="mini-gdpr ${this.alignMiniPrompt}"
    data-hide="false"
    aria-label="${this.text?.miniGDPR || 'Cookie settings'}"
  >
    <figure class="icon-cookies settings">${icon}</figure>
  </button> `

  const button = this.gdprContainer.querySelector('.mini-gdpr')
  if (button instanceof HTMLButtonElement) {
    button.onclick = this.setVisible
  }
}
