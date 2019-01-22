---
title: Jquery.flexslider 图片轮播使用
date: 2017-10-17 14:51:01
tags:
- 插件
- 代码
categories: 
- 代码
---


flexslider2官网：http://flexslider.woothemes.com/

Flexslider具有以下特性：

- 支持滑动和淡入淡出效果。
- 支持水平、垂直方向滑动。
- 支持键盘方向键控制。
- 支持触控滑动。
- 支持图文混排，支持各种html元素。
- 自适应屏幕尺寸。
- 可控制滑动单元个数。
- 更多选项设置和回调函数。

HTML

首先在页面head部位载入jquery库文件和Flexslider插件，以及Flexslider所需的基本css样式文件。

然后在body中加入以下HTML代码：

```
<divclass="flexslider">
<ulclass="slides">
<li><imgsrc="images/s1.jpg"/></li>
<li><imgsrc="images/s2.jpg"/></li>
<li><imgsrc="images/s3.jpg"/></li>
<li><imgsrc="images/s4.jpg"/></li>
</ul>
</div>
```
我们使用了.flexslider来包括所有需要滚动的内容元素，然后使用<ul class="slides">这个class非常关键，内部的滚动内容都是针对.slides的，然后在<li>内部加入任意html元素，包括图片和文字。
jQuery

调用Flexslider插件非常简单，使用如下代码：

```
$(function(){
$(".flexslider").flexslider();
});
```
然后预览网页效果，一个内容切换效果就完成了，当然想要更多个性化设置，flexslider提供了丰富的选项配置以及回调函数绝对可以满足大多数开发者需求。
Flexslider选项设置

参数  描述  默认值
animation   动画效果类型，有"fade"：淡入淡出，"slide"：滑动  "fade"
easing  内容切换时缓动效果，需要jquery easing插件支持   "swing"
direction   内容滚动方向，有"horizontal"：水平方向 和"vertical"：垂直方向  "horizontal"
animationLoop   是否循环滚动  true
startAt 初始滑动时的起始位置，定位从第几个开始滑动   0
slideshow   是否自动滑动  true
slideshowSpeed  滑动内容展示时间(ms)    7000
animationSpeed  内容切换时间(ms)  600
initDelay   初始化时延时时间    0
pauseOnHover    鼠标滑向滚动内容时，是否暂停滚动    false
touch   是否支持触摸滑动    true
directionNav    是否显示左右方向箭头按钮    true
keyboard    是否支持键盘方向键操作 true
minItems    一次最少展示滑动内容的单元个数 1
maxItems    一次最多展示滑动内容的单元个数 0
move    一次滑动的单元个数   0
回调函数    start: function(){}, 
before: function(){},
after: function(){}, 
end: function(){}, 
added: function(){}, 
removed: function(){}, 
init: function(){}, -
更多Flexslider相关信息可以访问Flexslider 【1】官网地址：http://www.woothemes.com/flexslider/
flexslider【2】官网：http://flexslider.woothemes.com/