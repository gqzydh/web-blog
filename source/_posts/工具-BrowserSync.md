---
title: BrowserSync 
date: 2017-10-17 14:51:01
tags:
- BrowserSync
- 前端工具
categories: 
- 工具
---

## BrowserSync 
#### 省时的浏览器同步测试工具
> Browsersync能让浏览器实时、快速响应您的文件更改（html、js、css、sass、less等）并自动刷新页面。更重要的是 Browsersync可以同时在PC、平板、手机等设备下进项调试。您可以想象一下：“假设您的桌子上有pc、ipad、iphone、android等设备，同时打开了您需要调试的页面，当您使用browsersync后，您的任何一次代码保存，以上的设备都会同时显示您的改动”。无论您是前端还是后端工程师，使用它将提高您30%的工作效率。

http://www.browsersync.cn/     BrowserSync官网


## 5分钟快速入门 ##

```
npm install -g browser-sync

也可以//结合gulpjs或gruntjs构建工具来使用，在您需要构建的项目里运行下面的命令:

npm install --save-dev browser-sync

启动 BrowserSync
browser-sync start --server --files "css/*.css"  // --files 路径是相对于运行该命令的项目（目录） 

如果需要监听多个类型的文件,您只需要用逗号隔开。
browser-sync start --server --files "css/*.css, *.html"

Browsersync将创建一个本地服务器并自动打开你的浏览器后访问 http://localhost:3000

```

#### 动态网站
如果您已经有其他本地服务器环境PHP或类似的，您需要使用代理模式。 BrowserSync将通过代理URL(localhost:3000)来查看您的网站。
```
// 主机名可以是ip或域名
browser-sync start --proxy "主机名" "css/*.css"
```
