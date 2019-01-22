---
title: nodejs 命令
date: 2017-10-12 09:58:03
tags:
- node
categories:
- 命令
---

1. nodejs 升级
2. npm常用命令

## nodejs  ##
node有一个模块叫n，是专门用来管理node.js的版本。
```
npm install-g n   //安装n模块
n stable   //升级node.js到最新稳定版
n v0.10.26   //n后面也可以跟随版本号
```

## npm常用命令 ##
```
npm -v          #显示版本，检查npm 是否正确安装。

npm install express   #安装express模块

npm install -g express  #全局安装express模块

npm list         #列出已安装模块

npm show express     #显示模块详情

npm update        #升级当前目录下的项目的所有模块

npm update express    #升级当前目录下的项目的指定模块

npm update -g express  #升级全局安装的express模块

npm uninstall express  #删除指定的模块
```
