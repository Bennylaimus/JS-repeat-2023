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

let schedule = {
    name: 'Pete',
};

function isEmpty(objectName) {
    for (let key in objectName) {
        if (objectName[key] === 'undefined') {
            return true
        } false
    }
}

console.log(isEmpty(schedule));