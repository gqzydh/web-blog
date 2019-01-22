---
title: JQuery常用方法
date: 2017-10-17 14:51:01
tags:
- JQuery
categories: 
- JQuery
---

1. 添加,删除样式
2. ios,android,micromessenger 判断
3. 


## 添加删除样式
```
addClass()  //方法给元素加class
removeClass()  //方法删除元素的class。
```

## css ##
```
$("#tag").css("color", "blue");
$("#tag").css({"width":"200px","color":"blue"});

$(".target:nth-child(3)").addClass("animated bounce");
target:nth-child(n) //CSS选择器允许你通过目标类或元素类型选择目标元素的所有子元素。

$(".target:odd").addClass("animated shake");  //获取所有奇数元素
$(".target:even").addClass("animated shake"); //获取所有偶数元素
```

```
$("button").prop("disabled", true);  //禁用按钮,按钮会变灰并且不能点击

$("h3").html("<em>jQuery Playground</em>");  //在元素中添加HTML标签和文字，而元素中之前的内容都会被方法中的内容所替换掉
 .text()  //改变文本但不能添加标签。
 $("#target4").remove()  //的方法，可以彻底删除一个HTML元素。
 appendTo()  //方法，可以让你把选中的HTML元素附加到其他元素中。
 $("#target2").clone().appendTo("#right-well");  //可以复制元素。再添加到

 $("#left-well").parent().css("background-color", "blue")  //可以允许你访问选定元素的父元素。并从中继承属性。
 children(子元素)， //子元素从父元素那里继承属性。
```

## ios,android,micromessenger 判断
```
if(navigator.userAgent.toLowerCase() === 'iosclient'||navigator.userAgent.toLowerCase() === 'androidclient'){
    this.showHeader=false;
}  // 判断

var ua = window.navigator.userAgent.toLowerCase(); 
$("#clickDown").click(function(e){
    if(navigator.userAgent.toLowerCase() === 'iosclient'){
        e.stopPropagation(); //该方法将停止事件的传播，阻止它被分派到其他 Document 节点。
        e.preventDefault();  //取消事件的默认动作。
        $(".alertMsgsa").delay(5000).hide(0);  //延迟5秒执行

    }else if(navigator.userAgent.toLowerCase() === 'androidclient'){
        e.stopPropagation();
        e.preventDefault();

    }else if(ua.match(/MicroMessenger/i)=="micromessenger"){
         window.location= "https://w.url.cn/s/A5LsZ3k#wechat_redirect";  //微信中打开
    }else{
        e.stopPropagation();
        e.preventDefault();
    }
});
```