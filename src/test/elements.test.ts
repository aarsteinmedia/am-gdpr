import { expect } from '@esm-bundle/chai'
import { fixture } from '@open-wc/testing'

import type AMCookies from '@/elements/AMCookies'

describe('AMGDPR Component', () => {
  let el: AMCookies

  beforeEach(async () => {
    el = await fixture<AMCookies>(
      /* HTML */ `
        <am-cookies
              googleID="G-YBH0K0VB3T"
              color="#2f6171"
              accentColor="#9de5ad"
              backgroundColor="#fff"
            ></am-cookies>
      `)
  })

  // it('is defined', () => {
  //   assert.instanceOf(el, AMCookies, 'Component was not loaded')
  // })

  it('passes the a11y audit', async () => {
    await expect(el, 'Component did not pass a11y audit').shadowDom.to.be.accessible()
  })
})
