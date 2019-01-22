---
title: 移动端常用代码-框架【仓库】
date: 2017-10-17 14:51:01
tags:
- 移动端
categories: 
- 移动端
---

meta：移动端头部
```meta
<meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
```
### flexible.js手淘框架
> 用来适配移动端的js框架,实现了不同大小的屏幕都适应相同的样式
```
https://github.com/amfe/lib-flexible  //源码里flexible.js的内容复制出来，保存在本地flexible.js的文件中
```
>　注：使用lib-flexible，通常不要写：
```meta
<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
```
### Swiper 触摸滑动插件
> Swiper常用于移动端网站的内容触摸滑动,支持pc鼠标滑动
官网：`http://www.swiper.com.cn/` 
>  swiper常用的参数

```swiper常用的参数
pagination: '.swiper-pagination', // 如果需要分页器
slidesPerView: '3', //显示的slides数量
paginationClickable: true, //点击分页器的指示点时会发生Swiper。
spaceBetween: 8,   //slide之间的距离（单位px）
initialSlide :2,   //设定初始化时slide的索引。            
```
