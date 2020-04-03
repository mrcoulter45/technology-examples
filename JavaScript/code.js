// Object Deep Copy
let obj2 = {a: 'cat', b: {a: 'cat', b: {a: 'cat', b: 'dog', c: 'fish'}, c: 'fish'}, c: 'fish'};
let obj3 = JSON.parse(JSON.stringify(obj2));
obj3.a = 'zebra';
obj3.b.b.b += 'gy';
console.log(obj2);
console.log(obj3);

// > {
// >   a: 'cat',
// >   b: { a: 'cat', b: { a: 'cat', b: 'dog', c: 'fish' }, c: 'fish' },
// >   c: 'fish'
// > }
// > {
// >   a: 'zebra',
// >   b: { a: 'cat', b: { a: 'cat', b: 'doggy', c: 'fish' }, c: 'fish' },
// >   c: 'fish'
// > }
// Use JSON.parse(JSON.stringify(obj)) for true deep copy

let obj0 = {a: 'cat', b: {a: 'cat', b: {a: 'cat', b: 'dog', c: 'fish'}, c: 'fish'}, c: 'fish'};
let obj1 = {...obj0};
obj1.a = 'zebra';
obj1.b.b.b += 'gy';
console.log(obj0);
console.log(obj1);

// > {
// >   a: 'cat',
// >   b: { a: 'cat', b: { a: 'cat', b: 'doggy', c: 'fish' }, c: 'fish' },
// >   c: 'fish'
// > }
// > {
// >   a: 'zebra',
// >   b: { a: 'cat', b: { a: 'cat', b: 'doggy', c: 'fish' }, c: 'fish' },
// >   c: 'fish'
// > }
// Spread operator cannot be used for true object deep copy

// Array Deep Copy
let numbers0 = [1, [2, 3], [3, [4, 5, 6]], 5];
let numbers1 = [1, 2, 3, 4];

// can only be done when the array consists purely of JSON objects,
// array cannot contain any functions or React elements
let numbers2 = JSON.parse(JSON.stringify(numbers0));
let numbers3 = JSON.parse(JSON.stringify(numbers1));
numbers2[2][1][2] = 42;
numbers3[2] = 17;

console.log(numbers0);
console.log(numbers1);
console.log(numbers2);
console.log(numbers3);

// > [ 1, [ 2, 3 ], [ 3, [ 4, 5, 6 ] ], 5 ]
// > [ 1, 2, 3, 4 ]
// > [ 1, [ 2, 3 ], [ 3, [ 4, 5, 42 ] ], 5 ]
// > [ 1, 2, 17, 4 ]
// Use JSON.parse(JSON.stringify()) for true deep copy, not spread operator


// Promises
var promise0 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise0 resolves');
  }, 3000);
})
.then((value) => { console.log('.then() runs 3 seconds later...', value) })
.catch((value) => { console.log('.catch() runs 3 seconds later...', value) });

var promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('promise1 rejects');
  }, 3000);
})
.then((value) => { console.log('.then() runs 3 seconds later...', value) })
.catch((value) => { console.log('.catch() runs 3 seconds later...', value) });

// > .then() runs 3 seconds later... promise0 resolves
// > .catch() runs 3 seconds later... promise1 rejects

// async and await
