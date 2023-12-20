import styles from '@/styles/UiButton.module.scss'

export default function UiButton({
  className = '',
  isOpen = false,
  onClickHandler,
  context = 'menu',
  direction = '',
  ...rest
}: {
  className?: string
  isOpen: boolean
  onClickHandler(): void
  context?: string
  direction?: string
  [x: string]: unknown
}) {

  return (
    <button
      className={`${styles.menuButton} ${className}`}
      data-context={context}
      data-direction={direction}
      data-open={isOpen} 
      onClick={onClickHandler}
      {...rest}
    >
      <span className={styles.hamburger}>
        <span className={styles.div} />
      </span>
    </button>
  )
}
