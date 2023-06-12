import{_ as s,o as a,c as n,a as l}from"./app.a5d386c5.js";const e=JSON.parse('{"title":"ElementUI常见问题","description":"","frontmatter":{},"headers":[{"level":2,"title":"Q:VUE2中如何使用国际化？","slug":"q-vue2中如何使用国际化","link":"#q-vue2中如何使用国际化","children":[]}],"relativePath":"Q&A/ElementUI常见问题.md"}'),p={name:"Q&A/ElementUI常见问题.md"},o=[l('<h1 id="elementui常见问题" tabindex="-1"><a href="https://github.com/ElemeFE/element/issues" target="_blank" rel="noreferrer">ElementUI常见问题</a> <a class="header-anchor" href="#elementui常见问题" aria-hidden="true">#</a></h1><h2 id="q-vue2中如何使用国际化" tabindex="-1">Q:VUE2中如何使用国际化？ <a class="header-anchor" href="#q-vue2中如何使用国际化" aria-hidden="true">#</a></h2><h4 id="在vue-2中使用国际化通常需要以下步骤" tabindex="-1">在Vue 2中使用国际化通常需要以下步骤： <a class="header-anchor" href="#在vue-2中使用国际化通常需要以下步骤" aria-hidden="true">#</a></h4><ol><li><h5 id="安装-vue-i18n-库-可以通过npm或yarn进行安装。" tabindex="-1">安装 <code>vue-i18n</code> 库，可以通过npm或yarn进行安装。 <a class="header-anchor" href="#安装-vue-i18n-库-可以通过npm或yarn进行安装。" aria-hidden="true">#</a></h5></li><li><h5 id="创建一个-i18n-实例-在其中定义翻译消息和语言选项。例如" tabindex="-1">创建一个 <code>i18n</code> 实例，在其中定义翻译消息和语言选项。例如： <a class="header-anchor" href="#创建一个-i18n-实例-在其中定义翻译消息和语言选项。例如" aria-hidden="true">#</a></h5></li></ol><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">import Vue from &#39;vue&#39;;</span></span>\n<span class="line"><span style="color:#A6ACCD;">import VueI18n from &#39;vue-i18n&#39;;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">Vue.use(VueI18n);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">const messages = {</span></span>\n<span class="line"><span style="color:#A6ACCD;">  en: {</span></span>\n<span class="line"><span style="color:#A6ACCD;">    message: {</span></span>\n<span class="line"><span style="color:#A6ACCD;">      hello: &#39;Hello, world!&#39;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    }</span></span>\n<span class="line"><span style="color:#A6ACCD;">  },</span></span>\n<span class="line"><span style="color:#A6ACCD;">  zh: {</span></span>\n<span class="line"><span style="color:#A6ACCD;">    message: {</span></span>\n<span class="line"><span style="color:#A6ACCD;">      hello: &#39;你好，世界！&#39;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    }</span></span>\n<span class="line"><span style="color:#A6ACCD;">  }</span></span>\n<span class="line"><span style="color:#A6ACCD;">};</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">const i18n = new VueI18n({</span></span>\n<span class="line"><span style="color:#A6ACCD;">  locale: &#39;zh&#39;, // 设置默认语言</span></span>\n<span class="line"><span style="color:#A6ACCD;">  fallbackLocale: &#39;en&#39;, // 设置回退语言</span></span>\n<span class="line"><span style="color:#A6ACCD;">  messages // 注册消息</span></span>\n<span class="line"><span style="color:#A6ACCD;">});</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">export default i18n;</span></span>\n<span class="line"></span></code></pre></div><h5 id="在vue组件中使用-t-方法获取翻译消息。例如" tabindex="-1">在Vue组件中使用 <code>$t</code> 方法获取翻译消息。例如： <a class="header-anchor" href="#在vue组件中使用-t-方法获取翻译消息。例如" aria-hidden="true">#</a></h5><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{ $t(&#39;message.hello&#39;) }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div><h5 id="切换语言-可以通过-i18n-locale-属性进行设置-例如" tabindex="-1">切换语言，可以通过 <code>i18n.locale</code> 属性进行设置，例如： <a class="header-anchor" href="#切换语言-可以通过-i18n-locale-属性进行设置-例如" aria-hidden="true">#</a></h5><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>\n<span class="line"><span style="color:#FFCB6B;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">switchLanguage</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">lang</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$i18n</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">locale</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">lang</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>这是一个基本的使用国际化的示例。您可以根据您的需要进行调整和扩展。</p>',10)];const t=s(p,[["render",function(s,l,e,p,t,c){return a(),n("div",null,o)}]]);export{e as __pageData,t as default};
