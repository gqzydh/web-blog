---
title: Html网页跳转 
date: 2018-6-5 9:51:01
tags:
- html 
- 跳转
categories: 
- HTML 
---

## 客户端跳转
```
<script language="javascript" type="text/javascript">
window.location="http: //www.admin5.com";;
</script>
```

## 让页面显示几秒钟之后跳转
```
<meta http-equiv="refresh" content="3; url=http://www.admin5.com">
（3秒钟后自动跳转到www.admin5.com）
```
此代码可以让网页在一定的时间内，跳转到另外一个网页上，其中content=" 为跳转前停暂的秒数，rul= 为跳转的网址

## 倒计时结束后跳转
```
第一种方法：
<script type="text/JavaScript">
var secs = 5; //倒计时的秒数 
for(var i=secs;i>=0;i--) 
{ 
window.setTimeout("doUpdate(" + i + ")", (secs-i) * 1000); 
} 
function doUpdate(num) 
{ 
document.getElementById("这里放显示秒数的控件的ID").innerHTML = num ; 
if (num == 0){window.location='这里放时间倒数完成后要跳转的页面'}
}
</script>
```
第二种方法：
```
<script type="text/javascript">
        var i = 5;
        var intervalid;
        intervalid = setInterval("fun()", 1000);
        function fun() {
            if (i == 0) {
                window.location.href = "这里放时间倒数完成后要跳转的页面";
                clearInterval(intervalid);
            }
            document.getElementById("这里放显示秒数的控件的ID").innerHTML = i;
            i--; 
        }
</script>
```

## 带进度条的页面跳转
```
<form name=loading>
        <P align=center>
            <FONT face=Arial color=#0066ff size=2>loading...</FONT>
            <INPUT style="PADDING-RIGHT: 0px; PADDING-LEFT: 0px; FONT-WEIGHT: bolder; PADDING-BOTTOM: 0px; COLOR: #0066ff; BORDER-TOP-style: none; PADDING-TOP: 0px; FONT-FAMILY: Arial; BORDER-RIGHT-style: none; BORDER-LEFT-style: none; BACKGROUND-COLOR: white; BORDER-BOTTOM-style: none" size=46 name=chart>
            <BR>
            <INPUT style="BORDER-RIGHT: medium none; BORDER-TOP: medium none; BORDER-LEFT: medium none; COLOR: #0066ff; BORDER-BOTTOM: medium none; TEXT-ALIGN: center" size=47 name=percent>
            <SCRIPT>
            var bar = 0
            var line = "||"
            var amount = "||"
            count()

            function count() {
                bar = bar + 2
                amount = amount + line
                document.loading.chart.value = amount
                document.loading.percent.value = bar + "%"
                if (bar < 99) { setTimeout("count()", 100); } else { window.location = "https://www.xgqq.com/"; }
            }
            </SCRIPT>
        </P>
    </form>
```

## 服务器端跳转
```
Response.Redirect(www.admin5.com)
Response.End
```



