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
```
