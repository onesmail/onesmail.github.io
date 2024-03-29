import blogs from './sidebars/blogs';
import linux from './sidebars/linux';
import server from './sidebars/server';
import snippets from './sidebars/snippets';
import tools from './sidebars/tools';
import web from './sidebars/web';
import projects from './sidebars/projects';
import ai from './sidebars/ai';

const sidebar = {
    // Web
    '/guides/web/': web,
    // 后端
    '/guides/server/': server,
    // 人工智能
    '/guides/ai/': ai,
    // 代码段
    '/guides/snippets/': snippets,
    // Linux
    '/guides/linux/': linux,
    // 开发工具
    '/guides/tools/': tools,
    // 开源项目
    '/guides/projects/': projects,
    // 博客
    '/guides/blogs/': blogs,
};
export default sidebar;
