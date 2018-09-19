* computed  
* autorun  
* when  
* reaction  
* observable  
* 理解Mobx对何作出响应  
  
Mobx会对什么做出反应？  
> Mobx会对在 **追踪函数**执行 **过程**中 **读取**现存的可观察属性做出反应  

* 读取，对象属性的间接引用，可以用`.`或者`[]`(例如：user.name user['name'])的形式完成  
* 追踪函数，`computed`表达式、`observer`组件的`render()`方法和`when`、`reaction`、`autorun`的第一个入参函数  
* 过程，意味着只追踪那些在函数执行过程时被读取的`observable`。这些值是否由追踪函数直接或间接使用并不重要   
  
Mobx不会对如下情形做出反应：  
* 从`observable`获取的值，但是在追踪函数之外  
* 在异步调用的代码块中读取的`observable`  
  
参考：[MobX 会对什么作出反应?](https://cn.mobx.js.org/refguide/react.html#mobx-%E4%BC%9A%E5%AF%B9%E4%BB%80%E4%B9%88%E4%BD%9C%E5%87%BA%E5%8F%8D%E5%BA%94)  