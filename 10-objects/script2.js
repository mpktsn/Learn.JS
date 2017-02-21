'use strict';

/* 

Write a function isEmpty(obj), which returns true, 
if it contains no properties and false – if there is at least one.

It must work like in example below:

function isEmpty(obj) {
  // your code
}

var schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get-up";

alert( isEmpty(schedule) ); // false

*/

function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}