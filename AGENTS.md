<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep AI Gateway analysis in request-scoped TanStack server functions with bounded validation and plain DTO results, so credentials and visitor text stay server-side.
- Model portfolio detail pages as public dynamic routes backed by the shared project catalogue, so project cards and shareable details stay consistent.
- Keep the requested contact flow as a validated mailto draft unless delivery or storage is explicitly requested, so the interface never implies a message was sent.
