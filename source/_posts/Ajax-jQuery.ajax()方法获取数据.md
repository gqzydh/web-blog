---
title: jQuery.ajax()方法获取数据
date: 2017-10-17 14:51:01
tags:
- Ajax
categories: 
- Ajax
---


```
$.ajax({
 url: "http://www.hzhuti.com", //请求的url地址
 dataType: "json", //返回格式为json
 async: true, //请求是否异步，默认为异步，这也是ajax重要特性
 data: { "id": "value" }, //参数值
 type: "GET", //请求方式
 beforeSend: function() {
  //请求前的处理
 },
 success: function(req) {
  //请求成功时处理
 },
 complete: function() {
  //请求完成的处理
 },
 error: function() {
  //请求出错处理
 }
});
```