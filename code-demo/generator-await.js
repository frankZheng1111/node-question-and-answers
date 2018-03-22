function say(greeting){
  return new Promise(function(resolve,then){
    setTimeout(function(){
      resolve(greeting);
    },1500);
  });
}

/********************* async / await ******************/

// (async function(){
//   let v1=await say('Hello');
//   console.log(v1);
//
//   let v2=await say('World');
//   console.log(v2);
// }());

/********************* async / await ******************/

/********************* yield promise实现 *********************/

function yieldPromise(generator){
  let iterator = generator();
  recursiveCore.call(iterator);
}

function recursiveCore(callback){
  let iterator = this;
  result = iterator.next(callback);

  console.log(result);
  if(result.done){ return; }

  let promise = result.value;
  promise.then(function(v){
    recursiveCore.call(iterator,v);
  });
}

yieldPromise(function*(){
  // 第一次next() 返回promise, 第二次next(promise返回的值) 赋予变量
  let v1 = yield say('hello')
  console.warn(v1);

  let v2 = yield say('world')
  console.warn(v2);
});

/********************* yield promise实现 *********************/

