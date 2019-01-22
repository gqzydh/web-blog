---
title: Js常用小技巧
date: 2017-10-17 14:51:01
tags:
- Javascript
categories: 
- Javascript
---


## 固定的页脚
> 如果你的页面的主体内容很少，那么页脚部分的下面会留出一大片空白，如果你想让页脚永远在浏览窗口的最底部，可以使用下面这段 Javasciprt 代码。
```
 pushtobottom();
        $(window).scroll(pushtobottom).resize(pushtobottom);
        function pushtobottom() {
            var docHeight = $(document.body).height() - $("#push-to-bottom").height();
            if (docHeight  0) {
                    $("#bottom").before('
');
                }
                $("#push-to-bottom").height(diff);
            }
        } 
// Tip #bootom是你想要固定显示在页面窗口底部的元素上的 ID。
```
## JQ生成二维码图片地址
> 可以用手机或平板上的二维码扫描软件扫一下页面上出现的二维码，这样可以直接打开这个页面。
```
var currentURL = window.location.hostname + window.location.pathname;
var qrimgURL = "http://chart.googleapis.com/chart?cht=qr&chl=http://" + currentURL + "&chs=120x120";
var qrimg = ("<img class='img-rounded' src='" + qrimgURL + "' style='float:left'> ");
$(".qrimg").append(qrimg);
// 1.要确定你的网页里加载使用了 jQuery 。2.找到页面中包含 .qrimg 类的元素，然后把二维码图片放在里面。
```
> **解释**：第一行代码可以获得当前页面的地址，第二行使用了 Google Chart API，生成包含当前页面地址内容的二维码，二维码图片的大小是120 x 120 像素。第三行代码就把生成的二维码图片的地址用一个<img>标签表示出来。第四行代码可以把生成的二维码图片放在页面中带有.qrimg类的元素中显示出来。