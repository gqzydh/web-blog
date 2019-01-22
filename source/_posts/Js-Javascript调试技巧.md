---
title: Javascript调试技巧 
date: 2018-03-22 09:51:01
tags:
- Javascript  
categories: 
- Javascript 
---

1. console(控制台)基础用法
2. 技巧 #1: console.trace() 
3. 技巧 #2： console.time() 和 console.timeEnd()     

## console(控制台)基础用法
```
console.log('Hello World!'); //将消息或对象记录到控制台
console.info('Something happened…'); //与 console log 类似
console.warn('Something strange happened…'); //与 console log 类似，但是输出一个警告
console.error('Something horrible happened…'); //与 console log 类似，但是输出一个错误
```

## 技巧 #1: console.trace()     
你通过使用 console.trace() 获取堆栈跟踪和日志数据 ，从而知道日志的提示位置。

## 技巧 #2： console.time() 和 console.timeEnd()    
如果你试图查找一个比较隐匿的性能问题，请使用 console.time() 开始计算时间，然后使用 console.timeEnd() 进行打印。 
```
console.time() 
undefined
console.timeEnd()
VM257:1 default: 9801.23486328125ms
undefined
```
