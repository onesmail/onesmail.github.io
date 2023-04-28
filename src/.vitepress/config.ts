import { defineConfig } from 'vitepress';
import nav from './menu/nav';
import sidebar from './menu/sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lastUpdated: true,
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
    },
});
