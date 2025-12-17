# Repository Guidelines

## Environment & Tooling
- Use Node 24 per `.nvmrc`; run `corepack enable` once, then `yarn install` (no npm/pnpm).
- Task automation lives in `Taskfile.dist.yml` (and/or `Taskfile.yaml`); prefer `task <name>` wrappers when present.

## Project Structure & Module Organization
- `src/routes/*/+page.svelte` hosts MPA pages; pair with `+page.ts` for load logic (favor prerender where possible). Guard client-only code with `if (browser)`/`onMount`.
- `src/lib/components` for shared UI, `src/lib/utils` for pure helpers, and `static/` for public assets. Styling tokens/utilities live in `uno.config.ts`.
- Config entry points: `vite.config.ts` for build, `svelte.config.js` for kit settings, `playwright.config.ts` for e2e.
- Tests: colocated unit specs (`*.spec.ts`) near code; e2e specs under `tests/e2e/`.

## Build, Test, and Development Commands
- `yarn dev` (or `task dev`) to run the SvelteKit dev server; add `--host` for LAN.
- `yarn build` (or `task build`) runs Vite build + prerender; `yarn preview` serves the output.
- `yarn lint` checks ESLint + Svelte rules; `yarn check` runs SvelteKit/TypeScript diagnostics.
- `yarn test`/`yarn test:unit` executes Vitest; update snapshots with `yarn test -u`.
- `yarn test:e2e` runs Playwright; `yarn test:e2e --headed --debug` when diagnosing locally.

## Coding Style & Naming Conventions
- Follow ESLint defaults in this repo; keep TypeScript strict and prefer named exports in libs. Svelte components remain default exports.
- PascalCase components, camelCase functions/vars, SCREAMING_SNAKE_CASE env vars. Keep components small and pure; push state up to pages/layouts. Treat every change like a senior engineer: favor reuse, composition, and testability over one-off shortcuts.
- Use UnoCSS utility-first classes; add component `<style>` blocks only for scoped exceptions.
- Provide documentation comments for functions, types, fields, and any non-obvious CSS classes to clarify intent and usage patterns.

## Testing Guidelines
- Cover non-trivial logic with Vitest; colocate `*.spec.ts` next to sources using `describe` names that mirror file paths.
- Favor deterministic tests; mock network and timers (Vitest fake timers) instead of hitting real services.
- For Playwright, target `data-testid` selectors; keep fixtures lightweight and reset state between specs.

## Commit & Pull Request Guidelines
- Prefer Conventional Commits (`feat:`, `fix:`, `chore:`, `test:`, `docs:`); keep scope small and descriptive.
- PRs should outline behavior changes, risks, and tests run; link issues/tickets. Include screenshots for UI changes and note breaking changes explicitly.
