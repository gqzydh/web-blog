---
title: HTML5 存储：web Storage
date: 2018-12-20 14:51:01
tags:
- HTML5
categories: 
- HTML5
---


HTML5的 web Storage 存储方式有两种：localStorage 和 sessionStorage。

这两种方式都是通过键值对保存数据，存取方便，不影响网站性能。他们的用法相同，存储时间不同。

localStorage 的数据保存在本地硬件上，可以永久保存，可以手动调用api清除数据。

sessionStorage 保存在 session 对象中，会在浏览器关闭时被清除。

web Storage 的大小在浏览器上是有限制的，不同浏览器大小会有区别，在主流浏览器中，大小约为 5M，用来存储普通数据其实已经够用。

## localStorage 和 sessionStorage 的区别

1. 一样都是用来存储客户端临时信息的对象。
2. 都只能存储字符串类型的对象（虽然规范中可以存储其他原生类型的对象，但是目前为止没有浏览器对其进行实现）。
3. localStorage 生命周期是永久，除非用户清除浏览器提供的 localStorage 信息。
4. sessionStorage 生命周期为当前窗口或标签页，一旦窗口或标签页被永久关闭了，那么所有通过sessionStorage存储的数据也就被清空了。
5. 不同浏览器无法共享localStorage或sessionStorage中的信息。
6. 相同浏览器的不同页面间可以共享相同的localStorage（页面属于相同域名和端口），但是不同页面或标签页间无法共享sessionStorage的信息。（页面及标签页仅指顶级窗口，如果一个标签页包含多个iframe标签且他们属于同源页面，那么他们之间是可以共享sessionStorage的）。


## 用法 

> 以 localStorage 为例，sessionStorage 用法也一样：

首先在使用 localStorage 的时候，我们需要判断浏览器是否支持localStorage这个属性

示例：
```
if(！window.localStorage){
    alert("浏览器不支持localstorage");
    return false;
}else{
    //主逻辑业务
    // localStorage的写入有三种方法
    var storage=window.localStorage;
    storage["a"]=1;   //写入a字段
    storage.b=2;      //写入b字段
    storage.setItem("c",3);    //写入c字段
}
```
> localStorage只支持string类型的存储。

- 存储 setItem
存储数据：localStorage.setItem(key,value);

示例：
```
localStorage.setItem('data','Hello World');
```
> 当 key 相同时会覆盖之前的 value，用于修改数据。如果 value 为对象，需转为 json 字符串，否则你读取出来的将会是 [object Object]
> 一般我们会将JSON存入localStorage中，localStorage会自动转换成为字符串形式,
> 这个时候我们可以使用JSON.stringify()这个方法，来将JSON转换成为JSON字符串

示例：
```
var data={
        name:'xiecanyong',
        sex:'man',
        hobby:'program'
    };
    var vall=JSON.stringify(data);
    storage.setItem("data",vall);
    console.log(storage.data);
```

- 读取 getItem
读取数据：localStorage.getItem(key);

示例：
```
localStorage.getItem('data');       // Hello World
```
读取之后要将JSON字符串转换成为JSON对象，使用JSON.parse()方法

示例：
```
//将JSON字符串转换成为JSON对象输出
var json=storage.getItem("data");
var jsonObj=JSON.parse(json);    //JSON.parse()方法
console.log(typeof jsonObj);
```

- 删除 removeItem
删除单个数据：localStorage.removeItem(key);

示例：
```
localStorage.removeItem('data');
localStorage.getItem('data');       // null
```
> 删除 key 为 data 的数据后，loaclStorage 里已经获取不到该数据，则返回 null;

- 删除 clear
删除所有数据：localStorage.clear();

示例：
```
localStorage.clear();
```
此时会把 localStorage 中的所有数据都删除。

- key
得到某个索引的key：localStorage.key(index);

示例：

```
localStorage.setItem('data1','Hello World');
localStorage.setItem('data2','javaScript');
localStorage.key(1);                // data2
```

获取到索引为 1 的 key，是 data2

构造函数

在实际项目中，可能需要多次对 localStorage进行操作，我们可以通过一个构造函数来更好的操作。

示例：
```
var localEvent = function (item) {
    this.set = function (val) {
        localStorage.setItem(item, val);
    }
    this.get = function () {
        return localStorage.getItem(item);
    }
    this.remove = function () {
        localStorage.removeItem(item);
    }
    this.clear = function () {
        localStorage.clear();
    }
}

// 使用new字符把构造函数实例化出多个对象
var local1 = new localEvent('data1');
var local2 = new localEvent('data2');

local1.set('Hello World');
local2.set('JavaScript');

local1.get();               // Hello World
local2.get();               // JavaScript
```

> 像平时在项目中可能要把对象存储起来，就需要在代码里做些处理。

## 监听 storage 事件

可以通过监听 window 对象的 storage 事件并指定其事件处理函数，当页面中对 localStorage 或 sessionStorage 进行修改时，则会触发对应的处理函数。

```
window.addEventListener('storage',function(e){
    console.log('key='+e.key+',oldValue='+e.oldValue+',newValue='+e.newValue);
})
```

触发事件的时间对象（e 参数值）有几个属性：

- key : 键值。
- oldValue : 被修改前的值。
- newValue : 被修改后的值。
- url : 页面url。
- storageArea : 被修改的 storage 对象。
> 注意：在谷歌浏览器中，需要在不同标签页中修改 storage 才会触发该事件，即 网页A 监听该事件，在 网页B 中修改 localStorage，则 网页A 会触发事件函数。但是在 IE 中，在同个网页修改 localStorage 都会触发该事件。

## 调试
谷歌浏览器自带调试工具(chrome devtools)非常好用，可以用来调试 localStorage 和 sessionStorage。打开浏览器按f12调出调试工具，可以看到 Application ，点击打开可以看到左边栏有 Storage，包括了 localStorage、sessionStorage、IndexedDB等，选中我们要调试的网站域名，可以看到右边有对应的 key 和 value，可以通过右键进行编辑或删除等。

## 兼容

IE8 以上就兼容，但是比较特别，需要在服务器上打开的才支持，直接双击打开文件的 file:// 是不兼容的。

到了 IE11 才支持 file:// 下打开的，其他浏览器的支持程度都很高，包括在手机上的兼容。
具体浏览器版本的兼容可查看：[caniuse.com/#search=localstorage](https://caniuse.com/#search=localstorage)

