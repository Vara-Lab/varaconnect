# Changelog

All notable changes to `varaConnect` will be documented in this file.

## [1.1.0] - 2025-03-30

### Added
- Environment variable handling compatibility for both Vite and Next.js using `getEnv` and `requireEnv`
- Support for multiple prefixes: `VITE_`, `NEXT_PUBLIC_`, and no prefix, with automatic detection based on runtime
- Explicit validation for required environment variables such as `PROJECT_ID` and `NODE_ADDRESS`
- Improved error handling for Next.js when using Webpack or Turbopack

### Fixed
- Runtime error in Next.js when accessing dynamic `process.env[...]` keys in the client
- Issue where `PROJECT_ID` was not properly recognized during build time

---
