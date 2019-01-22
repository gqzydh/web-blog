---
title: css3 动画效果【仓库】
date: 2017-10-17 14:51:01
tags:
- css
categories: 
- css
---

1. animates.css
2. 

## css3常用动画库

- [animates.css](https://daneden.github.io/animate.css/):https://daneden.github.io/animate.css/
> animate.css是一款CSS3的动画效果小类库。包含了60多款不同类型的CSS3动画，包括：晃动，闪动，各种淡出淡出效果，如果你想快速的整合各种CSS3动画特效的话，使用它即可方便的实现。

- [vivify.css](http://vivify.mkcreative.cz):http://vivify.mkcreative.cz 
> Vivify.css是一个带68种动画效果的CSS3动画库。vivify.css动画库和Animate.css类似,为网页元素提供各种CSS3动画效果。



<!-- more -->

``` bash
$ hexo deploy
```

More info: [Deployment](https://hexo.io/docs/deployment.html)


## CSS3效果 - 360度旋转
```
* {
    transition:All 0.4s ease-in-out;
    -webkit-transition:All 0.4s ease-in-out;
    -moz-transition:All 0.4s ease-in-out;
    -o-transition:All 0.4s ease-in-out;
}
*:hover {
    transform:rotate(360deg);
    -webkit-transform:rotate(360deg);
    -moz-transform:rotate(360deg);
    -o-transform:rotate(360deg);
    -ms-transform:rotate(360deg);
}
```
## CSS3效果 - 放大 修改scale(放大的值
```
* {
    transition:All 0.4s ease-in-out;
    -webkit-transition:All 0.4s ease-in-out;
    -moz-transition:All 0.4s ease-in-out;
    -o-transition:All 0.4s ease-in-out;
}
*:hover {
    transform:scale(1.2);
    -webkit-transform:scale(1.2);
    -moz-transform:scale(1.2);
    -o-transform:scale(1.2);
    -ms-transform:scale(1.2);
}
```
## CSS3效果 - 旋转放大 修改rotate(旋转度数) scale(放大值) 
```
* {
    transition:All 0.4s ease-in-out;
    -webkit-transition:All 0.4s ease-in-out;
    -moz-transition:All 0.4s ease-in-out;
    -o-transition:All 0.4s ease-in-out;
}
*:hover {
    transform:rotate(360deg) scale(1.2);
    -webkit-transform:rotate(360deg) scale(1.2);
    -moz-transform:rotate(360deg) scale(1.2);
    -o-transform:rotate(360deg) scale(1.2);
    -ms-transform:rotate(360deg) scale(1.2);
}
```
## CSS3效果 - 上下左右移动 修改translate(x轴,y轴)
```
* {
    transition:All 0.4s ease-in-out;
    -webkit-transition:All 0.4s ease-in-out;
    -moz-transition:All 0.4s ease-in-out;
    -o-transition:All 0.4s ease-in-out;
}
*:hover {
    transform:translate(0,-10px);
    -webkit-transform:translate(0,-10px);
    -moz-transform:translate(0,-10px);
    -o-transform:translate(0,-10px);
    -ms-transform:translate(0,-10px);
}
```