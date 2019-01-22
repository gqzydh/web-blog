---
title: Handlebars  
date: 2017-10-17 14:51:01
tags:
- Handlebars  
categories: 
- 模板引擎  
---


[Handlebars.js 模板引擎](http://handlebarsjs.com)
[Handlebars.js 中文博客](http://www.ghostchina.com/introducing-the-handlebars-js-templating-engine/)
> Handlebars 是 JavaScript 一个语义模板库，通过对view和data的分离来快速构建Web模板。它采用"Logic-less template"（无逻辑模版）的思路，在加载时被预编译，而不是到了客户端执行到代码时再去编译， 这样可以保证模板加载和运行的速度。Handlebars兼容Mustache，你可以在Handlebars中导入Mustache模板。
```
{{!--内容 语句 --}}  //注释语法
```
## handlebars 基本实用
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Handlebars.js 模版引擎</title>
    <script src="jquery.min.js"></script>
    <script src="handlebars-v4.0.10.js"></script>
</head>
<body>
<div class="card" id="card">
    <!-- <div>姓名:凯文米特尼克</div>
    <div>出生日期：1963年8月6日</div>
    <div>出事地点：美国洛杉矶</div>
    <div>职业：网络安全咨询师</div> -->   
</div>

<script id="card-template" type="text/x-handlebars-template">
    <div>姓名:{{name}}</div>
    <div>出生日期: {{birth}}</div>
    <div>出事地点: {{home}}</div>
    <div>职业: {{job}}</div>
</script>
    
<!-- data  数据 -->
<script type="text/javascript">
    var data = {
        name: '凯文米特尼克',
        birth: '1963年8月6日',
        home: '美国洛杉矶',
        job: '网络安全咨询师'
    };

    var t = $('#card-template').html();  //拿到模版
    var f = Handlebars.compile(t);  //通过 handlebars 模版编译函数
    var h = f(data);  
    $('#card').html(h);
</script>
</body>
</html>
```
##handlebars 实例优化##
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Handlebars.js 模版引擎</title>
    <script src="jquery.min.js"></script>
    <script src="handlebars-v4.0.10.js"></script>
    <style type="text/css">
        .card{ font-size: 28px; margin: 20px; padding: 20px; float: left; background-color: #cd3444; }
    </style>
</head>
<body>
<div id="card">
    <!-- <div>姓名:凯文米特尼克</div>
    <div>出生日期：1963年8月6日</div>
    <div>出事地点：美国洛杉矶</div>
    <div>职业：网络安全咨询师</div> -->   
</div>

<script id="card-template" type="text/x-handlebars-template">
    {{#each this}}  //循环
    <div class="card">
        <div>姓名:{{name}}</div>
        {{#if birth}}  //判断
        <div>出生日期: {{birth}}</div>
        {{/if}}
        <div>出事地点: {{home}}</div>
        <div>职业: {{job}}</div>
        {{!--  //注释
        <ul>
            {{#each books}}
            <li>{{this}}</li>
            {{/each}}
        </ul>
        --}}
        <ul>
            {{#with books}}
            {{#each this}}
            <li>{{this}}</li>
            {{/each}}
            {{/with}}
        </ul>
    </div>
    {{/each}}
</script>
    
<!-- data  数据 -->
<script type="text/javascript">
    var data = [{
        name: '凯文米特尼克',
        birth: '1963年8月6日',
        home: '美国洛杉矶',
        job: '网络安全咨询师',
        books: [
            '《欺骗的艺术》',
            '《入侵的艺术》',
            '《欺骗的艺术》'
        ]
    }, {
        name: '沃兹尼亚克',
        birth: '1950年8月11日',
        home: '美国加利福尼亚',
        job: '电脑工程师',
        books: [
            '《与苹果一起疯狂》',
            '《自哈佛是空间》'
        ]

    }, {
        name: '大熊阿斯顿',
        home: '上海',
        job: '前端工程师',
    }];

    var t = $('#card-template').html();  //拿到模版
    var f = Handlebars.compile(t);  //通过 handlebars 模版编译函数
    var h = f(data);  
    $('#card').html(h);
</script>
</body>
</html>
```
##handlebars 完整实例##
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Handlebars.js 模版引擎</title>
    <script src="jquery.min.js"></script>
    <script src="handlebars-v4.0.10.js"></script>
    <style type="text/css">
        .card{ font-size: 28px; margin: 20px; padding: 20px; float: left; background-color: #cd3444; }
    </style>
</head>
<body>
<div id="card">
    <!-- <div>姓名:凯文米特尼克</div>
    <div>出生日期：1963年8月6日</div>
    <div>出事地点：美国洛杉矶</div>
    <div>职业：网络安全咨询师</div> -->   
</div>

<script id="card-template" type="text/x-handlebars-template">
    {{#each this}}  //循环
    <div class="card">
        <div>{{chinese @index}}</div>
        <div>姓名:{{name}}</div>
        {{#if birth}}  //判断
        <div>出生日期: {{birth}}</div>
        {{/if}}
        <div>出事地点: {{home}}</div>
        <div>职业: {{job}}</div>
        <ul>
            {{#each books}}
            <li {{#isfirst @index}} style="color: red;" {{/isfirst}}
                {{#isblus ../books}} style="color: blue;" {{/isblus}}>
                {{addone @../index}}-{{addone @index}} {{this}}
            </li>
            {{/each}}
        </ul>
    </div>
    {{/each}}
</script>
    
<!-- data  数据 -->
<script type="text/javascript">
    var data = [{
        name: '凯文米特尼克',
        birth: '1963年8月6日',
        home: '美国洛杉矶',
        job: '网络安全咨询师',
        books: [
            '《欺骗的艺术》',
            '《入侵的艺术》',
            '《欺骗的艺术》'
        ]
    }, {
        name: '沃兹尼亚克',
        birth: '1950年8月11日',
        home: '美国加利福尼亚',
        job: '电脑工程师',
        books: [
            '《与苹果一起疯狂》',
            '《自哈佛是空间》'
        ]

    }, {
        name: '大熊阿斯顿',
        home: '上海',
        job: '前端工程师',
    }];

    /*registerHelper 自定义标签*/

    Handlebars.registerHelper("chinese", function(value){
        var arr = ['第一', '第二', '第三'];
        return arr[value];
    });
    Handlebars.registerHelper("addone", function(value){
        return value + 1;
    });
    Handlebars.registerHelper("isfirst", function(value, options){
        if(value == 0){
            return options.fn(this);
        }
    });
    Handlebars.registerHelper("isblus", function(value, options){
        if(value && value.length >=2){
            return options.fn(this);
        }
    });


    var t = $('#card-template').html();  //拿到模版
    var f = Handlebars.compile(t);  //通过 handlebars 模版编译函数
    var h = f(data);  
    $('#card').html(h);
</script>
</body>
</html>
```
##笔记本案例
- **html**
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Handlebars.js</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery.min.js"></script>
    <script src="js/handlebars-v4.0.10.js"></script>
</head>
<body>
<div class="banner">
    <h1>我的笔记本</h1>
    <h3>你的指尖，有改变世界的力量</h3>
</div>
<!-- 课程列表 -->
<div class="classes" id="classes">
</div>
<div class="pag" id="pag">
</div>

<!-- handlebars-课程模块 -->
<script id="class-template" type="text/x-handlebars-template">
    <ul>
        {{#each this}}
        <li>
            <div class="imerbox">
                <img src="{{image}}" alt="{{title}}">
                <div class="titilediv">
                    <span class="title">{{title}}</span>
                    {{#equal hasnote 1}}
                    <span class="note">(有笔记)</span>
                    {{/equal}}
                    <div class="subtitle">{{subtitle}}</div>
                    <div class="subtitle {{#long timespan}} long {{else}} short {{/long}}">时间: {{timespan}}</div>
                </div>
            </div>
        </li>
        {{/each}}
    </ul>
</script>
<!-- handlebars-分页模块 -->
<script id="pag-template" type="text/x-handlebars-template">
    <ul>
        {{#each this}}
        <li data-id={{index}} {{#if cur}} class="cur" {{/if}}
            {{#if clickable}} class="clickable" {{/if}}>
            {{{text}}}
        </li>
        {{/each}}
    </ul>
</script>
<script type="text/javascript" src=js/script.js></script>
</body>
</html>
```
- **css**
```
*{padding:0;margin:0;}
ul li{list-style-type:none;}
.banner{width:100%;height:200px;background-color:#eeeeee;display:inline-block;}
.banner h1{font-size:50px;margin-top:40px;margin-left:20px;}
.banner h3{font-size:20px;margin-top:20px;color:#6a6a6a;margin-left:20px;}
.classes,.pag{min-width:1000px;margin:0px auto;width:100%;}
.classes{float:left;}
.pag{clear:both;}
.classes ul{margin-top:20px;margin-bottom:20px;width:100%;float:left;}
.classes li{float:left;width:29%;text-align:left;margin-left:2%;margin-right:2%;margin-top:20px;}
.classes li:hover{cursor:pointer;box-shadow:10px 10px 20px gray;}
.classes .innerbox{width:90%;margin:20px auto;}
.classes img{width:100%;}
.classes .titlediv{font-size:20px;margin-top:10px;}
.classes .title{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:70%;display:inline-block;}
.classes .note{font-size:14px;vertical-align:text-top;}
.classes .subtitle{font-size:14px;margin-top:10px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;}
.classes .short{color:#D64BD3;}
.classes .long{color:#D6984D;}
/* 分页 */
.pag ul{margin-top:100px;margin-bottom:60px;text-align:center;}
.pag li{width:40px;height:40px;line-height:40px;display:inline-block;border-radius:50%;background-color:#f0f0f0;cursor:pointer;}
.pag li.cur{background-color:#ffedb2;}
.pag li.clickable{background-color:#d6f2ff;}
.pag li.clcikable:hover{cursor:pointer;background-color:#b9cbf7;}
```
- **js**
```
(function($) {

    /*接口引用*/
    var GETCLASSES = "http://imoocnote.calfnote.com/inter/getClasses.php";

    /*ajax 全局函数*/
    $.ajaxSetup({
        error: function() {
            alert('调用接口失败');
            return false;
        }
    });

    /* 合二为一 定义一个函数 */
    function renderTemplate(templateSelector, data, htmlSelector) {
        var t = $(templateSelector).html();
        var f = Handlebars.compile(t);
        var h = f(data);
        $(htmlSelector).html(h);
    }

    function refreshClasses(curPage) {
        $.getJSON(GETCLASSES, {
            curPage: curPage
        }, function(data) {
            renderTemplate("#class-template", data.data, "#classes");
            renderTemplate("#pag-template", formatPag(data), "#pag");
            /*$('li.clickable').on('click', function(){
                $this = $(this);
                $this.data('id');*/
        });
    }

    function bindPageEvent() {
        $('#pag').delegate('li.clickable', 'click', function() { //delegate()委托事件
            $this = $(this);
            $this.data('id');
            refreshClasses($this.data('id'));
        });
    }
    bindPageEvent();

    $.getJSON(GETCLASSES, {
        curPage: 1
    }, function(data) {
        renderTemplate("#class-template", data.data, "#classes");
        renderTemplate("#pag-template", formatPag(data), "#pag");
        /*$('li.clickable').on('click', function(){
            $this = $(this);
            $this.data('id');
            refreshClasses($this.data('id'));
        });*/
    });


    /*ajax--渲染模版*/
    /*$.getJSON(GETCLASSES, {curPage: 1}, function(data){
        console.log(data);
        var t = $("#class-template").html();
        var f = Handlebars.compile(t);
        var h = f(data.data);
        $("#classes").html(h);

        var t = $("#pag-template").html();
        var f = Handlebars.compile(t);
        var h = f(formatPag(data));
        $("#pag").html(h);
    });*/


    /*是否有做笔记 的判断*/
    Handlebars.registerHelper("equal", function(v1, v2, options) {
        if (v1 == v2) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    });
    /*是否超过1个小时的判断*/
    Handlebars.registerHelper("long", function(v, options) {
        if (v.indexOf('小时') != -1) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    });
    /*分页*/
    function formatPag(pagData) {
        var arr = [];
        var total = parseInt(pagData.totalCount);
        var cur = parseInt(pagData.curPage);
        // 处理到首页的逻辑
        var toLeft = {};
        toLeft.index = 1;
        toLeft.text = '&laquo;';
        if (cur != 1) {
            toLeft.clickable = true;
        }
        arr.push(toLeft);

        //处理到上一页的逻辑
        var pre = {};
        pre.index = cur - 1;
        pre.text = '&lsaquo;';
        if (cur != 1) {
            pre.clickable = true;
        }
        arr.push(pre);

        //处理到cur页前的逻辑
        if (cur <= 5) {
            for (var i = 1; i < cur; i++) {
                var pag = {};
                pag.text = i;
                pag.index = i;
                pag.clickable = true;
                arr.push(pag);
            }
        } else {
            //如果cur>5,那么cur前的页面显示……
            var pag = {};
            pag.text = 1;
            pag.index = 1;
            pag.clickable = true;
            arr.push(pag);
            var pag = {};
            pag.text = '……';
            arr.push(pag);
            for (var i = cur - 2; i < cur; i++) {
                var pag = {};
                pag.text = i;
                pag.index = i;
                pag.clickable = true;
                arr.push(pag);
            }
        }
        //处理到cur页的逻辑
        var pag = {};
        pag.text = cur;
        pag.index = cur;
        pag.cur = true;
        arr.push(pag);

        //处理到cur页后的逻辑
        if (cur >= total - 4) {
            for (var i = cur + 1; i <= cur; i++) {
                var pag = {};
                pag.text = i;
                pag.index = i;
                pag.clickable = true;
                arr.push(pag);
            }
        } else {
            //如果cur <total-4,那么cur后的页面显示……
            for (var i = cur + 1; i <= cur + 2; i++) {
                var pag = {};
                pag.text = i;
                pag.index = i;
                pag.clickable = true;
                arr.push(pag);
            }
            var pag = {};
            pag.text = "……";
            arr.push(pag);
            var pag = {};
            pag.text = total;
            pag.index = total;
            pag.clickable = true;
            arr.push(pag);
        }
        //处理到一下页面的逻辑
        var next = {};
        next.index = cur + 1;
        next.text = '&rsaquo;';
        if (cur != total) {
            next.clickable = true;
        }
        arr.push(next);
        // 处理到尾页的逻辑
        var toRight = {};
        toRight.index = total;
        toRight.text = '&raquo;';
        if (cur != total) {
            toRight.clickable = true;
        }
        arr.push(toRight);
        return arr;
    };
})(jQuery);
```
