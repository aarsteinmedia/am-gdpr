/**
 *
 */
export default function uiButton({
  className,
  isOpen,
}: {
  className: string
  isOpen: boolean
}) {
  return /* HTML */ `<button
    class="menu-button ${className}"
    data-open="${isOpen}"
  >
    <span class="hamburger">
      <span></span>
    </span>
  </button> `
}
