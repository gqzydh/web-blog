---
title: Javascript面向对象编程
date: 2017-10-17 14:51:01
tags:
- Javascript
categories: 
- Javascript
---


## 封装
- 构造函数
> 为了解决从原型对象生成实例的问题，Javascript提供了一个构造函数。内部使用了this变量,对构造函数使用new运算符，就能生成实例，并且this变量会绑定在实例对象上。
eg:猫的原型对象现在可以这样写
```
function Cat(name,color){
　　　　this.name=name;
　　　　this.color=color;
}
```
生成实例对象
```
var cat1 = new Cat("大毛","黄色");
var cat2 = new Cat("二毛","黑色");
alert(cat1.name); // 大毛
alert(cat1.color); // 黄色
```
