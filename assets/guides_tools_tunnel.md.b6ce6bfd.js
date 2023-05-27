import{_ as s,c as n,o as a,O as l}from"./chunks/framework.0d343703.js";const d=JSON.parse('{"title":"内网穿透","description":"","frontmatter":{},"headers":[],"relativePath":"guides/tools/tunnel.md","lastUpdated":1685179444000}'),p={name:"guides/tools/tunnel.md"},e=l(`<h1 id="内网穿透" tabindex="-1">内网穿透 <a class="header-anchor" href="#内网穿透" aria-label="Permalink to &quot;内网穿透&quot;">​</a></h1><h2 id="frp" tabindex="-1">frp <a class="header-anchor" href="#frp" aria-label="Permalink to &quot;frp&quot;">​</a></h2><blockquote><p>frp 是一个专注于内网穿透的高性能的反向代理应用，支持 TCP、UDP、HTTP、HTTPS 等多种协议。可以将内网服务以安全、便捷的方式通过具有公网 IP 节点的中转暴露到公网。</p></blockquote><p>github地址 <a href="https://github.com/fatedier/frp" target="_blank" rel="noreferrer">https://github.com/fatedier/frp</a></p><ul><li>nginx配置</li></ul><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">http</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">#http 全局配置</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#server 全局配置</span></span>
<span class="line"><span style="color:#A6ACCD;">    server</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#89DDFF;">    	</span><span style="color:#676E95;font-style:italic;">#server全局配置</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#location配置</span></span>
<span class="line"><span style="color:#A6ACCD;">        location [PATTERN]</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            ...</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><ul><li>frp客户端配置</li></ul><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">http</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;">#http 全局配置</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">#server 全局配置</span></span>
<span class="line"><span style="color:#A6ACCD;">    server</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#89DDFF;">    	</span><span style="color:#676E95;font-style:italic;">#server全局配置</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">#location配置</span></span>
<span class="line"><span style="color:#A6ACCD;">        location [PATTERN]</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">            ...</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div>`,8),t=[e];function o(c,i,r,C,A,y){return a(),n("div",null,t)}const h=s(p,[["render",o]]);export{d as __pageData,h as default};
