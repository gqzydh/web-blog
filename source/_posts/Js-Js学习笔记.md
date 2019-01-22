---
title: Javascript高级技巧学习笔记
date: 2017-10-17 14:51:01
tags:
- Javascript
categories: 
- Javascript
---

1. 数组
2. 条件判断
3. ECMAScript 类型转换


## 数组方法 ##
`split()` //方法用于把一个字符串分割成字符串数组.
`join()`  //方法用于把数组中的所有元素放入一个字符串。
String.split() 执行的操作与 Array.join 执行的操作是相反的。
```
var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
var myArray = myData.split(',');
var myNewString = myArray.join(',');
```
## 输出数组里指定的
```
var arr1 = [[1, 4, 3], [4, 6, 6], [7, 20, 9]]     
$.each(arr1, function(i, item){     
   alert(item[0]);     
});  
```
## push()函数追加数组数据
要在数组末尾添加或删除一个项目，我们可以使用push()和pop()。
unshift()和shift()以完全相同的方式工作，只是它们在数组的开始处尾添加或删除一个项目;
```
var arr = [1,2,3];
arr.push(4);
// 现在arr的值为 [1,2,3,4]
```
```
pop()函数弹出数组最后数据
shift()函数移出数组第一个数据
unshift()函数移入数据到数组第一位
var myArray = [["John", 23], ["cat", 2]];
var re01 = myArray.pop(); //myArray=[["John", 23]\
var re02 = myArray.shift(); //re01 =  ["cat", 2 \
```
```
object.hasOwnProperty(proName)  //确定某个对象是否具有带指定名称的属性。返回true或false
```
random()生成随机小数
 ```
 Math.random()  //用来生成一个在0(包括0)到1(不包括1)之间的随机小数
 Math.floor() //向下取整 获得它最近的整数。
 Math.floor(Math.random() * 20); //获得了一个在0到19之间的整数。
 ```
 ```
 Math.floor(Math.random() * (max - min + 1)) + min //生成的随机数是在两个指定的数之间。
 ```

## 条件判断 ##
`===` and` !== ` — 判断一个值是否严格等于，或不等于另一个。
` ! `  运算符表示, 可以用于对一个表达式取否.
` && ` — 逻辑与; 使得并列两个或者更多的表达式成为可能，只有当这些表达式每一个都返回true时，整个表达式才会返回true.
`||` — 逻辑或; 当两个或者更多表达式当中的任何一个返回 true 则整个表达式将会返回 true.

## ECMAScript 类型转换 ##
3 种主要的原始类型 Boolean 值、数字和字符串都有 toString() 方法，可以把它们的值转换成字符串。

String() 函数：它可把任何值转换成字符串。
>  toString() 方法，即把 12 转换成 "12"，把 true 转换成 "true"，把 false 转换成 "false"，以此类推。

