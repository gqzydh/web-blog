---
title: Html常用技巧 
date: 2018-6-5 9:51:01
tags:
- html 
categories: 
- HTML 
---

## 去掉主页右面的滚动条
```
<body scroll="no">
<body style="overflow-y:hidden">
```

## 不使用页面缓存
即每一次打开页面时不是调用缓存中的东西
```
<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
```

## 忽视右键
```
<body oncontextmenu="return false">
```

## 同一页面内控制不同链接的CSS属性
```
a:active{}
a:link{}
a:visited{}
```

## 电子邮件处理提交表单
```
<form name="form1" method="post" action="http://www.pc123.org/html/web/Dreamweaver/200806/mailto:webmail@pc123.org" enctype="text/plain">
<input type=submit>
</form>
```

## 根据屏幕分辨率调用相对应的页面
onclick=alert("你的显示分辩率为:"+screen.width+"×"+screen.height)
先做好几个页面，比如一个htm1.htm是800*600，一个是htm2.htm是1024*768的
然后在你的入口页面 index.htm 中判断：
```
<script>
function mHref() {
if (screen.width == 1024) location.href = "htm2.htm";
else if (screen.width == 800) location.href = "htm1.htm";
else return(false);
}
</script>

<body onload="mHref();">
```

## 弹出只有状态栏的窗口
```
<html>
<head>
<title>open() close()</title>
<script language="javascript" type="text/javascript">
<!--
function openWin()
{
var newWin=open("","","menubar=1,height=200");
newWin.document.write("<form>");
newWin.document.write("单击以下按钮关闭窗口：<p>");
newWin.document.write("<input type=button value='关闭' onclick=window.close()>");
newWin.document.write("</form>");
}
</script></head>
<body>
<div align=center>
<h2>单击以下按钮显示新窗口...</h2>
<form name=form1>
<input type=button value="新窗口1[只显示地址栏]" onclick=window.open('','new1','location=1')>
<input type=button value="新窗口2[只显示状态栏]" onclick=window.open('','','status=1')>
<input type=button value="新窗口3[只显示工具栏]" onclick=window.open('','new2','toolbar=1,height=200,width=450')>
<input type=button value="新窗口4[只显示菜单栏]" onclick=openWin()>
<input type=button value="新窗口5[一个不少]" onclick=window.open('','new5')>
<input type=button value="新窗口6[光棍但可调大小]" onclick=window.open('http://www.pc123.org/forumdisplay.php?forumid=32#thread','new6','resizable=1')>
</form>
</div>
</body>
```
