  ## 何时用state，何时用store？  
    
什么时候用state呢？  
   从后端获取的数据一般放在`state`中，只用于这个页面的没有与其他它页面共享的，像`loading`、`pagination`这种用state

   原因： **store的话，页面卸载时，需要在componentWillUnmount中手动清空store，state的话，会自动清空**(注意表单的筛选条件等的手动清空、tab的activeKey的重置)  
