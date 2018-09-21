var CreateDiv = function(html) {
    this.html = html;
    this.init();
}
CreateDiv.prototype.init = function(){
    var div = document.createElement('div');
    div.innerHTML = this.html;
    document.body.appendChild(div);
}

var ProxyMode = (function(fn){
    var _instance = null;
    return function(){
        if(!_instance){
            _instance = new CreateDiv('test');
        }
        return _instance;
    }

})();

var a = new ProxyMode("aaa");
var b = new ProxyMode("bbb");
console.log(a===b);// true
//因为单例模式，只实例化一次，因此第一次实例化和以后实例化的都一样


