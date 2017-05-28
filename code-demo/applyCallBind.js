'use strict';

function Person() {
}
Person.prototype.sayName = function () { console.log(this.name, arguments); }

var obj = {name: 'michaelqin'}; // 注意这是一个普通对象，它不是Person的实例
// apply
Person.prototype.sayName.apply(obj, [1, 2, 3]);

// call
Person.prototype.sayName.call(obj, 1, 2, 3);

// bind
var sn = Person.prototype.sayName.bind(obj);
sn(1, 2, 3); // bind需要先绑定，再执行
