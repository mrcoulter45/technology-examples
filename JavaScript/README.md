# JavaScript

## Promises
- Reference: 
  - https://www.youtube.com/watch?v=104J7_HyaG4
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
- JavaScript promises represent an alternative system to callbacks for managing asynchronous requests in your code base. 


```JavaScript
const promise0 = new Promise((resolve, reject) => {
  // do something asynchronous which eventually calls either:
  //
  //   resolve(someValue); // fulfilled
  // or
  //   reject("failure reason"); // rejected
});
```
When a Promise object is first created, it is created in the `pending` state, and given a value of `undefined`. 
[![N|Solid](https://github.com/mrcoulter45/technology-examples/blob/master/JavaScript/images/promise0.png)
If the Promise object is `resolved`, it can no longer be `rejected`, its `.then()` method runs, and its value is set to the resolved value.
[![N|Solid](https://github.com/mrcoulter45/technology-examples/blob/master/JavaScript/images/promise1.png)
Similarly, if the Promise object is `rejected`, it can no longer be `resolved`, its `.catch()` method runs, and its value is set to the rejected error.
[![N|Solid](https://github.com/mrcoulter45/technology-examples/blob/master/JavaScript/images/promise2.png)
Eg.
```JavaScript
var promise0 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 3000);
});
console.log(promise0);

// >
// Promise {<pending>}
//   __proto__: Promise
//   [[PromiseStatus]]: "pending"
//   [[PromiseValue]]: undefined

setTimeout(function() {
    console.log(promise0); // after promise resolves
  }, 4000);

// >
// Promise {<resolved>: "foo"}
//   __proto__: Promise
//   [[PromiseStatus]]: "resolved"
//   [[PromiseValue]]: "foo"

// .then() will run immediately after promise0 resolves
promise0.then((value) => { console.log('promise0 has resolved: ', value) });

// > promise0 has resolved:  foo
```
