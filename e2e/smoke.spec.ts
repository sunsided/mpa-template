import { expect, test } from '@playwright/test'

/**
 * Smoke test to confirm the landing page renders when the dev/preview server is running.
 */
test('renders landing page copy', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('heading', { level: 1, name: 'mpa-template' })).toBeVisible()
    await expect(
        page.getByText(
            'A prerendered, hydrated, test-ready starter with UnoCSS and Playwright baked in.'
        )
    ).toBeVisible()

    await expect(page.getByRole('link', { name: 'Stack overview' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Process playbook' })).toBeVisible()

    await expect(page.getByRole('heading', { level: 3, name: 'Aurora Atlas' })).toBeVisible()
    await expect(page.getByRole('heading', { level: 3, name: 'Summit' })).toBeVisible()

    await page.getByRole('link', { name: 'Stack overview' }).click()
    await expect(page).toHaveURL(/\/info/)
    await expect(page.getByRole('heading', { level: 1, name: /overview/i })).toBeVisible()

    await page.getByRole('link', { name: 'Process playbook' }).click()
    await expect(page).toHaveURL(/\/process/)
    await expect(page.getByRole('heading', { level: 1, name: /playbook/i })).toBeVisible()
})
