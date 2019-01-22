---
title: 原生JS 操作 DOM
date: 2017-10-17 14:51:01
tags:
- Javascript
categories: 
- Javascript
---

## 查询
### 按照ID查询
```
document.getElementById(id) // 兼容最好

<div id="content"></div>
const contentDom = document.getElementById('content');
```

### 按照class查询
```
element.getElementsByClassName // ie9+ 
element.querySelectorAll // ie8 

// HTMl
<div id="content">
    <p class="info test">info1</p>
    <p class="info">info2</p>
    <p class="info">info3</p>
</div>

// Script
const mainDom = document.getElementById('content');
const infoDomList1 = mainDom.querySelectorAll('.info.test');
const infoDomList2 = mainDom.getElementsByClassName('info test');
```

### 按照Tag查询
```
element.getElementsByTagName // ie6+

// HTMl
<body>
  <div id="main">
    <div id="content">
      <p class="info test">info1</p>
      <p class="info">info2</p>
      <p class="info">info3</p>
    </div>
  </div>
</body>

// Script
const divDom = document.getElementsByTagName('div');
const pDom = divDom[0].getElementsByTagName('p');
```

### 按照属性查询
```
element.querySelector //ie8+ 
element.querySelectorAll() //ie8+ 
querySelector返回返回的是单个DOM元素，querySelectorAll返回NodeList
```
querySelector的语法很类似jquery里面的选择器，querySelector和querySelectorAll的使用方法是一样，所以下面的一些说法都是适用于两个。
```
// HTMl
<body>
  <div id="main">
    <div id="content">
      <p class="info test">info1</p>
      <p class="info">info2</p>
      <p class="info">info3</p>
    </div>
  </div>
</body>

// Script
const infoDom = document.querySelectorAll('.info');
const infoDom2 = document.querySelectorAll('.info:not(.test)');
```

### 获取父元素
```
element.parentNode // 基本都兼容
```

### 获取子元素
```
element.childNodes // 基本都兼容
```
element.childNodes不止会获取到DOM，也会获取到文字等，只有当nodeType === 1时才表示DOM。

### 获取兄弟节点
- 获取前面的兄弟节点
```
element.previousSibling  //基本都兼容
```
获取所有前面的兄弟节点就是遍历previousSibling, 直到null

- 获取后面的兄弟节点
```
element.nextSibling //基本都兼容
```
获取所有和注意点都和previousSibling一样

## DOM操作
### 创建DOM
```
document.createElement(tagName)
```

### 新增DOM
- 添加到节点的子节点的最后
```
paranetElement.appendChild(child);
```

- 添加到节点的前面
```
paranetElement.insertBefore(newElement, Element)
```
> 通过insertBefore方法可以将newElement插入到Element后面，如果Element是null则将newElement插入到paranetElement的尾部。
> 如果newElement是一个已经存在在文档中的DOM, insertBefore则会表现为移动该DOM(将会保留所有的事件)。

- 添加到节点的后面
没有这个函数 😶 可以使用 insertBefore 方法和 nextSibling 来模拟它。
```
parentDiv.insertBefore(sp1, sp2.nextSibling);
```
> 如果sp2没有下一个节点，则它肯定是最后一个节点，则sp2.nextSibling返回null，且sp1被插入到子节点列表的最后面（即sp2后面）

## 修改DOM
### 修改DOM的文案
```
Element.innerHTML  // 获取标签内的所有内容 
Element.innerText  // 只获取标签内的文字内容，不包括标签
```

### 修改css
```
element.style.cssAttribute
document.getElementById("p2").style.color="blue";
```

### 修改属性
```
element.setAttribute()  //方法添加指定的属性，并为其赋指定的值。
element.removeAttribute()   //方法删除指定的属性。
element.className   //属性设置或返回元素的 class 属性
```

### 删除DOM
```
paranetElement.removeChild(element)  //removeChild()方法指定元素的某个指定的子节点。
```

### 清空子节点
> 没有专门的函数，可以遍历removeChild来实现

```
var element = document.getElementById("top");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
```