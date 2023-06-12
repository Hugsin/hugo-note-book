import{_ as s,o as n,c as a,a as l}from"./app.a5d386c5.js";const p=JSON.parse('{"title":"uWSGI指南","description":"","frontmatter":{},"headers":[{"level":2,"title":"为什么需要uWSGI?","slug":"为什么需要uwsgi","link":"#为什么需要uwsgi","children":[]},{"level":2,"title":"uWSGI的安装","slug":"uwsgi的安装","link":"#uwsgi的安装","children":[]},{"level":2,"title":"uWSGI 常用命令","slug":"uwsgi-常用命令","link":"#uwsgi-常用命令","children":[]},{"level":2,"title":"uWSGI常用配置","slug":"uwsgi常用配置","link":"#uwsgi常用配置","children":[]}],"relativePath":"note/uWSGI指南.md"}'),o={name:"note/uWSGI指南.md"},e=[l('<h1 id="uwsgi指南" tabindex="-1">uWSGI指南 <a class="header-anchor" href="#uwsgi指南" aria-hidden="true">#</a></h1><h2 id="为什么需要uwsgi" tabindex="-1">为什么需要uWSGI? <a class="header-anchor" href="#为什么需要uwsgi" aria-hidden="true">#</a></h2><p>在生产环境中部署Python Web项目时，uWSGI负责处理Nginx转发的动态请求，并与我们的Python应用程序沟通，同时将应用程序返回的响应数据传递给Nginx。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">客户端</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">-</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">-</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uWSGI</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">-</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Python应用程序</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Django,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Flask</span><span style="color:#89DDFF;">)</span></span>\n<span class="line"></span></code></pre></div><p>或许你要问了，Nginx本身就是Web服务器，我们为什么还需要uWSGI这个Web服务器呢? Django不是自带runserver服务器?Flask不是自带Werkzeug吗? 答案是Nginx处理静态文件非常优秀，却不能直接与我们的Python Web应用程序进行交互。Django和Flask本身是Web框架，并不是Web服务器，它们自带的runserver和Werkzeug也仅仅用于开发测试环境，生产环境中处理并发的能力太弱。</p><p>为了解决Web 服务器与应用程序之间的交互问题，就出现了Web 服务器与应用程序之间交互的规范。最早出现的是CGI,后来又出现了改进 CGI 性能的FasgCGI，Java 专用的 Servlet 规范。在Python领域，最知名的就是WSGI规范了。</p><p>WSGI 全称是 Web Server Gateway Interface，也就是 Web 服务器网关接口，是一个web服务器（如uWSGI服务器）与web应用（如用Django或Flask框架写的程序）通信的一种规范。WSGI包含了很多自有协议，其中一个是uwsgi，它用于定义传输信息的类型。</p><p>现在你清楚uWSGI, WSGI和uwsgi的区别了吗?</p><ul><li>uWSGI是Python Web服务器，实现了WSGI通信规范和uwsgi协议；</li><li>WSGI全名Web Server Gateway Interface，是一个Web服务器（如uWSGI服务器）与web应用（如用Django或Flask框架写的程序）通信的一种规范；</li><li>uwsgi是WSGI通信规范中的一种自有协议。</li></ul><h2 id="uwsgi的安装" tabindex="-1">uWSGI的安装 <a class="header-anchor" href="#uwsgi的安装" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">pip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uwsgi</span></span>\n<span class="line"></span></code></pre></div><p>为了测试uWSGI安装是否成功，可以编写一个<code>test.py</code>的测试文件，添加如下代码：</p><div class="language-python"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">application</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">env</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">start_response</span><span style="color:#89DDFF;">):</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">start_response</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">200 OK</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">[(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Content-Type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text/html</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)])</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">b</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello World</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>\n<span class="line"></span></code></pre></div><p>然后使用如下命令启动uWSGI Web服务器, 端口8080.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">uwsgi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--http</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">8080</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--wsgi-file</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test.py</span></span>\n<span class="line"></span></code></pre></div><p>如果你已经有了一个现成的Django项目，你可以使用如下命令启动Web服务。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 使用uwsgi命令行启动Django项目，端口8000</span></span>\n<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uwsgi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--http</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">8000</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--module</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">myproject.wsgi</span></span>\n<span class="line"></span></code></pre></div><p>在生产环境中我们通常不会使用命令行启动Python Web项目，而是通常编辑好uWSGI配置文件<code>uwsgi.ini</code>, 然后使用如下命令启动Python Web项目。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 使用uwsgi.ini配置文件启动Django应用程序</span></span>\n<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uwsgi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--ini</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uwsgi.ini</span></span>\n<span class="line"></span></code></pre></div><h2 id="uwsgi-常用命令" tabindex="-1">uWSGI 常用命令 <a class="header-anchor" href="#uwsgi-常用命令" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 启动uWSGI服务器</span></span>\n<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uwsgi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--ini</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uwsgi.ini</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 重启uWSGI服务器</span></span>\n<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uwsgi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 查看所有uWSGI进程</span></span>\n<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ps</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aux</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uwsgi</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 停止所有uWSGI进程</span></span>\n<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pkill</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uwsgi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-9</span></span>\n<span class="line"></span></code></pre></div><h2 id="uwsgi常用配置" tabindex="-1">uWSGI常用配置 <a class="header-anchor" href="#uwsgi常用配置" aria-hidden="true">#</a></h2><p>uWSGI常用配置选项如下所示，稍加修改(项目名，项目根目录)即可部署大部分Python Web项目。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">uwsgi</span><span style="color:#89DDFF;">]</span></span>\n<span class="line"><span style="color:#A6ACCD;">uid</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">www-data</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># Ubuntu系统下默认用户名</span></span>\n<span class="line"><span style="color:#A6ACCD;">gid</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">www-data</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># Ubuntu系统下默认用户组</span></span>\n<span class="line"><span style="color:#A6ACCD;">project</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">mysite1</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 项目名</span></span>\n<span class="line"><span style="color:#FFCB6B;">base</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/user1</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 项目根目录</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#FFCB6B;">home</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> %</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">base</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">/Env/%</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">project</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 设置项目虚拟环境,Docker部署时不需要</span></span>\n<span class="line"><span style="color:#A6ACCD;">chdir</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">base</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">/%</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">project</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 设置工作目录</span></span>\n<span class="line"><span style="color:#A6ACCD;">module</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">project</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">.wsgi:application</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># wsgi文件位置</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">master</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">True</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 主进程</span></span>\n<span class="line"><span style="color:#A6ACCD;">processes</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 同时进行的进程数，一般</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 选项1, 使用unix socket与nginx通信，仅限于uwsgi和nginx在同一主机上情形</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># Nginx配置中uwsgi_pass应指向同一socket文件</span></span>\n<span class="line"><span style="color:#A6ACCD;">socket</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">/run/uwsgi/%</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">project</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">.sock</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 选项2，使用TCP socket与nginx通信</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># Nginx配置中uwsgi_pass应指向uWSGI服务器IP和端口</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># socket=0.0.0.0:8000 或则 socket=:8000</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 选项3，使用http协议与nginx通信</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># Nginx配置中proxy_pass应指向uWSGI服务器一IP和端口</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># http=0.0.0.0:8000 </span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># socket权限设置</span></span>\n<span class="line"><span style="color:#FFCB6B;">chown-socket=%(uid</span><span style="color:#A6ACCD;">):www-data</span></span>\n<span class="line"><span style="color:#FFCB6B;">chmod-socket=664</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 进程文件</span></span>\n<span class="line"><span style="color:#A6ACCD;">pidfile</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">/tmp/%</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">project</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">-master.pid</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 以后台守护进程运行，并将log日志存于temp文件夹。</span></span>\n<span class="line"><span style="color:#A6ACCD;">daemonize</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">/var/log/uwsgi/%</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">project</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">.log</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 服务停止时，自动移除unix socket和pid文件</span></span>\n<span class="line"><span style="color:#A6ACCD;">vacuum</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">True</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 为每个工作进程设置请求数的上限。当处理的请求总数超过这个量，进程回收重启。</span></span>\n<span class="line"><span style="color:#FFCB6B;">max-requests=5000</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 当一个请求花费的时间超过这个时间，那么这个请求都会被丢弃。</span></span>\n<span class="line"><span style="color:#A6ACCD;">harakiri</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">60</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">#当一个请求被harakiri杀掉会，会输出一条日志</span></span>\n<span class="line"><span style="color:#FFCB6B;">harakiri-verbose=</span><span style="color:#82AAFF;">true</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># uWsgi默认的buffersize为4096，如果请求数据超过这个量会报错。这里设置为64k</span></span>\n<span class="line"><span style="color:#FFCB6B;">buffer-size=65536</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 如果http请求体的大小超过指定的限制，打开http body缓冲，这里为64k</span></span>\n<span class="line"><span style="color:#FFCB6B;">post-buffering=65536</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">#开启内存使用情况报告</span></span>\n<span class="line"><span style="color:#FFCB6B;">memory-report=</span><span style="color:#82AAFF;">true</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">#设置平滑的重启（直到处理完接收到的请求）的长等待时间(秒)</span></span>\n<span class="line"><span style="color:#FFCB6B;">reload-mercy=10</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">#设置工作进程使用虚拟内存超过多少MB就回收重启</span></span>\n<span class="line"><span style="color:#FFCB6B;">reload-on-as=1024</span></span>\n<span class="line"></span></code></pre></div><p>注意：uWSGI和Nginx之间有多种通信方式, unix socket，http-socket和http。Nginx的配置必需与uwsgi配置保持一致。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 选项1, 使用unix socket与nginx通信</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 仅限于uwsgi和nginx在同一主机上情形</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># Nginx配置中uwsgi_pass应指向同一socket文件地址</span></span>\n<span class="line"><span style="color:#A6ACCD;">socket</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">/run/uwsgi/%</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">project</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">.sock</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 选项2，使用TCP socket与nginx通信</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># Nginx配置中uwsgi_pass应指向uWSGI服务器IP和端口</span></span>\n<span class="line"><span style="color:#A6ACCD;">socket</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">=0.0.0.0:</span><span style="color:#F78C6C;">8000</span><span style="color:#A6ACCD;"> 或则 socket</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">8000</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 选项3，使用http协议与nginx通信</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># Nginx配置中proxy_pass应指向uWSGI服务器IP和端口</span></span>\n<span class="line"><span style="color:#A6ACCD;">http</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">=0.0.0.0:</span><span style="color:#F78C6C;">8000</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"></span></code></pre></div><p>如果你的nginx与uwsgi在同一台服务器上，优先使用本地机器的unix socket进行通信，这样速度更快。此时nginx的配置文件如下所示：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span><span style="color:#A6ACCD;">     </span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">include</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/nginx/uwsgi_params</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">uwsgi_pass</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">unix:/run/uwsgi/django_test1.sock</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">}</span></span>\n<span class="line"></span></code></pre></div><p>如果nginx与uwsgi不在同一台服务器上，两者使用TCP socket通信，nginx可以使用如下配置：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span><span style="color:#A6ACCD;">     </span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">include</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/nginx/uwsgi_params</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">uwsgi_pass</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">uWSGI_SERVER_IP:</span><span style="color:#F78C6C;">8000</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">}</span></span>\n<span class="line"></span></code></pre></div><p>如果nginx与uwsgi不在同一台服务器上，两者使用http协议进行通信，nginx配置应修改如下：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span><span style="color:#A6ACCD;">     </span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 注意：proxy_pass后面http必不可少哦！</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">proxy_pass</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://uWSGI_SERVER_IP:</span><span style="color:#F78C6C;">8000</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">}</span></span>\n<span class="line"></span></code></pre></div>',32)];const t=s(o,[["render",function(s,l,p,o,t,c){return n(),a("div",null,e)}]]);export{p as __pageData,t as default};
