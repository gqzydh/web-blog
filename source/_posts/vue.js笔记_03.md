---
title: vue笔记_03
date: 2017-10-17 14:51:01
tags:
- Vue.js
categories: 
- Vue.js
---

## 定义全局组件 ##
```
Vue.component('ui-button',{
    template: '<button class="ui button">buutonu</button>'
})
```

把不同组件组合在一起使用，形成父子关系，
```
props down, events up  //属性向下留，事件向上走。
```
```
Webpack + vue-loader
Browserify + vueify
```
```
<style scoped>  //定义单文件应用css
```