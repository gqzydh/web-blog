---
title: 网页加载时共享onload事件
date: 2017-10-17 14:51:01
tags:
- Javascript
categories: 
- Javascript
---


一个网页加载完成后立即执行一个javascript脚本事件，可以采用window.onload。
```
window.onload=firstfunction;
```
如果是同时加载两个或两个以上的函数，采用下列方法：
```
function addloadEvent(func){
  var oldonload = window.onload;
  if(typeof window.onload != 'function'){
    window.onload = func;
  }else{
    window.onload = function(){
      oldonload();
      func();
    }
  }
}
addloadEvent(app);
```
加载多函数的例子：
```
//共享onload事件
function addLoadEvent(func){
    var oldonload=window.onload;
    if(typeof window.onload!='function'){
        window.onload=func;    
    }else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}
//第一个函数
function firstFunction(){
    alert("This is first function!");    
}
//第二个函数
function secondFunction(){
    alert("This is second function!");    
}
//第三个函数
function thirdFunction(){
    alert("This is third function!");    
}
//调用第一个函数
addLoadEvent(firstFunction);
//调用第二个函数
addLoadEvent(secondFunction);
//调用第三个函数
addLoadEvent(thirdFunction);
```