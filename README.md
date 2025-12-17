# mpa-template

[![CI](https://github.com/sunsided/mpa-template/actions/workflows/ci.yml/badge.svg)](https://github.com/sunsided/mpa-template/actions/workflows/ci.yml)
[![License: EUPL-1.2](https://img.shields.io/badge/License-EUPL--1.2-blue.svg)](https://eupl.eu/)

Minimal SvelteKit 5 multi-page template that prerenders and hydrates, styled with UnoCSS, and wired with Vitest/Playwright plus Taskfile automation. Use it as a starting point for static-first sites that still need client-side behavior.

## Stack

- SvelteKit 5 (MPA) + adapter-static
- Vite 7, TypeScript (strict)
- UnoCSS (wind-4 preset, Svelte extractor)
- Vitest for unit tests, Playwright for E2E (`e2e/`)
- ESLint + Prettier
- Taskfile for common commands; Corepack + Yarn 4

## Getting started

1. Ensure Node 24 is active; run `corepack enable`.
2. Install deps: `task install`.
3. Develop: `task dev` (or `yarn dev`).
4. Test: `task test` (runs Vitest + Playwright; ensure a dev/preview server for E2E).
5. Build: `task build` (outputs to `build/`), preview via `task preview`.

## Project layout

- `src/routes/*/+page.svelte` – pages (MPA entries)
- `src/lib` – shared components/utilities
- `e2e/` – Playwright specs; `src/lib/*.spec.ts` for Vitest
- `uno.config.ts`, `vite.config.ts`, `svelte.config.js` – core config

## Deployment

- Static output lives in `build/`; Dockerfile serves it with nginx.
- GitHub Actions builds on pushes/PRs to `main`, uploads the artifact, and deploys `gh-pages` from `build/`.
