import devtoolsJson from 'vite-plugin-devtools-json'
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig, searchForWorkspaceRoot } from 'vite'
import path from 'node:path'
import UnoCSS from 'unocss/vite'
import extractorSvelte from '@unocss/extractor-svelte'

export default defineConfig({
    plugins: [
        UnoCSS({
            extractors: [extractorSvelte()],
        }),
        sveltekit(),
        devtoolsJson(),
    ],

    cacheDir: './.vitest-cache',
    test: {
        // Keep Vitest focused on unit tests; Playwright lives in e2e/.
        exclude: [
            '**/node_modules/**',
            '**/.yarn/**',
            '**/.pnp.*',
            '**/.svelte-kit/**',
            '**/dist/**',
            '**/build/**',
            '**/coverage/**',
            '**/e2e/**',
            '**/playwright.config.{js,ts,mjs,cjs}',
        ],
    },
    server: {
        fs: {
            allow: [
                searchForWorkspaceRoot(process.cwd()),
                path.resolve('.yarn'),
                path.resolve('.yarn/__virtual__'),
                path.resolve('.yarn/cache'),
            ],
        },
    },
})
