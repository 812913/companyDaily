# 这里是CSS和Sass代码规范  

## CSS

（1）在一个规则声明中应用了多个选择器时，每个选择器独占一行  

    .one,
    .selector,
    .per-line {
    // ...
    }

（2）规则声明之间用空行分隔开  

    .avatar {
        border-radius: 50%;
        border: 2px solid white;
    }

    .one,
    .selector,
    .per-line {
    // ...
    }  

（3）注释  
* 建议使用行注释 (在 Sass 中是 //) 代替块注释。
* 建议注释独占一行。避免行末注释。
* 给没有自注释的代码写上详细说明，比如：为什么用到了 z-index，兼容性处理或者针对特定浏览器的 hack  

（4）不要使用 ID 选择器   
给你的规则声明带来了不必要的高优先级，而且 ID 选择器是不可重用的  

（5）边框  
在定义无边框时，用`0`代替`none`   

    // Bad
    .foo {
    border: none;
    }

    // Good
    .foo {
    border: 0;
    }

## Sass  
（1）使用`.scss`的语法，不使用`.sass`原来的语法  

（2）属性声明的排序  
1. 除去`@include`和嵌套选择器之外的所有属性声明  
2. `@include`声明  
3. 嵌套选择器  

        .btn {
            background: green;
            font-weight: bold;
            @include transition(background 0.5s ease);

            .icon {
                margin-right: 10px;
            }
        } 

（3）变量   

变量名应使用`-`（例如 `$my-variable`）代替 camelCased 和 snake_cased 风格。对于仅用在当前文件的变量，可以在变量名之前添加下划线前缀（例如 `$_my-variable`）  

（4）Mixins  
为了让代码遵循DRY原则(Dont't Repeat Yourself)，应该用mixin  

（5）避免使用`@extend`指令来继承  

（6）嵌套选择器  
不要让嵌套选择器的深度超过3层   
！！！永远不要嵌套ID选择器  

参考：[Airbnb CSS / Sass 指南](https://github.com/Zhangjd/css-style-guide)
