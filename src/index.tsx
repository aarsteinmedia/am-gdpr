import r2wc from '@r2wc/react-to-web-component'
import App from './App'

const AMGdpr = r2wc(App, {
  props: { tag: 'string' }
})

customElements.define('am-gdpr', AMGdpr)