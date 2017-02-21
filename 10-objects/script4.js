'use strict';

/* 
Max property value.

There is 'salaries' object with salaries.
Write a code which outputs the employee's name with highest salary.

If object is empty, it must output "no employees".
*/

var salaries = {
  "Vasya": 100,
  "Petya": 300,
  "Dasha": 250
};

function getMaxValue(obj) {
  var max = 0;
  var counter = 0;
  for (var key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      counter++;
    }
  }
  if (counter == 0) return "no employees";
  return max;
}

console.log(getMaxValue(salaries));