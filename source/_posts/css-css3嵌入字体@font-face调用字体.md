---
title: CSS3嵌入字体@font-face调用字体 
date: 2017-10-17 14:51:01
tags:
- css 
categories: 
- css 
---

@font-face可以实现从服务器端加载字体，所有浏览器中使用的字体就可以不受本地字体的限制。@font-face真的不是什么新鲜玩意，早在2001年时就被提出来，只不过近两年才被各浏览器广泛支持。而且各浏览器支持的字体文件格式也可能不同，一般来说如下四种格式可覆盖所有浏览器。

<!-- more -->

eot：该格式仅在老版本的IE中使用

ttf：(TrueTypeFont)是Apple公司和Microsoft公司共同推出的字体文件格式,随着windows的流行，已经变成最常用的一种字体文件表示方式，支持的浏览器很多。

svg：(Scalable Vector Graphics)该字体可能最早在IOS设备上被支持，没有ttf格式使用的广泛。

woff：（Web Open Font Format）是一种网页所采用的字体格式标准。此字体格式发展于2009年，现在正由W3C标准化，以求成为web字体的统一标准。

如何使用自定义字体？

第一步，在CSS中引入字体并给名字取一个合适的名字，如下
```
@font-face {
/* font-test*/
font-family: tonjay;
src:url('font/tonjay-web.woff'),
url('font/tonjay-web.ttf'),
url('font/tonjay-web.eot'); /* IE9 */
}
```
font-family定义字体的名字，接下来的src是加载字体文件的位置，之所有有多个url就是因为浏览器兼容问题。

第二步，使用刚刚定义的字体，如下
```
div {
font-family: tonjay;
}
```
附@font-face的浏览器字体兼容性
```
Webkit/Safari(3.2+)：TrueType/OpenType TT (.ttf) 、OpenType PS (.otf)；

Opera (10+)： TrueType/OpenType TT (.ttf) 、 OpenType PS (.otf) 、 SVG (.svg)；

Internet Explorer： 自ie4开始，支持EOT格式的字体文件；ie9支持WOFF；

Firefox(3.5+)： TrueType/OpenType TT (.ttf)、 OpenType PS (.otf)、 WOFF (since Firefox 3.6)

Google Chrome：TrueType/OpenType TT (.ttf)、OpenType PS (.otf)、WOFF since version 6
```

由上面可以得出：.eot + .ttf /.otf + svg + woff = 所有浏览器的完美支持。



