---
title: create-react-app
date: 2018-04-11 14:51:01
tags:
- create-react-app
categories: 
- React Native
---


[create-react-app](https://github.com/facebook/create-react-app)

## 安装
```
npm install -g create-react-app
create-react-app my-app
cd my-app/
npm start   //启动

npm run build  //线上编译命令
```
运行下面两条命令，可以查看线上生产环境的运行效果。
```
npm install -g pushstate-server
pushstate-server build
```
- api开发
create-react-app提供了一个超级简单的方法，只需要在package.json文件中，加一个配置项就可以了。
```
"proxy": "http://localhost:3001/",  //这个选项，只对开发环境有效，线上环境还是保持react应用和api应用同一个端口。
```



## npm
```
npm install --save react-router-dom  //DOM绑定路由器
```

## jspm
```
npm install -g jspm --save-dev  // 
```
