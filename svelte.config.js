import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-static'

const config = {
    preprocess: vitePreprocess({ script: true }),
    kit: {
        adapter: adapter(),
        prerender: {
            handleHttpError: 'warn',
            entries: ['*'],
        },
    },
}

export default config
