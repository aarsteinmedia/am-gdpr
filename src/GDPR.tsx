import React, { useEffect, useRef, useState } from 'react'

import CookieWarning from './components/CookieWarning'

import './styles/index.scss'

import type { Consent } from './types.d'

export default function GDPR({
  tag,
  color = '#000',
  backgroundColor = '#FFF',
  accentColor = '#FFF'
}: {
  tag: string
  color?: string
  backgroundColor?: string
  accentColor?: string
}) {

  const [state, setState] = useState<Consent>({
    visible: false,
    customize: false,
    statistical: null,
    retargeting: null
  }),
    language = useRef('en')

  useEffect(() => {
    language.current = document?.documentElement.lang
  }, [])

  return (
    <>
      <CookieWarning
        consent={state}
        lang={language.current}
        setConsent={setState}
        style={{
          color,
          backgroundColor,
          accentColor
        }}
      />

      {/* {!!state.statistical &&
      
      } */}
    </>
  )
}
