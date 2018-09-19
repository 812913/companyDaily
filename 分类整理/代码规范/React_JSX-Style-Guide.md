# 这里是要注意的React/JSX代码规范  

## 1.基本规范  
（1）每个文件只写一个模块  
但是，多个无状态模块可以放在单个文件中  

（2）不要使用`React.createElement`  

## 2.创建模块
* Class  
* React.createClass   
* stateless  

如果模块有内部状态或者refs，推荐使用1  
如果模块没有状态（state）或者引用refs，推荐使用普通函数(非箭头函数)   

## 3.使用其他方法(如：组件化、高阶组件、工具模块)代替Mixins  

## 4.单引号还是双引号  
对于JSX属性值总是使用`""`，其他均使用单引号`''`  

    // bad
    <Foo bar='bar' />

    // good
    <Foo bar="bar" />

    // bad
    <Foo style={{ left: "20px" }} />

    // good
    <Foo style={{ left: '20px' }} />  

## 5. 空格  
（1）总是在自动关闭的标签前加一个空格   
（2）不要在JSX {}里边里两边加空格  

        // bad
        <Foo bar={ baz } />

        // good
        <Foo bar={baz} />

## 6. Props属性  
（1）属性名使用骆驼式风格`camelCase`  
（2）如果属性值为true，可以直接忽略  

    // bad
    <Foo
    hidden={true}
    />

    // good
    <Foo
    hidden
    />

    // good
    <Foo hidden />

（3）`<img>`标签总是要添加`alt`   
 如果图片以presentation(感觉是以类似PPT方式显示?)方式显示，alt 可为空, 或者<img> 要包含role="presentation". eslint: jsx-a11y/alt-text
  
    // bad
    <img src="hello.jpg" />

    // good
    <img src="hello.jpg" alt="Me waving hello" />

    // good
    <img src="hello.jpg" alt="" />

    // good
    <img src="hello.jpg" role="presentation" />

不要在 alt 值里使用如 "image", "photo", or "picture"包括图片含义这样的词

（4）避免使用数组的index作为key  

## 7.Refs 
总是在Refs里使用回调函数

    // bad
    <Foo
    ref="myRef"
    />

    // good
    <Foo
        ref={(ref) => { this.myRef = ref; }}
    />  

## 括号 
将多行的JSX标签卸载`()`里，单行可以不需要   

    // bad
    render() {
    return <MyComponent className="long body" foo="bar">
            <MyChild />
            </MyComponent>;
    }

    // good
    render() {
    return (
        <MyComponent className="long body" foo="bar">
        <MyChild />
        </MyComponent>
    );
    }

    // good, 单行可以不需要
    render() {
    const body = <div>hello</div>;
    return <MyComponent>{body}</MyComponent>;
    }

    参考：[Airbnb React/JSX 编码规范](https://github.com/JasonBoy/javascript/tree/master/react)