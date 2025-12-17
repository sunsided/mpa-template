<script lang="ts">
    import { resolve } from '$app/paths'
</script>

<svelte:head>
    <title>Process & Playbook | mpa-template</title>
</svelte:head>

<main class="min-h-screen bg-slate-950 text-slate-50">
    <section class="mx-auto max-w-5xl px-6 py-16" flex="~ col" gap="10">
        <header
            class="flex flex-col gap-4 rounded-3xl border border-slate-800/70 bg-slate-900/70 p-10 shadow-[0_20px_80px_-40px_rgba(8,47,73,0.8)]"
        >
            <p class="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200/90">
                Process
            </p>
            <h1 class="text-4xl font-semibold leading-tight">Build & release playbook</h1>
            <p class="max-w-3xl text-lg text-slate-200/90">
                Opinionated flow for developing, testing, and shipping MPA pages with confidence.
            </p>
            <div class="flex flex-wrap gap-3">
                <a
                    class="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-100"
                    href={resolve('/')}
                    rel="external"
                >
                    Back to home
                </a>
                <a
                    class="inline-flex items-center gap-2 rounded-full border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-100 transition-transform duration-200 hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-100"
                    href={resolve('/info')}
                    rel="external"
                >
                    Stack overview
                </a>
            </div>
        </header>

        <section class="grid gap-6 md:grid-cols-2">
            <article
                class="flex flex-col gap-3 rounded-2xl border border-slate-800/70 bg-slate-900/70 p-6 shadow-[0_16px_40px_-24px_rgba(8,47,73,0.8)]"
            >
                <h2 class="text-xl font-semibold text-slate-50">Local loop</h2>
                <ul class="space-y-2 text-slate-200/90">
                    <li>
                        <strong class="text-slate-50">task dev</strong>: SvelteKit dev server with
                        UnoCSS.
                    </li>
                    <li>
                        <strong class="text-slate-50">task test:watch</strong>: Vitest watch for
                        units.
                    </li>
                    <li>
                        <strong class="text-slate-50">task test:e2e:headed</strong>: Playwright
                        headed run for flows.
                    </li>
                </ul>
            </article>
            <article
                class="flex flex-col gap-3 rounded-2xl border border-slate-800/70 bg-slate-900/70 p-6 shadow-[0_16px_40px_-24px_rgba(8,47,73,0.8)]"
            >
                <h2 class="text-xl font-semibold text-slate-50">Quality gates</h2>
                <ul class="space-y-2 text-slate-200/90">
                    <li>
                        <strong class="text-slate-50">task typecheck</strong>: app-only TS checks.
                    </li>
                    <li><strong class="text-slate-50">task lint</strong>: ESLint for TS/Svelte.</li>
                    <li>
                        <strong class="text-slate-50">task test</strong>: Vitest + Playwright
                        (requires server).
                    </li>
                </ul>
            </article>
            <article
                class="flex flex-col gap-3 rounded-2xl border border-slate-800/70 bg-slate-900/70 p-6 shadow-[0_16px_40px_-24px_rgba(8,47,73,0.8)]"
            >
                <h2 class="text-xl font-semibold text-slate-50">Structure</h2>
                <ul class="space-y-2 text-slate-200/90">
                    <li>
                        <strong class="text-slate-50">Pages</strong>: `src/routes/*/+page.svelte`
                        (MPA entries).
                    </li>
                    <li>
                        <strong class="text-slate-50">Lib</strong>: reusable components/utilities
                        live in `src/lib`.
                    </li>
                    <li>
                        <strong class="text-slate-50">E2E</strong>: `e2e/` holds Playwright specs
                        only.
                    </li>
                </ul>
            </article>
            <article
                class="flex flex-col gap-3 rounded-2xl border border-slate-800/70 bg-slate-900/70 p-6 shadow-[0_16px_40px_-24px_rgba(8,47,73,0.8)]"
            >
                <h2 class="text-xl font-semibold text-slate-50">Release</h2>
                <ul class="space-y-2 text-slate-200/90">
                    <li>
                        <strong class="text-slate-50">task build</strong>: prerenders to `build/`
                        via adapter-static.
                    </li>
                    <li>
                        <strong class="text-slate-50">task preview</strong>: serve the static output
                        locally.
                    </li>
                    <li>
                        <strong class="text-slate-50">Docker</strong>: `task docker:build` for
                        container image.
                    </li>
                </ul>
            </article>
        </section>
    </section>
</main>
