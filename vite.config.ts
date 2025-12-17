import devtoolsJson from 'vite-plugin-devtools-json'
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig, searchForWorkspaceRoot } from 'vite'
import path from 'node:path'

export default defineConfig({
    plugins: [devtoolsJson(), sveltekit()],

    cacheDir: './.vitest-cache',
    test: {
        exclude: ['**/node_modules/**', '**/dist/**', 'e2e/**'],
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
