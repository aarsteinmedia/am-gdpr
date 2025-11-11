interface Props {
  ariaLabel: string
  className: string
  isOpen: boolean
}

export default function uiButton({
  ariaLabel,
  className,
  isOpen,
}: Props) {
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
