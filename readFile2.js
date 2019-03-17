// nodejs不鼓励使用同步I/O
var fs = require('fs');
var data = fs.readFileSync('./file/test.txt','utf-8');
console.log(data);
console.log('同步读取文件');