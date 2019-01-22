---
title: Template.js 
date: 2017-10-17 14:51:01
tags:
- Template.js
categories: 
- 模板引擎 
---

Template.js 一款 JavaScript 模板引擎，简单，好用。提供一套模板语法，用户可以写一个模板区块，每次根据传入的数据，生成对应数据产生的HTML片段，渲染不同的效果。https://github.com/aui/artTemplate

## 特性
（1）、性能卓越，执行速度通常是 Mustache 与 tmpl 的 20 多倍（性能测试）（2）、支持运行时调试，可精确定位异常模板所在语句（演示）

（3）、对 NodeJS Express 友好支持（4）、安全，默认对输出进行转义、在沙箱中运行编译后的代码（Node版本可以安全执行用户上传的模板）

（5）、支持include语句

（6）、可在浏览器端实现按路径加载模板（详情）

（7）、支持预编译，可将模板转换成为非常精简的 js 文件

（8）、模板语句简洁，无需前缀引用数据，有简洁版本与原生语法版本可选

（9）、支持所有流行的浏览器

## 语法
（1）、使用
引用简洁语法的引擎版本，例如： `<script src="dist/template.js"></script>` 

（2）、表达式
{{ 与 }} 符号包裹起来的语句则为模板的逻辑表达式。

（3）、输出表达式
```
{{content}}  //对内容编码输出
{{#content}}  //不编码输出
```
编码可以防止数据中含有 HTML 字符串，避免引起 XSS 攻击。

（4）、条件表达式
```
{{if admin}}
 <p>admin</p>
{{else if code > 0}}
 <p>master</p>
{{else}}
 <p>error!</p>
{{/if}}
```

（5）、遍历表达式
无论数组或者对象都可以用 each 进行遍历。
```
{{each list as value index}}
 <li>{{index}} - {{value.user}}</li>
{{/each}}
===亦可以被简写：
{{each list}}
 <li>{{$index}} - {{$value.user}}</li>
{{/each}}
```

（6）、模板包含表达式

用于嵌入子模板。
```
{{include 'template_name'}}  
子模板默认共享当前数据，亦可以指定数据：{{include 'template_name' news_list}}  
```

（7）、辅助方法

使用template.helper(name, callback)注册公用辅助方法
```
template.helper('dateFormat', function (date, format) {
 // ……
 return value;
});
```
```
{{time | dateFormat:'yyyy-MM-dd hh:mm:ss'}}  //模板中使用的方式
{{time | say:'cd' | ubb | link}}  //支持传入参数与嵌套使用
```


## 实例
实例-01
```
<body>
<div id="content"></div>
<script id="test" type="text/html">
{{if isAdmin}}
<h1>{{title}}</h1>
<ul>
 {{each list as value i}}
  <li>索引 {{i + 1}} ：{{value}}</li>
 {{/each}}
</ul>
{{/if}}
</script>
<script>
var data = {
 title: '基本例子',
 isAdmin: true,
 list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他']
};
var html = template('test', data);
document.getElementById('content').innerHTML = html;
</script>
</body>
```
实例-02
```
<body>
 <h1>不转义HTML</h1>
 <div id="content"></div>
 <script id="test" type="text/html">
 <p>不转义：{{#value}}</p>
 <p>默认转义： {{value}}</p>
 </script>
  
 <script>
 var data = {
  value: '<span style="color:#F00">hello world!</span>'
 };
 var html = template('test', data);
 document.getElementById('content').innerHTML = html;
 </script>
</body>
```
实例-03
```
<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<title>helper-demo</title>
<script src="../dist/template.js"></script>
</head>
  
<body>
<h1>辅助方法</h1>
<div id="content"></div>
<script id="test" type="text/html">
{{time | dateFormat:'yyyy年 MM月 dd日 hh:mm:ss'}}
</script>
  
<script>
/**
 * 对日期进行格式化，
 * @param date 要格式化的日期
 * @param format 进行格式化的模式字符串
 *  支持的模式字母有：
 *  y:年,
 *  M:年中的月份(1-12),
 *  d:月份中的天(1-31),
 *  h:小时(0-23),
 *  m:分(0-59),
 *  s:秒(0-59),
 *  S:毫秒(0-999),
 *  q:季度(1-4)
 * @return String
 * @author yanis.wang
 * @see http://yaniswang.com/frontend/2013/02/16/dateformat-performance/
 */
template.helper('dateFormat', function (date, format) {
  
 if (typeof date === "string") {
  var mts = date.match(/(\/Date(\d+)\/)/);
  if (mts && mts.length >= 3) {
   date = parseInt(mts[2]);
  }
 }
 date = new Date(date);
 if (!date || date.toUTCString() == "Invalid Date") {
  return "";
 }
  
 var map = {
  "M": date.getMonth() + 1, //月份
  "d": date.getDate(), //日
  "h": date.getHours(), //小时
  "m": date.getMinutes(), //分
  "s": date.getSeconds(), //秒
  "q": Math.floor((date.getMonth() + 3) / 3), //季度
  "S": date.getMilliseconds() //毫秒
 };
   
  
 format = format.replace(/([yMdhmsqS])+/g, function(all, t){
  var v = map[t];
  if(v !== undefined){
   if(all.length > 1){
    v = '0' + v;
    v = v.substr(v.length-2);
   }
   return v;
  }
  else if(t === 'y'){
   return (date.getFullYear() + '').substr(4 - all.length);
  }
  return all;
 });
 return format;
});
  
// --------
  
var data = {
 time: 1408536771253,
};
var html = template('test', data);
document.getElementById('content').innerHTML = html;
</script>
</body>
</html>
```

## 常用语法.
```
<# print(self.makeexpect.expect); #>万  //输出金额

// if 判断
<#if(self.makeexpect.description == 1){#>
<div class="tenprizeimg"><img src="/static/img/mystory/img1.png" alt=""></div>
<#}#>
<#if(self.makeexpect.description == 2){#>
<div class="tenprizeimg"><img src="/static/img/mystory/img2.png" alt=""></div>
<#}#>
<#if(self.makeexpect.description == 3){#>
<div class="tenprizeimg"><img src="/static/img/mystory/img3.png" alt=""></div>
<#}#>
```