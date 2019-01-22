---
title: Jade命令 
date: 2017-10-17 14:51:01
tags:
- Jade 
categories: 
- 模板引擎 
---


```
mkdir  新建文件夹

subl .  打开目录/文件

jade index.jade   编译当前的index.jade文件

jade -P -w index.jade  -P:不压缩  -w:开启监视模式

反编译：
npm install html2jade -g
html2jade http://www.imooc.com > imooc.jade
html2jade index.html > index.jade

子级元素必须要缩进。
标签和文本必须要留有空行。

block desc

extends layout   关键字

include head    模块引用

npm install html2jade -g

html2jade 文件.html > 文件名
```
