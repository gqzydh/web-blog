---
title: bower
date: 2017-10-15 8:00:01
tags:
- bower
categories: 
- 工具
---

Bower是一个包管理工具。包的内容没有限制，比如：js库，框架，图片/字体资源等等或者它们的组合都可以，只要是你需要的就行，你也可以打包一些内容通过在bower上登记注册公开对外发布(当然Bower也支持提建私有包库)。

```
新建一个express3的项目nodejs-bower
D:\workspace\javascript>express -e nodejs-bower
~ D:\workspace\javascript>cd nodejs-bower && npm install
查看项目中已导入的类库
bower list
删除jQuery库
bower uninstall jquery
查看本地bower已经缓存的类库
bower cache list
查看dojo库的url
bower lookup dojo
用浏览器打开dojo的发布主页
bower home dojo
查询包含dojo的类库
bower search dojo
查询我们自己的包
bower search nodejs-bower
安装我们自己的包
bower install nodejs-bower
```