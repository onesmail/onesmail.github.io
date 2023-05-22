import { defineConfig } from 'vitepress';
import nav from './menu/nav';
import sidebar from './menu/sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    // base: '/src/.vitepress/dist/',
    title: '首页',
    description: '我的学习文档',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
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
    },
    lastUpdated: true,
});
