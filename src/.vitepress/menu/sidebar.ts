import blogs from './sidebars/blogs';
import docs from './sidebars/docs';
import linux from './sidebars/linux';
import server from './sidebars/server';
import snippets from './sidebars/snippets';
import tools from './sidebars/tools';
import web from './sidebars/web';
import projects from './sidebars/projects';
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
    // 开源项目
    '/guides/projects/': projects,
    // 在线文档
    '/guides/docs/': docs,
    // 博客
    '/guides/blogs/': blogs,
};
export default sidebar;
