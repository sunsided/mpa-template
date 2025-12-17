#!/usr/bin/env node
// Prettier runner that resolves plugins under Yarn PnP.
import { spawnSync } from 'node:child_process'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const prettierBin = require.resolve('prettier/bin/prettier.cjs')
const sveltePlugin = require.resolve('prettier-plugin-svelte')

const args = process.argv.slice(2)
const result = spawnSync(process.execPath, [prettierBin, '--plugin', sveltePlugin, ...args], {
    stdio: 'inherit',
})

process.exit(result.status === null ? 1 : result.status)
