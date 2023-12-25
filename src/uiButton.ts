import { html, nothing } from 'lit'

export default function uiButton({
  className,
  onClick,
  isOpen,
}: {
  className?: string
  onClick(): void
  isOpen: boolean
}) {
  return (
    html`
      <button
        @click=${onClick}
        class="menuButton ${className ?? nothing}"
        data-open=${isOpen}
      >
        <span class="hamburger">
          <span></span>
        </span>
      </button>
    `
  )
}