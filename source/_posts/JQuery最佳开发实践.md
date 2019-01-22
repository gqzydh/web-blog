---
title: jquery最佳开发实践 
date: 2017-10-17 14:51:01
tags:
- jQuery 
- 读书
categories: 
- jQuery 
---

1. 缓存变量,避免全局变量
2. 使用匈牙利命名法
3. 使用 var 链（单 var 模式）
4. 请使用 ‘on’
5. 精简 javascript
6. 链式操作
7. 维持代码的可读性
8. 选择短路求值
9. 选择捷径
10. 熟记技巧
11. 使用子查询缓存的父元素
12. 避免通用选择符
13. 避免隐式通用选择符


## 缓存变量 ##
DOM 遍历是昂贵的，所以尽量将会重用的元素缓存。
```
// 糟糕   
h = $('#element').height();
$('#element').css('height', h-20);
// 糟糕   jQuery 与 javascript 一样，一般来说，最好确保你的变量在函数作用域内。
$element = $('#element');
h = $element.height();
$element.css('height', h-20);

// 建议   
var $element = $('#element');
var h = $element.height();
$element.css('height', h-20);
```

## 使用匈牙利命名法 ##
在变量前加 $ 前缀，便于识别出 jQuery 对象。
```
// 糟糕   
var first = $('#first');
var second = $('#second');
var value = $first.val();

// 建议 - 在 jQuery 对象前加 $ 前缀  
var $first = $('#first');
var $second = $('#second'),
var value = $first.val();
```

## 使用 var 链（单 var 模式）##
将多条`var` 语句合并为一条语句，我建议将未赋值的变量放到后面。
```
var 
  $first = $('#first'),
  $second = $('#second'),
  value = $first.val(),
  k = 3,
  cookiestring = 'SOMECOOKIESPLEASE',
  i,
  j,
  myArray = {};
```

## 请使用 ‘on’ ##
在新版 jQuery 中，更短的 on("click") 用来取代类似 click() 这样的函数。 在之前的版本中 on() 就是 bind()。 自从 jQuery 1.7 版本后，on() 附加事件处理程序的首选方法。 然而，出于一致性考虑，你可以简单的全部使用 on() 方法。
```
// 糟糕   
$first.click(function(){
    $first.css('border','1px solid red');
    $first.css('color','blue');
});

$first.hover(function(){
    $first.css('border','1px solid red');
})

// 建议
$first.on('click',function(){
    $first.css('border','1px solid red');
    $first.css('color','blue');
})

$first.on('hover',function(){
    $first.css('border','1px solid red');
})
```

## 精简 javascript ##
一般来说，最好尽可能合并函数。
```
// 糟糕   
$first.click(function(){
    $first.css('border','1px solid red');
    $first.css('color','blue');
});

// 建议   
$first.on('click',function(){
    $first.css({
        'border':'1px solid red',
        'color':'blue'
    });
});
```

## 链式操作 ##
jQuery 实现方法的链式操作是非常容易的。
```
// 糟糕   
$second.html(value);
$second.on('click', function(){
    alert('hello everybody');
});
$second.fadeIn('slow');
$second.animate({height:'120px'}, 500);

// 建议   
$second.html(value);
$second.on('click', function(){
    alert('hello everybody');
}).fadeIn('slow').animate({height:'120px'}, 500);
```

## 维持代码的可读性 ##
伴随着精简代码和使用链式的同时，可能带来代码的难以阅读。 添加缩紧和换行能起到很好的效果。
```
// 糟糕   
$second.html(value);
$second.on('click',function(){
    alert('hello everybody');
}).fadeIn('slow').animate({height:'120px'},500);

// 建议   
$second.html(value);
$second
    .on('click',function(){ alert('hello everybody');})
    .fadeIn('slow')
    .animate({height:'120px'},500);
```

## 选择短路求值 ##
短路求值是一个从左到右求值的表达式，用 &&（逻辑与）或 ||（逻辑或）操作符。
```
// 糟糕   
function initVar($myVar) {
    if(!$myVar) {
        $myVar = $('#selector');
    }
}
// 建议   
function initVar($myVar) {
    $myVar = $myVar || $('#selector');
}
```

## 选择捷径 ##
精简代码的其中一种方式是利用编码捷径。
```
// 糟糕   
if(collection.length > 0){..}
// 建议   
if(collection.length){..}
```

## 熟记技巧 ##
你可能对使用`jQuery`中的方法缺少经验，一定要查看的文档，可能会有一个更好或更快的方法来使用它。
```
// 糟糕   
$('#id').data(key,value);
// 建议 (高效)  
$.data('#id',key,value);
```

## 使用子查询缓存的父元素 ##
正如前面所提到的，DOM 遍历是一项昂贵的操作。 典型做法是缓存父元素并在选择子元素时重用这些缓存元素。
```
// 糟糕   
var 
    $container = $('#container'),
    $containerLi = $('#container li'),
    $containerLiSpan = $('#container li span');
// 建议 (高效)  
var 
    $container = $('#container '),
    $containerLi = $container.find('li'),
    $containerLiSpan= $containerLi.find('span');
```

## 避免通用选择符 ##
将通用选择符放到后代选择符中，性能非常糟糕。
```
// 糟糕   
$('.container > *'); 
// 建议   
$('.container').children();  //children() 方法返回返回被选元素的所有直接子元素。
```

##  避免隐式通用选择符 ##
通用选择符有时是隐式的，不容易发现。
```
// 糟糕   
$('.someclass :radio'); 
// 建议   
$('.someclass input:radio');
```