var module = {
    exports:{
        name:"我是module的exports属性"
    }
};
var exports = module.exports;  //exports是对module.exports的引用
console.log(module.exports);
console.log(exports);

exports.name = "我想改一下名字";
console.log(module.exports);
console.log(exports);

var Circle = {
    name:"我是一个圆",
    func:function(x){
        return x*x*3.14;
    }
};
exports = Circle;
console.log(module.exports);
console.log(exports);