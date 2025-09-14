// ==================================================
// 📌 Lecture 2 – Async, Promises & OOP in JavaScript
// ==================================================

// ==================================================
// 1. Promises – Definition
// --------------------------------------------------
// A Promise in JS represents the eventual completion 
// (or failure) of an asynchronous operation.
// It has 3 states: 
//   - Pending (initial state)
//   - Fulfilled (resolved successfully)
//   - Rejected (failed)
//
// Syntax: new Promise((resolve, reject) => {...})
// ==================================================

// Example: Creating a custom Promise
function fetchData(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("✅ Data fetched successfully");
      } else {
        reject("❌ Failed to fetch data");
      }
    }, 2000);
  });
}

// Consuming the promise
fetchData(true)
  .then((result) => console.log(result))   // runs if resolved
  .catch((error) => console.log(error))   // runs if rejected
  .finally(() => console.log("🎯 Done")); // runs always


// ==================================================
// 2. Fetch API – Definition
// --------------------------------------------------
// fetch() is a built-in function in JS to make 
// HTTP requests. It returns a Promise which resolves 
// to the Response object.
// ==================================================

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json()) // convert response body into JSON
  .then((data) => console.log("Fetched Data:", data))
  .catch((error) => console.log(error));


// ==================================================
// 3. Async/Await – Definition
// --------------------------------------------------
// async/await is syntactic sugar over Promises. 
// It makes async code look synchronous.
// - async keyword: makes a function return a Promise.
// - await keyword: pauses execution until the promise resolves.
// ==================================================

async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log("Using async/await:", data);
  } catch (error) {
    console.log(error);
  }
}
getData();


// ==================================================
// 4. Promise Methods – Definitions
// --------------------------------------------------
// - Promise.all([...]) → resolves when all succeed, rejects if any fails
// - Promise.allSettled([...]) → resolves after all settle (success/failure)
// - Promise.race([...]) → returns first settled (resolve/reject)
// - Promise.any([...]) → returns first resolved, ignores rejections
// ==================================================

const p1 = Promise.reject("p1 ❌");
const p2 = Promise.reject("p2 ❌");
const p3 = Promise.resolve("p3 ✅");

// Example: Promise.all
Promise.all([p1, p2, p3])
  .then((result) => console.log("All Success:", result))
  .catch((error) => console.log("At least one failed:", error));

// Example: Promise.allSettled
Promise.allSettled([p1, p2, p3])
  .then((result) => console.log("All Settled:", result));

// Example: Promise.race
const fast = new Promise((resolve) => setTimeout(() => resolve("⚡ Fast"), 1000));
const slow = new Promise((_, reject) => setTimeout(() => reject("🐢 Slow"), 2000));

Promise.race([fast, slow])
  .then((result) => console.log("Race Winner:", result))
  .catch((error) => console.log("Race Error:", error));

// Example: Promise.any
Promise.any([p1, p2, p3])
  .then((result) => console.log("Any Success:", result))
  .catch((error) => console.log("All failed:", error));


// ==================================================
// 5. Function Borrowing – Definition
// --------------------------------------------------
// JS functions are objects, and we can borrow methods 
// from one object and use them on another using:
//   - call() → invoke immediately, pass args one by one
//   - apply() → invoke immediately, pass args as array
//   - bind() → returns new function with fixed this
// ==================================================

const person = {
  name: "manish",
  getName: function (salary, company) {
    console.log(`${this.name} earns ${salary} at ${company}`);
  },
};

const person2 = { name: "manish2" };

person.getName.call(person2, 100000, "Google"); // call
person.getName.apply(person2, [200000, "Microsoft"]); // apply
const boundFunc = person.getName.bind(person2, 300000, "Amazon"); // bind
boundFunc();


// ==================================================
// 6. OOP in JavaScript – Definition
// --------------------------------------------------
// Object-Oriented Programming in JS is implemented 
// via classes & prototypes.
// Main Concepts:
//   1. Encapsulation → combine data + methods
//   2. Inheritance → reuse parent class in child
//   3. Polymorphism → same method, different behavior
//   4. Abstraction → hide implementation details
// ==================================================

// Encapsulation Example
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  print() {
    console.log(this.name, this.age);
  }
}
const per = new Person("vikas", 25);
per.print();

// Inheritance Example
class Student extends Person {
  constructor(name, age, course) {
    super(name, age); // calling parent constructor
    this.course = course;
  }
  study() {
    console.log(`${this.name} is studying ${this.course}`);
  }
}
const stu = new Student("vijay", 25, "MERN");
stu.print();
stu.study();

// Polymorphism Example
class Animal {
  speak() {
    console.log("General noise");
  }
}
class Dog extends Animal {
  speak() {
    console.log("🐶 Bhaw Bhaw");
  }
}
class Cat extends Animal {
  speak() {
    console.log("🐱 Meow Meow");
  }
}
[new Dog(), new Cat()].forEach((pet) => pet.speak());

// Abstraction Example
class BankAccount {
  #balance = 0; // private property
  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited: ${amount}`);
  }
  checkBalance() {
    return this.#balance;
  }
}
const acc = new BankAccount();
acc.deposit(100);
console.log(acc.checkBalance()); // ✅ Works
// console.log(acc.#balance); // ❌ Error: private
