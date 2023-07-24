import{_ as a,o as s,c as e,U as l}from"./chunks/framework.1eef7d9b.js";const b=JSON.parse('{"title":"终端设置","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guides/tools/os/terminal.md","filePath":"guides/tools/os/terminal.md","lastUpdated":1688205845000}'),o={name:"guides/tools/os/terminal.md"},t=l('<h1 id="终端设置" tabindex="-1">终端设置 <a class="header-anchor" href="#终端设置" aria-label="Permalink to &quot;终端设置&quot;">​</a></h1><h2 id="oh-my-post" tabindex="-1">oh my post <a class="header-anchor" href="#oh-my-post" aria-label="Permalink to &quot;oh my post&quot;">​</a></h2><blockquote><p>Windows Terminal美化</p></blockquote><ul><li>Github：<a href="https://github.com/jandedobbeleer/oh-my-posh" target="_blank" rel="noreferrer">https://github.com/jandedobbeleer/oh-my-posh</a></li><li>Docs：<a href="https://ohmyposh.dev/docs" target="_blank" rel="noreferrer">https://ohmyposh.dev/docs</a></li></ul><h3 id="_1-安装powershell" tabindex="-1">1. 安装PowerShell <a class="header-anchor" href="#_1-安装powershell" aria-label="Permalink to &quot;1. 安装PowerShell&quot;">​</a></h3><p>打开<a href="ms-windows-store://pdp/?ProductId=9MZ1SNWT0N5D"><code>Windows应用商店</code></a>安装 <code>PowerShell</code></p><h3 id="_2-安装oh-my-posh" tabindex="-1">2. 安装Oh-My-Posh <a class="header-anchor" href="#_2-安装oh-my-posh" aria-label="Permalink to &quot;2. 安装Oh-My-Posh&quot;">​</a></h3><p>打开<a href="ms-windows-store://pdp/?ProductId=XP8K0HKJFRXGCK"><code>Windows应用商店</code></a>安装 <code>Oh-My-Posh</code></p><h3 id="_3-安装meslolgm-nf字体" tabindex="-1">3.安装<code>MesloLGM NF</code>字体 <a class="header-anchor" href="#_3-安装meslolgm-nf字体" aria-label="Permalink to &quot;3.安装`MesloLGM NF`字体&quot;">​</a></h3><p><a href="htts://onesmail.github.io/assset/files/Meslo.zip" target="_blank" rel="noreferrer">下载</a>安装<code>MesloLGM NF</code>字体，下载完成后解压，全选右键点击安装即可自动安装</p><p>Github地址：<a href="https://github.com/ryanoasis/nerd-fonts/releases" target="_blank" rel="noreferrer">https://github.com/ryanoasis/nerd-fonts/releases</a></p><h3 id="_4-设置字体" tabindex="-1">4. 设置字体 <a class="header-anchor" href="#_4-设置字体" aria-label="Permalink to &quot;4. 设置字体&quot;">​</a></h3><ul><li>打开<code>Windows Terminal</code></li><li>打开<code>设置</code></li><li>选中<code>PowerShell</code></li><li>打开<code>外观</code>选项</li><li>选择字体<code>MesloLGM NF</code></li><li>保存设置</li></ul><p><img src="https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20230430123753.png" alt="微信截图_20230430123753" data-fancybox="gallery"></p><ul><li>在<code>Windows Terminal</code>中的<code>powershell</code>中输入</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">notepad</span><span style="color:#A6ACCD;"> $profile</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>默认会用记事本打开，第一次会提示显示找不到该文件，点击确定，输入</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">oh-my-posh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pwsh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Invoke-Expression</span></span></code></pre></div><ul><li>查看<code>powershell</code>配置文件路径</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#这个文件会在每次启动终端时调用</span></span>\n<span class="line"><span style="color:#A6ACCD;">$PROFILE</span></span></code></pre></div><ul><li>保存<code>powershell</code>配置文件到如下路径</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">C:\\Users\\&lt;用户&gt;\\Documents\\PowerShell\\Microsoft.PowerShell_profile.ps1</span></span></code></pre></div><p><img src="https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20230430123902.png" alt="微信截图_20230430123902" data-fancybox="gallery"></p></div><ul><li>然后回到<code>Windows terminal</code>新建一个<code>powershell</code>，可以看到已生效的主题</li></ul><p><img src="https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20230430125258.png" alt="微信截图_20230430125258" data-fancybox="gallery"></p><h3 id="_5-修改主题" tabindex="-1">5.修改主题 <a class="header-anchor" href="#_5-修改主题" aria-label="Permalink to &quot;5.修改主题&quot;">​</a></h3><ul><li>使用以下命令，下载并预览所有主题</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Get-PoshThemes</span></span></code></pre></div><p><img src="https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20230430125641.png" alt="微信截图_20230430125641" data-fancybox="gallery"></p><ul><li>打开主题配置文件</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">notepad</span><span style="color:#A6ACCD;"> $profile</span></span></code></pre></div><ul><li>修改如下内容，替换<code>powerline.omp.json</code>，更换主题名称</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">oh-my-posh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pwsh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--config</span><span style="color:#A6ACCD;"> $env</span><span style="color:#C3E88D;">:POSH_THEMES_PATH</span><span style="color:#A6ACCD;">\\p</span><span style="color:#C3E88D;">owerline.omp.json</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Invoke-Expression</span></span></code></pre></div><ul><li>使用以下命令使主题生效</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">.</span><span style="color:#A6ACCD;">$PROFILE</span></span></code></pre></div><h3 id="去掉版权信息" tabindex="-1">去掉版权信息 <a class="header-anchor" href="#去掉版权信息" aria-label="Permalink to &quot;去掉版权信息&quot;">​</a></h3><p>在命令行的末尾添加一个空格和<code>-Nologo</code>参数。</p><p><img src="https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/20230701180058.png" alt="20230701180058" data-fancybox="gallery"></p><h2 id="x-cmd" tabindex="-1">x-cmd <a class="header-anchor" href="#x-cmd" aria-label="Permalink to &quot;x-cmd&quot;">​</a></h2><blockquote><p>Linux 集成式终端命令行工具X 命令的起点</p></blockquote><ul><li>Github：<a href="https://github.com/x-cmd/x-cmd" target="_blank" rel="noreferrer">https://github.com/x-cmd/x-cmd</a></li><li>Home：<a href="https://cn.x-cmd.com/" target="_blank" rel="noreferrer">https://cn.x-cmd.com/</a></li><li>Docs: <a href="https://cn.x-cmd.com/basic/theme" target="_blank" rel="noreferrer">https://cn.x-cmd.com/basic/theme</a></li></ul><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-W5dLz" id="tab-olV7B5H" checked="checked"><label for="tab-olV7B5H">curl</label><input type="radio" name="group-W5dLz" id="tab-tkcwJLv"><label for="tab-tkcwJLv">wget</label></div><div class="blocks"><div class="language-sh active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">eval</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#FFCB6B;">curl</span><span style="color:#C3E88D;"> https://get.x-cmd.com</span><span style="color:#89DDFF;">)&quot;</span></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">eval</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#FFCB6B;">wget</span><span style="color:#C3E88D;"> -O- https://get.x-cmd.com</span><span style="color:#89DDFF;">)&quot;</span></span></code></pre></div></div></div><h3 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h3><ul><li>更改命令行主题</li></ul><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">theme</span></span></code></pre></div><p><img src="https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20230606205003.png" alt="微信截图_20230606205003" data-fancybox="gallery"></p><h2 id="hyper" tabindex="-1">Hyper <a class="header-anchor" href="#hyper" aria-label="Permalink to &quot;Hyper&quot;">​</a></h2><blockquote><p>基于网络技术的终端</p></blockquote><ul><li>Github: <a href="https://github.com/vercel/hyper" target="_blank" rel="noreferrer">https://github.com/vercel/hyper</a></li><li>Docs: <a href="https://hyper.is/" target="_blank" rel="noreferrer">https://hyper.is/</a></li></ul><p><img src="https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20230606205344.png" alt="微信截图_20230606205344" data-fancybox="gallery"></p><h2 id="tabby" tabindex="-1">tabby <a class="header-anchor" href="#tabby" aria-label="Permalink to &quot;tabby&quot;">​</a></h2><blockquote><p>是一个高度可配置的终端模拟器、SSH 和串行客户端，适用于 Windows、macOS 和 Linux。</p></blockquote><ul><li>Github: <a href="https://github.com/Eugeny/tabby" target="_blank" rel="noreferrer">https://github.com/Eugeny/tabby</a></li><li>Home: <a href="https://tabby.sh/" target="_blank" rel="noreferrer">https://tabby.sh/</a></li></ul><p><img src="https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/20230618105431.png" alt="20230618105431" data-fancybox="gallery"></p>',49),n=[t];function r(i,p,c,h,d,u){return s(),e("div",null,n)}const g=a(o,[["render",r]]);export{b as __pageData,g as default};
