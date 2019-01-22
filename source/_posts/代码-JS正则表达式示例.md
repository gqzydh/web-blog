---
layout: Javascript
title: JS正则表达式示例
date: 2017-08-29 15:27:18
tags:
- 正则表达式
- 代码
categories: 
- 代码
---

收集整理>>常用的javaScript正则表达式，其中包括用户名、密码强度、整数、数字、电子邮件地址（Email）、手机号码、身份证号、URL地址、 IPv4地址、 十六进制颜色、 日期、 QQ号码、 微信号、车牌号、中文正则。表单验证处理必备库。

<!-- more -->

1. 用户名正则
2. 密码强度正则
3. 整数正则
4. 数字正则
5. Email／邮箱正则
6. 手机号码正则/
7. 身份证号正则
8. URL正则
9. IPv4地址正则
10. 十六进制颜色正则
11. 日期正则
12. QQ号码正则
13. 微信号正则
14. 车牌号正则
15. 包含中文正则
16. 校验金额
17. 常用验证
18. 常用语句


## 用户名正则 ##
```
//用户名正则，4到16位（字母，数字，下划线，减号）
var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
//输出 true
console.log(uPattern.test("iFat3"));

//验证用户名 (所有字符，2-20位)eg:  checkUserName("123456")
function checkUserName(value){
	var re=/^.{2,20}$/;
	return re.test(value);
}
```
## 密码强度正则 ##
```
//密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
var pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
//输出 true
console.log("=="+pPattern.test("iFat3#"));

//8至20位 数组或字母
var pawdReg = /[a-zA-Z\d]{8,20}/;

//验证密码 (6-18位，字母、数字、特殊符)eg:  checkPassword("123456")
function checkPassword(value){
	var re=/^.{6,18}$/;//.代表任何字符
	return re.test(value);
}

//密码的强度必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间
^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$

密码必须有数字和字母组合(8-16位)；
var pawdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/;
分开来注释一下：
^ 匹配一行的开头位置
(?![0-9]+$) 预测该位置后面不全是数字
(?![a-zA-Z]+$) 预测该位置后面不全是字母
[0-9A-Za-z] {8,16} 由8-16位数字或这字母组成
$ 匹配行结尾位置
注：(?!xxxx) 是正则表达式的负向零宽断言一种形式，标识预该位置后不是xxxx字符。

可以包含数字、字母、下划线，并且要同时含有数字和字母，且长度要在8-16位之间。
^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z_]{8,16}$
```
## 整数正则 ##
```
//正整数正则
var posPattern = /^\d+$/;
//负整数正则
var negPattern = /^-\d+$/;
//整数正则
var intPattern = /^-?\d+$/;
//输出 true
console.log(posPattern.test("42"));
//输出 true
console.log(negPattern.test("-42"));
//输出 true
console.log(intPattern.test("-42"));
```
## 数字正则 ##
可以是整数也可以是浮点数
```
//正数正则
var posPattern = /^\d*\.?\d+$/;
//负数正则
var negPattern = /^-\d*\.?\d+$/;
//数字正则
var numPattern = /^-?\d*\.?\d+$/;
console.log(posPattern.test("42.2"));
console.log(negPattern.test("-42.2"));
console.log(numPattern.test("-42.2"));

//验证只能是数字  eg:  checkNum("123")
function checkNum(value){
	var re=/^[0-9]*$/;
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
```
## Email／邮箱正则 ##
```
//Email正则
var ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//输出 true
console.log(ePattern.test("65974040@qq.com"));

//验证邮箱  eg:  checkEmail("123456@qq.com")
function checkEmail(value){
	var re=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;//邮箱正则表达式
	return re.test(value);
}

//校验E-Mail 地址
[\\w!#$%&'*+/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?
```
## 手机号码正则 ##
```
//手机号正则
var mPattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
//输出 true
console.log(mPattern.test("18600000000"));

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

//校验手机号
下面是国内 13、15、18开头的手机号正则表达式
^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$
```
## 身份证号正则 ##
```
//身份证号（18位）正则
var cP = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
//输出 true
console.log(cP.test("11010519880605371X"));

//校验身份证号码
15位：
^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$
18位：
^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}([0-9]|X)$
```
## URL正则 ##
```
//URL正则
var urlP= /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
//输出 true
console.log(urlP.test("http://42du.cn"));
```
## IPv4地址正则 ##
```
//ipv4地址正则
var ipP = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
//输出 true
console.log(ipP.test("115.28.47.26"));
```
## 十六进制颜色正则 ##
```
//RGB Hex颜色正则
var cPattern = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
//输出 true
console.log(cPattern.test("#b8b8b8"));
```
## 日期正则 ##
```
//日期正则，简单判定,未做月份及日期的判定
var dP1 = /^\d{4}(\-)\d{1,2}\1\d{1,2}$/;
//输出 true
console.log(dP1.test("2017-05-11"));
//输出 true
console.log(dP1.test("2017-15-11"));
//日期正则，复杂判定
var dP2 = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/;
//输出 true
console.log(dP2.test("2017-02-11"));
//输出 false
console.log(dP2.test("2017-15-11"));
//输出 false
console.log(dP2.test("2017-02-29"));

//验证日期  eg:  checkDate("2017-07-27")
function checkDate(value){
	var re=/^\d{4}-\d{1,2}-\d{1,2}(\s\d{1,2}(:\d{1,2}(:\d{1,2})?)?)?$/;
	return re.test(value);
}

//校验日期
“yyyy-mm-dd“ 格式的日期校验，已考虑平闰年
^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$
```
## QQ号码正则 ##
```
//QQ号正则，5至11位
var qqPattern = /^[1-9][0-9]{4,10}$/;
//输出 true
console.log(qqPattern.test("65974040"));
```
## 微信号正则 ##
```
//微信号正则，6至20位，以字母开头，字母，数字，减号，下划线
var wxPattern = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;
//输出 true
console.log(wxPattern.test("RuilongMao"));
```
## 车牌号正则 ##
```
//车牌号正则
var cPattern = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
//输出 true
console.log(cPattern.test("京K39006"));
```
## 包含中文正则 ##
```
//包含中文正则
var cnPattern = /[\u4E00-\u9FA5]/;
//输出 true
console.log(cnPattern.test("42度"));

字符串只能是中文
^[\\u4e00-\\u9fa5]{0,}$
```
## 校验金额 ##
```
//金额校验，精确到2位小数
^[0-9]+(.[0-9]{2})?$
```
## 常用验证 ##
```
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

## 常用语句 ##
```
正则表达式经常被用于字段或任意字符串的校验，比如下面这段校验基本日期格式的JavaScript代码：
var reg = /^(\\d{1,4})(-|\\/)(\\d{1,2})\\2(\\d{1,2})$/; 
var r = fieldValue.match(reg);             
if(r==null)alert('Date format error!');

3、由数字，26个英文字母或下划线组成的字符串
^\\w+$

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

