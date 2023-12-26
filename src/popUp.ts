import { html, nothing } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import { ifDefined } from 'lit/directives/if-defined.js'

import uiButton from './uiButton'
import icon from './icon'

import type { AMGDPR } from '.'

export default function popUp(this: AMGDPR) {
  const isOpen = !!this.customize
  // setTimeout(() => {
  //   this.dialogHeight = (this.dialogInner?.offsetHeight ?? 0) + 80
  // }, 10)
  // console.log(this.dialogInner)
  // if (this.dialogInner) {
  //   this.dialogHeight = (this.dialogInner?.offsetHeight ?? 0) + 80
  // }

  return (
    html`
      <div class="popUp fadeIn">
        <dialog
          ?open=${isOpen}
          style="
            color: ${this.color};
            background-color: ${this.backgroundColor};
          "
        >
          ${uiButton({
            className: 'closeButton',
            isOpen,
            onClick: () => this.setCustomize(!isOpen)
          })}
          <div
            class="dialog-inner-box"
            style="display: flex; flex-direction: column;"
          >
            
          
            <h3>
              <figure aria-label="cookies" class="icon-cookies">
                ${icon}
              </figure>${' '}${this.text?.customize.header}
            </h3>
            <p>${unsafeHTML(this.text?.customize.text)}</p>
            <p>${unsafeHTML(this.text?.customize.link.replace('%URL%', this.text?.policyUrl))}</p>
          
            <div class="buttonWrapper">
              <button
                aria-label=${ifDefined(this.text?.decline)}
                class="button bg-hover gdpr"
                @click=${this.declineAll}
              >${this.text?.decline}</button>
              <button
                aria-label=${ifDefined(this.text?.accept)}
                class="button dark-bg bg-hover gdpr"
                @click=${this.acceptAll}
                style="background-color: ${this.accentColor};"
              >${(this.statistical || this.retargeting) ? this.text?.save : this.text?.acceptAll}</button>
            </div>

            <div class="buttonWrapper">
              ${this.switchButton({
                label: this.text?.functional.label,
                value: true
              })}
              ${this.switchButton({
                label: this.text?.statistical.label,
                name: 'statistical',
                onChangeHandler: this.handleChange,
                value: !!this.statistical
              })}
              ${this.hasRetargeting ? 
              
                this.switchButton({
                  label: this.text?.marketing.label,
                  name: 'retargeting',
                  onChangeHandler: this.handleChange,
                  value: !!this.retargeting
                })

                :
              
                nothing
              }
            </div>
          
          </div>

        </dialog>
      </div>
    `
  )
}

// max-height: ${this.dialogHeight}px;
// min-height: ${this.dialogHeight}px;