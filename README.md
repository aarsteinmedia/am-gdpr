# AM GDPR for TagManager

Reactive GDPR Web Component that prompts visitors for consent, stores their preferences and loads Tag Manager.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)

## Installation

Download `build/index.js` to you local server (and rename it?), or use GitHub as CDN: https://cdn.jsdelivr.net/gh/aarsteinmedia/am-gdpr@latest/build/index.js.

Add this script to all the pages of your website, either in `head` or right before the closing `body` tag. Then, add the web component itself, `am-gdpr` to the bottom of each page, and plot in your TagManager ID.

Example:
```xml
<head>
  <!-- All content of Head -->
  <script src="https://cdn.jsdelivr.net/gh/aarsteinmedia/am-gdpr/build/index.js"></script>
</head>
<body>
  <!-- All content of Body -->
  <am-gdpr gtmId="<YOUR_GTM_ID>"></am-gdpr>
</body>
```

## Usage

The web component will promt new visitors for consent and offer customizations based on your settings.

The component has the following properties:
- `gtmId`!: `string` TagManager ID *required*
- `hasRetargeting`?: `boolean` Whether you want to prompt for retargeting. Defaults to `false`
- `text`?: `object` Override the default text

- `fontFamily`?: `string` = 'Helvetica Neue, Helvetica, sans-serif'
- `color`?: `string` = '#000'
- `backgroundColor`?: `string` = '#FFF'
- `accentColor`?: `string` = '#FFF'
- `borderWidth`?: `number` = 2


## Support

Please [open an issue](https://github.com/aarsteinmedia/am-gdpr/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/fraction/readme-boilerplate/compare/).