export default function uiButton({
  ariaLabel,
  className,
  isOpen,
}: {
  ariaLabel: string
  className: string
  isOpen: boolean
}) {
  return /* HTML */ `
    <button
        ariaLabel="${ariaLabel}"
        class="menu-button ${className}"
        data-open="${isOpen}"
      >
        <span class="hamburger">
          <span></span>
        </span>
      </button> 
  `
}
