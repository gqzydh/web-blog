---
title: 微信活动分享 
date: 2017-10-17 14:51:01
tags:
- 微信分享 
- 代码
categories: 
- 代码 
---


```
if(ua.match(/MicroMessenger/i)=="micromessenger") {
    var activeidss = $(this.userData.name).selector;
                        this.setXHR("weixin/sigin", function(){
                            var router = _this.getApiRouter("weixin/sigin", {});
                            return _this.postData(router.url, router.data, function(json){
                                if(json.error == -1){
                                    var jsapi_t = json.jsapi_ticket;
                                    var access_t = json.access_token;
                                    var wxTimes = new Date().getTime() ;
                                    var stra_z = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                                    var n = 16, s = "";
                                    for(var i = 0; i < n; i++){
                                        var rand = Math.floor(Math.random() * stra_z.length);
                                        s += stra_z.charAt(rand);
                                    }
                                    var wxnoncestr = s

                                    var wxurl = window.location.href.split('#')[0];

                                    var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}   

                                        //signature
                                    var wxstring1 ="jsapi_ticket="+jsapi_t + "&noncestr=" + wxnoncestr + "&timestamp=" + wxTimes+ "&url=" + wxurl
                                    var sha = hex_sha1(wxstring1)


                                    wx.config({
                                        debug: false,
                                        appId: 'wxe7b476931',
                                        timestamp: wxTimes,
                                        nonceStr: wxnoncestr,
                                        signature: sha,
                                        jsApiList: [
                                            // 所有要调用的 API 都要加到这个列表中
                                            'onMenuShareTimeline',
                                            'onMenuShareAppMessage',
                                            'hideMenuItems'
                                          ]
                                    }); 
                                    wx.ready(function () {   
                                        wx.hideMenuItems({menuList: ['menuItem:share:qq',
                                                       'menuItem:share:weiboApp',
                                                       'menuItem:favorite',
                                                       // 'menuItem:share:appMessage',
                                                       'menuItem:share:QZone',
                                                       'menuItem:openWithSafari',
                                                       'menuItem:openWithQQBrowser',
                                                       'menuItem:share:email',
                                                       'menuItem:share:brand',
                                                       'menuItem:editTag',
                                                       'menuItem:share:facebook',
                                                       'menuItem:setFont',
                                                       'menuItem:exposeArticle',
                                                       'menuItem:copyUrl',
                                                       'menuItem:openWithSafari',
                                                       'menuItem:readMode',
                                                       'menuItem:originPage',
                                                       'menuItem:delete']
                                        });

                                        //分享到朋友圈
                                        wx.onMenuShareTimeline({
                                            title: '新年大红包，快来开个“旺”运吧。', // 分享标题
                                            link: 'http://wx.xxxx.com/#activity/chest?invite='+activeidss+'', // 分享链接
                                            imgUrl: 'http://wx.xxxx.com/static/img/chest/share.jpg', // 分享图标
                                            success: function () { 

                                            },

                                            cancel: function () { 
                                                // 用户取消分享后执行的回调函数
                                            }
                                        });
                                        //分享朋友
                                        wx.onMenuShareAppMessage({
                                            title: '送红包！新年行“旺”运', // 分享标题
                                            desc: '新年大红包，快来开个“旺”运吧。', // 分享描述
                                            link: 'http://wx.xxxx.com/#activity/chest?invite='+activeidss+'', // 分享链接
                                            imgUrl: 'http://wx.xxxx.com/static/img/chest/share.jpg', // 分享图标
                                            success: function () { 

                                            },

                                            cancel: function () { 
                                                // 用户取消分享后执行的回调函数
                                            }
                                        });
                                                            
                                    });


                                }

                            });

                        });
}
```
