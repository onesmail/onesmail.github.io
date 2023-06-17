import mdItCustomAttrs from 'markdown-it-custom-attrs';
import { defineConfig } from 'vitepress';
import { resolve } from 'path';
import nav from './menu/nav';
import sidebar from './menu/sidebar';
import algolia from './algolia';

export default defineConfig({
    title: '我的学习笔记',
    description: '我的学习笔记',
    themeConfig: {
        nav,
        sidebar,
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/onesmail/onesmail.github.io',
            },
        ],
        editLink: {
            pattern: 'https://onesmail.github.io/:path',
            text: '在 github 上编辑此页',
        },
        outlineTitle: '当前页',
        docFooter: {
            prev: '上一页',
            next: '下一页',
        },
        lastUpdatedText: '最后更新',
        // 本地搜索
        // search: {
        //     provider: 'local',
        // },
        algolia,
    },
    lastUpdated: true,
    vite: {
        server: {
            host: true,
            port: 3000,
        },
        resolve: {
            alias: [
                //配置别名
                { find: '@', replacement: resolve(__dirname, '../../src') },
            ],
        },
    },
    markdown: {
        config: md => {
            md.use(mdItCustomAttrs, 'image', {
                'data-fancybox': 'gallery',
            });
        },
    },
    head: [
        [
            'link',
            {
                rel: 'stylesheet',
                href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css',
            },
        ],
        [
            'script',
            {
                src: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js',
            },
        ],
    ],
});
