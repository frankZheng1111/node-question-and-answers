'use strict'
var util = require('util');
var EventEmitter = require('events').EventEmitter;

// 创建事件监听
//
function MyEmitter() {
  EventEmitter.call(this);
} // 构造函数

MyEmitter.prototype = EventEmitter.prototype;
MyEmitter.constructor = "MyEmitter"

// 统一捕获错误事件
//
var domain = require('domain');
var myDomain = domain.create();

// 新观察者
//
var em = new MyEmitter();

// 新观回调
//
em.on('newListener', function(name, listener) {
  console.log("新事件的名字:", name);
  console.log("新事件的代码:", listener);
  setTimeout(function(){ console.log("我是自定义延时处理机制"); }, 1000);
});

em.on('hello', function(data) {
  console.log('收到事件hello的数据:', data);
  throw new Error("错误事件来自em");
}); // 接收事件，并打印到控制台

// 接收事件并打印
//
myDomain.on('error', function(err){
  console.log('domain接收到的错误事件:', err);
});
myDomain.run(function(){
  em.emit('hello', 'EventEmitter传递消息真方便!');
});



