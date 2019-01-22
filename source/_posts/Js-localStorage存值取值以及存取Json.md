---
title: localStorage存值取值以及存取Json
date: 2017-10-17 14:51:01
tags:
- Javascript
categories: 
- Javascript
---


## localStorage存值取值调用方法
```
localStorage.setItem("key","value");//存储变量名为key，值为value的变量
localStorage.key = "value"//存储变量名为key，值为value的变量
localStorage.getItem("key");//获取存储的变量key的值www.it165.net
localStorage.key;//获取存储的变量key的值
localStorage.removeItem("key")//删除变量名为key的存储变量
```
## 存储JSON对象的方法
```
var students = 
{
    liyang:{name:"liyang",age:17},
    lilei:{name:"lilei",age:18}
}   //要存储的JSON对象

students = JSON.stringify(students);//将JSON对象转化成字符串
localStorage.setItem("students",students);//用localStorage保存转化好的的字符串
//上面即可保存JSON对象，下面在要使用的时候再将存储好的students变量取回
var students = localStorage.getItem("students");//取回students变量
students = JSON.parse(students);//把字符串转换成JSON对象
//以上即可得到存储的students的JSON对象了
```

