import { useEffect, useState } from 'react'
import TagManager from 'react-gtm-module'
import CookieWarning from './components/CookieWarning'

import './styles/index.scss'

import type { Consent, Labels } from './types.d'

export default function GDPR({
  tag: gtmId,
  color = '#000',
  backgroundColor = '#FFF',
  accentColor = '#FFF',
  labels
}: {
  tag: string
  color?: string
  backgroundColor?: string
  accentColor?: string
  labels?: Labels
}) {

  const [state, setState] = useState<Consent>({
    visible: false,
    customize: false,
    statistical: null,
    retargeting: null
  })

  useEffect(() => {
    if ((state.retargeting || state.statistical) && !window.dataLayer) {
      TagManager.initialize({ gtmId })
    }
  }, [gtmId, state.retargeting, state.statistical])

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <CookieWarning
      consent={state}
      labels={labels}
      lang={document?.documentElement.lang}
      setConsent={setState}
      style={{
        color,
        backgroundColor,
        accentColor
      }}
    />
  )
}
