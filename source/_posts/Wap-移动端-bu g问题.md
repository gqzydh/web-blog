---
title: 移动端-bug 
date: 2017-10-17 14:51:01
tags:
- 移动端 
categories: 
- 移动端 
---


## 针对安卓 选择框 出现边框问题
```
.userHeight select{
    -webkit-appearance:none;
    -moz-appearance: none;
    appearance: none;
    border: 0 none;
    height: 56px;
}
```
## 修正 IOS 设备的缩放错误
> 在使用 iPad 浏览网页时，从垂直状态转到水平状态时候页面的显示比例会有点问题，下面这小段 Javascript 可以解决这个问题。
```
/* Orientation Scale Bug Fix for iOS
from: http://adactio.com/journal/4470/
-------------------------------------------------------------- */
if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
    var viewportmeta = document.querySelector('meta[name="viewport"]');
    if (viewportmeta) {
        viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
        document.body.addEventListener('gesturestart', function () {
            viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
        }, false);
    }
};
```
## 判断是否为 iPad
```
if((navigator.userAgent.match(/iPad/i)))
{$('body').addClass('ipad')};
```
> 判断一下用户使用的上网设备是否为 iPad ，如果是，那么在页面的 <body> 标签中添加一个.ipad 类。这样我们可以利用这个 iPad 类重新为 iPad 定义一些样式。


