---
title: JS闭包学习
date: 2017-10-17 14:51:01
tags:
- Javascript
categories: 
- Javascript
---


1. Demo_01使用闭包结构能够跟踪动态环境中数据的实时变化
2. Demo_02闭包不会因为外部函数环境的注销而消失，并始终存在


*闭包的概念:闭包就是能够读取其他函数内部变量的函数。*


## Demo_01使用闭包结构能够跟踪动态环境中数据的实时变化 ##
```
<script type="text/javascript">
    function f(){
        var a = 1 ;//定义局部变量a,初始值为1
        var b  = function(){  //定义一个闭包，并赋值给局部变量
            return a;   //返回函数参数x
        }
        a++; //动态更新函数内的局部变量a的值
        return b;
    }
    var c =f(); //调用函数
    alert(c());  //返回值是2，而不是1
</script>
```



## 变量作用域和闭包             


