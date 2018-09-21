# 这里是jQuery总体架构的学习

## 他山之石

### jQuery使用上的几大特点  
* `$('#id')`直接生成jQuery对象(无`new`构造)  
* 链式调用(函数末尾直接返回`this`) 
  
### 无new构造  

    var Book = function(title,time,type){
        if(this instanceof Book){//重要
            this.title = title;
            this.time = time;
            this.type = type;
        }else{
            return new Book(title,time,type);
        }
    }

### 链式调用
好处：代码简洁，代码返回的都是同一个对象，提高代码效率  
函数末尾直接`return this;`

jQuery中的无new构造， $('#id')直接返回jQuery对象 和 链式调用

