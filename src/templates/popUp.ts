import type { AMGDPR } from '../elements/AMGDPR'
import uiButton from './uiButton'
import icon from './icon'

/**
 * Settings Pop-Up
 */
export default function popUp(this: AMGDPR) {
  if (!this.gdprContainer) {
    return
  }

  this.gdprContainer.innerHTML = /* HTML */ `<div
    class="pop-up fadeIn"
    lang="${document.documentElement.lang}"
  >
    <dialog open>
      ${uiButton({
        className: 'close-button',
        isOpen: true,
      })}
      <div
        class="dialog-inner-box"
        style="display: flex; flex-direction: column;"
      >
        <h3>
          <figure
            aria-label="cookies"
            class="icon-cookies"
            style="display: inline-flex; margin-right: 0.5em;"
          >
            ${icon}
          </figure>
          <slot id="customize-header"></slot>
        </h3>
        <p id="customize-text"></p>
        <p id="customize-link"></p>

        <div id="save-wrapper" class="button-wrapper">
          <button
            class="button gdpr decline-all"
            style="background-color: transparent;"
          ></button>
          <button class="button gdpr accept-all"></button>
        </div>

        <div class="button-wrapper">
          ${this.switchButton({
            disabled: true,
            label: this.text?.functional.label,
            name: 'functional',
            value: true,
          })}
          ${this.switchButton({
            label: this.text?.statistical.label,
            name: 'allowStatistical',
            value: !!this.allowStatistical,
          })}
          ${this.hasRetargeting
            ? this.switchButton({
                label: this.text?.marketing.label,
                name: 'allowRetargeting',
                value: !!this.allowRetargeting,
              })
            : ''}
        </div>
      </div>
    </dialog>
  </div>`

  this.setText(this.text)

  const saveWrapper = this.gdprContainer.querySelector('#save-wrapper'),
    saveButton = document.createElement('button')

  saveButton.innerText = this.text?.save ?? 'Save preferences'
  saveButton.className = 'button gdpr save'
  saveButton.onclick = () => {
    this.save()
    this.isCustomize = false
    this.isVisible = false
  }

  const statistical = this.gdprContainer.querySelector(
    '[name="allowStatistical"]'
  )
  if (statistical instanceof HTMLInputElement) {
    statistical.onchange = (e) => {
      saveWrapper?.replaceChildren(saveButton)
      this.handleChange(e, this)
    }
  }

  const retargeting = this.gdprContainer.querySelector(
    '[name="allowRetargeting"]'
  )
  if (retargeting instanceof HTMLInputElement) {
    retargeting.onchange = (e) => {
      saveWrapper?.replaceChildren(saveButton)
      this.handleChange(e, this)
    }
  }

  const acceptAll = this.gdprContainer.querySelector('.accept-all')
  if (acceptAll instanceof HTMLButtonElement) {
    acceptAll.onclick = this.acceptAll
  }

  const declineAll = this.gdprContainer.querySelector('.decline-all')
  if (declineAll instanceof HTMLButtonElement) {
    declineAll.onclick = this.declineAll
  }

  const closeButton = this.gdprContainer.querySelector('.close-button')
  if (closeButton instanceof HTMLButtonElement) {
    closeButton.onclick = () => this.setCustomize(false)
  }

  setTimeout(() => {
    const dialog = this.gdprContainer?.querySelector('dialog'),
      dialogInner = this.gdprContainer?.querySelector('.dialog-inner-box')
    if (
      !(dialog instanceof HTMLDialogElement) ||
      !(dialogInner instanceof HTMLElement)
    ) {
      return
    }
    const height = `${(dialogInner.offsetHeight ?? 0) + 80}px`
    Object.assign(dialog.style, {
      maxHeight: height,
      minHeight: height,
    })
  }, 10)
}
