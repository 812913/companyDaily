+++
title = "2018-08-04"
weight = 78
+++

# 今日学习
## mobx 测试的更新 
项目地址：[mobx Test](https://rdc.hand-china.com/gitlab/train-front-end/mobx-test/tree/20615)  
* 增加了编辑和搜索查看功能   
## 总结 
想着使用React、React-router、mobx做一个增删改查。于是对之前Mobx测试的项目进行了更改，增加了编辑功能和搜索查看功能。   
编辑功能已经实现，但搜索功能路由还有点问题。在做编辑功能的过程中，遇到的最大的问题是点击编辑后，路由到创建product页面，怎么把编辑项目、创建项目区分开。后来通过添加观测值isEdit的方式，如果是编辑，则设为true，点击保存按钮后通过id找到编辑的product，并对其进行修改。如果是创建product，则直接向products中添加一个product。   
搜索查看功能还有一些问题，填写表单。点击search进行搜索，路由到/product/search，更改页面中显示的prodoct。点击返回全部产品是就会出现问题。因为点击搜索时，更改了products，再返回时显示的是搜索过后的product，不能显示全部的product。这还是一个问题，还在思考。   

## 了解Choerodon   
了解下Choerodon产品，`choerodon-ui`、`choerodon-front`、`choerodon-front-boot`、`choerodon-front-iam`  
觉得非常厉害  

## 周末总结  
### 干了什么  
* 07-30，weekly-home-2的改进，解决了svg图片不能正常加载、React-router培训及学习  
* 07-31，React+React Router测试、Reatc Router4、Mobx学习 
* 08-01，Mobx培训、React+Mobx实现简单的todoList、Mobx学习
* 08-02，Mobx测试、React Test附加题、深入JSX
* 08-03，React深入学习、React-Router实现原理   
### 看下别人日志  
(1)react-router注意点：    
* Route组件如果不给path，那么路由将总是匹配。      
* exact: bool 如果为 true，path 为 ‘/one’ 的路由将不能匹配 ‘/one/two’，反之，亦然。 
* strict: bool 对路径末尾斜杠的匹配。如果为 true,path 为 ‘/one/’ 将不能匹配 ‘/one’ 但可以匹配 ‘/one/two’。  
* 如果要确保路由没有末尾斜杠，那么 strict 和 exact 都必须同时为 true      

(2)`<Redirect>`
使用 会导航到一个新的位置。新的位置将覆盖历史堆栈中的当前条目。只能在 组件内使用 ，以匹配一个位置。   

        <Switch>
        <Redirect from='/old-path' to='/new-path' />
        <Route path='/new-path' component={Place} />
        </Switch>

        //or
        <Route path="/home" render={()=><Redirect to="/other"/>}/>  
(3)`<Prompt>`
用于在位置跳转之前给予用户一些确认信息。

        <Prompt message="你确定要离开当前页面吗？" />

(4)chunk打包
通过异步`import()`引入模块，`webpack`会自动创建`chunk`分组打包  

方法1：通过`componentWillMount()`钩子函数去加载组件并传入`state`中  
    
        state = { component: null };

        componentWillMount() {
        import('./TaskList').then((module) => {
            this.setState({
            component: module.default,
            });
        });
        }
方法2：使用`async`和`await`加载
        
        state = { component: null };

        async componentWillMount() {
        this.setState({
            component: (await import('./TaskList')).default
        });
        }
方法3：使用HoC高阶函数来加载   
HoC用于组件复用一些样式，做一些扩展，常应用于页面路由    

        import asyncLoad from './asyncLoad';

        const TaskList = asyncLoad(() => import('./TaskList'));

        import React, { Component } from 'react';

        // asyncLoad.js
        export default function asyncLoad(cb) {
        return class AsyncComponent extends Component {
            state = {
            component: null,
            };

            async componentWillMount() {
            this.setState({
                component: (await cb()).default,
            });
            }
        };
        }
(5)`mobx`异常捕捉
        
        import { onError } from "mobx-react"
        onError(error => { console.log(error) })  

### 总结  
本周学习了React-Router、Mobx等知识，了解了Choerodon产品，觉得还是很充实、很满足的。周末看别人的日报才发现上周的Cash.js这个类没有进行修改，于是对它进行了改进，与我之前的想法相比，老师的办法确实简单了许多，减少了不必要的代码，主要利用了`toString`、`valueOf`这个方法，以及对象参与运算时的自动装换。我看了下大家的日报，都非常认真，都有自己的想法和努力在里面，从他们的日报里我了解了一些平时没有留意的问题，补充了知识，这让我觉得非常好。当然，我也会继续努力。