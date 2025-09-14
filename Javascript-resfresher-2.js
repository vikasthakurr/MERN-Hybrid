// function fetchData(success) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (success) {
//         resolve("Data fetched successfully");
//       } else {
//         reject("Failed to fetch data");
//       }
//     }, 3000);
//   });
// }
// fetchData(true)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Done");
//   });

// fetch("https://jsonplaceholder.typicode.com/todos/1")
  // console.log(fetch)
//   .then((response) => response.json())
//   .then((json) => console.log(json))
//   .catch((error) => console.log(error));

// async function getData() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1",
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getData();

//every async function when it goes into process it will return a promise..
//promises method....

// const p1 = Promise.reject("p1");
// const p2 = Promise.reject("p2");
// const p3 = Promise.resolve("p3");

//promise.all will return all the promises at once
//if any of the promises fails, it will return the error

// Promise.all([p1, p2, p3])
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

//promise.allSettled will return all the promises at once
// Promise.allSettled([p1, p2, p3])
// .then((result) => console.log(result))
// .catch((error) => console.log(error));

//promise.race will return the first promise that resolves or rejects
// Promise.race([p1, p2, p3])
// .then((result) => console.log(result))
// .catch((error) => console.log(error));

// const fast = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("fast");
//   }, 1000);
// });

// const slow = new Promise((reject) => {
//   setTimeout(() => {
//     reject("slow");
//   }, 1000);
// });

// Promise.race([fast, slow]).then((result) => console.log(result));

//promise.any

// const p1 = Promise.reject("p1");
// const p2 = Promise.reject("p2");
// const p3 = Promise.reject("p3");
// const p4 = Promise.reject("p4");

// Promise.any([p1, p2, p3,p4])
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

//task
// const data = { name: "test", age: 21, address: "noida" };

// function getData(success) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (success) {
//         resolve(data);
//       } else {
//         reject("Error: Failed to fetch data");
//       }
//     }, 1000);
//   });
// }

// getData(true)
//   .then((result) => {
//     console.log("Success:", result);
//   })

//   .catch((error) => {
//     console.error(error);
//   });

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     const data = [
//       {
//         username: "manish",

//         password: "1234",
//       },
//     ];

//     reject(data);
//   });
// }

// fetchData()
//   .then((data) => console.log(data))

//   .catch((err) => console.log(err));

//function borrowing...

// const person = {
//   name: "manish",
//   age: 21,
//   getName: function (salary, company) {
//     console.log(this.name, salary, company);
//   },
// };
// person.getName();

// const person2 = {
//   name: "manish2",
//   age: 22,
// };

//call method of function borrowing...

// person.getName.call(person2, 100000, "google");

//apply method of function borrowing...
// person.getName.apply(person2, [100000, "google"]);

//bind method

// const res = person.getName.bind(person2, [100000, "google"]);
// res();

// const person = {
//   name: "vikas",
//   sayMyName() {
//     console.log(`My name is ${this.name}`);
//   },
// };

// setTimeout(person.sayMyName.bind(person), 2000);

//prototype behave
// oops concept

//encapsulation.....
// data+method comes together in a single unit is called encapsulation

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   print() {
//     console.log(this.name, this.age);
//   }
// }

// const res = new Person("vikas", 25);
// res.print();

//inheritance for reusable code.....

// class Student extends Person {
//   constructor(name, age, course) {
//     super(name, age);
//     this.course = course;
//   }
//   study() {
//     console.log(`${this.name} is studying ${this.course}`);
//   }
// }

//consume of this inheritance

// const res = new Student("vijay", 25, "mern-weekdays");
// res.print();
// res.study();

//polymorphism...

// class Animal {
//   speak() {
//     console.log("General noise");
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log("bhawu bhawu 🐶");
//   }
// }
// class Cat extends Animal {
//   speak() {
//     console.log("meow meow 🐱");
//   }
// }
// class Cow extends Animal {
//   speak() {
//     console.log("moo moo 🐮");
//   }
// }
// let result = [new Dog(), new Cat(), new Cow()];
// result.forEach((pet) => pet.speak());

//abstraction is a process of hiding the implementation details and showing only the functionality to the user

// class BankAccount {
//   #balance = 0; //private property

//   deposit(amount) {
//     this.#balance += amount;
//     console.log(`Deposited ${amount}`);
//   }
//   checkBalance() {
//     return this.#balance;
//   }
// }

// const account = new BankAccount();
// account.deposit(100);
// console.log(account.checkBalance());
// console.log(account.#balance);
