---
title: Ajax笔记 
date: 2017-10-17 14:51:01
tags:
- Ajax 
categories: 
- Ajax 
---


```
responseText： //获得字符串形式的响应数据
responseXML： //获得 XML 形式的响应数据
```
##Ajax ajax readyState的五种状态详解##
0 － （未初始化）还没有调用send()方法 
1 － （载入）已调用send()方法，正在发送请求 
2 － （载入完成）send()方法执行完成，已经接收到全部响应内容 
3 － （交互）正在解析响应内容 
4 － （完成）响应内容解析完成，可以在客户端调用了

## Jquery ajax 示例详解 ##
http://www.365mini.com/page/jquery_ajax.htm   //供参考
```
function test(){
   $.ajax({
      async: false, //默认是true，true为异步方式, false为同步请求
      url: "testLogin.aspx", //数据接口
      xhrFields : {  //为真而执行跨域名请求
        withCredentials : true
      },
      type: "POST",  //提交数据的类型 POST GET
      cache: false,  //true读缓存数据, false去服务器获取数据
      processData: false,  
      contentType: false,
      data:{Name:"sanmao",Password:"sanmaoword"}, //提交的数据
      datatype: "html", //返回数据的格式"json", "jsonp", "text".

      beforeSend:function(){  //在请求之前调用的函数
        $("#msg").html("logining");
      }, 
                  
      success:function(data){ //成功返回之后调用的函数 
        $("#msg").html(decodeURI(data));            
      },

      complete: function(XMLHttpRequest, textStatus){  //指定请求完成(无论成功或失败)后需要执行的回调函数。
         alert(XMLHttpRequest.responseText);
         alert(textStatus);
          //HideLoading();
      },
      
      error: function(){  //调用出错执行的函数
          //请求出错处理
      }         
   });

  }
```

## 解决Ajax缓存问题的方法 ##
解决这个问题最有效的办法是禁止页面缓存，有以下几种处理方法：

1、在ajax发送请求前加上 xmlHttpRequest.setRequestHeader(“Cache-Control”,”no-cache”);

2、在服务端加 header(“Cache-Control: no-cache, must-revalidate”);

3、在ajax发送请求前加上 xmlHttpRequest.setRequestHeader(“If-Modified-Since”,”0″);

4、在 Ajax 的 URL 参数后加上 "?fresh=" + Math.random(); //当然这里参数 fresh 可以任意取了

5、第五种方法和第四种类似，在 URL 参数后加上 "?timestamp=" + new Date().getTime();

6、用POST替代GET：不推荐

7、jQuery提供一个防止ajax使用缓存的方法：
```
<script type="text/javascript" language="javascript"> 
     $.ajaxSetup ({ 
           cache: false //close AJAX cache 
      }); 
</script>
```
8、修改load 加载的url地址，如在url 多加个时间参数就可以：
```
function loadEventInfoPage(eventId){
    $.ajaxSetup ({ 
       cache: true // AJAX cache  下面加上时间后load的页面中的js、css图片等都会重新加载，   

         //加上这句action会重新加载，但是js、css、图片等会走缓存 
    }); 
    $("#showEventInfo").load(ctx + "/custEvents/viewEvent.action",  {"complaint.Id":eventId, "tt":(new Date()).getTime()},function(){}) 
}
```

9、设置html的缓存
```
<META HTTP-EQUIV="Pragma" CONTENT="no-cache">    
<META HTTP-EQUIV="Cache-Control" CONTENT="no-cache">    
<META HTTP-EQUIV="Expires" CONTENT="0">
```