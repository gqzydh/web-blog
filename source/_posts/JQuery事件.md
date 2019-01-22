---
title: JQuery事件 
date: 2017-10-17 14:51:01
tags:
- jQuery 
categories: 
- jQuery 
---


## 委托事件

delegate()委托事件
```
function bindPageEvent(){
    $('#pag').delegate('li.clickable', 'click', function(){  
            $this = $(this);
            $this.data('id');
            refreshClasses($this.data('id'));
            });
        }
bindPageEvent();  //事件执行
```

## 鼠标触发事件-block/none

```
<script type="text/javascript">
    $(document).ready(function(){
        
    }); 
    
    jQuery(function(){    
      $(".Story_map").hover(function(){  
            $(this).find('.Story_btn').css('display','block');
      }).bind("mouseleave",function(){  
            $(this).find('.Story_btn').css('display','none');    
      }); 
});
</script>
```

## jQuery实现水平和垂直居中

```
$(window).resize(function(){ 
    $(".mydiv").css({ 
        position: "absolute", 
        left: ($(window).width() - $(".mydiv").outerWidth())/2, 
        top: ($(window).height() - $(".mydiv").outerHeight())/2 
    });        
}); 
//此外在页面载入时，就需要调用resize()。
$(function(){ 
    $(window).resize(); 
}); 
```