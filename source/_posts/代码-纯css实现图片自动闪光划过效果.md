---
title: 纯css实现图片自动闪光划过效果 
date: 2017-10-17 14:51:01
tags:
- css 
- 代码
categories: 
- 代码 
---


## 纯css实现图片自动闪光划过效果

```
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<style type="text/css">
*, *:before, *:after { -webkit-box-sizing: inherit; -moz-box-sizing: inherit; box-sizing: inherit; }
.logo_flash{ position: relative; margin: 0 auto; transition-duration: .5s; }
.logo_flash{ width: 255px; overflow: hidden; }
.logo_flash:before{
content:"";
position: absolute;
left: -665px;
top: -460px;
width: 200px;
height: 15px;
background-color: rgba(255,255,255,.5);
-webkit-transform: rotate(-45deg);
-moz-transform: rotate(-45deg);
-ms-transform: rotate(-45deg);
-o-transform: rotate(-45deg);
transform: rotate(-45deg);
-webkit-animation: searchLights 1s ease-in 1s infinite;
-o-animation: searchLights 1s ease-in 1s infinite;
animation: searchLights 1s ease-in 1s infinite;
}
@-webkit-keyframes searchLights {
0% { left: -100px; top: 0; }
to { left: 120px; top: 100px; }
}
@-o-keyframes searchLights {
0% { left: -100px; top: 0; }
to { left: 120px; top: 100px; }
}
@-moz-keyframes searchLights {
0% { left: -100px; top: 0; }
to { left: 120px; top: 100px; }
}
@keyframes searchLights {
0% { left: -100px; top: 0; }
to { left: 120px; top: 100px; }
}
</style>
<body>

<div class="logo_flash">
  <a href="https://www.jinshare.cn/"><img src="https://www.jinshare.cn/wp-content/uploads/2016/03/logo.png" width="255" height="75" alt=""></a>
</div>
</body>
</html>
```