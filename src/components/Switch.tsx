import { useId } from 'react'

import styles from '../styles/Switch.module.scss'

export default function Switch({
  value,
  onChangeHandler,
  label,
  name,
  style
}: {
  value: boolean
  onChangeHandler?: (target: HTMLInputElement) => unknown
  label?: string
  name?: string
  style?: {
    color: string
    backgroundColor: string
  }
}) {

  const id = useId()

  return (
    <div className={styles.container}>
      
      { !!label &&

      <label
        className={styles.textLabel}
        htmlFor={id}
      >{label}</label>

      }

      <label
        className={styles.label}
      >
        <input
          checked={value}
          className={styles.input}
          disabled={!onChangeHandler}
          id={id}
          name={name}
          onChange={({ target }) => {
            onChangeHandler && onChangeHandler(target)
          }}
          type="checkbox"
        />
        <span className={`${styles.slider}`} style={style} />
      </label>
    </div>
  )
}