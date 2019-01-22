---
title: Javascript Dom操作
date: 2017-10-17 14:51:01
tags:
- Javascript
categories: 
- Javascript
---


#### querySelector 与 querySelectorAll

querySelector() 方法返回文档中匹配指定 CSS 选择器的一个元素。
注意： querySelector() 方法仅仅返回匹配指定选择器的第一个元素。如果你需要返回所有的元素，请使用 querySelectorAll() 方法替代。

#### prototype
> 属性使您有能力向对象添加属性和方法。
Javascript规定，每一个构造函数都有一个prototype属性，指向另一个对象。这个对象的所有属性和方法，都会被构造函数的实例继承。
可以把那些不变的属性和方法，直接定义在prototype对象上。

`isPrototypeOf()`这个方法用来判断，某个proptotype对象和某个实例之间的关系
```
alert(Cat.prototype.isPrototypeOf(cat1)); //true
```
`hasOwnProperty()`用来判断某一个属性到底是本地属性，还是继承自prototype对象的属性。
```
alert(cat1.hasOwnProperty("name")); // true
alert(cat1.hasOwnProperty("type")); // false
```
`in`运算符可以用来判断，某个实例是否含有某个属性，不管是不是本地属性。
```
alert("name" in cat1); // true
```
## DOM对象控制HTML元素
```
方法：
getElementsByName()   获取name
getElementsByTagName()  获取元素
getAttribute()   获取元素属性
setAttribute()   设置元素属性
childNodes()    访问字节点
parentNode()   访问父节点
createElement()  创建元素节点
createTextNode   创建文本节点
insertBefore()      插入节点
removeChild()     删除节点
offsetHeight     网页尺寸
scorellHeight    网页尺寸

jd给元素添加id
var oC =document.getElementsByTagName('canvas')[0].setAttribute("id","abcdd");
```
