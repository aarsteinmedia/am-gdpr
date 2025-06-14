# Changelog for @aarsteinmedia/am-gdpr

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.6] - 11-06-2025

### Changed

- Minor optimizations

## [2.0.3] - 17-02-2025

### Changed

- Updated ESLint and devDependencies
- Dropped CJS export

## [2.0.2] - 06-02-2025

### Changed

- Fixed bug with layered stylesheets

## [2.0.1] - 06-02-2025

### Changed

- ES2021 -> ES2022
- Migrated from SASS to modern CSS with nesting

## [2.0.0] - 24-10-2024

### Changed

- Refactored and renamed type import
  - BREAKING CHANGE:
    ```diff
    - import type { AMGDPR } from '@aarsteinmedia/am-cookies'
    + import type AMCookies from '@aarsteinmedia/am-cookies'
    ```
- Changed tagname + rich data moved from attributes to properties
  - BREAKING CHANGE:
  ```diff
  - <am-gdpr
  - text="{
  -  \"settings\": \"Cookie Settings\",
  -   ...
  -  }"
  - {...rest}
  - ></am-gdpr>

  + <am-cookies {...rest}></am-cookies>
  + <script>
  +   const amCookies = document.querySelector('am-cookies')
  +   amCookies?.setText({
  +     ...amCookies.getText(),
  +     header: 'Hello world'
  +   })
  + </script>
  ```

## [1.1.0] - 24-10-2024

### Added

- Added test

## [1.0.3] - 20-10-2024

### Changed

- Expanded browser compability
- Minor bugfixes
- Minor stylistic changes

## [1.0.2] - 18-10-2024

### Added

- Added changelog

### Changed

- Migrated from sass @import to @include

[2.0.2]: https://github.com/aarsteinmedia/am-gdpr/releases/tag/2.0.2
[2.0.1]: https://github.com/aarsteinmedia/am-gdpr/releases/tag/2.0.1
[2.0.0]: https://github.com/aarsteinmedia/am-gdpr/releases/tag/2.0.0
[1.1.0]: https://github.com/aarsteinmedia/am-gdpr/releases/tag/1.1.0
[1.0.3]: https://github.com/aarsteinmedia/am-gdpr/releases/tag/1.0.3
[1.0.2]: https://github.com/aarsteinmedia/am-gdpr/releases/tag/1.0.2