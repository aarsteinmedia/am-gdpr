import {
  useCallback,
  useEffect,
  type Dispatch,
  type SetStateAction
} from 'react'
import Cookies from 'js-cookie'

import Switch from '@/components/Switch'
import PopUp from '@/components/PopUp'

import defaultLabels from '@/labels.json'

import type { Consent, Labels } from '@types'

import styles from '@/styles/CookieWarning.module.scss'

export default function CookieWarning({
  consent,
  setConsent,
  lang = 'en',
  labels: labelsFromProps
}: {
  consent: Consent
  setConsent: Dispatch<SetStateAction<Consent>>
  lang?: string
  labels?: Labels
}) {

  const labels = labelsFromProps || defaultLabels,
  
    getConsent = (): Consent | undefined => {
      const cookie = Cookies.get('CookieConsent')
      if (cookie)
        return JSON.parse(decodeURIComponent(cookie))
      return
    },

    save = useCallback(() => {
        Cookies.set(
          'CookieConsent',
          encodeURIComponent(JSON.stringify({
            statistical: consent.statistical,
          })),
          {
            sameSite: 'lax',
            expires: 365,
            secure: process.env.NODE_ENV !== 'development'
          }
        )
      }, [consent.statistical]),

    acceptAll = () => {
      setConsent(prev => ({
        ...prev,
        statistical: true
      }))
      setTimeout(() => {
        setConsent(prev => ({
          ...prev,
          visible: false,
          customize: false
        }))
      }, consent.customize && !consent.statistical ? 800 : 0)
    },

    declineAll = () => {
      setConsent({
        visible: false,
        customize: false,
        statistical: false
      })
    },

    handleChange = (target: HTMLInputElement) => {
      const { checked, name } = target
      setConsent({
        ...consent,
        [name]: checked
      })
    }

  useEffect(() => {
    if (consent.statistical === false) {
      save()
    }

    if (consent.statistical) {
      save()
    }
  }, [save, consent.statistical])

  useEffect(() => {
    setConsent(prev => ({
      ...prev,
      statistical: getConsent()?.statistical
    }))
  }, [setConsent])

  return (
    
    !consent?.customize &&
      ((!consent.statistical && consent.statistical !== false) ||
      !!consent?.visible) ?
     
    <div className={`accent-bg ${styles.cookieContainer}`}>
      <div className={styles.content}>
        <div
          aria-describedby="cookieWarningText"
          aria-labelledby="cookieWarningText"
          aria-modal="false"
          role="dialog"
        >
          <p
            className="h3"
            dangerouslySetInnerHTML={{ __html: labels.header }}
            id="cookieWarningText"
            lang={lang}
          />
        </div>
        <div className={styles.buttonWrapper}>
          <button aria-label={labels.customize.label}
            className={`${styles.button} accent-bg bg-hover gdpr`}
            onClick={() => {
              setConsent(prev => ({
                ...prev,
                customize: true,
                statistical: !!prev.statistical
              }))
            }}
          >{labels.customize.label}</button>
          <button
            aria-label={labels.accept}
            className={`${styles.button} dark-bg bg-hover gdpr`}
            onClick={acceptAll}
          >{labels.accept}</button></div>
      </div>
    </div>

    :
    
    !consent.customize ?

    <button
      className={`${styles.miniGDPR} accent-bg`}
      data-hide={false}
      id="miniGDPR"
      onClick={() => {
        Cookies.remove('CookieConsent')
        setConsent(prev => ({
          ...prev,
          statistical: null,
          visible: true
        }))
      }}
    ><span aria-label={labels.settings} className="icon-cookies" /></button>

    :

    <PopUp
      close={labels.close}
      isOpen={!!consent.customize}
      setOpen={(val: boolean) => {
        setConsent(prev => ({
          ...prev,
          customize: val
        }))
      }}
    >
      <div>
        <h3><span aria-label="cookies" className='icon-cookies' role="img" /> {labels.customize.header}</h3>
        <p dangerouslySetInnerHTML={{ __html: labels.customize.text }} />
        <div className={styles.buttonWrapper}>
            <button aria-label={labels.decline}
              className={`${styles.button} bg-hover gdpr`}
              onClick={declineAll}
            >{labels.decline}</button>
          <button
            aria-label={labels.accept}
            className={`${styles.button} dark-bg bg-hover gdpr`}
            onClick={acceptAll}
          >{labels.acceptAll}</button>
        </div>
        <div className={styles.buttonWrapper}>
          <Switch
            label={labels.necessary.label}
            value={true}
          />
          <Switch
            label={labels.statistical.label}
            name="statistical"
            onChangeHandler={handleChange}
            value={!!consent.statistical}
          />
        </div>
      </div>
    </PopUp>
  )
}