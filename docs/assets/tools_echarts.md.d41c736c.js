import{_ as s,o as a,c as n,a as l}from"./app.a5d386c5.js";const p=JSON.parse('{"title":"Echarts","description":"","frontmatter":{},"headers":[{"level":2,"title":"快速开始","slug":"快速开始","link":"#快速开始","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[]},{"level":2,"title":"如何设置tooltip在图表内？","slug":"如何设置tooltip在图表内","link":"#如何设置tooltip在图表内","children":[]}],"relativePath":"tools/echarts.md"}'),o={name:"tools/echarts.md"},e=[l('<h1 id="echarts" tabindex="-1">Echarts <a class="header-anchor" href="#echarts" aria-hidden="true">#</a></h1><p>Apache ECharts，一款基于JavaScript的数据可视化图表库，提供直观，生动，可交互，可个性化定制的数据可视化图表。</p><h2 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/apache/echarts" target="_blank" rel="noreferrer">github</a></li><li><a href="https://github.com/apache/echarts/issues" target="_blank" rel="noreferrer">issuse（常见的问题这里都能找到）</a></li><li><a href="https://www.jsdelivr.com/package/npm/echarts" target="_blank" rel="noreferrer">CDN(跳转网页复制最新版本地址)</a></li><li><a href="https://echarts.apache.org/zh/builder.html" target="_blank" rel="noreferrer">定制包(减少包体积方案)</a></li></ul><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">npm install echarts --save</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="faq" tabindex="-1">FAQ <a class="header-anchor" href="#faq" aria-hidden="true">#</a></h2><h2 id="如何设置tooltip在图表内" tabindex="-1">如何设置tooltip在图表内？ <a class="header-anchor" href="#如何设置tooltip在图表内" aria-hidden="true">#</a></h2><p>配置项<code>tooltip.position</code>计算位置。具体实现函数如下：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">//使tooltip在图表内部 不被切割</span></span>\n<span class="line"><span style="color:#FFCB6B;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">point</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">params</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">dom</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">rect</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">size</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 鼠标坐标和提示框位置的参考坐标系是：以外层div的左上角那一点为原点，x轴向右，y轴向下</span></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 提示框位置</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// x坐标位置</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// y坐标位置</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 当前鼠标位置</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pointX</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">point</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pointY</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">point</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 外层div大小</span></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// var viewWidth = size.viewSize[0];</span></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// var viewHeight = size.viewSize[1];</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 提示框大小</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">boxWidth</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">size</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">contentSize</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">boxHeight</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">size</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">contentSize</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// boxWidth &gt; pointX 说明鼠标左边放不下提示框</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">boxWidth</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pointX</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 左边放的下</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pointX</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">boxWidth</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// boxHeight &gt; pointY 说明鼠标上边放不下提示框</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">boxHeight</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pointY</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 上边放得下</span></span>\n<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pointY</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">boxHeight</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> [</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"></span></code></pre></div>',10)];const t=s(o,[["render",function(s,l,p,o,t,c){return a(),n("div",null,e)}]]);export{p as __pageData,t as default};
