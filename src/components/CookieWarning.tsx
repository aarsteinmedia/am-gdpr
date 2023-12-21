import {
  useCallback,
  useEffect,
  type Dispatch,
  type SetStateAction
} from 'react'
import Cookies from 'js-cookie'

import Switch from './Switch'
import PopUp from './PopUp'

import defaultLabels from '../labels.json'

import type { Consent, Labels } from '../types.d'

import styles from '../styles/CookieWarning.module.scss'

export default function CookieWarning({
  consent,
  setConsent,
  lang,
  labels: labelsFromProps,
  style
}: {
  consent: Consent
  setConsent: Dispatch<SetStateAction<Consent>>
  lang: string
  labels?: Labels
  style: {
    color: string
    backgroundColor: string
    accentColor: string
  }
}) {

  const labels = labelsFromProps || defaultLabels,
  
    getConsent = (): Consent | undefined => {
      const cookie = Cookies.get('CookieConsent')
      if (cookie)
        return JSON.parse(decodeURIComponent(cookie))
    },

    save = useCallback(() => {
        Cookies.set(
          'CookieConsent',
          encodeURIComponent(JSON.stringify({
            statistical: consent.statistical,
            retargeting: consent.retargeting
          })),
          {
            sameSite: 'lax',
            expires: 365,
            secure: process.env.NODE_ENV !== 'development'
          }
        )
      }, [consent.retargeting, consent.statistical]),

    acceptAll = () => {
      setConsent(prev => ({
        ...prev,
        statistical: true,
        retargeting: true
      }))
      setTimeout(() => {
        setConsent(prev => ({
          ...prev,
          visible: false,
          customize: false
        }))
      }, consent.customize && (!consent.statistical || !consent.retargeting) ? 800 : 0)
    },

    declineAll = () => {
      setConsent({
        visible: false,
        customize: false,
        statistical: false,
        retargeting: false
      })
      if (!!window.dataLayer || !!window.google_tag_data) {
        location.reload()
      }
    },

    handleChange = (target: HTMLInputElement) => {
      const { checked, name } = target
      setConsent(prev => ({
        ...prev,
        [name]: checked
      }))
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
     
    <div className={`${styles.cookieContainer}`} style={{
      color: style.color,
      backgroundColor: style.backgroundColor
    }}>
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
            style={{
              backgroundColor: style.accentColor
            }}
          >{labels.customize.label}</button>
          <button
            aria-label={labels.accept}
            className={`${styles.button} dark-bg bg-hover gdpr`}
            onClick={acceptAll}
            style={{
              backgroundColor: style.accentColor
            }}
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
      style={{
        backgroundColor: style.accentColor
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
      style={style}
    >
      <div>
        <h3><span aria-label="cookies" className='icon-cookies' role="img" /> {labels.customize.header}</h3>
        <p dangerouslySetInnerHTML={{ __html: labels.customize.text }} />
        <p
          dangerouslySetInnerHTML={{ __html: labels.customize.link.replace('%URL%', labels.policyUrl) }}
        />
        <div className={styles.buttonWrapper}>
            <button aria-label={labels.decline}
              className={`${styles.button} bg-hover gdpr`}
              onClick={declineAll}
            >{labels.decline}</button>
          <button
            aria-label={labels.accept}
            className={`${styles.button} dark-bg bg-hover gdpr`}
            onClick={acceptAll}
            style={{
              backgroundColor: style.accentColor
            }}
          >{labels.acceptAll}</button>
        </div>
        <div className={styles.buttonWrapper}>
          <Switch
            label={labels.necessary.label}
            style={{
              color: style.color,
              backgroundColor: style.accentColor
            }}
            value={true}
          />
          <Switch
            label={labels.statistical.label}
            name="statistical"
            onChangeHandler={handleChange}
            style={{
              color: style.color,
              backgroundColor: style.accentColor
            }}
            value={!!consent.statistical}
          />
        </div>
      </div>
    </PopUp>
  )
}