import { html, nothing } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'

import { useId } from './utils'
import type { AMGDPR } from '.'

export default function switchButton(this: AMGDPR, {
  name,
  label,
  onChangeHandler,
  value
}: {
  name?: string
  label?: string
  onChangeHandler?: (e: Event) => void
  value: boolean
}) {
  const id = useId()
  return (
    html`
      <div class="container">

        ${ label ?

          html`
            <label
              class="textLabel"
              for=${id}
            >${label}</label>
          `

          :  nothing

        }

        <label
          class="label"
        >
          <input
            ?checked=${value}
            class="input"
            ?disabled=${!onChangeHandler}
            id=${id}
            name=${ifDefined(name)}
            type="checkbox"
            @change=${onChangeHandler}
            value=${value}
          />
          <span
            class="slider"
            style="
              color: ${this.color};
              background-color: ${this.accentColor};
            "
          ></span>
        </label>
      </div>
    `
  )
}