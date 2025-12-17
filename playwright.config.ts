import { defineConfig } from '@playwright/test'

/** Base URL for the running SvelteKit dev/preview server used by E2E tests. */
const baseURL = process.env.BASE_URL ?? 'http://localhost:5173'

/**
 * Playwright configuration for running the E2E suite locally and in CI.
 */
const config = defineConfig({
    testDir: 'e2e',
    fullyParallel: true,
    use: {
        baseURL,
        trace: 'on-first-retry',
    },
    reporter: process.env.CI
        ? [['list'], ['junit', { outputFile: 'test-results/playwright.xml' }]]
        : 'list',
})

export default config
