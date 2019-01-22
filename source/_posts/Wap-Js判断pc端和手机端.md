---
title: Js判断pc端和手机端 
date: 2017-10-17 14:51:01
tags:
- 移动端 
categories: 
- 移动端 
---


**方法一**
```
<script type="text/javascript">
function browserRedirect() { 
var sUserAgent= navigator.userAgent.toLowerCase(); 
var bIsIpad= sUserAgent.match(/ipad/i) == "ipad"; 
var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os"; 
var bIsMidp= sUserAgent.match(/midp/i) == "midp"; 
var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4"; 
var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb"; 
var bIsAndroid= sUserAgent.match(/android/i) == "android"; 
var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce"; 
var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile"; 
 
if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) { 
window.location.href= 'http://www.baidu.com'; 
} else { 
window.location= 'https://www.taobao.com/'; 
} 
} 
browserRedirect(); 
</script>
```
**方法二**
```
<script type="text/javascript">
            var is_iPd = navigator.userAgent.match(/(iPad|iPod|iPhone)/i) != null; 
            var is_mobi = navigator.userAgent.toLowerCase().match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|win ce)/i) != null; 
            if(is_mobi || is_iPd){ 
                window.location.href="http://m.xiaogouqianqian.com"; 
            } 
</script>
```