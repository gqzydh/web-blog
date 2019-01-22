---
title: JQuery 示例
date: 2017-10-17 14:51:01
tags:
- JQuery 
- 代码
categories: 
- 代码 
---

1. jQuery判断页面滚动条滚动方向

## jQuery判断页面滚动条滚动方向 ##
```
var before = $(window).scrollTop();
$(window).scroll(function() {
    var after = $(window).scrollTop();
    if (before<after) {
    console.log('上');
    before = after;
    };
    if (before>after) {
    console.log('下');
    before = after;
    };
});
```