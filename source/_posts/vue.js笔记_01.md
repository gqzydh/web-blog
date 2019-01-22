---
title: vue笔记_01
date: 2017-10-17 14:51:01
tags:
- Vue.js
categories: 
- Vue.js
---


## 一些注意事项 ##
```
  ● 一个 <image> 的 src 属性在赋值时会产生一个 HTTP 请求，所以当模板在第一次被解析时会产生一个 404 请求。这种情况下更适合用 v-attr。
  ● Internet Explorer 在解析 HTML 时会移除非法的内联 style 属性，所以如果你想支持 IE，请在绑定内联 CSS 的时候始终使用 v-style。
  ● 可以使用三对花括号来回避 HTML 代码，而这种写法会在底层转换为 v-html：{{{ safeHTMLString }}}
  ● 可以在你的 mustache 绑定里加入 * 来注明这是一个一次性撰写的数据，这样的话它就不会响应后续的数据变化：{{* onlyOnce }}
```
  
## vue.js 安装 ##
```
npm install vue-router --save //VueJs路由跳转——vue-router的使用
```


## 自定义事件 ##
> Vue实例实现了一个自定义事件接口，用于在组件树中通信。这个事件系统独立于原生DOM事件，用法也不同。
- 每个Vue实例都是一个事件触发器:
 - 使用 `$on()` 监听事件
 - 使用 `$emit()` 在它上面触发事件
 - 使用 `$dispatch()` 派发事件，事件沿着父链冒泡
 - 使用 `$broadcast()` 广播事件，事件向下传导给所有的后代
> 不同与DMO事件，Vue事件在冒泡过程中第一次触发回调之后自动停止冒泡，除非回调明确返回`true`。

## 过渡动画-css实现过渡
```
<transition name="my-trans">
       <h1 v-show="show">css 过渡动画</h1>
</transition>
----css-----
.my-trans-enter-active, .my-trans-leave-active{
  transition: all 0.5s ease-out;
}
.my-trans-enter{
  transform: translateY(-500px);opacity: 0;
}
.my-trans-leave-active{
  transform: translateY(500px);opacity: 0;
}      
```