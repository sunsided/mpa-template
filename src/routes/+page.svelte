<script lang="ts">
    /**
     * Projects featured on the landing grid; seeded images give deterministic previews.
     */
    const projects = [
        {
            title: 'Aurora Atlas',
            summary: 'Data-heavy dashboard with resilient offline sync and graceful degradation.',
            tech: ['SvelteKit', 'TypeScript', 'UnoCSS'],
            href: '#aurora',
            seed: 'aurora',
        },
        {
            title: 'Coastline',
            summary: 'Content-first marketing site optimized for prerendering and fast hydration.',
            tech: ['Vite', 'MD Svelte', 'Playwright'],
            href: '#coastline',
            seed: 'coastline',
        },
        {
            title: 'Gridworks',
            summary: 'Composable UI kit with accessibility baked into every primitive.',
            tech: ['ARIA', 'Design Tokens', 'Vitest'],
            href: '#gridworks',
            seed: 'gridworks',
        },
        {
            title: 'Helix',
            summary: 'Realtime collaboration experience tuned for low-latency edge regions.',
            tech: ['WebSockets', 'Edge', 'CI/CD'],
            href: '#helix',
            seed: 'helix',
        },
        {
            title: 'Summit',
            summary: 'Multi-tenant SaaS baseline with opinionated auth and audit trails.',
            tech: ['OAuth', 'Audit Logs', 'Taskfile'],
            href: '#summit',
            seed: 'summit-tech',
        },
        {
            title: 'Voyager',
            summary: 'Explorable knowledge base with semantic search and curated highlights.',
            tech: ['Search', 'Analytics', 'DX'],
            href: '#voyager',
            seed: 'voyager',
        },
    ]

    /**
     * Smoothly scroll to a target element by id; used instead of anchors to satisfy navigation lint rules.
     */
    const scrollToId = (id: string) => {
        if (typeof document === 'undefined') {
            return
        }

        const target = document.getElementById(id)
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
    />
</svelte:head>

<main class="min-h-screen bg-slate-950 text-slate-50">
    <section class="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16">
        <header
            class="grid gap-10 rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-900 via-slate-900/70 to-slate-900/50 p-10 shadow-[0_20px_80px_-40px_rgba(8,47,73,0.8)] md:grid-cols-12"
        >
            <div class="flex flex-col gap-5 md:col-span-7">
                <p class="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200/90">
                    SvelteKit MPA Starter
                </p>
                <h1 class="text-4xl font-semibold leading-tight sm:text-5xl">mpa-template</h1>
                <p class="max-w-2xl text-lg text-slate-200/90">
                    A prerendered, hydrated, test-ready starter with UnoCSS and Playwright baked in.
                    Build fast, ship confidently, and keep the surface area lean.
                </p>
                <div class="flex flex-wrap gap-3">
                    <button
                        class="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-100"
                        type="button"
                        on:click={() => scrollToId('samples')}
                    >
                        View samples
                    </button>
                    <a
                        class="inline-flex items-center gap-2 rounded-full border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-100 transition-transform duration-200 hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-100"
                        href="https://github.com/sunsided/mpa-template"
                    >
                        GitHub repo
                    </a>
                </div>
                <div
                    class="flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-slate-300/80"
                >
                    <span class="rounded-full border border-slate-700 px-3 py-1">Prerendered</span>
                    <span class="rounded-full border border-slate-700 px-3 py-1">Hydrated</span>
                    <span class="rounded-full border border-slate-700 px-3 py-1">UnoCSS</span>
                    <span class="rounded-full border border-slate-700 px-3 py-1">Playwright</span>
                    <span class="rounded-full border border-slate-700 px-3 py-1">Vitest</span>
                </div>
            </div>
            <div class="relative md:col-span-5">
                <div
                    class="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-cyan-500/30 blur-3xl"
                ></div>
                <div
                    class="absolute -bottom-6 -right-4 h-24 w-24 rounded-full bg-indigo-500/30 blur-3xl"
                ></div>
                <div
                    class="overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/60 shadow-lg shadow-slate-950/50"
                >
                    <img
                        alt="Hero visual"
                        class="aspect-[4/5] w-full object-cover"
                        src="https://picsum.photos/800/600"
                        loading="lazy"
                    />
                </div>
            </div>
        </header>

        <section id="samples" class="flex flex-col gap-6">
            <div class="flex flex-col gap-2">
                <p class="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200/90">
                    Sample Gallery
                </p>
                <h2 class="text-3xl font-semibold text-slate-50">
                    Sample builds for reuse, composability, and speed
                </h2>
                <p class="max-w-2xl text-slate-300/90">
                    Each project exercises the template’s MPA, prerendering, and test harness to
                    stay production-ready.
                </p>
            </div>

            <div class="grid auto-rows-[1fr] grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {#each projects as project (project.seed)}
                    <article
                        class="flex flex-col overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/70 shadow-[0_16px_40px_-24px_rgba(8,47,73,0.8)] transition-transform duration-200 hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-cyan-900/40"
                        id={project.href.slice(1)}
                    >
                        <div class="relative">
                            <img
                                alt={`${project.title} preview`}
                                class="h-48 w-full object-cover"
                                src={`https://picsum.photos/seed/${project.seed}/800/600`}
                                loading="lazy"
                            />
                            <span
                                class="absolute left-3 top-3 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase text-cyan-100"
                            >
                                MPA
                            </span>
                        </div>
                        <div class="flex flex-1 flex-col gap-3 p-5">
                            <div class="flex flex-col gap-1">
                                <h3 class="text-xl font-semibold text-slate-50">{project.title}</h3>
                                <p class="text-sm text-slate-300/90">{project.summary}</p>
                            </div>
                            <div class="mt-auto flex flex-wrap gap-2">
                                {#each project.tech as tag (tag)}
                                    <span
                                        class="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-200"
                                    >
                                        {tag}
                                    </span>
                                {/each}
                            </div>
                            <button
                                class="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition-colors hover:text-cyan-100"
                                type="button"
                                on:click={() => scrollToId(project.href.slice(1))}
                            >
                                View notes
                                <span aria-hidden="true">→</span>
                            </button>
                        </div>
                    </article>
                {/each}
            </div>
        </section>
    </section>
</main>
