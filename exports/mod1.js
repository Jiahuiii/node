var name = "kris";
function showName(){
    console.log(name);
}
module.exports = showName;

// exports.showname = showName;

//不可以通过对 exports 直接赋值代替对 module.exports 赋值。
// exports 实际上只是一个和 module.exports 指向同一个对象的变量， 它本身会在模块执行结束后释放，
// 但 module 不会，因此只能通过指定 module.exports 来改变访问接口。