---
title: hexo搭建博客笔记
date: 2017-10-12 09:58:03
tags:
- hexo
categories:
- 命令
---


> 生命在于运动 ， 技术在于折腾

<!-- more -->

## Hexo
```
npm install hexo -g  //安装

npm install  //安装依赖库

hexo generate   //生成一套静态网页

hexo server  //运行测试

hexo deploy   //进行部署。
```

## Hexo常用命令 

```
npm install hexo -g   //安装  
npm update hexo -g 	  //升级 
hexo version  	      //查看hexo的版本
hexo init nodejs-hexo   //创建nodejs-hexo 名字的本地文件
hexo init nodejs-hexo    //创建博客
hexo init blog          //初始化，生成文件夹为blog
cd blog  	             //进入blog文件夹
npm install            //安装依赖库
hexo generate           //生成一套静态网页
hexo server         //运行测试,浏览器打开地址，http://localhost:4000/
hexo deploy         //进行部署

hexo new "new article"  //新建文章‘new article’
hexo new page "about"  //新建页面 ‘about’

hexo n "我的博客"` == `hexo new` "我的博客"    //新建文章
hexo g == hexo generate        //生成`
hexo s == hexo server          //启动服务预览
hexo d == hexo deploy          //部署
```
> 新建的笔记文件路径：` source/_posts` 目录下, `new-article.md` 的文件, 打开文件, 文件开头采用的是yaml格式，用三条短横线分隔。下面是文章正文，采用用的是markdown格式。

>> 新建、删除或修改文章后，不需要重启hexo server，刷新一下即可预览。


## Hexo起服务 
`hexo server` #Hexo 会监视文件变动并自动更新，您无须重启服务器。
`hexo server -s` #静态模式
`hexo server -p 5000` #更改端口
`hexo server -i 192.168.1.1` #自定义 IP

`hexo clean` #清除缓存 网页正常情况下可以忽略此条命令
`hexo g` #生成静态网页
`hexo d` #开始部署`

## Hexo写博客常用方法 
- 插入图片
<img src="/images/gq_001.png" width="650" height="250">
- 引用链接
[GitHub](https://github.com/

## Hexo文章属性设置 

设置	- - - -	描述 - - - -	Default
layout	- - - -	Layout - - - -		post或page
title	- - - -	文章的标题 - - - -	 
date	- - - -	创建日期	 - - - -	文件的创建日期
updated		- - - -	修改日期	 - - - -	文件的修改日期
comments	- - - -	是否开启评论 - - - -	true
tags	- - - -	标签	 
categories	- - - -	分类	 
permalink	- - - -	url中的名字 - - - -	文件名

## Hexo摘要 
```
这里是文章的摘要部分<!--more-->后面才是文章的正文内容

<blockquote>在 markdown 文件顶部添加 description 属性，可以在首页文章列表显示文章的描述，如果没有这个属性，会自动截取文章内容作为文章的描述。</blockquote>
```

## hexo更换皮肤
1. [hexo官网选择皮肤:](https://hexo.io/themes/)  `git clone` 
2. 放到themes目录下
3. 编辑文件_config.yml，找到theme一行，改成 theme: pacman
4. 本地启动hexo服务器，打开浏览器 http://localhost:4000

## 找不到git部署 
ERROR Deployer not found: git
解决方法：npm install hexo-deployer-git --save 

## Hexo不常用的命令 
---
## render

渲染文件： `hexo render <file1> [file2] ... `
参数 `-o(--output)` 设置输出路径

```
hexo render path1/xxx.md -o path2/xxx.yyy
```

> hexo-render命令其实就是把我们的文章通过模板渲染成html代码，当然渲染完成后是可以输出到另一个文件的

## list

列出网站资料：` hexo list <type> `

```
hexo list page
```

## Hexo草稿 
草稿相当于很多博客都有的“私密文章”功能。
```
$ hexo new draft "new draft"
```
草稿会在`source/_drafts`目录下生成一个`new-draft.md`文件。但是这个文件不被显示在页面上，链接也访问不到。也就是说如果你想把某一篇文章移除显示，又不舍得删除，可以把它移动到`_drafts`目录之中。

如果你希望强行预览草稿，更改配置文件：
```
render_drafts: true
```
或者，如下方式启动预览：
```
$ hexo server --drafts
```
下面这条命令可以把草稿变成文章，或者页面：
```
$ hexo publish [layout] <filename>
```
## github上hexo搭建博客-绑定域名
这里选择阿里云域名
1. 登陆阿里云控制台，选择域名，选择要绑定的域名，点解析
2. 解析页，添加记录，
    - 记录类型 `A`
    - 主机记录 `WWW`, `@`
    - 记录值  填写对应的github的ip地址  
3. Github的ip地址获取
    - clone 你创建的仓库, 用户名.github.io
    - 输入 `ping  www.用户名.github.io`
    - `Ping sni.github.map.fastly.net [151.202.68.147]`, IP地址
4. 在source目录下创建这个`CNAME`文件，输入域名
5. 提交代码，点击域名，一般很快就生效。

## 标签插件

Hexo 的标签插件是独立于 Markdown 的渲染引擎的，标签插件采用独有的方式渲染,虽然有的时候可能和 Markdown 渲染效果一样，在这里我就不说 Markdown 的渲染方式了，如果想要了解 Markdown 的请参考这篇文章 [MarkDown语法指南](http://gq1986.com/2017/07/07/Markdown%E8%AF%AD%E6%B3%95%E6%8C%87%E5%8D%97/)

## 引用块 

-在文章中插入引言，可包含作者、来源和标题。
- 语法格式
```
{% blockquote [author[, source]] [link] [source_link_title] %}
content
{% endblockquote %}
```

- 例子1: 引用书上的句子 
```
{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}
```

- 例子2: 引用Twitter 
```
{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}
```

- 例子3: 引用网络上的文章 
```
{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}
```

## 代码块 ##

- 语法格式
```
{% codeblock [title] [lang:language] [url] [link text] %}
code snippet
{% endcodeblock %}
```

- 例子1: 普通的代码块 
```
{% codeblock %}
alert('Hello World!');
{% endcodeblock %}
```

- 例子2: 指定语言 
```
{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}
```

- 例子3: 附加说明和网址 
```
{% codeblock _.compact http://underscorejs.org/#compact Underscore.js %}
_.compact([0, 1, false, 2, '', 3]);
=> [1, 2, 3]
{% endcodeblock %}
```

## iframe ##
在文章中插入 	`iframe`
```
{% iframe url [width] [height] %} 	//语法
{% iframe https://www.xgqq.com/ 960 500 %}  //实例
```

## Image ##
在文章中插入指定大小的图片。
```
{% img [class names] /path/to/image [width] [height] [title text [alt text]] %} 	//语法
{% img [class names] /yn.jpeg [300] [height] [云南风景 [风景图片]] %} 	//实例
```

## Link ##
在文章中插入链接，并自动给外部链接添加 `target="_blank"` 属性。
```
{% link 百度一下 http://www.baidu.com [external] [超链接] %}	//语法
{% link 百度一下 http://www.baidu.com [这是什么] [超链接] %}	//实例
```

## include Code ##
插入 source 文件夹内的代码文件。
```
{% include_code [title] [lang:language] path/to/file %}	 //语法
{% include_code appjs lang:javascript /app.js %}	//实例
```

## Youtube ##
在文章中插入 Youtube 视频。
```
{% youtube video_id %} 	//语法
{% youtube ICkxRE_GdgI %}  //id在Url中
```

## 引用文章 ##
引用其他文章的链接。
```
{% post_path slug %}
{% post_link slug [title] %}
```

## 引用资源 ##
引用文章的资源。
```
{% asset_path slug %}
{% asset_img slug [title] %}
{% asset_link slug [title] %}
```

## RSS不显示 ##
- 安装RSS插件
```
npm install hexo-generator-feed --save  //安装RSS插件
```
- 开启RSS功能
编辑hexo/_config.yml
```
rss: /atom.xml #rss地址   //默认即可
```

## 开启评论 ##
1.我使用多说代替自带的评论，在[多说](http://duoshuo.com) 网站注册 > 后台管理 > 添加新站点 > 工具 === 复制通用代码 里面有 short_name

在根目录 `_config.yml` 添加一行 `disqus_shortname: jslite` 是在多说注册时产生的
复制到 `themes\landscape\layout\_partial\article.ejs`把

```
<% if (!index && post.comments && config.disqus_shortname){ %>
<section id="comments">
<div id="disqus_thread">
  <noscript>Please enable JavaScript to view the <a href="//disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
</div>
</section>
<% } %>
```
改为
```
<% if (!index && post.comments && config.disqus_shortname){ %>
  <section id="comments">
    <!-- 多说评论框 start -->
    <div class="ds-thread" data-thread-key="<%= post.layout %>-<%= post.slug %>" data-title="<%= post.title %>" data-url="<%= page.permalink %>"></div>
    <!-- 多说评论框 end -->
    <!-- 多说公共JS代码 start (一个网页只需插入一次) -->
    <script type="text/javascript">
    var duoshuoQuery = {short_name:'<%= config.disqus_shortname %>'};
      (function() {
        var ds = document.createElement('script');
        ds.type = 'text/javascript';ds.async = true;
        ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
        ds.charset = 'UTF-8';
        (document.getElementsByTagName('head')[0] 
         || document.getElementsByTagName('body')[0]).appendChild(ds);
      })();
      </script>
    <!-- 多说公共JS代码 end -->
  </section>
<% } %>
```

## 其他 ##
- layout
如果你修改了layout，在`scaffolds`文件夹里一定要有名字对应的模版文件，否则会采用默认模版。

## 参考资料 ##

1. [Hexo官方网站](https://hexo.io/) : https://hexo.io/




