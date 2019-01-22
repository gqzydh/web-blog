---
title: vue笔记
date: 2017-10-17 14:51:01
tags:
- Vue.js
categories: 
- Vue.js
---


## 目录结构
绝大部分项目中，目录结构都会差不太多，我们可以综合一下来个通用的 src 目录：
```
src
├── assets          // 资源目录 图片，样式，iconfont
├── components      // 全局通用组件目录
├── config          // 项目配置，拦截器，开关
├── plugins         // 插件相关，生成路由、请求、store 等实例，并挂载 Vue 实例
├── directives      // 拓展指令集合
├── routes          // 路由配置
├── service         // 服务层
├── utils           // 工具类
└── views           // 视图层
```

## 通用组件
`components` 中我们会存放 UI 组件库中的那些常见通用组件了，在项目中直接通过设置别名来使用，如果其他项目需要使用，就发到 npm 上。
```
// components 简易结构
components
├── dist
├── build
├── src      
    ├── modal
    ├── toast
    └── ...
├── index.js             
└── package.json        
```

## 全局配置，插件与拦截器
全局配置，拦截器目录结构
```
config
├── index.js             // 全局配置/开关
├── interceptors        // 拦截器
    ├── index.js        // 入口文件
    ├── axios.js        // 请求/响应拦截
    ├── router.js       // 路由拦截
    └── ...
└── ...
```
全局配置
> 在 config/index.js 可能会有如下配置：

```js
// config/index.js

// 当前宿主平台 兼容多平台应该通过一些特定函数来取得
export const HOST_PLATFORM = 'WEB'
// 这个就不多说了
export const NODE_ENV = process.env.NODE_ENV || 'prod'

// 是否强制所有请求访问本地 MOCK，看到这里同学不难猜到，每个请求也可以单独控制是否请求 MOCK
export const AJAX_LOCALLY_ENABLE = false
// 是否开启监控
export const MONITOR_ENABLE = true
// 路由默认配置，路由表并不从此注入
export const ROUTER_DEFAULT_CONFIG = {
    waitForData: true,
    transitionOnLoad: true
}

// axios 默认配置
export const AXIOS_DEFAULT_CONFIG = {
    timeout: 20000,
    maxContentLength: 2000,
    headers: {}
}

// vuex 默认配置
export const VUEX_DEFAULT_CONFIG = {
    strict: process.env.NODE_ENV !== 'production'
}

// API 默认配置
export const API_DEFAULT_CONFIG = {
    mockBaseURL: '',
    mock: true,
    debug: false,
    sep: '/'
}

// CONST 默认配置
export const CONST_DEFAULT_CONFIG = {
    sep: '/'
}

// 还有一些业务相关的配置
// ...


// 还有一些方便开发的配置
export const CONSOLE_REQUEST_ENABLE = true      // 开启请求参数打印
export const CONSOLE_RESPONSE_ENABLE = true     // 开启响应参数打印
export const CONSOLE_MONITOR_ENABLE = true      // 监控记录打印

```
可以看出这里汇集了项目中所有用到的配置，下面我们在 `plugins`中实例化插件，注入对应配置，目录如下:
#### 插件目录结构
```
plugins
├── api.js              // 服务层 api 插件
├── axios.js            // 请求实例插件
├── const.js            // 服务层 const 插件
├── store.js            // vuex 实例插件
├── inject.js           // 注入 Vue 原型插件
└── router.js           // 路由实例插件
```

#### 实例化插件并注入配置
举出两个例子，看我们是如何注入配置，拦截器并实例化的
- 实例化 `router`：
```js
import Vue from 'vue'
import Router from 'vue-router'
import ROUTES from 'Routes'
import {ROUTER_DEFAULT_CONFIG} from 'Config/index'
import {routerBeforeEachFunc} from 'Config/interceptors/router'

Vue.use(Router)

// 注入默认配置和路由表
let routerInstance = new Router({
    ...ROUTER_DEFAULT_CONFIG,
    routes: ROUTES
})
// 注入拦截器
routerInstance.beforeEach(routerBeforeEachFunc)

export default routerInstance

```
- 实例化 `axios`：
```js
import axios from 'axios'
import {AXIOS_DEFAULT_CONFIG} from 'Config/index'
import {requestSuccessFunc, requestFailFunc, responseSuccessFunc, responseFailFunc} from 'Config/interceptors/axios'

let axiosInstance = {}

axiosInstance = axios.create(AXIOS_DEFAULT_CONFIG)

// 注入请求拦截
axiosInstance
    .interceptors.request.use(requestSuccessFunc, requestFailFunc)
// 注入响应拦截
axiosInstance
    .interceptors.response.use(responseSuccessFunc, responseFailFunc)

export default axiosInstance
```
在 `main.js` 注入插件：
```js
// main.js
import Vue from 'vue'

GLOBAL.vbus = new Vue()

// import 'Components'// 全局组件注册
import 'Directives' // 指令

// 引入插件
import router from 'Plugins/router'
import inject from 'Plugins/inject'
import store from 'Plugins/store'
// 引入组件库及其组件库样式 
// 不需要配置的库就在这里引入 
// 如果需要配置都放入 plugin 即可
import VueOnsen from 'vue-onsenui'
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
// 引入根组件
import App from './App'

Vue.use(inject)
Vue.use(VueOnsen)

// render
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
```
`axios` 实例我们并没有直接引用，相信你也猜到他是通过 `inject` 插件引用的，我们看下 `inject`：
```js
import axios from './axios'
import api from './api'
import consts from './const'
GLOBAL.ajax = axios
 
export default {
    install: (Vue, options) => {
        Vue.prototype.$api = api
        Vue.prototype.$ajax = axios
        Vue.prototype.$const = consts
        // 需要挂载的都放在这里
    }
}
```
这里可以挂载你想在业务中( vue 实例中)便捷访问的 api，除了 $ajax 之外，api 和 const 两个插件是我们服务层中主要的功能，后续会介绍，这样我们插件流程大致运转起来，下面写对应拦截器的方法。

