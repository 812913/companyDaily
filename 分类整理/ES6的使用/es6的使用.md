# ES6的使用  
## 数组  
### arr.find  

    const todo = statusArr.find(v => v.categoryCode === 'todo)  

## 解构赋值  

    const [dataMinDate, dataMaxData] = [dataDates[0], dataDates[dataDates.length-1]]  

    const {sprint:{endDate}} = this.state;  

    const {loading, {sprint:{sprintId}}} = this.state;  

## 模板字符串可以嵌套  

模板字符串可以嵌套：使用`()`

        <span>{`${remainingTime === null ? '0' : (`${remainingTime}h`)}`}</span>

