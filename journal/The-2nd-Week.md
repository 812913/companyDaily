+++
title = "2018-07-21"
weight = 90
+++

# 今日任务
## JSON
一种轻量级的数据交换格式。  

JSON中的数据格式：  
* `number`  
* `boolean`  
* `string`  
* `null`  
* `array`  
* `onject`  
  
JSON的字符集：`UTF-8`  

格式：  
* JSON中的字符串必须用`""`
* JSON中的键必须用`""`  

序列化：`JSON.stringify(obj)`   
JavaScript对象=>JSON格式的字符串  

反序列化：`JSON.parse('...')`  
JSON格式的字符串=>对象  

参考：[廖雪峰_JSON](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434499490767fe5a0e31e17e44b69dcd1196f7ec6fc6000)

## weekly-home-1
项目地址：[前端培训_第一周作业](https://rdc.hand-china.com/gitlab/train-front-end/weekly-homework-1/tree/20615)

### 遇到的问题  
1. 怎么改变伪元素的样式    
根据之前所学的知识，我知道伪元素是无法获取的。在作业中，我使用了`::before`来定义展开折叠的三角形，改变三角形样式时，最开始是蒙的。后来百度知道可以通过给添加伪元素的的元素添加和删除类来实现伪元素样式的改变。  
2. `style-loader` 与 `mini-css-extract-plugin`  
做作业时才注意到，这两个是不能同时用的。   
`style-loader`的作用是通过`<style>`标签将css注入到DOM中  
`mini-css-extract-plugin`则是将css单独打包一个文件  

### 还没有解决的问题 
1. 动画闪烁问题  
动画时间越长，闪烁的越厉害，虽然我使用了如下代码：

        backface-visibility: hidden; 
        transform-style: preserve-3d;
        transform: translate3d(0,0,0);
        
    好像没什么用

## 本周总结 

### 做了什么

07.16，主要是`Sass`、`CI`、`CD`  
07.17，主要是`ES6`，主要涉及`Babel`转换、`let`、`const`、解构赋值，还有`npm`、`gulp`的前端培训  
07.18，主要是`NPM test`、`webpack`预习、`Node`  
07.19，主要是`babel`、`webpack`的前端培训和`Node`的`HTTP`模块和`URL`模块的学习  
07.20，主要是`webpack test`、`Node`的`Fs`模块的学习，搭建了一个非常简单的静态服务器，还有`ES6`的字符串、数值、函数的扩展的预习
07.21，主要是`weekly-home-1`、学习总结

### 关于两次Test
关于`NPM`和`webpack`的两次测试,两次测试中大部分问题都能解决，但每次都会遇到一些小问题。每次测试完我都会稍微总结下。
#### NPM test
（1）使用`gulp-uglify`压缩报错
#### webpack test
（1）使用gulp定义任务，进行打包  
（2）webpack4的代码压缩(默认环境)   
（3）webpck中定义映射  

### 关于周末作业 
大致实现了老师的要求，但是有一个动画闪烁的问题还没有解决。  
通过周末作业学习到了如何改变伪元素的样式，注意到style-loader 与 mini-css-extract-plugin不能同时用

### 学习的新知识  
（1）npm培训学习到了如何发布包   
（2）`gulp-util`插件  
（3） webpack4的一些新特性，比如：webpack4中的代码压缩和css分离、将生产环境的配置和开发环境进行分离，通过`webpack-merge`与公共配置的合并、使用`gulp-stream`定义任务进行打包（这个时候webpack配置文件的entry、ontput是没用的，应该使用gulp.src和gulp.dest定义目标文件和输出目录），在配置webpack的情况下，如何在`<img/>`或者背景图片的`url`中引入图片、webpack中配置多入口文件  
（4）Node.js：HTTP模块、URL模块、Fs模块，如何用Node.js搭建一个静态服务器

### 看下别人日志  
（1） webpack 4 中会默认解析 .wasm, .mjs, .js 和 .json 为后缀的文件。 也就是说我们不需要json-loader了（但`babel-loader`仍然要使用，避免浏览器不兼容）    
（2）[webpack配置详解](http://trainning.staging.saas.hand-china.com/journals/front-end/20753/07-19/)  
（3）[webpack细节及应用](http://trainning.staging.saas.hand-china.com/journals/front-end/20646/07-20/)

### 总结  
本周前端分开培训，培训的内容直接都接触过，通过培训，对之前的知识进行梳理，发现了一些新的知识点，也意识到之前这些知识的掌握程度很薄弱。在两次测试中发现动手操作才能真正将问题暴露出来，从而解决，改进。  

又看了下别人的日志，发现了一些学习过程中没有注意到的地方，也了解到和其他人的差距，学到了新东西。 

多动手，多动脑。

## 下周计划 
* 培训
* Node
* React