---
title: Git常用命令
date: 2017-10-17 14:51:01
tags:
- git
categories: 
- 命令
---


**Git** 是目前世界上最先进的分布式版本控制系统。

<!-- more -->

## Git配置 

配置用户信息
```
git config --global user.name "Your username"  //配置 用户名
git config --global user.email "Your@email.com"  //配置 电子邮件地址

```

查看用户配置

```
git config --list
git config --list --global  //所有用户
git config user.name  //最近用户
git config user.email
```

## 工作流程 

<img src="/images/git_01.png" width="750" height="270">

方式一：从远程仓库上克隆代码修改并提交
```
git clone <仓库链接>   
cd <文件目录>
touch README.md  //新建一个操作记录提交的文档 
git add README.md  //添加README.md
git init  //初始化本地仓库
git commit -m "注释"
git remote add origin <仓库地址> 
git push -u origin master  //将本地仓库的东西提交到地址是origin的地址，master分支下 
```

方式二：把本地代码提交到远程仓库
```
cd <文件目录>
git init
git remote add origin <some-git-url>
git add .
git commit -m "注释"
git push -u origin master
```
## 基础操作 

```
git status  //查看状态
git status -s  //状态简览
git commit -m 'Fix some bugs'  //提交修改
git add <some-file>  //添加文件到暂存区
git diff  //查看修改

git diff --cached  //查看已暂存并将下次提交的内容
git diff --staged  //查看已暂存并将下次提交的内容

git commit -a -m 'update some files'  //跳过暂存区提交
git rm <文件>  //把文件删掉，Git 不再跟踪
git rm --cache <文件>  //从 Git 中移除文件但文件本身不删除
git rm asset/css/style.css  //删除style.css文件
git help <command>  //查看帮助
git mv 旧名 新名   //使用git mv重命名
git mv css.css css/   移动文件到css目录
```
## 文件修改 

查看修改
```
git log  //查看提交历史
git log -p  //查看内容差异
git log --stat  //查看统计信息
git log --pretty=oneline  //在一行显示日志信息
git log --author='用户名'  //查看某用户的提交
git remote rename origin default   //把 origin 重新命名为 default
```
撤销修改
```
git reset HEAD^  //取消上一次提交
git commit --amend  //修改上一次的提交
git reset HEAD <文件>  //撤销文件在暂存区的修改（回到工作区）
git checkout -- <文件路径>  //撤销文件的修改（恢复原状）
git checkout -- .  //撤销所有文件的修改
git checkout HEAD — index.html   //恢复刚刚删除的文件
```
提交修改
```
git add -A  //提交所有变化到缓存区
git add -u  //提交被修改和被删除的文件，不包括新文件到暂存区
git add .  //提交新文件和被修改的文件，不包括被删除文件到暂存区

Git commit -m "注释" //只提交添加到缓存区的文件
git commit -a -m "注释" //能提交修改过，但是没有添加到缓存区的文件
git push  //推送到远程主机
git push origin gh-pages    //提交到远程分支
```
## 分支操作 

```
git branch  //查看本地分支
git branch -r  //查看远程分支
git branch [name]  //创建本地分支 #注意新分支创建后不会自动切换为当前分支
git checkout [name]  //切换分支
git checkout -b [name]  //创建新分支并立即切换到新分支
git branch -d [name]  //删除分支 #-d 选项只能删除已经参与了合并的分支， 对于未有合并的分支是无法删除的。如果想强制删除一个分支，可以使用-D 选项

git merge [name]  //合并分支 #将名称为[name]的分支与当前分支合并
git push origin [name]   //创建远程分支(本地分支 push 到远程)
git push origin :heads/[name]  //删除远程分支
git checkout -b gh-pages origin/gh-pages   //改分支gh-pages 
```

## 切换到远程分支
```
git branch -va   //查看本地+远程分支列表
git checkout -t origin/xxxxxx   //直接新建本地分支，将远程分支提取出来。
```

## 远程仓库 

```
git remote -v  //查看远程仓库
git remote show origin   //查看 origin 远程库的详情
git remote add [name] [url]  //添加远程仓库
git fetch <some-remote-branch>  //从远程仓库获取

git remote rm [name]   //删除远程仓库
git pull [remoteName] [localBranchName]  //拉取远程仓库
git push [remoteName] [localBranchName]  //推送远程仓库
```

## 版本(tag)操作相关命令

```
git tag  //查看版本
git tag [name]   //创建版本
git tag -d [name]  //删除版本
git tag -r   //查看远程版本
git push origin [name]   //创建远程版本(本地版本 push 到远程)
git push origin :refs/tags/[name]   //删除远程版本
```

## 子模块(submodule)相关操作命令

```
git submodule add [url] [path]  //添加子模块
git submodule init  //初始化子模块(只在首次检出仓库时运行一次就行)
git submodule update  //更新子模块(每次更新或切换分支后都需要运行一下)
git rm --cached [path]  //删除子模块
```

## 常用命令

```
git status  //查看被修改但还未提交的文件
git checkout <文件路径>  //撤销对工作区修改
git add .   //添加到暂存区
git commit -m '注释'  //从暂存区提交
git push origin master  //推送到服务器.master分支
git pull   //取回远程主机某个分支的更新，再与本地的指定分支合并

```
## 其他命令 
```
clear //清屏命令
pwd  //显示当前所在位置
ls  //列出指定目录里的东西
ls -al  //列出详细文件
ls -lt/-ltr //根据时间排序
cd   //改变自己所在的位置
mkdir //创建文件夹
vi   //创建文件
mv   //移动目录与文件
cp   //复制目录与文件
rm   //删除目录与文件
subl . //在sublime中打开文件

cd ~/.ssh  --检查本机的ssh密钥
which -a git  --查看本地安装的git
git config —global alias.co checkout  //设置简化命令
```

## 与远程仓库绑定 
```
$ ssh-keygen -t rsa -C"邮件地址@youremail.com”
Enter passphrase (empty forno passphrase):<输入加密串>
Enter same passphrase again:<再次输入加密串>
$ eval "$(ssh-agent -s)”  //生成刚输的密码，
$ ssh-add ~/.ssh/id_rsa    //保存密码
$ vim ~/.ssh/id_rsa.pub    //打开id_rsa.pub，复制里面的key
ssh -T git@github.com   //测试github链接成功
```

## github 新建和推送文件 

在命令行上创建一个新的存储库 
```
echo "# Javascript-Demo" >> README.md
git initgit add README.mdgit commit -m "first commit"
git remote add origin https://github.com/gqzydh/Javascript-Demo.git
git push -u origin master
```

从命令行推送现有存储库 
```
git remote add origin https://github.com/gqzydh/Javascript-Demo.git
re
```

## 问题-解决
- 问题： git无法pull仓库 报错 `fatal: refusing to merge unrelated histories`
解决： `git pull origin master ----allow-unrelated-histories`

- 问题： `git remote add origin + 仓库地址` 报错  `fatal: pathspec 'README.md' did not match any files`
解决： `git remote rm origin`

## 供参考
Git教程 - 廖雪峰的官方网站:https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000
易百教程: https://www.yiibai.com/git/


