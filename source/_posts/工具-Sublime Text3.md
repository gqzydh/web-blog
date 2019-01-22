---
title: Sublime Text3
date: 2017-10-17 14:51:01
tags:
- Sublime Text3
- 前端工具
categories: 
- 工具
---

Sublime Text3 工具，把在工作中使用到的技巧和遇到的问题，用笔记的方式记录下来, 还收集sublime text3 一些前端常用插件，包管理，快捷键，等相关内容， 进行学习和分享。

## Sublime text 安装，及安装插件 ##
Sublime text 官网：http://www.sublimetext.com/
Sublime text 插件安装: https://packagecontrol.io/

<!-- more -->

- Package Control 安装包管理 
按下Ctrl+Shift+P调出命令面板，输入 Install Package 回车，然后可以在列表中选中要安装的插件。

- Sublime text以模板的方式编程
`shift+ctrl+p` + snippet:Function 
按`Tab`键跳至下一步

- Sublime text查看已安装的插件
	`Ctrl+Shift+P`->`package`
- Sublime text删除/更新插件
`Ctrl+Shift+P` ->`remove` 调出Remove Package选项并回车，选择要删除的插件
更新 upgrade packages

- mac下配置subl启动sublime text 编辑器
```
sudo ln -s /Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl /usr/local/bin/subl
```
```
sudo ln -s /Applications/Sublime\ Text\ 2.app/Contents/SharedSupport/bin/subl /usr/local/bin/subl
```
启动 `subl .`


## Sublime Text 常用操作 ##
`ctrl+p`  -快速查找项目文件

`ctrl+p`+ @  -在css文件夹中快速查找样式/在js文件中快速查找函数

`ctrl+p`+ 文件路径 + @ + 需要查找的样式  -快速查找样式，并进行修改

`ctrl+d` -多行游标， 多选

`ctrl+d` + `ctrl+k` -跳过已选项 +`ctrl+d` 继续选择 

`ctrl+shift+d` -快速复制一行文本

`alt+F3` -指定全选

`ctrl+a` +  `ctrl+shift+l` -多选游标

 `shift`+ 鼠标右键 +拖拽 -多选
 
 `shift+ctrl+p` + set syntax + 要匹配的模式
 
 `shift+ctrl+p` + minimap  -右边缩略显示窗口

sublime text3中闪烁的横线变成竖线：按一下`insert键`
 

## Sublime Text精选插件 ##

  - AutoFileName - 自动补全文件路径	/自动提示路径插件
  - Alignment - 自动代码对齐
  - Bracket Highlighter - 匹配括号，支架荧光笔匹配各种括号
  - docblockr - 注释插件，快速注释
  - CSSComb - CSS属性进行排序的格式化插件
  - ConvertToUTF8 - 转码成utf-8，解决乱码
  - ColorPicker - 调色盘
  - Emmet - 提高书写 HTML/CSS 代码速度, html,css代码补全。
  	>  ! + `ctrl+E` 快速生成 HTML文档结构
	> `ul>.item$*10` `$`-序号， `*10` 成以10
	> `h2{}` `{输出的内容}` -要输出的内容
	> `ctrl+shift+V` -粘贴的同时保持代码的缩进

  - FoldPython -智能折叠和代码导航
  - GBK to UTF8 - 编码从GBK转黄成UTF8，快捷键Ctrl+Shift+C
  - Grunt
  - Pretty JSON - 格式化 JSON
  - Sublime-Minifier - JavaScript和CSS压缩插件
  - SublimeLinter - 代码检查插件
    支持JavaScript、CSS、HTML、Java、PHP、Python、Ruby等十多种开发语言，但前提是需要配置相应语言的环境，要检查JavaScript代码需要安装node.js，检查PHP代码需要安装PHP并配置环境等，及时提示编写代码中存在的不规范和错误的写法。
  - Sublime CodeIntel - 代码提示和补全插件
    支持 JavaScript、Mason、XBL、XUL、RHTML、SCSS、Python、HTML、Ruby、Python3、XML、Sass、XSLT、Django、HTML5、Perl、CSS、Twig、Less、Smarty、Node.js、Tcl、TemplateToolkit 和 PHP 等所有语言
  - SideBarEnhancements - 给侧边栏增加了很多实用功能，提高页面处理速度
  - Side Bar
  - Stylus
  - Tag - Html格式化
  - Prefixr - css自动添加 -webkit 等私有词缀
  - Projects - 项目
  - HTML5 - 支持HTML5  
  - HTML/CSS/JS Prettify

  - Nodejs
  - JS Format - 一个JS代码格式化插件。
  - FileDiffs - 两个文件的差异
  - HTML/CSS/JS Prettify
  - Terminal
- HTML 预处理器/模板
  - Haml  
  - Jade
  - Jade Snippets 
  - Ruby Slim 
  - HTML Mustache
  - Handlebars 
- CSS预处理器
  - Sass - 支持Sass语法
  - SCSS - 支持SCSS语法
  - LESS - 支持Less语法
  - Stylus 
  - Stylus Snippets 
- css框架
  - Bootstrap 3 Snippets 
  - Bootstrap 4 Snippets 
  - Foundation 5 Snippets 
  - Semantic UI -
  - Materialized 
  - Susy 
  - UIkit Autocomplete 
  - PureCSS -
- HTML-CSS-JS 美化
  - HTMLTidy - 格式化HTML代码
  - HTML-CSS-JS-Prettify - 格式化 HTML, CSS 和 JavaScript
- 自动化
  - Grunt 
  - Gulp 
  - Bower 
- JS 构架
  - jQuery - 支持jQuery语法
  - jQuery Mobile Snippets 
  - AngularJS 
  - Backbone.js 
  - Ember.js Snippets 
  - ReactJS 
  - Underscorejs Snippets 
  - Vuejs Snippets 
  - Sublime-KnockoutJS-Snippets 
- 皮肤设置
  – Soda - 常用皮肤


---------------------------------------------------------

## Sublime Text3 Package Control 在菜单栏中不显示 ##

-  *前言*
最近由于在 Sublime Text3 下配置了React 开发环境，最近也更新了Sublime Text3 的版本，由此装上了很多的插件。今天打开Sublime 想要通过 `Package Control` 装个东西，一看 `Package Control` 不见了。

- *折腾*
我想可能是因为更新版本导致的，然后重新装 `Package Control` ,但还是看不见。 折腾了一会，卸载，然后重装 Sublime ，在装`Package Control` 这时候就可以了。但是本身好多插件我也不想重新安装，于是把原有的Package包复制过来，让我郁闷的事情又来了，`Package Control` 又看不见了。复制的时候会有几个同名的文件，我直接替换了。于是我挨个文件排查，终于找到了。

- *解决问题*
在 `C:\Users\*****\AppData\Roaming\Sublime Text 3\Packages\User` 目录下有个 `Preferences.sublime-settings` 文件，内容为

```
{
"color_scheme": "Packages/Babel/Monokai Phoenix.tmTheme",
"font_size": 14,
"ignored_packages":
[
    "Vintage",
    "Package Control"
],
"word_wrap": true
}
```
看到有个 `ignored_packages` 这一项的 `Package Control` 去掉，问题得易解决。

修改后的内容：
```
{
"color_scheme": "Packages/Babel/Monokai Phoenix.tmTheme",
"font_size": 14,
"ignored_packages":
[
    "Vintage"
],
"word_wrap": true
}
```