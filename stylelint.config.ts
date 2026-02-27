import type { Config } from 'stylelint'

import recommended from 'stylelint-config-recommended'

const stylelintConfig: Config = {
  ...recommended,
  rules: {
    ...recommended.rules,
    'no-descending-specificity': [
      true, { severity: 'warning' },
    ],
  },
}

export default stylelintConfig
