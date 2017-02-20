'use strict';

/* 

Write a ucFirst(str) function which returns a string, with
first letter capitalized.

*/

var string = '';

string = prompt('Enter string: ', '');

console.log(ucFirst(string));

function ucFirst(str) {
    
    if (!str) return '';
    var result = str.replace(str.charAt(0), str.charAt(0).toUpperCase());
    return result;
}