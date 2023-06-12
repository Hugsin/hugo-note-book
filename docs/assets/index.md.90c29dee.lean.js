import{d as e,e as n,u as t,g as a,f as o,n as s,h as i,i as r,j as l,k as c,l as u,m as d,o as p,c as v,p as g,q as f,t as h,s as m,v as b,_ as w,b as y}from"./app.a5d386c5.js";var O;const I="undefined"!=typeof window,x=e=>"function"==typeof e;function k(e){var n;const a="function"==typeof(o=e)?o():t(o);var o;return null!=(n=null==a?void 0:a.$el)?n:a}I&&(null==(O=null==window?void 0:window.navigator)?void 0:O.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);const T=I?window:void 0,_=I?window.document:void 0;function P(e,t=!1){const i=n(),r=()=>i.value=Boolean(e());return r(),function(e,n=!0){a()?o(e):n?e():s(e)}(r,t),i}const C="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},j="__vueuse_ssr_handlers__";C[j]=C[j]||{},C[j];var E,S,Q=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;function A(e,n,t={}){const a=t,{window:o=T}=a,s=((e,n)=>{var t={};for(var a in e)N.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&Q)for(var a of Q(e))n.indexOf(a)<0&&z.call(e,a)&&(t[a]=e[a]);return t})(a,["window"]);let c;const u=P((()=>o&&"MutationObserver"in o)),d=()=>{c&&(c.disconnect(),c=void 0)},p=l((()=>k(e)),(e=>{d(),u.value&&o&&e&&(c=new MutationObserver(n),c.observe(e,s))}),{immediate:!0}),v=()=>{d(),p()};var g;return g=v,i()&&r(g),{isSupported:u,stop:v}}function G(a=null,o={}){var s,i;const{document:r=_}=o,c="function"==typeof(u=null!=(s=null!=a?a:null==r?void 0:r.title)?s:null)?e(u):n(u);var u;const d=a&&x(a);function p(e){if(!("titleTemplate"in o))return e;const n=o.titleTemplate||"%s";return x(n)?n(e):t(n).replace(/%s/g,e)}return l(c,((e,n)=>{e!==n&&r&&(r.title=p("string"==typeof e?e:""))}),{immediate:!0}),o.observe&&!o.titleTemplate&&r&&!d&&A(null==(i=r.head)?void 0:i.querySelector("title"),(()=>{r&&r.title!==c.value&&(c.value=p(r.title))}),{childList:!0}),c}(S=E||(E={})).UP="UP",S.RIGHT="RIGHT",S.DOWN="DOWN",S.LEFT="LEFT",S.NONE="NONE";var B=Object.defineProperty,D=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,U=(e,n,t)=>n in e?B(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;((e,n)=>{for(var t in n||(n={}))H.call(n,t)&&U(e,t,n[t]);if(D)for(var t of D(n))M.call(n,t)&&U(e,t,n[t])})({linear:function(e){return e}},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const L=JSON.parse('{"name":"note-book","description":"笔记本 📚  世界上只有10类人：一类是懂二进制的，一类是不懂的。","author":"Alimales <only_tigerhu@163.com>","homepage":"https://www.tigerzh.com","private":true,"version":"1.0.9","engines":{"node":">=14.0.0"},"scripts":{"dev":"vitepress","build":"vitepress build","serve":"vitepress serve","cz":"git add . && git cz && git push && npm run changelog && npm run crawler","preinstall":"npx only-allow pnpm","changelog":"rm -rf CHANGELOG.md && conventional-changelog -p angular -i CHANGELOG.md -s","crawler":"node crawler.ts","deploy":"npm --no-git-tag-version version patch && node ./bin/deploy"},"dependencies":{"@vue/repl":"^1.3.2","@vueuse/core":"^9.5.0","@withtypes/md5":"^0.1.1","animate.css":"^4.1.1","axios":"^1.1.3","cz-conventional-changelog":"^3.3.0","dayjs":"^1.11.7","dynamics.js":"^1.1.5","gitalk":"^1.8.0","gsap":"^3.9.0","husky":"^7.0.4","localStorage":"^1.0.4","localforage":"^1.10.0","normalize.css":"^8.0.1","shiki":"^0.10.1","three":"^0.138.0","vite-plugin-banner":"^0.7.0","vitepress":"1.0.0-alpha.49","vue":"^3.2.38"},"husky":{"hooks":{"commit-msg":"commitlint -E HUSKY_GIT_PARAMS"}},"devDependencies":{"@types/markdown-it":"^12.2.3","@types/node":"^16.9.1","terser":"^5.14.2"},"pnpm":{"peerDependencyRules":{"ignoreMissing":["@algolia/client-search","react","react-dom","@types/react"]}},"config":{"commitizen":{"path":"node_modules/cz-conventional-changelog"}}}'),$=e=>(m("data-v-a6a0ef1f"),e=e(),b(),e),R={id:"hero"},q={class:"tagline"},F=f(" Bitcoin To The "),J=$((()=>g("span",{class:"accent"},"Moon",-1))),W={class:"actions"},K=["href"],Y=[f(" 立即探索 "),$((()=>g("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",viewBox:"0 0 24 24"},[g("path",{d:"M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"})],-1)))],V=["href"],X=$((()=>g("section",{id:"highlights",class:"vt-box-container"},[g("div",{class:"vt-box"},[g("h2",null,"兴趣是有用的东西"),g("p",null," 如果一样东西，你能感到它想做成什么，并且也知道它可能很重要，但是它的制造商没有做对。技术人员就会产生一种强烈的愿望来修复它，把它做对，并向人们展示它应该是什么样。 ")]),g("div",{class:"vt-box"},[g("h2",null,"不要读其它人读的东西"),g("p",null," 课堂是一个美妙地方，老师拿着薪水在意你的想法，同学也在意大家的想法。日常生活中，这种美妙是不存在的。在工作或者生活中，大多数人并不在意你的想法 ")]),g("div",{class:"vt-box"},[g("h2",null,"QUIC 协议的加密机制"),g("p",null," 谷歌想改进 TCP 协议，但是 TCP 协议是操作系统内核实现的，实际上没法改进。所以，他们选择在 UDP 协议的基础上，重新实现了一个不同的 TCP 协议，叫做 QUIC 协议 ")])],-1))),Z=w(c({__name:"Home",setup(e){const{isDark:a}=u(),{path:s}=d(),i=G();n();const r=(e,n)=>console.log(`%c ${e} %c ${n} %c `,"background:#20232a ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff","background:#61dafb ;padding: 1px; border-radius: 0 3px 3px 0;  color: #20232a; font-weight: bold;","background:transparent");return o((()=>{r(L.name,L.version),r("build time","2023-06-12 14:25:11"),i.value="笔记本"})),(e,n)=>(p(),v("div",null,[g("section",R,[g("h1",q,[F,J,f(h(t(a)?"🌙":"☀️"),1)]),g("p",W,[g("a",{class:"get-started",href:`${t(s)}cryptocurrency/money.html`},Y,8,K),g("a",{class:"setup",href:`${t(s)}note/前端工程化.html`},"开始阅读 📒 ",8,V)])]),X]))}}),[["__scopeId","data-v-a6a0ef1f"]]),ee=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page"},"headers":[],"relativePath":"index.md"}'),ne=Object.assign({name:"index.md"},{setup:e=>(e,n)=>(p(),v("div",null,[y(Z)]))});export{ee as __pageData,ne as default};
