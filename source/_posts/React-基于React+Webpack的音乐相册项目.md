---
title: 基于 React + Webpack 的音乐相册项目
date: 2017-10-17 14:51:01
tags:
- React 
- Webpack
categories: 
- React 
---

## 环境搭建
> `generator-react-webpack`  是react的第三方的构建工具，它是需要yeoman的支持。
```
1. npm install -g yo   //
2. npm install -g generator-react-webpack  //
3. yo react-webpack MusicPhoto  //创建项目
```
- 注意
    1. cfg 目录是配置文件所在的目录,重点关注里面 defaults.js 文件.
    2. src 项目的源代码主要在这里面
    3. package.json 用来管理和配置依赖模块

3. 添加 postcss-loader 模块
```
npm i -D postcss-loader  //用来处理 css 的模块
```

4. 添加 json-loader 模块
```
npm install json-loader --save-dev
然后打开 cfg 目录中的 defaults.js 添加如下配置信息：
{
    test: /\.json$/,
    loader: 'json-loader'
},
```

```
// 引用图片 
import yeomanImage from '../images/yeoman.png';
let yeomanImage = require('../images/yeoman.png');
<img src={yeomanImage} alt="Yeoman Generator" />

// 引用样式
import './App.css';
require('styles/App.css');
<div className="notice"> </div>
```