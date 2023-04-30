import web from './sidebars/web';
import server from './sidebars/server';
import snippets from './sidebars/snippets';
import linux from './sidebars/linux';
import tools from './sidebars/tools';
import docs from './sidebars/docs';
import blogs from './sidebars/blogs';

const sidebar = {
    // Web
    '/guides/web/': web,
    // 后端
    '/guides/server/': server,
    // 代码段
    '/guides/snippets/': snippets,
    // Linux
    '/guides/linux/': linux,
    // 开发工具
    '/guides/tools/': tools,
    // 在线文档
    '/guides/docs/': docs,
    // 博客
    '/guides/blogs/': blogs,
};
export default sidebar;
