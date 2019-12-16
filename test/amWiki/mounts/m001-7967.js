if(typeof AWPageMounts=='undefined'){AWPageMounts={}};AWPageMounts['m001']=[{"name":"001-Chrome开发者工具介绍.md","path":"001-Chrome控制台的使用/001-Chrome开发者工具介绍.md","content":"# 谷歌开发者工具介绍\r\n作为一名前端开发工程师，相信你也不会对Chrome浏览器感到陌生。根据最新的的浏览器市场占有率报告，Chrome近乎占有浏览器天下的半壁江山。Chrome是一个强大的浏览器，不仅访问网页速度快，体积不大，支持的新特性也比其它浏览器多，而且提供了功能强大的分析工具。\r\n\r\n\r\n## 打开方式\r\n在网页的空白处，点击鼠标右键调出菜单，然后选择检查（某些浏览器叫做“审查元素”）；或按快捷键F12就可以轻松的打开开发者工具。\r\n\r\n<img src=\"assets/001/chrome_open.png\" width=\"1000\"/>\r\n\r\n开发者工具打开之后如图所示\r\n\r\n<img src=\"assets/001/chrome_all.png\" width=\"1000\"/>\r\n\r\n\r\n## 位置调整\r\n可在控制台右上角处调整工具位置：\r\n\r\n<img src=\"assets/001/chrome_wz.png\"/>\r\n\r\n对应下方三个选项分别为：①在新窗口打开、②在浏览器下方打开、③在浏览器右侧打开。\r\n\r\n\r\n## 开发者工具功能\r\nChrome开发者工具功能很多，我们着重介绍其中两大常用功能：\r\n* **Elements**    （审查元素）\r\n* **Console**   （控制台）\r\n\r\n<img src=\"assets/001/chrome_menu.png\"/>\r\n","timestamp":1575599078353},{"name":"002-Element 元素.md","path":"001-Chrome控制台的使用/002-Element 元素.md","content":"# Elements 查看元素\r\n打开开发者工具选择（默认）`Element`功能，Element功能非常实用，可以用来查看网页布局结构以及样式。  \r\n\r\n\r\n在Element中主要分两块大的部分  \r\n* A部分：HTML结构面板\r\n* B部分：CSS样式、结构\r\n\r\n<img src=\"assets/001/chrome_elements.png\" width=\"1000\"/>\r\n\r\n\r\n## A部分：HTML结构面板\r\n### 选择元素\r\n**在HTML结构面板中，每当你的鼠标移动到任何一个元素上，对应的html视图中会给该元素蓝色的背景。**\r\n\r\n<img src=\"assets/001/chrome_hover.png\" width=\"1000\"/>\r\n\r\n<br>\r\n**可以通过点击左上角箭头工具，鼠标经过页面时会高亮显示对应的html标签。**\r\n\r\n<img src=\"assets/001/chrome_xuan.png\" width=\"1000\"/>\r\n\r\n\r\n\r\n### 修改元素\r\n**双击标签的响应文字可以对内容进行修改进行修改。**<br>\r\n\r\n使用技巧：\r\n1. 将某些标签文字设置很多测试文字过长在页面中如何显示\r\n2. 可以复制图片路径、或者修改图片的路径\r\n\r\n<img src=\"assets/001/chrome_change2.png\"/>\r\n<br>\r\n\r\n## B部分：CSS样式、结构\r\n**单击选中一个元素之后，可以在B部分看到该元素所有CSS样式，以及该样式所在CSS文件第几行。**\r\n\r\n<img src=\"assets/001/Chrome_css.png\"/>\r\n\r\n<br>\r\n**可以在B部分的styles选项中修改、注释（取消勾选样式前的对钩）该元素的样式，还可点击样式空白位置新增CSS样式，并且看到html结构的实时更新。**\r\n\r\n<img src=\"assets/001/chrome_change.png\"/>\r\n","timestamp":1575599078353},{"name":"003-Console 控制台.md","path":"001-Chrome控制台的使用/003-Console 控制台.md","content":"# Console    控制台\r\n\r\n控制台主要是显示JS文件里面打印的日志信息。你也可以直接在里面写javascript，查看或修改当前作用域的变量信息。  \r\n\r\n![控制台](assets/001/003-1573109343516.png)\r\n\r\n如果想清空控制台，可以点击左上角那个<img src=\"assets/001/chrome_clear.png\" style=\"vertical-align: middle;\"/>来清空。\r\n\r\n\r\n## 日志输出类型\r\n常见的控制台出的信息包括三种：普通输出、警告、错误。\r\n\r\n![常见的控制台输出](assets/001/003-1573110096117.png)\r\n\r\n### 普通输出\r\n普通输出为前端人员在JavaScript代码编写过程中手动输出的数据，方便代码运行时数据查看和调试，不会影响网站的运行。一般正式环境应该将所有编码过程中写的手动输出都删除。\r\n\r\n### 警告\r\n警告为有橙色感叹号标识的输出，常为不符合浏览器或某些框架正确使用方式的提示信息，一般不会影响网站的运行。 例如所用框架中版本落后的功能、http安全问题等。\r\n\r\n### 错误\r\n错误输出为浏览器或JavaScript代码运行异常时的提示信息，会影响网站运行。一般正式环境应该没有任何错误输出。\r\n#### 常见的错误输出及其原因\r\n1. 文件（图片）路径错误（前台问题）:   ` ****.jpg  404 `\r\n![路径错误](assets/001/003-1573111584470.png)\r\n2. JavaScript语法报错（前台问题）\r\n    * ` *** is not defined ` ：变量未定义\r\n    * ` *** is not a function `：函数未定义\r\n    * ` *** of undefined `：数据为空导致错误\r\n    * ` Maximum call stack `：JavaScript死循环\r\n    * ` Unexpected token ; `: 缺少标点符号导致代码执行错误 \r\n3. 跨域报错 （后台问题）\r\n    * ` No \'Access-Control-Allow-Origin\' header is present on the requested resource `：跨域问题导致请求失败\r\n  > 什么是跨域：为了安全，域名或端口号不同的两个网址无法进行直接访问，需要进行特殊处理，一般是后台处理。\r\n4. 请求失败 （后台问题）\r\n    * 出现 `500` 或 `404` 字样则为后台服务未启动或接口未找到，为后台问题\r\n![404 500](assets/001/003-1573192586749.png)\r\n\r\n\r\n\r\n## JavaScript代码运行\r\n在控制台还可以执行一些简单的JavaScript语法，例如加减乘除（临时替代计算器）\r\n\r\n![控制台执行js代码](assets/001/003-1573199616079.png)","timestamp":1575599078353},{"name":"004-Application 存储.md","path":"001-Chrome控制台的使用/004-Application 存储.md","content":"# Application 存储\r\n该面板主要是记录网站加载的所有资源信息，包括存储数据（LocalStorage、SessionStorage、IndexedDB、Web SQL、Cookies）、缓存数据、字体、图片、脚本、样式表等。\r\n常用的是浏览器本地存储`LocalStorage`、`SessionStorage`，还有`Cookies`。\r\n\r\n![本地存储](assets/001/004-1573114800805.png)\r\n\r\n> 为了安全，不同域名或端口号的存储不能通用。例如在`aisteel.com`存储的数据，在`om.aisteel.com`无法访问。\r\n> 同理，同一浏览器域名和端口号相同时，即使时不同窗口，存储也是通用的。所以在不同窗口登录不同账号，后登录的会将之前登录的信息覆盖导致之前登录的账号状态异常。\r\n\r\n## LocalStorage \r\n长期存储，关闭网页或浏览器不会导致数据消失。例如存储用户的登录信息（用户名username、用户vid、token等）。双击键或值也可以修改对应的内容（不建议修改）\r\n\r\n![存储操作示意](assets/001/004-1573115328819.png)\r\n\r\n> 什么是token：Token是服务端生成的一串字符串，以作客户端进行请求的一个令牌，当第一次登录后，服务器生成一个Token字符串便将此字符串返回给客户端，以后客户端只需带上这个Token前来请求数据即可，即证明该用户已经登录。\r\n\r\n\r\n## SessionStorage\r\n短期操作，关闭浏览器数据即消失。例如存储网页跳转时所用的数据（订单id等）。存储的操作与LocalStorage相同\r\n\r\n\r\n","timestamp":1575599078353},{"name":"005-Network 网络.md","path":"001-Chrome控制台的使用/005-Network 网络.md","content":"# Network 网络\r\n从发起网页页面请求后分析HTTP请求后得到的各个请求资源信息（包括状态、资源类型、大小、所用时间等），可以根据这个进行请求响应数据查看或网络性能优化。\r\n\r\nNetwork面板主要包括5大块窗格：\r\n1. `Controls` 控制Network的外观和功能。\r\n2. `Filters` 控制Requests Table具体显示哪些内容，**一般选择`XHR`，只展示ajax请求**\r\n3. `Overview` 显示获取到资源的时间轴信息。\r\n4. `Requests Table` 按资源获取的前后顺序显示所有获取到的资源信息，点击资源名可以查看该资源的详细信息。\r\n5. `Summary` 显示总的请求数、数据传输量、加载时间信息。\r\n\r\n![Network面板](assets/001/005-1573116339512.png)\r\n\r\n**此处主要讲解 `Requests Table` 资源请求列表**\r\n\r\n## `Requests Table` 请求列表\r\n请求列表显示如下信息列： \r\n* **Name：** 资源名称，红色为请求失败，黑色为正常。单击资源名称可查看详情\r\n* **Status：** HTTP状态码，可判断接口连接是否正常\r\n  * 200 正常\r\n  * <font color=red>404 接口地址错误找不到该资源 （后台问题）</font>\r\n  * <font color=red>500 服务器异常 （后台服务未启动）</font>\r\n* Type： 资源类型\r\n* Initiator：  请求源\r\n* Size：  资源大小\r\n* Time： 请求时间，越短越好，一般超过1s的请求需要优化\r\n* Timeline： 可视化时间轴\r\n\r\n\r\n### 查看资源详情 （重要）\r\n通过点击某个资源的**Name**可以查看该资源的详细信息，包含如下内容：\r\n* **Headers**： 该资源的HTTP头信息，<font color=\'red\'>用来查看请求数据</font>。\r\n* **Preview**： 根据你所选择的资源类型显示相应的预览，<font color=\'red\'>用来查看响应数据</font>。\r\n* Response： 显示HTTP的响应信息。\r\n* Timing： 显示资源在整个请求生命周期过程中各部分花费的时间。\r\n\r\n#### Headers\r\n![http头信息](assets/001/005-1573174779708.png)\r\n\r\n* **General：**包含请求的地址、请求方式、请求状态码。可以该次请求是否正常有效\r\n    * 地址：目前开发环境请求`http://api.jtzy.com:9900/`；测试环境请求`http://42.159.94.80:9900/`；生产环境请求`http://api.aisteel.com:9900/`。**否则为前端异常。**  \r\n    * 请求方式：目前项目均为`POST`，**否则为前端异常**\r\n    * 请求状态码：`200`为正常，**`404`、`500` 均为后台异常**。404标识请求地址错误，500标识服务未启动\r\n    * <font color=red>地址的端口号后面为后端服务名，当请求异常时可判断是哪个后台服务有问题。</font>\r\n* **Request Payload：**包含传递给服务器的参数，<font color=red>可以查看是否缺少某个字段或者字段值是否正确</font>\r\n\r\n#### Preview\r\n\r\n**Preview**查看响应预览。当请求异常时，报错信息可在此处查看。\r\n\r\n正常响应，`data`中即为网页所需数据\r\n![响应预览](assets/001/005-1573176470157.png)\r\n\r\n**异常响应，可从响应数据猜测异常原因：**\r\n\r\n* `status:500`后台服务未启动 （status:404 同理）\r\n![服务未启动](assets/001/005-1573191865453.png)\r\n\r\n* 某些请求由于参数或后台服务互相调用有问题导致异常，**可以根据`subMessage`报错信息判断出错原因。 如提示 `* * * 为空`则为前台问题，否则一般为后台问题。**\r\n\r\n![请求异常](assets/001/005-1573192206683.png)\r\n\r\n> 后台服务名称统计，当报错信息中出现以下文字时大多为对应后台服务异常：\r\n> ucenter  用户中心 （晓雪）\r\n> pubs    公共服务 （小宇）\r\n> goods   商品 （一哥）\r\n> trade   订单  （小宇）\r\n> coreb   核心业务 (快采 直采) （小宇）\r\n\r\n\r\n","timestamp":1575599078353},{"name":"006-总结.md","path":"001-Chrome控制台的使用/006-总结.md","content":"# 总结\r\n当网页未正常显示，可通过以下方法确认问题所在：\r\n\r\n## 1. 后台服务异常\r\n1. 打开 `Console 控制台` 控制台查看有红色报错信息。\r\n2. 有`404` `500` 字样则为后台服务异常，打开 `Newwork 网络`查看异常的红色请求\r\n3. 从`Headers -> General` 可查看请求的地址从而得知出问题的服务。\r\n\r\n## 2. 前端代码报错导致页面报错或无响应\r\n1. 打开 `Console 控制台` 控制台查看有红色报错信息。\r\n2. 有语法报错则为前端代码异常 （什么是语法报错详见`Console 控制台`一节）\r\n\r\n## 3. 接口调用出错\r\n1. 打开页面或点击按钮时 弹框提示 `服务器内部错误` 等信息\r\n2. 打开 `Newwork 网络`点击对应的请求名称查看其响应内容 （如不知道点击哪个挨个点击）\r\n3. 当看到该接口返回值异常时可根据`subMessage`判断异常原因 （原因很多，前后台问题均有可能）\r\n","timestamp":1575599078353},{"name":"007-其他-浏览器快捷键.md","path":"001-Chrome控制台的使用/007-其他-浏览器快捷键.md","content":"\r\n## 浏览器快捷键\r\n| 快捷键 | 功能 |\r\n| ---- | ---- |\r\n| Ctrl + J | 打开下载页面 |\r\n| Ctrl + H | 打开历史记录 |\r\n| Alt + D | 焦点聚焦到地址栏，方便快速输入网址 |\r\n\r\n## 窗口快捷键\r\n| 快捷键 | 功能 |\r\n| ---- | ---- |\r\n| Ctrl + 鼠标左键 | **在新窗口打开链接** |\r\n| Ctrl + W | **关闭当前窗口** |\r\n| Ctrl + Shift + t | **重新打开最后关闭的标签页** |\r\n| Ctrl + F | 查找，可用于快速查找某些文字 |\r\n| Alt + ← | 历史记录上一页  |\r\n| Alt + → | 历史记录下一页 |\r\n\r\n\r\n## 网页快捷键\r\n| 快捷键 | 功能 |\r\n| ---- | ---- |\r\n| Ctrl + F5 | **强制刷新页面，清空页面缓存，常用于重新部署服务之后** |\r\n| Ctrl + D | 将当前网页保存为书签 |\r\n| Ctrl + + | 放大网页内容 |\r\n| Ctrl + - | 缩小网页内容 |\r\n| Ctrl + 0 | **网页内容缩放恢复默认的100%** |\r\n| Ctrl + Shift + Delete | 快速打开清除历史记录 |\r\n\r\n","timestamp":1575599078353}]