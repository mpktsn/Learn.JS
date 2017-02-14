'use strict';

/* 

Write a cycle which outputs prime numbers within set range.
Range is predefined by variables, not input.

*/

var leftInterval  = 2;
var rightInterval = 100;
var i; // current number
var j; // inner cycle - for 2 to j-1 if there is a 'leftover' then continue.
var result = ''; //string for result output.

nextPrime:
for (i = leftInterval; i < rightInterval; i++) {
  for (j = 2; j < i; j++) {
    if (i % j == 0) {    
      continue nextPrime;
    }
  }
  result += ' | ' + String(i);
}
console.log(result);