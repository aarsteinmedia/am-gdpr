import type { AMGDPR } from '../elements/AMGDPR'
import icon from './icon'

/**
 * Mini GDPR
 */
export default function miniGDPR(this: AMGDPR) {
  if (!this.gdprContainer) {
    return
  }
  this.gdprContainer.innerHTML = /* HTML */ `<button
    class="mini-gdpr"
    data-hide="false"
  >
    <figure class="icon-cookies settings">${icon}</figure>
  </button> `

  const button = this.gdprContainer.querySelector('.mini-gdpr')
  if (button instanceof HTMLButtonElement) {
    button.onclick = this.setVisible
  }
}
