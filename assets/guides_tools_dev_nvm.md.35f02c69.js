import{_ as s,c as e,o as a,V as t}from"./chunks/framework.c43e8c4a.js";const u=JSON.parse('{"title":"更换NVM源","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guides/tools/dev/nvm.md","lastUpdated":1685787358000}'),n={name:"guides/tools/dev/nvm.md"},o=t(`<h1 id="更换nvm源" tabindex="-1">更换NVM源 <a class="header-anchor" href="#更换nvm源" aria-label="Permalink to &quot;更换NVM源&quot;">​</a></h1><p>Github <a href="https://github.com/coreybutler/nvm-windows" target="_blank" rel="noreferrer">https://github.com/coreybutler/nvm-windows</a></p><ul><li>在<code>nvm</code>安装目录下，找到配置文件<code>settings.txt</code></li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># nvm安装目录</span></span>
<span class="line"><span style="color:#FFCB6B;">C:\\Users\\&lt;用户名&gt;\\AppData\\Roaming\\nvm</span></span></code></pre></div><ul><li>打开<code>settings.txt</code>文件，在末尾换行写入</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">node_mirror:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://npm.taobao.org/mirrors/node/</span></span>
<span class="line"><span style="color:#FFCB6B;">npm_mirror:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://npm.taobao.org/mirrors/npm/</span></span></code></pre></div>`,6),l=[o];function r(p,c,i,d,m,_){return a(),e("div",null,l)}const g=s(n,[["render",r]]);export{u as __pageData,g as default};
