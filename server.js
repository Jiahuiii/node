var http = require('http')
http.createServer(function(req,res){
    res.write('<h1>node.js</h1>');
    res.end('hello world')
}).listen("3000")
console.log('服务器运营在3000端口');

// 调试  npm install -g supervisor
// supervisor server.js