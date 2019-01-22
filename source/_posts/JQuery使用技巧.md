---
title: jQuery使用技巧 
date: 2017-10-18 14:51:01
tags:
- jQuery 
categories: 
- jQuery 
---


本文收集整理工作中有用的jQuery技巧，与大家分享。
##1.通过方法返回Jquery对象实例##
```
用 var someDiv = $(‘#someDiv’).hide(); 
代替 var someDiv = $(‘#someDiv’); someDiv.hide();
```
##2.使用find来查找##
```
用 $(’#someDiv’).find(’p.someClass’).hide();
代替 $(’#someDiv p.someClass’).hide(); //因为可以不必触发Jquery的Sizzle引擎，同时在写选择符的时候尽量让您的选择符简单同时优化最右边的选择符
```
##3.不要滥用$(this)##
```
用 $(’#someAnchor’).click(function() { alert( this.id ); }); 
代替 $(’#someAnchor’).click(function() {alert($(this).attr(’id’));});
```
##4.ready的简写形式##
```
用 $(function() { }); 
代替 $(document).ready(function() {});
```
##5.让你的代码安全
```
方法1（使用noConflict）
var j = jQuery.noConflict(); 
    j(’#someDiv’).hide(); // The line below will reference some other library’s $ function. 
    $(’someDiv’).style.display = ‘none’; 
方法2（传入参数Jquery）
(function($) { // Within this function, $ will always refer to jQuery 
})(jQuery); 

方法3（通过ready方法）
jQuery(document).ready(function($) { 
    // $ refers to jQuery 
}); 
```
##6.简化代码
用`each`代替`for`，使用数组保存临时变量，使用`document` `fragment`，这其实和写原生的Javascript需要注意的一样。

##7.使用Ajax的方法
Jquery提供了`get` `getJSON` `post` `ajax`这些有用的ajax方法。

##8.访问原生的属性和方法
```
比如获取元素id的方法有
// OPTION 1 – Use jQuery 
var id = $(’#someAnchor’).attr(’id’); 
// OPTION 2 – Access the DOM element 
var id = $(’#someAnchor’)[0].id; 
// OPTION 3 – Use jQuery’s get method 
var id = $(’#someAnchor’).get(0).id; 
// OPTION 3b – Don’t pass an index to get 
anchorsArray = $(’.someAnchors’).get(); 
var thirdId = anchorsArray[2].id; 
```
##9.使用PHP来检查Ajax请求

通过使用`xhr.setRequestHeader(”X-Requested-With”, “XMLHttpRequest”);` 服务器端如PHP就可以通过
`function isXhr() { 
   return $_SERVER['HTTP_X_REQUESTED_WITH'] === ‘XMLHttpRequest’; 
}`
来检查是不是Ajax请求，在一些禁用Javascript的情况下可能会用到。

##10.Jquery和$的关系
在Jquery代码的最下面，可以看到下面的代码
```
window.jQuery = window.$ = jQuery; $其实就是Jquery的一个shortcut
```
##11.条件加载Jquery
```
<!– Grab Google CDN jQuery. fall back to local if necessary –> 
<script src=”http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js”></script> 
<script>!window.jQuery && document.write(’<script src=”js/jquery-1.4.2.min.js”><\/script>’) 
</script> 
```
如果CDN没有下载到Jquery，则从本地读取。

##12.Jquery Filters
```
$(’p:first’).data(’info’, ‘value’); // populates $’s data object to have something to work with 
$.extend( 
jQuery.expr[":"], { 
block: function(elem) { 
return $(elem).css(”display”) === “block”; 
}, 
hasData : function(elem) { 
return !$.isEmptyObject( $(elem).data() ); 
} 
} 
); 
$(”p:hasData”).text(”has data”); // grabs paras that have data attached 
$(”p:block”).text(”are block level”); // grabs only paragraphs that have a display of “block” 
//注：$.expr[":"]等价于$.expr.filters。
```
##13.hover方法
```
$(’#someElement’).hover(function() { 
//在这里可以使用toggle方法来实现滑过和滑出的效果 
}); 
```
##14.传入属性对象
当创建一个元素的时候，Jquery1.4可以传入一个属性对象
```
$(’</a>’, { 
  id : ’someId’, 
  className : ’someClass’, 
  href : ’somePath.html’ 
}); 
```
甚至是Jquery指定的属性或事件如text, click。
