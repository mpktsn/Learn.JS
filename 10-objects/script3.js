'use strict';

/* 
Sum of properties.

Salaries object contains "salary". Write a code which outputs sum
of all salaries. If object is empty - result must be zero.

*/

var salaries = {
  "Vasya": 100,
  "Petya": 300,
  "Dasha": 250
};

function getSum(salaries) {
  var sum = 0;
  for (var name in salaries) {
    sum += salaries[name];
  }
  return sum;
}

console.log(getSum(salaries));