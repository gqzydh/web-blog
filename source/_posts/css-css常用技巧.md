---
title: css 常用技巧 
date: 2017-10-17 14:51:01
tags:
- css 
categories: 
- css 
---

1. css图片文字水平垂距中
2. 文字两端对齐
3. 文字不换行与超出时显示省略标记
4. input(文本框)或textarea的黄色焦点框
5. 浮动闭合 clearfix
6. 鼠标不允许点击
7. 渐变
8. 投影/阴影
9. 页面变灰 gray
10. 取消textarea右下角可拖动手柄

css图片文字水平垂距中
------------

```
父级标签属性：display:table-cell;vertical-align:middle;
距中标签元素：vertical-align:middle;display: inline-block;
```

文字两端对齐
----
text-align:justify;text-justify:inter-ideogra
```
.qop li { display: block; width: 140px; height: 29px; background-color: #ccc; text-align-last: justify;}
<ul class="qop">
    <li>昵称</li>
    <li>电子邮箱</li>
    <li>电话手机号码</li>
</ul>
```

文字不换行与超出时显示省略标记(...) 
-----
- 一般的文字截断(适用于内联与块)：
```
word-wrap: break-word;  /*自动换行*/
```
```
.text-overflow{
display:block;                     /*内联对象需加*/
width:31em;
word-break:keep-all;           /* 不换行 */
white-space:nowrap;          /* 不换行 */
overflow:hidden;               /* 内容超出宽度时隐藏超出部分的内容 */
text-overflow:ellipsis;         /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
}
```
- 对于表格，定义有点不一样： 
```
table{
width:30em;
table-layout:fixed;                 /* 只有定义了表格的布局算法为fixed，下面td的定义才能起作用。 */
}
td{
width:100%;
word-break:keep-all;             /* 不换行 */
white-space:nowrap;            /* 不换行 */
overflow:hidden;                  /* 内容超出宽度时隐藏超出部分的内容 */
text-overflow:ellipsis;            /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
}
```

去掉Webkit(chrome)浏览器中input(文本框)或textarea的黄色焦点框
---------------------------------------------

```
input,button,select,textarea{ outline:none;}
textarea{ font-size:13px; resize:none;}
```

浮动闭合 clearfix
-------------
```
.clearfix{overflow:hidden;_zoom:1;}
```

鼠标不允许点击
-------
```
cursor:not-allowed;
```

渐变
--
```
.ui-btn{color:#fff;border:0;font-size: 16px;text-align: center;padding:10px; display:inline-block; cursor:pointer;box-sizing:border-box;border-radius: 1.5rem;
    background: -webkit-linear-gradient(left, #24e9f0 , #2564ef); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right, #24e9f0 , #2564ef); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right, #24e9f0 , #2564ef); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #24e9f0 , #2564ef); /* 标准的语法 */
/* box-shadow: 0 0.3rem 0.566666666666rem rgba(112,206,232,0.3); */outline:none;}
```

投影/阴影
-----
```
.ui-btn-active{box-shadow:0 5px 17px rgba(0,0,0,.1); color: #fff;}
```

页面变灰 gray
-------
```
html{
filter: grayscale(100%);
-webkit-filter: grayscale(100%);
-moz-filter: grayscale(100%);
-ms-filter: grayscale(100%);
-o-filter: grayscale(100%);
filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale");
filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
-webkit-filter: grayscale(1);
} 
```

取消textarea右下角可拖动手柄
------------------
```
resize:none
```

取消chrome form表单的聚焦边框
--------------------
```
input,button,select,textarea{outline:none}
textarea{resize:none}
```

取消a链接的黄色边框
----------
```
a{-webkit-tap-highlight-color:rgba(0,0,0,0);}
```

手机版本网页a标记虚线框问题
--------------
```
a:focus { outline:none; -moz-outline:none; }
```

input -placeholder占位符颜色自定义
--------------------------
```
input:-moz-placeholder { color: #369; }
::-webkit-input-placeholder { color:#369; }
```

ie不支持html5标签的解决方案
-----------------

```
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries --><!-- WARNING: Respond.js doesn't work if you view the page via file:// --><!--[if lt IE 9]>
      <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
```

```
article,aside,dialog,footer,header,section,footer,nav,figure,menu{display:block}
```

css 初始化
-------
```reset.css
/* reset.css（格式化样式） */
@charset "utf-8";
html{background:#fff;overflow:auto;}
body{min-width:1200px;font:12px/18px "Microsoft Yahei";font-weight:lighter;color:#333; -webkit-font-smoothing: antialiased; }
a{color:#333; text-decoration:none; cursor:pointer; outline: 0 none;}
a:hover{ text-decoration:none;color:#ff4f20;}
a:focus{-moz-outline-style:none; border:0px;blr:expression(this.onFocus=this.blur());}
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,p,blockquote,th,td{margin:0; padding:0;}
header,footer,article,aside,section,nav,menu,hgroup,details,dialog,figure,figcaption{display:block}
ol,li,ul,dl,dt,dd{list-style:none;}
fieldset,img {border:0}
button,submit,input,select { vertical-align:middle;}
button,submit { cursor:pointer;}
h1,h2,h3,h4,h5,h6{font-size:inherit; font-weight:lighter;}
table{border-collapse:collapse; border-spacing:0;}
sup{vertical-align:text-top;}
sub{vertical-align:text-bottom;}
select,button{font-family:inherit; font-size:inherit; font-weight:inherit; outline-style:none; outline-width:0pt; padding: 0; margin: 0;}
b,em,i{display:inline-block; font-weight:normal; font-style:normal;}
.clearfix:after { content: "."; display: block; height: 0; clear: both; visibility: hidden;} .clearfix{ zoom:1;}
.container { width:1200px; position:relative; margin:0 auto;}
.fl{float:left;}
.fr{float:right;}
```
