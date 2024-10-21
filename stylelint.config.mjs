import standard from 'stylelint-config-standard-scss'

const stylelintConfig = {
  ...standard,
  rules: {
    ...standard.rules,
    'no-descending-specificity': [
      true,
      {
        severity: 'warning',
      },
    ],
  },
}

export default stylelintConfig
