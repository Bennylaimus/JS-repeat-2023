// https://www.youtube.com/watch?v=RVxuGCWZ_8E&t=171s

// forEach
// map
// filter
// concat
// find
// findIndex
// indexOf
// lastIndexOf
// some
// every
// includes
// push
// unshift
// pop
// shift
// toString
// join
// fill
// copyWithin
// slice
// splice
// sort
// reverse
// from
// isArray
// valueOf
// entries
// keys
// values
// reduce
// reduceRight
// flat
// flatMap

// ==========================

// let user = {
//     name: 'John',
//     age: 30,
//     passed: true,
// };

// user.isAdmin = false;
// user.adress = 'Kronvalda street 1-2';
// user["have permission"] = true;

// delete user.isAdmin;

// console.log(user);
// console.log(user["have permission"]);

// ====================================

// let key = prompt('What info would you like to know?', 'name');

// console.log(user[key]);

// =====================================

// let fruits = prompt('What fruits are you bought?', 'melon');

// let bag = {
//     place: 'Wallmart',
//     address: 'Kinsington street 1-2, New Hamshire',
//     isOpen: true,
//     [fruits]: 5,
//     [fruits + 'Computers']: 15,
// };

// console.log(bag.melonComputers); // 5

// ======================================

// let createUser = function (name, age, address) {
//     return {
//         name: name,
//         age: age,
//         address: address,
//     }
// };

// let user = createUser('Andrew', 30, 'Kronvalda street 1-2');

// console.log(user);

// let newUser = function (name, age, isAdmin) {
//     return {
//         name,
//         age: 30,
//         isAdmin,
//     }
// }

// let user = newUser('Andrew', 30, true);

// console.log(user);

// console.log('age' in user); // true

// let placeOfLiving = "address";

// console.log(placeOfLiving in user); // true

// ============================================================

// let createUser = function (name, age, address) {
//     return {
//         name: name,
//         age: age,
//         address: address,
//     }
// };

// let user = createUser('Andrew', 30, 'Kronvalda street 1-2');

// console.log(user);

// for (let keyValue in user) {
//     console.log(keyValue, ':', user[keyValue]);
// };

// let user = {}; // or let user = new Object();
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name

// console.log(user);

// let schedule = {};

// console.log(schedule);

// function isEmpty(object) {
//     if (object.property === 'undefined') {
//         return true
//     } false
// };

// console.log(isEmpty(schedule));

// let salaries = {
//     Pete: 300,
//     Ann: 500,
//     Ingrid: 600,
// };

// let sum = 0;
// for (let salary in salaries) {
//     sum += salaries[salary];
// };

// console.log(sum);

// let menu = {
//     width: 200,
//     height: 400,
//     title: "My menu",
// };

// function check(object) {
//     for (let value in object) {
//         if (typeof object[value] === 'number') {
//             object[value] = object[value] * 2
//         }
//     }
// };

// check(menu);

// console.log(menu);

// let superUser = {
//     name: 'Andrew',
//     nameTwo: 'Yury',
// };

// // let check = Object.keys(superUser).length;
// // console.log(check);

// function isEmpty(object) {
//     if (Object.keys(object).length === 0) {
//         return true
//     } else {
//         return false
//     }
// };

// console.log(isEmpty(superUser));

// let newUser = {
//     name: 'John',
//     age: 30,
// };

// console.log(newUser);

// let userClone = {};

// for (let property in newUser) {
//     userClone[property] = newUser[property];
//     console.log(userClone[property]);
// };

// console.log(userClone);

// let objOne = {};

// let ObjTwo = {
//     name: 'Andrew',
//     age: 50,
// };

// let ObjThree = {
//     lastName: 'Yuri',
//     isAdmin: true,
// };

// console.log(Object.assign(objOne, ObjTwo, ObjThree));

// const realObj = {
//     name: 'Andrew',
//     age: 40,
//     isAdmin: true,
// };

// const cloneObj = Object.assign({}, realObj);

// console.log(realObj);
// console.log(cloneObj);

// realObj.name = 'Yuri';
// console.log(realObj);

// cloneObj.isAdmin = false;
// console.log(cloneObj);

// let user = {
//     name: 'Andrew',
//     age: 30,
//     isAdmin: true,
//     address: {
//         street: 'Kronvalda street 1-2',
//         zip: 'LV2150',
//         city: 'Sigulda',
//         contry: 'Latvia',
//     },
//     car: 'BWN',
// };

// console.log(user.address.city);

// let cloneObject = structuredClone(user);

// console.log(cloneObject);

// let ourUser = {
//     name: 'Andrew',
//     age: 30,
//     isAdmin: true,
//     saysHello() {
//         console.log(`Oh, hello there ${this.name}`);
//     }
// };

// // ourUser.saysHello = function () {
// //     console.log('Hello, everyone!');
// // };

// console.log(ourUser);

// ourUser.saysHello();

// function makeUser() {
//     return {
//         name: 'John',
//         ref: this
//     };
// }

// let user = makeUser();

// // console.log(user);

// // makeUser();

// console.log(user.ref.name);

// let calculator = {
//     num1: 0,
//     num2: 0,
//     read() {
//         this.num1 = parseInt(prompt('Enter your first number'));
//         this.num2 = parseInt(prompt('Enter your second number'));
//     },
//     sum() {
//         alert(this.num1 + this.num2);
//     },
//     multiply() {
//         alert(this.num1 * this.num2);
//     },
// };

// calculator.read();
// calculator.sum();
// calculator.multiply();

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep: function () {
//         alert(this.step);
//         return this;
//     },
// };

// // ladder.up();
// // ladder.up();
// // ladder.down();
// // ladder.showStep();
// // ladder.down();
// // ladder.showStep();

// ladder.up().up().down().showStep().down().showStep();

// function User(name) {
//     this.name = name;
//     this.age = 30;
//     this.status = 'isAdmin';
// };

// let user = new User('Pete');

// console.log(user.name);
// console.log(user.age);
// console.log(user.status);

// this = {}

// this.name = 'Pete';
// this.age = 30;
// this.status = 'isAdmin';

// return this (a 'this' это user{});

// let user = new function () {
//     this.name = 'Andrew';
//     this.age = 50;
//     this.status = 'notAdmin';
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.status);

// function One(name) {
//     this.name = name;
//     this.status = 'isAdmin';
//     return new Two('Pete');
// };

// function Two(name) {
//     this.name = name;
//     this.status = 'notAdmin';
// };

// let userOne = new One('John');
// let userTwo = new Two('Pete');

// console.log(userOne);
// console.log(userTwo);

// console.log(userOne == userTwo); // false

// let myObject = {
//     name: 'huj',
//     age: 30,
// };

// function UserOne() {
//     return myObject;
// };

// function UserTwo() {
//     return myObject;
// }

// let user1 = new UserOne();
// let user2 = new UserTwo();

// console.log(user1 == user2); // true

// function Calculator() {
//     this.num1 = 0;
//     this.num2 = 0;
//     this.read = function () {
//         num1 = +prompt('Enter first number');
//         num2 = +prompt('Enter second number');
//     };
//     this.sum = function () {
//         alert('Sum = ' + (num1 + num2));
//     };
//     this.multiply = function () {
//         alert('Multiply = ' + num1 * num2);
//     };
// };

// let calculator = new Calculator();

// calculator.read();
// calculator.sum();
// calculator.multiply();

// function Accumulator(firstNumber) {
//     this.startingValue = firstNumber; // accumulator.startingValue = 20;
//     this.addingFirstValue = 0;
//     this.addingSecondValue = 0;
//     this.firtsAdd = function () {
//         this.addingFirstValue = +prompt('How much you want to add?');
//     };
//     this.secondAdd = function () {
//         this.addingSecondValue = +prompt('How much you want to add?');
//         alert(this.startingValue + this.addingFirstValue + this.addingSecondValue);
//     };
// };

// let accumulator = new Accumulator(20);

// accumulator.firtsAdd();
// accumulator.secondAdd();
//===============================================================

// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function () {
//         this.value += +prompt('Сколько нужно добавить?', 0);
//     };
// };

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);
