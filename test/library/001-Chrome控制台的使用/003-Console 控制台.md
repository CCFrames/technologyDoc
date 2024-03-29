# Console    控制台

控制台主要是显示JS文件里面打印的日志信息。你也可以直接在里面写javascript，查看或修改当前作用域的变量信息。  

![控制台](assets/001/003-1573109343516.png)

如果想清空控制台，可以点击左上角那个<img src="assets/001/chrome_clear.png" style="vertical-align: middle;"/>来清空。


## 日志输出类型
常见的控制台出的信息包括三种：普通输出、警告、错误。

![常见的控制台输出](assets/001/003-1573110096117.png)

### 普通输出
普通输出为前端人员在JavaScript代码编写过程中手动输出的数据，方便代码运行时数据查看和调试，不会影响网站的运行。一般正式环境应该将所有编码过程中写的手动输出都删除。

### 警告
警告为有橙色感叹号标识的输出，常为不符合浏览器或某些框架正确使用方式的提示信息，一般不会影响网站的运行。 例如所用框架中版本落后的功能、http安全问题等。

### 错误
错误输出为浏览器或JavaScript代码运行异常时的提示信息，会影响网站运行。一般正式环境应该没有任何错误输出。
#### 常见的错误输出及其原因
1. 文件（图片）路径错误（前台问题）:   ` ****.jpg  404 `
![路径错误](assets/001/003-1573111584470.png)
2. JavaScript语法报错（前台问题）
    * ` *** is not defined ` ：变量未定义
    * ` *** is not a function `：函数未定义
    * ` *** of undefined `：数据为空导致错误
    * ` Maximum call stack `：JavaScript死循环
    * ` Unexpected token ; `: 缺少标点符号导致代码执行错误 
3. 跨域报错 （后台问题）
    * ` No 'Access-Control-Allow-Origin' header is present on the requested resource `：跨域问题导致请求失败
  > 什么是跨域：为了安全，域名或端口号不同的两个网址无法进行直接访问，需要进行特殊处理，一般是后台处理。
4. 请求失败 （后台问题）
    * 出现 `500` 或 `404` 字样则为后台服务未启动或接口未找到，为后台问题
![404 500](assets/001/003-1573192586749.png)



## JavaScript代码运行
在控制台还可以执行一些简单的JavaScript语法，例如加减乘除（临时替代计算器）

![控制台执行js代码](assets/001/003-1573199616079.png)