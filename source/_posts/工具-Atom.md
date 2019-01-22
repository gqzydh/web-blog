---
title: Atom
date: 2017-10-17 14:51:01
tags:
- Atom
- 前端工具
categories:
- 工具
---

## Atom

https://atom.io/     atom官网
https://atom-china.org/   中文社区
http://wiki.jikexueyuan.com/project/atom/atom-minify.html     基础插件及应用

## Atom插件

### 汉化插件
> Simplified-Chinese-Menu

### Vue语法高亮和片段
> language-vue //为Vue组件文件添加语法高亮和片段。

### markdown预览
> markdown-preview-plus //提供了Markdown文档的实时预览
切换预览： `ctrl-shift-m`
切换数学渲染： `ctrl-shift-x`

### atom-minify(CSS/JS压缩神器)
默认快捷键
```
  ● ctrl-shift-m : //执行压缩,生成一个带 min 后缀的(不想用 min 代表压缩可以进入设置修改)
  ● ctrl-alt-shift-m/ctrl-cmd-shift-m : 全局开启或者关闭保存自动生成压缩软件
  ● ctrl-alt-shift-h /ctrl-cmd-shift-h` : 全局开启或者关闭执行后弹出的消息面板功能
  ● 还有一些比较少用的快捷键,具体看文档

支持的压缩规格
  ● CSS支持四种压缩标准
      ○ YUI Compressor, clean-css, CSSO, Sqwish.
  ● JS支持三种压缩标准
      ○ YUI Compressor, Google Closure Compiler, UglifyJS2.
```
### 插件和配置备份
> sync-settings  //插件和配置备份，防止系统重装后需要重新查找插件，直接自动下载插件并且配置好atom

### 查看代码的颜色
> pigments //编辑器中直接查看代码所代表的颜色，工具虽小但是很实用

### 仿sublime text的缩略代码查看
> minimap //仿sublime text的缩略代码查看，在编辑器右侧显示缩略代码，想找的地方一目了然

### 选择代码自动高亮
> highlight-selected  //选择某段代码自动高亮相同代码

### 快速提升工作效率插件
> Emmet  //HTML开发必备神奇，大大提高你的工作效率
!(页面html开始代码缩写)

```
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

</body>
</html>
```
官方api：http://docs.emmet.io/cheat-sheet/
api表：http://www.w3cplus.com/sites/default/files/baiyaimages/CheatSheet.jpg
官方地址及演示：http://docs.emmet.io/

### 智能代码注释
> docblockr //智能代码注释，让注释更有规范

### 语言格式化
> atom-beautify //支持多种语言格式化，例如：HTML, CSS, JavaScript, PHP, Python, Ruby, Java, C, C++, C#, Objective-C, CoffeeScript, TypeScript, Coldfusion, SQL …

### 自动补全文件路径
> autocomplete-paths  //自动补全文件路径

### ES6代码快捷键
> es6-javascript  //ES6代码快捷键

### 左侧树状图
> file-icons //左侧树状图下，根据文件类型左侧显示不同图标

### 跳转到函数所在位置
> hyperclick  //快速跳转插件，配合js-hyperclick可以跳转到函数所在位置

### bootstrap3 html自动补全插件
> atom-bootstrap3  //bootstrap3 html自动补全插件

### 实时预览功能
> livereload  //配合chrome livereload插件，实现实时预览功能


## 可使用 apm 命令安装需要的包
apm 常用命令
搜索包: apm search color
打开包首页： apm home color-prcker
查看已安装的包： apm list
删除包： apm uninstall color-picker
安装工具栏： apm install tool-bar
安装工具栏小工具： apm install tool-bar-main

## 移除编辑器内的竖线
在 atom 的 stylesheet 里加入样式
```
//移除编辑器内的竖线
atom-text-editor::shadow {  
    .wrap-guide {  
        visibility: hidden;  
    }  
}  
```
