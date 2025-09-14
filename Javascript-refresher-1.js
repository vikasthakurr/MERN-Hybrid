// ---------------- Lecture 1 ----------------

// 📌 How JavaScript Runs
// Definition: JavaScript is a single-threaded, synchronous language by default.
// It uses the Global Execution Context (GEC), Call Stack, and Memory (Heap).
// Asynchronous tasks are handled by Web APIs + Event Loop.

console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 2000);

console.log("End");

// Output:
// Start
// End
// Async Task   (after 2 sec)


// 📌 Heap vs Stack
// - Stack: Stores primitive values and function calls (LIFO).
// - Heap: Stores objects and reference types.


// 📌 Variables & Data Types
// Definition: Variables are containers for storing data values.
// Types: 
// 1. Primitive → number, string, boolean, null, undefined, symbol, bigint
// 2. Reference → objects, arrays, functions

let age = 25;
let name = "Vikas";
let isDev = true;
let user = { name: "Aman", age: 22 };
let numbers = [1, 2, 3];


// 📌 Loops & Conditionals
// Definition: Control flow structures to execute code repeatedly or conditionally.

for (let i = 0; i < 3; i++) {
  console.log("Loop:", i);
}

let marks = 85;
if (marks > 90) {
  console.log("Grade A");
} else if (marks > 70) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}


// 📌 Scope (var, let, const)
// Definition: Scope determines the accessibility of variables in code.

function testScope() {
  if (true) {
    var x = 10; // function-scoped
    let y = 20; // block-scoped
    const z = 30; // block-scoped
  }
  console.log(x); // ✅ works
  // console.log(y); ❌ error
  // console.log(z); ❌ error
}
testScope();


// 📌 Closures
// Definition: A closure is a function that remembers variables from its outer scope even after the outer function has executed.

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log("Count:", count);
  };
}

const counter = outer();
counter(); // Count: 1
counter(); // Count: 2


// 📌 Currying
// Definition: Converting a function with multiple arguments into a sequence of functions each taking one argument.

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(add(2)(3)(4)); // 9


// 📌 Objects & Operations
// Definition: Objects are collections of key-value pairs.

let person = { name: "Ravi", age: 21 };
console.log(person.name);
person.city = "Noida"; // adding property
delete person.age;     // deleting property
console.log(person);


// 📌 Shallow vs Deep Copy
// - Shallow Copy: Copies only first-level properties, nested objects share same reference.
// - Deep Copy: Creates a completely independent copy.

let obj1 = { a: 1, b: { c: 2 } };

let shallow = { ...obj1 };
shallow.b.c = 100;
console.log(obj1.b.c); // 100 (affected)

let deep = JSON.parse(JSON.stringify(obj1));
deep.b.c = 200;
console.log(obj1.b.c); // 100 (not affected)


// 📌 Higher Order Functions (HOF)
// Definition: A function that takes another function as argument or returns a function.

function hof(fn) {
  fn();
}
hof(() => console.log("Hello from HOF"));

// Example with array methods
let arr = [1, 2, 3, 4];
let doubled = arr.map((n) => n * 2);
console.log(doubled);


// 📌 Callbacks
// Definition: A callback is a function passed as an argument to another function and executed later.

function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched!");
  }, 1000);
}

fetchData((msg) => console.log(msg));


// 📌 Promises (Intro)
// Definition: A Promise is an object that represents the eventual completion or failure of an asynchronous task.

let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Task done ✅");
  } else {
    reject("Task failed ❌");
  }
});

promise
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

