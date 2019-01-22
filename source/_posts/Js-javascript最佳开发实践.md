---
title: javascript最佳开发实践
date: 2017-10-17 14:51:01
tags:
- Javascript
- 读书
categories: 
- Javascript
---

1. 尽可能的保持代码简洁
2. [] 比 new Array(); 更好
3. 尽量不要多次使用 var


<!-- more -->



## 尽可能的保持代码简洁 ##
1. 尽量在开发模式中添加注释和空格，这样保持代码的可读性
2. 在发布到产品环境前请将空格和注释都删除，并且尽量缩写变量和方法名
3. 使用第三方工具帮助你实现压缩 javascript。

## [] 比 new Array(); 更好 ##
建议：
```
var a = ['1A','2B'];
```
避免：
```
var a = new Array();
    a[0] = "1A";
    a[1] = "2B";
```

## 尽量不要多次使用 var ##
建议你使用逗号来避免多余的关键字，
```
var variableOne = ‘string 1’, 
    variableTwo = ‘string 2’, 
    variableThree = ‘string 3’;
```


