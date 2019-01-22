---
title: jQuery ajax读取json文件内容
date: 2017-10-17 14:51:01
tags:
- Ajax
categories: 
- Ajax
---


##**ajax 代码**##
```
<script type="text/javascript">  
$(document).ready(function() {  
    $.ajax({  
        type:"GET",  //请求方式为get  
        url:"user.json", //json文件位置  
        dataType: "json",  //返回数据格式为json  
        //请求成功完成后要执行的方法  
        success: function(data){  
         console.log(date.button);
         var aav = date.button;
            //使用$.each方法遍历返回的数据date,插入到id为#result中 
           $.each(aav,function(ii,item){
               var conter = item.type+","+item.name+","+item.key;  
                $("#result").append(content);  
            })  
        },
        error:function(jqXHR){                   alert("发生错误："+jqXHR.status);
        }
    })  
});  
</script>
```
##**json文件**##
```
{
     "button":[
     {  
          "type":"click",
          "name":"今日歌曲",
          "key":"V1001_TODAY_MUSIC"
      },
      {
           "name":"菜单",
           "sub_button":[
           {    
               "type":"view",
               "name":"搜索",
               "url":"http://www.soso.com/"
            },
            {
               "type":"view",
               "name":"视频",
               "url":"http://v.qq.com/"
            },
            {
               "type":"click",
               "name":"赞一下我们",
               "key":"V1001_GOOD"
            }]
       }]
 }
```
获取数据 展示
```
(function($) {
  $('td[data-reveal-id]').on('click', function(e) {
    e.preventDefault();
    var modalLocation = $(this).attr('data-reveal-id');
    $('#'+modalLocation).reveal($(this).data());
    var bidId = $(this).attr("data-id")

     $.ajax({
            url: '/front/invest/bidInfo',
            type:"GET",
            dataType: 'json',
            data:{"bidId":bidId},
            success: function(data) {
               var datalist = data.infos;
               var html = "";
               for (var i =0; i<datalist.length; i++) {
                     html += '<div class="introdiv"><h3 class="titintro">'+datalist[i].title+'</h3><dl class="indl01">'+datalist[i].content+'<dd></dd></dl></div>';
               }
               $("#contentnr").html(html)

            },
            error: function(err) {
                alert('数据获取失败，请重试', 'warning');
            }
        });
                
  });

```
