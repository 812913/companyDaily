# ES6的使用  
## 数组  
### 扩展运算符  
将一个数组转为用逗号分隔的参数序列  

    Math.max(...[14, 3, 77])

    let arr1 = [0, 1, 2];
    let arr2 = [3, 4, 5];
    arr1.push(...arr2);

    const arr1 = ['a', 'b'];
    const arr2 = ['c'];
    const arr3 = ['d', 'e'];

    // ES5 的合并数组
    arr1.concat(arr2, arr3);
    // [ 'a', 'b', 'c', 'd', 'e' ]

    // ES6 的合并数组
    [...arr1, ...arr2, ...arr3]
    // [ 'a', 'b', 'c', 'd', 'e' ]


### arr.find  || arr.findIndex

    const todo = statusArr.find(v => v.categoryCode === 'todo')  

### Array.from

将一个类数组的对象或可遍历对象转换成数组.

    const foo = document.querySelectorAll('.foo');
    const nodes = Array.from(foo);

### Array.of()
将一组值转换为数组，总是返回参数值组成的数组  

    Array.of(3, 11, 8) // [3,11,8]
    Array.of(3) // [3]
    Array.of(3).length // 1

### arr.includes()
表示是否包含给定的值，第二个参数为搜索的起始位置  
    
    [1, 2, 3].includes(2)     // true
    [1, 2, 3].includes(4)     // false
    [1, 2, NaN].includes(NaN) // true

### 遍历
* forEach
* some
* every
* map
* filter
* reduce
* for in
* for of

## 解构赋值  
1. 不常用
   
        const [dataMinDate, dataMaxData] = [dataDates[0], dataDates[dataDates.length-1]]  

        const {sprint:{endDate}} = this.state;  

        const {loading, {sprint:{sprintId}}} = this.state;  

        const { location: { pathname } } = this.props;// 注意pathname的{}


当需要获取并多次使用对象的属性时用对象的解构   

    // bad
    function getFullName(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;

    return `${firstName} ${lastName}`;
    }

    // good
    function getFullName(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`;
    }

    // best
    function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
    }

## 模板字符串可以嵌套  

模板字符串可以嵌套：使用`()`

        <span>{`${remainingTime === null ? '0' : (`${remainingTime}h`)}`}</span>


 

