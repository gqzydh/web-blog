---
title: pc工作笔记 
date: 2017-10-17 14:51:01
tags:
- 笔记  
- pc
categories: 
- 笔记  
---

1. url 共用链接
2. pc配置文件路径
2. 本地点击投资-调整投资成功弹框
3. 注册-成功消息通知


## url 共用链接 ##
```
<script type="text/javascript" src="/public/javascripts/publicurl.js"></script>
 //url : url+"/wf/welfare-rank/info",
 url = "http://test.qianqiandog.com:8896"   //测试地址

 var url = "https://gateway.xgqq.com"
```

## pc配置文件路径 ##
```
conf/application.conf   //pc配置文件路径
```

## 本地点击投资-调整投资成功弹框
invest.java 
```
//invest.java 注释下面2行代码
private static void notifyAliyunOns(long userId, long bidId, t_bids bid, t_invests tinvest) {
        InvestMsg investMsg = new InvestMsg(userId, tinvest.id, bidId, bid.product_id, bid.period,
                BigDecimal.valueOf(bid.apr), BigDecimal.valueOf(tinvest.amount), bid.lockPeriod,
                BigDecimal.valueOf(bid.baseApr), BigDecimal.valueOf(bid.topApr),
                BigDecimal.valueOf(bid.floatApr));
        /*AliyunOnsMsgProducerHelper.send(JSON.toJSONString(investMsg), MsgEnum.AFTER_INVEST,
                String.valueOf(tinvest.id));*/
    }
```

## 注册-成功消息通知
User.java 
```
//注释下面的代码
// 注册成功消息通知
AliyunOnsMsgProducerHelper.send(JSON.toJSONString(new SimpleUserInfoMsg(this.id, this.name)),
        MsgEnum.USER_REGISTED, String.valueOf(this.id));
```
