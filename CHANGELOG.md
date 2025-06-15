# Change Log

All notable changes to the "stringifyer" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-06-13

### Added

- Initial release of Stringifyer extension
- Core functionality to stringify selected text
- Automatic escaping of backslashes, quotes, and newlines
- Multi-selection support for batch stringification
- Command: `stringifier.stringifySelection`
- Basic VS Code extension structure and configuration

### Notes

- First public release
- Extension ready for the VS Code marketplace

## [1.0.2] - 2025-06-15

### Added

- Added `publisher` field (`unbumpkin`) to `package.json` for publishing to the VS Code Marketplace.

### Changed

- Updated version to `1.0.2` in `package.json` and `package-lock.json`.
- Improved string escaping in `src/extension.ts`:
  - Now escapes carriage returns (`\r`), tabs (`\t`), form feed (`\f`), and vertical tab (`\v`).
  - Backspace character is now escaped using the Unicode escape (`[\u0008]`) to avoid regex issues.
  - Enhanced comments for clarity on escaping order and purpose.