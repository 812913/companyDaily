# Mobx
## 概述  
Mobx是一个通过函数式编程使得状态管理更简单，扩展性更强的库。

理念：应用的状态是本源，其他的部分，都应该从本源派生，包括用户界面、数据序列化、服务器通信等  

React + Mobx是一个强大的组合   
* React提供一个把应用程序的状态渲染成组件树的机制   
* Mobx提供存储和更新状态然后提供给React使用的机制   
  
React和Mobx都提供了一个开发过程中处理问题的很理想很独特的解决方案。
* React通过虚拟Dom减少UI渲染过程中DOM的操作次数已达到最佳的UI渲染；
* Mobx通过一个虚拟的状态依赖图实现只更新React组件依赖的状态已达到最佳的应用状态同步  

* observable  
* computed  
* action  
* autorun(() => {})  
* toJS  
* isObservableArray, isObservableObject  
* reaction

        class TodoList {
            @observable todos = [];
            @computed get unfinishedTodoCount() {
                return this.todos.filter(todo => !todo.finished).length;
            }
            @action setTodos(data){
                this.todos = data;
            }
            autorun(() => {
                console.log("Tasks left: " + todos.unfinishedTodoCount)
            })
        }

`@observable`：被观察的可以是对象或者数组，当被观察对象为对象或数组时，@observable是递归调用的，所以当对象的某个属性或者数组的某个值发生变化时，相当于被观察对象发生了变化  

`@computed`: 属性依赖，当相关数据被改变的时候，这个值会被自动计算并返回  

`toJS`：

        import { toJS } from 'mobx';

        class store extends Component{
            @observable users=[];
            @computed get getUsers(){
                return toJS(this.users);
            }
        } 

当某一数据被observable包装后，它其实返回的是被@observable包装后的类型：  

    const Mobx = require("mobx");
    const { observable, autorun } = Mobx;
    const obArray = observable([1, 2, 3]);
    console.log("ob is Array:", Array.isArray(obArray));
    console.log("ob:", obArray);

    ob is Array: false
    ob: ObservableArray {}

直接使用Mobx原生提供的API `isObservableArray`、 `isObservableObject`来判断一个数组、对象还是不是被@observable包装后的数据类型

使用toJS返回的数据还是可以观察的，是响应的

`reaction`: 
用法: 
    
        reaction(() => data, (data, reaction) => { sideEffect }, options?)

`autorun`的变种，对于如何追踪`observable`赋予了更细粒度的控制。接收两个函数参数，第一个数据函数用来追踪并返回数据作为第二个效果函数的输入。  

值得注意的是 效果 函数仅对数据函数中访问的数据作出反应。

参考： [Mobx-zh Reactios](https://cn.mobx.js.org/refguide/reaction.html)



