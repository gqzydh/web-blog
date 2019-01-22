---
title: JQuery 滚动到页面指定元素位置
date: 2017-10-17 14:51:01
tags:
- JQuery
- 代码
categories: 
- 代码
---


## 1. 滚动到页面指定元素位置 ##
 Js
```
//JQuery  引用
<script src="https://apps.bdimg.com/libs/jquery/1.10.2/jquery.min.js"></script>

<scripttype="text/javascript">
$(document).ready(function() {
    $("#scroll").click(function() {
        $('html, body').animate({
            scrollTop: $("#commentlist").offset().top   //指定id位置
        }, 1000);
    });
});
</script>
```
html + css
```
<p>
上面的内容
</p>
<div id="commentlist">指定的位置</div>
<p>
下面的内容
</p>
<button id="scroll">去指定的位置</button>
<style type="text/css">
#scroll {
    margin-bottom: 60px;
    padding: 5px 10px;
}      
</style>
```
