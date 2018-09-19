推荐的三种方式：  
（1）

    class DankButton extends React.Component {
        constructor() {
            super()
            // Good Solution: Bind it in here!
            this.handleClick = this.handleClick.bind(this)  
        }
        
        render() {
            return <button onClick={this.handleClick}>Click me!</button>
        }
        
        handleClick() {
            this.logPhrase()
        }
        
        logPhrase() {
            console.log('such gnawledge')
        }
    }

在构造函数中绑定回调上下文，构造函数只调用一次 

（2） 

     class DankButton extends React.Component {
        constructor() {
            super();  
        }
        
        render () {
            return <button onClick={this.handleClick}>Click me!</button>
        }
        
        handleClick = () => {
            this.logPhrase()
        }
        
        logPhrase() {
            console.log('such gnawledge')
        }
    }

（3）

    function ItemList(props) {
        return (
            <ul>
            {props.items.map((item, index) => (
                <Item
                key={item.key}
                onClick={() => doSomethingWith(item.name, index)}
                />
            ))}
            </ul>
        );
    }

不推荐的方式：     
（1）

         render () {
            return <button onClick={this.handleClick.bind(this)}>Click me!</button>
        }

这种方式，每次渲染也会重新生成函数。.bind不会修改原有函数，它只会返回一个指定执行上下文的新函数，垃圾回收系统仍然需要回收你之前绑定的回调  

（2）  

         render () {
            return <button onClick={() => this.handleClick}>Click me!</button>
        }

这种方式，箭头函数在render内部，组件每次重新渲染都会创建一个新的箭头函数(React中的渲染是很快捷的，所以重新渲染会经常发生，这意味着前面渲染中产生的函数会堆在内存中，强制垃圾回收机制清空它们，这是很花费性能的)  

