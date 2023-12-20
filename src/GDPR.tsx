import { useEffect, useRef, useState } from 'react'

import CookieWarning from './components/CookieWarning'

import './styles/fonts.scss'

import type { Consent } from '@types'

export default function GDPR({ tag }: {
  tag: string
}){

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
      />

      {/* {!!state.statistical &&
      
      } */}
    </>
  )
}
