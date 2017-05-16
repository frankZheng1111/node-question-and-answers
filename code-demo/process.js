'use strict'

// 属性
//
console.log(process.argv);// 返回当前进程的命令行参数数组。
console.log(process.arch);// 返回当前cpu架构
console.log(process.env);// 返回一个对象，成员为当前Shell的环境变量，比如console.log(process.env.HOME。
console.log(process.installPrefix);// node的安装路径的前缀，比如/usr/local，则node的执行文件目录为/usr/local/bin/node。
console.log(process.pid);// 当前进程的进程号。
console.log(process.platform);//当前系统平台，比如Linux。
console.log(process.title);// 默认值为“node”，可以自定义该值。
console.log(process.version);// 6.0.0

// stdout stdin stderr
//

// stdout
//
var fs = require('fs');
fs.createReadStream('code-demo/design.js')
  .pipe(process.stdout);


// stdin
//
process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write('data: ' + chunk);
  }
});

process.stdin.on('end', function() {
  process.stdout.write('end');
});

process.on('exit', function() { console.log('即将退出') })
// exit
// 5秒后退出
setTimeout(process.exit, 5000);
