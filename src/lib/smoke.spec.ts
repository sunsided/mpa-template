import { describe, expect, it } from 'vitest'

/**
 * Sanity check to verify the Vitest harness runs within this repo.
 */
describe('test harness', () => {
    it('runs a trivial assertion', () => {
        expect(1 + 1).toBe(2)
    })
})
