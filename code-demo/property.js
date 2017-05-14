'use strict';
function Parent() {
}
Parent.prototype.sayAge = function() {
  console.log(this.age);
}

function Child() {
  this.age = 6;
}
Child.prototype = Parent.prototype;

let child = new Child();

// hasownproperty
console.log('test hasOwnProperty:');

console.log(child.hasOwnProperty('age')); // true
console.log(child.hasOwnProperty('sayAge')); // false


// Object.defineProperty
let obj = {};

Object.defineProperty(obj, 'newDataProperty', {
  value: 101,
  writable: true,
  enumerable: true,
  configurable: true
});

console.log(obj.newDataProperty); // 101

// propertyIsEnumerable
//
console.log(obj.propertyIsEnumerable('newDataProperty')); // true
console.log(child.propertyIsEnumerable('sqyage')); // false
