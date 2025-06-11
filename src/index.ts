import AMCookies from '@/elements/AMCookies'
import { isServer } from '@/utils'

export default AMCookies

export const tagName = 'am-cookies'

if (!isServer && !customElements.get(tagName)) {
  customElements.define(tagName, AMCookies)
}
