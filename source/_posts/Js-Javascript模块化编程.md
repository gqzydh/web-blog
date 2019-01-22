---
title: Javascript模块化编程
date: 2017-10-17 14:51:01
tags:
- Javascript
categories: 
- Javascript
---

### js模块化-立即执行函数写法
```
var module1 = (function(){
　　　　var _count = 0;
　　　　var m1 = function(){
　　　　　　//...
　　　　};
　　　　var m2 = function(){
　　　　　　//...
　　　　};
　　　　return {
　　　　　　m1 : m1,
　　　　　　m2 : m2
　　　　};
　　})();
```
<!-- more -->

### js模块化-放大模式
```
var module1 = (function (mod){
　　　　mod.m3 = function () {
　　　　　　//...
　　　　};
　　　　return mod;
})(module1);
```
### js模块化-宽放大模式
```
var module1 = ( function (mod){
　　　　//...
　　　　return mod;
})(window.module1 || {});
```
### js模块化-输入全局变量
```
var module1 = (function ($, YAHOO) {
　　　　//...
})(jQuery, YAHOO);
```
> 上面的module1模块需要使用jQuery库和YUI库，就把这两个库（其实是两个模块）当作参数输入module1。这样做除了保证模块的独立性，还使得模块之间的依赖关系变得明显

## require.js的用法
1. 实现js文件的异步加载，避免网页失去响应；
2. 管理模块之间的依赖性，便于代码的编写和维护。

```require.js
　<script src="js/require.js" defer async="true" ></script>  //async/defer属性表明这个文件需要异步加载
```
加载main.js 代码
```
<script src="js/require.js" data-main="js/main"></script> //data-main属性的作用是，指定网页程序的主模块。
```
- 主模块依赖于其他模块，这时就要使用AMD规范定义的的require()函数。
```
// main.js
　　require(['moduleA', 'moduleB', 'moduleC'], function (moduleA, moduleB, moduleC){
　　　　// 这里写代码
　　});
```
> require()函数接受两个参数。**01**参数是一个数组，表示所依赖的模块，['moduleA', 'moduleB', 'moduleC']，即主模块依赖这三个模块；**02**参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。加载的模块会以参数形式传入该函数，从而在回调函数内部就可以使用这些模块。

- eg:主模块依赖jquery、underscore和backbone这三个模块，main.js就可以这样写：
```
　　require(['jquery', 'underscore', 'backbone'], function ($, _, Backbone){
　　　　// 这里写代码
　　});
```
> require.js会先加载jQuery、underscore和backbone，然后再运行回调函数。主模块的代码就写在回调函数中。

## 模块的加载
> require.config()方法，可以对模块的加载行为进行自定义。require.config()就写在主模块（main.js）的头部。参数就是一个对象，这个对象的paths属性指定各个模块的加载路径。

1. 比如js/lib目录，有两种写法。一种是逐一指定路径。
```
require.config({
　　　　paths: {
　　　　　　"jquery": "lib/jquery.min",
　　　　　　"underscore": "lib/underscore.min",
　　　　　　"backbone": "lib/backbone.min"
　　　　}
　　});
```
2. 直接改变基目录
```
　require.config({
　　　　baseUrl: "js/lib",
　　　　paths: {
　　　　　　"jquery": "jquery.min",
　　　　　　"underscore": "underscore.min",
　　　　　　"backbone": "backbone.min"
　　　　}
　　});
```
3. 如果模块在另一台主机上，也可以直接指定它的网址
```
require.config({
　　　　paths: {
　　　　　　"jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min"
　　　　}
});
```
## AMD模块的写法
> 模块必须采用特定的define()函数来定义。如果一个模块不依赖其他模块，那么可以直接定义在define()函数之中。

- 假定现在有一个math.js文件，它定义了一个math模块。
```
// math.js
define(function(){
    var add = function(x,y){
        return x+y;
    };
    return{
        add: add
    };
})
```
加载方法如下：
```
require(['math'], function(math){
   alert(math.add(1,1)); 
});
```
- 如果这个模块还依赖其他模块，必须是一个数组，指明该模块的依赖性。
```
define(['myLib'], function(myLib){
　　　　function foo(){
　　　　　　myLib.doSomething();
　　　　}
　　　　return {
　　　　　　foo : foo
　　　　};
});
```
> 当require()函数加载上面这个模块的时候，就会先加载myLib.js文件。

## 加载非规范的模块
> require()加载之前，要先用require.config()方法，定义它们的一些特征。

eg: underscore和backbone这两个库
```
require.config({
    shim:{
        'underscore':{
            exports: '_'
        },
        'backbone':{
            deps:['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
}) //shim属性，专门用来配置不兼容的模块
```
>（1）exports值（输出的变量名），表明这个模块外部调用时的名称；（2）deps数组，表明该模块的依赖性。

## require.js插件
> require.js还提供一系列插件，实现一些特定的功能。
- domready插件，可以让回调函数在页面DOM结构加载完成后再运行。
```
require(['domready!'], function (doc){
　　// called once the DOM is ready
});
```
- text和image插件，则是允许require.js加载文本和图片文件。
```
define([
　　　　'text!review.txt',
　　　　'image!cat.jpg'
　　　　],
　　　　function(review,cat){
　　　　　　console.log(review);
　　　　　　document.body.appendChild(cat);
　　　　}
);
```
类似的插件还有json和mdown，用于加载json文件和markdown文件。