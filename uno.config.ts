import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetWind4,
    transformerDirectives,
    transformerVariantGroup,
} from 'unocss'

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
    shortcuts: [
        {
            'btn-primary':
                'rounded-2 border border-transparent px-5 py-2 text-base font-500 bg-#1a1a1a cursor-pointer transition-[border-color] duration-250 hover:border-brand light:bg-#f9f9f9 focus:outline focus:outline-4 focus:outline-#9ecaed',
            'logo-img': 'h-24 p-6 transition-[filter] duration-300 will-change-[filter]',
            'brand-link': 'text-brand hover:text-brand-hover font-500',
            'logo-icon': 'text-[72px] p-4 transition-[filter] duration-300 will-change-[filter]',
        },
    ],
    presets: [
        presetWind4(),
        presetAttributify(),
        presetIcons({
            scale: 1.0,
            extraProperties: { display: 'inline-block', 'vertical-align': 'text-bottom' },
        }),
    ],
    transformers: [transformerDirectives(), transformerVariantGroup()],
    theme: {
        font: {
            fira: '"Fira Code", monospace',
        },
        colors: {
            brand: {
                DEFAULT: '#646cff',
                hover: '#535bf2',
            },
            svelte: '#ff3e00',
        },
    },
})
