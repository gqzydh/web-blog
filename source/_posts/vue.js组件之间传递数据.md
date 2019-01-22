---
title: vue.js组件之间传递数据
date: 2018-7-17 14:51:01
tags:
- Vue.js
categories: 
- Vue.js
---

组件是 vue.js 最强大的功能之一，而组件实例的作用域是相互独立的，这就意味着不同组件之间的数据无法相互引用。如何传递数据也成了组件的重要知识点之一。

## 组件

组件与组件之间，还存在着不同的关系。父子关系与兄弟关系（不是父子的都暂称为兄弟吧）。

## 父子组件

示例:
```
// 注册一个子组件
Vue.component('child', {
    data: function(){
        return {
            text: '我是father的子组件！'
        }
    },
    template: '<span>{{ text }}</span>'
})
// 注册一个父组件
Vue.component('father', {
    template: '<div><child></child></div>'  // 在模板中使用了child组件
})
```
直接使用 father 组件的时候：
```
<div id="app">
    <father></father>
</div>
```
页面中渲染出 ：我是father的子组件！ 

## 兄弟组件
两个组件互不引用，则为兄弟组件。
```
Vue.component('brother1', {
    template: '<div>我是大哥</div>'
})
Vue.component('brother2', {
    template: '<div>我是小弟</div>'
})
```
使用组件的时候：
```
<div id="app">
    <brother1></brother1>
    <brother2></brother2>
</div>
```
页面中渲染出 ：我是大哥/我是小弟

## 子组件使用父组件的数据  Prop

示例:
在父组件 father.vue 中引用子组件 child.vue，把 name 的值传给 child 子组件。
```
//  这是父组件
<template>
    <div class="app">
        // message 定义在子组件的 props 中
        <child :message="name"></child>
    </div>
</template>
<script>
    import child from './child.vue';
    export default {
        components: {
            child
        },
        data() {
            return {
                name: 'Aaron'
            }
        }
    }
</script>
```
在子组件 child.vue 中的 props 选项中声明它获得的数据
```
// 这是子组件
<template>
    <span>Hello {{message}}</span>
</template>
<script>
    export default {
        // 在 props 中声明获取父组件的数据通过 message 传过来
        props: ['message']
    }
</script>
```
在子组件页面中就会渲染出：Hello Aaron

## 单向数据流
当父组件的 name 发生改变，子组件也会自动地更新视图。但是在子组件中，我们不要去修改 prop。

如果你必须要修改到这些数据，你可以使用以下方法：

方法一：把 prop 赋值给一个局部变量，然后需要修改的话就修改这个局部变量，而不影响 prop
```
export default {
    data(){
        return {
            newMessage: null
        } 
    },
    props: ['message'],
    created(){
        this.newMessage = this.message;
    }
}
```

方法二：在计算属性中对 prop 进行处理
```
export default {
    props: ['message'],
    computed: {
        newMessage(){
            return this.newMessage + ' 取个新名字';
        }
    }
}
```

## 自定义事件
prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是不会反过来。修改子组件的 prop 值，是不会传回给父组件去更新视图的。

那么子组件要如何去与父组件通讯呢？

那就是自定义事件。

通过在父组件 $on(eventName) 监听自定义事件，当子组件里 $emit(eventName) 触发该自定义事件的时候，父组件执行相应的操作。

比如在父组件中控制一个弹框子组件的显示，在子组件中按下关闭之后，告诉父组件去隐藏它，然后父组件就执行操作隐藏弹框。

```
<template>
    <div class="app">
        // hide 为自定义事件，名字可以自己随便起，不能有大写字母，可以使用短横线
        // @hide 监听子组件触发 hide 事件，则会执行 hideDialog 方法
        <dialog :is-show="show" @hide="hideDialog"></dialog>
        <button @click="showDialog">显示弹框</button>
    </div>
</template>
<script>
    import dialog from './dialog.vue';
    export default {
        components: { dialog },
        data() {
            return {
                show: false
            }
        },
        methods: {
            showDialog() {
                this.show = true;
            },
            hideDialog() {
                this.show = false;
            }
        }
    }
</script>
```
在子组件 dialog.vue 中：
```
<template>
    <div class="dialog" v-show="isShow">
        <p>这里是弹框子组件</p>
        <button @click="toHide">关闭弹框</button>
    </div>
</template>
<script>
    export default {
        // 驼峰式命名的 prop 需要转换为相对应的短横线隔开式 is-show
        props: ['isShow'],
        methods: {
            toHide(){
                // $emit 方法触发父组件的监听事件
                this.$emit('hide');
            }
        }
    }
</script>
```
这样就实现了父子组件之间的相互通讯。

## Event Bus
有时候两个组件之间需要进行通信，但是它们彼此不是父子组件的关系。在一些简单场景，你可以使用一个空的 Vue 实例作为一个事件总线中心(central event bus)：

```
var bus = new Vue();
// 在组件 A 的 methods 方法中触发事件
bus.$emit('say-hello', 'world')
// 在组件 B 的 created 钩子函数中监听事件
bus.$on('say-hello', function (arg) {
  console.log('hello ' + arg);          // hello world
})
```

## Vuex
在复杂场景中，你应该考虑使用专门的状态管理模式 Vuex。
(Vuex 英文)[https://vuex.vuejs.org]
(Vuex 中文)[https://vuex.vuejs.org/zh/]

## 总结
组件通讯并不是一定要使用必须要使用 Vuex，对于一些简单的数据传递，event bus 或者 prop 也可以完成。
- 使用 prop 实现子组件的显示与隐藏，
- 使用 vuex 来实现组件间的数据状态管理。


