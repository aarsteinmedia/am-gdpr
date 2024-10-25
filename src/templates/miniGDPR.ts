import type AMCookies from '@/elements/AMCookies'
import icon from '@/templates/icon'

/**
 * Mini GDPR
 */
export default function miniGDPR(this: AMCookies) {
  if (!this.gdprContainer) {
    return
  }

  const { miniGDPR, settings } = this.getText()

  this.gdprContainer.innerHTML = /* HTML */ `<button
    class="mini-gdpr ${this.alignMiniPrompt}"
    data-hide="false"
    aria-label="${miniGDPR}"
  >
    <figure aria-label="${settings}" class="icon-cookies settings">
      ${icon}
    </figure>
  </button>`

  const button = this.gdprContainer.querySelector('.mini-gdpr')
  if (button instanceof HTMLButtonElement) {
    button.onclick = this.setVisible
  }
}
