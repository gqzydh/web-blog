---
title: Jade入门系列之标签和注释 
date: 2017-10-17 14:51:01
tags:
- Jade 
categories: 
- 模板引擎 
---


```
    1、jade中标签如何解析：
 
  ● html
     解析后：
 
Html代码  

  1. <html></html>  
 
  ● div#wrap  或者 #wrap
     解析后：
 
Html代码  

  1. <div id="wrap"></div>  
 
 
  ● div.wrap  或者.wrap
      解析后：
 
Html代码  

  1. <div class="wrap"></div>  
 
 
  ● input#age.big.input
      解析后：
Html代码  

  1. <input id="age" class="big input"/>  
 
 
  ● p 我是一个段落
      解析后：
 
Html代码  

  1. <p>我是一个段落</p>  
 
 
   2、 jade中注释如何解析：
 
  ● 单行注释：//单行注释
       解析后：
 
Html代码  

  1. <!-- 单行注释 -->  
 
  ● 支持不输出的注释，前面加一个-（短横线）
       //-这个注释不会显示 
 
  ● 块注释
   会根据注释来处理
 
Jade代码  

  1. //  
  2.  ul.test  
  3.    li 第一版  
  4.    li 第二版  
  5.    li 第三版  
 
    编译后：
Html代码  

  1. <!--  
  2. <ul class="test">  
  3.   <li>第一版</li>  
  4.   <li>第二版</li>  
  5.   <li>第三版</li>  
  6. </ul>-->  
 
 
  ● 条件注释：
Jade代码  

  1. // if lt IE 8  
  2.    script(src="forIE.js")  
 
    编译后：
 
Html代码  

  1. <!--[if lt IE 8]><script src="forIE.js"></script><![endif]-->  
 
```