'use strict';

/* 
1) Get the last element of array of variable length. getLatestElementOfArray()
2) Put the new element into array. putNewElementToArray()
*/

var goods = [];

// fill the array with trash data
// (we won't use the variable fordetermining the length of array)
var arrayLength = 12;

for (var i = 0; i < arrayLength; i++) {
    goods[i] = i * Math.random();
}
//debug
console.log(goods);

function getLatestElementOfArray(array) {
    return array[array.length - 1];
}

function putNewElementToArray(array, element) {
    array.push(element);
}

// outputs
console.log(getLatestElementOfArray(goods));
console.log(putNewElementToArray(goods, "Computor") + goods);