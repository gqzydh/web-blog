---
title: Js用户注册校验
date: 2017-10-17 14:51:01
tags:
- 注册登录
- 代码
categories: 
- 代码
---


## Js用户注册校验
```
<scripttype="text/javascript">
      functionsave(){
             varusername = document.getElementById("username");
             if(username.value ==""){
                   alert("用户名不能为空！");
                   returnfalse;
             }
             varpassword = document.getElementById("password");
             if(password.value ==""){
                   alert("密码不能为空！");
                   returnfalse;
             }
             varrepassword = document.getElementById("repassword");
             if(repassword.value ==""){
                   alert("确认密码不能为空！");
                   returnfalse;
             }
             if(password.value != repassword.value){
                   alert("两次输入密码不一致！");
                   returnfalse;
             }
             varage = document.getElementById("age");
             if(age.value ==""){
                   alert("年龄不能为空！");
                   returnfalse;
             }
             if(isNaN(age.value)){
                   alert("年龄为数字！");
                   returnfalse;
             }
      }
</script>
```
