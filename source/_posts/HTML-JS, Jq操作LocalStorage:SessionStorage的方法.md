---
title: HTML5 JS,JQ操作LocalStorage/SessionStorage的方法
date: 2018-6-5 9:51:01
tags:
- HTML5 
categories: 
- HTML5 
---


## LocalStorage

- 是对Cookie的优化
- 没有时间限制的数据存储
- 在隐私模式下不可读取
- 大小限制在500万字符左右，各个浏览器不一致
- 在所有同源窗口中都是共享的
- 本质是在读写文件，数据多的话会比较卡（firefox会一次性将数据导入内存）
- 不能被爬虫爬取，不要用它完全取代URL传参
- IE７及以下不支持外，其他标准浏览器都完全支持

## SessionStorage

- 针对一个 session 的数据存储
- 大小限制在5M左右，各个浏览器不一致
- 仅在当前浏览器窗口关闭前有效（适合会话验证）
- 不在不同的浏览器窗口中共享，即使是同一个页面

## JS下的操作方法

- 获取键值：localStorage.getItem(“key”)
- 设置键值：localStorage.setItem(“key”,”value”)
- 清除键值：localStorage.removeItem(“key”)
- 清除所有键值：localStorage.clear()
- 获取键值2：localStorage.keyName
- 设置键值2：localStorage.keyName = “value”

## JQ下的操作方法（JS方法前加”window.”）

- 获取键值：window.localStorage.getItem(“key”)
- 设置键值：window.localStorage.setItem(“key”,”value”)
- 清除键值：window.localStorage.removeItem(“key”)
- 清除所有键值：window.localStorage.clear()
- 获取键值2：window.localStorage.keyName
- 设置键值2：window.localStorage.keyName = “value”

> 注：typeOf(localStorage.keyName)可与”undefined”进行判断该键值是否已存在
## 示例
```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <script type="text/javascript" charset="utf-8" src="js/jquery.min.js"></script>
    <script type="text/javascript">
        // JS操作部分
        localStorage.JSa="JSA";
        document.write(localStorage.JSa);
        localStorage.setItem('JSb','&nbsp;JSB');
        document.write(localStorage.getItem('JSb'));
        // JQuery操作部分
        $(function(){
            window.localStorage.JQa="JQA";
            $("#a").text(window.localStorage.JQa);
            window.localStorage.setItem('JQb','JQB');
            $("#b").text(window.localStorage.getItem('JQb'));
        });
    </script>
</head>
<body>
    <p id="a"></p>
    <p id="b"></p>
</body>
</html>
```
