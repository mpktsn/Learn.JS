'use strict';

console.log("isInteger function. Argument - number.");

/*
Assignment: 
Write a function isInteger(num), which returns true, 
if num – is integer, or else - false.

Strategy - 
1) save 2 instances of argument.
2) truncate the fraction of argument number
(by xor^ 0)
3) divide one number at another. if = 1 then argument is 
an integer, well if > 1, then not.
*/

function isInteger(num) {
    var arg1, arg2;
    arg1 = arg2 = num;
    arg2 = (arg2 ^ 0);
    if ((arg1/arg2) === 1) {
        return true;
    } else {
        return false;
    }
}

/* However the answer was much more simple:

function isInteger(num) {
  return (num ^ 0) === num;
}

SHITCODE FTW!
*/