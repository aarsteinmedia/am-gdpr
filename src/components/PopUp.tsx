import {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'

import UiButton from '@/components/UiButton'

import type { Color } from '@types'

import styles from '@/styles/PopUp.module.scss'

interface PopUpChild {
  children?: ReactNode
  triggerChange?: () => void
}

export default function PopUp ({
  children,
  className = '',
  isOpen = false,
  label = '',
  close,
  bg = 'light-color',
  setOpen,
  closeOnClickOutside = true,
  hasBackdrop = true,
  width = 600,
  trigger,
}: {
  children: ReactNode
  className?: string
  isOpen: boolean
  label?: string
  setOpen?: (val: boolean) => unknown
  bg?: Color
  close?: string
  closeOnClickOutside?: boolean
  hasBackdrop?: boolean
  width?: number
  trigger?: unknown[]
}) {

  const [state, setState] = useState({
    isMoved: false,
    height: 0,
    isChanged: false
  }),
    popUpElement = useRef<HTMLDivElement>(null),
    box = useRef<HTMLDivElement>(null),

    closePopup = useCallback(() => {
      setOpen && setOpen(false)
      document.documentElement.classList.remove('overflow-hidden')
    }, [setOpen]),

    esc = useCallback(({ key }: KeyboardEvent) => {
      if (key === 'Escape') closePopup()
    }, [closePopup]),

    down = useCallback(() => setState(prev => ({ ...prev, isMoved: false })), []),
    move = useCallback(() => setState(prev => ({ ...prev, isMoved: true })), []),

    up = useCallback(({ target }: Event) => {
      if (closeOnClickOutside && !state.isMoved &&
          target instanceof HTMLElement &&
            !popUpElement.current?.contains(target)) {
        closePopup()
      }
    }, [closeOnClickOutside, closePopup, state.isMoved]),

    triggerChange = () => {
      setState(prev => ({
        ...prev,
        isChanged: !prev.isChanged
      }))
    },

    childrenWithProps = Children.map(children, child => {
      if (isValidElement(child) &&
        typeof child?.type !== 'string' &&
          !!triggerChange) {
        return cloneElement(
          child as any,
          { triggerChange }
        )
      }
      return child
    })

  useEffect(() => {
    document.addEventListener('keydown', esc, { passive: true, capture: true })
    if (closeOnClickOutside) {
      document.addEventListener('mousedown', down, { passive: true, capture: true })
      document.addEventListener('mousemove', move, { passive: true, capture: true })
      document.addEventListener('mouseup', up, { passive: true, capture: true })
    }
    return () => {
      document.removeEventListener('keydown', esc, true)
      document.removeEventListener('mousedown', down, true)
      document.removeEventListener('mousemove', move, true)
      document.removeEventListener('mouseup', up, true)
    }
  }, [esc, down, move, up, closeOnClickOutside])

  useEffect(() =>  {
    if (isOpen) {
      document.documentElement.classList.add('overflow-hidden')
    }
    return () => {
      document.documentElement.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      setState(prev => ({
        ...prev,
        height: box.current?.offsetHeight ?
          box.current.offsetHeight + 80 :
            prev.height
      }))
    }
  }, [isOpen, trigger, state.isChanged])

  return (
    <div
      className={`${styles.popUp} fadeIn`}
      data-backdrop={hasBackdrop}
    >
      <div className={styles.backDrop} />
      <div
        aria-label={label}
        aria-modal="true"
        className={`${styles.popUpElement} ${className}`}
        data-bg={bg}
        ref={popUpElement}
        role="dialog"
        style={{
          width: `${width}px`,
          maxHeight: `${state.height}px`,
          minHeight: `${state.height}px`,
        }}
      >
        { !!setOpen &&

          <UiButton
            aria-label={close ?? 'Close'}
            className={styles.closeButton}
            isOpen={isOpen}
            onClickHandler={closePopup}
          />
        
        }

        <div ref={box} style={{ display: 'flex', flexDirection: 'column' }}>
          { childrenWithProps }
        </div>
      </div>
    </div>
  )
}

export function PopUpRow({
  children,
  triggerChange
}: PopUpChild) {

  const childrenWithProps = Children.map(children, child => {
    if (isValidElement(child) &&
      typeof child?.type !== 'string' &&
        !!triggerChange) {
      return cloneElement(
        child as any,
        { triggerChange }
      )
    }
    return child
  })

  return (
    <div className={`${styles.row}`}>
      { childrenWithProps }
    </div>
  )
}

export function PopUpColumn({
  children,
  triggerChange
}: PopUpChild) {
  
  const childrenWithProps = Children.map(children, child => {
    if (isValidElement(child) &&
      typeof child?.type !== 'string' &&
        !!triggerChange) {
      return cloneElement(
        child as any,
        { triggerChange }
      )
    }
    return child
  })

  return (
    <div className={`${styles.column}`}>
      { childrenWithProps }
    </div>
  )
}