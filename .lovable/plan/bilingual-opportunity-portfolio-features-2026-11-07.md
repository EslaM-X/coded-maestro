# Bilingual opportunity portfolio features

## User-facing changes
- Add a bilingual opportunity-fit page where employers and partners can paste a role or project brief and receive a tailored, evidence-grounded assessment of fit and potential contributions.
- Turn the existing project catalogue into shareable individual project pages describing the problem, role, approach, outcomes, verified screenshots, and confirmed demo/repository links. Keep all existing project cards and repository links available.
- Add a short bilingual collaboration form for cooperation type, budget, and timing. Validate and encode the values, then open a clearly labeled, prefilled email draft; it will not store submissions or claim to send them.
- Preserve the existing luxury identity, language switch, mobile layout, and page content.

## Implementation
- Reuse the current bilingual context, project catalogue, design tokens, and existing Cloud bearer setup.
- Add a request-scoped TanStack server function for the AI Gateway Responses call; validate bounded input on both sides, keep credentials and prompts server-side, consume a streamed response, and return a simple result. Do not persist visitor descriptions.
- Add the `/opportunity` page and `/projects/$slug` pages with unique English/Arabic route metadata; render only confirmed project images and live demo URLs.
- Link existing project cards to their detail pages while retaining each repository link on the detail page.
- Keep contact as an email-draft-only flow unless delivery or storage is requested later.

## Verification
- Add focused tests for bounded opportunity input and safe contact-draft construction.
- Verify the AI Gateway request/response, project detail navigation, language switching, email draft encoding, and mobile layouts in the running preview.
- Recheck the build log and mark completed roadmap items.
