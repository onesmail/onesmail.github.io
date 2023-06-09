export default [
    {
        text: 'css',
        items: [],
    },
    {
        text: 'JavaScript',
        items: [],
    },
    {
        text: 'Vue',
        items: [
            {
                text: '笔记',
                collapsed: true,
                items: [
                    {
                        text: 'vite',
                        link: '/guides/web/vue/note/vite',
                    },
                ],
            },
        ],
    },
    {
        text: 'React',
        items: [
            {
                text: '插件',
                collapsed: true,
                items: [
                    {
                        text: 'vue3 html转PDF',
                        link: '/guides/web/framework/vue3topdf',
                    },
                ],
            },
        ],
    },
    {
        text: '组件',
        collapsed: true,
        items: [
            {
                text: '动画',
                link: '/guides/web/framework/animation',
            },
            {
                text: 'pdf',
                link: '/guides/web/framework/pdf',
            },
            {
                text: '弹幕',
                link: '/guides/web/framework/barrage',
            },
            {
                text: '播放器',
                link: '/guides/web/framework/video',
            },
            {
                text: 'office',
                link: '/guides/web/framework/office',
            },
            {
                text: '画图',
                link: '/guides/web/framework/draw',
            },
            {
                text: '二维码',
                link: '/guides/web/framework/qrcode',
            },
            {
                text: '其他',
                link: '/guides/web/framework/other',
            },
        ],
    },
];
