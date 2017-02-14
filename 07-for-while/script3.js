'use strict';

/* 

Write a cycle which prompts for number greater than 100.
If number is <= 100 then re-prompt the input.

Cycle must prompt a number until user enters value > 100
or presses Cancel button.

It's assumed that user inputs numbers only, and 
processing non-number inputs is not required.

*/

while (true) {
  var value = prompt("Enter number:");
  if (value > 100) break;
}

console.log("Last stored value: " + value);