import type AMCookies from '@/elements/AMCookies'
import uiButton from '@/templates/uiButton'
import icon from '@/templates/icon'

/**
 * Settings Pop-Up
 */
export default function popUp(this: AMCookies) {
  if (!this.gdprContainer) {
    return
  }

  const {
    acceptAll: acceptAllText,
    close: closeText,
    customize: {
      header: customizeHeaderText,
      link: customizeLink,
      retargeting: customizeRetargetingText,
      text: customizeText,
    },
    decline: declineText,
    functional: { label: functionalLabel },
    marketing: { label: marketingLabel },
    policyUrl,
    save: saveText,
    statistical: { label: statisticalLabel },
  } = this.getText()

  this.gdprContainer.innerHTML = /* HTML */ `<div
    class="pop-up fade-in"
    lang="${document.documentElement.lang}"
  >
    <dialog open>
      ${uiButton({
        ariaLabel: closeText,
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
          ${customizeHeaderText}
        </h3>
        <p>
          ${customizeText}${this.hasRetargeting
            ? ` ${customizeRetargetingText}`
            : ''}
        </p>
        <p>
          ${customizeLink.replace('%URL%', this.privacyPolicyURL || policyUrl)}
        </p>

        <div id="save-wrapper" class="button-wrapper">
          <button
            class="button gdpr decline-all"
            style="background-color: transparent;"
          >
            ${declineText}
          </button>
          <button class="button gdpr accept-all">${acceptAllText}</button>
        </div>

        <div class="button-wrapper">
          ${this.switchButton({
            disabled: true,
            label: functionalLabel,
            name: 'functional',
            value: true,
          })}
          ${this.switchButton({
            label: statisticalLabel,
            name: 'allowStatistical',
            value: !!this.allowStatistical,
          })}
          ${this.hasRetargeting
            ? this.switchButton({
                label: marketingLabel,
                name: 'allowRetargeting',
                value: !!this.allowRetargeting,
              })
            : ''}
        </div>
      </div>
    </dialog>
  </div>`

  const saveWrapper = this.gdprContainer.querySelector('#save-wrapper'),
    saveButton = document.createElement('button')

  saveButton.innerText = saveText
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
