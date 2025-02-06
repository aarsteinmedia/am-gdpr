import recommended from 'stylelint-config-recommended'

/**
 * @type {import('stylelint').Config}
 * */
const stylelintConfig = {
  ...recommended,
  rules: {
    ...recommended.rules,
    'no-descending-specificity': [
      true,
      {
        severity: 'warning',
      },
    ],
  },
}

export default stylelintConfig
