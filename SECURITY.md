# Security Policy

## Supported Versions

| Version | Supported |
| --- | --- |
| `main` | ✔ Supported |

## Reporting a Vulnerability

Do **not** disclose security vulnerabilities publicly. Report privately through
a **GitHub Security Advisory** on this repository.

Include the affected file, a description, reproduction steps, and a suggested
fix if possible.

## Design notes

- **Keys are never committed.** Credentials are injected at runtime via
  environment variables.
- **Static-first.** The site is a static-first TanStack Start app; content is
  rendered for public consumption and holds no private user data.
