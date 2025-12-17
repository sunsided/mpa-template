import { expect, test } from '@playwright/test'

/**
 * Smoke test to confirm the landing page renders when the dev/preview server is running.
 */
test('renders landing page copy', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { level: 1, name: 'mpa-template' })).toBeVisible()
    await expect(page.getByText('It builds. It prerenders. It hydrates.')).toBeVisible()
})
