# Contributing

Thanks for your interest. This project is designed so a first-time contributor
can land a small, reviewable change quickly.

## Ground rules

- **Small PRs.** One logical change per pull request.
- **Evidence over claims.** Every claim on this site points at real work —
  never add a claim without the link or evidence behind it.
- **No secrets in code.** API keys and credentials are injected at runtime via
  environment variables — never committed.
- **Design consistency.** New UI follows the existing design system
  (Radix UI + shadcn-style components, Tailwind CSS).

## Getting started

1. Fork and clone.
2. `npm install` (or `bun install`).
3. `npm run dev` — the TanStack Start dev server.

## First contribution in 6 steps

1. Pick an open issue (labels: `good first issue`, `good first contribution`,
   `help wanted`, `documentation`).
2. Read the [code of conduct](CODE_OF_CONDUCT.md) and this guide.
3. Run `npm run lint` and keep it clean.
4. Open your pull request (use the [PR template](.github/PULL_REQUEST_TEMPLATE.md)).
5. Get reviewed — then your name goes on the contributor wall.

## Pull requests

- Add or update a test with every change.
- Keep `npm run lint` clean.
- Update `CHANGELOG.md` with your change.
- Link the issue your PR closes.

## Labels you can grab

- `good first issue` / `good first contribution` — small, well-scoped.
- `help wanted` — maintainers would like contributions.
- `documentation` — docs-only, great starting point.
- `ui` / `content` / `infra` — feature-area work.

## Code of conduct

Be respectful and constructive. See `CODE_OF_CONDUCT.md`.
