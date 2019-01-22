---
title: webpack  
date: 2017-10-17 14:51:01
tags:
- webpack 
- 笔记
categories: 
- 工具 
---

## webpack介绍

webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。 https://webpack.js.org

webpack 中文文档 | webpack 中文网: https://www.webpackjs.com/
webpack github仓库: https://github.com/webpack/webpack

安装
```
npm install webpack@next webpack-cli --save-dev
```

处理 css 样式文件
```
npm install css-loader style-loader --save-dev
```

## 模式
// webpack.development.config.js
```
module.exports = {
    mode: 'development' //开发模式
    mode: 'production' //生产模式
}    
```

```
mkdir webpack-demo
cd webpack-demo
npm init
npm install webpack --save-dve

npm install html-webpack-plugin --save-dev

```
