import adapter from '@sveltejs/adapter-static';

const config = {
    kit: {
        adapter: adapter(),
        prerender: {
            entries: ['*']
        }
    }
};

export default config;