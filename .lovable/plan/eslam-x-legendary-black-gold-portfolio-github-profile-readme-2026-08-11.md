# EslaM-X — Legendary Black & Gold Portfolio + GitHub Profile README

A single-page cinematic personal site in black and gold, plus a matching animated GitHub profile README you can paste into your `EslaM-X/EslaM-X` repo.

## Brand direction

- Palette: deep obsidian black, molten gold (#FFB627 → #FF6A00 ember gradient), silver-chrome accents — taken from your crowned "X" logo.
- Type: a sharp display face for headings with wide gold letter-spacing, clean sans for body.
- Motion: gold particle/ember field in the hero, magnetic cursor glow, scroll-reveal for every section, animated counters, typing headline ("SOVEREIGN ENGINEER / WEB3 ARCHITECT / CYBER AUTHORITY"), 3D tilt on project cards, gold beam divider between sections. Restrained and premium — not busy.
- Fully responsive, dark-only, plus reduced-motion fallback.

## Assets

- Your Stanford-arches photo: background removed, isolated cut-out portrait with a gold rim-light glow behind it in the hero (same treatment as the reference site, elevated).
- The crowned X logo: used as the site mark in the nav, as a watermark signature in the footer, as the favicon, and as the signature block in the README.

## Site sections (one page, smooth-scroll nav)

1. **Hero** — crowned X mark, "EslaM HeshAM" / "MR-X", typing subtitle, cut-out portrait, CTA buttons (View Work / Contact / Resume), social row.
2. **About** — the Digital Sovereign manifesto, condensed into a powerful short-form version, with the Instagram bio glyph styling as an accent.
3. **Stats strip** — animated counters: 44,000+ contributions, 7+ years, orgs contributed to (Pi Network, Stellar, Fabric Foundation, Map of Pi).
4. **Skills** — grouped grids with gold-glow tech tiles: Web3/Blockchain, Full-Stack (Next.js, React, TypeScript, Node, Supabase, PostgreSQL, Tailwind, Docker), AI, Cybersecurity, Business & Operations.
5. **Experience** — vertical gold timeline: Pi Core Team ecosystem contributor, SIG (Office of the CEO & Board), Steinheim (Business Operations Manager, founding team), PiEat-Me founder, Orascom Construction.
6. **Open-source impact** — highlight cards for the PiRC PR reviewed by Nicolas Kokkalis (with his actual review quotes), the stellar-core PR, and the Fabric RoboPay PR, each linking to GitHub.
7. **Projects** — Steinheim ERP & Invoicing, RoboPay Spot Tier-1, PiRC1 Standards Pro, MapCap IPO, PiEat-Me, Pi Local AI Agent, SIG corporate site. Each with description, stack chips, and links.
8. **Certifications** — compact filterable grid of your certificates (issuer + year only).
9. **Recommendations** — quote cards from Daniel Lee and Antony Ciccone.
10. **Contact** — email, LinkedIn, GitHub, Instagram, X, Facebook, Medium, plus a copy-email button.
11. **Footer** — crowned X watermark signature.

Notes honored: no university or education section anywhere; you are presented as an ecosystem contributor and Lead Technical Architect, not as Pi Network founding team.

## GitHub profile README

Delivered as `github-profile/README.md` in the project (copy into your `EslaM-X/EslaM-X` repo), containing:

- Animated typing SVG banner (gold, "SOVEREIGN ENGINEER · WEB3 ARCHITECT · CYBER AUTHORITY") like the reference profiles.
- Crowned-X logo header + capsule badges for profile views, followers, stars.
- About Me bullets, Connect With Me badge row (LinkedIn, X, Instagram, Facebook, Medium, Email).
- Languages & Tools icon wall, GitHub stats / streak / top-languages cards in a gold-on-black theme, contribution snake/activity graph.
- Featured open-source contributions table (PiRC, stellar-core, RoboPay) and featured projects.
- Crowned-X signature footer.

## Technical notes

- TanStack Start, one route at `/` replacing the placeholder, split into section components under `src/components/`.
- Black/gold design tokens in `src/styles.css` (oklch), fonts loaded via `<link>` in `__root.tsx`.
- Animations with CSS + a lightweight scroll-reveal hook; canvas ember field gated to client-only.
- SEO: route `head()` with title, description, og/twitter tags and og:image, JSON-LD `Person` schema; favicon from the crowned X logo.
- Deploy: publish from Lovable, or push to GitHub and import into Vercel — both give you `eslamx.vercel.app` or a custom `eslamx.dev` domain.
