import { AMGDPR } from '@/elements/AMGDPR'
import { isServer } from '@/utils'

export default AMGDPR

export const tagName = 'am-gdpr'

if (!isServer() && !customElements.get('am-gdpr')) {
  customElements.define('am-gdpr', AMGDPR)
}
