import { useState } from 'react'

import type { Consent } from '@types'

export default function GDPR({ tag }: {
  tag: string
}){
  const [state, setState] = useState<Consent>({
    visible: false,
    customize: false,
    statistical: null
  })
  return <p>Hello world, {tag}</p>
}
