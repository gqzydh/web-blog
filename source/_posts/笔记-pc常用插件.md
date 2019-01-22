---
title: pc常用插件 
date: 2017-10-17 14:51:01
tags:
- 笔记  
- pc
categories: 
- 笔记 
---

1. 轮播图片
2. 点击弹框(使用js引擎模版)
3. 点击自定义弹框
4. 点击触发
5. 输出服务器返回的时间


## 轮播图片 - bxSlider
```
bxSlider  //强大的支持手机端响应式的jQuery焦点图轮播特效插件bxslider.js
bxSlider : function(){
            //页面加载banner特效
            var slide = $("#slide-focus"); 
            var list = slide.find(".slide-list");
            var pagerCustom = slide.find(".slide-nav-list");  
            var obj = list.bxSlider({
                mode : "fade",
                speed : 400,
                maxSlides: 1,
                moveSlides : 1,
                auto: true,
                autoStart : true,
                autoHover : true,                       
                pause: 3000,
                startSlide : 0, 
                controls : true,
                pagerCustom : pagerCustom,
                controls : false
            }); 
            slide.hover(function(){
                obj.stopAuto();
            }, function(){
                obj.startAuto();
            });     
        },
```

## 点击弹框[一]
```
<span id="btn">点击</span>
<script type="text/template" id="tpl-otherWay">
<!-- 弹出的内容 -->
</script>

js
$("#btn").click(function(){
    var dialog = XDK.ui.dialog.getInstance({
        width : 600,
        height : 600,
        resizable : false,  //缩放
        draggable : false,  //拖动
        alphaFix : true,    //透明背景
        title : "其他充值方式",
        content : _.template($("#tpl-otherWay").html(), {}),
        events : {
            beforeclose : function(_self){
                // closeBtns.off();
            }
        }
    });
})
```

## 点击弹框[二]
```
<div class="btnkk">点击弹框</div>
// 设置模版引擎
<script type="text/html" id="btnkk">
  <div class="bidPoolInvestBox">
    kkkkkkkkkkk
  </div>
</script>
// js
$('.btnkk').click(function(){
    $(".creditorsrights").attr("data-id",json.investDetail.billId)
  $.ajax({ 
        url: '/front/bidpool/bidPoolDebtList', 
        type: 'POST', 
        dataType: 'json', 
        data : {"investId":strs,"billId":json.investDetail.billId},
        success:function(json){
var json ={json 数据}
var datas = json;
var html = template('bidPoolInvestByInvest', datas); 
document.getElementById('bidPoolInvestByInvest').innerHTML = html; 

var jsons = json.list
var htmls = template('detaiListaaa', jsons); 
document.getElementById('detaiListaaa').innerHTML = htmls; 

    var vol1ListTpls = $("#btnkk").html();
    var dialogObj = XDK.ui.dialog.getInstance({
        title : "债权详情",
        alphaFix : true,
        width : 600,
        height:'auto',
        resizable : false,
        content : _.template(vol1ListTpls),
        events : {
            beforeclose : function(_self){
                
            }
        }
    });
})

<!-- 展示数据 -->
<script type="text/html" id="bidPoolInvestByInvest">
  <div class="bidPoolInvestBox">
  {{each list as value i}}
     <div class="bidPoolInvesttits">kkkkkk{{value.amount}}</div> 
     <table class="bidPoolInvestlist">
        
        {{include 'detaiListaaa' value}}
     
     </table>
  {{/each}}
</div>
</script>

<!-- 格式模版 -->
<script type="text/html" id="detaiListaaa">
  {{each debtList as value i}}
    <tr>
      <td>
        {{value.title}}
      </td>
      <td>
        {{value.amount}}
      </td>
      <td>
        {{value.finishDate}}
      </td>
      <td>
        <span>查看协议</span>
      </td>
    </tr>  
  {{/each}}
</script>
```

## 点击自定义弹框
```
html
<div class="ibox" style="position:absolute;top:0;left:0;background:rgba(0,0,0,0.5);width:100%;height:100%;z-index:9999;display:none;">
   <div class="ui-grid box-d">
       <div class="err">
           <div class="tit fix">
               <h4>余额不足</h4>
               <div class="c"></div>
           </div>
           <div class="ercon">
               <p >32165465</p>
               <a  id="gorechange" class="ui-btn">前往充值</a>
           </div>
       </div>
   </div>
</div>
javascript
$('.c').click(function(){
   $('.ibox').hide();
})
css
.box-d{width:402px;height:250px;position:fixed;top:50%;left:50%;margin-top:-201px;margin-left:-125px;}
           .tit{height:60px;line-height:60px;color:#fff;font-size:16px;background:#fd5e5e;}
           .tit h4{float:left;padding-left:20px;}
           .tit .c{float:right;width:60px;height:60px;background:url(/public/static/img/close.png) no-repeat center center;cursor:pointer;}
           .tit .c:hover{opacity:0.6;filter:alpha(opacity=60);}
           .ercon{height:190px;background:#fff;width:100%;}
           .ercon p{padding:40px 0;text-align:center;font-size:16px;}
           .ercon a{margin-top:20px;margin-left:23%;width:50%;}
```

## 点击触发
```
$("#btn-submit").click(function(){
    var amountmoney = $("#amount").val();
    console.log('amountmoneyamountmoneyamountmoneyamountmoney:',amountmoney)
    var txAmount = $('#p-money').val();                         
    var smsSeq = ''
    var smsCode = $('#inp-phoneCode').val();
        $.ajax({
            type:"POST",
            url:"/front/account/rechargeCommit",
            /*                      txAmount : $('#p-money').val(),
            smsSeq : '',
            smsCode = '1234'*/

            data:{txAmount,smsSeq,smsCode},

            success:function(data){
                console.log('ttttttt===>',data)
                $('#p-money').empty();
                $('#inp-phoneCode').empty();
              alert("充值成功");

            },
            error: function(){
                //请求出错处理
                console.log( 'Error 错误码')
            }         
        });

});
```

## 输出服务器返回的时间
```
var time = new Date(json.investDetail.lockDate.time);
    var newDate = new Date(time);
    var seconds=newDate.getSeconds();
    var minutes=newDate.getMinutes();
    var gdate = newDate.getDate() ;
    var mosth = (newDate.getMonth()+1)
    if(mosth<=9){
        mosth="0"+mosth
    }if(gdate<=9){
        gdate="0"+gdate
    }if(minutes<=9){
        minutes="0"+minutes
    }if(seconds<=9){
        seconds="0"+seconds
    }
    var formatdate=newDate.getFullYear()+"-"+mosth+"-"+gdate+""
    console.log("kkkkkk====01",formatdate);
    $("#formatdate").html(formatdate)
```


