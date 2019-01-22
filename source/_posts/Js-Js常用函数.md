---
title: Js常用函数 
date: 2017-10-17 14:51:01
tags:
- Javascript 
categories: 
- Javascript 
---


### 共享onload事件，addloadEvent 函数
```addloadEvent
    function addloadEvent(func){
      var oldonload = window.onload; //将现有的事件处理函数的值存入变量中
      if(typeof window.onload != 'function'){
        window.onload = func; //如果这个事件处理函数没有绑定任何函数，就把新函数添加给它
      }else{
        window.onload = function(){
          oldonload();
          func(); //如果已经绑定了函数，就把新函数追加到现有指令的末尾
        }
      }
    }
    addloadEvent(app);
```
insertAfter 函数，把一个节点插入到别一个节点之后
```insertAfter
function insertAfter(newElement, targetElement){
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    }
    else{
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}
```
