---
title: React 学习笔记
date: 2017-10-17 14:51:01
tags:
- React Native
categories: 
- React Native
---

## 生成 React 组件的方式
`import default export`  es6的语法,导入导出
class方式声明组件

## 向构造react组件模板的函数中传入路由参数
```
import {BrowserRouter, Route, Link} from 'react-router-dom';
注意使用Router作为最外层标签，里面只能有一个一级子节点，用Link来导航 ，to指定路径，Route指定要导航到的组件，这样一个路由的基本使用就成型了
```

## 路由的嵌套和路径中参数传递

> 组件名称总是以大写字母开始。

## 使用 JSX
JSX 编写 DOM 结构，可以用原生的 HTML 标签，也可以直接像普通标签一样引用 React 组件。这两者约定通过大小写来区分，*小写的字符串是 HTML 标签，大写开头的变量是 React 组件*。
