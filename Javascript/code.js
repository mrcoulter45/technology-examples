// Object Deep Copy

let obj2 = {a: 'cat', b: {a: 'cat', b: {a: 'cat', b: 'dog', c: 'fish'}, c: 'fish'}, c: 'fish'};
let obj3 = JSON.parse(JSON.stringify(obj2));
obj3.a = 'zebra';
obj3.b.b.b += 'gy';
console.log(obj2);
console.log(obj3);

// > Object { a: "cat", b: Object { a: "cat", b: Object { a: "cat", b: "dog", c: "fish" }, c: "fish" }, c: "fish" }
// > Object { a: "zebra", b: Object { a: "cat", b: Object { a: "cat", b: "doggy", c: "fish" }, c: "fish" }, c: "fish" }
// Use JSON.parse(JSON.stringify(obj)) for true deep copy

let obj0 = {a: 'cat', b: {a: 'cat', b: {a: 'cat', b: 'dog', c: 'fish'}, c: 'fish'}, c: 'fish'};
let obj1 = {...obj0};
obj1.a = 'zebra';
obj1.b.b.b += 'gy';
console.log(obj0);
console.log(obj1);

// > Object { a: "cat", b: Object { a: "cat", b: Object { a: "cat", b: "doggy", c: "fish" }, c: "fish" }, c: "fish" }
// > Object { a: "zebra", b: Object { a: "cat", b: Object { a: "cat", b: "doggy", c: "fish" }, c: "fish" }, c: "fish" }
// Spread operator cannot be used for true object deep copy
