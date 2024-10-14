// Разбор библиотеки Lodash
const lodash = require('lodash');

// 1. Easy
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let underArrays = lodash.chunk(array, 3);

console.log(underArrays);

lodash.fill(underArrays[1], 0, 0, 3);

console.log(underArrays);

// 2. Medium

let unitedArray = [2, 3, 3, 4, 5, 5, 6];

let uniqueArray = lodash.uniq(unitedArray);

console.log(uniqueArray);

// 3. Hard

let firstObj = {
    a: 1,
    b: 2
}

let secondObj = {
    b: 3,
    c: 4
}

console.log(lodash.merge(firstObj, secondObj));

// 4. Ultimate

let people = [{name: 'John', age: 25},
    {name: 'Jane', age: 30}, {name: 'Jim', age: 20}];

console.log(lodash.orderBy(people, "age", "desc"));