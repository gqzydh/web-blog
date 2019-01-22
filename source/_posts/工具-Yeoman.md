---
title: Yeoman 
date: 2017-10-17 14:51:01
tags:
- Yeoman 
- 笔记
categories: 
- 工具 
---


打个比喻：如果前端项目是工厂的产品的话，yeoman就像工厂的流水线，标准化、傻瓜化、批量化产品生产，生产过程乏味了，但效率提高了。

Yeoman其实是三个工具的集合： YO 、 GRUNT 、 BOWER 
  ● YO ：Yeoman核心工具，项目工程依赖目录和文件生成工具，项目生产环境和编译环境生成工具
  ● GRUNT ：grunt去年很火，前端构建工具，jquery就是使用这个工具打包的
  ● BOWER ：Web开发的包管理器，概念上类似npm，npm专注于nodeJs模块，而bower专注于CSS、JavaScript、图像等前端相关内容的管理

什么场景下使用yeoman？
1.项目目录该如何规划？ 
2.使用什么类库来支撑系统开发？ 
3.生产环境如何搭建（比如很多前端的生产环境是基于php，也有基于NodeJs） 
4.编译环境如何搭建（编译环境其实应该归到生产环境中，但前端很多人使用coffeescript/less/sass等，所以需要编译环境） 
5.单元测试环境如何搭建？ 
6.调试环境如何搭建（本地代理远程assets等） 
7.开发完毕后打包部署如何处理？

安装yeoman
npm install -g yo grunt-cli bower

生成工程目录
创建（或打开）你的工程根目录，比如demo-app，然后运行命令：
yo webapp
webapp是yo自带的工程模版带有： html5 Boilerplate 、jquery、 Modernizr 、 Bootstrap 、 RequireJS 等框架。