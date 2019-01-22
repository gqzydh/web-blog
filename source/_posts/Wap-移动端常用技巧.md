---
title: 移动端常用技巧 
date: 2017-10-17 14:51:01
tags:
- 移动端 
categories: 
- 移动端 
---


手机页面禁止长按保存图片
```
img { pointer-events: none; }
img { -webkit-user-select: none; }
<script>
window.ontouchstart = function(e) { e.preventDefault(); };
</script>
```
调用手机摄像头拍照，兼容android手机
```
<div class="up-pic pt-page-moveGradient">
      <label class="btn-file" data-role="add"> <img src="images/up-photos.png" alt="">
        <input type="file"  class="input-file" data-role="uploader" accept="image/*"  capture="camera">
      </label>
    </div>
<script>
function scamera() {
                var videoElement = document.getElementById_x('video');
                var canvasObj = document.getElementById_x('canvas1');
                var context1 = canvasObj.getContext('2d');

            }
</script>
```
针对安卓 选择框 出现边框问题
```
.userHeight select{
-webkit-appearance:none;
    -moz-appearance: none;
appearance: none;
    border: 0 none;
    height: 56px;
}
```
##HTML中通过CSS设置背景图片自适应浏览器
```
<div id="formbackground" style="position:absolute; z-index:-1;"><img src="10.jpg" height="100%" width="100%"/></div>

<script type="text/javascript">
$(function(){               $('#formbackground').height($(window).height());
  $('#formbackground').width($(window).width());
});
</script>
```