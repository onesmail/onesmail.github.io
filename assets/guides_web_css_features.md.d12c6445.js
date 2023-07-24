import{_ as s,o as a,c as e,U as n}from"./chunks/framework.1eef7d9b.js";const h=JSON.parse('{"title":"CSS新特性","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guides/web/css/features.md","filePath":"guides/web/css/features.md","lastUpdated":1687014618000}'),o={name:"guides/web/css/features.md"},t=n(`<h1 id="css新特性" tabindex="-1">CSS新特性 <a class="header-anchor" href="#css新特性" aria-label="Permalink to &quot;CSS新特性&quot;">​</a></h1><h2 id="border-image" tabindex="-1">border-image <a class="header-anchor" href="#border-image" aria-label="Permalink to &quot;border-image&quot;">​</a></h2><blockquote><p>背景上添加一层半透明渐变，以保证文本清晰可见</p></blockquote><ul><li>Demo: <a href="https://codepen.io/t_afif/pen/gOBBeyz" target="_blank" rel="noreferrer">https://codepen.io/t_afif/pen/gOBBeyz</a></li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-image</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">linear-gradient</span><span style="color:#89DDFF;">(#</span><span style="color:#A6ACCD;">0003</span><span style="color:#89DDFF;">,#</span><span style="color:#A6ACCD;">000</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* your gradient here */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">50%</span><span style="color:#A6ACCD;">/</span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* no need to touch this, we always want 50% of slice and border-width */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p><img src="https://raw.githubusercontent.com/onesmail/onesmail.github.io/master/src/assset/images/0.png" alt="0" data-fancybox="gallery"></p>`,6),l=[t];function r(p,c,i,d,y,C){return a(),e("div",null,l)}const u=s(o,[["render",r]]);export{h as __pageData,u as default};
