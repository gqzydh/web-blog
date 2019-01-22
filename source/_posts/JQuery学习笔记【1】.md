---
title: jQuery学习笔记 
date: 2017-10-17 14:51:01
tags:
- jQuery 
- 笔记
categories: 
- jQuery 
---


[jQuery 快速入门教程](http://www.365mini.com/page/jquery-quickstart.htm)

`bind()` 方法为被选元素添加一个或多个事件处理程序，并规定事件发生时运行的函数。

`.stopPropagation();`
终止事件在传播过程的捕获、目标处理或起泡阶段进一步传播。

`e.preventDefault();`
取消事件的默认动作。

`attr()` 方法设置或返回被选元素的属性值

`$(selector).addClass(class)`
向被选元素添加一个或多个类。
`$(selector).removeClass(class)`
方法从被选元素移除一个或多个类。
如果没有规定参数，则该方法将从被选元素中删除所有类。

`scroll`当用户滚动指定的元素时，会发生 scroll 事件。
scroll 事件适用于所有可滚动的元素和 window 对象（浏览器窗口）。

`offset()`方法返回或设置匹配元素相对于文档的偏移（位置）。

`scrollTop()`方法返回或设置匹配元素的滚动条的垂直位置。

##JQuery 常用方法、定义和用法
setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。由 setInterval() 返回的 ID 值可用作 clearInterval() 方法的参数。

val() 方法返回或设置被选元素的值。
元素的值是通过 value 属性设置的。该方法大多用于 input 元素。
如果该方法未设置参数，则返回被选元素的当前值。

attr() 方法设置或返回被选元素的属性值。

remove() 方法移除被选元素，包括所有文本和子节点。

addClass()  向匹配的元素添加指定的类名。  
after()  在匹配的元素之后插入内容。  
append()  向匹配的元素内部追加内容。  
appendTo()  向匹配的元素内部追加内容。  
attr()  设置或返回匹配元素的属性和值。  
before()  在每个匹配的元素之前插入内容。  
clone()  创建匹配元素集合的副本。  
detach()  从 DOM 中移除匹配元素集合。  
empty()  删除匹配的元素集合中所有的子节点。  
hasClass()  检查匹配的元素是否拥有指定的类。  
html()  设置或返回匹配的元素集合中的 HTML 内容。  
insertAfter()  把匹配的元素插入到另一个指定的元素集合的后面。  
insertBefore()  把匹配的元素插入到另一个指定的元素集合的前面。  
prepend()  向每个匹配的元素内部前置内容。  
prependTo()  向每个匹配的元素内部前置内容。  
remove()  移除所有匹配的元素。  
removeAttr()  从所有匹配的元素中移除指定的属性。  
removeClass()  从所有匹配的元素中删除全部或者指定的类。  
replaceAll()  用匹配的元素替换所有匹配到的元素。  
replaceWith()  用新内容替换匹配的元素。  
text()  设置或返回匹配元素的内容。  
toggleClass()  从匹配的元素中添加或删除一个类。  
unwrap()  移除并替换指定元素的父元素。  
val()  设置或返回匹配元素的值。  
wrap()  把匹配的元素用指定的内容或元素包裹起来。  
wrapAll()  把所有匹配的元素用指定的内容或元素包裹起来。  
wrapinner()  将每一个匹配的元素的子内容用指定的内容或元素包裹起来。 

//关闭弹出窗口点击ESC键盘按钮时
//close popup when clicking the esc keyboard button
    $(document).keyup(function(event){
        if(event.which=='27'){
            $('.cd-popup').removeClass('is-visible');
        }
    });
