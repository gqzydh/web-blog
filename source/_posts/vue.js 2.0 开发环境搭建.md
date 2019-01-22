---
title: Vue.js 2.0 开发环境搭建 
date: 2018-05-12 14:51:01
tags:
- Vue.js
categories: 
- Vue.js
---

### node+webpack环境搭建
```
npm install -g vue //全局安装
vue npm install -g webpack //全局安装webpack
npm install -g vue-cli //全局安装vue-cli //可用淘宝镜像 npm=》cnpm 
npm install -g cnpm --registry=https://registry.npm.taobao.org
vue init webpack my-first-vue-project //生成项目名为my-first-vue-project的模板
cd my-first-vue-project  //进入项目
npm install  //安装依赖 
npm run dev  //启动服务
```
### 安装插件
```
npm install vue-router --save   //安装前端路由
npm install axios  //axios  //请求数据
npm install --save axios vue-axios  //请求数据
npm install iview --save  //安装 iview UI组件

```
Vuex  //Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式
### 装好项目后
```
cd my-first-vue-project //进入目录 
npm install //下载所需要的包 
npm run dev //运行vue，在浏览器可看到初始页面 
npm run build //生产生产环境，会出现dist文件          

```

```
|-- build                                  // webpack配置文件
|-- config                                 // 项目打包路径
|-- static                                 // 静态文件目录
|-- src                                    // 源码目录
|   |-- components                         // 组件
|       |-- common                         // 全局
|           |-- about.vue                  // 关于页面
|           |-- index.vue                  // 入口
|           |-- login.vue                  // 登录页面
|       |-- page                           // 主要页面
|           |-- eharts.vue                 // 百度echarts
|           |-- form.vue                   // 表单
|           |-- rtf.vue                    // 富文本框
|           |-- markdown-viewer.vue        // markdown显示
|           |-- markdown-editor.vue        // markdown编辑器
|           |-- table.vue                  // 表格
|           |-- upload.vue                 // 文件上传
|   |-- App.vue                            // 页面入口
|   |-- main.js                            // 程序入口
|-- .babelrc                               // ES6语法编译配置
|-- .editorconfig                          // 代码编写规格
|-- .gitignore                             // push忽略文件
|-- index.html                             // 入口html页面
|-- package.json                           // 依赖及配置
|-- README.md                              // 简介
```


```

```