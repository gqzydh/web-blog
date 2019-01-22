---
title: Html数据存储 
date: 2018-6-5 9:51:01
tags:
- html 
categories: 
- HTML 
---


Web 应用中数据可以保存到2个地方：Web服务器，Web客户端
## Web存储分
1. 本地存储： 对应`localStorage`  用于长期保存网站数据，和 `cookie` 放一起
2. 会话存储： 对应`sessionStorage`  用于临时保存一个窗口（标签页）的数据

## 存储方法
保存数据： `localStorage.setItem("keyName", "data");`
获取数据： `var nameInput = document.getElementById("keyName");`
*sessionStorage* 存储方法同 `localStorage` 一样

```
localStorage.setItem(key,value)：将value存储到key字段
localStorage.getItem(key):获取指定key本地存储的值
localStorage.removeItem(key):删除指定key本地存储的值
```

## 删除数据项
只需要调用 `removeItem()` 方法
```
localStorage.removeItem("keyName");
```
还有更厉害的 `clear()` 方法，清空网站在本地保存的会话数据
```
sessionStorage.clear();
```

## 查找所有数据项
不知道键名，可使用 `key()` 方法从本地或回话存储中取得（当前网站保存的）所有数据项

实例：
遍历本地存储中的所有数据项
```
<button onclick="findAllItems()">点击查看本地存储的内容</button>
<ul id="itemList">
</ul>

function findAllItems(){
    //取得用于保存数据项<ul>元素
    var itemList = document.getElementById("itemList");

    //清除列表
    itemList.innerHTML = "";

    遍历所有数据项
    for (var i=0; i<localStorage.length; i++) {
        //取得当前位置数据项的键
        var key = localStorage.key(i);
        //取得以该键保存的数据值
        var item = localStorage.getItem(key);
        //用以上数据创建一个列表项
        var newItem = document.createElement("li");
        newItem.innerHTML = key + ": " + item;
        //添加到页面中
        itemList.appendChild(newItem);
    }
}
```

## 保存数值和日期
可以使用 `Number()` 
```
x = Number(localStorage.setItem("keyName");
```

日期：先把日期转换成相应的文本，再根据文本创建日期对象
```
(function timeData(){
    var today = new Date();
    //按照YYYY/MM/DD的标准格式把日期转换成文本字符串
    var todayString = today.getFullYear()+'/'+today.getMonth()+'/'+today.getDate();
    //保存为文本
    sessionStorage.setItem("session", todayString);
    //取得日期文本，并基于该文本创建新的日期对象
    today = new Date(sessionStorage.getItem("session"));
    alert(todayString);
})();
```

## 保存对象
JSON 把结构化数据，转换为文本的一种简便格式
`JSON.stringify()` 转换为文本形式
`JSON.parse()` 把文本转换回对象
自定义 `PersonalityScore` 对象，
```
function PersonalityScore(o,c,e,a,n){
    this.openess = 0;
    this.conscientiousness = c;
    this.exteaversion = e;
    this.agreeableness = a;
    this.neursticism = n;
};
//创建PersonalityScore 对象，
var score = new PersonalityScore(o,c,e,a,n);
//将其保存为方便的JSON格式
sessionStorage.setItem("PersonalityScore", JSON.stringify(score));
//转到结果页面
window.location = PersonalityText_Score.html;

到新页面后，从存储中取出JSON文本，使用JSON.parse()方法转换回对象
//JSON文本转换为原来的对象
var score =  JSON.parse(sessionStorage.getItem("personalityScore"));
//从对象中取得数据
lblScoreInfo.innerHTML = "你的数据是" + score.extraversion;
```


## 响应存储变化
`window.addEventListener` 存储发生变化时触发
实例：
```
第一个页面
function addValue() {
  // 从两个文本框中获取值
  var key = document.getElementById("key").value;
  var item = document.getElementById("item").value;

  // 将获取的值放在本地存储器中。
  // (如果键已经存在，则新项替换旧项.)
  localStorage.setItem(key, item);
}
第二个页面
window.onload = function() {
  window.addEventListener("storage", storageChanged, false);
};
//取得的信息，显示到页面上
function storageChanged(e) {
  var message = document.getElementById("updateMessage");
  message.innerHTML = "Local storage updated.";
  message.innerHTML += "<br>Key: " + e.key;
  message.innerHTML += "<br>Old Value: " + e.oldValue;
  message.innerHTML += "<br>New Value: " + e.newValue;
  message.innerHTML += "<br>URL: " + e.url;
}
```

## 读取文件
> 取得文件的三种方式

1. 使用`<input>` 将`type='file'`   这样就能得到一个标准的上传文件框，再编写一点 js 来利用file API, 就可以在本地打开文件
2. 隐藏`<input>`元素，设置一个按钮， 点击按钮通过js 调用`<input> `的`click()方法`
3. 拖放

> 用<input> 读取文本文件
`var reader = new FileReader();`  `FileReader()` 提取文件内容

- 调用FileReader对象的方法
`FileReader` 的实例拥有 4 个方法，其中 3 个用以读取文件，另一个用来中断读取。
```
abort      none     //中断读取
readAsBinaryString   file    //将文件读取为二进制码
readAsDataURL    file    //将文件读取为 DataURL
readAsText   file, [encoding]    //将文件读取为文本
```
readAsText：该方法有两个参数，其中第二个参数是文本的编码方式，默认值为 UTF-8。这个方法非常容易理解，将文件以文本方式读取，读取的结果即是这个文本文件中的内容。
readAsBinaryString：该方法将文件读取为二进制字符串，通常我们将它传送到后端，后端可以通过这段字符串存储文件。
readAsDataURL：这是例子程序中用到的方法，该方法将文件读取为一段以 data: 开头的字符串，这段字符串的实质就是 Data URL，Data URL是一种将小文件直接嵌入文档的方案。这里的小文件通常是指图像与 html 等格式的文件。

- FileReader 处理事件
FileReader包含了一套完整的事件模型，用于捕获读取文件时的状态，下面这个表格归纳了这些事件
```
onabort    //中断时触发
onerror    //出错时触发
onload     //文件读取成功完成时触发
onloadend      //读取完成触发，无论成功或失败
onloadstart    //读取开始时触发
onprogress     //读取中
```

## 替换标准的上传控件
```
<script>
function processFiles(files) {
  var file = files[0];
  var reader = new FileReader();
  reader.onload = function (e) {
    // 当这个事件结束时，数据就准备好了
    // 将其复制到页面上的<div>。
    var output = document.getElementById("fileOutput");   
    output.textContent = e.target.result;
  };
  reader.readAsDataURL(file);
}

function showFileInput() {
  var fileInput = document.getElementById("fileInput");
  fileInput.click();
}
html
<input id="fileInput" type="file" size="50" onchange="processFiles(this.files)">
<button onclick="showFileInput()">Analyze a File</button>
<div id="fileOutput">显示文件内容</div>
</script>
```

## 一次读取多个文件
一次提交多个文件，只要为`<input>`元素添加 `multiple` 属性
```
<input id="fileInput" type="file" onchange="processFiles(this.files)" multiple>
```
使用 for 循环来依次处理每个文件
```
for( var i=0; i<files.length; i++ ){
    var file = files[i];
}
```

## 通过拖拽读取图片文件

