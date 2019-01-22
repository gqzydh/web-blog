---
title: Javascript事件
date: 2017-10-17 14:51:01
tags:
- Javascript
categories: 
- Javascript
---

1. input 触发事件
2. 最常见事件类型
3. 不常见和非标准事件分类

## input 触发事件
```
onkeyup 事件会在键盘按键被松开时发生。
输入您的姓名： <input type="text" id="fname" onkeyup="upperCase(this.id)" />
onClick   单击事件
onMouseOver    鼠标经过事件
onMouseOut    鼠标移出事件
onChange  文本内容改变事件
onSelect    文本框选中事件
onFocus    光标聚集事件
onBlur      移开光标事件
onLoad     网页加载事件
onUnload    关闭网页事件
```
## 防止网页被嵌入框架的代码
```
<script type="text/javascript">
if (window!=top) // 判断当前的window对象是否是top对象
top.location.href =window.location.href; // 如果不是，将top对象的网址自动导向被嵌入网页的网址
</script>
```
>  改进使得我的网页只能被嵌入我自己的框架，而不是别人的框架？

```
<script type="text/javascript">
try{
　　top.location.hostname;
　　if (top.location.hostname != window.location.hostname) {
　　　　top.location.href =window.location.href;
　　}
}
catch(e){
　　top.location.href = window.location.href;
}
</script>

```

## 最常见事件类型 ##

- 资源事件
```
事件名称    何时触发
cached   manifest中列出的资源已经下载，应用程序现在已缓存。
error    一个资源的加载失败
abort    一个资源的加载已中止
load     一个资源及其相关资源已完成加载。
beforeunload    window，document 及其资源即将被卸载。
unload   文档或一个依赖资源正在被卸载。
```
网络事件

事件名称    何时触发
online  浏览器已获得网络访问。
offline 浏览器已失去网络访问。
焦点事件
事件名称    何时触发
focus   元素获得焦点（不会冒泡）
blur    元素失去焦点（不会冒泡）

Websocket事件

事件名称    何时触发
open    WebSocket连接已建立
message 通过WebSocket接收到一条消息
error   WebSocket连接异常被关闭（比如有些数据无法发送）。
close   WebSocket连接已关闭
会话历史事件
Event Name  Fired When
pagehide    A session history entry is being traversed from.
pageshow    A session history entry is being traversed to.
popstate    A session history entry is being navigated to (in certain cases).
CSS 动画事件
Event Name  Fired When
animationstart  A CSS animation has started.
animationend    A CSS animation has completed.
animationiteration  A CSS animation is repeated.
表单事件
Event Name  Fired When
reset   点击重置按钮时
submit  点击提交按钮
打印事件
Event Name  Fired When
beforeprint The print dialog is opened
afterprint  The print dialog is closed
文本组合事件
Event Name  Fired When
compositionstart    The composition of a passage of text is prepared (similar to keydown for a keyboard input, but works with other inputs such as speech recognition).
compositionupdate   A character is added to a passage of text being composed.
compositionend  The composition of a passage of text has been completed or canceled.
视图事件
Event Name  Fired When
fullscreenchange    An element was turned to fullscreen mode or back to normal mode.
fullscreenerror It was impossible to switch to fullscreen mode for technical reasons or because the permission was denied.
resize  The document view has been resized.
scroll  The document view or an element has been scrolled.
剪贴板事件
Event Name  Fired When
cut The selection has been cut and copied to the clipboard
copy    The selection has been copied to the clipboard
paste   The item from the clipboard has been pasted
键盘事件
Event Name  Fired When
keydown 按下任意按键
keypress    除 Shift, Fn, CapsLock 外任意键被按住. (连续触发)
keyup   释放任意按键
鼠标事件
Event Name  Fired When
mouseenter  指针移到有事件监听的元素内
mouseover   指针移到有事件监听的元素或者它的子元素内
mousemove   指针在元素内移动时持续触发
mousedown   在元素上按下任意鼠标按钮
mouseup 在元素上释放任意鼠标按键
click   在元素上按下并释放任意鼠标按键
dblclick    在元素上双击鼠标按钮
contextmenu 右键点击 (右键菜单显示前).
wheel   滚轮向任意方向滚动
mouseleave  指针移出元素范围外（不冒泡）
mouseout    指针移出元素，或者移到它的子元素上
select  文本被选中
pointerlockchange   The pointer was locked or released.
pointerlockerror    It was impossible to lock the pointer for technical reasons or because the permission was denied.
拖放事件
Event Name  Fired When
dragstart   用户开始拖动HTML元素或选中的文本
drag    正在拖动元素或文本选区（在此过程中持续触发，每350ms触发一次）
dragend 拖放操作结束 （松开鼠标按钮或按下Esc键）
dragenter   被拖动的元素或文本选区移入有效释放目标区
dragover    被拖动的元素或文本选区正在有效释放目标上被拖动 （在此过程中持续触发，每350ms触发一次）
dragleave   被拖动的元素或文本选区移出有效释放目标区
drop    元素在有效释放目标区上释放
媒体事件
Event Name  Fired When
durationchange  The duration attribute has been updated.
loadedmetadata  The metadata has been loaded.
loadeddata  The first frame of the media has finished loading.
canplay The browser can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content.
canplaythrough  The browser estimates it can play the media up to its end without stopping for content buffering.
ended   Playback has stopped because the end of the media was reached.
emptied The media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the load() method is called to reload it.
stalled The user agent is trying to fetch media data, but data is unexpectedly not forthcoming.
suspend Media data loading has been suspended.
play    Playback has begun.
playing Playback is ready to start after having been paused or delayed due to lack of data.
pause   Playback has been paused.
waiting Playback has stopped because of a temporary lack of data.
seeking A seek operation began.
seeked  A seek operation completed.
ratechange  The playback rate has changed.
timeupdate  The time indicated by the currentTime attribute has been updated.
volumechange    The volume has changed.
complete    The rendering of an OfflineAudioContext is terminated.
ended   Playback has stopped because the end of the media was reached.
audioprocess    The input buffer of a ScriptProcessorNode is ready to be processed.
进度事件
Event Name  Fired When
loadstart   Progress has begun.
progress    In progress.
error   Progression has failed.
timeout Progression is terminated due to preset time expiring.
abort   Progression has been terminated (not due to an error).
load    Progression has been successful.
loadend Progress has stopped (after "error", "abort" or "load" have been dispatched).
存储事件
change (see Non-standard events)
storage

更新事件
checking
downloading
error
noupdate
obsolete
updateready

值变化事件
broadcast
CheckboxStateChange
hashchange
input
RadioStateChange
readystatechange
ValueChange

未分类的事件
invalid
localized
message
message
message
open
show

> 参考链接：https://developer.mozilla.org/zh-CN/docs/Web/Events

## 不常见和非标准事件分类 ##

SVG事件
SVGAbort
SVGError
SVGLoad
SVGResize
SVGScroll
SVGUnload
SVGZoom

数据库事件
abort
blocked
complete
error (link)
success
upgradeneeded
versionchange

通知事件
AlertActive
AlertClose

CSS事件
CssRuleViewRefreshed
CssRuleViewChanged
CssRuleViewCSSLinkClicked
transitionend

脚本事件
afterscriptexecute
beforescriptexecute

菜单事件
DOMMenuItemActive
DOMMenuItemInactive

窗口事件
DOMWindowCreated
DOMTitleChanged
DOMWindowClose
SSWindowClosing
SSWindowStateReady
SSWindowStateBusy
close

文档事件
DOMLinkAdded
DOMLinkRemoved
DOMMetaAdded
DOMMetaRemoved
DOMWillOpenModalDialog
DOMModalDialogClosed

弹出事件
popuphidden
popuphiding
popupshowing
popupshown
DOMPopupBlocked

Tab事件
TabOpen
TabClose
TabSelect
TabShow
TabHide
TabPinned
TabUnpinned
SSTabClosing
SSTabRestoring
SSTabRestored
visibilitychange

电池事件
chargingchange
chargingtimechange
dischargingtimechange
levelchange

呼叫事件
alerting
busy
callschanged
cfstatechange
connected
connecting
dialing
disconnected
disconnecting
error
held, holding
incoming
resuming
statechange
voicechange

传感器事件
compassneedscalibration
devicelight
devicemotion
deviceorientation
deviceproximity
MozOrientation
orientationchange
userproximity

智能卡事件
icccardlockerror
iccinfochange
smartcard-insert
smartcard-remove
stkcommand
stksessionend
cardstatechange

短信和USSD事件
delivered
received
sent
ussdreceived

帧事件
mozbrowserclose
mozbrowsercontextmenu
mozbrowsererror
mozbrowsericonchange
mozbrowserlocationchange
mozbrowserloadend
mozbrowserloadstart
mozbrowseropenwindow
mozbrowsersecuritychange
mozbrowsershowmodalprompt (link)
mozbrowsertitlechange
DOMFrameContentLoaded

DOM变异事件
DOMAttributeNameChanged
DOMAttrModified
DOMCharacterDataModified
DOMContentLoaded
DOMElementNameChanged
DOMNodeInserted
DOMNodeInsertedIntoDocument
DOMNodeRemoved
DOMNodeRemovedFromDocument
DOMSubtreeModified

触摸事件
MozEdgeUIGesture
MozMagnifyGesture
MozMagnifyGestureStart
MozMagnifyGestureUpdate
MozPressTapGesture
MozRotateGesture
MozRotateGestureStart
MozRotateGestureUpdate
MozSwipeGesture
MozTapGesture
MozTouchDown
MozTouchMove
MozTouchUp
touchcancel
touchend
touchenter
touchleave
touchmove
touchstart

指针事件
pointerover
pointerenter
pointerdown
pointermove
pointerup
pointercancel
pointerout
pointerleave
gotpointercapture
lostpointercapture

> 参考链接：https://developer.mozilla.org/zh-CN/docs/Web/Events
