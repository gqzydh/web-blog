---
title: css3选择器 
date: 2017-10-17 14:51:01
tags:
- css 
categories: 
- css 
---

1. CSS 派生选择器
2. CSS 后代选择器
3. CSS 子元素选择器
4. CSS 相邻兄弟选择器
5. CSS 属性选择器
6. 结构性伪类选择器
7. UI元素状态伪类选择器




## CSS 派生选择器
```
h2 {color: red;}
h2 strong {color: blue;}

<p>The strongly emphasized word in this paragraph is<strong>red</strong>.</p>
<h2>This subhead is also red.</h2>
<h2>The strongly emphasized word in this subhead is<strong>blue</strong>.</h2>
```

## CSS 后代选择器
有关后代选择器有一个易被忽视的方面，即两个元素之间的层次间隔可以是无限的。不论嵌套层次多深.
```
h1 em {color:red;}
<h1>This is a <em>important</em> heading</h1>
<p>This is a <em>important</em> paragraph.</p>
```

## CSS 子元素选择器
不希望选择任意的后代元素，而是希望缩小范围，只选择某个元素的子元素，请使用子元素选择器
```
h1 > strong {color:red;}
<h1>This is <strong>very</strong> <strong>very</strong> important.</h1>
<h1>This is <em>really <strong>very</strong></em> important.</h1>
```

## CSS 相邻兄弟选择器
如果需要选择紧接在另一个元素后的元素，而且二者有相同的父元素，可以使用相邻兄弟选择器
```
li + li {font-weight:bold;}
<div>
  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
  </ul>
  <ol>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
  </ol>
</div>
```

## CSS 属性选择器
[att] 用于选取带有指定属性的元素。
[att=“value”] 匹配属性等于某特定值的元素
[att|="value"] 用于选取带有以指定值开头的属性值的元素，该值必须是整个单词。
[att^="value"] 匹配属性包含以特定的值开头的元素 
[att$="value"] 匹配属性包含以特定的值结尾的元素 
[att*=“value”] 匹配属性包含含有特定的值的元素 
```
[title~=hello] { color:red; }  
<h2 title="hello world">Hello world</h2>

[lang|=en] { color:red; }
<p lang="en">Hello!</p>
<p lang="en-us">Hi!</p>

input[type="text"]{width:150px;display:block;background-color:yellow;}
input[type="button"]{width:120px;display:block;font-family: Verdana, Arial;}
<form name="input" action="" method="get">
  <input type="text" name="Name" value="Bill" size="20">
  <input type="text" name="Name" value="Gates" size="20">
  <input type="button" value="Example Button">
</form>
```

## 结构性伪类选择器
:root    :not    :empty
:nth-child(n)  :nth-last-child(n)
:only-child
:first-child  :last-child
- 详解：
:root 选择器匹配文档根元素。十有八九根节点是 <html> 元素.
:not(p) 设置非 <p> 元素的所有元素的样式
:empty  指定空的元素的背景色 ／当元素内容为空时被选中

:nth-child(n) 选择器匹配属于其父元素的第 N 个子元素，不论元素的类型。
:nth-last-child(n) 与上个选择器的思想同样，但是从后面匹配元素
- 倍数匹配
:nth-child(an) 匹配所有倍数为a的元素。其中参数an中的字母n不可缺省，它是倍数写法的标志，如3n、5n。
```
li:nth-child(3n){background:orange;}/*把第3、第6、第9、…、所有3的倍数的LI的背景设为橙色*/
```

- 倍数分组匹配
```
li:nth-child(3n+1){background:orange;}/*匹配第1、第4、第7、…、每3个为一组的第1个LI*/
```

- 奇偶匹配
```
:nth-child(odd) 与 :nth-child(even)
  分别匹配序号为奇数与偶数的元素。奇数(odd)与(2n+1)结果一样；偶数(even)(2n)结果一样。
```

:only-child 选择器匹配属于其父元素的唯一子元素的每个元素。
```
p:only-child{background:#ff0000;}
<div>
<p>这是一个段落。</p>
</div>
```

:first-child 选择器用于选取属于其父元素的首个子元素的指定选择器。
:last-child 选择器匹配属于其父元素的最后一个子元素的每个元素。

## UI元素状态伪类选择器

> 共同点：指定的样式只有当元素处于某种状态下时才起作用

:hover   选择器用于选择鼠标指针浮动在上面的元素。
:active  元素被激活（鼠标在元素上按下还没有松开）   
:focus  选择器用于选取获得焦点的元素
:eabled  已启用的 input 元素设置背景色
:disabled  被禁用的 input 元素设置背景色
:read-only  选择器用于选取设置了 "readonly" 属性的元素。表单元素可以设置 "readonly" 属性来定义元素只读。
:read-write   选择器用于匹配可读及可写的元素。
:checked  选择器匹配每个已被选中的 input 元素（只用于单选按钮和复选框）。
::selection 选择器匹配被用户选取的选取是部分。
只能向 ::selection 选择器应用少量 CSS 属性：color、background、cursor 以及 outline





