import { expect } from '@esm-bundle/chai'
import { consentParamsToBool } from '@/utils'

it('Get extension from filename, URL or path', () => {
  expect(consentParamsToBool('granted')).to.equal(true)
  expect(consentParamsToBool('denied')).to.equal(false)
  expect(consentParamsToBool(1 as unknown as 'denied')).to.equal(false)
  expect(consentParamsToBool('random string' as unknown as 'denied')).to.equal(false)
})
