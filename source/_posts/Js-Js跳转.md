---
title: Javascript跳转
date: 2017-10-17 14:51:01
tags:
- Javascript
categories: 
- Javascript
---

1. 普通跳转到指定链接
2. 带进度条 后跳转链接

<!-- more -->

## 普通跳转到指定链接 ##      

```
window.location= "http://www.baidu.com";
document.location = "http://www.baidu.com";
```

## 带进度条 后跳转链接 ##
```
<style>
    .load_box{border:1px solid #333;width:400px;height:20px;margin:100px auto;}
    .load{height:20px;width:0%;background-color:blue;}
    #percent{position:absolute;top:110px;left:49%;}
</style>
<body>
    <div name="load_box_n" class="load_box">
        <div id="load_id" class="load">
        </div>
    </div>
    <p id="percent"></p>

<script language="javascript">
    var bar=0;
    count();
    function count(){
        bar=bar+1;
        barp = bar+'%';
        document.getElementById("load_id").style.width=barp;
        document.getElementById("percent").innerText=barp;
        if (bar<100){
            setTimeout("count()",100);
        }else{
            window.location = "http://www.baidu.com/";
        }
    }
</script>
```