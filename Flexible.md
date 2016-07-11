

###前言###

> 曾几何时，互联网到了移动时代，前端也不用为了兼容IE低版本浏览器而头痛。有了gulp,mv*等利器之后，前端开发似乎变得简单起来了。<br>
可是最后为了处理各终端的适配而乱了手脚。

>虽然H5的页面与PC的Web页面相比简单了不少，但是我们要想尽办法让页面能适配众多不同的终端设备。
看看下图你就会知道，这是多么痛苦的一件事情：

![Device metrics](https://camo.githubusercontent.com/9598a107e7f7029717f52192c90dcaf7008e49c1/687474703a2f2f7777772e773363706c75732e636f6d2f73697465732f64656661756c742f66696c65732f626c6f67732f323031352f313531312f72656d2d342e706e67)
<br>
###<b>希望这篇文章可以对大家实现多终端适配的提供一些帮忙！</b>####

<br>
###设计需要配合什么
<p>在h5产品开发的时候，设计师通常会选择iPhone6作为基准设计尺寸，交付给前端的设计尺寸是按750px * 1334px为准(高度会随着内容多少而改变)。
前端开发人员通过一套适配规则自动适配到其他的尺寸。</p>

<br>
###前端开发完成终端适配方案###
<p>拿到设计师给的设计图之后，剩下的事情是前端开发人员的事了。<br>
前端的解决方案通常是用自适应（Flex,百分比）+ rem <br>
更高端一点的办法就是通过Iconfont或者svg来处理Icon，用bootstrap的栅格处理列表和布局。<br>
这些都会有个通病就是无法动态处理宽度改变，以及低版本的安卓机没法控制缩放比例。<br>

所以我们可以针对这些问题整理出一套完整的终端适配方案<br>
</p>

<br>
###基本概念###
<p>在进行介绍方案之前，首先得了解下面这些基本概念(术语)：</p>

> <b>视窗 viewport</b>

<p>简单的理解，viewport是严格等于浏览器的窗口。在桌面浏览器中，viewport就是浏览器窗口的宽度高度。但在移动端设备上就有点复杂。</p>

<p>移动端的viewport太窄，为了能更好为CSS布局服务，所以提供了两个viewport:虚拟的viewportvisualviewport和布局的viewportlayoutviewport。</p>

<p>而事实上viewport是一个很复杂的知识点，上面的简单描述可能无法帮助你更好的理解viewport，而你又想对此做更深的了解，可以阅读[PPK写的相关教程](http://www.w3cplus.com/css/viewports.html)。</p>


> <b>物理像素(physical pixel)</b>

物理像素又被称为设备像素，他是显示设备中一个最微小的物理部件。每个像素可以根据操作系统设置自己的颜色和亮度。正是这些设备像素的微小距离欺骗了我们肉眼看到的图像效果。


> <b>设备独立像素(density-independent pixel)</b>

设备独立像素也称为密度无关像素，可以认为是计算机坐标系统中的一个点，这个点代表一个可以由程序使用的虚拟像素(比如说CSS像素)，然后由相关系统转换为物理像素。


> <b>CSS像素</b>

CSS像素是一个抽像的单位，主要使用在浏览器上，用来精确度量Web页面上的内容。一般情况之下，CSS像素称为与设备无关的像素(device-independent pixel)，简称DIPs。

> <b>屏幕密度</b>

屏幕密度是指一个设备表面上存在的像素数量，它通常以每英寸有多少像素来计算(PPI)。

> <b>设备像素比(device pixel ratio)</b>

设备像素比简称为dpr，其定义了物理像素和设备独立像素的对应关系。它的值可以按下面的公式计算得到：

<pre>设备像素比 ＝ 物理像素 / 设备独立像素</pre>

<p>在JavaScript中，可以通过window.devicePixelRatio获取到当前设备的dpr。</p>
<p>而在CSS中，可以通过-webkit-device-pixel-ratio，-webkit-min-device-pixel-ratio和 -webkit-max-device-pixel-ratio进行媒体查询，对不同dpr的设备，做一些样式适配(这里只针对webkit内核的浏览器和webview)。</p>

![视网膜屏幕](http://cdn1.w3cplus.com/cdn/farfuture/WCQ8QUw1qA7NLQhNSyE4RiLTqHwrTkmD4f_2HOX_4uE/mtime:1421035429/sites/default/files/styles/print_image/public/blogs/201212/retina-web-6.jpg)

> <b>Meta标签</b>

<p><meta>标签有很多种，而这里要着重说的是viewport的meta标签，其主要用来告诉浏览器如何规范的渲染Web页面，而你则需要告诉它视窗有多大。在开发移动端页面，我们需要设置meta标签如下：</p>

```
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
```

> <b>CSS单位rem</b>

<p>简单的理解，rem就是相对于根元素<html>的font-size来做计算。而我们的方案中使用rem单位，是能轻易的根据<html>的font-size计算出元素的盒模型大小。而这个特色对我们来说是特别的有益处。</p>

> <b>flexible解决方案</b>

<p>其实H5适配的方案有很多种，网上有关于这方面的教程也非常的多。不管哪种方法，都有其自己的优势和劣势。</p>
<p>[flexible解决方案](https://github.com/amfe/lib-flexible) 这个库在手机淘宝已经使用了近一年，而且已达到了较为稳定的状态</p>
<p>除此之外，你不需要考虑如何对元素进行折算，可以根据对应的视觉稿，直接切入。</p>

事实上他做了这几样事情：

* <p>动态改写<meta>标签</p>
* <p>给<html>元素添加data-dpr属性，并且动态改写data-dpr的值</p>
* <p>给<html>元素添加font-size属性，并且动态改写font-size的值</p>


> <b>flexible使用方法</b>

<p>只需要在Web页面的<head></head>中添加对应的flexible_css.js,flexible.js文件：</p>

```
    <script src="build/flexible_css.debug.js"></script>
	<script src="build/flexible.debug.js"></script>
```
执行这个JS后，会在<code><html></code>元素上增加一个data-dpr属性，以及一个font-size样式。JS会根据不同的设备添加不同的data-dpr值，比如说2或者3，同时会给html加上对应的font-size的值，比如说75px。

除此之外，可以手动设置meta来控制dpr值，如：

```
    <meta name="flexible" content="initial-dpr=2" />
```

目前Flexible会将视觉稿分成100份，而每一份被称为一个单位a。同时1rem单位被认定为10a。
针对我们这份视觉稿可以计算出：

```
	1a   = 7.5px
	1rem = 75px 	
```
那么我们这个示例的稿子就分成了10a，也就是整个宽度为10rem，<html>对应的font-size为75px

iphone 6的是实际宽度是375 * 667 ;

当前设备的dpr = 2 ; 

所以设计图的宽度是 750 * 1134 

在750Px设计图切出来的Icon比如说是85 * 85;

那我们给这个icon设置样式就是 width: 85/75;height:85/75

<b>CSSREM</b>

<p>[CSSREM](https://github.com/flashlizi/cssrem)是一个CSS的px值转rem值的Sublime Text3自动完成插件。</p>
插件的效果：

![CSSREM](https://camo.githubusercontent.com/7bc50fa37be4ada5d263152a107125a216a6936c/687474703a2f2f7777772e773363706c75732e636f6d2f73697465732f64656661756c742f66696c65732f626c6f67732f323031352f313531312f63737372656d2e676966)
