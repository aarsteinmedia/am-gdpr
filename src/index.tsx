import r2wc from '@r2wc/react-to-web-component'
import GDPR from './GDPR'

const wcGDPR = r2wc(GDPR, {
  props: {
    tag: 'string',
    color: 'string',
    backgroundColor: 'string',
    accentColor: 'string',
    labels: 'json'
  }
})

customElements.define('am-gdpr', wcGDPR)