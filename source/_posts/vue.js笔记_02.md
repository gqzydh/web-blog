---
title: vue笔记_02
date: 2017-10-17 14:51:01
tags:
- Vue.js
categories: 
- Vue.js
---




## Vue 实例对象 ##
```
new Vue({   //根组建
  el: '#app',  //装载的位置
  template: '<App/>',  //模版
  data: {  
    fruit: 'apple' //数据
  }
})
```

## Vue组件 ##
[Vue 组件](https://cn.vuejs.org/v2/guide/components.html)

- 注册组件
```
Vue.component('my-header',{    //component全局组件
    template: '<p>this{{}}is my header</p>',
    data:{}
})  
```
```
var myHeader = { 
    template: '<p>this{{}}is my header</p>',
}
new Vue({
    el: '#app',
    data: {
        word: 'hello world'
    },
    components:{      //注册子组件
        'my-header': myHeader    
    }
})
```

## Vue基本慨念
- 全局api
- 实例选项
- 实例属性／方法
- 指令
- 内置组件

```
v-bind

methods  //vue对象单方法
watch  //监听，对象改变了，要做什么
v-model  在表单控件或者组件上创建双向绑定。
```

## 数据渲染 ##
```
v-text  //渲染数据
v-html
{{}}
```

## 模版指令 ##
- v-if, v-show  //控制模块显示隐藏
```
<p v-if="isShow"></p>
<p v-show="isShow"></p>
new Vew({data:{
        idShow: true
    }
})
```
- v-for  //渲染循环列表
```
<ul>
    <li v-for='item in items'>
        <p v-text='item.label'></p>
    </li>
</ul>
date:{
    items: [
        {
            label: 'apple'
        },{
            label: 'shanghai'
        }
    ]
}
```
- v-on  //事件绑定
```
<button v-on:click = "doThis"></button>
<button @clock="doThis"></button>
methods: {
    doThis:function(someThing){
    }
}
```
- v-bind  //属性绑定
```
<img v-bind:src="imageSrc">
<div :class="{red: isRed}"></div>  //判断是否有class="red"
<div :class="[classA, classB]"></div>  //字符串，2个ckass值
<div :class="[classA, {classB: isB, classC: isC}]"></div>
```
