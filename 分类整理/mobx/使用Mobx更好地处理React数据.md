# Mobx
## 是什么
React的状态管理库  

## 与Redux的区别  
* Redux采用单一根节点、函数式编程、动作分离管理  
* Mobx基于观察者模式，采用多节点管理数据-》轻量、入手简单、代码耦合小  

## 其他人的经验分享  
1. 单例模式创建数据对象   
   更简单的在不同模块之间共享数据，也能避免数据的重复加载  

   例子：登录用户，创建一个store保存登录用户的数据，在需要使用登录数据的地方，引入登录用户的store即可

2. 数据切分  
   
   合理的数据切分能让业务逻辑更清晰、减少不必要的代码重复。  

   Mobx的数据切分，为公共数据提取，提取出来的公共数据可以在更多模块中使用。
   提取的原则： 
   * 以业务场景为模型依据进行数据切分  
   * 凡是在两个及以上场景使用到的数据都进行提取  

3. 处理依赖数据  
   Mobx采用观察者模式来处理数据依赖，通过`autorun`方法增加观察者  

   例子: 一个网站的消息列表数据需要监听用户数据的变化

4. 观察者定义  
   Mobx底层实现基于`Object`对象的`get`和`set`方法，所有的可监听的数据都会有这两个方法，`get`方法用来注册观察者，`set`方法用来触发更新的循环检测。  
   Mobx采用`autorun`函数来实现观察者的注册(`@observer`是对`autorun`方法的进一步封装),`autorun`接受一个函数参数，该函数在`autorun`执行的时候会首先执行一次，并且让函数内部需要的数据被调用，此时会自动调用get方法，从而将该函数注册成为观察者，并与需要的被观察数据做关联，当数据更新的时候，自动运行该方法。  

        import noticeStore from './noticeStore'
        import { observer } from 'mobx-react'

        @observer
        export default class NoticeList extends React.Component {

        defaultProps = {
            show: false
        }

        render() {
            return (
            <ul>
                {
                this.props.show
                && noticeStore.noticeList.map((notice, index)=> {
                    return <li key={ index }> { notice.subject } </li>
                })
                }
            </ul>
            )
        }
        }
    

以上代码中，show最初为false，所以render方法第一次执行的时候，不会执行`noticeStore.noticeList.map`，所以Mobx无法将观察者(render)与被观察者(noticeStore.noticeList)绑定到一起，所以当`oticeStore.noticeList`更新时，render方法并不会重新执行  

5. 数据更新  
   Mobx数据更新需要触发内部的set方法，但是有些不当的使用会导致set方法未被执行   

   错误的例子：  

        import { observable, autorun } from 'mobx'
        class Test {
        constructor() {
            test()
            reset()
        }
        @observable users = {}
        reset = ()=> {
            users['ASDFPOIU98'] = { id: 'ASDFPOIU98', name: '张小龙' }
        }
        test = ()=> {
            autorun(()=> {
            console.log(Object.keys(this.users))
            })
        }
        }
        export default new Test() 

在以上代码中，`console.log`方法只会执行一次，reset并不会触发`autorun`的运行。  
原因：观察的数据虽然是users对象，但其实是他们的 **指针指向(!!!)**，而以上修改数据的方式，并未改变users的指针，故不会触发set方法，也就不会触发数据更新检测。  

正确方法： 
使用新状态来替代就状态：

        reset = ()=> {
            users = Object.assign( { 'ASDFPOIU98': { id: 'ASDFPOIU98', name: '张小龙' } }, users)
        }

参考：[[干货] 使用Mobx更好地处理React数据](https://zhuanlan.zhihu.com/p/24613915)