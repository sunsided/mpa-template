import devtoolsJson from 'vite-plugin-devtools-json';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import path from 'node:path';

export default defineConfig({
    plugins: [sveltekit(), devtoolsJson()],

    server: {
        fs: {
            allow: [
                searchForWorkspaceRoot(process.cwd()),
                path.resolve('.yarn'),
                path.resolve('.yarn/__virtual__'),
                path.resolve('.yarn/cache')
            ]
        }
    }
});
