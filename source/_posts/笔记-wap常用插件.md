---
title: Wap常用插件
date: 2017-10-15 8:00:01
tags:
- 笔记
- wap
categories: 
- 笔记
---

1. 遮罩层 2秒 后自动关闭
2. 


## 遮罩层 2秒 后自动关闭 ##
```
<div id="div1" style="width:100%; height:100%; overflow:hidden; background:rgba(0,0,0,0.6); position:fixed; top:0; left:0; padding-bottom:100%"></div>
<div id="div2" style=" position:fixed; top: 20%; left:5%; width:90%;"><a onclick="document.getElementById('div1').style.display='none';document.getElementById('div2').style.display='none';" style="position: absolute; right:0; width:8%;"><img src="http://bank.wo.cn/public/upres/20170314152522.png" width="100%"></a><img src="http://bank.wo.cn/public/upres/20170314152506.png" width="100%"></div>

<script>
    setTimeout(function(){document.getElementById('div1').style.display='none';document.getElementById('div2').style.display='none';},2000);
</script>
```

## 应用到的Js技术 ##

#### require.js ####
> 1. 实现js文件的异步加载，避免网页失去响应；
> 2. 管理模块之间的依赖性，便于代码的编写和维护。

- 使用AMD模块的写法
> 具体来说，就是模块必须采用特定的define()函数来定义,如果一个模块不依赖其他模块，那么可以直接定义在define()函数之中。

<!-- more -->

## js-时间转换 ##
```
	var qxtime = json.data.finishTime.time;
	var myTime = new Date(qxtime);
	var year = myTime.getFullYear();
	var month =  (myTime.getMonth()+1);
	var day = (myTime.getDate());
	if(month < 9){
	    month = "0" + month;
	}
	if(day<9){
	    day = "0" + day;
	}
	var formatdate = year +"年"+ month +"月" +day+"日" 
	$("#times").html(formatdate)
```

## template.js模版 ##
- 时间调用
```
	<#
		var investTime = self.investData.repaymentTime ? self.investData.repaymentTime.time : null;
		var hkDate = investTime ? moment(investTime).format("YYYY-MM-DD") : null;
	#>

	<div>完成时间 : <span id="times"><# print(hkDate)#></span></div>
```
- 循环模块
```
<script type="text/template" data-tpl="taskList">
	<# 
		$.each(self.task.types, function(j, lst){	
	#>
	<!-- 大模块 -->
	<div class="explain">
		<div class="tit">
			<h2 class="fl"><# print(lst.typeName); #></h2>
		</div>
		<# 
			$.each(lst.tasks, function(i, lsts){
		#>
		<!-- 内部列表 -->
			<div class="content-li zc">
			<!-- 图片读取 -->
				<div class="img">
					<img src="<# print(APP_CONFIG.static_domain + lsts.icon); #>" alt="">
				</div>
				<div class="content-task">
					<div class="task-det">
						<p class="task-tit"><# print(lsts.taskName); #></p>
						<p class="t-limit"><# print(lsts.content); #></p>
					</div>

				</div>
			</div>
		<# }); #>	
	</div>
	<# }); #>	
</script>

----------js--------------
getInitData : function(callBack){
    var activeid = $(this.userId).selector;
	var router = this.getApiRouter("vip/task",{
		signUUID : activeid
	});
	this.setXHR("vip/task", function(){
		return this.postData(router.url, router.data, function(json){
			if(json.error == -1){
				this.task = json.data;
			}
			callBack.call(this);
		});
	});
},

```
