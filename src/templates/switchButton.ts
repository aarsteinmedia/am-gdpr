import { useId } from '../utils'
import type { AMGDPR } from '../elements/AMGDPR'

/**
 * Switch button
 */
export default function switchButton(
  this: AMGDPR,
  {
    disabled = false,
    label,
    name,
    value,
  }: {
    disabled?: boolean
    name: string
    label?: string
    value: boolean
  }
) {
  const id = useId()
  return /* HTML */ `<div class="container">
    ${label
      ? /* HTML */ `<label class="textLabel" for="${id}">${label}</label> `
      : ''}

    <label class="label">
      <input
        ${value ? 'checked' : ''}
        class="input"
        ${disabled ? 'disabled' : ''}
        id="${id}"
        name="${name}"
        type="checkbox"
        value="${value}"
      />
      <span class="slider"></span>
    </label>
  </div> `
}
