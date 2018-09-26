# _.reduce  

    const todo = _.reduce(statusArr, (sum, n) => sum + (n.statusName === '待办' ? n.count : 0), 0);

# _.map  
    
    data: _.map(ES.chartDataOrigin, 'name'),  

# _.remove  

注意，与`_.filter`相比，该方法会改变原数组 
 
        var array = [1, 2, 3, 4];
        var evens = _.remove(array, function(n) {
        return n % 2 == 0;
        });
        
        console.log(array);
        // => [1, 3]
        
        console.log(evens);
        // => [2, 4]

