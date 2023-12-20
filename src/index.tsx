import r2wc from '@r2wc/react-to-web-component'
import GDPR from './GDPR'

const wcGDPR = r2wc(GDPR, {
  props: { tag: 'string' }
})

customElements.define('am-gdpr', wcGDPR)