import a from './deep'
setTimeout(function(){
    console.log(a)
},1000);
//2
//在模块代码执行完之前，node根本不知道这个模块到底export出了什么东西，这也是和ESM最大的区别
// 因为ESM是基于关键字的模块化，是可以在解析的过程中就知道导出了什么。