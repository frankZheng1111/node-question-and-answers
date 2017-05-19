#!/usr/bin/env node
var cp = require('child_process');

// 两者参数传递方式不同
// exec 更为便捷, 与shell更为相近
// exec 选项默认200KB, 超过后会报错
//
var child = cp.spawn('echo', ['你好', "钩子"]); // 执行命令
var child = cp.exec('pwd'); // 执行命令
child.stdout.pipe(process.stdout); // child.stdout是输入流，process.stdout是输出流// 这句的意思是将子进程的输出作为当前程序的输入流，然后重定向到当前程序的标准输出，即控制台
