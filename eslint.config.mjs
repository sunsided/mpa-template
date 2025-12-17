// eslint.config.mjs
import js from '@eslint/js'
import svelte from 'eslint-plugin-svelte'
import globals from 'globals'
import ts from 'typescript-eslint'
import svelteConfig from './svelte.config.js'

/** @type {import('eslint').Linter.Config[]} */
export default ts.config(
    // Ignore build and tool/config files to keep projectService away from them
    {
        ignores: [
            '**/node_modules/**',
            '.svelte-kit/**',
            'build/**',
            'dist/**',
            'coverage/**',
            'playwright-report/**',
            'test-results/**',
            '.vitest-cache/**',
            '.task/**',
            '.yarn/**',
            // Temporary: eslint-plugin-svelte parser struggles with Svelte 5 snippet syntax used here
            'src/lib/subway/SubwayMap.svelte',
            // ignore eslint + build configs for now
            'eslint.config.*',
            'svelte.config.*',
            'vite.config.*',
            'playwright.config.*',
            'uno.config.*',
        ],
    },

    // Base configs
    js.configs.recommended,
    ...ts.configs.recommended,
    ...svelte.configs.recommended,

    // Global language options (only globals here)
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },

    // Svelte + TS projectService block (from official docs)
    {
        files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
        languageOptions: {
            parserOptions: {
                projectService: true,
                extraFileExtensions: ['.svelte'],
                parser: ts.parser,
                svelteConfig,
            },
        },
    },

    // Extra TS/JS rules
    {
        files: ['**/*.{ts,js,mjs,cjs}'],
        rules: {
            '@typescript-eslint/no-explicit-any': 'error',
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
        },
    },

    // Same TS rules inside <script lang="ts"> in Svelte files
    {
        files: ['**/*.svelte'],
        rules: {
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
        },
    },

    {
        files: ['**/*.{js,ts,svelte}'],
        rules: {
            'padding-line-between-statements': [
                'error',
                { blankLine: 'always', prev: 'function', next: 'function' },
            ],
        },
    },
    {
        files: [
            'src/lib/GithubRepoList.svelte',
            'src/lib/TurboVision/TuiMenuItem.svelte',
            'src/lib/TurboVision/TuiStatusBar.svelte',
            'src/routes/dos/+page.svelte',
        ],
        rules: {
            'svelte/no-navigation-without-resolve': 'off',
        },
    }
)
