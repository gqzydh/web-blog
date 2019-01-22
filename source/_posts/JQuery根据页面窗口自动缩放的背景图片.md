---
title: jQuery根据页面窗口自动缩放的背景图片 
date: 2017-10-17 14:51:01
tags:
- jQuery 
categories: 
- jQuery 
---


## 自动缩放的背景图片
> 首面的展示区域，有一个大背景图片，这个背景图片会根据页面窗口的宽度自动缩放。这里用到是 jQuery 的 Anystretch 插件。

jQuery Anystretch：
[https://github.com/danmillar/jquery-anystretch](https://github.com/danmillar/jquery-anystretch)

- 调用的方法：
```
$('#showcase').anystretch("files/images/show-02.jpg");
```

> 解释：找到页面中带有 #showcase 这个 id 的元素。然后用 Anystretch为这个元素添加一个可以自动缩放的背景图片，图片的位置在 files/images/show-02.jpg。


