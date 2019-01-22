---
layout: Javascript
title: Javascript正则表达式
date: 2017-08-29 15:27:18
tags:
- 正则表达式
categories: 
- Javascript
---
正则表达式（英语：Regular Expression，在代码中常简写为regex、regexp或RE）使用单个字符串来描述、匹配一系列符合某个句法规则的字符串搜索模式。

<!-- more -->

## 通配符##

```
^  //开头
$  //结尾
./  //当前目录
*   //所有，任意字符
+   //循环，一个或者多个
\b  //单词边界
\d  //数字
\d{3, 5}  //循环3到5次
\d{4}  //4个数字 {}量词
(第一组)(第二组)(第三组)  //分组
$1-$2-$3   //表示对应的分组
[/-]  //[]表示或，／或-
g  //全文搜索
i  //忽略大小写
m  //多行搜索

```


##RegExp对象##
> javascript通过内置对象RegExp 支持正则表达式
- 有两种方法实例化RegExp对象
 1. 字面量
 ```
 var reg = /\bis\b /g;
 'He is a boy. This is a dog. Where is she?'.replace(reg, 'IS');    //匹配全部is并替换成大写IS；
 ```
 - replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
 
 2. 构造函数
 ```
 var reg = new RegExp('\\bis\\b' , 'g');
 'He is a boy. This is a dog. Where is she?'.replace(reg, 'IS');    //匹配全部is并替换成大写IS；
 ```
 
##元字符##
- 正则表达式由两种基本字符类型组成：
 - **原义文本字符**
 - **元字符**  元字符是在正则表达式中有特殊含义的非字母字符
 ```
 * + ? $ ^ . | \ () {} []
 ```
 
 `[abc]`  //[]构建一个简单的类，表达式`[abc]` 把字符 a或b或c 归为一类；
 `[^abc]`  //表达式`[^abc]` 表示 不是字符 a或b或c 的内容，^ 创建反向类／负向类；
 - 范围类
 
 `[a-z]`  //表示从 a到z 的任意字符，包含 a和z 本身
 `[a-zA-Z]`  `[0-9-]`
 - **预定义类**
 
 ` . `   等价类  ` [^\r\n] `     除了回车符和换行符之外的所有字符
 ` \d ` 等价类  ` [0-9] `       数字字符
 ` \D ` 等价类  ` [^0-9] `		非数字字符
 ` \s `  等价类  ` [\t\n\x0B\f\r] ` 		空白符
 ` \S ` 等价类  ` [^\t\n\x0B\f\r] `		非空白符
 ` \w ` 等价类  ` [a-zA-Z_0-9] `		单词字符（字母，数字下划线）
 ` \W ` 等价类  ` [^a-zA-Z_0-9] `		非单词字符
 
 - **量词**
 
 ` ? `  	出现零次或一次（最多出现一次）
` + `  		出现一次或多次（至少出现一次）
`  * `  	出现零次或多次（任意次）
` {n} `  	出现 n 次
` {n,m} `  		出现 n 到 m 次
` {n，} `  		至少出现 n 次
 
 - 贪婪模式
 - 非贪婪模式
 
 ```
 '123456789' .match(/\d(3,5)?/g) 	//在量词后面加上 ` ? ` 即可
 ```
 - 分组   ` (abcd){3} `
 - 或  ` | `   ` Byr(on | Ca)sper `
 - 反向引用  ` '2015-12-25' .replace(/(\d{4})-(\d{2})-(\d{2})/g,  '$2/$3/$1') `
 - 忽略分组   不希望捕获冒些分组，只需在分组内加 ` ? : ` 就可以  ` (?: Byron).(ok) `
 

## 正则表达式 - 常用实例
```
//验证手机号 eg:  checkTel("13812345678")
function checkTel(value){
	var re = /^1[3|4|5|7|8]\d{9}$/;//手机号码正则表达式
	return re.test(value);
}

//验证座机号  eg:  checkPhone("0577-22345678")
function checkPhone(value){
	var re=/^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/;//座机号正则表达式
	return re.test(value);
}

//验证邮箱  eg:  checkEmail("123456@qq.com")
function checkEmail(value){
	var re=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;//邮箱正则表达式
	return re.test(value);
}

//验证只能是数字  eg:  checkNum("123")
function checkNum(value){
	var re=/^[0-9]*$/;
	return re.test(value);
}

//验证日期  eg:  checkDate("2017-07-27")
function checkDate(value){
	var re=/^\d{4}-\d{1,2}-\d{1,2}(\s\d{1,2}(:\d{1,2}(:\d{1,2})?)?)?$/;
	return re.test(value);
}

//验证数字个数 eg:  checkNumCount("123456")
function checkNumCount(value){
	var re=/^\d{6}$/;//数字个数正则表达式(6位)
	return re.test(value);
}

//验证数字是带1-2位小数的正数或负数(可以是不带小数点的整数) 
//eg:  checkNumDecimal("-12.55")  checkNumDecimal("12.3")  checkNumDecimal("12")
function checkNumDecimal(value){
	var re=/^(\-)?\d+(\.\d{1,2})?$/;
	return re.test(value);
}

//验证只能是汉字 eg:  checkChinese("中国")
function checkChinese(value){
	var re=/^[\u4e00-\u9fa5]{0,}$/;
	return re.test(value);
}

//验证只能是英文 eg:  checkEnglish("aA")
function checkEnglish(value){
	var re=/^[A-Za-z]+$/;
	return re.test(value);
}

//验证只能是英文或者数字 eg:  checkEngNum("123aaa")
function checkEngNum(value){
	var re=/^[A-Za-z0-9]+$/;
	return re.test(value);
}

//验证只能是英文和数字，只能是字母开头,6-16位  eg:  checkEngAndNum("aaa123AA")
function checkEngAndNum(value){
	var re=/^[A-Za-z]+[0-9A-Za-z]{5,15}$/;
	return re.test(value);
}

//验证只能是英文或者数字或者下划线 eg:  checkEngNumXia("123_aaa")
function checkEngNumXia(value){
	var re=/^\w+$/;
	return re.test(value);
}

//验证域名 eg:  checkUrl("http://www.baidu.com")
function checkUrl(value){
	var re=/([a-z0-9][a-z0-9\-]*?\.(?:com|cn|net|org|gov|info|la|ltd|wang|xyz|ren|biz|tv|cc|co|top|shop|我爱你|中国|公司|网络|集团)(?:\.(?:cn|jp))?)$/;
	return re.test(value);
}

//验证用户名 (所有字符，2-20位)eg:  checkUserName("123456")
function checkUserName(value){
	var re=/^.{2,20}$/;
	return re.test(value);
}

//验证密码 (6-18位，字母、数字、特殊符)eg:  checkPassword("123456")
function checkPassword(value){
	var re=/^.{6,18}$/;//.代表任何字符
	return re.test(value);
}

//验证身份证（18位）
function checkIdCard(value){
	var sfz18=0,	//身份证第18位
	    sfz=value,
	    test2=[1,0,"X",9,8,7,6,5,4,3,2],
	    sfz_array=sfz.split("");
	if(sfz.length!=18&&sfz.length!=0){	//	身份证不是18位		
		return false;
	}
	if(sfz.length==18){
		var test=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];		    
		for(var i=0;i<17;i++){
			sfz18+=test[i]*sfz_array[i];
		}
		sfz18%=11;		
		sfz18=test2[sfz18];
		if(sfz18!=sfz_array[17]){	//身份证的第18位按一定规律计算			
			 return false;
		}
		else return true;
	}
}
```

## 正则表达式 - 常用语句
```
正则表达式经常被用于字段或任意字符串的校验，比如下面这段校验基本日期格式的JavaScript代码：
var reg = /^(\\d{1,4})(-|\\/)(\\d{1,2})\\2(\\d{1,2})$/; 
var r = fieldValue.match(reg);             
if(r==null)alert('Date format error!');

1、校验密码强度
密码的强度必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间
^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$

2、校验中文
字符串只能是中文
^[\\u4e00-\\u9fa5]{0,}$

3、由数字，26个英文字母或下划线组成的字符串
^\\w+$

4、校验E-Mail 地址
[\\w!#$%&'*+/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?

5、校验身份证号码
15位：
^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$
18位：
^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}([0-9]|X)$

6、校验日期
“yyyy-mm-dd“ 格式的日期校验，已考虑平闰年
^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$

7、校验金额
金额校验，精确到2位小数
^[0-9]+(.[0-9]{2})?$

8、校验手机号
下面是国内 13、15、18开头的手机号正则表达式
^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$

9、判断IE的版本
^.*MSIE [5-8](?:\\.[0-9]+)?(?!.*Trident\\/[5-9]\\.0).*$

10、校验IP-v4地址
\\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\b

11、校验IP-v6地址
(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))

12、检查URL的前缀
if (!s.match(/^[a-zA-Z]+:\\/\\//)){
   s = 'http://' + s;}

13、提取URL链接
^(f|ht){1}(tp|tps):\\/\\/([\\w-]+\\.)+[\\w-]+(\\/[\\w- ./?%&=]*)?

14、文件路径及扩展名校验
^([a-zA-Z]\\:|\\\\)\\\\([^\\\\]+\\\\)*[^\\/:*?"<>|]+\\.txt(l)?$

15、提取Color Hex  Codes
^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$

16、提取网页图片
\\< *[img][^\\\\>]*[src] *= *[\\"\\']{0,1}([^\\"\\'\\ >]*)

17、提取页面超链接
(<a\\s*(?!.*\\brel=)[^>]*)(href="https?:\\/\\/)((?!(?:(?:www\\.)?'.implode('|(?:www\\.)?', $follow_list).'))[^"]+)"((?!.*\\brel=)[^>]*)(?:[^>]*)>

18、查找CSS属性
^\\s*[a-zA-Z\\-]+\\s*[:]{1}\\s[a-zA-Z0-9\\s.#]+[;]{1}

19、抽取注释
<!--(.*?)-->

20、匹配HTML标签
<\\/?\\w+((\\s+\\w+(\\s*=\\s*(?:".*?"|'.*?'|[\\^'">\\s]+))?)+\\s*|\\s*)\\/?>
```
 
 
------------------------------ 
正则表达式在线工具：[http://regexper.com](http://regexper.com)

