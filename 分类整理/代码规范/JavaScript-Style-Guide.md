# 这里是要注意的JavaScript代码规范

## 1.函数的顺序
get...-》箭头函数-》普通函数   

## 2.方法中用到的变量需要用解构赋值来取值，再使用    
方法中用到的变量需要用解构赋值来取值，再使用(如果多余3个，换行，否则，在一行)

        getOption() {
            const { currentVersion } = this.state;
            const option = {
            //...
            };
            return option;
        }

        handleMenuClick = (e) => {
            //...
        }

        renderContent = () => {
            const {
            versionList, currentVersion, currentVersionId, loading, 
            } = this.state;

        //...
        }
        
        loadData() {
            const { projectId } = AppState.currentMenuType;
            //...
        }

        loadSelectData(versionId) {
        //...
        }
        
        
        render() {
            //...
        }

## 3. url  
根据条件判断来拼接url、把url中使用的变量先定义(为避免url过长)、url一般不允许换行,因为``会把空格换行算在内

        const {
        type, name, id, organizationId,
        } = urlParams;
        <a 
            role="none"
            onClick={() => history.push(`/agile/release?type=${type}&id=${id}&name=${name}&organizationId=${organizationId}`)}
            >
            {'转至发布版本'}
        </a>

 注意：添加了onClick事件的Dom应该填上`role="none"`、多个属性换行  

## 4.命名规范   
避免用一个字母命名；

标识符采用驼峰大小写格式       
* 大驼峰式命名法：首字母大写，eg：StudentInfo，(类、)
* 小驼峰式命名法：首字母小写，eg：studentInfo，(对象、函数、实例、)

标识符：  
* 变量：小驼峰式命名法，前缀应该是名词       
* 常量：大写，使用大写和下划线来组合命名，下划线用以分割单词   
* 函数：小驼峰式命名法，前缀应该是动词，如：`can`、`has`、`is`、`get`、`set`、`load`(`can`、`has`、`is`返回布尔值，`get`返回一个非布尔值、`set`无返回值或者返回是否设置成功或者返回链式对象、load无返回值或者返回是否加载完成的结果)    
* 类 & 构造函数：大驼峰法，首字母大写  
* 类的成员：公共属性和方法：跟变量和函数的命名一样；私有属性和方法：前缀为_，后面跟公公属性和方法一样的命名方式    

## 5.注释规范   
* 行内注释  

        // 用来显示一个解释的评论
        // -> 用来显示表达式的结果
        // >用来显示 console 的输出结果

* 单行注释  
    
        // 调用了一个函数；1)单独在一行
        setTitle();

* 多行注释  

        /*
        * 代码执行到这里后会调用setTitle()函数
        * setTitle()：设置title的值
        */
        setTitle();

* 函数(方法)注释

        /**
        * 合并Grid的行
        * @param grid {Ext.Grid.Panel} 需要合并的Grid
        * @param cols {Array} 需要合并列的Index(序号)数组；从0开始计数，序号也包含。
        * @param isAllSome {Boolean} ：是否2个tr的cols必须完成一样才能进行合并。true：完成一样；false(默认)：不完全一样
        * @return void
        * @author polk6 2015/07/21 
        * @example
        * _________________                             _________________
        * |  年龄 |  姓名 |                             |  年龄 |  姓名 |
        * -----------------      mergeCells(grid,[0])   -----------------
        * |  18   |  张三 |              =>             |       |  张三 |
        * -----------------                             -  18   ---------
        * |  18   |  王五 |                             |       |  王五 |
        * -----------------                             -----------------
        */
        function mergeCells(grid: Ext.Grid.Panel, cols: Number[], isAllSome: boolean = false) {
        // Do Something
        }

## 6.操作符位置换行  

        if (ES.chartDataOrigin.every(v => v.start === 0 
            && v.add === 0 
            && v.left === 0 
            && v.done === 0)
            ) {
            return (
                <div style={{ padding: '30px 0 20px', textAlign: 'center' }}>
                {'当前单位下问题均未预估，切换单位或从下方问题列表进行预估。'}
                </div>
            );
        }


## 7.默认表达式  

用默认参数而不是在函数里对参数重新赋值。

    // really bad
    function handleThings(opts) {
    // No! We shouldn't mutate function arguments.
    // Double bad: if opts is falsy it'll be set to an object which may
    // be what you want but it can introduce subtle bugs.
    opts = opts || {};
    // ...
    }

    // still bad
    function handleThings(opts) {
    if (opts === void 0) {
        opts = {};
    }
    // ...
    }

    // good,注意默认参数应该放在最后
    function handleThings(opts = {}) {
    // ...
    }

# 8.数据循环

    // bad
    const increasedByOne = [];
    for (let i = 0; i < numbers.length; i++) {
    increasedByOne.push(numbers[i] + 1);
    }

    // good
    const increasedByOne = [];
    numbers.forEach(num => increasedByOne.push(num + 1));

    // best (keeping it functional)
    const increasedByOne = numbers.map(num => num + 1);

# 9.声明变量 

（1） const放一起，let放一起，分开声明，尽量用const

        // bad
        let i, len, dragonball,
        items = getItems(),
        goSportsTeam = true;

        // bad
        let i;
        const items = getItems();
        let dragonball;
        const goSportsTeam = true;
        let len;

        // good
        const goSportsTeam = true;
        const items = getItems();
        let dragonball;
        let i;
        let length;

 （2）在你需要的地方声明变量，但是要放在合理的位置  

    // bad - unnecessary function call
    function checkName(hasName) {
        const name = getName();
        if (hasName === 'test') {
            return false;
        }
        if (name === 'test') {
            this.setName('');
            return false;
        }
        return name;
    }

    // good
    function checkName(hasName) {
        if (hasName === 'test') {
            return false;
        }

        // 在需要的时候分配
        const name = getName();
        if (name === 'test') {
            this.setName('');
            return false;
        }
        return name;
    } 

# 10. 不要使用一元自增自减运算符（++， --）. eslint no-plusplus  

使用n+=1,n-=1代替  

    // bad

    let array = [1, 2, 3];
    let num = 1;
    num++;
    --num;

    let sum = 0;
    let truthyCount = 0;
    for(let i = 0; i < array.length; i++){
        let value = array[i];
        sum += value;
        if (value) {
        truthyCount++;
        }
    }

    // good

    let array = [1, 2, 3];
    let num = 1;
    num += 1;
    num -= 1;

    const sum = array.reduce((a, b) => a + b, 0);
    const truthyCount = array.filter(Boolean).length;

# 11. Comparison Operators & Equality
（1）用`===`和`!==`，而不是`==`和`!=`  

（2）条件语句`if`中的隐式转换   
* object -》 true  
* undefined -》 false
* null -》 false  
* boolean -》 true、false  
* number -》 +0、-0、NaN（false），其他（true）
* string -》 ''（false），其他（true）
  
（3）布尔值用缩写，字符串和数字要明确比较对象  

    // bad
    if (isValid === true) {
    // ...
    }

    // good
    if (isValid) {
    // ...
    }

    // bad
    if (name) {
    // ...
    }

    // good
    if (name !== '') {
    // ...
    }

    // bad
    if (collection.length) {
    // ...
    }

    // good
    if (collection.length > 0) {
    // ...
    }

# 12. 在case和default分句里用大括号创建一块包含语法声明的区域(e.g. let, const, function, and class).

    // bad
    switch (foo) {
    case 1:
        let x = 1;
        break;
    case 2:
        const y = 2;
        break;
    case 3:
        function f() {
        // ...
        }
        break;
    default:
        class C {}
    }

    // good
    switch (foo) {
    case 1: {
        let x = 1;
        break;
    }
    case 2: {
        const y = 2;
        break;
    }
    case 3: {
        function f() {
        // ...
        }
        break;
    }
    case 4:
        bar();
        break;
    default: {
        class C {}
    }
    }
    ```

# 13. 三元表达式不应该嵌套，通常是单行表达式  

# 14. `()`、`[]`里不许有空格，`{}`里要有空格  

# 15.避免一行代码超过100个字符(包括空格) 

# 16.立即执行函数用`()`括起来，并加上`;`

    // bad
    (function () {
    const name = 'Skywalker'
    return name
    })()

    // good
    (function () {
    const name = 'Skywalker';
    return name;
    }());  

# 17.类型转换  
（1）在语句开始执行强制类型转换  
（2）转换为string类型  

    // => this.reviewScore = 9;

    // bad
    const totalScore = this.reviewScore + ''; // invokes this.reviewScore.valueOf()

    // bad
    const totalScore = this.reviewScore.toString(); // 不能保证返回string类型

    // good
    const totalScore = String(this.reviewScore);

`toString`和`String`的异同：  
数值、字符串、对象、布尔都有`toString`方法，`null`和`undefined`使用toString会报错；  
所有类型都有`String`，当该类型有`toString`方法时，使用该方法进行转换

（3）转换为number类型    
用 `Number` 做类型转换，`parseInt`转换`string`常需要带上基数   

    const inputValue = '4';

    // bad
    const val = new Number(inputValue);

    // bad
    const val = +inputValue;

    // bad
    const val = inputValue >> 0;

    // bad
    const val = parseInt(inputValue);

    // good
    const val = Number(inputValue);

    // good
    const val = parseInt(inputValue, 10);

（4）转换为Boolean  

    const age = 0;

    // bad
    const hasAge = new Boolean(age);

    // good
    const hasAge = Boolean(age);

    // best
    const hasAge = !!age;

 
 更多规范：  
 * [Agile暂行前端规范](https://github.com/HuangQiii/Daily/blob/master/8.20/820.md)  
 * [CSS 创作指南（Beta）](https://github.com/cssdream/css-creating)
 * [Airbnb JavaScript Style Guide](https://github.com/lin-123/javascript)