---
title: 正则表达式笔记
date: 2017-10-17 14:51:01
tags:
- 正则表达式
categories: 
- Javascript
---


##语法
```
+  号代表前面的字符必须至少出现一次（1次或多次）
* 号代表字符可以不出现，也可以出现一次或者多次（0次、或1次、或多次）
? 问号代表前面的字符最多只可以出现一次（0次、或1次）
```
##正则表达式类型
```
"g"、"i" ，分别用于指定全局匹配、区分大小写的匹配。

```
##正则写法
```
•   [abc] 查找方括号之间的任何字符。
var str="Is this all there is?"; 
var patt1=/[a-h]/g;
 console.log(str.match(patt1)); 
•   [^abc] 查找任何不在方括号之间的字符。
var str="hello jikexueyuan!"; 
var patt1=/[^jike]/g; 
console.log(str.match(patt1)); 
•   [0-9] 查找任何从 0 至 9 的数字。
•   [a-z] 查找任何从小写 a 到小写 z 的字符。
•   [A-Z] 查找任何从大写 A 到大写 Z 的字符。
•   [A-z] 查找任何从大写 A 到小写 z 的字符。
•   [adgk] 查找给定集合内的任何字符。
•   [^adgk] 查找给定集合外的任何字符。
•   red|blue|green 查找任何指定的选项。
•   \w 查找单词字符(字母、数字、下划线)。
•   \W 查找非单词字符。
•   \d 查找数字。
•   \D 查找非数字字符。
•   \s 查找空白字符(空格、tab、换行、回车)。
•   \S 查找非空白字符。
•   \b 匹配单词边界。
•   \B 匹配非单词边界。
•   \n 查找换行符。
var patt1=/\n/g; document.write(str.search(patt1)); 
•   n+ 匹配任何包含至少一个 n 的字符串。
var str="Hello HHunger! Hello World!";  
var patt1=/H+/g; 
document.write(str.match(patt1));  
var str="Hello Hunger! Hello World!"; 
 var patt1=/\w+/g; document.write(str.match(patt1)); 
•   n* 匹配任何包含零个或多个 n 的字符串。
•   n? 匹配任何包含零个或一个 n 的字符串。
var str="1, 100 or 1000?";  var patt1=/10?/g; document.write(str.match(patt1)); 
•   n{X} 匹配包含 X 个 n 的序列的字符串。
var str="100, 1000 or 10000?"; var patt1=/\d{4}/g;  document.write(str.match(patt1)); 
•   n{X,Y} 匹配包含 X 或 Y 个 n 的序列的字符串。
var str="100, 1000 or 10000?"; var patt1=/\d{3,4}/g;  document.write(str.match(patt1)); 
•   n{X,} 匹配包含至少 X 个 n 的序列的字符串。
var str="100, 1000 or 10000?"; var patt1=/\d{3,}/g;  document.write(str.match(patt1)); 
•   n$ 匹配任何结尾为 n 的字符串。
var str="Is this his"; var patt1=/is$/g; document.write(str.match(patt1)); 
•   ^n 匹配任何开头为 n 的字符串。
var str="Is this his"; var pa![](leanote://file/getImage?fileId=598c7980ab644136cb002702)



```
##字符串正则
```
1. search
字符串查找
var str="Visit W3School!"; 
console.log(str.search(/w3school/)); //-1 console.log(str.serach(/w3school/i)); // 6 
2. match
字符串匹配
var str="1 plus 2 equal 33"; 
console.log(str.match(/\d+/));   //[1] 
console.log(str.match(/\d+/g));  //[1,2,33] 
3. replace
字符串替换
var str="Hello JI! oh I am hunger" 
console.log(str.replace(/Hunger/, "valley")); console.log(str.replace(/hunger/ig, "hunger")); 
4. split
字符串分割
var str = "Hello Hunger   , oh I am Hunger"; 
str.split("");
str.split(/\s+/); 
```
##常见正则
```
汉字： [\u4e00-\u9fa5]
手机号： 1[0-9]{10}
邮箱： (\S)+[@]{1}(\S)+[.]{1}(\w)+

```
