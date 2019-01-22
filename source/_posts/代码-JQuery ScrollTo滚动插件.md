---
title: JQuery ScrollTo滚动插件使用
date: 2017-10-17 14:51:01
tags:
- 插件
- 代码
categories: 
- 代码
---


##jQuery ScrollTo滚动插件##
> ScrollTo是一款基于jQuery的滚动插件
ScrollTo是一款基于jQuery的滚动插件，当点击页面的链接时，可以平滑地滚动到页面指定的位置。适用在一些页面内容比较多，页面长度有好几屏的场合

##使用方法##
- 1、准备jQuery库和scrollTo.js插件。
```
<script type="text/javascript" src="js/jquery.js"></script> 
<script type="text/javascript" src="js/jquery.scrollTo.js"></script> 
```
- 2、HTML
```我们用一个页面展示导航和导航对应的每个模块。
<ul class="nav"> 
   <li><a href="#" class="nav_pro">产品展示</a></li> 
   <li><a href="#" class="nav_news">新闻中心</a></li> 
   <li><a href="#" class="nav_ser">服务支持</a></li> 
   <li><a href="#" class="nav_con">联系我们</a></li> 
   <li><a href="#" class="nav_job">人才招聘</a></li> 
</ul> 
<div id="pro" class="box"> 
   <h3>产品展示</h3> 
</div> 
<div id="news" class="box"> 
   <h3>新闻中心</h3> 
</div> 
<div id="ser" class="box"> 
   <h3>服务支持</h3> 
</div> 
<div id="con" class="box"> 
   <h3>联系我们</h3> 
</div> 
<div id="job" class="box"> 
   <h3>人才招聘</h3> 
</div> 
```
- 3. css
```
.nav{width:500px;margin:20px auto;} 
.nav li{float:left; width:100px; height:24px; line-height:24px} 
.box{height:500px} 
.box h3{height:32px; line-height:32px; padding-left:20px; font-size:14px} 
#pro,#ser{background:url(img/bg.jpg)} 
#news,#con{background:url(img/bg2.gif)} 
```
- 4、使用scrollTo.js插件
```
$(function(){ 
    $(".nav_pro").click(function(){ 
        $.scrollTo('#pro',500); 
    }); 
    $(".nav_news").click(function(){ 
        $.scrollTo('#news',800); 
    }); 
    $(".nav_ser").click(function(){ 
        $.scrollTo('#ser',1000); 
    }); 
    $(".nav_con").click(function(){ 
        $.scrollTo('#con',1200); 
    }); 
    $(".nav_job").click(function(){ 
        $.scrollTo('#job',1500); 
    }); 
}); 
```

当点击导航按钮时，触发scrollTo方法，$.scrollTo带有两个参数，第一个是指定要滚动的目的ID，第二个参数是滚动时间间隔，以毫秒为单位。在本例中，只应用了scrollTo的基本方法。其实scrollTo还可以指定横向纵向滚动，传冲效果等，具体可以参照官方网站的例子：http://demos.flesler.com/jquery/scrollTo/
