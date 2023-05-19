import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    // plugins: [vue()],
    // base: '/src/',
    // root: '/src/',
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'), // 设置 `@` 指向 `src` 目录
        },
    },
    server: {
        host: true,
        port: 3000,
    },
    // build: {
    //     assetsDir: '/.vitepress/dist/src1/',
    //     outDir: '/.vitepress/dist/src1/',
    // },
});
