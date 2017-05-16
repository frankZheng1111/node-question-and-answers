// 'use strict' 严格模式无法使用
function parent() {
  child();
}

function child() {
  console.log(arguments.callee);
  console.log(child.caller); 
}

parent();
// [Function: child]
// [Function: parent]

child();
// [Function: child]
// [Function]

