import{_ as s,c as a,o as t,V as e}from"./chunks/framework.c43e8c4a.js";const g=JSON.parse('{"title":"FastGithub","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guides/tools/os/fastgithub.md","lastUpdated":1685886005000}'),l={name:"guides/tools/os/fastgithub.md"},o=e('<h1 id="fastgithub" tabindex="-1">FastGithub <a class="header-anchor" href="#fastgithub" aria-label="Permalink to &quot;FastGithub&quot;">​</a></h1><blockquote><p>github加速神器，解决github打不开、用户头像无法加载、releases无法上传下载、git-clone、git-pull、git-push失败等问题</p></blockquote><p>下载地址：<a href="https://github.com/dotnetcore/FastGithub/releases" target="_blank" rel="noreferrer">https://github.com/dotnetcore/FastGithub/releases</a></p><h2 id="windows-x64服务" tabindex="-1">windows-x64服务 <a class="header-anchor" href="#windows-x64服务" aria-label="Permalink to &quot;windows-x64服务&quot;">​</a></h2><ul><li>以windows服务安装并启动</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">fastgithub.exe</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span></span></code></pre></div><ul><li>以windows服务卸载并删除</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">fastgithub.exe</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span></span></code></pre></div><h2 id="linux-x64服务" tabindex="-1">linux-x64服务 <a class="header-anchor" href="#linux-x64服务" aria-label="Permalink to &quot;linux-x64服务&quot;">​</a></h2><ul><li>以systemd服务安装并启动</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./fastgithub</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">star</span></span></code></pre></div><ul><li>以systemd服务卸载并删除</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./fastgithub</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span></span></code></pre></div><blockquote><p>设置系统自动代理为<code>http://127.0.0.1:38457</code>，或手动代理<code>http/https为127.0.0.1:38457</code></p></blockquote>',14),n=[o];function i(p,c,r,h,u,d){return t(),a("div",null,n)}const C=s(l,[["render",i]]);export{g as __pageData,C as default};