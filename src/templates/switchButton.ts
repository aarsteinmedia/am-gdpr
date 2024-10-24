import { useId } from '@/utils'
import type AMCookies from '@/elements/AMCookies'

/**
 * Switch button
 */
export default function switchButton(
  this: AMCookies,
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
      ? /* HTML */ `<label
          data-name="${name}-label"
          class="text-label"
          for="${id}"
          >${label}</label
        > `
      : ''}

    <label data-name="${name}-aria" class="label">
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
